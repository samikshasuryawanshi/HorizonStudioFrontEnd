function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
locoScroll()


function loader(){
    var tl=gsap.timeline()
    tl.to(".loader .box2 .box h1",{
        y:-120,
        duration:1,
        delay:1,
    },"semii")
    tl.to(".loader .box3 .box h1",{
        y:100,
        duration:1,
        delay:1,
    },"semii")
    tl.to(".loader .box1",{
        top:"-100%",
        duration:2,
    },"sem")
    tl.to(".loader .box2",{
        top:"100%",
        duration:2,
    },"sem")
    tl.to(".loader .box3",{
        top:"-100%",
        duration:2,
    },"sem")
    tl.to(".loader .box4",{
        top:"100%",
        duration:2,
    },"sem")
    tl.to(".loader",{
        top:"-100%",
        duration:0.1,
    })
    tl.from(".page1 .nav-bar h1",{
        y:100,
        duration:1,
    },"nav")
    tl.from(".page1 .nav-bar h2",{
        y:100,
        duration:1,
    },"nav")
    tl.from(".page1 .nav-bar .nav-part",{
        y:100,
        duration:1,
    },"nav")
    tl.from(".page1 .text h1",{
        y:700,
        duration:1,
    },"nav")
    tl.from(".page1 .image",{
        opacity:0,
    },"nav")
}
loader()

function page1Animation(){
    gsap.from(".page1 .image img",{
        y:-150,
        scrollTrigger:{
            scroller:".main",
            trigger:".page1",
            start:"top 10%",
            // markers:true,
            scrub:true,
        }
    })
}
page1Animation()

function page1Hori(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".detail",
            start:"top 25%",
            // markers:true,
        }
    })
    tl.from(".detail .horizontal",{
        width:"0",
        duration:0.8,
    })
}
page1Hori()

function imageAnimation(){
    var img=document.querySelectorAll(".page2 .bottom .box .img")
    img.forEach(function(elem){
        var btn=elem.childNodes[3]
        elem.addEventListener("mouseenter",function(){
            gsap.to(btn,{
                top:"85%",
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(btn,{
                top:"100%",
            })
        })
    })
}
imageAnimation()

function page3Animation(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".page3",
            start:"top 50%",
            // scrub:true,
        }
    })
    tl
    .from(".page3 .page3-line",{
        width:"0%",
        duration:1,
    })
    // .from(".page3 .left",{
    //     height:"0vh",
    //     duration:1,
    // })
}
page3Animation()

function imageani1(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".page3",
            start:"top 50%",
            scrub:true,
        }
    })
    tl
    .to(".page3 .bottom .left img",{
        y:180,
    })
}
imageani1()


function imageani2(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".page3",
            start:"top 50%",
            scrub:true,
        }
    })
    tl
    .to(".page3 .bottom .right .image img",{
        y:60,
    })
}
imageani2()


function page4Animation(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".page4",
            start:"top 50%",
            // scrub:true,
        }
    })
    tl
    .from(".page4 .page4-line",{
        width:"0%",
        duration:1,
    })
    // .from(".page3 .left",{
    //     height:"0vh",
    //     duration:1,
    // })
}
page4Animation()


function page4Image1(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".page4",
            start:"top 50%",
            scrub:true,
        }
    })
    tl
    .to(".page4 .middle .right img",{
        y:180,
    })
}
page4Image1()

function page4Image2(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".page4",
            start:"top 50%",
            scrub:true,
        }
    })
    tl
    .to(".page4 .middle .left .image img",{
        y:60,
    })
}
page4Image2()

function page4Bottom(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".page4",
            start:"top -70%",
        }
    })
    tl.from(".page4 .bottom .box .line",{
        height:"0vh",
        duration:1
    },"digit")
   tl.from(".page4 .bottom .box h1",{
        y:600,
        duration:0.8,
    },"digit")
    tl.from(".page4 .bottom .box p",{
       y:-20,
       opacity:0,
    },"digit")
}
page4Bottom()

function page5Top(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".page5",
            start:"top 50%",
            scrub:true,
        }
    })
    tl.to(".page5 .top img",{
        y:150,
    })
}
page5Top()
function page5Bottom(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".page5",
            start:"top 50%",
            scrub:true,
        }
    })
    tl.to(".page5 .bottom .left .image img",{
        y:150,
    })
}
page5Bottom()


function page5Line(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:".main",
            trigger:".page5",
            start:"top -110%",
            // markers:true,
        }
    })
    tl.from(".page5 .bottom .right .line",{
        width:0,
        duration:0.5,
    })
}
page5Line()