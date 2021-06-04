$("document").ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const experience = $("select#experience").val();
    const projects = $("select#projects").val();
    const team = $("select#team").val();
    const size = $("select#size").val();
    const reason = $("select#reason").val();
    let language = ""

    if (experience !== '3' && projects !== '4' && size ==='1'){
      language = "Python"
    }
    else if(experience !== '3' && projects !== '4' && size ==='2'){
      language = "JavaScript"
    }
    
    else if(experience !== '1' && projects !== '3' && size !=='1'){
      language = "C#"
    }
    else {
      language ="JAVA"
    }
    $("#language").text(language)

  });

});