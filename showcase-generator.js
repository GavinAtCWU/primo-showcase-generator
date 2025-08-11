
function generateShowcase() {

	// Get Primo base URL and search parameters and initialize PNX search URL with default parameters.
	let primoSearchUrl = new URL(document.getElementById('primo_search_url').value);
	let APIDefaultParamsString = 'acTriggered=false&' +
		'blendFacetsSeparately=false&' +
		'came_from=sort&' +
		'citationTrailFilterByAvailability=true&' +
		'disableCache=false&' +
		'getMore=0&' +
		'isCDSearch=false&' +
		'lang=en&' +
		'limit=10&' +
		'newspapersActive=true&' +
		'newspapersSearch=false&' +
		'offset=0&' +
		'otbRanking=false&' +
		'pcAvailability=true&' +
		'rapido=true&' +
		'refEntryActive=false&' +
		'rtaLinks=true&' +
		'searchInFulltextUserSelection=false&' +
		'skipDelivery=Y&';
	let primoAPIUrl = primoSearchUrl.origin + '/primaws/rest/external/pnxs?' + APIDefaultParamsString;
	let searchParams = primoSearchUrl.search.split('&');
	searchParams[0] = searchParams[0].replace('?', '');

	// Validate / clean input.
	let titleText = document.getElementById('showcase_title').value.trim();

	// Initialize facet and query parameters.
	let qInclude = 'qInclude=';
	let qExclude = 'qExclude=';
	let mFacet = 'multiFacets=';
	let query = 'q=';

	// Loop through Primo URL parameters and construct API URL.
	for(let index in searchParams) {
		let components = searchParams[index].split('=');
		let param = components[0];
		let value = components[1];
		if(param == 'query') {
			query += value + ';';
			param = value = '';
		}
		else if(param == 'search_scope') {
			param = 'scope';
		}
		else if(param == 'facet' || param == 'mfacet') {
			let valueParts = value.match(/^(.*?),(.*?),(.*?),?1?$/);
			let facetParam = valueParts[1];
			let facetType = valueParts[2];
			let facetValue = valueParts[3].replace(',1', '');
			if(param == 'facet') {
				if(facetType == 'include') {
					qInclude += 'facet_' + facetParam + ',exact,' + facetValue + '%7C,%7C';
				}
				else {
					qExclude += 'facet_' + facetParam + ',exact,' + facetValue + '%7C,%7C';
				}
				param = value = '';
			}
			else { // param == 'mfacet'
				mFacet += 'facet_' + facetParam + ',' + facetType + ',' + facetValue + '%7C,%7C';
				param = value = '';
			}
		}
		else if(param == 'sortby') {
			param = 'sort';
		}
		primoAPIUrl += param + '=' + value + '&';
	}

	// Trim last '%7C,%7C' off facet parameters, last ';' off query paramter and append to PNX search URL
	primoAPIUrl += qInclude.replace(/%7C,%7C$/, '') + '&' +
		qExclude.replace(/%7C,%7C$/, '') + '&' +
		mFacet.replace(/%7C,%7C$/, '') + '&' +
		query.replace(/;$/, '');

	// Add showcase element to showcase div and textarea and highlight text in textarea for copying
	let showcase = '<search-carousel ' +
		'titleText="' + titleText + '" ' +
		'titleLink="' + primoSearchUrl.href + '" ' +
		'searchUrl="' + primoAPIUrl + '">' +
		'</search-carousel>';
	document.getElementById('showcase').innerHTML = showcase;
	document.getElementById('showcase_code').innerHTML = showcase;

}

function copyShowcaseCode() {

	let showcaseCode = document.getElementById('showcase_code');
	showcaseCode.select();
	// Note: The following won't work in an http environment; needs to be https.
	navigator.clipboard.writeText(showcaseCode.value);

}
