import { useParams } from "react-router-dom";
import CommonPage from "../../components/CommonPage";
import Users from "./Users";

export default function ConceptPage() {
  const { id } = useParams();

  return (
    <CommonPage
      id={id}
      title="Users"
      displayAll={<Users />}
      // displayForm={<DrugForm id={id} />}
    />
  );
}
