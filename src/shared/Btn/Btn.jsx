import React, {Component} from 'react';
import './Btn.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
export default class Btn extends Component {
      render(){
          return(
          <button className='btn' style={this.props.style}>
          {this.props.name}</button>
          );
      }
  }