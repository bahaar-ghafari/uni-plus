import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonContent } from '@ionic/react';
import HomeCard from '../../shared/HomeCard/HomeCard';
import Menubar from '../../shared/Menubar/Menubar';
export default class Home extends Component {
    render() {
        return (
            <IonContent class='home'>
                <Menubar name='Home' />
                <HomeCard name='bahargh1996' status='nothing' />
                {/* Ads */}
            </IonContent>
        );
    }
}