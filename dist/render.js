var source = $('#players-template').html();
var template = Handlebars.compile(source);


class Renderer {
  // constructor(data) {
  //   this.data = data;
  // }

  renderData(data) {
    const citiesData = { "citiesData": data };
 
    $('.teamCard').empty();
    let addToHTML = template(citiesData);
    $('.teamCard').append(addToHTML);
  }
}
