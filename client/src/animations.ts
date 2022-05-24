export const  quoteAnimation = {
    initial:
        {
            // rotate: [-650],
            scale:(0),rotateZ:11,opacity:0, pathLength: 0, },
    animate: {
        opacity:[0,0.1,0.2,0.2,0.1,1],
        scale:(1.3),x:[-100,40],rotateZ:0,
        fontsize:50,
        rotate:0,pathLength: 1,
        delay:2,
        transition: {
            stiffness:550,mass:112,duration:1,
        }
    },path:{
        pathLength: 1,
    }
}

export const quoteFadeIn = {
    initial:
        {
            // rotate: [-650],
            scale:(0),rotateZ:11,opacity:0, pathLength: 0},
    animate: {
        opacity: [0, 0, 0, 0.2, 0.1, 1],
        scale: (1.3), x: [-100, 40], rotateZ: 0,
        fontsize: 50,
        rotate: 0, pathLength: 1,
        transition: {
            stiffness: 550, mass: 112, duration: 1,
        },
        // delay: 22500
    }
}

export const fadeIn = {
    initial: {
        opacity:0,
    },
    animate:{
        opacity:1,
        transition: {
            stiffness: 550, mass: 112, duration: 1,
        },
        delay: 500
    }
}