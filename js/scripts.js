$("document").ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const experience = $("select#experience").val();
    const projects = $("select#projects").val();
    const team = $("select#team").val();
    const size = $("select#size").val();
    const reason = $("select#reason").val();

  });

});