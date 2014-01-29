'use strict';

angular.module('BieberTweetsAngularApp')
    .controller('MainCtrl', function($scope, socket, $window) {
        $scope.tweets = [];

        $scope.specialTweets = [];

        var naughtyReg = /fuck|shit|^\s*ass|wimp|wuss|loser|pussy|cunt|balls|butt|scrotum|vagina|boobs|tits|penis|cock/;

        socket.on('tweet', function(data) {
            $scope.tweets.unshift(data);

            if (naughtyReg.test(data.text)) {


                data.style = {
                    'top': Math.floor(Math.random() * (100 - 1)) + '%'
                };

                // if (data.entities && data.entities.media) {
                //     data.text = data.text.substring(0, data.entities.media[0].indices[0]) +
                //         '<a href="' + data.entities.media[0].url + '">' + data.text.substring(data.entities.media[0].indices[0], data.entities.media[0].indices[1]) +
                //         '</a>' + data.text.substring(data.entities.media[0].indices[1], data.entities.media[0].length);

                //     console.log("HTML TEXT", data.text);
                // }


                console.log('hit', data);

                $scope.specialTweets.push(data);

                // $scope.specialTweets = $scope.specialTweets.slice(0, 40);
            }

            $scope.tweets = $scope.tweets.slice(0, 40);
        });
    });
