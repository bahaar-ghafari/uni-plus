import React, { Component } from 'react';
import '../HomeCard/HomeCard.css';
import user from '../../assets/img/user.png';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Btn from '../../shared/Btn/Btn';
import { IonAvatar, IonCard } from '@ionic/react';
export default class HomeCard extends Component {
  render() {
    return (
      <IonCard class='home-card'>
        <IonAvatar item-start class='avatar' >
          <img src={user} alt='usr' />
        </IonAvatar>
        <p className='user'>{this.props.name}</p>
        <p className='status'>{this.props.status}</p>
        <Btn name='Discover' style={{ PaddingTop:"20px" , marginTop:'4%'}}/>
      </IonCard>
    );
  }
}