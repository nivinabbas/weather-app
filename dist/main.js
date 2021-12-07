let data = new dataOfCity();
let renderer = new Renderer(data.getData());

async function loadPage() {
  await data.getDataFromDB();
  renderer.renderData(data.getData());
}

$('.getCityName').on('click', async function () {
  let cityName = $('.inputCityName').val();

  await data.getDataFromDBAboutCity(cityName);

  renderer.renderData(data.getData());
});

$('body').on('click', '.saveButton', async function () {
  let addCityName = $(this).closest('.cityDetailCard').find('.name')[0].innerHTML;
  console.log(addCityName);
  let addCityTemperature = $(this)
    .closest('.cityDetailCard')
    .find('.temperature')[0].innerHTML;
  let addCityCondition = $(this)
    .closest('.cityDetailCard')
    .find('.condition')[0].innerHTML;
  let addCityConditionIcon = $(this)
    .closest('.cityDetailCard')
    .find('.photoCard')[0].src;
  console.log(addCityCondition);
  let cityModel = {
    name: addCityName,
    temperature: addCityTemperature,
    condition: addCityCondition,
    conditionIcon: addCityConditionIcon,
  };
  await data.saveDataAboutCity(cityModel);
});

$('body').on('click', '.deleteButton', async function () {
  let deleteCity = $(this).closest('.cityDetailCard').find('.name')[0].innerHTML;

  await data.deleteDataAboutCity(deleteCity);
  loadPage();
});

loadPage();
