import React from 'react'
import { useLocation } from 'react-router';
import { LinkStyled, NavList } from './Navs.styled';

const links = [
    {
        to: "/",
        text: "Home"
    },
    {
        to: "/starred",
        text: "Starred"
    }];

const Navs = () => {

    const location = useLocation()

    return (
        <NavList>
            {
                links.map((item) => {
                    return (
                        <li key={item.to}>
                            <LinkStyled to={item.to}
                                className={item.to === location.pathname ? 'active' : ''}>{item.text}</LinkStyled>
                        </li>)
                })
            }
        </NavList>
    )
}

export default Navs
