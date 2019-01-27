import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

import './App.css';

class App extends Component {
  state = {
    alert: null
  };

  showAlert() {
    const getAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes!"
        confirmBtnBsStyle="warning"
        cancelBtnBsStyle="default"
        title="Are you sure you want to delete this project?"
        onConfirm={() => this.deleteFile()}
        onCancel={() => this.cancelDelete()}
      >
        You will not be able to recover this project!
      </SweetAlert>
    );
    this.setState({
      alert: getAlert()
    });
  }

  deleteFile() {
    console.log('Do here whatever you need');
    this.setState({
      alert: null
    });
  }

  cancelDelete() {
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
