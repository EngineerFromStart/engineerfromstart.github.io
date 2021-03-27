import React from "react"
import Header from "../components/header"
import * as AboutCSS from "./about.module.css"

export default function About() {
	const User = props => (
		  <div className={AboutCSS.user}>
			<img src={props.avatar} className={AboutCSS.avatar} alt="" />
			<div className={AboutCSS.description}>
			  <h2 className={AboutCSS.username}>{props.username}</h2>
			  <p className={AboutCSS.excerpt}>{props.excerpt}</p>
			</div>
		  </div>
		)
	
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <p>Such wow. Very React.</p>
	  
	  <User
        username="Maria Randall"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Daniela Dewitt"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
        excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </div>
  )
}