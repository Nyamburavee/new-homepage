import React from "react";

const Main = ( {news,} ) => {
    return(
        <main className=" flex flex-col md:flex-row md:gap-10">
        
            <article className=" flex flex-col">
                <div className="bg-heroMb h-96 md:bg-heroDt md:h-96 bg-cover bg-center" ></div>
                    <div className=" flex flex-col md:flex-row">
                        <div>
                            <h1 className=" md:w-2/3 mt-6 text-left text-6xl font-bold"> The Bright Future of Web 3.0?</h1>

                        </div>

                        <div className=" md:w-96">
                            <p className=" mt-4 text-garkGrayishBlue font-bold ">We dive into the next evolution of the web that claims to put the power of the
                                platforms back into the hands of the people. But is it really fulfilling it's promise?
                            </p>
                                <button className=" bg-softRed p-4 text-offWhite w-44 mt-8 mb-20 md:mb-0">READ MORE</button>
                        </div>

                </div>

                    
                        
            </article>

            <article className=" md:w-[450px] bg-veryDarkBlue p-4
                    mb-20 md:mb-0">
                <h1 className=" text-4xl text-softOrange mt-4 mb-8">New</h1>
                        {news.map((item, index) => (
                <div>
                    <h3 className=" text-2xl font-bold text-offWhite mb-4">{item.headline}</h3>
                    <h4 className=" mb-6 pb-6 text-xl text-garkGrayishBlue border-b border-b-garkGrayishBlue">{item.info}</h4>
                </div>
                        ))}
            </article>

        </main>
    )
};
export default Main