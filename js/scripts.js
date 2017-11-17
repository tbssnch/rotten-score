//BACK END//

var userInput = [];

function User(title, year, score) {
  this.movieTitle = title;
  this.movieYear = year;
  this.movieScore = score;
}


//FRONT END//
$(function() {
  $("form#user-form").submit(function(event){
    event.preventDefault();
    var inputMovieTitle = $("#movie-title").val();
    var inputMovieYear = $("#movie-year").val();
    var inputMovieScore = parseInt($("#movie-score").val());

    var newUser = new User(inputMovieTitle, inputMovieYear, inputMovieScore);
    userInput.push(newUser);
    console.log(userInput);

    $("button#button").click(function(){
      userInput.sort(function(a, b) {
        if (a.movieScore < b.movieScore) {
          return 1;
        }
        if (a.movieScore > b.movieScore) {
          return -1;
        }
        return 0;
      });

    });

    $("#tpain").append("<tr><td>" + newUser.movieTitle + "</td> <td>" + newUser.movieYear + "</td> <td>" + newUser.movieScore + "</td></tr>");
  });
});
