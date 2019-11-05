import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonContent,
  IonCard,
  IonSearchbar,
  IonCardSubtitle,
  IonAvatar
} from '@ionic/react';
import * as serviceWorker from '../serviceWorker';
import '../Learn/Learn.css';
import Menubar from '../../shared/Menubar/Menubar.jsx';
// programming
import java from '../../assets/programming icons/programming/java.svg';
import php from '../../assets/programming icons/programming/php.svg';
import python from '../../assets/programming icons/programming/python.svg';
import csharp from '../../assets/programming icons/programming/csharp.svg';
// frontend
import html from '../../assets/programming icons/frontend/html.svg';
import css from '../../assets/programming icons/frontend/css.svg';
import js from '../../assets/programming icons/frontend/js.svg';
import react from '../../assets/programming icons/frontend/react.svg'
//db
import sql from '../../assets/programming icons/db/sql.svg';
export default class Learn extends Component {
  render() {
    return (
      <IonContent>
        <Menubar name='Learn' />
        <IonCard class='learn'>
          <IonSearchbar class='search-bar'></IonSearchbar>
          <IonCard className='my-courses'><IonCardSubtitle class="sub-title">MyCourses</IonCardSubtitle>
            <div className='course'><IonAvatar item-start><img src={java} alt='jva' /></IonAvatar>
            <p>java</p></div>
          </IonCard>
          <IonCard className='Other-courses'><IonCardSubtitle class="sub-title">Courses</IonCardSubtitle>{/*zeshtttttttttttttt*/}
            <IonCard className='courses'><IonCardSubtitle class="sub-title">Programming</IonCardSubtitle>
            <a href='/' className='course'><IonAvatar item-start><img src={java} alt='jva' /></IonAvatar><p>java</p></a>
            <a href='/' className='course'><IonAvatar item-start><img src={php} alt='php' /></IonAvatar><p>php</p></a>
            <a href='/' className='course'><IonAvatar item-start><img src={python} alt='py' /></IonAvatar><p>python</p></a>
            <a href='/' className='course'><IonAvatar item-start><img src={csharp} alt='c#' /></IonAvatar><p>c#</p></a>

            </IonCard>
            <IonCard className='courses'><IonCardSubtitle class="sub-title">frontend</IonCardSubtitle>
            <a href='/' className='course'><IonAvatar item-start ><img src={html} alt='html' /></IonAvatar><p>html</p></a>
            <a href='/' className='course'><IonAvatar item-start ><img src={css} alt='css' /></IonAvatar><p>css</p></a>
            <a href='/' className='course'><IonAvatar item-start ><img src={js} alt='js' /></IonAvatar><p>javascript</p></a>
            <a href='/' className='course'><IonAvatar item-start ><img src={react} alt='rct' /></IonAvatar><p>reactjs</p></a>
            </IonCard>
            <IonCard className='courses'><IonCardSubtitle class="sub-title">DataBases</IonCardSubtitle>
            <a href='/' className='course'><IonAvatar item-start><img src={sql} alt='sql' /></IonAvatar><p>sqlserver</p></a>
            </IonCard>
            <IonCard className='courses'><IonCardSubtitle class="sub-title">Latest Additions</IonCardSubtitle>
            <a href='/' className='course'><IonAvatar item-start ><img src={react} alt='rct' /></IonAvatar><p>reactjs</p></a>
            </IonCard>
            <IonCard className='courses'>
            </IonCard>
          </IonCard>
        </IonCard>
      </IonContent>
    );
  }
}
//export default Learn;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
