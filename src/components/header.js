import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
		<div>
			<Link to="/" >Home</Link>
			<Link to="/about/" >About</Link>
			<h1>{props.headerText}</h1>
		</div>
	)
}