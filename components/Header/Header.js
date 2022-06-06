import React from 'react';
import PropTypes from 'prop-types';
import {
    Title,
    HeaderContainer,
    HeaderNav,
    HeaderNavList,
} from './Header.styles';
import Link from 'next/link';

const Header = ({}) => {
    return (
        <HeaderContainer>
            <Title>FOCUS</Title>
            <HeaderNav>
                <Link href={'/'}>COLECCIONES</Link>
                <Link href={'/'}>CREAR</Link>
                <Link href={'/'}>ACERCA DE FOCUS</Link>
            </HeaderNav>
        </HeaderContainer>
    );
};

Header.propTypes = {};

export default Header;
