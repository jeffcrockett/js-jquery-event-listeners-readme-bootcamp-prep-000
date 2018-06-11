function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('tasty');
  })
}

function pressIt(){
  $('#typing').on('keydown', function(e){
    console.log(e.which)
  })
}

$(document).ready(function(){

getIt();
frameIt();

});
