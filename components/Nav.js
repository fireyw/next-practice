import React from 'react';
import Link from "next/link";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">home</Link>
                </li>
                <li>
                    <Link href="/photos">photos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;