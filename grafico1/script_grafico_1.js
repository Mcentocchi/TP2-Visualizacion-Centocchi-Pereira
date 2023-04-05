d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data);

  // Filtramos los datos para obtener solo los astronautas de Rusia, EE.UU. y el resto del mundo
  let dataRusia = data.filter(d => d.nacionalidad === 'U.S.S.R/Rusia' );
  let dataUSA = data.filter(d => d.nacionalidad === 'EE.UU.');
  let dataResto = data.filter(d =>  d.nacionalidad !== 'U.S.S.R/Rusia' && d.nacionalidad !== 'EE.UU.');

  // Agrupamos los datos por año de misión y calculamos la suma de horas de misión para cada grupo
  let dataRusiaGrouped = d3.group(dataRusia, d => d.anio_mision);
  let dataUSAGrouped = d3.group(dataUSA, d => d.anio_mision);
  let dataRestoGrouped = d3.group(dataResto, d => d.anio_mision);

  // Creamos un array de objetos que contenga la suma de horas de misión para cada año y cada nacionalidad
  let dataSum = [];
  dataRusiaGrouped.forEach((value, key) => {
    let sumRusia = d3.sum(value, d => d.mision_hs);
    let sumUSA = 0;
    if (dataUSAGrouped.has(key)) {
      sumUSA = d3.sum(dataUSAGrouped.get(key), d => d.mision_hs);
    }
    let sumResto = 0;
    if (dataRestoGrouped.has(key)) {
      sumResto = d3.sum(dataRestoGrouped.get(key), d => d.mision_hs);
    }
    dataSum.push({anio_mision: key, mision_hs_rusia: sumRusia, mision_hs_usa: sumUSA, mision_hs_resto: sumResto});
  });

  // Ordenamos los datos por año de misión
  dataSum.sort((a, b) => d3.ascending(a.anio_mision, b.anio_mision));

  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      grid: true,
      legend:true,
      label:"Horas de misión",
    },
    x:{
      legend:true,
      label:"Año Mision",
    },
    color:{
      legend:true,
      label:"Nacionalidad",
    },
    marks: [
      Plot.areaY(dataSum, {y: "mision_hs_rusia", x: "anio_mision", fill: "Red",fillOpacity: 0.7}),
      Plot.areaY(dataSum, {y: "mision_hs_usa", x: "anio_mision", fill: "Blue",fillOpacity: 0.7}),
      Plot.areaY(dataSum, {y: "mision_hs_resto", x: "anio_mision", fill: "Grey",fillOpacity: 0.7}),
      Plot.ruleY([0])
    ],
    width: 800,
    height: 400,
    marginLeft: 60,
    marginBottom: 60
  });

  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart);
});