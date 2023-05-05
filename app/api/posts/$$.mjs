import contentful from 'contentful'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const id = req.path.replace(/^\/?posts\//, '') || 'index'

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_TOKEN
  })

  const item = await client.getEntry(id)

  return {
    json: {
      item
    },
  }
}
