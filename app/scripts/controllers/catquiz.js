'use strict';

/**
 * @ngdoc function
 * @name snowCats2App.controller:CatquizCtrl
 * @description
 * # CatquizCtrl
 * Controller of the snowCats2App
 */
angular.module('snowCats2App')
  .controller('CatquizCtrl', function () {
    this.quiz = [
      {
        'question' : 'What is your favorite winter activity?',
        'options' : [
          {
            'response' : 'Skiing',
            'image': 'imageURL',
            'comment': 'You like to skii?'
          },
          {
            'response' : 'Snowboarding',
            'image': 'imageURL',
            'comment': 'You like to snowboard?'
          },
          {
            'response' : 'Skiing',
            'image': 'imageURL',
            'comment': 'You like to skii?'
          }
        ]
      },
      {
        'question' : 'What is your favorite winter drink?',
        'options' : [
          {
            'response' : 'Beer',
            'image': 'imageURL',
            'comment': 'You like to skii?'
          },
          {
            'response' : 'Wine',
            'image': 'imageURL',
            'comment': 'You like to snowboard?'
          },
          {
            'response' : 'Hot Chocolate',
            'image': 'imageURL',
            'comment': 'You like to skii?'
          }
        ]
      }
    ];
  });
