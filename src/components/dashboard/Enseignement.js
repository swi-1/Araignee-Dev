import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEnseignement } from '../../actions/profileActions';

class Enseignement extends Component {
  onDeleteClick(id) {
    this.props.deleteEnseignement(id);
  }

  render() {
    const enseignement = this.props.enseignement.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Expérience Scolaire</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Ecole</th>
              <th>niveau</th>
              <th>année</th>
              <th />
            </tr>
            {enseignement}
          </thead>
        </table>
      </div>
    );
  }
}

Enseignement.propTypes = {
  deleteEnseignement: PropTypes.func.isRequired
};

export default connect(null, { deleteEnseignement })(Enseignement);
