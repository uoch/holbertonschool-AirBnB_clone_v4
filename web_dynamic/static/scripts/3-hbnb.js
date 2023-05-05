const url = 'http://0.0.0.0:5001/api/v1/status/';

function handleData(data, bool) {
  let myVar;
  if (bool) {
    myVar = data;
  } else {
    myVar = false;
  }
  return myVar;
}

$(document).ready(() => {
  $('input[type="checkbox"]').change((event) => {
    let dic = {};
    let id;
    const checkbox = $(event.target);
    if (checkbox.is(':checked')) {
      id = handleData(checkbox.data('id'), true);
    } else {
      id = handleData(checkbox.data('id'), false);
    }
    dic['amenity-id'] = id;
    $('div.amenities h4').text(JSON.stringify(dic));
  });

  $.getJSON(url, (data) => {
    if (data.status === "ERROR") {
      return;
    } else {
      $('#api_status').addClass('available');
    }
  });

  $.ajax({
    method: "POST",
    url: "http://0.0.0.0:5001/api/v1/places_search",
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: (data) => {
      const places = JSON.parse(data);
      places.forEach((place) => {
        const $article = $('<article>');
        const $titleBox = $('<div>').addClass('title_box');
        const $title = $('<h2>').text(place.name);
        const $price = $('<div>').addClass('price_by_night').text(`$${place.price_by_night}`);
        $titleBox.append($title, $price);
        const $information = $('<div>').addClass('information');
        const $maxGuest = $('<div>').addClass('max_guest').text(`${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}`);
        const $numberRooms = $('<div>').addClass('number_rooms').teaxt(`${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}`);
        const $numberBathrooms = $('<div>').addClass('number_bathrooms').text(`${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}`);
        $information.append($maxGuest, $numberRooms, $numberBathrooms);
        const $user = $('<div>').addClass('user').html(`<b>Owner:</b> ${place.user.first_name} ${place.user.last_name}`);
        const $description = $('<div>').addClass('description').html(place.description);
        $article.append($titleBox, $information, $user, $description);
        $('.places').append($article);
      });
    },
    error: (xhr, status, error) => {
      console.error(error);
    },
  });
});
