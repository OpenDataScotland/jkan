/* global settings */
import $ from 'jquery'
import Tab from 'bootstrap/js/dist/tab'
import Modal from 'bootstrap/js/dist/modal'

import Navigation from './components/navigation'
import DatasetsList from './components/datasets-list'
import CategoriesFilter from './components/categories-filter'
import OrganizationsFilter from './components/organizations-filter'
import FileTypesFilter from './components/file-types-filter'
import DatasetDisplay from './components/dataset-display'
import EditableList from './components/editable-list'
import {queryByComponent} from './util'
import PopularDatasets from './components/popular-datasets'
import RandomDatasets from './components/random-datasets'

const params = Object.fromEntries(new URLSearchParams(window.location.search))

// Check for these components on the page and initialize them
const components = [
  {tag: 'navigation', class: Navigation},
  {tag: 'dataset-display', class: DatasetDisplay},
  {tag: 'editable-list', class: EditableList},
  {tag: 'datasets-list', class: DatasetsList, usesDatasets: true},
  {tag: 'categories-filter', class: CategoriesFilter, usesDatasets: true},
  {tag: 'organizations-filter', class: OrganizationsFilter, usesDatasets: true},
  {tag: 'file-types-filter', class: FileTypesFilter, usesDatasets: true},
  {tag: 'popular-datasets', class: PopularDatasets, usesDatasets: true},
  {tag: 'random-datasets', class: RandomDatasets, usesDatasets: true}
]
for (let component of components) {
  const els = queryByComponent(component.tag)
  if (els.length) {
    // If the component depends on datasets.json, fetch it first (once per page) and pass it
    if (component.usesDatasets) {
      getDatasets().then((datasets) => {
        els.each((index, el) => new component.class({el: $(el), params, datasets})) // eslint-disable-line
      })
    // Otherwise simply initialize the component
    } else {
      els.each((index, el) => new component.class({el: $(el), params})) // eslint-disable-line
    }
  }
}

// Helper function to ensure datasets.json is only fetched once per page
let datasetsCache
function getDatasets () {
  datasetsCache = datasetsCache || $.getJSON(`${settings.BASE_URL}/datasets.json`)
  return datasetsCache
}
