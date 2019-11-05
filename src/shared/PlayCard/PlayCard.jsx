import React, {Component} from 'react';
import './PlayCard.css';
import elihh from '../../assets/user.png';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonAvatar, IonCard } from '@ionic/react';
export default class PlayCard extends Component {
      render(){
          return(
                <IonCard color='pink' class='Play-card'>
                        <IonAvatar item-start  class='avatar'>
                          <img src={elihh} alt='usr' />
                            </IonAvatar>
                            <p className='user'>{this.props.name}</p>
                            <button className='lesson-tag'>{this.props.lesson}</button>
                            <button className='lesson-tag'>{this.props.result}</button>
                   </IonCard>
          );
      }
  }