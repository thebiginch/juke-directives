juke.directive('sidebar', function() {

    return {
        restrict: 'E',
        templateUrl: '/js/sidebar/sidebar.html'
        // link: function(scope, element, attr) {},
        // scope: {}
    }

});

juke.directive('player', function() {
    
    return {
        restrict: 'E',
        templateUrl: '/js/player/player.html'
        // link: function(scope) {

        // }
    }

});

juke.directive('albumList', function(){

	return {
		restrict: 'E',
		templateUrl: '/js/album/templates/albums.html',
		scope: {
			albums: '='
		}

	}

});