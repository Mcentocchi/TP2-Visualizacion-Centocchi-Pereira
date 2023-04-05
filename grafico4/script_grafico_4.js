d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({

    facet: {
      data: data,
      y: "anio_mision",
    },
    y: {
      label: "",
      grid: true,
      legend:true,
      transform: d => d / 1000,
      label:"Año",
    },
    x:{
      legend:true,
      label:"Proporción de astronautas por género",
    },
    marks: [
      Plot.barX(data, Plot.stackX(Plot.groupZ({x: "proportion-facet"}, {fill: "genero"}))),
      Plot.text(data, Plot.stackX(Plot.groupZ({x: "proportion-facet", text: "first"}, {z: "genero", text: "genero"}))),
      Plot.ruleX([0, 0])
    ],
    color: {
      range: ["pink","blue"]
    },
    marginLeft: 80,
    marginBottom: 50
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})