$(document).ready(function() {
  console.log ('Howdy!');
  $('.generator').on('click', createProject);
  $('.container').on('click', '.delete', deleteProject);
});
var propertyID = 0;
var squareFootage = 0;
var price = 0;

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function createProject() {
  propertyID = randomNumber(100, 9999);
  squareFootage = randomNumber(10, 3000);
  price = randomNumber(1, 20);

  console.log(propertyID, squareFootage, price);

  appendDOM();

}
createProject();

function appendDOM(){
  $('.container').append('<div class ="property"></div>');

  var $el = $('.container').children().last();

  $el.append('<p> Property ID: ' + propertyID + '</p>');
  $el.append('<p>' + squareFootage + ' sq.ft.</p>');
  $el.append('<p> $' + price + '/sq.ft.</p>');
  $el.append('<button class="delete">Remove</button>');

  //$el.append('<button class="delete">Remove</button>');
  $el.toggle().fadeToggle(1000);

}

function deleteProject() {
  $(this).parent().fadeOut(1000);
}
