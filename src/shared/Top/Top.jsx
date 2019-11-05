import React, {Component} from 'react';
import './Top.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonCardHeader
} from '@ionic/react';

export default class Top extends Component {
        render(){
            return(
              <IonCardHeader class='top'>{this.props.name}</IonCardHeader>
            );
        }
    }