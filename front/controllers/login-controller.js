/**
 * Created by Seth on 2/4/2017.
 */
angular.module('myApp').controller('loginCtrl', function ($scope, loginService, $state) {

    $scope.login = function(user){

        if(user.email === loginService.theUser.email && user.password === loginService.theUser.password){
            $state.go('profile')
        }
        else{
            alert('Email or password error.  Use "tester" for both fields.')
        }

    };

});