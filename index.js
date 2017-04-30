angular.module('nikitaPad', ['ui.bootstrap.modal'])
    .controller('npCtrl', function ($scope) {
        $scope.localKeys = localStorage.localkeys
        $scope.texts = (angular.isUndefined($scope.localKeys)) ? [] : $scope.localKeys.split(',')
        $scope.dist = ''
        $scope.downloadText = function (textDist) {
            $scope.dist = textDist
            $scope.loaded = (JSON.parse(localStorage.getItem($scope.dist))) ? JSON.parse(localStorage.getItem($scope.dist)) : alert('Nothing to download!')
        }

        $scope.addText = function (textLocalKey) {
            $scope.texts.push(textLocalKey)
            localStorage.localkeys = $scope.texts
        }

        $scope.dellText = function (textLocalKey) {
            $scope.dist = textLocalKey
            $scope.texts.splice($scope.texts.indexOf(textLocalKey),1)
            localStorage.localkeys = $scope.texts
            localStorage.removeItem($scope.dist)
        }

        $scope.uploadText = function (textLocalKey, text) {
            $scope.dist = textLocalKey
            console.log($scope.dist)
            if (text) {
                localStorage.setItem($scope.dist, JSON.stringify(text))
            }
            else {
                alert('Text area is empty!')
            }
        }

    });