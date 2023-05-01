function handleData(data, bool) {
    if (bool) {
      let myVar = data;
      return myVar
    } else {
        let myVar;
        return false;
    }
  }

$(document).ready(() => {
    $('input[type="checkbox"]').change((event) => {
        let dic = {}
        const checkbox = $(event.target);
        if (checkbox.is(':checked')) {
            const id  = handleData(checkbox.data('id'),true);
            
        } else {
            const id  = handleData(checkbox.data('id'),false);
        }
        dic['amenity-id'] = id;
        $('div.amenities h4').text(dic);
      });
})
