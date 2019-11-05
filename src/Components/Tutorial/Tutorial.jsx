import React, {Component} from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonCard, IonApp , IonButton
} from '@ionic/react';
import Top from '../../shared/Top/Top';
import Qbar from '../../shared/Qbar/Qbar';
import '../../Components/Tutorial/Tutorial.css';
import IconPart from '../../shared/IconPart/IconPart';

export default class Tutorial extends Component {
        render(){
            return(
                <IonApp>
                <IonCard class='tutorial'>
                   <Top>
                       <IconPart /><IconPart /><IconPart /><IconPart />
                   </Top>
                   <Qbar />
                   <IonCard class='text'>
                       <IonCard class='main-text'></IonCard>
                       <IonCard class='notice-text'></IonCard>
                   </IonCard>
               <IonButton class='btn-nxt' color='secondary'>{this.props.name}</IonButton>
               </IonCard>
               </IonApp>
            );
        }
    }