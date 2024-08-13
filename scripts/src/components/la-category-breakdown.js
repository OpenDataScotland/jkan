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

        $("#la-category-breakdown").DataTable({
            fixedHeader: true,
            dom: "t",
            paging: false,
            ordering: false,
        });
    }

    buildHeader(categories) {
        var theadElem = document.createElement("thead");

        var trowElem = document.createElement("tr");

        var originTh = document.createElement("th");
        originTh.innerText = "Local authority";
        trowElem.appendChild(originTh);

        for (let index in categories) {
            var categoryHeaderElem = document.createElement("th");
            var categoryHeaderSpan = document.createElement("span");
            categoryHeaderSpan.innerText = categories[index];
            categoryHeaderSpan.classList.add("vertical-column");
            categoryHeaderElem.appendChild(categoryHeaderSpan);
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

                if (categoryCount < 1) {
                    catCell.classList.add("datasets-none");
                }
                else if (categoryCount >= 1 && categoryCount <= 3) {
                    catCell.classList.add("datasets-low");
                }
                else if (categoryCount >= 4 && categoryCount <= 6) {
                    catCell.classList.add("datasets-medium");
                }
                else if (categoryCount > 6) {
                    catCell.classList.add("datasets-high");
                }

                catCell.innerText = categoryCount;
                laRow.appendChild(catCell);
            }

            var totalCell = document.createElement("th");
            totalCell.innerText = orgDatasetCategoryTotal;
            laRow.appendChild(totalCell);

            tbodyElem.appendChild(laRow);
        }

        return tbodyElem;
    }

    buildFooter(laDatasets, localAuthorities, categories) {
        var datasetsByLa = _(laDatasets).groupBy("organization").map((value, key) => { return { name: key, datasets: value } }).value();
        var laCount = localAuthorities.length;
        var tfootElem = document.createElement("tfoot");

        var noDataRowElem = document.createElement("tr");
        var noDataRowPercentElem = document.createElement("tr");

        var noDataTitleElem = document.createElement("th");
        noDataTitleElem.innerText = "# local authorities with no data";
        noDataRowElem.appendChild(noDataTitleElem);

        var noDataRowPercentTitleElem = document.createElement("th");
        noDataRowPercentTitleElem.innerText = "% of local authorities with no data";
        noDataRowPercentElem.appendChild(noDataRowPercentTitleElem);

        for (let index in categories) {
            var currentCategory = categories[index];
            var localAuthoritiesWithoutCategory = datasetsByLa.filter(la => la.datasets.every(ds => !ds.category.includes(currentCategory))).length;
            var percentLocalAuthoritiesWithoutCategory = localAuthoritiesWithoutCategory / laCount * 100;
            var percentLocalAuthoritiesWithoutCategoryFormatted = percentLocalAuthoritiesWithoutCategory.toFixed(0);

            var categoryHeaderElem = document.createElement("td");
            categoryHeaderElem.innerText = `${localAuthoritiesWithoutCategory}/${laCount}`;
            noDataRowElem.appendChild(categoryHeaderElem);

            var categoryHeaderPercentElem = document.createElement("td");
            categoryHeaderPercentElem.innerText = percentLocalAuthoritiesWithoutCategoryFormatted;
            noDataRowPercentElem.appendChild(categoryHeaderPercentElem);
        }

        var noDataRowEndTh = document.createElement("th");
        noDataRowElem.style.backgroundColor = "#f9f9f9";
        noDataRowElem.appendChild(noDataRowEndTh);
        tfootElem.appendChild(noDataRowElem);

        var noDataRowPercentTh = document.createElement("th");
        noDataRowPercentTh.style.backgroundColor = "#f9f9f9";
        noDataRowPercentElem.appendChild(noDataRowPercentTh);
        tfootElem.appendChild(noDataRowPercentElem);

        return tfootElem;
    }
}