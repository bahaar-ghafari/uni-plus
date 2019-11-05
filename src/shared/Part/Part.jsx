import React, {Component} from 'react';
import './Part.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonButton } from '@ionic/react';
export default class Part extends Component {
      render(){
          return(
                <IonButton fill="clear" class="part">{this.props.name}</IonButton>
          );
      }
  }