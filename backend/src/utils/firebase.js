const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateEmail } = require('firebase/auth');

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = {
    async createNewUser(email, password) {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        
        return result.user.uid;
    },

    async login(email, password) {
        const result = await signInWithEmailAndPassword(auth, email, password);

        return result.user;
    },

    async resetPassword(email) {
        try {
            await sendPasswordResetEmail(auth, email);
            return { success: true, message: "Email de recuperação enviado." };
        } catch (error) {
            return { success: false, message: error.message };
        }
    },

    async updateUserEmail(currentUser, newEmail) {
        try {
            await updateEmail(currentUser, newEmail);
            return { success: true, message: "Email atualizado com sucesso." };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }

}