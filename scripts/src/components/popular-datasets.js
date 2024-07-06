import $ from 'jquery'
import { setContent } from '../util';

export default class PopularDatasets {
    constructor(opts) {
        const datasets = opts.datasets;

        this.getPopularDatasets(datasets);
    }

    getPopularDatasetsViaCloudflare(currentClass, datasets) {
        $.ajax({
            url: 'https://popular-datasets.opendatascotland.workers.dev',
            dataType: 'json',
            success: function (data) {
                currentClass.setPopularDatasets(data, datasets);
            },
            error: function (data) {
                console.debug("Error:", data);
            }
        });
    }

    getPopularDatasets(datasets) {
        var currentClass = this;        
        $.ajax({
            url: 'https://plausible.io/api/stats/opendata.scot/pages?period=7d&filters={%22page%22:%22/datasets/**%22}',
            dataType: 'json',
            success: function (data) {
                currentClass.setPopularDatasets(data, datasets);                
            },
            error: function (data) {
                console.debug("Error:", data);
                currentClass.getPopularDatasetsViaCloudflare(currentClass, datasets);
            }
        });
    }

    setPopularDatasets(popularDatasets, datasets) {
        const filteredPopularDatasets = popularDatasets.results.filter(x => x.name != "/datasets/");

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

        setContent($("#popular-datasets"), top5AsElements)
    }
}