import { CssBaseline, makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import AddressHierarchyLevelPage from "../pages/addressHierarchyLevel/AddressHierarchyLevelPage";
import PatientRelationshipTypePage from "../pages/patientRelationshipType/PatientRelationshipTypePage";
import PersonAttributeTypePage from "../pages/personAttributeType/PersonAttributeTypePage";
import VisitTypePage from "../pages/visitType/VisitTypePage";
import DrugPage from "../pages/drug/DrugPage";
import UserPage from "../pages/user/UserPage";

import "./App.css";
import ConceptPage from "../pages/concept/ConceptPage";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "20%",
    width: "100%",
    backgroundColor: "#B7CADB"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <Header />
      <div className={classes.appMain}>
        <Switch>
          <Route path="/patientRelationshipType/:id">
            <PatientRelationshipTypePage />
          </Route>
          <Route path="/personAttributeType/:id">
            <PersonAttributeTypePage />
          </Route>
          <Route path="/addressHierarchyLevel/:id">
            <AddressHierarchyLevelPage />
          </Route>
          <Route path="/visitType/:id">
            <VisitTypePage />
          </Route>
          <Route path="/drug/:id">
            <DrugPage />
          </Route>
          <Route path="/concept/:id">
            <ConceptPage />
          </Route>
          <Route path="/user/:id">
            <UserPage />
          </Route>
          {/* <Route path="/">
            <TestAutoComplete />
          </Route> */}
        </Switch>
      </div>
      <CssBaseline />
    </>
  );
}
