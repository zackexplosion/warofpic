/* Nano Templates (Tomasz Mazur, Jacek Becela) */
function nano(template, data) {
  return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
    var keys = key.split("."), v = data[keys.shift()];
    for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
    return (typeof v !== "undefined" && v !== null) ? v : "";
  });
}

/*
 * jQuery shuffle
 *
 * Copyright (c) 2008 Ca-Phun Ung <caphun at yelotofu dot com>
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://yelotofu.com/labs/jquery/snippets/shuffle/
 *
 * Shuffles an array or the children of a element container.
 * This uses the Fisher-Yates shuffle algorithm <http://jsfromhell.com/array/shuffle [v1.0]>
 */
 
(function($){

  $.fn.shuffle = function() {
    return this.each(function(){
      var items = $(this).children().clone(true);
      return (items.length) ? $(this).html($.shuffle(items)) : this;
    });
  }
  
  $.shuffle = function(arr) {
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
  }
  
})(jQuery);
//image base
var ib = 'https://raw.github.com/cstony0917/warofpic/gh-pages/storage/';
var span = [2,3,4];
$(function(){
  var i = 0;
  $.getJSON('db.json',function(r){
      $.each(r, function(k,v) {
        var active = null;
        if(i ==0 ){
          active = 'active';
          $('#cat .carousel-indicators').append('<li data-target="#cat" class="active" data-slide-to="' + i +'"></li>');
        }else{
          active = null;
          $('#cat .carousel-indicators').append('<li data-target="#cat" data-slide-to="' + i +'"></li>');
        }
        var data = {
          name:k,
          active :active
        };
        $('#cat .carousel-inner').append(nano($('#tmp .galleryTMP').html(),data));

        // var data = {
        //   name : k,
        //   src
        // };;
        $.each(this, function(name, value) {
            var src = ib + k + '/'+ value;
            var r = $.shuffle(span);
            r = r[0];
            var data = {
              src : src,
              r:r
            };
            var ul  = $('div.' + k + ' ul');
            ul.append(nano($('#tmp .imageList').html(),data));

        });
        i++;
      });
      $('.carousel').carousel()
  });
});