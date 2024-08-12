import $ from 'jquery'
import { setContent } from '../util';
import { defaults } from 'lodash'

const LOCAL_AUTHORITY_TYPE_STRING = "Local authority";

export default class {
    constructor(opts) {
        const datasets = opts.datasets;
        this.setLACategoryBreakdown(datasets);
    }

    setLACategoryBreakdown(datasets) {
        var laDatasets = datasets.filter(ds => ds.org_type == LOCAL_AUTHORITY_TYPE_STRING);
        var thead = this.buildHeader(categories);
        var tbody = this.buildBody(laDatasets, localAuthorities, categories);
        var tfoot = this.buildFooter(laDatasets, localAuthorities, categories);

        setContent($("#la-category-breakdown"), [$(thead), $(tbody), $(tfoot)])
    }

    buildHeader(categories) {
        var theadElem = document.createElement("thead");

        var trowElem = document.createElement("tr");

        var originTh = document.createElement("th");
        originTh.innerText = "Local authority";
        trowElem.appendChild(originTh);

        for (let index in categories) {
            var categoryHeaderElem = document.createElement("th");
            categoryHeaderElem.innerText = categories[index];
            categoryHeaderElem.classList.add("verticalColumn");
            trowElem.appendChild(categoryHeaderElem);
        }

        var totalTh = document.createElement("th");
        totalTh.innerText = "Total";
        trowElem.appendChild(totalTh);

        theadElem.appendChild(trowElem);

        return theadElem;
    }

    buildBody(laDatasets, localAuthorities, categories) {
        var tbodyElem = document.createElement("tbody");

        for (let laIndex in localAuthorities) {
            var laRow = document.createElement("tr");

            var currentLA = localAuthorities[laIndex];

            var laCell = document.createElement("td");
            laCell.innerText = currentLA;
            laRow.appendChild(laCell);

            var orgDatasetCategoryTotal = 0;

            for (let catIndex in categories) {
                var catCell = document.createElement("td");

                var currentCategory = categories[catIndex];
                var categoryCount = laDatasets.filter(ds => ds.organization == currentLA && ds.category.includes(currentCategory)).length
                orgDatasetCategoryTotal += categoryCount;

                catCell.innerText = categoryCount;
                laRow.appendChild(catCell);
            }

            var totalCell = document.createElement("td");
            totalCell.innerText = orgDatasetCategoryTotal;
            laRow.appendChild(totalCell);

            tbodyElem.appendChild(laRow);
        }

        return tbodyElem;
    }

    buildFooter(laDatasets, localAuthorities, categories) {
        var datasetsByLa = _(laDatasets).groupBy("organization").value();

        var tfootElem = document.createElement("tfoot");

        var noDataRowElem = document.createElement("tr");

        var noDataTitleElem = document.createElement("th");
        noDataTitleElem.innerText = "# local authorities with no data";
        noDataRowElem.appendChild(noDataTitleElem);

        for (let index in categories) {
            var categoryHeaderElem = document.createElement("th");
            categoryHeaderElem.innerText = "X"
            noDataRowElem.appendChild(categoryHeaderElem);
        }

        var noDataRowEndTh = document.createElement("th");
        noDataRowElem.appendChild(noDataRowEndTh);

        tfootElem.appendChild(noDataRowElem);

        var noDataRowPercentElem = document.createElement("tr");

        var noDataRowPercentTitleElem = document.createElement("th");
        noDataRowPercentTitleElem.innerText = "% of local authorities with no data";
        noDataRowPercentElem.appendChild(noDataRowPercentTitleElem);

        for (let index in categories) {
            var categoryHeaderElem = document.createElement("th");
            categoryHeaderElem.innerText = "X"
            noDataRowPercentElem.appendChild(categoryHeaderElem);
        }

        var noDataRowPercentTh = document.createElement("th");
        noDataRowPercentElem.appendChild(noDataRowPercentTh);

        tfootElem.appendChild(noDataRowPercentElem);

        return tfootElem;
    }
}

