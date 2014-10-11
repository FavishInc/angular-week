'use strict';

/**
 * @ngdoc service
 * @name sitesApp.ngWeek
 * @description
 * # ngWeek
 * Service in the sitesApp.
 */
angular.module('angularWeek', [])
  .service('angularWeek', function ngWeek() {
    var startDate;
    var endDate;
    // AngularJS will instantiate a singleton by calling "new" on this function
    function fetch(date) {
      return [moment(date).weekday(0), moment(date).weekday(6)];
    }
    function nextWeek(week) {
      return fetch(week[1].add(7, 'days'));
    }
    function prevWeek(week) {
      return fetch(week[1].subtract(7, 'days'));
    }

    return({
      fetch: fetch,
      nextWeek: nextWeek,
      prevWeek: prevWeek
    });

  });
