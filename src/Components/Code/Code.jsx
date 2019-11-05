import React, { Component } from 'react';
import './Code.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
    IonCard, IonHeader, IonToolbar, IonContent
    , IonTitle,
    IonButton
} from '@ionic/react';
import Btn from '../../shared/Btn/Btn';
export default class Code extends Component {
    render() {
        return (
            <IonCard class='code-page'>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>authentication</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent class='codes'>
                    <div className='text'>codi k sende kardim barato enter kn:</div>
                    <div className='codes'>
                        <IonButton type='number'></IonButton>
                        <IonButton type='number'></IonButton>
                        <IonButton type='number'></IonButton>
                        <IonButton type='number'></IonButton>
                    </div>
                    <Btn name='submit' style={{ marginTop: '15px' }} />
                </IonContent>
            </IonCard>
        );
    }
}