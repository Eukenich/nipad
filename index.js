angular.module('adventure', ['ui.bootstrap.modal'])
  .controller('npCtrl', function ($scope) {
    $scope.localKeys = localStorage.localkeys
    $scope.texts = (angular.isUndefined($scope.localKeys)) ? [] : $scope.localKeys.split(',')
    $scope.textInfo = {sym: '0', words: '0'}
    $scope.openedTabs = []
    $scope.openedTabText = []
    $scope.currTextName = ''
    $scope.textArray = JSON.parse(localStorage.getItem('store')) || []
    $scope.textFill = {}

    $scope.saveText = (text) => {
      if (text.body === undefined) text.body = ''
      let res = false
      $scope.textArray.forEach(savedText => {
        if (savedText.title === text.title) {
          res = true
          $scope.errMesage = 'Title already exist!'
          console.log('1')
        }
      })
      if (!res) {
        console.log('2')
        //$scope.errMesage = 'relax it\'s fine'
        $scope.textArray.push(text)
        localStorage.setItem('store', JSON.stringify($scope.textArray))
        $(function () {
          $('#mSave').modal('toggle');
        });
      }
    }

    $scope.deleteText = (text) => {
      $scope.textArray.splice($scope.textArray.indexOf(text), 1)
      localStorage.setItem('store', JSON.stringify($scope.textArray))
    }
  });























