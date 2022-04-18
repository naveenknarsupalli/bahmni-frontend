import { useParams } from "react-router-dom";
import CommonPage from "../../components/CommonPage";
import DrugForm from "./DrugForm";
import Drugs from "./Drugs";

export default function PatientRelationshipTypePage() {
  const { id } = useParams();

  return (
    <CommonPage
      id={id}
      title="Medication Data: Drugs Management"
      displayAll={<Drugs />}
      displayForm={<DrugForm id={id} />}
    />
  );
}
