import React, {Component} from 'react';
import './CircleIcon.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
// import { IonButton } from '@ionic/react';
export default class CircleIcon extends Component {
      render(){
          return(
                <button className='circle-icon' style={this.props.style}>{this.props.name}</button>
          );
      }
  }