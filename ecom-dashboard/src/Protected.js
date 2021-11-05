import Header from "./Header";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Protected(props) {
  const history = useHistory();
  let Cmp = props.Cmp;
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history.push("/register");
    }
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
}
export default Protected;
