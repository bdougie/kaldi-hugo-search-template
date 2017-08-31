// These keys are public and not sensitive. The first is the APP ID
// The second is the Search Only Key.
// const instantsearch = require("instantsearch.js");

var search = instantsearch({
  appId: "3TZ23PBKWA",
  apiKey: "066dd636f08bd2fb78fcb120b38f7ddd",
  indexName: "kaldi",
  urlSync: {}
});

// initialize RefinementList
search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#refinement-list",
    attributeName: "category"
  })
);

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#search-box",
    placeholder: "Search the site"
  })
);

// initialize hits widget
search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      empty: 'No results',
      item: "<a href={{href}}><em>{{objectID}}</em> {{{_highlightResult.content.value}}}</a>"
    }
  })
);

search.start();
