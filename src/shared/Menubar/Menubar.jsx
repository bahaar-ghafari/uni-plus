import React, { Component } from 'react';
import './Menubar.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonCard } from '@ionic/react';
export default class Menubar extends Component {
    render() {
        return (
            <IonCard className='navbar'>
                <div className='navbar-name'>{this.props.name}</div>
                <div className='navbar-items'>
                    <ul>
                        <li><a href='/'>Learn</a></li>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Play</a></li>
                        <li><a href='/'>Question</a></li>
                    </ul>
                </div>
            </IonCard>
        );
    }
}