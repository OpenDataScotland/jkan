import $ from 'jquery'
import tmpDatasetMixedContentModal from '../templates/dataset-mixed-content-modal'

import { queryByHook } from '../util'

export default class {
  constructor(opts) {
    const elements = {
      resourceItem: queryByHook('resource-item', opts.el)
    }

    // Resource details links
    elements.resourceItem.each((index, item) => {
      if ($('table tr', item).length) {
        queryByHook('show-resource-details', item).show()
      }
    })
    elements.resourceItem.on('click', '[data-hook~=show-resource-details]', (e) => {
      $(e.currentTarget).closest('[data-hook~=resource-item]').children('[data-hook~=resource-details]').toggle()
      e.preventDefault()
    })

    // Mixed content catcher for HTTP links
    elements.resourceItem.on('click', 'a', (e) => {
      const currentLink = e.currentTarget.href;
      if (currentLink.startsWith('http://')) {
        // Prevent link nav because it will fail anyways
        e.preventDefault();

        // Grab the original dataset link
        const originalDatasetUrl = $('#original-dataset-link').href;

        // Generate a modal and append it to the page body
        const modalMarkup = tmpDatasetMixedContentModal(currentLink, originalDatasetUrl);
        $('body').append(modalMarkup);
        
        // Trigger the modal and set it to destroy itself on close
        $('#mixed-content-warning-modal').modal();
        $("#mixed-content-warning-modal").on('hidden.bs.modal', function () {
          $(this).data('bs.modal', null);
          $(this).remove();
        });
      }
    })
  }
}
