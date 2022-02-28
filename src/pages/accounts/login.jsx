import React from 'react';
import Link from 'next/link';
import LoginForm from '@/components/LoginForm';
import HomeFooter from '@/components/HomeFooter';
import DownloadApp from '@/components/DownloadApp';

export default function Login() {
  return (
    <div className="home">
      <h1 className="home__title">Instagram</h1>
      <LoginForm />
      <p>
        <span className="account">Vous n&apos;avez pas de compte ?</span>
        <Link href="/#" passHref>
          <a href="replace" className="signup">
            Inscrivez-vous
          </a>
        </Link>
      </p>
      <DownloadApp />
      <HomeFooter />
    </div>
  );
}
