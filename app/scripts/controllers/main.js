'use strict';

angular.module('BieberTweetsAngularApp')
    .factory('socket', function(socketFactory, $location, $window) {

        // TODO: Path name hack for socket.io . . . maybe figure something out better someday
        var path = $window.location.pathname;

        path = $window.location.pathname.substring(0, $window.location.pathname.length - 1)

        return socketFactory({
            ioSocket: io.connect('/', {
                resource: path + 'socket.io'
            })
        });
    })
    .controller('MainCtrl', function($scope, socket, $window) {
        console.log(arguments);

        $scope.tweets = [];

        $scope.specialTweets = [];

        var naughtyReg = /xanax|drugs|alchohol|pot|smoking|crack|fuck|shit|^\s*ass|wimp|wuss|loser|pussy|cunt|balls|butt|scrotum|vagina|boobs|tits|penis|cock|aids/;

        socket.on('tweet', function(data) {
            $scope.tweets.unshift(data);

            if (naughtyReg.test(data.text)) {


                data.style = {
                    'top': Math.floor(Math.random() * (100 - 1)) + '%'
                };


                console.log('hit', data);

                $scope.specialTweets.push(data);

                // $scope.specialTweets = $scope.specialTweets.slice(0, 40);
            }

            $scope.tweets = $scope.tweets.slice(0, 40);
        });
    });
