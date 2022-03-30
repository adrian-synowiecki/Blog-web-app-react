import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { motion } from "framer-motion";

import { ReactComponent as TrashCan } from "assets/trash.svg";
import { ReactComponent as Modify } from "assets/modify.svg";

import HeaderComponent from "components/Header/Header";
import CommentFormComponent from "components/CommentForm/CommentForm";

export const ArticleOverviewPageContainer = styled.div`
  --remove-color: #d12449;
`;

export const Header = styled(HeaderComponent)`
  background-color: var(--blue-2);
  min-height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 2rem;
  margin: 0 auto;
`;

export const Title = styled(motion.h1)`
  color: var(--white);
  letter-spacing: 0.1rem;
  font-weight: 400;
  overflow-wrap: break-word;
  margin-bottom: 2rem;
`;

export const Wrapper = styled(motion.section)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const buttonStyles = css`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 8rem;
  cursor: pointer;
  color: var(--white);
  padding: 0.3rem 0.5rem;
  font-size: 1.1rem;
  &:hover {
    filter: brightness(97%);
  }
  &:active {
    filter: brightness(90%);
  }
`;

export const DeleteButton = styled.button`
  ${buttonStyles};
  background-color: var(--remove-color);
`;

export const ModifyButton = styled.button`
  ${buttonStyles};
  background-color: #e3af34;
  margin-right: 3rem;
`;

export const MultipleIconsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const IconWrapper = styled.div`
  background-color: var(--white);
  padding: ${({ includePadding }) => includePadding && "0.6rem"};
  border-radius: 8rem;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;

export const TrashCanIcon = styled(TrashCan)`
  width: 1.8rem;
  height: 1.8rem;
  background-color: white;
  border-radius: 8rem;
  fill: var(--remove-color);
`;

export const ModifyIcon = styled(Modify)`
  width: 3rem;
  height: 3rem;
  background-color: var(--white);
  border-radius: 8rem;
  fill: #55abb5;
`;

export const MainWrapper = styled(motion.main)`
  margin: var(--container-margin);
  @media (min-width: 1200px) {
    width: 1150px;
    margin: 0 auto;
    margin-top: 50px;
  }
`;

export const Text = styled.p`
  margin-bottom: 3rem;
  overflow-wrap: break-word;
  line-height: 1.5;
`;

export const CommentForm = styled(CommentFormComponent)`
  margin: 3rem 0;
`;

export const AuthInvite = styled.p`
  margin-top: 5rem;
  margin-bottom: 3rem;
  font-size: 1.4rem;
`;

export const AuthInviteSpan = styled(Link)`
  color: (--blue-2);
  font-weight: 500;
  text-decoration: none;
`;
