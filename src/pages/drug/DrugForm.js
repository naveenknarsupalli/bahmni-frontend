import { Grid } from "@material-ui/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Select from "react-select";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import { getConceptNames } from "../../services/conceptService";
import {
  deleteDrugById,
  getDrugById,
  insertDrug,
  updateDrugById
} from "../../services/drugService";

const initialFValues = {
  name: "",
  conceptId: "",
  combination: false,
  dosageForm: "",
  strength: null,
  maximumDailyDose: null,
  minimumDailyDose: null,
  retireReason: "",
  retired: false
};

const DrugForm = () => {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(null);
  const [options, setOptions] = useState([]);
  const [defaultConceptIdValue, setDefaultConceptIdValue] = useState(0);
  const [defaultDosageFormValue, setDefaultDosageFormValue] = useState(0);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? "" : "This field is required.";
    setErrors({
      ...temp
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    clearForm
  } = useForm(initialFValues, true, validate);

  useEffect(() => {
    const defaultConceptIdValue = options.filter(
      (option) => option.value === values.conceptId
    );
    setDefaultConceptIdValue(defaultConceptIdValue);
  }, [options, values.conceptId]);

  const loadDrugData = useCallback(async () => {
    const conceptNamesResponse = await getConceptNames();
    const options = [];
    Object.keys(conceptNamesResponse.data).forEach((key) => {
      options.push({
        value: conceptNamesResponse.data[key].conceptId,
        label: conceptNamesResponse.data[key].name
      });
    });
    setOptions(options);

    if (id !== "add") {
      const response = await getDrugById(id);
      console.log(response.data);

      setValues(response.data);
    } else {
      setValues(initialFValues);
    }
  }, [id, setValues]);

  useEffect(() => {
    loadDrugData();
  }, [loadDrugData]);

  const toggleRetired = () => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        retired: !prevValues.retired
      };
    });
  };

  const save = () => {
    const saveItem = async () => {
      var response;
      if (id === "add") {
        response = await insertDrug(values);
      } else {
        response = await updateDrugById(id, values);
      }
      if (response.status === 200 || response.status === 201) {
        setRedirect("/drug/all");
      }
    };
    saveItem();

    //   if (validate()){
    //     employeeService.insertEmployee(values)
    //     resetForm()
    // }
  };

  const reset = () => {
    loadDrugData();
  };

  const cancel = () => {
    setRedirect("/drug/all");
  };

  const deleteItem = () => {
    const deleteItemFunc = async () => {
      const response = await deleteDrugById(id);
      if (response.status === 204) {
        setRedirect("/drug/all");
      }
    };
    deleteItemFunc();
  };

  if (redirect) return <Redirect to={redirect} />;

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />

          <Controls.Checkbox
            label="Combination"
            name="combination"
            value={values.combination}
            onChange={handleInputChange}
          />

          <Controls.Input
            label="Strength"
            name="strength"
            value={values.strength}
            onChange={handleInputChange}
            type="number"
          />

          <Controls.Input
            label="Maximum Daily Dose"
            name="maximumDailyDose"
            value={values.maximumDailyDose}
            onChange={handleInputChange}
            type="number"
          />

          <Controls.Input
            label="Minimum Daily Dose"
            name="minimumDailyDose"
            value={values.minimumDailyDose}
            onChange={handleInputChange}
            type="number"
          />

          {/* concept id */}
          <div style={{ width: "300px", display: "inline-block" }}>
            <label htmlFor="conceptId">Concept: </label>
            <Select
              id="conceptId"
              name="conceptId"
              placeholder="Enter concept name or id"
              defaultValue={defaultConceptIdValue}
              // onChange={conceptIdChangeHandler.bind(this)}
              options={options}
              // filterOption={filterOptions}
            />
          </div>

          {/* dosage form */}
          <div style={{ width: "300px", display: "inline-block" }}>
            <label htmlFor="dosageForm">Dosage Form: </label>
            <Select
              id="dosageForm"
              name="dosageForm"
              placeholder="Enter concept name or id"
              defaultValue={defaultDosageFormValue}
              // onChange={conceptIdChangeHandler.bind(this)}
              options={options}
              // filterOption={filterOptions}
            />
          </div>

          <div>
            <Controls.SaveButton onClick={save} />
            <Controls.ResetButton onClick={reset} />
            <Controls.CancelButton onClick={cancel} />
          </div>
        </Grid>

        {id !== "add" && (
          <Grid item xs={6}>
            <Controls.Input
              label="Reason To Retire"
              name="retireReason"
              value={values.retireReason}
              onChange={handleInputChange}
              multiline
              rows={4}
            />
            <Controls.DeleteButton onClick={deleteItem} />
            <Controls.RetireButton
              retired={values.retired}
              onClick={toggleRetired}
            />
          </Grid>
        )}
      </Grid>
    </Form>
  );
};

export default DrugForm;
