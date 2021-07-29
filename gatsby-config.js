require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options:{
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency:5,
        tables:[
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Cities`,
            mapping:{image: `fileNode`}
          },
        ]
      }
    },
  ],
}
