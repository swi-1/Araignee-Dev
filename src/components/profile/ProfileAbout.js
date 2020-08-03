import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    const firstName = profile.user.name.trim().split(' ')[0];

    const niveau = profile.niveau.map((niveau, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {niveau}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">Biographie {firstName}</h3>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>{firstName} n'a pas de bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center text-info">Ensemble de compétences</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {niveau}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
