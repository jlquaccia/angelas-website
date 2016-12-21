(function() {
  function GalleryImages() {
    var GalleryImages = {};

    var images = [
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/FullSizeRender.png', id: 0, class: 'img0'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/Pole+Backbend.png', id: 1, class: 'img1'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/eight.png', id: 2, class: 'img2'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/eleven.png', id: 3, class: 'img3'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/five.png', id: 4, class: 'img4'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/four.png', id: 5, class: 'img5'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/nine.png', id: 6, class: 'img6'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/one.png', id: 7, class: 'img7'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/seven.png', id: 8, class: 'img8'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/six.png', id: 9, class: 'img9'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/ten.png', id: 10, class: 'img10'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/thirteen.png', id: 11, class: 'img11'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/three.png', id: 12, class: 'img12'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/twelve.png', id: 13, class: 'img13'},
      {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/two.png', id: 14, class: 'img14'},
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