import { MenuItem, MenuList, Paper, makeStyles } from "@material-ui/core";
import React from "react";
import { blue } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "20%",
    height: "100%",
    backgroundColor: "#B7CADB",
    color: "white"
  },
  paper: {
    margin: "2vh",
    marginTop: "12vh",
    height: "100vh"
  }
}));

export default function SideMenu() {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>
            <Link
              to="/addressHierarchyLevel/all"
              style={{ textDecoration: "none" }}
            >
              Address Hierarchy
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/concept/all" style={{ textDecoration: "none" }}>
              Concepts
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/drug/all" style={{ textDecoration: "none" }}>
              Medication Data
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/patientRelationshipType/all"
              style={{ textDecoration: "none" }}
            >
              Patient Relationships
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              to="/personAttributeType/all"
              style={{ textDecoration: "none" }}
            >
              Person Attributes
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/user/all" style={{ textDecoration: "none" }}>
              Users
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/visitType/all" style={{ textDecoration: "none" }}>
              Visit Types
            </Link>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
