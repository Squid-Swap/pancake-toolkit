import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import { Image } from "../../..";
import Flex from "../../../components/Box/Flex";
import { LogoWithTextIcon } from "../../../components/Svg";

interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<Props> = ({ href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {/* <LogoIcon className="mobile-icon" /> */}
      {/* <Image width="32px" height="auto" src={logoUrl} alt="logo" className="mobile-icon" /> */}
      <LogoWithTextIcon className="desktop-icon" />
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Squid stake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Squid stake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo
