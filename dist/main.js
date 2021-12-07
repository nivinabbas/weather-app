let data = new dataOfCity();
let renderer = new Renderer(data.getData());

async function loadPage() {
  await data.getDataFromDB();
  renderer.renderData(data.getData());
}

$('.getTeamName').on('click', async function () {
  let teamName = $('.inputTeamName').val();

  await data.getDataFromDBAboutCity(teamName);
  renderer.renderData(data.getData());
});

$('body').on('click', '.saveButton', async function () {
  let addCityName = $(this).closest('.playerCard').find('.name')[0].innerHTML;
  console.log(addCityName);
  let addCityTemperature = $(this)
    .closest('.playerCard')
    .find('.temperature')[0].innerHTML;
  let addCityCondition = $(this)
    .closest('.playerCard')
    .find('.condition')[0].innerHTML;
  let addCityConditionIcon = $(this)
    .closest('.playerCard')
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
  let deleteCity = $(this).closest('.playerCard').find('.name')[0].innerHTML;
  console.log(deleteCity);
  await data.deleteDataAboutCity(deleteCity);
});

loadPage();
