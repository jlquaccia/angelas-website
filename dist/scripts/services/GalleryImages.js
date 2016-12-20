(function() {
  function GalleryImages() {
    var GalleryImages = {};

    var images = [
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/FullSizeRender.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/Pole+Backbend.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/eight.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/eleven.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/five.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/four.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/nine.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/one.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/seven.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/six.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/ten.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/thirteen.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/three.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/twelve.png'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/two.png'},
    ];

    GalleryImages.getImages = function() {
      return images;
    };

    return GalleryImages;
  }

  angular
    .module('angelasWebsite')
    .factory('GalleryImages', GalleryImages);
})();