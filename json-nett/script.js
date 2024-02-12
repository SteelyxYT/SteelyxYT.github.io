const jsonExample =
  '{"laerere":{"Naturfag":"Pratima Mundhe","Medieproduksjon":"Marthe Ødegaard","Informasjonsteknologi":"Joakim Husefest","Helse og matfag":"Ida Wolden","Engelsk":"Walter Johnsen"}}';

console.log(jsonExample);

const obj = JSON.parse(jsonExample);

console.log(obj);

console.log(obj.laerere["Helse og matfag"]);