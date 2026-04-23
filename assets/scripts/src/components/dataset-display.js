import $ from 'jquery'
import Modal from 'bootstrap/js/dist/modal'
import tmpDatasetMixedContentModal from '../templates/dataset-mixed-content-modal'
import copy from 'copy-to-clipboard';

import { queryByHook } from '../util'

export default class {
  constructor(opts) {

    // Mixed content catcher for HTTP links
    elements.resourceItem.on('click', 'a', (e) => {
      const currentLink = e.currentTarget.href;
      if (currentLink.startsWith('http://')) {
        // Prevent link nav because it will fail anyways
        e.preventDefault();

        // Grab the original dataset link
        const originalDatasetUrl = $('#original-dataset-link').attr('href');

        // Generate a modal and append it to the page body
        const modalMarkup = tmpDatasetMixedContentModal(currentLink, originalDatasetUrl);
        $('body').append(modalMarkup);

        // Trigger the modal and set it to destroy itself on close
        const modalElement = document.getElementById('mixed-content-warning-modal');
        const modalInstance = new Modal(modalElement);

        modalElement.addEventListener('hidden.bs.modal', () => {
          modalInstance.dispose();
          modalElement.remove();
        }, { once: true });

        modalInstance.show();

        $('#mixed-content-warning-clipboard').on('click', function () {
          copy(currentLink);
          $(this).html('<i class="fa-solid fa-clipboard"></i> Copied!');
        })
      }
    })
  }
}
