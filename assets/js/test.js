var led;
var config = {
  databaseURL: "chat.db"
};

database.limitToLast(1).on('value', function(log) {
    for(var i in log.val()){
       $show.append('<div class="'+log.val()[i].id+'"><div class="time">'+log.val()[i].time+'</div><div class="name">'+log.val()[i].name+' 說</div><div class="content">'+log.val()[i].content+'</div>');
    }
    $show.scrollTop($show[0].scrollHeight);
    $show.find('.id'+ms+' .name').css({
      'float':'right',
      'padding-top':'12px',
      'color':'#fc0'
    });
    $show.find('.id'+ms+' .content').css({
      'float':'right',
      'margin-right':'10px'
    });
    $show.find('.id'+ms+' .time').css({
      'right':'0',
      'color':'#777'
    });
  });

  


  