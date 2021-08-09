const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.ani-text', {y:"0%", duration: 1, stagger: 0.4});
tl.to('.slider', {y:"-100%", duration: 1, delay: 0.2});
tl.to('.ani-intro', {y:"-100%", duration: 1}, "-=0.8");
//tl.fromTo('main', {opacity:0},{opacity:1, duration: 2});
tl.fromTo('nav', {opacity:0},{opacity:1, duration: 2} , "-=2");
tl.fromTo('nav>ul', {opacity:0},{opacity:1, duration: 2} , "-=1.5");
tl.fromTo('nav>.logo', {opacity:0},{opacity:1, duration: 2} , "-=1.5");
