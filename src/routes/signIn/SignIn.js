import {
  signInWithGoogle,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";
import SignUpForm from "../../components/signUpForm/SignUpForm";

const SignIn = () => {
  const logInWithGoogle = async () => {
    const { user } = await signInWithGoogle();
    const createUserDoc = await createUserDocumentFromAuth(user);
    console.log(createUserDoc);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logInWithGoogle}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
