import { useParams } from "react-router-dom";
import CommonPage from "../../components/CommonPage";
import Concepts from "./Concepts";
import ConceptForm from "./ConceptForm";

export default function ConceptPage() {
  const { id } = useParams();

  return (
    <CommonPage
      id={id}
      title="Concept Management"
      displayAll={<Concepts />}
      displayForm={<ConceptForm id={id} />}
    />
  );
}
