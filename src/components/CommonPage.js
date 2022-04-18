import React from "react";
import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  pageHeight: {
    overflow: "auto",
    height: "90vh"
  },
  pageTitle: {
    textAlign: "center",
    fontSize: "20px",
    margin: "2vh",
    padding: "10px",
    textTransform: "capitalize",
    fontWeight: "bolder",
    color: "white",
    backgroundColor: blue["A700"],
    "&:hover": {
      backgroundColor: blue[900]
    }
  }
}));

function CommonPage(props) {
  const { id, title, displayAll, displayForm } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.pageHeight}>
        <p className={classes.pageTitle}>{title}</p>
        {id === "all" && displayAll}
        {id !== "all" && displayForm}
      </div>
    </>
  );
}

export default CommonPage;
