"use strict";angular.module("BieberTweetsAngularApp",["btford.socket-io"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("BieberTweetsAngularApp").controller("MainCtrl",["$scope","socket","$window",function(a,b){a.tweets=[],b.on("tweet",function(b){a.tweets.unshift(b),a.tweets=a.tweets.slice(0,20)})}]);