angular.module('nikitaPad', ['ui.bootstrap.modal'])
  .controller('npCtrl', function ($scope) {
    $scope.localKeys = localStorage.localkeys
    $scope.texts = (angular.isUndefined($scope.localKeys)) ? [] : $scope.localKeys.split(',')
    $scope.textInfo = {sym:'0', words:'0'}
    //$scope.hideInfo = false
    $scope.downloadText = function (textDist) {
      let dist = textDist
      $scope.loaded = (JSON.parse(localStorage.getItem(dist))) ? JSON.parse(localStorage.getItem(dist)) : alert('Nothing to download!')
    }

    $scope.addText = function (textLocalKey) {
      $scope.texts.push(textLocalKey)
      localStorage.localkeys = $scope.texts
    }

    $scope.dellText = function (textLocalKey) {
      let dist = textLocalKey
      $scope.texts.splice($scope.texts.indexOf(textLocalKey), 1)
      localStorage.localkeys = $scope.texts
      localStorage.removeItem(dist)
    }

    $scope.uploadText = function (textLocalKey, text) {
      let dist = textLocalKey
      if (text) {
        localStorage.setItem(dist, JSON.stringify(text))
      }
      else {
        alert('Text area is empty!')
      }
    }

    $scope.loadedLength = function (textDist) {
      let dist = textDist
      let load = (JSON.parse(localStorage.getItem(dist))) ? JSON.parse(localStorage.getItem(dist)) : ''
      let loaded = load.text
     // $scope.hideInfo = !$scope.hideInfo
      $scope.textInfo.sym = (angular.isUndefined(loaded)) ? 0 : loaded.length
      $scope.textInfo.words = (angular.isUndefined(loaded)) ? 0 : loaded.split(' ').length

    }
    $scope.openNewTab=function() {

    }
  });