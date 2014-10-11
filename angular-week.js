'use strict';

/**
 * @ngdoc service
 * @name sitesApp.ngWeek
 * @description
 * # ngWeek
 */
angular.module('angularWeek', [])
  .factory('angularWeek', function () {
    var angularWeek = function(date){
       //this.setDate(date);
    };

    angularWeek.prototype.setStart = function (date) {
        this.startDate = moment(date).weekday(0);
        this.endDate   = moment(date).weekday(6);
    }
    angularWeek.prototype.next = function () {
      return this.startDate.add(7, 'days');
    }
    angularWeek.prototype.prev = function (week) {
      return this.endDate.subtract(7, 'days');
    }
    angularWeek.prototype.getStart = function (week) {
      return this.startDate;
    }
    angularWeek.prototype.getEnd = function (week) {
      return this.endDate;
    }
    
    // Allow to get non singleton here
    function create(date) {
      return new angularWeek(date);
    }
    return {create:create};
  });
