/**
 * Created by Seth on 2/23/2017.
 */
angular.module('myApp').service('profileService', function(){


    var adventures = [];

    this.adventures = adventures;


    this.addAdv = function(adv){
       var newADV = {
           title: adv.title,
           desc: adv.desc,
           directions: adv.directions,
           packlist: adv.packlist,
           images: [adv.one, adv.two, adv.three, adv.four, adv.five, adv.six]
       };

       adventures.push(newADV);
    };


});