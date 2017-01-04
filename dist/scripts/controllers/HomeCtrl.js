(function() {
  function HomeCtrl($scope, $rootScope, GalleryImages, ScrollEffects, GoogleMaps) {
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

    // invoke right away
    (function() {
      // ScrollEffects.navShowHideScrollEffect();
      GoogleMaps.initMap();

      $(document).ready(function() {
        // Scrollspy initiation
        $('body').scrollspy({
          target: '#scroll-spy',
          offset: 70
        });
        
        // On render, adjust body padding to ensure last Scroll target can reach top of screen
        var height = $('#contact').innerHeight();
        var windowHeight = $(window).height();
        var navHeight = $('nav.navbar').innerHeight();
        var siblingHeight = $('#contact').nextAll().innerHeight();
        
        if (height < windowHeight) {
          $('body').css('padding-bottom', windowHeight-navHeight-height-siblingHeight + 'px');
        }
        
        // On window resize, adjust body padding to ensure last Scroll target can reach top of screen
        $(window).resize(function(event) {
          var height = $('#contact').innerHeight();
          var windowHeight = $(window).height();
          var navHeight = $('nav.navbar').innerHeight();
          var siblingHeight = $('#contact').nextAll().innerHeight();
          
          if (height < windowHeight) {
            $('body').css('padding-bottom', windowHeight-navHeight-height-siblingHeight + 'px');
          }
        });
        
        $('nav.navbar a, .scrollTop').click(function(event) {
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash (#)
            var hash = this.hash;
            // Ensure no section has relevant class
            $('section').removeClass('focus');
            // Add class to target
            $(hash).addClass('focus');
            // Remove the class after timeout
            setTimeout(function() {
              $(hash).removeClass('focus');
            }, 2000);
            
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 600, function() {
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
            
            // Collapse Navbar for mobile view
            $('.navbar-collapse').collapse('hide');
          }
        });
        
        $(window).scroll(function() {
          var scrollPos = $('body').scrollTop();
          
          if (scrollPos > 0) {
            $('.navbar').addClass('show-color');
            $('.scrollTop').addClass('show-button');
          } else {
            $('.navbar').removeClass('show-color');
            $('.scrollTop').removeClass('show-button');
          }

          // if (scrollPos > 2500) {
          //   $('#about').addClass('extraMarginBottom');
          //   $('#contact').addClass('showContact');
          // } else {
          //   $('#about').removeClass('extraMarginBottom');
          //   $('#contact').removeClass('showContact');
          // }
        });
      });
    })();

    $scope.goToGallery = function() {
      $('html, body').animate({
        scrollTop: $('#gallery').offset().top
      }, 600);
    };

    $rootScope.scrollToTop = function() {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
    };
  }

  angular
    .module('angelasWebsite')
    .controller('HomeCtrl', ['$scope', '$rootScope', 'GalleryImages', 'ScrollEffects', 'GoogleMaps', HomeCtrl]);
})();