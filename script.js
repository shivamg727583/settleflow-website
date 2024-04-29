function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    
}

locomotiveScroll();

document.querySelectorAll(".page4 .pic").forEach(function(val){
var h1 =val.querySelector(".pic h1");
var img=val.querySelectorAll(".pic img")
console.log(img)
h1.addEventListener("mouseenter",function(){
h1.style.color="white"
img.forEach(function(i){
    i.style.opacity=1
})
})
h1.addEventListener("mouseleave",function(){
    h1.style.color="rgb(121, 121, 121)"
    img.forEach(function(i){
        i.style.opacity=0
    })
    })


})


function page1ImgAnimation(){
    
gsap.to(".heading1 img",{
    x:-500,
    y:-500,
    // duration:4,
    // ease:"ease",
    scale:.5,
    scrollTrigger:{
        tigger:".page1",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top -500%",
        scrub:true,
    }
})

gsap.to(".bg1 img",{
   scale:1.5,
    // duration:4,
    ease:"ease",
    scrollTrigger:{
        tigger:".page1",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top -500%",
        scrub:1,
pin:true

    }
})
}
page1ImgAnimation();

function cardAnimation(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".page5",
            scroller:".main",
            markers:true,
            start:"top 0%",
            end:"top -100%",
            scrub:true,
            pin:true
        }
    })
    tl.to(".card2",{
        transform:"translateY(-85%)",
    
    },"s")
    tl.to(".card3",{
        transform:"translateY(-130%)",
    },"s")
    tl.to(".card4",{
        transform:"translateY(-175%)",
        
    },"s")
    
}

cardAnimation();

gsap.to(".scroll-bar",{
    transform:"translate(-100%)",
    repeat:-1,
    // stagger:.1,
    ease:"linear",
    duration:5,
})