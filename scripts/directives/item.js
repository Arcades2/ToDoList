app.directive('item', function() {
    return {
        restrict: 'E',
        templateUrl: '../../views/partial/item.html',
        scope: {
            task: '=task',
            index: '@index',
            removeTask: '&removetask',
            addToCheckedList: '&addtocheckedlist'
        }
    };
});