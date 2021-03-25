import React from "react"
import { Link } from "gatsby"
import Container from "./container"

export default function Header(props) {
	
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
	
  return (
		<Container>
			<h1>{props.headerText}</h1>
			<ul>
			<ListLink to="/" >Home</ListLink>
			<ListLink to="/about/" >About</ListLink>
			</ul>
		</Container>
	)
}