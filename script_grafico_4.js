d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      label: "",
      grid: true,
      legend:false,
      transform: d => d / 1000
    },
    facet: {
      data: data,
      y: "anio_mision",
      legend:false,
    },
    
    marks: [
      Plot.barX(data, Plot.stackX(Plot.groupZ({x: "proportion-facet"}, {fill: "genero"}))),
      Plot.text(data, Plot.stackX(Plot.groupZ({x: "proportion-facet", text: "first"}, {z: "genero", text: "genero"}))),
      Plot.ruleX([0, 0])
    ],
    color: {
      range: ["pink","blue"]
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})