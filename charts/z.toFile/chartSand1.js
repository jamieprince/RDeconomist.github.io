var ChartSand1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "data": {
    "values": [
      {"category": "Sky", "value": 75, "order": 3},
      {"category": "Shady", "value": 10, "order": 1},
      {"category": "Sunny", "value": 15, "order": 2}
    ]
  },

  "mark": {"type": "arc", "outerRadius": 200},

  "height":400,
  "width":600,

  "encoding": {
    "theta": {
      "field": "value", "type": "quantitative",
      "scale": {"range": [2.35619449, 8.639379797]},
      "stack": true
    },
    "color": {
      "field": "category", "type": "nominal",
      "scale": {
        "domain": ["Sky", "Shady", "Sunny"],
        "range": ["RGB(0, 0, 150)", "RGB(180, 180, 0)", "RGB(249, 240, 0)"]
      },
      "legend": {
        "orient": "top-right",
        "title": "Segments",
        "columns": 1,
        "legendX": 200,
        "legendY": 80
      }
    },
    "order": {
      "field": "order"
    }
  },
  "view": {"stroke": null}
}
;

vegaEmbed('#visSand1', ChartSand1);
