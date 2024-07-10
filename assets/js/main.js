

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smooter = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true
})



gsap.to('#project-img', {
    ScrollTrigger: {
        trigger: '#project-img',
        start: 'center center',
        markers: false
    }
})

// smooter.effects("img", {speed: "auto"})



gsap.to('.box-1', {
    opacity:1,
    keyframes: [
    {y:-200,opacity:1,duration: 0.5, delay: 0.2}
    ]
})
gsap.to('.box-3', {
    keyframes: [
    {y:200, opacity:1,duration: 0.5, delay: 0.2},
    {x:930, delay: 0.1,},
    {y:-200}
    ]
})
gsap.to('.box-2', {
    
    keyframes: [
    {y:-200, opacity:1,duration: 0.5, delay: 0.2, ease: "power1.in"},
    {x:-893, delay: 0.1},
    ]
})
gsap.to('.box-4', {
    
    keyframes: [
    {y:200, opacity:1,duration: 0.5, delay: 0.2},
    {},
    {y:-200, delay: 0.1}
    ]
})



/* Text animation start */

gsap.timeline({
    scrollTrigger: {
        trigger: '.td-text-area',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
        invalidateOnRefresh: true
    }
})
    .to('.td-section-title-1 ', {
        x: '-15%'
    });

    gsap.set('.td-section-title-1', {
        x: '10%'
    });

  
if($('.td-text-area')){
    gsap.timeline({
        scrollTrigger: {
            trigger: '.td-text-area',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            markers: false,
            invalidateOnRefresh: true
        }
    })
        .to('.td-section-title-2', {
            x: '10%'
        });
    
        gsap.set('.td-section-title-2', {
            x: '-15%'
        });
}


// Service image reveal

let tcImageReveal = document.querySelectorAll(".tc-img-reveal");

tcImageReveal.forEach((allImages) =>{
    let img = allImages.querySelector('img');
    let tl = gsap.timeline({
        scrollTrigger: {
        trigger:'.td-service-area',
        start: "top 25%",
        markers: false
        }
    })

    tl.set(allImages, { autoAlpha: 1 });
    tl.from(allImages, 1,{
        yPercent: "-100",
        stagger: 1.3,
        ease: Power2.out
    })

    tl.from(img, 1,{
        yPercent: 100,
		scale: 1.5,
		delay: -1.5,
		ease: Power2.out
    })
})

// Home 8
let tp_instagram_3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".td-insta-text-area",
        start: "top 25%",
        pin: true,
        markers: false,
        scrub: 1,
        pinSpacing: false,
        end: "bottom 100%",
        duration: 3,
    }
});

tp_instagram_3.from('.td-insta-thumb-inner-1 ', {
    opacity: 0,
    delay: 1
});

tp_instagram_3.to(".td-insta-thumb img", {
    width: "580px",
    height: "580px",
    borderRadius: "100px",
});


// Project area

let project = document.querySelectorAll('.td-project-img');

project.forEach((allImages) =>{

    let tl = gsap.timeline({
        scrollTrigger: {
        trigger: allImages,
        start: "top 80%",
        stagger: 1.3,
        markers: false
        }
    })

    tl.set(allImages, { autoAlpha: 1 });
    tl.from(allImages, 1,{
        xPercent: "-100",
        ease: Power2.out
    })
})


// Parallax Box

let tl = gsap.timeline({
    scrollTrigger: {
    trigger: '.contact-area',
    start: "top 20%",
    scrub: true,
    markers: false
    }
})

tl.from('.parallax-box',{
    y: 700
})


// Footer Nav


let time = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer-menu",
        start: "top 60%",
        markers: false,
        scrub: 1,
        duration: 3,
    }
})

time.form("nav button",{
    y: -300,    
    opacity: 0,
    delay: 1,
    duration: 1
});