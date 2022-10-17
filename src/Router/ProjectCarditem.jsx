import React from 'react';
// import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>

            <li className='cards__item'>
                <div className='cardItemWrapper'>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        {/* <img src={props.src} alt='project' className='cards__item__img' /> */}
                    </figure>

                    <div className='cards__item__info'>
                        {/* eslint-disable-next-line */}
                        <h5 className='cards__item__text'>{props.text}</h5>
                        <p></p>
                        <a className='github' href={props.url} target='_blank'>GitHub</a>

                        <a className='app' href={props.appURL} target='_blank'> Live App</a>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CardItem;
