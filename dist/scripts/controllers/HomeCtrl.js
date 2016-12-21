(function() {
  function HomeCtrl($scope, GalleryImages) {
    $scope.images = GalleryImages.getImages();
    $scope.imageOverlayStatus = 'closed';
    $scope.currentEnlargedImage = '';
    $scope.leftArrow = '';
    $scope.rightArrow = '';
    
    $scope.openImageOverlay = function(index) {
      $scope.leftArrow = '';
      $scope.rightArrow = '';
      $scope.imageOverlayStatus = 'open';
      $scope.currentEnlargedImage = $scope.images[index];

      if ($scope.currentEnlargedImage.id === 0) {
        $scope.leftArrow = 'hide';
      }

      if ($scope.currentEnlargedImage.id === $scope.images.length - 1) {
        $scope.rightArrow = 'hide';
      }
    };

    $scope.closeImageOverlay = function() {
      $scope.imageOverlayStatus = 'closed';
    };

    $scope.nextImage = function() {
      if ($scope.currentEnlargedImage.id < $scope.images.length - 1) {
        $scope.currentEnlargedImage = $scope.images[$scope.currentEnlargedImage.id + 1];

        if ($scope.currentEnlargedImage.id > 0) {
          $scope.leftArrow = '';
        }

        if ($scope.currentEnlargedImage.id === $scope.images.length - 1) {
          $scope.rightArrow = 'hide';
        }
      }
    };

    $scope.prevImage = function() {
      if ($scope.currentEnlargedImage.id > 0) {
        $scope.currentEnlargedImage = $scope.images[$scope.currentEnlargedImage.id - 1];

        if ($scope.currentEnlargedImage.id === 0) {
          $scope.leftArrow = 'hide';
        }

        if ($scope.currentEnlargedImage.id < $scope.images.length - 1) {
          $scope.rightArrow = '';
        }
      }
    };

    console.log($scope.images.length);
  }

  angular
    .module('angelasWebsite')
    .controller('HomeCtrl', ['$scope', 'GalleryImages', HomeCtrl]);
})();