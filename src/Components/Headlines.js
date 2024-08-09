import React from "react";

const Headlines = ({headlines}) => {
    return(
        <section className="flex flex-col  md:flex-row gap-12  mb-40 md:mt-20">
            {headlines.map((headline, index) => (
                 <div className="flex flex-row gap-6  ">
                    <img className=" md:w-36 md:h-36 h-52" src={headline.image} alt="headline-icon"  />
                    <div>
                        <h6 className=" text-garkGrayishBlue text-4xl md:text-3xl font-bold">0{headline.number}</h6>
                        <h4 className=" text-2xl  md:text-xl  text-veryDarkBlue font-bold hover:text-softRed cursor-pointer"> {headline.title}</h4>
                        <p className=" text-xl md:text-lg text-garkGrayishBlue">{headline.info}</p>
                    </div>

                </div>

            ))}
           

        </section>
    )
};
export default Headlines