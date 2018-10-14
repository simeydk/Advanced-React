import React from 'react';
import Link from 'next/link'

const Nav = () => {
    return (
        <div>
            <Link href="/"><a href="">Home</a></Link>
            <Link href="/sell"><a href="">Sell</a></Link>   
        </div>
    );
};

export default Nav  