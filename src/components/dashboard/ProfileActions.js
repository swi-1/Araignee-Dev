import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4 d-flex flex-column" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="far fa-id-badge text-info mr-1" /> + Editer le profil
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
       + Experience
      </Link>
      <Link to="/add-enseignement" className="btn btn-light">
        <i className="fas fa-user-graduate text-info mr-1" />
         + Enseignement
      </Link>
    </div>
  );
};

export default ProfileActions;
