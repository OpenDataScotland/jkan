export default (data) => (
`<a href="${data.url}" class="list-group-item${data.selected ? ' active ' : ''} list-group-item-action justify-content-between align-items-center" style="display: flex;">
  <span class="d-inline-block text-truncate">${data.title}</span>
  <span class="badge text-bg-secondary">${data.count}</span>
  ${data.selected ? '<span class="badge text-bg-secondary"><i class="fa-solid fa-times"></i></span>' : ''}
</a>`
)
