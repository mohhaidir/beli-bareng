import React from "react";
import homePic from "../assets/home-pic.png";

export default function Home() {
  return (
    <div data-testid="home-page">
      <img style={styles.pic} src={homePic} alt="none..." />
      <div style={styles.title}>
        <h1 style={styles.text}>Welcome To Todo List App</h1>
      </div>
    </div>
  );
}

const styles = {
  title: {
    textAlign: "center",
    margin: "40px"
  },
  text: {
    fontFamily: "Fondamento"
  },
  pic: {
    position: "relative",
    marginTop: "9%",
    width: "20%",
    marginLeft: "39%"
  }
};
