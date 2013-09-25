//image base
var ib = 'https://raw.github.com/cstony0917/warofpic/gh-pages/storage/';

$(function(){
  $.getJSON('db.json',function(r){
      $.each(r, function(k,v) {
        console.log(k);
        $('#cat').append('<li class="' + k +'"><a href="">' + k + '</a><ul></ul></li>');
        $.each(this, function(name, value) {
            var src = ib + k + '/'+ value;
            $('li.' + k + ' ul').append('<li><img src="' +  src + '" /></li>');
        });
      });
  });
});