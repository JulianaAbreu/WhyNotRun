import React from 'react';
import { connect } from 'react-redux';
import PublicationForm from '../components/PublicationForm';
import { addPost } from "../actions/publicationsAction";

const mapDispatchToProps = dispatch => ({
  addPost: (title, text, idTech, idUser) => {
    dispatch(addPost(title, text, idTech, idUser));
  }
});

export default connect(mapDispatchToProps)(PublicationForm);
