AFRAME.registerComponent("control", {
    init: function(){
        this.onScreenControls()
        
    },
    tick: function(){
        this.controls()
    },
    controls: function(){
        var plane = document.querySelector("#flight1")
        var cam = document.querySelector("#cam")
        window.addEventListener("keydown", (e)=>{
            if(e.key == 'A'|| e.key == 'a' || e.key == 'ArrowLeft'){
                var rotation = plane.getAttribute("rotation")
                var pos = plane.getAttribute("position")
                plane.setAttribute("rotation",{x:rotation.x,y:rotation.y,z:rotation.z-0.001})
                plane.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
            }
            if(e.key == 'D'|| e.key == 'd' || e.key == 'ArrowRight'){
                var rotation = plane.getAttribute("rotation")

                plane.setAttribute("rotation",{x:rotation.x,y:rotation.y,z:rotation.z+0.001})
            }
            if(rotation.z<-3){
                plane.setAttribute("rotation",{x:rotation.x,y:rotation.y,z:-2.9})
            }
            if(rotation.z>3){
                plane.setAttribute("rotation",{x:rotation.x,y:rotation.y,z:2.9})
            }
        })

    },
    onScreenControls: function(){
        
    }
})