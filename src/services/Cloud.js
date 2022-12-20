import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinema-fc827.firebaseapp.com",
      projectId: "online-cinema-fc827",
      storageBucket: "online-cinema-fc827.appspot.com",
      messagingSenderId: "133798898125",
      appId: process.env.APP_ID,
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
