import clip from "text-clipper";

export default (data) => {
  const resources = [... new Set(data.resources.map(function (res) { return `<span class="badge text-bg-secondary rounded-pill me-1">${res.format.toUpperCase()}</span>` }))].join('');
  const clippedHtml = clip(data.notes, 450, { html: true, maxLines: 1 });

  var formattedUpdatedDate = "Unknown";
  var formattedPublishedDate = "Unknown";

  const parsedUpdatedDate = new Date(data.date_updated);
  const parsedPublishedDate = new Date(data.date_created);

  if (parsedUpdatedDate != "Invalid Date") {
    formattedUpdatedDate = parsedUpdatedDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
  }
  else {
    console.debug(`Could not parse date: ${data.date_updated}`)
  }

  if (parsedPublishedDate != "Invalid Date") {
    formattedPublishedDate = parsedPublishedDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
  }
  else {
    console.debug(`Could not parse date: ${data.date_created}`)
  }

  return `<dataset class="d-block border-bottom border-light-subtle py-3" >
  <h3><a href="${data.url}">${data.title}</a></h3>
  <h4>${data.organization || ''}</h4>
  <div class="dataset-item-description">${clippedHtml || ''}</div>
  <div class="mb-1">${resources}</div>
  <div><strong>Date published: </strong>${formattedPublishedDate} | <strong>Last updated: </strong>${formattedUpdatedDate}</div>
</dataset>`
}
