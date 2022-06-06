import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    color: red;
`;

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    a {
        color: #000;
        margin-left: 20px;
        margin-right: 20px;
        text-decoration: none;
    }
`;
