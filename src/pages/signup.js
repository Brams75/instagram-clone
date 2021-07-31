import React from "react";
import HomeLayout from "../components/HomeLayout";
import SignupForm from "../components/SignupForm";
import { Ou } from "../components/LoginForm/styles";

const signup = () => {
  return (
    <HomeLayout text="Connectez-vous" href="/">
      <Ou>
        <div className="line" />
        <div className="text">ou</div>
        <div className="line" />
      </Ou>
      <SignupForm />
      <div className="flex justify-center .items-center">
        <p className="text-gray-400">
          En vous inscrivant, vous acceptez nos Conditions générales. Découvrez comment nous
          recueillons, utilisons et partageons vos données en lisant notre Politique d’utilisation
          des données et comment nous utilisons les cookies et autres technologies similaires en
          consultant notre Politique d’utilisation des cookies.
        </p>
      </div>
    </HomeLayout>
  );
};

export default signup;
