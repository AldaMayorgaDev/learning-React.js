import { PropTypes } from 'prop-types';
export const Sppiner = ({isLoading}) => {
  if(isLoading){
      return (
    <>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </>
  );
  }
}

Sppiner.propTypes={
  isLoading: PropTypes.bool.isRequired
}