import Dropdown from 'bootstrap/js/dist/dropdown'
import Tooltip from 'bootstrap/js/dist/tooltip'
import Popover from 'bootstrap/js/dist/popover'
import Collapse from 'bootstrap/js/dist/collapse'

// Expose Bootstrap components globally for inline scripts
window.bootstrap = { Dropdown, Tooltip, Popover, Collapse }

export default class {
  constructor (opts) {
    // Navigation component - simplified for read-only site
    // No user authentication or admin features
  }
}
