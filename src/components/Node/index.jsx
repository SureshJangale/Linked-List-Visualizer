import React from 'react';
import PropTypes from 'prop-types';
import {color} from '../../shared/utils/styles'
import { Num } from './Styles';

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  size: PropTypes.number,
  color:PropTypes.string
};

const defaultProps = {
  className: undefined,
  value: 1,
  size: 100,
  color:color.primary,
};

const Node = ({ className, value, size, color, ...otherProps }) => {
  const sharedProps = {
    className,
    size,
    ...otherProps,
  };

  return (
    <Num color={color} {...sharedProps}>
      <span>{value}</span>
    </Num>
  );
};

Node.propTypes = propTypes;
Node.defaultProps = defaultProps;

export default Node;
