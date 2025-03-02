var ChartF3 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F3) Current UK budget deficit",

   "title": {
    "text": "Budget deficit",
    "subtitle":"£ million. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F3.DataHub.FiscalCurrentBudgetDefAnn.csv"},
  "height": 300,
  "width": 280,





  "encoding": {"x": {"field": "Year", "type": "temporal", "axis": {"title":null, "grid": false}}},

  "layer": [

    {"encoding": {

        "y": {"field": "Value", 

              "type": "quantitative", 
              "title":"",
              "scale": {"domain": [-300000, 100000]},
               "axis": {"grid": false}
              }
            },

        
        "layer": [{"mark": {"type": "line", "color": "mediumvioletred", "interpolate": "monotone"}},

                  {"transform": 

                      [{"filter": {"selection": "hover"}}], 

                        "mark": "point"}

      ]

    },
    

    {"mark": "rule", 

      "encoding": {
        "opacity": {
          "condition": {"value": 0.1, "selection": "hover"},
          "value": 0
        },

        "tooltip": [

          {"field": "Date", "type": "temporal", "format":"%B, %Y"},
          {"field": "Value", "title": "Budget deficit", "type": "quantitative", "format": ",.0f"}

        ]

      },


      
      "selection": {
        "hover": {
          "type": "single",
          "fields": ["Year"],
          "nearest": true,
          "on": "mouseover",
          "empty": "none",
          "clear": "mouseout"

        }

      }

    },

    {
      "mark": {"type": "rule", "color": "darkgrey", "size": 0.75},
      "encoding": {"y": {"field": "Value", "type": "quantitative"}},
      "data": {
        "values": [
          {"Value": "0"}
        ]
        
      }
    }

  ]

};


vegaEmbed('#ChartF3', ChartF3, {"actions": false});

