import { useParams } from "react-router-dom";
import CommonPage from "../../components/CommonPage";
import VisitTypeForm from "./VisitTypeForm";
import VisitTypes from "./VisitTypes";

export default function VisitTypePage() {
  const { id } = useParams();

  return (
    <CommonPage
      id={id}
      title="Visit Type Management"
      displayAll={<VisitTypes />}
      displayForm={<VisitTypeForm id={id} />}
    />
  );
}
