
var cl = console.log;


var countryArray = [
  {
      "name": "USA",
      "population": 331002651,
      "area": 9833520,
      "capital": "Washington, D.C.",
      "language": "English"
  },
  {
      "name": "Canada",
      "population": 37411047,
      "area": 9984670,
      "capital": "Ottawa",
      "language": "English and French"
  },
  {
      "name": "Mexico",
      "population": 127575529,
      "area": 1964375,
      "capital": "Mexico City",
      "language": "Spanish"
  },
  {
      "name": "France",
      "population": 66710000,
      "area": 640679,
      "capital": "Paris",
      "language": "French"
  },
  {
      "name": "Germany",
      "population": 82790000,
      "area": 357114,
      "capital": "Berlin",
      "language": "German"
  }
]

var countryInfo = document.getElementById("countryInfo");
var result = "";
countryArray.forEach(function(countries, index){
 //cl(`${countries.name} ${countries.population}`);

    result += `<tr>
                <td>${index +1}</td>
                <td>${countries.name}</td>
                <td>${countries.population}</td>
                <td>${countries.area}</td>
                <td>${countries.capital}</td>
                <td>${countries.language}</td>
          </tr>`     
})
countryInfo.innerHTML = result;




var mobileArray = [
  { name: 'Apple iPhone 12', price: 999, color: 'Black', storage: 128, camera: 'Dual-lens' },
  { name: 'Samsung Galaxy S21', price: 849, color: 'White', storage: 128, camera: 'Triple-lens' },
  { name: 'Google Pixel 4a', price: 349, color: 'Black', storage: 64, camera: 'Single-lens' },
  { name: 'OnePlus 8T', price: 799, color: 'Aquamarine Green', storage: 128, camera: 'Quad-lens' },
  { name: 'Huawei P40 Pro', price: 799, color: 'Silver Frost', storage: 256, camera: 'Quad-lens' }
]



var mobileInfo = document.getElementById("mobileInfo");
var result1 = "";
mobileArray.forEach(function(mobiles,index){
    cl(`${mobiles.name} ${mobiles.price}`);


result1 += `<tr>
              <td>${index +1}</td>
              <td>${mobiles.name}</td>
              <td>${mobiles.price}</td>
              <td>${mobiles.color}</td>
              <td>${mobiles.storage}</td>
              <td>${mobiles.camera}</td>
        </tr>`
})
mobileInfo.innerHTML = result1;