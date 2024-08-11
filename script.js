
 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from('.navbar li', {
    opacity : 0,
    duration:2,
    ease: "expo.out",
    y: '-100%',
    stagger : {
        amount : 1
    }
    });
  gsap.from('.charhead', {
    opacity : 0,
    duration:4,
    scrollTrigger:'.charhead',
    ease: "expo.out",
    y: '200%',
    });
  gsap.from('.moviehead', {
    opacity : 0,
    duration:4,
    scrollTrigger:'.moviehead',
    ease: "expo.out",
    y: '200%',
    });

// gsap.from('.charhead',{
//     opacity:0,
//     duration:2,
//     ease: "expo.out",
//     x: 0,
//     scrollTrigger:'.charhead'

// })
gsap.from('.sidetext', {
    opacity : 0,
    duration:2,
    ease: "expo.out",
    delay:1,
    x: '-110%'
    });
gsap.from('.link', {
    opacity : 0,
    duration:2,
    ease: "expo.out",
    delay:1,
    x: '-110%'
    });
gsap.from('.link2', {
    opacity : 0,
    duration:2,
    ease: "expo.out",
    delay:1,
    x: '-110%'
    });
gsap.from('.greatpower img', {
    duration: 2,
    rotation: 270,
    scale: 0.5,
    transformOrigin: "50px 20px",
    });


gsap.from('.greengoblin img',{
    duration : 2,
    ease : "expo.out",
    x : '-110%'
})
gsap.from('.octopus img',{
    duration : 2,
    ease : "expo.out",
    x : '-110%'
})
gsap.from('.venom img',{
    duration : 2,
    ease : "expo.out",
    x : '-110%'
})
gsap.from('.mysterio img',{
    duration : 2,
    ease : "expo.out",
    x : '-110%'
})

gsap.utils.toArray('.greengoblin h2').forEach(title => {
    gsap.fromTo(title,{
        letterSpacing:'10px',
        opacity:0,
        x:300,
        skewX:-65
    },{
        letterSpacing:'0',
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:0.5,
        scrollTrigger:title
    })
})
// gsap.utils.toArray('.charhead').forEach(title => {
//     gsap.fromTo(title,{
//         opacity:0,
//         x:300,
//     },{
//         opacity:1,
//         x:0,
//         duration:1,
//         delay:0.5,
//         scrollTrigger:title
//     })
// })
gsap.utils.toArray('.ftr').forEach(title => {
    gsap.fromTo(title,{
        opacity:0,
        y:50,
    },{
        opacity:1,
        y:0,
        duration:1,
        delay:0.5,
        scrollTrigger:title
    })
})

gsap.utils.toArray('.goblinpara p').forEach(title => {
    gsap.fromTo(title,{
        opacity:0,
        x:300,
        skewX:-65
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:0.5,
        scrollTrigger:title
    })
})
gsap.utils.toArray('.venom h2').forEach(title => {
    gsap.fromTo(title,{
        letterSpacing:'10px',
        opacity:0,
        x:300,
        skewX:-65
    },{
        letterSpacing:'0',
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:0.5,
        scrollTrigger:title
    })
})

gsap.utils.toArray('.venompara p').forEach(title => {
    gsap.fromTo(title,{
        opacity:0,
        x:300,
        skewX:-65
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:0.5,
        scrollTrigger:title
    })
})
gsap.utils.toArray('.octopus h2').forEach(title => {
    gsap.fromTo(title,{
        letterSpacing:'10px',
        opacity:0,
        x:-300,
        skewX:-65
    },{
        letterSpacing:'0',
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:0.5,
        scrollTrigger:title
    })
})

gsap.utils.toArray('.octopara p').forEach(title => {
    gsap.fromTo(title,{
        opacity:0,
        x:-300,
        skewX:-65
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:0.5,
        scrollTrigger:title
    })
})
gsap.utils.toArray('.mysterio h2').forEach(title => {
    gsap.fromTo(title,{
        letterSpacing:'10px',
        opacity:0,
        x:-300,
        skewX:-65
    },{
        letterSpacing:'0',
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:0.5,
        scrollTrigger:title
    })
})

gsap.utils.toArray('.mystpara p').forEach(title => {
    gsap.fromTo(title,{
        opacity:0,
        x:-300,
        skewX:-65
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:0.5,
        scrollTrigger:title
    })
})

gsap.fromTo('.greengoblin img',{
    opacity:0,
    scale:0.5,
    duration:1,
    delay:1.5
},{
    scale:1,
    opacity:1,
    skewY:0,
    duration:1,
    delay:0.5,
    scrollTrigger:'.greengoblin img'

})
gsap.fromTo('.octopus img',{
    opacity:0,
    scale:0.5,
    duration:1,
    delay:1.5
},{
    scale:1,
    opacity:1,
    skewY:0,
    duration:2,
    delay:0.5,
    scrollTrigger:'.octopus img'

})
gsap.fromTo('.mysterio img',{
    opacity:0,
    scale:0.5,
    duration:1,
    delay:0.5
},{
    scale:1,
    opacity:1,
    skewY:0,
    duration:1,
    delay:0.5,
    scrollTrigger:'.mysterio img'

})
gsap.fromTo('.venom img',{
    opacity:0,
    scale:0.5,
    duration:1,
    delay:0.5
},{
    scale:1,
    opacity:1,
    skewY:0,
    duration:1,
    delay:0.9,
    scrollTrigger:'.venom img'

})
gsap.utils.toArray('.line').forEach(line=>{
    gsap.fromTo(line,{
        opacity:0,
        width:'0%'
    },{
        opacity:1,
        width:'50%',
        duration:1,
        delay:1,
        scrollTrigger:line

    })
})

gsap.fromTo('.card' ,{
    opacity:0,
    scale:.1,
},{
    opacity:1,
    scale:1,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:'.card'
})
gsap.fromTo('.card2' ,{
    opacity:0,
    scale:.1,
    duration:2
},{
    opacity:1,
    scale:1,
    duration:1,
    delay:0.5,
    stagger:{
        amount:1
    },
    scrollTrigger:'.card2'
})
  


    let link = document.querySelector(".link")
    let link2 = document.querySelector(".link2")
    let red = document.querySelector(".red")
    let red2 = document.querySelector(".red2")
    
    let hovertl = gsap.timeline();
    hovertl.pause();
    
    hovertl.to('.red',{
        width : "111%",
        ease : "Elastic.easeOut(0.25)",
        duration:0.5,
    })
    
    hovertl.to('.red',{
        width : '2em',
        left:'88%',
        duration:0.5
    })
    
    let hoverTL2 = gsap.timeline();
    hoverTL2.pause()
    
    hoverTL2.to(red2,{
        width : "111%",
        ease : "Elastic.easeOut(0.25)",
        duration:0.5,
    })
    
    hoverTL2.to(red2,{
        width : '2em',
        left:'83%',
        duration:0.5
    })
    
    link.addEventListener("mouseenter",()=>{
        hovertl.play()
    })
    link.addEventListener("mouseleave",()=>{
        hovertl.reverse()
    })
    
    link2.addEventListener("mouseenter",()=>{
        hoverTL2.play()
    })
    link2.addEventListener("mouseleave",()=>{
        hoverTL2.reverse()
    })

  
 });


