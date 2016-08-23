import { PropTypes } from 'react';

export const defaultProps = {
  strokeWidth: 1,
  strokeColor: '#2db7f5',
  trailWidth: 1,
  trailColor: '#D9D9D9',
  strokeLinecap: 'round',
};

export const propTypes = {
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeColor: PropTypes.string,
  trailWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  trailColor: PropTypes.string,
  strokeLinecap: PropTypes.oneOf(['round', 'square']),
};
