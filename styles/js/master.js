











// //date calculation with date pickers
//
// $("#startDate").datepicker({
//   dateFormat: 'yy-mm-dd',
//   changeMonth: true,
//   minDate: new Date(),
//   maxDate: '+1y',
//   onSelect: function(date){
//
//       var selectedDate = new Date(date);
//       var msecsInADay = 86400000;
//       var stDate = new Date(selectedDate.getTime() + msecsInADay);
//
//      //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
//       $("#endDate").datepicker( "option", "minDate", stDate );
//       var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);
//
//
//       $("#endDate").datepicker( "option", "maxDate", enDate );
//
//   }
// });
//
// $("#endDate").datepicker({
//   dateFormat: 'yy-mm-dd',
//   changeMonth: true,
//   minDate: '+1d',
// });
//
// //Find the number of days between dates
// function dateDiff() {
//
//   var start = $('#startDate').datepicker('getDate');
//   var end = $('#endDate').datepicker('getDate');
//   var days   = (end - start)/1000/60/60/24;
//
//
//   document.getElementById("noDays").value = days ;
//   return;
// }
//
//
//
// $('#submit1').click(function(){
//   dateDiff();
// });












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
