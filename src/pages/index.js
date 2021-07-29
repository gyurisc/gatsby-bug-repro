import React from "react"
import { graphql } from 'gatsby'

export default function Home({data}) {
  console.log(data);
  return <div>Hello world!</div>
}


export const query = graphql`
  {
    cities: allAirtable(
      filter: {table: {eq: "Cities"}}
      limit: 3
      sort: {order: ASC, fields: id}
    ) {
      nodes {
        id
        data {
          Name
          population
          population_density
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
    
    
  }
`

// export const query = graphql`
//   {
//     cities: allAirtable(
//       filter: {table: {eq: "Cities"}}
//       limit: 3
//       sort: {order: ASC, fields: id}
//     ) {
//       nodes {
//         id
//         data {
//           name
//           population
//           population_density
//           image {
//             localFiles {
//               childImageSharp {
//                 gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
//               }
//             }
//           }
//         }
//       }
//     }

//     headphones: allAirtable(filter: {table: {eq: "Headphones"}}, limit: 3) {
//       nodes {
//         id
//         data {
//           name
//           has_a_detachable_cable
//           has_active_noise_cancellation__noise_control_
//           has_an_over_the_ear_form
//           image {
//             localFiles {
//               childImageSharp {
//                 gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
//               }
//             }
//           }
//         }
//       }
//     }

//     customers: allAirtable(
//       filter: {table: {eq: "Customers"}}
//       limit: 3
//       sort: {order: ASC, fields: id}
//     ) {
//       nodes {
//         id
//         data {
//           title
//           quote
//           name
//           image {
//               localFiles {
//                 childImageSharp {
//                   gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
//                 }
//               }
//             }
//         }
//       }
//     }

    
//   }
// `