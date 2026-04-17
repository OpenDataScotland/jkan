import clip from "text-clipper";

export default (data) => {
  const resources = [... new Set(data.resources.map(function (res) { return `<span class="badge filetype-list-item">${res.format.toUpperCase()}</span>` }))].join('');
  const clippedHtml = clip(data.notes, 450, { html: true, maxLines: 1 });

  var formattedDate = "Unknown";

  const parsedDate = new Date(data.date_updated);

  if (parsedDate != "Invalid Date") {
    formattedDate = parsedDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
  }
  else {
    console.debug(`Could not parse date: ${data.date_updated}`)
  }

  return `<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  <h4>${data.organization || ''}</h4>
  <div class="dataset-item-description">${clippedHtml || ''}</div>
  <div class="dataset-item-resource-types">${resources}</div>
  <div><strong>Last updated: </strong>${formattedDate}</div>
</dataset>`
}
