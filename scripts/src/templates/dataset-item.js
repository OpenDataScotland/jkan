import clip from "text-clipper";

export default (data) => {
  const resources = [... new Set(data.resources.map(function (res) { return `<span class="badge filetype-list-item">${res.format.toUpperCase()}</span>` }))].join('');
  const clippedHtml = clip(data.notes, 450, { html: true, maxLines: 1 });

  return `<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  <h4>${data.organization || ''}</h4>
  <div class="dataset-item-description">${clippedHtml || ''}</div>
  <div>${resources}</div>
</dataset>`
}
