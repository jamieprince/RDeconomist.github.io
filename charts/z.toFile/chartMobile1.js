var chartMobile1 = {
  
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  
  "description": "Coronavirus cases",
  
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesByPublishDate&format=csv",
    "format": {"type": "csv"}
  },

  "title": {
    "text": "Covid cases: UK regions",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },



  "height": 300,
  
  "width": 280,
  
  "mark": {"type": "bar", "width":10},
  
  "selection": {
    "Region": {
      "type": "single",
      "fields": ["areaName"],
      "bind": {
        "input": "select",
        "options": [
          null,
          "East Midlands",
          "East of England",
          "London",
          "North East",
          "North West",
          "South East",
          "South West",
          "West Midlands",
          "Yorkshire and The Humber"
        ],
        "name": "Region"
      }
    }
  },
  "transform": [
    
    {"filter": {"selection": "Region"}},
    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "dec", "date": 1},
          {"year": 2050, "month": "dec", "date": 30}
        ]
      }
    }
  ],

  "encoding": {
    "x": {"field": "date", "type": "temporal", "title": null},
    "y": {
      "field": "newCasesByPublishDate",
      "type": "quantitative",
      "title": null
    },
    
      
    "color": {
      "field": "areaName",
      "type": "nominal",
      "legend": null,
      "scale": {"scheme": "inferno"}
    }
  }
}
;

vegaEmbed('#visMobile1', chartMobile1, {"actions": false});
