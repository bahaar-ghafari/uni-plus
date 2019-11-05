import React, {Component} from 'react';
import './IconPart.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonButton } from '@ionic/react';
export default class IconPart extends Component {
      render(){
          return(
                <IonButton shape="round" fill="clear" class="icon-part">
                </IonButton>
          );
      }
  }