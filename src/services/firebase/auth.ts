import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

export class UserService {

    static Register(email: string, password: string): Promise<string | null> {
        return new Promise((res, rej) => {
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    res(userCredential.user.email);
                })
                .catch((error) => {
                    rej(error);
                });
        });
    }

    static Login(email: string, password: string): Promise<string | null> {
        return new Promise((res, rej) => {
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    res(user.email)
                })
                .catch((error) => {
                    rej(error);
                });
        });
    }

}

