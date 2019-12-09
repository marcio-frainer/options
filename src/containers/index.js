import React from "react";
import Header from "./header";
import Body from "./body";
import RightSide from "./rightSide";

const styles = {
  container: {
    display: "flex",
    background: "#88839D",
    flexDirection: "column",
    height: "100%",
    width: "100%"
  },
  inner: {
    display: "flex",
    background: "#88839D",
    flexDirection: "row"
  },
  header: {
    background: "#BEBACD",
    width: "80%",
    height: "400px",
    margin: "10px"
  },
  body: {
    background: "#BEBACD",
    width: "100%",
    height: "180px",
    borderColor: "white"
  },
  rightSide: {
    background: "#BEBACD",
    width: "20%",
    margin: "10px"
  }
};

export default props => {
  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        <Header style={styles.header} />
        <RightSide style={styles.rightSide} />
      </div>
      <Body style={styles.body} />
    </div>
  );
};
