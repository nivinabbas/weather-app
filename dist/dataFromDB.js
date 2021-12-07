class dataOfCity {
  constructor() {
    this.dataOfCities = [];
  }

  getDataFromDB = async function () {
    this.dataOfCities = await $.get(`/cities/`);
  };

  getDataFromDBAboutCity = async function (city) {
    let newCity = await $.get(`/city/${city}`);
    this.dataOfCities.push(newCity);
  };

  saveDataAboutCity(city) {
    $.post('/city', city, function (res) {});
  }

  deleteDataAboutCity = async function (cityToDelete) {
    console.log(cityToDelete);
    // await axios.delete(`/city/${cityToDelete}`);
    $.ajax({
      method:'delete',
      url:`city/${cityToDelete}`,
      data:{
        name:cityToDelete
      }
      
    }
   )
  };

  getData = function () {
    return this.dataOfCities;
  };
}
