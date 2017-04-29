
angular.module('nikitaPad', [])
  .controller('npCtrl', function ($scope) {
    $scope.tempLoad = '1'

    $scope.downloadText = function (text) {
            text = (JSON.parse(localStorage.saveText)) ? JSON.parse(localStorage.saveText) : ''
      $scope.loaded = text
    }

    $scope.uploadText = function (text) {
      localStorage.saveText = JSON.stringify(text)
    }

/*
    fooSvc = angular.injector(['foo']).get('simpleService');
    var barSvc = angular.injector(['bar']).get('simpleService');

    console.log(fooSvc.name)*/






    $scope.saveTextLocal = function (text) {
      localStorage.curText = JSON.stringify(text)
    }

  });
