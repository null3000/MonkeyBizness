AFRAME.registerComponent("game", {
        init:function(){
          var camera=document.querySelector("#camera");
          var monke_maker=document.querySelector("#monke-maker");
          var monke_maker2=document.querySelector("#monke-maker2");
          var monke_maker3=document.querySelector("#monke-maker3");
          var monke1=document.querySelector("#monke1");
          var monke2=document.querySelector("#monke2");
          var monke3=document.querySelector("#monke3");
          var score=0;
          var scoreText=document.querySelector("#score");
          var banana=document.querySelector("#banana");
          var banana2=document.querySelector("#banana2");
          var banana3=document.querySelector("#banana3");
          var banana4=document.querySelector("#banana4");
          var banana5=document.querySelector("#banana5");
          var gun=document.querySelector("#gun");
          var flash=document.querySelector("#flash");
          var speaker=document.querySelector("#speaker");
          var x=0;
          var playing=true;
          var random=Math.random()*3;
          var monke1random=false;
          var monke2random=false;
          var monke3random=false;
          if(random<=1){
            setTimeout(function(){
            monke1.emit("up1");
            monke1random=true;
            }, 3250);
          }
          else if(random<=2){
            setTimeout(function(){
            monke2.emit("up2");
            monke2random=true;
            }, 3250);
          }
          else{
            setTimeout(function(){
            monke3.emit("up3");
            monke3random=true;
            }, 3250);
          }
          monke_maker.addEventListener("click", function(){
            if(monke1random==true&&playing==true){
            gun.emit("shoot");
            flash.emit("shoot");
            monke1.emit("down1");
            score++;
            scoreText.setAttribute("color", "#0ff751");
            setTimeout(function(){
              scoreText.setAttribute("color", "#78deff");
            }, 150);
            scoreText.setAttribute("value", score);
            monke1random=false;
            monke2random=false;
            monke3random=false;
            random=Math.random()*2;
          if(random<=1){
            monke2.emit("up2");
            monke2random=true;
          }
          else{
            monke3.emit("up3");
            monke3random=true;
          }
            if(x==0){
              banana.body.position.set(0, 1, 0);
              banana.body.velocity.set((Math.random()*10)-5, Math.random()*8, -20);
            }
            else if(x==1){
              banana5.body.position.set(0, 1, 0);
              banana5.body.velocity.set((Math.random()*10)-5, Math.random()*8, -20);
            }
            else if(x==2){
              banana2.body.position.set(0, 1, 0);
              banana2.body.velocity.set((Math.random()*10)-5, Math.random()*8, -20);
            }
            else if(x==3){
              banana3.body.position.set(0, 1, 0);
              banana3.body.velocity.set((Math.random()*10)-5, Math.random()*8, -20);
            }
            else{
              banana4.body.position.set(0, 1, 0);
              banana4.body.velocity.set((Math.random()*10)-5, Math.random()*8, -20);
              x=-1;
            }
            x=x+1;
            }
          })
          monke_maker2.addEventListener("click", function(){
            if(monke2random==true&&playing==true){
            gun.emit("shoot");
            flash.emit("shoot");
            monke2.emit("down2");
            score++;
            scoreText.setAttribute("color", "#0ff751");
            setTimeout(function(){
              scoreText.setAttribute("color", "#78deff");
            }, 150);
            scoreText.setAttribute("value", score);
            monke1random=false;
            monke2random=false;
            monke3random=false;
            random=Math.random()*2;
            if(random<=1){
            monke1.emit("up1");
            monke1random=true;
          }
          else{
            monke3.emit("up3");
            monke3random=true;
          }
            if(x==0){
              banana.body.position.set(0, 1, 0);
              banana.body.velocity.set((Math.random()*10)+3, Math.random()*8, -20);
            }
            else if(x==1){
              banana5.body.position.set(0, 1, 0);
              banana5.body.velocity.set((Math.random()*10)+3, Math.random()*8, -20);
            }
            else if(x==2){
              banana2.body.position.set(0, 1, 0);
              banana2.body.velocity.set((Math.random()*10)+3, Math.random()*8, -20);
            }
            else if(x==3){
              banana3.body.position.set(0, 1, 0);
              banana3.body.velocity.set((Math.random()*10)+3, Math.random()*8, -20);
            }
            else if(x==4){
              banana4.body.position.set(0, 1, 0);
              banana4.body.velocity.set((Math.random()*10)+3, Math.random()*8, -20);
              x=-1;
            }
            x=x+1;
            }
          })
          monke_maker3.addEventListener("click", function(){
            if(monke3random==true&&playing==true){
            gun.emit("shoot");
            flash.emit("shoot");
            monke3.emit("down3");
            score++;
            scoreText.setAttribute("color", "#0ff751");
            setTimeout(function(){
              scoreText.setAttribute("color", "#78deff");
            }, 150);
            scoreText.setAttribute("value", score);
            monke1random=false;
            monke2random=false;
            monke3random=false;
            random=Math.random()*2;
            if(random<=1){
            monke1.emit("up1");
            monke1random=true;
          }
          else{
            monke2.emit("up2");
            monke2random=true;
          }
            if(x==0){
              banana.body.position.set(0, 1, 0);
              banana.body.velocity.set((Math.random()*-10)-3, Math.random()*8, -20);
            }
            else if(x==1){
              banana5.body.position.set(0, 1, 0);
              banana5.body.velocity.set((Math.random()*-10)-3, Math.random()*8, -20);
            }
            else if(x==2){
              banana2.body.position.set(0, 1, 0);
              banana2.body.velocity.set((Math.random()*-10)-3, Math.random()*8, -20);
            }
            else if(x==3){
              banana3.body.position.set(0, 1, 0);
              banana3.body.velocity.set((Math.random()*-10)-3, Math.random()*8, -20);
            }
            else if(x==4){
              banana4.body.position.set(0, 1, 0);
              banana4.body.velocity.set((Math.random()*-10)-3, Math.random()*8, -20);
              x=-1;
            }
            x=x+1;
            }
          })
         var timer=document.querySelector("#timer");
         var time=60;
         var reset=document.querySelector("#reset");
        var back=document.querySelector("#back");
          var countdown=document.querySelector("#countdown");
          setTimeout(function(){
            countdown.setAttribute("value", "2");
          }, 1000);
          setTimeout(function(){
            countdown.setAttribute("value", "1");
          }, 2000);
          setTimeout(function(){
            countdown.setAttribute("value", "0");
            countdown.setAttribute("animation", "property:position; to:-0.175 -5 0");
          }, 3000);
         setTimeout(function(){
           timer.emit("tick");
         }, 3000);
         timer.addEventListener("tick", function(){
           setTimeout(function(){
             if(time>1){
           time=time-1;
               if(time<=5){
                 timer.setAttribute("color", "red");
                 setTimeout(function(){
                   timer.setAttribute("color", "#78deff")
                 }, 250);
               }
           timer.setAttribute("value", time);
           timer.emit("tick");
             }
            else if(time==1){
              time=time-1;
              timer.setAttribute("color", "red");
              timer.setAttribute("value", time);
              timer.emit("tick");
            }
            else if(time==0){
               playing=false;
               monke1random==false;
               monke2random==false;
               monke3random==false;
               monke1.emit("down1");
            monke2.emit("down2");
            monke3.emit("down3");
            scoreText.setAttribute("animation__1", "property:position; to:-0.3 0.25 0");
            scoreText.setAttribute("animation__2", "property:scale; to:2 2 2");
            timer.setAttribute("animation__move", "property:position; to:50 0.75 0; dur:5000");
            reset.setAttribute("animation__reset", "property:position; to:0.9 1.5 -4; delay:2000");
            back.setAttribute("animation__back", "property:position; to:-0.9 1.5 -4; delay:2000");
             }
         }, 1000);
         })
          reset.addEventListener("click", function(){
            window.location.href="MonkeyMurder.html";
          })
          back.addEventListener("click", function(){
            window.location.href="index.html";
          })
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
      
        }
      })