import React from 'react'
import { Link } from 'react-router-dom'

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
    return (
        <ul>
            {
                links.map((item) => {
                    return (
                        <li key={item.to}>
                            <Link to={item.to}>{item.text}</Link>
                        </li>)
                })
            }
        </ul>
    )
}

export default Navs
