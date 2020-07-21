function addEventClick(){
  console.log("addevent");
  var square = $('div.square');
  var grid = elemGenerator(square);
  var clicked_square = selectedOnClick(grid);

}

function selectedOnClick(grid){
  $(document).on("click", 'div.square',function(){

    $.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method : "GET",
        success: function(data,state){

          var numero = data['response'];
          var success = data['success'];

          if (success){
            if(numero <= 5){
              console.log("il numero è:",numero);

            } else {
              console.log("il numero è:",numero);


            }
          }
        },
        error: function(request , state, error,){
          console.log(request, "request");
          console.log(state, "state");
          console.log("errore" , error);
        }
    }
  );



});
}



function elemGenerator(square){
  console.log("elementi");
  var square = $('div.square');
  var target = $('#container');
  for (var i = 0; i < 36; i++) {
    target.append('<div class="square"></div>');
  }
}

function init(){
  console.log("Container used to invoke the functions!");
  // elemGenerator();
  addEventClick();

}

// 1) Document Ready-----
$(document).ready(init);
