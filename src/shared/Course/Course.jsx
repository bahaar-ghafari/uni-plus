import React, { Component } from 'react';
import './Course.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonAvatar } from '@ionic/react';
export default class Course extends Component {
      render() {
            //   https://codepen.io/pen?&editable=true&editors=0010
            //   https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
            return (
                  // <IonButton shape="round" fill="clear" className="circle-icon" style={this.props.style}>{this.props.name}</IonButton>
                  <IonAvatar item-start class='course'>
                  </IonAvatar>
                  );
            // function Change_page() {
            //       document.getElementsByClassName('TutorialMain.jsx');
            // }
      }
}