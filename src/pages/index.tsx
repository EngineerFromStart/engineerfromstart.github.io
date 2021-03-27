import React from "react"
import { PageProps, graphql } from "gatsby"
import '../styles/styles.scss'
import Layout from '../components/layout'
export default class Home extends React.Component {

  constructor(props: PageProps) {
    super(props);
  }


  render() {
    return (
      <Layout pageProps={this.props} titles={this.props.data}></Layout>
    )
  };

}

export const query = graphql`
query {
  site {
    siteMetadata {
      titles{
        id
        title
      }
    }
  }
}
`