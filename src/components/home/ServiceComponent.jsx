import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import ButtonSecondaryUi from "../../ui/ButtonSecondaryUi";
import first from "/img/first.png";
import second from "/img/second.png";
import thirdservice from "/img/thirdservice.png";
import fourthservice from "/img/fourthservice.png";
import fifth from "/img/fifth.png";
import sixthservice from "/img/sixthservice.png";
const ServiceComponent = () => {
  return (
    <>
      <div className=" bg-bgprimary p-5 md:mt-[7rem]">
        <div className="container mx-auto flex md:justify-center flex-wrap gap-12 md:gap-28 mt-12 mb-12 ">
          <img alt="deal" src={first} className="md:h-[18rem]  " />
          <div className="text-start text-wrap ">
            <p className="text-2xl md:text-4xl text-center md:text-start font-semibold font-inria">
              Join Our Fundraising
            </p>
            <p className="text-2xl md:text-4xl font-semibold text-center md:text-start font-inria">
              Campaign Today
            </p>
            <p className="text-wrap font-inter text-justify text-md w-full md:w-[30rem] p-5 md:pt-3 md:p-0 text-gray-600 mt-2">
              Join Epiidosis Investments and embark on a transformative journey
              to bring your projects to life. Our comprehensive funding process
              streamlines every step, ensuring transparency, efficiency, and
              support at every turn. Take the first step towards realizing your
              vision by clicking Get Started below.
            </p>
            <div className="flex gap-2 mt-2 pl-5 pr-5 md:pl-0 md:pr-0 md:pt-2">
              <ButtonPrimaryUi>Dashbaord</ButtonPrimaryUi>
              <ButtonSecondaryUi>
                <span className="flex items-center gap-2">
                  See More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </ButtonSecondaryUi>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex md:justify-center flex-wrap md:gap-28 mt-12 mb-12">
        <div className="text-start text-wrap m-4">
          <p className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start">
            Exploring Asset {" "}
          </p>
          <p className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start">
          Monetization  Opportunities
          </p>
          <p className="text-wrap text-md text-justify w-full md:w-[30rem] text-gray-600 mt-2 md:mt-3 font-inter p-5 md:p-0">
            Asset monetization refers to the process of converting tangible or
            intangible assets into cash or income-generating opportunities. In
            the context of Epiidosis Investments LLC, asset monetization is
            facilitated through a structured engagement process that aims to
            unlock the value of assets owned by companies across various
            sectors. This process involves thorough due diligence, formal
            offers, and strategic partnerships to maximize returns for asset
            owners.
          </p>
          <div className="flex gap-2 mt-2 pl-5 pr-5 md:pr-0 md:pl-0">
            <ButtonPrimaryUi>Dashbaord</ButtonPrimaryUi>
            <ButtonSecondaryUi>
              <span className="flex items-center gap-2">
                See More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </ButtonSecondaryUi>
          </div>
        </div>
        <img alt="deal" src={second} className="h-[18rem] p-5" />
      </div>
      <div className=" bg-bgprimary p-5 ">
        <div className="container mx-auto md:justify-center flex flex-wrap md:gap-28 mt-12 mb-12">
          <img alt="deal" src={thirdservice} className="h-[18rem] " />
          <div className="text-start text-wrap ">
            <p className="text-3xl md:text-4xl font-semibold font-inria text-center mt-5 md:text-start md:p-0">
              Loans Secured by{" "}
            </p>
            <p className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start md:p-0">
              Listed Stocks
            </p>
            <p className="text-wrap text-justify text-md w-full md:w-[30rem] pl-5 pr-5 md:pl-0 md:pr-0 text-gray-600 mt-3 md:mt-2 font-inter">
              Unlocking liquidity with your listed stocks provides a unique
              opportunity for individuals to leverage their existing assets to
              access immediate funds without selling their holdings. Epiidosis
              Investments LLC offers a streamlined process for obtaining loans
              against listed stocks, ensuring quick access to capital when
              needed most.
            </p>
            <div className="flex gap-2 md:mt-2 pl-5 pr-5 mt-5 md:pl-0 md:pr-0">
              <ButtonPrimaryUi>Dashbaord</ButtonPrimaryUi>
              <ButtonSecondaryUi>
                <span className="flex items-center gap-2">
                  See More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </ButtonSecondaryUi>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:justify-center flex flex-wrap md:gap-28 mt-12 mb-12">
        <div className="text-start text-wrap m-4">
          <p className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start">
            Investor Relations{" "}
          </p>
          <p className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start">
            {" "}
            Strategies for Success
          </p>
          <p className="text-wrap text-justify text-md w-full md:w-[30rem] text-gray-600 mt-2 font-inter pl-5 pr-5 md:pl-0 md:pr-0">
            Epiidosis Investments LLC is a Dubai-based investment company
            dedicated to providing shareholders and third-party investors access
            to high-potential opportunities across diversified asset classes.
            Our mission is to identify and capitalize on sectors with robust
            demand fundamentals, prioritized by governments in the Middle East
            and East Africa region. We are committed to delivering value through
            strategic investments while upholding integrity, transparency, and
            innovation in all our endeavors.
          </p>
          <div className="flex gap-2 mt-5 md:mt-2 pl-5 pr-5 md:pl-0 md:pr-0 ">
            <ButtonPrimaryUi>Dashbaord</ButtonPrimaryUi>
            <ButtonSecondaryUi>
              <span className="flex items-center gap-2">
                See More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </ButtonSecondaryUi>
          </div>
        </div>
        <img alt="deal" src={fourthservice} className="h-[18rem] p-5" />
      </div>
      <div className=" bg-bgprimary p-5 ">
        <div className="container mx-auto  md:justify-center flex flex-wrap md:gap-28 mt-12 mb-12">
          <img alt="deal" src={fifth} className="h-[18rem] " />
          <div className="text-start text-wrap mt-5 md:mt-0">
            <p className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start ">
              Your Gateway to{" "}
            </p>
            <p className=" text-3xl md:text-4xl font-semibold font-inria text-center  md:text-start ">
              Expertise and Insight
            </p>
            <p className="text-wrap text-justify text-md w-full md:w-[30rem] text-gray-600 mt-5 md:mt-2 pl-5 pr-5 md:pl-0 md:pr-0 font-inter">
              Lorem ipsum dolor sit amet consectetur. Gravida nullam faucibus eu
              mauris cras quis. In posuere tellus eget blandit in. Velit
              placerat rhoncus phasellus dictum iaculis pulvinar ipsum sed.
              Aliquet congue nascetur faucibus vestibulum facilisis. Id in
              maecenas proin ut eget ornare. Magnis cras erat pellentesque
              egestas ut posuere laoreet.
            </p>
            <div className="flex gap-2 mt-5 md:mt-2 pl-5 pr-5 md:pl-0 md:pr-0">
              <ButtonPrimaryUi>Dashbaord</ButtonPrimaryUi>
              <ButtonSecondaryUi>
                <span className="flex items-center gap-2">
                  See More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </ButtonSecondaryUi>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex md:justify-center flex-wrap md:gap-28 mt-12 mb-12">
        <div className="text-start text-wrap m-4">
          <p className=" text-3xl md:text-4xl font-semibold font-inria text-center md:text-start ml-5 mr-5 md:ml-0 md:mr-0">
            Our Dedicated{" "}
          </p>
          <p className=" text-3xl md:text-4xl font-semibold font-inria text-center md:text-start">
            {" "}
            Support Team{" "}
          </p>

          <p className="text-wrap text-justify text-md w-full md:w-[30rem] text-gray-600 mt-5 md:mt-2 font-inter pl-5 pr-5 md:pl-0 md:pr-0">
            Lorem ipsum dolor sit amet consectetur. Gravida nullam faucibus eu
            mauris cras quis. In posuere tellus eget blandit in. Velit placerat
            rhoncus phasellus dictum iaculis pulvinar ipsum sed. Aliquet congue
            nascetur faucibus vestibulum facilisis. Id in maecenas proin ut eget
            ornare. Magnis cras erat pellentesque egestas ut posuere laoreet.
          </p>
          <div className="flex gap-2 mt-5 md:mt-2 pl-5 pr-5 md:pl-0 md:pr-0 ">
            <ButtonPrimaryUi>Dashbaord</ButtonPrimaryUi>
            <ButtonSecondaryUi>
              <span className="flex items-center gap-2">
                See More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </ButtonSecondaryUi>
          </div>
        </div>
        <img alt="deal" src={sixthservice} className="h-[18rem] p-5" />
      </div>
    </>
  );
};

export default ServiceComponent;
