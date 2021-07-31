import React from "react";
import Link from "next/link";
import { Select } from "antd";
import Container from "./styles";

const { Option } = Select;

const links = [
  "À propos",
  "Blog",
  "Emplois",
  "Aide",
  "API",
  "Confidentialité",
  "Conditions",
  "Comptes",
  "principaux",
  "Hashtags",
  "Lieux",
];

const selects = [
  { value: "fr", text: "Français" },
  { value: "en", text: "English" },
  { value: "en-gb", text: "English (UK)" },
];

const HomeFooter = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Container>
      <ul className="flex justify-evenly flex-wrap">
        {links.map((link) => (
          <li key={link} className="m-1">
            <Link href="/#" passHref>
              <a href="replace">{link}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-evenly m-4">
        <Select className="w-24 m-2" defaultValue="fr" onChange={handleChange}>
          {selects.map((select) => (
            <Option key={select.value} value={select.value}>
              {select.text}
            </Option>
          ))}
        </Select>
        <div className="copyright"> &copy; 2021 Instagram par Facebook</div>
      </div>
    </Container>
  );
};

export default HomeFooter;
