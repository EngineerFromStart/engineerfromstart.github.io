import { graphql, PageProps } from 'gatsby';
import React from 'react'

export default class AllFiles extends React.Component{
    constructor(props: PageProps){
        super(props);
    }

    render(){
        return (
            <div></div>
        )
    }
}

// export const query = graphql`
//   query {
//     allFile {
//       edges {
//         node {
//           relativePath
//           prettySize
//           extension
//           birthTime(fromNow: true)
//         }
//       }
//     }
//   }
// `