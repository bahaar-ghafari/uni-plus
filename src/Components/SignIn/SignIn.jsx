import React, { Component } from 'react';
import './SignIn.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonCard , IonHeader,IonToolbar,IonContent,IonLabel,IonInput
     ,IonTitle,IonList,IonItem} from '@ionic/react';
// import appicon from '../../assets/img/user.png';
import CircleIcon from '../../shared/CircleIcon/CircleIcon';
export default class SignIn extends Component {
    render(){
        return(
    <IonCard class='sign-in-page'>
    <IonHeader>
        <IonToolbar>
            <IonTitle>login</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>
        <div className="logo">
            {/* <img src={appicon} alt="Ionic logo" /> */}
        </div>
        <form>
            <IonList>
                <IonItem>
                    <IonLabel color="primary">phone-number</IonLabel>
                    <IonInput
                        type="number"
                        required>
                    </IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="primary">Password</IonLabel>
                    <IonInput type="password" required/>
                </IonItem>
            </IonList>
            <CircleIcon style={{ top:'560px' , right:'25px'}} name='>'/>
        </form>
    </IonContent>
</IonCard>
        );
    }
}