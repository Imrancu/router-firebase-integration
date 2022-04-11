import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>Tok Tok ! Open the door...</h2>
            <h4>{user ? user.displayName : 'No one inside'}</h4>
        </div>
    );
};

export default Products;