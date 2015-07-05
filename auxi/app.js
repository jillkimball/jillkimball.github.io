'use strict';

angular.module('jkart', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {

    // Set of Photos
    $scope.photos = [
        {src: '../pix/paintings/01-after-the-rain.jpg', desc: 'After the Rain', info: 'oil on canvas, 32" x 40". 2010.'},
        {src: '../pix/paintings/02-aesop.jpg', desc: 'The Crane and the Fox', info: 'oil on canvas, 32" x 42". 2012.'},
        {src: '../pix/paintings/03-standoftrees.jpg', desc: 'Stand of Trees', info: 'oil on canvas, 22" x 29". 2010.'},
        {src: '../pix/paintings/04-the-pull-off.jpg', desc: 'Clearing', info: 'oil on canvas, 18" x 24". 2012.'},
        {src: '../pix/paintings/05-In-the-presence.jpg', desc: 'In the Presence', info: 'oil on canvas, 18" x 48". 2011.'},
        {src: '../pix/paintings/06-the-far-off-sound-of-rushing-water.jpg', desc: 'The Far-Off Sound of Rushing Water', info: 'oil on canvas, 22" x 26". 2004.'},
        {src: '../pix/paintings/07-in-the-net-of-mist.jpg', desc: 'In the Net of the Mist', info: 'oil on canvas, 24" x 30". 2004.'},
        {src: '../pix/paintings/08-dream-of-waterfall-mexico.jpg', desc: 'Dream of a Waterfall in Mexico', info: 'oil on canvas, 24" x 30". 2012. '},
        {src: '../pix/paintings/09-stillness-afternoon-landscape.jpg', desc: 'Stillness in Afternoon', info: 'oil on canvas, 22" x 30". 2004.'},
        {src: '../pix/paintings/10-cove.jpg', desc: 'Cove', info: 'oil on canvas, 24" x 30".'},
        {src: '../pix/paintings/11-big-sky-and-road.jpg', desc: 'Big Sky and Road', info: 'oil on canvas, 30" x 36". 2004.'},
        {src: '../pix/paintings/12-round-mountain.jpg', desc: 'Round Mountain', info: 'oil on canvas, 48" x 60". 2005'},
        {src: '../pix/paintings/13-path.jpg', desc: 'Path', info: 'oil on canvas, 22" x 30". 2004.'},
        {src: '../pix/paintings/14-down-river.jpg', desc: 'Down River', info: 'oil on canvas, 48" x 60". 2005.'},
        {src: '../pix/paintings/15-city-park.jpg', desc: 'City Park', info: 'oil on canvas, 14" x 18", 2000.'},
        {src: '../pix/paintings/16-skyline.jpg', desc: 'Skyline', info: 'oil on canvas, 14" x 18", 2000.'},
        {src: '../pix/paintings/17-emergence.jpg', desc: 'Emergence', info: 'oil on canvas, 24" x 30". 1998.'},
        {src: '../pix/paintings/18-primaries.jpg', desc: 'Primaries', info: 'oil on panel, 18" x 21". 1994.'},
        {src: '../pix/paintings/19-yellow-square.jpg', desc: 'Yellow Square', info: '18" x 22", 1994.'},
        {src: '../pix/paintings/20-element.jpg', desc: 'Element', info: 'oil on panel, 60" x 24". 1994.'}
    ];

    // Set of drawings
    $scope.drawings = [
        {src: '../pix/drawings/01-avi.jpg', desc: 'Avi', info: 'pencil and chalk on paper, 14" x 18". 2014.'},
        {src: '../pix/drawings/02-orphanage.jpg', desc: 'Orphanage', info: 'pen and pencil on paper. 16" x 26". 2015.'},
        {src: '../pix/drawings/03-swan.jpg', desc: 'Swan', info: 'pen and colored pencil on paper. 8" x 10". 2010.'},
        {src: '../pix/drawings/04-hares.jpg', desc: 'Hares', info: 'pen and colored pencil on paper, 12" x 16". 2010.'},
        {src: '../pix/drawings/05-tortoise.jpg', desc: 'Tortoise', info: 'pen and colored pencil on paper, 12" x 16". 2010.'},
        {src: '../pix/drawings/05a-dinosaur-drawing-etsy.jpg', desc: 'Dinosaur', info: 'pen and pencil on paper'},
        {src: '../pix/drawings/06-public-face-I.jpg', desc: 'Public Face I', info: 'oil stick on primed paper, 32" x 48". 2008.'},
        {src: '../pix/drawings/07-public-face-II.jpg', desc: 'Public Face II', info: 'oil stick on primed paper, 32" x 48". 2008.'},
        {src: '../pix/drawings/08-public-face-III.jpg', desc: 'Public Face III', info: 'oil stick on primed paper, 32" x 48". 2008.'},
        {src: '../pix/drawings/09-public-face-IV.jpg', desc: 'Public Face IV', info: 'oil stick on primed paper, 32" x 48". 2008.'},
        {src: '../pix/drawings/10-public-face-V.jpg', desc: 'Public Face V', info: 'oil stick on primed paper, 32" x 48". 2008.'},
        {src: '../pix/drawings/11-public-face-VI.jpg', desc: 'Public Face VI', info: 'oil stick on primed paper, 32" x 48". 2008.'},
        {src: '../pix/drawings/12-accident.jpg', desc: 'Accident', info: 'pen and ink on paper. 12" x 16". 1986.'},
        {src: '../pix/drawings/13-enclosure.jpg', desc: 'Enclosure', info: '30". 1988.'},
    ];
    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});
