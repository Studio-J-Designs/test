// console.log('direction');
//
//
// function initMap() {
//         var directionsService = new google.maps.DirectionsService;
//         var directionsRenderer = new google.maps.DirectionsRenderer;
//
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 6,
//           center: {lat: 41.85, lng: -87.65}
//         });
//
//         directionsRenderer.setMap(map);
//
//         document.getElementById('submit').addEventListener('click', function() {
//           calculateAndDisplayRoute(directionsService, directionsRenderer);
//         });
//       }
//
//       function calculateAndDisplayRoute(directionsService, directionsRenderer) {
//         var waypts = [];
//         var checkboxArray = document.getElementById('waypoints');
//         for (var i = 0; i < checkboxArray.length; i++) {
//           if (checkboxArray.options[i].selected) {
//             waypts.push({
//               location: checkboxArray[i].value,
//               stopover: true
//             });
//           }
//         }
//
//         directionsService.route({
//           origin: document.getElementById('start').value,
//           destination: document.getElementById('end').value,
//           waypoints: waypts,
//           optimizeWaypoints: true,
//           travelMode: 'DRIVING'
//         }, function(response, status) {
//           if (status === 'OK') {
//
//             console.log(response);
//
//             directionsRenderer.setDirections(response);
//             var route = response.routes[0];
//             console.log(route);
//             var summaryPanel = document.getElementById('directions-panel');
//             summaryPanel.innerHTML = '';
//             // For each route, display summary information.
//             for (var i = 0; i < route.legs.length; i++) {
//               var routeSegment = i + 1;
//               summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
//                   '</b><br>';
//               summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
//               summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
//               summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
//               summaryPanel.innerHTML += route.legs[i].duration.text + '<br><br>';
//               var distance = route.legs[i].distance.text;
//             }
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });
//       }
//
//
// initMap()




//date calculation with date pickers

$("#startDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){

      var selectedDate = new Date(date);
      var msecsInADay = 86400000;
      var stDate = new Date(selectedDate.getTime() + msecsInADay);

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $("#endDate").datepicker( "option", "minDate", stDate );
      var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);


      $("#endDate").datepicker( "option", "maxDate", enDate );

  }
});

$("#endDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: '+1d',
});

//Find the number of days between dates
function dateDiff() {

  var start = $('#startDate').datepicker('getDate');
  var end = $('#endDate').datepicker('getDate');
  var days   = (end - start)/1000/60/60/24;


  document.getElementById("noDays").value = days ;
  return;
}



$('#submit1').click(function(){
  dateDiff();
});












// var rangeSlider = document.getElementById("rs-range-line");
// var rangeBullet = document.getElementById("rs-bullet");
//
// rangeSlider.addEventListener("input", showSliderValue, false);
//
// function showSliderValue() {
//   rangeBullet.innerHTML = rangeSlider.value;
//   var bulletPosition = (rangeSlider.value /rangeSlider.max);
//   rangeBullet.style.left = (bulletPosition * 478) + "px";
// }






// var displayedPage = 1;
// var currentPage = 1;
// var currentPageNumber = 1;
// var previousPage = 0;
// var previousPageNumber = 0;
// var highestPage = 1
//
//   next.onclick = function(){
//
// if (highestPage <= displayedPage) {
//       highestPage = highestPage + 1
//       previousPageNumber = currentPageNumber;
//       previousPage = '#step' + previousPageNumber;
//       currentPageNumber = currentPageNumber + 1;
//       currentPage = '#step' + currentPageNumber;
//       displayedPage = currentPageNumber;
//       console.log(displayedPage);
//       console.log(currentPageNumber);
//
//       $(previousPage).removeClass("current");
//       $(previousPage).addClass("finished");
//       $(currentPage).addClass("current");
//       console.log('test');
//
//       content();
// } else {
//   displayedPage = displayedPage + 1;
//   content();
// }
//
//
// };
//
//
//
// function content(){
//
//   console.log(displayedPage);
//   if (displayedPage === 1) {
//     document.getElementById('tester').innerHTML
//     = '1'
//   } else if (displayedPage === 2) {
//     document.getElementById('tester').innerHTML
//     = '2'
//   } else if (displayedPage === 3) {
//     document.getElementById('tester').innerHTML
//     = '3'
//   } else if (displayedPage === 4) {
//     document.getElementById('tester').innerHTML
//     = '4'
//   } else if (displayedPage === 5) {
//     document.getElementById('tester').innerHTML
//     = '5'
//   } else {
//     document.getElementById('tester').innerHTML
//     = '6'
//   };
// console.log(displayedPage);
// };
//
// content()
//
//
// function step1(){
//   if (highestPage >= 1) {
//     displayedPage = 1;
//     content()
//   };
// };
//
// function step2(){
//   if (highestPage >= 2) {
//     displayedPage = 2;
//     content()
//   };
// };
//
// function step3(){
//   if (highestPage >= 3) {
//     displayedPage = 3;
//     content()
//   };
// };
//
// function step4(){
//   if (highestPage >= 4) {
//     displayedPage = 4;
//     content()
//   };
// };
//
// function step5(){
//   if (highestPage >= 5) {
//     displayedPage = 5;
//     content()
//   };
// };
//
// function step6(){
//   if (highestPage >= 6) {
//     displayedPage = 6;
//     content()
//   };
// };
