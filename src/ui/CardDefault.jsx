/* eslint-disable react/prop-types */
import {
  CardBody,
  CardFooter,
  Typography,

} from "@material-tailwind/react";

export function CardDefault({ data }) {
  console.log(data);
  const rendercardData = data.map((items, index) => {
    console.log(items.title);
    console.log(index);
    return (
      <div key={index} className="mt-5 flex  ">
        <div className="mt-6 w-auto ">
          <div className="relative h-56 p-5">
            <img src={items?.img} alt="card-image" />
          </div>
          <CardBody>
            <p className="mb-2 text-2xl font-medium font-inria">{items?.title}</p>
            <Typography className="font-inter">{items?.content}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <button className="bg-blue-gray-800 flex items-center font-inria gap-2 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Read More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </CardFooter>
        </div>
      </div>
    );
  });
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {rendercardData}
      </div>
    </div>
  );
}
