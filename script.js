d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      grid: true
    },
    marks: [
      Plot.barY(data, Plot.groupX({y: "count"}, {x: "ocupacion", fill: "genero"})),
      Plot.ruleY([0])
    ]
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})



d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      grid: true
    },
    marks: [
      Plot.barY(data, Plot.groupX({y: "count"}, {x: "anio_mision", fill: "genero"})),
      Plot.ruleY([0])
    ]
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})


d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      label: "proporcion de militares",
      grid: true,
      transform: d => d / 1000
    },
    marks: [
      Plot.barY(data, Plot.groupX({y: "proportion"}, {x: "nacionalidad", fill: "ocupacion"})),
      Plot.ruleY([0])
    ],
    color: {
      legend:true,
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})

d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      label: "hs x pais",
      grid: true,
      transform: d => d / 1000
    },
    marks: [
      Plot.barY(data, Plot.groupX({y: "count"}, {x: "anio_mision", fill: "nacionalidad"})),
      Plot.ruleY([0])
    ],
    color: {
      legend:true,
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})

d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      label: "cantidades nacionalidad x ño",
      grid: true,
      transform: d => d / 1000
    },
    marks: [
      Plot.barY(data, Plot.groupX({y: "proportion"}, {x: "genero", fill: "eva_mision_hs"})),
      Plot.ruleY([0])
    ],
    color: {
      legend:true,
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})

d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      label: "",
      grid: true,
      transform: d => d / 1000
    },
    facet: {
      data: data,
      x: "status",
      legend:true,
    },
    marks: [
      Plot.barY(data, Plot.groupX({y: "sum"}, {x: "genero", fill: "ocupacion"})),
      Plot.ruleY([0])
    ],
    color: {
      legend:true,
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})


d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    x: {
      percent: true
    },
    marks: [
      Plot.barX(data, Plot.stackX(Plot.groupZ({x: "proportion"}, {fill: "genero"}))),
      Plot.text(data, Plot.stackX(Plot.groupZ({x: "proportion", text: "first"}, {z: "genero", text: "genero"}))),
      Plot.ruleX([0, 1])
    ]
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})

d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    x: {
      percent: true
    },
    marks: [
      Plot.barX(data, Plot.stackX(Plot.groupZ({x: "proportion"}, {fill: "status"}))),
      Plot.text(data, Plot.stackX(Plot.groupZ({x: "proportion", text: "first"}, {z: "status", text: "status"}))),
      Plot.ruleX([0, 1])
    ]
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})



d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    grid: true,
    inset: 10,
    x: {
      label: "Fuel consumption (gallons per 100 miles) →"
    },
    facet: {
      data: data,
      x: "anio_mision",
      legend:true,
    },
    y: {
      label: "↑ Horsepower"
    },
    marks: [
      Plot.dot(data, {
        x: d => 100 / (d["mision_hs"] ?? NaN), 
        y: "eva_mision_hs"
      })
    ]
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})



d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      label: "",
      grid: true,
      transform: d => d / 1000
    },
    // facet: {
    //   data: data,
    //   x: "ocupacion",
    //   legend:true,
    // },
    marks: [
      Plot.barY(data, Plot.groupX({y: "sum"}, {x: "ocupacion", fill: "eva_mision_hs"})),
      Plot.ruleY([0])
    ],
    color: {
      legend:true,
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})



d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      grid: true,
      tickFormat: "+f",
      label: "↑ Surface temperature anomaly (°F)"
    },
    color: {
      legend: true
    },
    marks: [
      Plot.ruleY([0]),
      Plot.dot(data, {x: "anio_mision", y: "edad_mision", stroke: "edad_mision"})
    ]
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})


d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    height: 640,
    grid: true,
    x: {
      label: "Carats →"
    },
    y: {
      label: "↑ Price ($)"
    },
    r: {
      range: [0, 20]
    },
    marks: [
      Plot.dot(data, Plot.bin({r: "count"}, {x: "mision_hs", y: "eva_mision_hs", thresholds: 100,stroke:'eva_mision_hs'}))
    ]
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})
d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(
        data.filter(d => d.nacionalidad == 'EE.UU.'|| d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'Reino Unido'),
        Plot.binX(
        {y:'sum'},
        {
          x: 'anio_mision',
          y: 'mision_hs',
          fill: 'nacionalidad'
          
        },
      ),
      )
    ],
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },
    y: {
      nice: true,
      grid: true,
    },
  })
  d3.select('#chart').append(() => chart)
})

d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      grid: true
    },
    marks: [
      Plot.barY(data, Plot.groupX({y: "count"}, {x: "nacionalidad", fill: "genero"})),
      Plot.ruleY([0])
    ]
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})
