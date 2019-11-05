import React, {Component} from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonAvatar, IonCard } from '@ionic/react';
import './QuestCard.css';
import user from '../../assets/user.png';
export default class QuestCard extends Component {
      render(){
          return(
                <IonCard color='pink' class='questC-card'>
                        <IonAvatar item-start class='quest'>
                          
                          <img src={user} alt='usr' />
                            </IonAvatar>
                           <br />
                            <div className='user'>{this.props.name}</div>
                            <br />
                            <div className='quest'>{this.props.text}</div>
                            <button  className='tag'>Answer</ button>
                            <button  className='tag'>frontend</ button>
                            </IonCard>
          );
      }
  }