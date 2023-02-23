import React from 'react';
import {
  getAuth,
  updateEmail,
  sendEmailVerification,
  updatePassword,
  deleteUser,
} from 'firebase/auth';
import { useAuthCtx } from '../../context/AuthCtx';

export default function Settings() {
  const auth = getAuth();
  const user = auth.currentUser!;
  const { currentUser } = useAuthCtx();

  const editEmail = (email: string) => {
    updateEmail(user, email)
      .then((res) => {
        console.log(res, currentUser.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(user).then(() => {
      // Email verification sent!
      // ...
    });
  };

  const changePassword = (password: string) => {
    updatePassword(user, password)
      .then(() => {
        // Update successful.
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
  };

  const deleteAccount = () => {
    deleteUser(user)
      .then(() => {
        // User deleted.
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
  };
  //change email, display name, password
  //
  return <div>Settings</div>;
}

// REAAUTHENTICATE USER

// // TODO(you): prompt the user to re-provide their sign-in credentials
// const credential = promptForCredentials();

// reauthenticateWithCredential(user, credential).then(() => {
//   // User re-authenticated.
// }).catch((error) => {
//   // An error ocurred
//   // ...

// });
