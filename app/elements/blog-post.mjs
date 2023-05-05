/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { item } = store
  const { fields, sys } = item
  const { title, article } = fields
  const { createdAt } = sys

  return html`
        <style>
          h1, .date {
            text-align: var(--align-heading);
          }
        </style>
        <section class="m-auto pt0 pb0">
          <article class="h-entry font-body leading4 m-auto pt0 pb0 pt4-lg pb4-lg">
            <h1 class="p-name font-heading font-bold mb0 mb4-lg text3 text5-lg tracking-1 leading1">${title}</h1>
            <p class='date dt-published mb0 mb4-lg'>${createdAt}</p>
            <section slot="e-content doc">${article}</section>
          </article>
        </section>
    `
}
