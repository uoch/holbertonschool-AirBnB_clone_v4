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
});

