'use strict';

/**
 * @ngdoc service
 * @name sitesApp.ngWeek
 * @description
 * # ngWeek
 */
angular.module('angularWeek', [])
  .service('angularWeek', function ngWeek() {

    // Stub out a blank function for the singleton.
    var angularWeek = function(){};
    angularWeek.fetch = function (date) {
      return [moment(date).weekday(0), moment(date).weekday(6)];
    }
    angularWeek.nextWeek = function (week) {
      return angularWeek.fetch(week[1].add(7, 'days'));
    }
    angularWeek.prevWeek = function (week) {
      return angularWeek.fetch(week[1].subtract(7, 'days'));
    }

    return angularWeek;

  });
