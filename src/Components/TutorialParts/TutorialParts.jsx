import React, {Component} from 'react';
import Part from '../../shared/Part/Part';
import Top from '../../shared/Top/Top';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent
} from '@ionic/react';

export default class TutorialParts extends Component {
        render(){
            return(
      <IonApp>
          <IonContent>
              <Top />
              <Part /><Part />
              <Part /><Part />
              <Part /><Part />
              <Part /><Part />
              <Part /><Part />
          </IonContent>
      </IonApp>
            );
        }
    }