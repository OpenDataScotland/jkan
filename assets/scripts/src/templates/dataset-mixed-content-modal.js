export default (resourceUrl, originalDatasetUrl) => {
  return `<div class="modal fade" id="mixed-content-warning-modal" tabindex="-1" aria-labelledby="mixed-content-warning-modal-label" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mixed-content-warning-modal-label">Mixed content warning</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>This resource link is only served over HTTP. As such, we can not link to it as most modern browsers do not allow direct links from HTTPS secured sites to HTTP sites for security reasons.</p>
        <p>To access the resource, please copy the following URL and paste it into the address bar of your browser:</p>
        <div class="input-group">
          <input type="text" class="form-control" readonly aria-label="HTTP resource URL" value="${resourceUrl}">
          <button class="btn btn-outline-secondary" type="button" id="mixed-content-warning-clipboard"><i class="fa-solid fa-clipboard"></i> Copy</button>
        </div>
        <p class="mt-3">Alternatively, you can access the resource via the <a href="${originalDatasetUrl}" target="_blank" rel="noopener noreferrer">original dataset link</a>.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
}
