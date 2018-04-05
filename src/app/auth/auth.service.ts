import * as firebase from 'firebase';

export class AuthService {
    token: string;

    singupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(v => console.log('Signed up'))
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      );
    }

    getToken() {
        firebase.auth().currentUser.getToken().then(
            (t: string) => {
                this.token = t;
            }
        );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
