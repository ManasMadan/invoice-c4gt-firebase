import React, { useState } from "react";
import { IonIcon, IonButton, IonModal } from "@ionic/react";
import { person } from "ionicons/icons";
import LoginFormComponent from "./LoginFormComponent";
import { Local } from "../Storage/LocalStorage";

const Login: React.FC = () => {
  const [login, setlLogin] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const doAuth = (email: String, password: String) => {
    const local = new Local();
    // TODO : DO Email and Password Checks here
    setlLogin(true);
    const data = { email: email, password: password };
    console.log(data);
    closeLoginModal();
  };
  const closeLoginModal = () => setOpenLoginModal(false);

  return (
    <React.Fragment>
      <IonButton
        slot="start"
        className="ion-padding-start"
        onClick={() => {
          if (!login) setOpenLoginModal(true);
          else setlLogin(false);
        }}
      >
        <IonIcon icon={person} size="large" />
        {login ? "Logout" : "Login"}
      </IonButton>

      <IonModal isOpen={openLoginModal} animated onDidDismiss={closeLoginModal}>
        <LoginFormComponent handleLogin={doAuth} />
      </IonModal>
    </React.Fragment>
  );
};

export default Login;
