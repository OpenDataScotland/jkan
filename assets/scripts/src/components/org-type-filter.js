import $ from 'jquery'
import {chain, pick, omit, filter, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util'

export default class {
  constructor (opts) {
    const orgTypes = this._orgTypesWithCount(opts.datasets, opts.params)
    const orgTypesMarkup = orgTypes.map(TmplListGroupItem)
    setContent(opts.el, orgTypesMarkup)
    collapseListGroup(opts.el)
  }

  _orgTypesWithCount (datasets, params) {
    return chain(datasets)
      .filter('org_type')
      .groupBy('org_type')
      .map(function (datasetsInType, orgType) {
        const filters = createDatasetFilters(pick(params, ['organization', 'category', 'fileType']))
        const filteredDatasets = filter(datasetsInType, filters)
        const orgTypeSlug = slugify(orgType)
        const selected = params.orgType && params.orgType === orgTypeSlug
        const itemParams = selected ? omit(params, 'orgType') : defaults({orgType: orgTypeSlug}, params)
        return {
          title: orgType,
          url: '?' + $.param(itemParams),
          count: filteredDatasets.length,
          unfilteredCount: datasetsInType.length,
          selected: selected
        }
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
