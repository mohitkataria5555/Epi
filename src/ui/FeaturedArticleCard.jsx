import PropTypes from 'prop-types';
import ButtonPrimaryUi from "./ButtonPrimaryUi";
import { useState } from "react";

const FeaturedArticleCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    backgroundColor: isHovered ? '#339FDE' : 'white',
    color: isHovered ? 'white' : ''
  };

  return (
    <section className="flex justify-center">
      <div
        className="bg-white w-[20rem] h-auto p-5 flex justify-center flex-col mt-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={cardStyles}
      >
        <img alt="img" src={data?.img} />
        <p className="text-xl mt-4 font-inria mb-4 text-center">
          {data?.title}
        </p>
        <p className="mt-2 mb-4 text-center font-inter">{data?.desc}</p>
        <ButtonPrimaryUi isHovered={isHovered}>Read more</ButtonPrimaryUi>
      </div>
    </section>
  );
};

FeaturedArticleCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

export default FeaturedArticleCard;
