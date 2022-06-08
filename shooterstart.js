 AFRAME.registerComponent("script",{
        init:function(){
          var walls=document.querySelectorAll("#wall");
          var walls2=document.querySelectorAll("#wall2");
          var walls3=document.querySelectorAll("#wall3");
          var walls4=document.querySelectorAll("#wall4");
      for(var i=0; i<walls.length; i++){
        var randHeight=(Math.random()*35)+2.5;
        walls[i].setAttribute("scale", {x:5, y:randHeight, z:5});
        walls[i].setAttribute("position", {x:(i*7.5)-37.5, y:-2.5, z:-42.5});
        randHeight=randHeight/5;
        walls[i].setAttribute("geometry", "segmentsHeight", randHeight);
        walls[i].setAttribute("geometry", "segmentsWidth:1");
        walls[i].setAttribute("geometry", "segmentsDepth:1");
        walls[i].setAttribute("material", "shader:flat; wireframe:true");
        walls[i].setAttribute("color","#0ff751");
      }
      for(var i=0; i<walls2.length; i++){
        var randHeight=(Math.random()*50)+2.5;
        walls2[i].setAttribute("scale", {x:5, y:randHeight, z:5});
        walls2[i].setAttribute("position", {x:-42.5, y:-2.5, z:(i*7.5)-37.5});
        randHeight=randHeight/5;
        walls2[i].setAttribute("geometry", "segmentsHeight", randHeight);
        walls2[i].setAttribute("geometry", "segmentsWidth:1");
        walls2[i].setAttribute("geometry", "segmentsDepth:1");
        walls2[i].setAttribute("material", "shader:flat; wireframe:true");
        walls2[i].setAttribute("color","#0ff751");
      }
      for(var i=0; i<walls3.length; i++){
        var randHeight=(Math.random()*50)+2.5;
        walls3[i].setAttribute("scale", {x:5, y:randHeight, z:5});
        walls3[i].setAttribute("position", {x:42.5, y:-2.5, z:(i*7.5)-37.5});
        randHeight=randHeight/5;
        walls3[i].setAttribute("geometry", "segmentsHeight", randHeight);
        walls3[i].setAttribute("geometry", "segmentsWidth:1");
        walls3[i].setAttribute("geometry", "segmentsDepth:1");
        walls3[i].setAttribute("material", "shader:flat; wireframe:true");
        walls3[i].setAttribute("color","#0ff751");
      }
      for(var i=0; i<walls4.length; i++){
        var randHeight=(Math.random()*50)+2.5;
        walls4[i].setAttribute("scale", {x:5, y:randHeight, z:5});
        walls4[i].setAttribute("position", {x:(i*7.5)-37.5, y:-2.5, z:42.5});
        randHeight=randHeight/5;
        walls4[i].setAttribute("geometry", "segmentsHeight", randHeight);
        walls4[i].setAttribute("geometry", "segmentsWidth:1");
        walls4[i].setAttribute("geometry", "segmentsDepth:1");
        walls4[i].setAttribute("material", "shader:flat; wireframe:true");
        walls4[i].setAttribute("color","#0ff751");
      }
          var reset=document.querySelector("#reset");
          reset.addEventListener("click", function(){
            window.location.href="MonkeyMurder.html";
            
          })
          var back=document.querySelector("#back");
          back.addEventListener("click", function(){
            window.location.href="index.html";
          })
          
        }
      })