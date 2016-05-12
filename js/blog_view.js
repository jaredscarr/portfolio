(function(module) {
  var filters = {};
  Article.articles = [];

  function Article (article) {
    this.title = article.title;
    this.datePublished = article.datePublished;
    this.body = article.body;
    this.image = article.image;
  }

  Article.prototype.toHtml = function() {
    var templateScript = $('#article-template').html();
    var compiledTemplate = Handlebars.compile(templateScript);
    this.daysAgo = parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000);
    this.publishStatus = this.datePublished ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    var html = compiledTemplate(this);
    $('#blog').append(html);
  };

  Article.initIndexPage = function() {
    Article.portfolioItems.forEach(function(a){
      $('#blog').append(a.toHtml());
    });
    stateChange.initToggling();
  };


  //new code added
  //this function will take lines 46 - 52 and add them to one functions
  Article.loadAll = function(data) {
    data.sort(function(a,b) {
      return (new Date(b.datePublished)) - (new Date(a.datePublished));
    });

    data.forEach(function(ele) {
      Article.articles.push(new Article(ele));
    });
  };

  //this will retrieve the data from the local source, process it and hand of control to the view
  Article.fetchAll = function() {
    if (localStorage.data) {
      Article.loadAll(JSON.parse(localStorage.data));
      Article.initIndexPage(); //need to figure out what to name this and why
    } else {
      $.getJSON('article.json', function(data) {
        Article.loadAll(data);
        localStorage.data = JSON.stringify(data);
        Article.initIndexPage(); //need to figure out what to name this and why
      });
    }
  };

  module.Article = Article;
  module.filters = filters;

})(window);
