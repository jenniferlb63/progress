import React from 'react';
import { defaultProps, propTypes } from './props';

export default React.createClass({
  propTypes,
  getDefaultProps() {
    return defaultProps;
  },
  render() {
    const {
      prefixCls, strokeWidth, trailWidth, strokeColor,
      trailColor, strokeLinecap, percent, style, className,
      ...restProps,
    } = this.props;

    const radius = (50 - strokeWidth / 2);
    const pathString = `M 50,50 m 0,-${radius}
     a ${radius},${radius} 0 1 1 0,${2 * radius}
     a ${radius},${radius} 0 1 1 0,-${2 * radius}`;
    const len = Math.PI * 2 * radius;
    const pathStyle = {
      strokeDasharray: `${len}px ${len}px`,
      strokeDashoffset: `${((100 - percent) / 100 * len)}px`,
      transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease',
    };

    return (
      <svg
        className={`${prefixCls}-circle ${className}`}
        viewBox="0 0 100 100"
        style={style}
        {...restProps}
      >
        <path
          className={`${prefixCls}-circle-trail`}
          d={pathString}
          stroke={trailColor}
          strokeWidth={trailWidth || strokeWidth}
          fillOpacity="0"
        />
        <path
          className={`${prefixCls}-circle-path`}
          d={pathString}
          strokeLinecap={strokeLinecap}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fillOpacity="0"
          style={pathStyle}
        />
      </svg>
    );
  },
});
