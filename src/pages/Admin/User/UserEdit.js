import React from 'react';
import { useParams } from 'react-router-dom';

const UserEdit = () => {
    let { uid } = useParams();
    console.log(uid);

    return <div className="UserEdit"> Page EDIT</div>;
};

export default UserEdit;
