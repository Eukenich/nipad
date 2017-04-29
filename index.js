
angular.module('nikitaPad', ['ui.bootstrap.modal'])
  .controller('npCtrl', function ($scope/*, $uibModal*/) {
    $scope.tempLoad = '1'

    $scope.downloadText = function (text) {
            text = (JSON.parse(localStorage.saveText)) ? JSON.parse(localStorage.saveText) : ''
      $scope.loaded = text
    }

    $scope.uploadText = function (text) {
      localStorage.saveText = JSON.stringify(text)
    }

  $scope.open = function() {
    $scope.showModal = true;
  };

  $scope.ok = function() {
    $scope.showModal = false;
  };

  $scope.cancel = function() {
    $scope.showModal = false;
  };
    });