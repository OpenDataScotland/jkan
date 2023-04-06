import $ from 'jquery'
import { setContent } from '../util';

export default class {
    constructor(opts) {
        const datasets = opts.datasets;

        this.getPopularDatasets().then(popularDatasets => this.setPopularDatasets(popularDatasets, datasets));
    }

    getPopularDatasets() {
        return fetch("https://plausible.io/api/stats/opendata.scot/pages?period=7d&date=2023-04-05&filters={%22page%22:%22/datasets/**%22}")
            .then(response => response.json())
            .then(data => { return data });
    }

    setPopularDatasets(popularDatasets, datasets) {
        const filteredPopularDatasets = popularDatasets.filter(x => x.name != "/datasets/");

        const datasetNamesAndUrls = filteredPopularDatasets.map(popularDataset => {
            const datasetMatch = datasets.filter(dataset => dataset.url == popularDataset.name);
            if (datasetMatch.length < 1) {
                return null;
            }

            const datasetName = datasetMatch[0].title;
            const datasetOrg = datasetMatch[0].organization;
            const datasetUrl = popularDataset.name;
            const datasetVisits = popularDataset.visitors;

            return { datasetName, datasetOrg, datasetUrl, datasetVisits }
        })

        const top5 = datasetNamesAndUrls.filter(x => x != null)
            .slice(0, 5);

        const top5AsElements = top5.map(dataset => {
            var listElement = document.createElement("a");            
            listElement.className = "list-group-item";
            listElement.href = dataset.datasetUrl;
            listElement.innerHTML = `<span class="badge">${dataset.datasetVisits}</span>${dataset.datasetOrg} - ${dataset.datasetName}`

            return listElement;
        })

        setContent($("#popular-datasets"),top5AsElements)

    }
}

