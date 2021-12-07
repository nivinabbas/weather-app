var source = $('#cities-template').html();
var template = Handlebars.compile(source);


class Renderer {
  constructor() {
    
  }

  renderData(data) {
    const citiesData = { "citiesData": data };
 
    $('.cityCard').empty();
    let addToHTML = template(citiesData);
    $('.cityCard').append(addToHTML);
  }
}
