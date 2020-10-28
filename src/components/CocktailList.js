import React from 'react';
import { useGlobalContext } from '../utils/context';
import Loading from './Loading';
import Cocktails from './Cocktails';

const CocktailList = () => {
    const { cocktails, loading } = useGlobalContext();

    if (loading) {
        return <Loading/>
    }
    if (cocktails.length < 1) {
        return <h2 className='section-title'>
            No cocktails matched your search
        </h2>
    }
    return (
       <section className="section">
           <h2 className="section-title">
               Cocktails
           </h2>
           <div className="cocktails-center">
               {cocktails.map((item) => {
                   return <Cocktails
                    key={item.id}
                    {...item}
                   />
               })}
           </div>
       </section>
    )   
};

export default CocktailList;