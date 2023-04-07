import $ from 'jquery'
import { setContent } from '../util';

export default class {
    constructor(opts) {
        const datasets = opts.datasets;
        this.setRandomDatasets(datasets);
    }

    setRandomDatasets(datasets) {
        var randomDatasets = _.sampleSize(datasets, 5);

        const randomDatasetsAsElements = randomDatasets.map(dataset => {
            var listElement = document.createElement("a");            
            listElement.className = "list-group-item";
            listElement.href = dataset.url;
            listElement.innerText = `${dataset.organization} - ${dataset.title}`

            return listElement;
        })

        setContent($("#random-datasets"),randomDatasetsAsElements)
    }
}

