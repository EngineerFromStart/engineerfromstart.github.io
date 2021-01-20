import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Welcome to my world" />
      <p>What a world.</p>
    </div>
  );
}
