import type { NextPage } from 'next'
import Image from 'next/image'
import cover from '../public/images/cover.jpg';

const LandingBanner: NextPage = () => {

    return (
        <header className="flex flex-row flex-wrap justify-around items-center p-0 sm:p-10">
            <span className="h-auto p-10 text-3xl font-bold text-center">
                Learn to code
                <br/>
                Get hired!
            </span>
            <div className='h-96 w-auto max-w-md px-8 md:h-auto relative'>
                <Image className='rounded-md' src={cover}></Image>
            </div>
        </header>
    );
}

export default LandingBanner