export default function BlogPosts({ html, state }) {
  const { store } = state
  const { items } = store

  const cards = items
    .map((o, i) => `<blog-card key="${i}">post</blog-card>`)
    .join('')

  return html`
        <section class="m-auto pt0 pb0">
          ${cards}
        </section>
      `
}
