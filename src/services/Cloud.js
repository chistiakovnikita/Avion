import { initializeApp } from 'firebase/app'

export class CloudService {
    constructor() {
        this.config = {
            apiKey: process.env.API_KEY,
            authDomain: "avion-be528.firebaseapp.com",
            projectId: "avion-be528",
            storageBucket: "avion-be528.appspot.com",
            messagingSenderId: "998955966712",
            appId: process.env.APP_ID,
            measurementId: "G-PXKK02S9NV"
        }

        this.app = initializeApp(this.config)
    }

}

export const cloudService = new CloudService()