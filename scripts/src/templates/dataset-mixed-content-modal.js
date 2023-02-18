export default (resourceUrl, originalDatasetUrl) => {
    return `<div class="modal fade" tabindex="-1" role="dialog" id="mixed-content-warning-modal">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Mixed content warning</h4>
      </div> 
      <div class="modal-body">
        <p>This resource link is only served over HTTP. As such, we can not link to it as most modern browsers do not allow direct links from HTTPS secured sites to HTTP sites for security reasons.</p>
        <p>To access the resource, please copy the following URL and paste it into the address bar of your browser:</p>
        <pre>${resourceUrl}</pre>
        <p>Alternatively, you can access the resource via the <a href="${originalDatasetUrl}" target="_blank">original dataset link</a>.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>`
}
