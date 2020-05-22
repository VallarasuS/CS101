import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const LandingBanner: NextPage = () => {

    return (
        <header className="bg-cover">
            <div className='container mx-auto'>
                <div className='container mx-auto'>
                    <h1 className="text-3xl font-bold">
                        Learn to code
                    </h1>
                    <h1 className="text-3xl font-bold">
                        Get hired!
                    </h1>
                </div>
            </div>
        </header>
    );
}

export default LandingBanner