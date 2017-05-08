angular.module('nikitaPad', ['ui.bootstrap.modal'])
    .controller('npCtrl', function ($scope) {
        $scope.localKeys = localStorage.localkeys
        $scope.texts = (angular.isUndefined($scope.localKeys)) ? [] : $scope.localKeys.split(',')
        $scope.textInfo = {sym: '0', words: '0'}
        $scope.openedTabs = []
        $scope.openedTabText = []
        $scope.currTextName=''

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
                console.log('saved text is ->', text)
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
        $scope.openNewTab = function (textName) {
            console.log('open new tab ->', textName)
            let dist = textName
            let text=(JSON.parse(localStorage.getItem(dist))) ? JSON.parse(localStorage.getItem(dist)) : ''
            $scope.openedTabs.push(textName)
            $scope.openedTabText.push(text)
            $scope.loaded=text
            $scope.currTextName=dist
        }
        $scope.closeNewTab = function (text) {
            $scope.openedTabs.splice($scope.openedTabs.indexOf(text), 1)
            $scope.openedTabText.splice($scope.openedTabs.indexOf(text),1)
        }

        $scope.saveCurrentTab = function (textName) {
            console.log('save current tab index ->',textName)
            $scope.openedTabText.splice($scope.openedTabs.indexOf(textName),1,$scope.loaded)

        }

        $scope.openCurrentTab = function (textName) {
            $scope.currTextName=textName
            $scope.loaded = $scope.openedTabText[$scope.openedTabs.indexOf(textName)]

        }

        $scope.logThis = function () {
            console.log('opened tabs text -> ',$scope.openedTabText)
            console.log('current text name ->',$scope.currTextName)
        }

    });























