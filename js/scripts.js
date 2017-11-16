function User(title, year, score) {
  this.movieTitle = title;
  this.movieYear = year;
  this.movieScore = score;
}



$(function() {
  $("form#user-form").submit(function(event){
    event.preventDefault();
    var inputMovieTitle = $("#movie-title").val();
    var inputMovieYear = $("#movie-year").val();
    var inputMovieScore = parseInt($("#movie-score").val());

    var newUser = new User(inputMovieTitle, inputMovieYear, inputMovieScore);


    $("#table").append(newUser);
    console.log(newUser);

    $("#button").click(function(){

    });
  });
});
