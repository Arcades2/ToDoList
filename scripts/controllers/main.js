app.controller('mainController', ['$scope', '$sanitize', '$cookies', '$rootScope', '$location', '$window', function($scope, $sanitize, $cookies, $rootScope, $location, $window) {
    //Check the presence of cookie
    if($cookies.getObject('tasks')) {
        $scope.tasks = $cookies.getObject('tasks');
        console.log($scope.tasks);
    }
    else {
        $scope.tasks = [];
    }

    $scope.checkedList = [];
    
    //Form appearance
    $scope.form = false;
    $scope.formAppear = function() {
        $scope.form = true;
        angular.element('body').addClass('stop-scrolling');
        angular.element('html, body').animate({
            scrollTop: angular.element('html').offset().top
        }, 'slow');
    };
    $scope.removeForm = function() {
        $scope.form = false;
        angular.element('body').removeClass('stop-scrolling');
    }

    //Validate the task
    $scope.validate = function() {
        var title = $scope.tmpTask.title;
        var description = $scope.tmpTask.description;

        var task = {'title': title, 'description': description};
        $scope.tasks.push(task);
        $cookies.putObject('tasks', $scope.tasks);
        $scope.removeForm();
        angular.element('#addForm')[0].reset();
        $scope.tmpTask = {};
    }

    //Remove the Task
    $scope.removeTask = function(index) {
        var element = angular.element('#item' + index);

        $scope.tasks.splice(index, 1);
        $cookies.putObject('tasks', $scope.tasks);
        var key = $scope.checkedList.indexOf(index);
        $scope.checkedList.splice(key, 1);
        console.log($scope.checkedList);
    };

    //Create a list of all checked task;
    $scope.addToCheckedList = function(index) {
        var key = $.inArray(index, $scope.checkedList);

        if (key === -1) {
            $scope.checkedList.push(index);
        } else {
            $scope.checkedList.splice(key, 1);
        }
        $scope.checkedList.sort(function(a,b){return b-a})
        console.log($scope.checkedList);
    }

    //Remove checked tasks
    $scope.removeCheckedTasks = function() {
        for(var i = 0, c = $scope.checkedList.length; i < c; i++) {
            $scope.tasks.splice($scope.checkedList[i], 1);
        }
        $cookies.putObject('tasks', $scope.tasks);
        $scope.checkedList = [];
    }

}]);