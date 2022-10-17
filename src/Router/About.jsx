import '../styles/card.css';

export default function About(){



    return (
        <>
          
        <div id='about' className='intro'>
                <h1 className='summary__head'>ABOUT</h1>
                {/* <img className='jen' src={jen}></img> */}
                <p className='summary__intro'>HELLO!, I'm Lokesh Kumar Bairwa. Thank you for visiting my portfolio. I am a software engineer with a passion for creating beautiful interfaces. I am also a self-proclaimed nerd. I have always enjoyed working in technology for its dynamic, ever-evolving landscape. </p>
                
                <p className='summary__intro'> As a technical project manager I managed many complex projects with talented teams of UX/UI designers and developers. We created everything from HMIs for industrial machines, to GUIs for remote monitoring devices, to user experience flows for client onboarding applications. I am energized by environments in which I can combine creativity and problem solving!</p>

                <p className='summary__intro'>When I'm not coding I love to scuba dive in the Caribbean and train for half-marathons.</p>
            </div>
        </>
    )
}