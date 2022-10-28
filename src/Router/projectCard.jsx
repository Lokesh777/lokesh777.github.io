import React from 'react';
import CardItem from './ProjectCarditem';
import '../styles/card.css';
import { Fade } from "react-awesome-reveal";
import littleFog from "../images/littleFog.png"
import stopwatch from "../images/stopwatch.png"
import pharmaEasy from "../images/pharmaEasy.png"
import lyst from "../images/lyst.png"

function Cards() {
    return (

        <>
            

            <div id='projects' className='cards'>
            <Fade bottom>
                <h1 className='headingH1'>PROJECTS</h1>
                

                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                img src={stopwatch}
                                text='A stopwatch is a timepiece designed to measure the amount of time that elapses between its activation and deactivation.'
                                label='Stopwatch App'
                                url='https://github.com/masai-course/Lokesh_fw18_0979/tree/master/unit-4/sprint-3/day-1/assignments/stopwatch'
                                appURL='https://stopwatch-ehclrh1le-lokesh777.vercel.app/'
                            />

                            <CardItem
                                img src={pharmaEasy}
                                text='PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand,
                                 home delivered access to a wide range of prescription'
                                label='PharmEasy Clone Website'
                                url='https://github.com/VinayPathania/Clone-PharmEasy'
                                appURL='https://cute-jalebi-e15c39.netlify.app/'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                img src={littleFog}
                                text="TrackingTime is a collaborative, cloud-based time tracking service that helps businesses of any size manage their projects, track working times and measure productivity."
                                label='TrackingTime App'
                                url='https://github.com/Lokesh777/little-fog-1256'
                                appURL='https://little-fog-1256.vercel.app/'
                            />
                            <CardItem
                                img src={lyst}
                                text='Lyst is a fashion technology company, and premium shopping app.'
                                label='Lyst Clone Website'
                                url='https://github.com/Raj-Mandloii/lyst_project'
                                appURL='https://62aec458d002661172622f35--delightful-biscochitos-b2f2b6.netlify.app/'
                            />
                        </ul>
                        {/* <ul className='cards__items'>
                            <CardItem
                                // img src={fitness}
                                text='A fitness (workout) tracker incorporates a Mongo database with a Mongoose schema and routing with Express. The app uses MongoDB Atlas cloud database to store user data. The app is deployed on Heroku.'
                                label='Fitness Tracker'
                                url='https://github.com/onomatopoetica/workout-tracker'
                                appURL='https://immense-inlet-26212.herokuapp.com/'
                            />
                            <CardItem
                                // img src={traveltracker}
                                text='A responsive budget tracker progressive web app (PWA) with offline functionality. Deposits and expenses are stored in a MongoDB Atlas cloud database. The app is deployed on Heroku.'
                                label='Travel Budget'
                                url='https://github.com/onomatopoetica/budget-tracker'
                                appURL='https://agile-river-83351.herokuapp.com/'
                            />
                        </ul> */}
                    </div>
                </div>

                </Fade>
            </div>
        </>
    )
}

export default Cards
