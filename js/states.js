$(function() {
        $('#home').show();
        $('#home-tab').on('click', function(e) {
            e.preventDefault();
            $('section').hide();
            $('#home').show();
        });
        $('#proj-tab').on('click', function(e) {
            e.preventDefault();
            $('section').hide();
            $('.loading').toggleClass('.loading', 'bl')
            $('#projects').show();
        });
        $('#blog-tab').on('click', function(e) {
            e.preventDefault();
            $('section').hide();
            $('#blog').show();
        });
});
