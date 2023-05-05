const ur ='http://0.0.0.0:5001/api/v1/status/'
$(document).ready(() => {
$(() => {
    $.getJSON(ur, (data) => {
        if (data.status === "ERROR"){
            return;
        } else{
            $('#api_status').addClass('available');
        }
    });
  })})