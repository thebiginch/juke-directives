juke.directive('sidebar', function() {

    return {
        restrict: 'E',
        templateUrl: '/js/directives/sidebar.html'
        // link: function(scope, element, attr) {},
        // scope: {}
    }

});

juke.directive('player', function(PlayerFactory) {
    
    return {
        restrict: 'E',
        templateUrl: '/js/directives/player.html',
        link: function(scope) {

          angular.extend(scope, PlayerFactory);
            
          scope.toggle = function () {
            if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
            else PlayerFactory.resume();
          };

          scope.getPercent = function () {
            return PlayerFactory.getProgress() * 100;
          };
        }
    }

});

juke.directive('albumList', function(){

	return {
		restrict: 'E',
		templateUrl: '/js/directives/albums.html',
		scope: {
			albums: '='
		}
	}
});

juke.directive('songTable', function(PlayerFactory){

    return {
        restrict: 'E',
        templateUrl: '/js/directives/songTable.html',
        scope: {
            songList: '='
        },
        link: function(scope, elements, attrs) {
          scope.toggle = function (song) {
            if (song !== PlayerFactory.getCurrentSong()) {
              PlayerFactory.start(song, scope.songList);
            } else if ( PlayerFactory.isPlaying() ) {
              PlayerFactory.pause();
            } else {
              PlayerFactory.resume();
            }
          };

          scope.getCurrentSong = function () {
            return PlayerFactory.getCurrentSong();
          };

          scope.isPlaying = function (song) {
            return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
          };
        }
    }
});

juke.directive('doubleClick', function(PlayerFactory){
  return {
    restrict: 'A',
    scope: {
      doubleClick: '&',
    },
    link: function(scope,element){
      
      element.on('dblclick',function(e){
        scope.doubleClick();

      });

      // scope.toggle = function (song) {
      //       if (song !== PlayerFactory.getCurrentSong()) {
      //         PlayerFactory.start(song, scope.songList);
      //       } else if ( PlayerFactory.isPlaying() ) {
      //         PlayerFactory.pause();
      //       } else {
      //         PlayerFactory.resume();
      //       }
      //     };
    }
  }

});