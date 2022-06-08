     AFRAME.registerComponent("projectile", {
        init: function() {
          var ball = document.querySelector("a-sphere");
          var camera = document.querySelector("a-camera");
          var wait = false;

          window.addEventListener("keypress", function (e){
            if(e.keyCode == 32 && wait==false){
              ball.body.velocity.set(0, 18, -4)
              wait=true;
            }
          })
          window.addEventListener("keyup", function (e){
            if(e.keyCode == 32){
              ball.body.velocity.set(0, -4, -4)
              setTimeout(function(){wait=false;}, 4000)

            }
          })
          window.addEventListener("keydown", function(e){
            if(e.keyCode == 87){
              ball.body.velocity.set(0, -2, -13)
            }
          })
           window.addEventListener("keydown", function(e){
            if(e.keyCode == 83){
              ball.body.velocity.set(0, -2, 13)

    
            }
          })
          window.addEventListener("keydown", function(e){
            if(e.keyCode == 68){
              ball.body.velocity.set(8, -2, 0)
            }
          })
          window.addEventListener("keydown", function(e){
            if(e.keyCode == 65){
              ball.body.velocity.set(-8, -2, 0)
            }
          })
            },
        tick: function(){
          var ball = document.querySelector("a-sphere");
          var monk = document.getElementById("#monk");
          var posx = ball.getAttribute("position").x
          var posy = ball.getAttribute("position").y
          var posz = ball.getAttribute("position").z
          monk.setAttribute("position" ,{x:posx,y:posy,z:posz})

          if(posy<0){
            window.location.href="lose.html";
          }
           if(posz<-245){
            window.location.href="win.html";
          }

          
          
          
        }
          });