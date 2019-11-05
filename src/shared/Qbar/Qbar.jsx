import React, {Component} from 'react';
import './Qbar.css';
import IconPart from '../IconPart/IconPart';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
export default class Qbar extends Component {
      render(){
          return(
          <div className='q-bar'>
                <IconPart /><IconPart /><IconPart /><IconPart />
                </div>
          );
      }
  }