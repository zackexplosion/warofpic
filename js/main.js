//image base
var ib = 'https://raw.github.com/cstony0917/warofpic/gh-pages/storage/';
var span = [2,3,4];
$(function(){
  var i = 0;
  $.getScript( db, function(r) {
      $.each(images, function(k,v) {
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
      $('.carousel').carousel();
      var aaa;
      $('a.thumbnail').zclip({        
        beforeCopy:function(){
          aaa  = $(this).find('img').attr('src');
        },
        afterCopy:function(){

        },
        copy:function(){
          return $(this).find('img').attr('src');
        }
      });


  });
});