import React, { Component } from 'react';
import '../../Components/TutorialMain/TutorialMain.css';
import Course from '../../shared/Course/Course';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonCard,
  IonCardHeader,
  IonApp,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import Btn from '../../shared/Btn/Btn';
export default class TutorialMain extends Component {
  render() {
    return (
      <IonApp >
        <IonCard>
          <IonCardHeader class='top'>
            <IonToolbar>
              <IonTitle>{this.props.lessonname}</IonTitle>
            </IonToolbar>
          </IonCardHeader>
        </IonCard>
        <IonCard class='levels'><Course style={{ float: 'left', margin: '40px' }} /><Course style={{ float: 'right', margin: '40px' }} /><br />
          <Course style={{ marginLeft: '130px' }} /> <br /><br />
          <Btn name='shortcut' style={{ left: '50px', float: 'left', marginLeft: '33%' }} />
          <Course style={{ float: 'left', margin: '40px' }} /><Course style={{ float: 'right', margin: '40px' }} /><br />
          <Course style={{ marginLeft: '130px' }} /> <br /><br />
          <Btn name='shortcut' style={{ left: '50px', float: 'left', marginLeft: '33%' }} />
          <Course style={{ float: 'left', margin: '40px' }} /><Course style={{ float: 'right', margin: '40px' }} /><br />
          <Course style={{ marginLeft: '130px' }} /> <br /><br />
          <Btn name='madrak' style={{ left: '50px', float: 'left', marginLeft: '33%' }} />
        </IonCard>
      </IonApp>
    );
  }
}