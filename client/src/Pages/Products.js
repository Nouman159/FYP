import React, { useEffect } from 'react';

const Products = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='Products'>
            Products Page
        </div>
    )
};

export default Products;