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
    if(e.which===71){
      alert('You pressed a G key!');
    }
  })
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
});
