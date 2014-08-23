// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function(){

  $('.hero').click(function(){
    $('.hero').removeClass('selected');
    $(this).addClass('selected');
  })


  $('.map img').click(function(e){
    var $hero = $('li.selected')
    var offset = $(this).offset();
    coordinates = {
      x: (e.clientX - offset.left),
      y: (e.clientY - offset.top)
    }

    $hero.data('coordinates', coordinates)

    $('.map ul').append($hero)

    $hero.removeClass('selected')
    $hero.css('position', 'absolute')
    $hero.css('top', coordinates.y)
    $hero.css('left', coordinates.x)

  })


})
