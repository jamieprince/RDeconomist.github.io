var ChartF1and2 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F1) Total UK tax revenue",

   "title": {
    "text": "Expenditure vs tax revenue",
    "subtitle":"£ million. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F1.2.FiscalRevVExp.csv"},

  "height": 300,
  "width": 285,
  
  "encoding": {"x": {"field": "Date", "type": "temporal", "axis": {"title":null, "grid": false}}},

  "layer": [

    {"encoding": {

        "y": {"field": "Value", 

              "type": "quantitative", 
              "title":"",
              
               "axis": {"grid": false}
              },
              
      "color": {
      
      "field": "Measure",
      "legend": {"orient": "top-right"},
      "type": "nominal",
      "scale": {"range": ["mediumvioletred", "pink"]}
    }


            },
            

        
        "layer": [{"mark": {"type": "line", "color": ""}},

                  {"transform": 

                      [{"filter": {"selection": "hover"}}], 

                        "mark": "point"}

      ]

    },

    {
      
      "mark": "rule", 

      "encoding": {
        "opacity": {
          "condition": {"value": 0.1, "selection": "hover"},
          "value": 0
        },

        "tooltip": [

          {"field": "Date", "type": "temporal", "format":"%B, %Y"},
          {"field": "Value", "type": "quantitative", "format": ""},
          {"field": "Measure", "type": "nominal", "format": ""}

        ]

      },


      
      "selection": {
        "hover": {
          "type": "multi",
          "fields": ["Date"],
          "nearest": true,
          "on": "mouseover",
          "empty": "none",
          "clear": "mouseout"

        }

      }

    }

  ]

};


vegaEmbed('#ChartF1and2', ChartF1and2, {"actions": false});

