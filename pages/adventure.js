/**
 * Created by Admin on 05.05.2017.
 */
angular.module('nikitaPad', ['ui.bootstrap.modal'])
    .controller('npCtrl', function ($scope) {

        $scope.getRandomSpan = function () {
            $scope.mathRandom = Math.floor((Math.random() * 11) - 5)
            console.log( Math.floor((Math.random() * 10) - 5))
        }
    });
