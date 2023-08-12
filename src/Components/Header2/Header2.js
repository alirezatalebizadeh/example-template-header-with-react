import React from 'react'
import './Header2.css'
export default function Header2() {
    return (
        <>
            <div class="header2">
                <nav class="navBar">
                    <ul class="navbar__links">
                        <li class="link__item home">
                            <i class="fa fa-home" aria-hidden="true"></i> Home
                        </li>
                        <li class="link__item navLink">Account</li>
                        <li class="link__item navLink">Category</li>
                        <li class="link__item navLink">Login</li>
                    </ul>
                </nav>

                <div class="texts">
                    <h1 class="title">Live Above the clouds</h1>
                    <p class="info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
                        obcaecati voluptatum omnis dolores in nemo praesentium corporis
                        incidunt consectetur.
                    </p>
                    <button class="btn">
                        Discover now <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
