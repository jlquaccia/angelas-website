(function() {
  function HomeCtrl($scope, GalleryImages) {
    $scope.images = GalleryImages.getImages();
  }

  angular
    .module('angelasWebsite')
    .controller('HomeCtrl', ['$scope', 'GalleryImages', HomeCtrl]);
})();