var app = angular
    .module('toDoList', ['ngCookies', 'ngSanitize']);

app.config(function($cookiesProvider){
    var n = new Date();
    $cookiesProvider.defaults.expires = new Date(n.getFullYear()+1, n.getMonth(), n.getDate());
});