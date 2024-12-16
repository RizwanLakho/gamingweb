import { useGSAP } from '@gsap/react'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
      useGSAP(()=>{
        const clipAnimaiton = gsap.timeline({
            scrollTrigger:{
                trigger:'#clip',
                start :'center center',
                end: '+=800 center', 
                scrub: 0.5,
                pin:true,
                pinSpacing:true

            }
        })
        clipAnimaiton.to(".mask-clip-path",{
            width:'100vw',
            height:'100vh',
            borderRadius: 0,
        })
      })

    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col  items-center gap-5'>
                <h2 className='font-general text-sm uppercase'>Welcome to Zentry</h2>
                <AnimatedTitle title=" Disc<b>o</b>ver the World's l<b>a</b>rgest shared adventure" containerClass='mt-5 text-center !text-black' />
              
                <div className='about-subtext'>
                    <p>the game of games begains-your life, now an epic MMORPG</p>
                    <p>Zentry unites every player from countless games and platforms</p>


                </div>

            </div>
            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                <img src="img/about.webp" alt="Background"
                        className=' absolute left-0 top-0 size-full object-cover' />

                </div>

            </div>
        </div>
    )
}

export default About 