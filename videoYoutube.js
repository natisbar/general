// SCRIPT PARA VISUALIZAR AL 100% EL VIDEO DE YOUTUBE EN INPOPUP

   let currentURL = window.location.href;
   if (currentURL.indexOf("inpopup=1")>0){
      console.log("ENTRE")
     $("#page-content").css("display", "block");
   }

  let acordeon = document.getElementsByClassName("h5p-panel-title");
   for(let i=0; i<acordeon.length; i++){
      acordeon[i].style.fontSize = "16px";
   }
