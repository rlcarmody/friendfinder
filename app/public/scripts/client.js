$('.modal').modal();
const postData = (userInfo) => {
  $.post('api/friends', userInfo, function (response) {
    $('#modal-message').text('Meet your new friend!')
    $('#matchName').text(response.name);
    $('#matchImage').attr('src', response.photoURL);
    $('#yourNewFriend').modal('open');
    $('#friendForm').trigger('reset');
  }).fail(function(response,message,errorType) {
    $('#modal-message').text(errorType)
    $('#matchName').text(response.responseText);
    $('#matchImage').attr('src', '../images/error.png');
    $('#yourNewFriend').modal('open');
  })
}

$('#submitForm').on('click', function (e) {
  e.preventDefault();
  const name = $('#name').val().trim();
  const photoURL = $('#photoURL').val().trim();
  const scoresElements = Array.from(document.querySelectorAll('[name=scores]'));
  const scores = scoresElements.map(e => e.value)

  const user = {
    name: name,
    photoURL: photoURL,
    scores: scores
  }
    postData(user);
})

$('#favoritecolor').on('mousemove', function() {
  $('#colorblock').css('background-color',`hsl(${$('#favoritecolor').val()},100%,50%)`)
  $('input[type=range] + .thumb').css('background-color',`hsl(${$('#favoritecolor').val()},100%,50%)`)
  $('nav[role=navigation]').attr('style',`background-color:hsl(${$('#favoritecolor').val()},100%,50%) !important;`)
})