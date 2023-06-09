export default function BlogPost({ html, state }) {
  const { attrs, store } = state
  const { key } = attrs
  const { fields, sys } = store.items[key]
  const { title, author, description } = fields
  const { id, createdAt } = sys
  const href = `/posts/${id}`
  return html`
      <style>
        :host {
          display: block;
        }

        .avatar {
          width: 40px;
          aspect-ratio: 1 / 1;
        }
      </style>
      <a href="${href}" class="no-underline">
        <article class="pt0 pb0 pt4-lg pb4-lg">
          <div class="font-body leading3">
            <h1 class="font-heading font-bold leading1 text2 text3-lg tracking-1 mb0">${title}</h1>
            <p class="mb0">${description}</p>
            <p class="text-1 tracking1">
              ${createdAt}<br />
              ${author}
            </p>
          </div>
        </article>
      </a>
    `
}
