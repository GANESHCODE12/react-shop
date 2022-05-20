import React from 'react';
import '../styles/Not_Found.scss';

import imgNotFound from '@img/404.png'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h5 className='title-error'>Page Not Found</h5>
            <div className='imgNotFound'>
                <img src={imgNotFound} alt="Not Found"/>    
            </div>
        </div>
    );
}

export { NotFound };
