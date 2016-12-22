(function() {
  function ScrollEffects() {
    function navShowHideScrollEffect() {
      // keep track of last scroll
      var lastScroll = 0;

      $(window).scroll(function(event) {
        // sets the current scroll position
        var st = $(this).scrollTop();

        // determines up-or-down scrolling
        if (st > lastScroll) {
          // replace this with your function call for downward-scrolling
          // maybe some timeout?
          // setTimeout( function () {
            $('.navbar.topFixedNav').addClass('fixedAtTop');
          // }, 800);
        } else {
          // replace this with your function call for upward-scrolling
          $('.navbar.topFixedNav').removeClass('fixedAtTop');
        }

        // updates scroll position
        lastScroll = st;
      });
    }

    return {
      navShowHideScrollEffect: navShowHideScrollEffect
    };
  }

  angular
    .module('angelasWebsite')
    .factory('ScrollEffects', ScrollEffects);
})();