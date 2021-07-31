import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { FacebookOutlined } from "@ant-design/icons";
import HomeFooter from "../HomeFooter";
import DownloadApp from "../DownloadApp";
import Button from "../SignupForm/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const HomeLayout = ({ children, text, href }) => {
  return (
    <Container>
      <div className="w-9/12 flex flex-col justify-evenly bg-white min-h-screen">
        <h1 className="text-center m-4 text-4xl">
          <Image
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            width={206}
            height={58}
            alt="Instagram Logo"
          />
        </h1>
        <h2 className="text-center text-gray-500 text-base font-semibold leading-5">
          Inscrivez-vous pour voir les photos et vidéos de vos amis
        </h2>
        <Button
          className="min-w-full rounded m-1 active:opacity-25 flex items-center justify-center"
          type="button"
        >
          <FacebookOutlined className="mr-2" />
          Se connecter avec Facebook
        </Button>
        {children}
        <p className="text-center">
          <span className="mr-2">Vous n&apos;avez pas de compte ?</span>
          <Link href={href} passHref>
            <a href="replace" className="text-sm">
              {text}
            </a>
          </Link>
        </p>
        <DownloadApp />
        <HomeFooter />
      </div>
    </Container>
  );
};

export default HomeLayout;
