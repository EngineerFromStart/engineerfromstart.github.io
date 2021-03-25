import React from "react"
import Header from "../components/header"
import HeaderCSS from "../components/about.module.css"

export default function About() {
	const User = props => (
		  <div className={HeaderCSS.user}>
			<img src={props.avatar} className={HeaderCSS.avatar} alt="" />
			<div className={HeaderCSS.description}>
			  <h2 className={HeaderCSS.username}>{props.username}</h2>
			  <p className={HeaderCSS.excerpt}>{props.excerpt}</p>
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