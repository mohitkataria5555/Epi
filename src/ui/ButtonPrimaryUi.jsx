import PropTypes from 'prop-types';

const ButtonPrimaryUi = ({ children, isHovered }) => {
  return (
    <button
      className={`font-inria font-bold py-2 px-4 border rounded transition-colors ${
        isHovered
          ? 'bg-white text-blue-500 border-white'
          : 'bg-blue-500 text-white border-blue-700 hover:bg-blue-700'
      }`}
    >
      {children}
    </button>
  );
};

ButtonPrimaryUi.propTypes = {
  children: PropTypes.node.isRequired,
  isHovered: PropTypes.bool
};

export default ButtonPrimaryUi;
