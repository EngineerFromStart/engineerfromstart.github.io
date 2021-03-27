import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import Logo from "./logo"

class ListLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-300">
				<Link to={this.props.to}>{this.props.children}</Link>
			</li>)
	}
}

export default class Header extends React.Component {
	constructor(props: string) {
		super(props);
	}

	render() {
		return (
			<nav className="bg-gray-700">
				<div className="flex items-center justify-between flex-wrap bg-teal p-3 pl-10">
					{/* LOGO */}
					<div className="flex items-center flex-no-shrink text-white mr-6">
						<Logo></Logo>
						<span className="font-semibold text-xl tracking-tight">
							{this.props.headerText}
						</span>
					</div>
					{/* Menu Button */}
					<div className="block sm:hidden">
						<button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
							<svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
						</button>
					</div>
					{/* Links / Buttons */}
					<div className="hidden sm:items-center sm:w-auto sm:flex">
						<ul className="text-sm sm:flex">
							<ListLink to="/" >Home</ListLink>
							<ListLink to="/about/" >Blog</ListLink>
							<ListLink to="/about/" >Experience</ListLink>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}