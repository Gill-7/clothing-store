import { useState } from "react";
import Button, { BUTTON_TYPES_CLASSES } from "../button/Button";
import FormInput from "../formInput/FormInput";
import {
  signInWithGoogle,
  signinWithEmailAndPassword,
} from "../../utils/firebase/Firebase";

import { SigninContainer, ButtonsContainer } from "./SignInForm.styles.js";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signinWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signinWithGoogle = async () => {
    await signInWithGoogle();
  };

  return (
    <SigninContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <ButtonsContainer>
          <Button type="submit" buttonType={BUTTON_TYPES_CLASSES.inverted}>
            Sign In
          </Button>
          <Button
            type="button"
            onClick={signinWithGoogle}
            buttonType={BUTTON_TYPES_CLASSES.google}
          >
            Google Sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SigninContainer>
  );
};

export default SignInForm;
