import $ from 'jquery'
import { setContent } from '../util';

export default class PopularDatasets {
    constructor(opts) {
        const datasets = opts.datasets;

        this.getPopularDatasets(datasets);
    }

    getPopularDatasets(datasets) {
        var currentClass = this;        
        $.ajax({
            url: 'https://api.opendata.scot/stats/popular-datasets',
            dataType: 'json',
            success: function (data) {
                currentClass.setPopularDatasets(data, datasets);                
            },
            error: function (data) {
                console.debug("Error:", data);
            }
        });
    }

    setPopularDatasets(popularDatasets, datasets) {
        const datasetNamesAndUrls = popularDatasets.map(popularDataset => {
            const datasetMatch = datasets.filter(dataset => dataset.url == popularDataset.page);
            if (datasetMatch.length < 1) {
                return null;
            }

            const datasetName = datasetMatch[0].title;
            const datasetOrg = datasetMatch[0].organization;
            const datasetUrl = popularDataset.page;
            const datasetVisits = popularDataset.visitors;

            return { datasetName, datasetOrg, datasetUrl, datasetVisits }
        })

        const top5 = datasetNamesAndUrls.filter(item => item !== null).slice(0, 5);

        const top5AsElements = top5.map(dataset => {
            var listElement = document.createElement("a");
            listElement.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
            listElement.href = dataset.datasetUrl;
            listElement.innerHTML = `${dataset.datasetOrg} - ${dataset.datasetName}<span class="badge text-bg-secondary rounded-pill">${dataset.datasetVisits} visit${dataset.datasetVisits !== 1 ? 's' : ''}</span>`

            return listElement;
        })

        setContent($("#popular-datasets"), top5AsElements)
    }
}
