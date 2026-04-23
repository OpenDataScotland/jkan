import $ from 'jquery'
import {omit, pickBy} from 'lodash'

export default class {
  constructor (opts) {
    const config = this._getConfig(opts.el)
    const markup = this._buildMarkup(opts.params, config)
    opts.el.html(markup)
    this._bindEvents(opts.el, opts.params, config)
  }

  _getConfig (el) {
    const data = el.data()
    return {
      fromParam: data.fromParam || 'dateFrom',
      toParam: data.toParam || 'dateTo',
      prefix: data.hookPrefix || 'date',
      fromLabel: data.fromLabel || 'From',
      toLabel: data.toLabel || 'To'
    }
  }

  _buildMarkup (params, config) {
    const fromId = `${config.prefix}-from-input`
    const toId = `${config.prefix}-to-input`

    return `<form class="px-1 py-2" data-hook="${config.prefix}-range-form">
  <div class="mb-2">
    <label class="form-label small mb-1" for="${fromId}">${config.fromLabel}</label>
    <input type="date" id="${fromId}" class="form-control form-control-sm" data-hook="${config.prefix}-from" value="${params[config.fromParam] || ''}">
  </div>
  <div class="mb-3">
    <label class="form-label small mb-1" for="${toId}">${config.toLabel}</label>
    <input type="date" id="${toId}" class="form-control form-control-sm" data-hook="${config.prefix}-to" value="${params[config.toParam] || ''}">
  </div>
  <div class="d-flex gap-2">
    <button type="submit" class="btn btn-sm btn-primary">Apply</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" data-hook="${config.prefix}-clear">Clear</button>
  </div>
</form>`
  }

  _bindEvents (el, params, config) {
    const dateRangeForm = el.find(`[data-hook="${config.prefix}-range-form"]`)
    const dateFromInput = el.find(`[data-hook="${config.prefix}-from"]`)
    const dateToInput = el.find(`[data-hook="${config.prefix}-to"]`)

    dateRangeForm.on('submit', function (e) {
      e.preventDefault()

      const newParams = pickBy(Object.assign({}, omit(params, [config.fromParam, config.toParam]), {
        [config.fromParam]: dateFromInput.val(),
        [config.toParam]: dateToInput.val()
      }))

      window.location.search = '?' + $.param(newParams)
    })

    el.find(`[data-hook="${config.prefix}-clear"]`).on('click', function () {
      const newParams = omit(params, [config.fromParam, config.toParam])
      window.location.search = '?' + $.param(newParams)
    })
  }
}
