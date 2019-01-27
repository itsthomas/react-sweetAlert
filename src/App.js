import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

import './App.css';

// Creating custom dialog alerts using React-Bootstrap-Sweetalert
// http://djorg83.github.io/react-bootstrap-sweetalert/

class App extends Component {
  state = {
    alert: null // initialising an empty alert
  };

  // Defining first alert
  showAlert() {
    const getAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes!"
        confirmBtnBsStyle="warning"
        cancelBtnBsStyle="info"
        title="Are you sure you want to delete this project?"
        onConfirm={() => this.showSecondAlert()} // Shows the second dialog
        onCancel={() => this.closeAlert()}
      >
        You will not be able to recover this project!
      </SweetAlert>
    );
    this.setState({
      alert: getAlert()
    });
  }

  // Defining the second alert, which will show after clickin on 'Yes' button in the first dialog
  showSecondAlert() {
    const getSecondAlert = () => (
      <SweetAlert
        warning
        confirmBtnText="Close!"
        confirmBtnBsStyle="success"
        title="It was confirmed"
        onConfirm={() => this.closeAlert()}
      >
        Click on close button to close this dialog!
      </SweetAlert>
    );
    this.setState({
      alert: getSecondAlert()
    });
  }

  deleteFile() {
    console.log('Do here whatever you need');
    this.setState({
      alert: null
    });
  }

  closeAlert() {
    this.setState({
      alert: null
    });
  }

  render() {
    return (
      <div>
        <button
          id="button__project-delete"
          style={{ boxShadow: 'none', padding: '20px', margin: '20px' }}
          type="submit"
          onClick={() => this.showAlert()}
        >
          Delete
        </button>
        {this.state.alert}
      </div>
    );
  }
}

export default App;
