class dataOfCity {
  constructor() {
    this.dataOfCities = [];
  }

  getDataFromDB = async function () {
    this.dataOfCities = await $.get(`/cities`);
  };

  getDataFromDBAboutCity = async function (city) {
    let newCity = await $.get(`/cities/${city}`);
    this.dataOfCities.push(newCity);
  };

  saveDataAboutCity(city) {
    $.post('/cities', city, function (res) {});
  }

  deleteDataAboutCity = async function (cityToDelete) {
    await axios.delete(`/cities/${cityToDelete}`);
  };

  getData = function () {
    return this.dataOfCities;
  };
}
