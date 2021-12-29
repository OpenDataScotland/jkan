export default (data) => (
`<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  <h4>${data.organization || ''}</h4>
  <div>${data.notes || ''}</div>
</dataset>`
)
