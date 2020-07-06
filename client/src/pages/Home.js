import React from "react";
import { Card } from "../components";
export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>home will show card with all todo list</h1>
      <div style={styles.allCard}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

const styles = {
  allCard: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "10px 10px"
  }
};
