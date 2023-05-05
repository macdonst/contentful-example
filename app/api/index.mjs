// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
 * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
 */

import contentful from 'contentful'

/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_TOKEN
  })

  try {
    const { items } = await client.getEntries()
    return {
      json: { items }
    }
  } catch (error) {
    console.log(error)
    return {
      json: {}
    }
  }


}
