import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp
} from '@ionic/react';
// import SignIn from './Components/SignIn/SignIn';
// import Code from './Components/Code/Code';
import Learn from './pages/Learn/Learn';
// import Home from './pages/Home/Home';
// import Play from './pages/Play/Play';
// import TutorialMain from './Components/TutorialMain/TutorialMain.jsx';
// import TutorialParts from './Components/TutorialParts/TutorialParts';
// import Tutorial from './Components/Tutorial/Tutorial';
// import Question from './pages/Question/Question';


export default class App extends Component {
  render() {
    return (
      <IonApp>
        {/* <SignIn /> */}
        {/* <Code /> */}
        <Learn />
        {/* <Home /> */}
        {/* <Play /> */}
        {/* <TutorialMain /> */}
        {/* <TutorialParts /> */}
        {/* <Tutorial /> */}
        {/* <Question /> */}
      </IonApp>
    );
  }
}