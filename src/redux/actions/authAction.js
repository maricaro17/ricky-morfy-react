import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { auth, db, google } from "../../firebase/FirebaseConfig";
import { Types } from "../types/Types.js";

const startRegisterWithEmailPasswordName = ({ name, email, password }) => {
  return async (dispatch) => {
    try {
      const newUsr = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(newUsr.user, {displayName: name})
      await setDoc(doc(collection(db, "usuarios"), newUsr.user.uid), {
        name: `${name}`,
        email,
      });
      Swal.fire({
        position: "center",
        text: `Registro Exitoso`,
        icon: "success",
        title: "Exitoso!!",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(register(newUsr.user.uid, name, email));
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        text: `Ocurrio un error`,
        icon: "error",
        title: "Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
const register = (id, name, email) => {
  return {
    type: Types.authRegister,
    payload: { id, name, email },
  };
};

const login = (user) => {
  return {
    type: Types.login,
    payload: {
      id: user.uid,
      name: user.displayName,
      isAuthenticated: true,
    },
  };
};

const logout = () => {
  return (dispatch) => {
    signOut(auth).then(() => {
      dispatch({
        type: Types.logout,
        payload: {
          isAuthenticated: false,
        },
      });
    });
  };
};

const loginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, google).then((result) => {
      const user = result.user;
      dispatch(login(user));
    });
  };
};

const loginEmailPassword = (email, password) => {
  console.log("email", email);
  console.log("password", password);
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("result", result);
        const user = result.user;
        console.log(user);
        dispatch(login(user));
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          text: `${err.message}`,
          icon: "error",
          title: "Error",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
};
export {
  startRegisterWithEmailPasswordName,
  loginEmailPassword,
  loginGoogle,
  logout,
  login,
};
