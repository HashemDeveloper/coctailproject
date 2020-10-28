import React from 'react';
import { Link } from 'react-router-dom';

const ErrorDisplayer = () => {
    return (
       <section className="error-page section">
           <div className="error-container">
               <h1>Opps! It's a dead end.</h1>   
               <Link to="/">
                   <button className="btn">Back Home</button>
               </Link>
           </div>
       </section>
    )
};

export default ErrorDisplayer;