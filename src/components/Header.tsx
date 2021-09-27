import React from "react";

import { SOCIAL_LINKS } from "../configs/links";

const Header = () => {
    return (
        <div className='w-full flex justify-center fixed z-10 bg-black-dark bg-opacity-5 shadow-md'>
            <div className='md:w-1/2 flex flex-col md:flex-row justify-between items-center p-2'>
                <a href='/' className="font-skranji font-bold">rarity.plus</a>

                <div className='flex justify-between space-x-2 font-skranji'>
                    <a href={SOCIAL_LINKS.DISCORD} className='uppercase font-bold hover:bg-yellow-900 p-2'>Discord</a>
                    <a href={SOCIAL_LINKS.TWITTER} className='uppercase font-bold hover:bg-yellow-900 p-2'>Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Header