$("document").ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const experience = $("select#experience").val();
    const projects = $("select#projects").val();
    const team = $("select#team").val();
    const size = $("select#size").val();
    const reason = $("select#reason").val();
    $(".logo1").hide();
    $(".logo2").hide();
    $(".logo3").hide();
    $(".logo4").hide();
    let language = ""

    if (experience !== '3' && projects !== '4' && size ==='1'){
      language = "Python"
      $(".logo1").show();
    }
    else if(experience !== '3' && projects !== '4' && size ==='2'){
      language = "JavaScript";
      $(".logo2").show();
    }
    
    else if(experience !== '1' && projects !== '3' && size !=='1'){
      language = "C#";
      $(".logo3").show();
    
    }
    else {
      language ="Java"
      $(".logo4").show();
    }
    $("#language").text(language) 
    

  });

});