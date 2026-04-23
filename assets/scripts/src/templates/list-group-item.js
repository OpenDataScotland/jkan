export default (data) => (
`<a href="${data.url}" class="list-group-item${data.selected ? ' active ' : ''} list-group-item-action align-items-center" style="display: flex;">
  <span class="d-inline-block text-truncate flex-grow-1">${data.title}</span>
  <span class="d-flex gap-1 ms-2 flex-shrink-0">
    <span class="badge text-bg-secondary">${data.count}</span>
    ${data.selected ? '<span class="badge text-bg-secondary"><i class="fa-solid fa-times"></i></span>' : ''}
  </span>
</a>`
)
