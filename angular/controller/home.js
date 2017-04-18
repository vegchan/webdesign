var myApp = angular.module('myApp');

var dependencies = ['$scope','uiCalendarConfig'];
var homeCtrl = function($scope,uiCalendarConfig){
var currIndex = 0;
var slides = []
this.eventSources = [{
  event:[
				{
					title: 'From',
					start: '2017-04-30',
					allDay: true,
					rendering: 'background',
					backgroundColor: '#f26522',
				}]
}]

this.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        }
      }
    };


addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  for (var i = 0; i < 4; i++) {
    addSlide();
  }

  this.slides = slides;
};
homeCtrl.$inject = dependencies;
myApp.controller('homeCtrl',homeCtrl);
