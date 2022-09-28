import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { styled } from "../../stitches.config";
import { Container, Logo, StyledButton } from "../style/componentLibrary";
import { NavigationItem } from "../types/sanity";
import ColorToggle from "./ColorToggle";
import Icon from "./Icon";

type Props = {
  navigation?: NavigationItem[];
  logo: string;
};

const HeaderContainer = styled("header", {
  zIndex: "50",
  pt: "1rem",
  margin: "0 auto",
  height: "60px",
  position: "sticky",
  top: "0",
  background: "$background",
  width: "100%",

  [`& > ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default function Header({ logo }: Props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setMenuOpen(!isMenuOpen);
    }
  }, []);

  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <Link to="/">{logo}</Link>
        </Logo>

        <ColorToggle />
      </Container>
    </HeaderContainer>
  );
}
