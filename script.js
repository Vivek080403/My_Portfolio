
function revealSpan(){
    document.querySelectorAll("#reveal")
    .forEach(function (elem) {
        var parent=document.createElement("span");
        var child=document.createElement("span");
    
        parent.classList.add("parent");
        child.classList.add("child");
    
        child.innerHTML=elem.innerHTML;
        parent.appendChild(child);
    
        elem.innerHTML="";
        elem.appendChild(parent);
    })
}
function valueSetters(){
    gsap.set(".nav a",{
        y:"-100%",
        opacity:0
    });
    gsap.set(".home span .child",{
        y:"100%"
    })
}
var tl=gsap.timeline();
function loaderAnimation(){
    tl
    .from(".loader .child span",{
        x:100,
        stagger:.2,
        duration:1.4,
        ease:Power3.easeInOut
    })
    .to(".loader .parent .child",{
        y:"-102%",
        duration:.5,
        ease: Circ.easeInOut
    })
    .to(".loader",{
        height:0,
        duration:1,
        ease: Circ.easeInOut
    })
    .to(".green",{
        height:"100%",
        top:0,
        duration:1, 
        delay:-.8,    
        ease: Circ.easeInOut
    })
    .to(".green",{
        height:"0%",
        duration:1,
        delay:-.5,
        ease: Circ.easeInOut,
        onComplete:function(){
            animateHomepage();
        }
    })
}
function animateHomepage(){
    var tl=gsap.timeline();
    tl.to(".nav a",{
        y:0,
        opacity: 1,
        stagger : .05,
        ease: Expo.easeInOut
    })
    tl.to(".home span .child",{
        y:0,
        stagger : .1,
        duration: 2.5,
        delay:-2  ,
        ease: Expo.easeInOut
    })
}
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


revealSpan();
loaderAnimation();
valueSetters(); 