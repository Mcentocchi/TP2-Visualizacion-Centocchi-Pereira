d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => d.eva_mision_hs !== 0);
  console.log(data);
  let chart = Plot.plot({
    x: { // Cambiamos el eje x a ser el eje vertical
      grid: false,
      domain:[0,3.5],
      break:1,
      legend:true,
      label:"Cantidad de viajes realizados",
      margin:100,
    },
    y: { // Cambiamos el eje y a ser el eje horizontal
      grid: false,
      legend:false
    },
    marks: [
      Plot.dotX(data, Plot.groupY({x: "count"}, {y: "nombre", fill: "ocupacion",symbol:"star",r:6})), // Cambiamos a dotX para invertir los ejes
      Plot.ruleX([0]) // Cambiamos a ruleX para invertir los ejes
    ],
    color: {
      legend:true,
    }
  });
   // Agregamos chart al div#chart de index.html
   d3.select('#chart').append(() => chart);
});