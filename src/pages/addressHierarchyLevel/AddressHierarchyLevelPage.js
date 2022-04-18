import { useParams } from "react-router-dom";
import CommonPage from "../../components/CommonPage";
import AddressHierarchyLevels from "./AddressHierarchyLevels";

export default function AddressHierarchyLevelPage() {
  const { id } = useParams();

  return (
    <CommonPage
      id={id}
      title="Address Hierarchy Management"
      displayAll={<AddressHierarchyLevels />}
    />
  );
}
