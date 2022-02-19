import $ from 'jquery'
import { chain, pick, omit, filter, defaults, toUpper } from 'lodash'
import TmplListGroupItem from '../templates/list-group-item'
import { setContent, slugify, createDatasetFilters, collapseListGroup } from '../util'

export default class {
    constructor(opts) {
        const fileTypes = this._fileTypesWithCount(opts.datasets, opts.params)
        const fileTypesMarkup = fileTypes.map(TmplListGroupItem)
        setContent(opts.el, fileTypesMarkup)
        collapseListGroup(opts.el)
    }

    _fileTypesWithCount(datasets, params) {
        const fileTypes = datasets.map(function (dataset) {
            const listOfResources =  dataset.resources.map(function (res) { return res.format.toUpperCase() });
            return [... new Set(listOfResources)];
        }).flat();        

        var items = chain(fileTypes)
            .filter(x => x != '')
            .groupBy(toUpper)
            .map(function (fileTypeInstances, fileTypeName) {
                const fileTypeSlug = slugify(fileTypeName)
                const selected = params.fileType && params.fileType === fileTypeSlug
                const itemParams = selected ? omit(params, 'fileType') : defaults({ fileType: fileTypeSlug }, params)
                return {
                    title: fileTypeName,
                    url: '?' + $.param(itemParams),
                    count: fileTypeInstances.length,
                    unfilteredCount: fileTypeInstances.length,
                    selected: selected
                }
            })
            .orderBy('unfilteredCount', 'desc')
            .value()

        return items;
    };

}

