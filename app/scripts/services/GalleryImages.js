(function() {
  function GalleryImages() {
    var GalleryImages = {};

    // var images = [
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/FullSizeRender.png', id: 0, class: 'img0'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/Pole+Backbend.png', id: 1, class: 'img1'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/eight.png', id: 2, class: 'img2'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/eleven.png', id: 3, class: 'img3'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/five.png', id: 4, class: 'img4'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/four.png', id: 5, class: 'img5'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/nine.png', id: 6, class: 'img6'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/one.png', id: 7, class: 'img7'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/seven.png', id: 8, class: 'img8'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/six.png', id: 9, class: 'img9'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/ten.png', id: 10, class: 'img10'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/thirteen.png', id: 11, class: 'img11'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/three.png', id: 12, class: 'img12'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/twelve.png', id: 13, class: 'img13'},
    //   {src: 'https://s3-us-west-1.amazonaws.com/angelas-website/two.png', id: 14, class: 'img14'},
    // ];

    var images = [
      {largeSrc: 'assets/images/FullSizeRender.jpeg', src: 'assets/images/mobile/FullSizeRender.jpeg', id: 0, class: 'img0'},
      {largeSrc: 'assets/images/Pole Backbend.jpeg', src: 'assets/images/mobile/Pole Backbend.jpeg', id: 1, class: 'img1'},
      {largeSrc: 'assets/images/eight.jpeg', src: 'assets/images/mobile/eight.jpeg', id: 2, class: 'img2'},
      {largeSrc: 'assets/images/eleven.jpeg', src: 'assets/images/mobile/eleven.jpeg', id: 3, class: 'img3'},
      {largeSrc: 'assets/images/five.jpeg', src: 'assets/images/mobile/five.jpeg', id: 4, class: 'img4'},
      {largeSrc: 'assets/images/four.jpeg', src: 'assets/images/mobile/four.jpeg', id: 5, class: 'img5'},
      {largeSrc: 'assets/images/nine.jpeg', src: 'assets/images/mobile/nine.jpeg', id: 6, class: 'img6'},
      {largeSrc: 'assets/images/one.jpeg', src: 'assets/images/mobile/one.jpeg', id: 7, class: 'img7'},
      {largeSrc: 'assets/images/seven.jpeg', src: 'assets/images/mobile/seven.jpeg', id: 8, class: 'img8'},
      {largeSrc: 'assets/images/six.jpeg', src: 'assets/images/mobile/six.jpeg', id: 9, class: 'img9'},
      {largeSrc: 'assets/images/ten.jpeg', src: 'assets/images/mobile/ten.jpeg', id: 10, class: 'img10'},
      {largeSrc: 'assets/images/thirteen.jpeg', src: 'assets/images/mobile/thirteen.jpeg', id: 11, class: 'img11'},
      {largeSrc: 'assets/images/three.jpeg', src: 'assets/images/mobile/three.jpeg', id: 12, class: 'img12'},
      {largeSrc: 'assets/images/twelve.jpeg', src: 'assets/images/mobile/twelve.jpeg', id: 13, class: 'img13'},
      {largeSrc: 'assets/images/two.jpeg', src: 'assets/images/mobile/two.jpeg', id: 14, class: 'img14'},
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