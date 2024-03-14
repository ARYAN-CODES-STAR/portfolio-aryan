// import React from "react";

// const About: React.FC = () => {
//   return (
//     <div
//       data-name="about"
//       className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             About
//           </p>
//         </div>

//         <p className="text-xl mt-5">
//           I am a Full-Stack Developer and does both FrontEnd & BackEnd Development.
//         </p>

//         <br />

//         <p className="text-xl">
//             I love building things that i 
//           I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> <br />
//           I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
//           I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import Image from "next/image";
import Aryan_pic from '@/assets/aryan_pic.png'

const About: React.FC = () => {
    return (
        <>
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about mr-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={Aryan_pic}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={Aryan_pic}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <Image
                                            src={Aryan_pic}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                        {/* <span className="absolute -right-7 -bottom-7 z-[-1]"> */}
                                        {/* <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      > */}
                                        {/* Circles */}
                                        {/* </svg> */}
                                        {/* </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12 mr-10">
                            <div className="mt-10 lg:mt-0">
                                <span className="block mb-4 text-lg font-semibold text-primary">
                                    Why Choose Us
                                </span>
                                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                    Make your customers happy by giving services.
                                </h2>
                                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less.
                                </p>
                                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                    A domain name is one of the first steps to establishing your
                                    brand. Secure a consistent brand image with a domain name that
                                    matches your business.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
