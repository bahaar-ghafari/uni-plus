import React, {Component} from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonList } from '@ionic/react';
import './Question.css';
import Menubar from '../../shared/Menubar/Menubar';
import CircleIcon from '../../shared/CircleIcon/CircleIcon';
import QuestCard from '../../shared/QuestCard/QuestCard';

export default class Question extends Component {
      render(){
          return(
            <div>
                <Menubar name='questions'/>
                <IonList >
                    <QuestCard name='bahargh' text='hi react is library?what is different between that and angular?'/>
                    <QuestCard name='maeenrzi' text='hi react is better or angular is worse?'/>
                </IonList>
                <CircleIcon name='+' style={{top:'90%', right:'5%'}}/>
                </div>
          );
      }
  }