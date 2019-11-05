import React, {Component} from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {IonList, IonContent } from '@ionic/react';
import PlayCard from '../../shared/PlayCard/PlayCard';
// import './Play.css';
import Menubar from '../../shared/Menubar/Menubar';
import CircleIcon from '../../shared/CircleIcon/CircleIcon';

export default class Play extends Component {
      render(){
          return(
             <IonContent class='Play'>
                <Menubar name='Play'/>
                <IonList >
                    <PlayCard name='bahargh' result='1-0' lesson='py' />
                    <PlayCard name='maeenrzi' result='0-1' lesson='c#'/>
                    <PlayCard name='marymhmdpur' result='exp' lesson='js'/>
                </IonList>
                <CircleIcon name='+' style={{top:'88%' , right:'8%'}}/>
                </IonContent>
          );
      }
  }