import React from 'react';
import { render, screen } from '@testing-library/react';
import Edit from './';
import { AuthProvider } from '../../context/AuthCtx';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

describe('Firebase Authentication', () => {
  const auth = getAuth();
  it('should log in a user', async () => {
    const email = 'testuser@example.com';
    const password = 'password';

    // Sign in the user
    await signInWithEmailAndPassword(auth, email, password);

    // Check if the user is logged in
    expect(auth.currentUser).not.toBeNull();
  });
  test('tests edit button', () => {
    const { getByText } = render(
      <AuthProvider>
        <Edit />
      </AuthProvider>
    );
    const submit = getByText('Go!');
    expect(submit).toBeInTheDocument();
  });
  // it('should log out a user', async () => {
  //   // Sign out the user
  //   await signOut();

  //   // Check if the user is logged out
  //   expect(currentUser).toBeNull();
  // });
});

