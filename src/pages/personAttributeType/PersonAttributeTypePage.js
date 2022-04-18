import { useParams } from "react-router-dom";
import CommonPage from "../../components/CommonPage";
import PersonAttributeForm from "./PersonAttributeForm";
import PersonAttributeTypes from "./PersonAttributeTypes";

export default function PersonAttributeTypePage() {
  const { id } = useParams();

  return (
    <CommonPage
      id={id}
      title="Person Attribute Management"
      displayAll={<PersonAttributeTypes />}
      displayForm={<PersonAttributeForm id={id} />}
    />
  );
}
