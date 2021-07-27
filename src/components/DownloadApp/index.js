import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./styles";

const DownloadApp = () => {
  return (
    <Container>
      <p>Téléchargez l&apos;application.</p>
      <div className="links">
        <Link
          href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
          passHref
        >
          <a href="replace" className="first-link">
            <Image
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_french-fr.png/485fcccb52dc.png"
              alt="Disponible dans l’App Store"
              height={40}
              width={134}
            />
          </a>
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D39CB1A66-6B9B-4703-8D4D-D7462EFD3271%26utm_content%3Dlo%26utm_medium%3Dbadge"
          passHref
        >
          <a href="replace">
            <Image
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_french-fr.png/46aa4b6fd58d.png"
              alt="Disponible dans Google Play"
              height={40}
              width={134}
            />
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default DownloadApp;
