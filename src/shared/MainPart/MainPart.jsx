import React, {Component} from 'react';
import './MainPart.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonButton } from '@ionic/react';
export default class MainPart extends Component {
      render(){
          return(
                <IonButton fill="clear" class="main-part">{this.props.name}</IonButton>
          );
      }
  }