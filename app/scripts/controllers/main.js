'use strict';

angular.module('BieberTweetsAngularApp')
	.controller('MainCtrl', function($scope, socket, $window) {
		$scope.tweets = [];

		socket.on('tweet', function(data) {
			$scope.tweets.unshift(data);
		});

		$window.setInterval( function(){
			$scope.tweets = $scope.tweets.slice(1,20);
		}, 5000)
	});