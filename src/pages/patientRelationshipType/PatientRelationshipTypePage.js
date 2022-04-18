import { useParams } from "react-router-dom";
import CommonPage from "../../components/CommonPage";
import PatientRelationshipForm from "./PatientRelationshipForm";
import PatientRelationshipTypes from "./PatientRelationshipTypes";

export default function PatientRelationshipTypePage() {
  const { id } = useParams();

  return (
    <CommonPage
      id={id}
      title="Patient Relationship Management"
      displayAll={<PatientRelationshipTypes />}
      displayForm={<PatientRelationshipForm id={id} />}
    />
  );
}
