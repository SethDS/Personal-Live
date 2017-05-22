/**
 * Created by Seth on 2/10/2017.
 */
angular.module('myApp').controller('profileCtrl', function($scope, profileService, picAddService, mapDirService){

    $scope.mainHide = true;

    $scope.classAll = false;
    $scope.classA = false;
    $scope.classJ = false;
    $scope.classJob = false;
    $scope.classK = false;
    $scope.mapHider = false;

    $scope.submitAdv = function(newAdventure){
        profileService.addAdv(newAdventure);
        $scope.mapHider = true;

        console.log(profileService.adventures);
    }; //end of sumitAdv function



    $scope.profileNavHighlight = function(){
        TweenMax.to($('.profile-nav'), 1, {
            'background-color': 'white'
        })
    };

    $scope.profileNavToggle = function(){

        TweenMax.to($('.profile-nav'), 1, {
            width: '95vw',
            right: 0
        });
        TweenMax.to($('.profile-nav-toggle'), 1, {
            display: 'flex',
            ease: 'Power2.easeOut'
        })
    };

    $scope.newAdventureShow = function(){
        TweenMax.to($('.profile-nav-toggle'), 1, {
            display: 'none'
        });
        TweenMax.to($('.profile-nav'), 1, {
            width: '5vw', opacity: 0
        });
        TweenMax.to($('.new-adventure-show'), 1, {
            display: 'flex',
            'z-index': 95
        } )
    };

    $scope.profileShow = function(){
        TweenMax.to($('.new-adventure-show'),2, {
            display: 'none'
        } );
        TweenMax.to($('.profile-nav-toggle'), 1, {display: 'none'});
        TweenMax.to($('.profile-nav'), 1, {width: '5vw', 'background-color': 'transparent'})

    }
});