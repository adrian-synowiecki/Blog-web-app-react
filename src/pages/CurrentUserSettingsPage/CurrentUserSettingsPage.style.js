import styled from 'styled-components/macro';

import Button from 'components/Button/Button';

export const UserSettingsPageContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 3rem 2rem;
`;

export const Title = styled.h1`
	font-weight: 500;
	color: ${({ theme }) => theme.colors.blue2};
	letter-spacing: 0.2rem;
`;

export const LogoutButton = styled(Button)`
  background-color: white;
  border: 1px solid #b85c5c;
  color: #b85c5c;
  &:hover {
    background-color: #b85c5c;
    color: white;
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
`;
