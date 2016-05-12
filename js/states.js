(function(module) {
  var homeController = {};
  var projectController = {};
  var blogController = {};

  homeController.index = function() {
    $('.tab-content').hide();
    $('#home').fadeIn();
  };

  var projectController = {};
  projectController.index = function() {
    $('.tab-content').hide();
    $('#projects').fadeIn();
  };

  var blogController = {};
  blogController.index = function() {
    $('.tab-content').hide();
    $('#blog').fadeIn();
  };

  module.homeController = homeController;
  module.projectController = projectController;
  module.blogController = blogController;
})(window);
// $(function() {
    // this was for previous nav but need to test before removing
    // $('li').on('click', function() {
    //     $(this).addClass('active').siblings().removeClass('active');  
    // });
  // Grab the template script
//   var theTemplateScript = $("#address-template").html();

//   // Compile the template
//   var theTemplate = Handlebars.compile(theTemplateScript);

//   // Define our data object
//   var context={
//         "title": "The beginning",
//         "date_pub": "05-5-2016",
//         "body": "alsjdfklasjdlkfjaslkdjflkasjdlfajsldfjals;kdjflas",
//         "status": "published",
//   };

//   // Pass our data to the template
//   var theCompiledHtml = theTemplate(context);

//   // Add the compiled html to the page
//   $('.content-placeholder').html(theCompiledHtml);
// });
