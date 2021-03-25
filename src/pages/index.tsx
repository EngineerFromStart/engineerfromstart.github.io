import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { PageProps } from "gatsby"

export default function Home(props: PageProps) {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Welcome to my world" />
      <p>What a world.</p>
      {props.path}
    </div>
  );
}
