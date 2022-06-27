import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCxRzGR0U-9qSB9_81dfuRTGBwi5CbVAI',
  authDomain: 'ui-boiler-app.firebaseapp.com',
  projectId: 'ui-boiler-app',
  storageBucket: 'ui-boiler-app.appspot.com',
  messagingSenderId: '880817525344',
  appId: '1:880817525344:web:d2345be094569ad8e62905',
  measurementId: 'G-9FJRZ4TTRW',
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
