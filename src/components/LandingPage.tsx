import type { NextPage } from "next"
import Image from "next/image"
import cover from "../public/images/cover.jpg";

const takeAways = ["Learning Plan", "Curated Learning Materials", "Tools & Guides", "Progress Tracker", "1-1 Online Support", "Community Support"];

const LandingPage: NextPage = () => {

    return (
        <div>
            <header className="flex flex-row flex-wrap justify-around items-center p-0 sm:p-10 section-bg">
                <span className="h-auto p-10 text-base md:text-3xl font-bold text-center">
                    Learn to code.
                    <br />
                    <span className="text-orange-600">
                        Get hired.
                    </span>
                </span>
                <div className="w-auto max-w-md px-8 relative">
                    <Image className="rounded-md" src={cover} alt="Student learning to programs"></Image>
                </div>
            </header>

            <section className="flex flex-col justify-around items-center p-0 sm:p-10 section-bg">
                <span className="h-auto p-10 text-base md:text-3xl font-bold text-center">
                    I believe anyone can code.
                    <br />
                    If <span className="text-orange-600">you believe </span> in it,
                    <br />
                    We are here to help.
                </span>

                <button className="bg-orange-600 rounded text-white px-10 py-5">
                    Enroll Now
                </button>
            </section>

            <section className="flex flex-col justify-around items-center p-0 sm:p-10 section-bg">

                <span className="h-auto p-10 text-base md:text-3xl font-bold text-center">
                    How does it work?
                </span>
                <span className="h-auto p-10 text-base md:text-2xl text-center">
                    Technology trends change rapidly, what doesn`&quot;`t change is the process of learning.
                    <br />
                    We will impart decades of knowledge in learning,
                    <br />
                    you can use to your advantage.
                </span>

                <span className="h-auto p-10 text-base md:text-3xl font-bold text-center">
                    You will get access to
                </span>

                <ul className="list-none">
                    {
                        takeAways.map((i,n) => {
                            return (
                                <li key={n.toString()} className="my-2">
                                    <div className="flex flex-row items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="h-auto pl-2 text-base md:text-2xl text-center">
                                            {i}
                                        </span>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>

            </section>
        </div>



    );
}

export default LandingPage