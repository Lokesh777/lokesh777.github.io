import React from 'react';
import CardItem from './ProjectCarditem';
import '../styles/card.css';
// import fitness from '../images/fitness.png';
// import codeqz from '../images/codeqz.png';
// import employees from '../images/employees.png';
// import evolvejournal from '../images/evolvejournal.png';
// import pickyeaterapp from '../images/pickyeaterapp.png';
// import traveltracker from '../images/traveltracker.png';
// import jen from '../images/jen.jpeg';

function Cards() {
    return (

        <>
            

            <div id='projects' className='cards'>
                <h1>PROJECTS</h1>
                {/* <p className='projects__intro'>Six projects I enjoyed working on are highlighted below. Select <b>'GitHub'</b> for the project repository and the code behind the app. Select <b>'Live App'</b> to view
                the deployed
                    project! Visit my full GitHub repository at: <a
                        className="onomatopoetica" href="https://github.com/onomatopoetica"
                        target="_blank">Onomatopoetica</a>. <em>Please note: Apps deployed
                    on Heroku take a little longer to load.</em> </p> */}

                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                // img src={evolvejournal}
                                text='A progressive web app! This group project fitness
                                journal uses a Node  + a Sequelize ORM and an MVC design paradigm. This application is deployed on
                                Heroku.'
                                label='Evolve Fitness Journal'
                                url='https://github.com/onomatopoetica/evolve'
                                appURL='https://evolve-journal.herokuapp.com/'
                            />

                            <CardItem
                                // img src={codeqz}
                                text='Students have 75 seconds to
                                take a JavaScript quiz testing their knowledge of the
                                fundamentals. 
                                peers. Deployed on GitHub.'
                                label='JavaScript Code Quiz'
                                url='https://github.com/onomatopoetica/code-quiz'
                                appURL='https://onomatopoetica.github.io/code-quiz/'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                // img src={employees}
                                text="An employee directory app using React to create UI components, manage component state and respond to user input events. Random User API is used to demonstrate app functionality. Results begin to render in the table as the user types."
                                label='React Employee Directory'
                                url='https://github.com/onomatopoetica/react-employee-directory'
                                appURL='https://onomatopoetica.github.io/react-employee-directory/'
                            />
                            <CardItem
                                // img src={pickyeaterapp}
                                text='A group project using jQuery + Spoonacular API
                                creates a resource for people with food sensitivities. The user can search by specific
                                dietary
                                requirements to view a recipe, ingredients,
                                instructions + view more information about the recipe.'
                                label='Picky Eater Recipe App'
                                url='https://github.com/jkriese12/picky-eater'
                                appURL='https://jkriese12.github.io/picky-eater/'
                            />
                        </ul>
                        <ul className='cards__items'>
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
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
