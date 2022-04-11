import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
<<<<<<< HEAD
    const {user} = useFirebase();
    return (
        <div>
            <h2>Tok Tok ! Open the door...</h2>
            <h4>{user ? user.displayName : 'No one inside'}</h4>
        </div>
    );
=======
  const {user} = useFirebase();
  return (
    <div>
      <h2>Knock Knock ! who is there?</h2>
      <h5>{user ? user.displayName : 'Vooot ache mama'}</h5>
    </div>
  );
>>>>>>> cdc744ebd035b89a8ec4de563730f6dbafc15245
};

export default Products;