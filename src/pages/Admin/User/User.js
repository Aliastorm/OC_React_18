import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    let navigate = useNavigate();

    const marcel = (userId) => {
        console.log('toto');
        navigate('../edit/' + userId);
    };

    return (
        <div className="User">
            User List
            <button onClick={() => marcel(4)}>Euser 4</button>
        </div>
    );
};

export default User;
