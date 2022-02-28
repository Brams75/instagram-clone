import React from "react";
import Link from "next/link";
import { Select } from "antd";
import Container from "./styles";

const { Option } = Select;

const links = [
  "Meta",
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
      <ul>
        {links.map((link) => (
          <li key={link}>
            <Link href="/#" passHref>
              <a href="replace">{link}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="footer-bottom">
        <Select className="select" defaultValue="fr" onChange={handleChange}>
          {selects.map((select) => (
            <Option key={select.value} value={select.value}>
              {select.text}
            </Option>
          ))}
        </Select>
        <div className="copyright"> &copy; {new Date().getFullYear()} Instagram par Meta</div>
      </div>
    </Container>
  );
};

export default HomeFooter;
