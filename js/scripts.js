$("document").ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const experience = $("select#experience").val();
    const projects = $("select#projects").val();
    const team = $("select#team").val();
    const size = $("select#size").val();
    const reason = $("select#reason").val();
    let language = ""

    if (experience === '1'||'2' && projects === '1'||'2' && team==='1'||'4'||'5' && size ==='1'||'2' && reason==='1'||'2'){
      language = "Python"
    }
    else if(experience === '1'||'2'||'3' && projects === '1'||'2'||'3' && team==='2'||'3'||'4' && size ==='2'||'3' && reason==='1'||'2'||'3'){
      language = "JavaScript"
    }
    else if(experience === '3'||'4' && projects === '2'||'4' && team==='3'||'4' && size ==='3' && reason==='3'||'4'){
      language = "C#"
    }
    else {
      language ="learn something else"
    }
    $("#language").text(language)

  });

});