
jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
    
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
  });  

let mainPage = {
    "header" : "header"
}
  

  
const connect = document.getElementById('index--header')
document.getElementsByTagName('index--header').innerText = '123'
console.log(document.getElementsByTagName('index--header').innerText)
// connect.innerHTML = mainPage.header