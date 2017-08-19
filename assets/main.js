$(function() {
  var myReportcard = "https://www.codeschool.com/users/knutj.json";
  $.ajax({
    url: myReportcard,
    dataType: 'jsonp',
    success: function(response){
      response.courses.completed.forEach(function(element){
        $('#badges').append("<div class='course'><h3>" +  element.title + "</h3>"+
        "<img src='"+ element.badge +"' /><a href='" +
        element.url + "' target='_blank' class='btn btn-primary'>See Course</a></div>")
      })
    }
  });

});
