var app = angular.module('app', []);

app.directive('loading', function() {
    return {
        restrict: 'E',
        template: '<div class="wrapper"><div class="load-bar"><div class="load-bar-inner"><span id="counter"></span></div></div></div>',
        replace: true,
        link: function(scope, elt, attr) {

            var fileSize = 300;
            var init = 2;
            var i = 0;

                setInterval(function () {
                    if(i < 6) {
                        var newinit = init * init;
                        init += 30;
                        i++;
                        var progress = newinit / 300;
                        var str = progress + '%';
                        elt.children().children().css('width', str);
                        console.log(str)
                    } else {
                        elt.children().children().css('width', '100%');
                    }

                }, 1000)

        }
    }
})