
$(window).load(function(){
    $(document).ready(function () {

        var $container = $('#posts');
        var $images = $("img");

        if ($container.length) {
            $container.imagesLoaded(function () {
                $container.isotope({
                    itemSelector: '.post'
                });

                $images.load(function () {
                    $container.isotope('reLayout');
                });
            });
        }
    });

});
