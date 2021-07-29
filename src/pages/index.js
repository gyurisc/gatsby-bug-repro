import React from "react"
import { graphql } from 'gatsby'

export default function Home({data}) {
  console.log(data);
  return <div>Hello world!</div>
}


export const query = graphql`
  {
    customers: allAirtable(
      filter: {table: {eq: "Customers"}}
      limit: 3
      sort: {order: ASC, fields: id}
    ) {
      nodes {
        id
        data {
          title
          quote
          name
          image {
              localFiles {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
                }
              }
            }
        }
      }
    }

    
  }
`