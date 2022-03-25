import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { NavLink as NavLinkComponent } from "react-router-dom";
import MuiAlertComponent from "@material-ui/lab/Alert";

export const ProfilePageContainer = styled.div`
  margin: 3rem 2rem;
`;

export const CredentialsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 11rem;

  
`;

export const UserImage = styled.img`
  border-radius: 8rem;
  width: 11rem;
  height: 11rem;
`;

export const Username = styled.h1`
  margin-top: 0.5rem;
  color: var(--blue-2);
`;

export const Bio = styled.p`
  color: var(--blue-2);
  font-size: 1.5rem;
`;

export const Wrapper = styled.section`
  position: relative;
  margin-top: 3rem;
  min-height: 22rem;

  @media (min-width: 1209px) {
    width: 1000px;
    margin: 0 auto;
    margin-top: 50px;
  }
`;

export const NavLinkUnderline = styled.div`
  height: 0.3rem;
  background-color: var(--blue-1);
  transition: 0.4s ease;
  margin-top: 1.2rem;
  width: 0;
`;

export const NavLink = styled(NavLinkComponent)`
  text-decoration: none;
  margin-right: 2rem;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  display: inline-block;
  color: var(--blue-1);
  &:active {
    transform: scale(0.95);
    transition: 0.2s;
  }
  &:hover {
    opacity: 0.8;
  }
  &.active {
    text-shadow: 0.25px 0px 0.1px, -0.25px 0px 0.1px;
    ~ ${NavLinkUnderline} {
      width: ${({ width }) => width && `${width}px`};
      margin-left: ${({ marginLeft }) => `${marginLeft}px`};
    }
  }
`;

export const NotFoundMessage = styled.p`
  font-size: 1.3rem;
  margin-top: 2rem;
`;

export const MuiAlert = styled(MuiAlertComponent)`
  .MuiAlert-message {
    font-size: 1.2rem;
  }
  .MuiSvgIcon-fontSizeSmall {
    font-size: 1.6rem;
    margin-top: -0.2rem;
  }
`;
