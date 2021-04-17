import React from 'react';
import PropTypes from 'prop-types';
import { NodeDiv, Num, P } from './Styles';

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
};

const defaultProps = {
  className: undefined,
  value: 1,
};

const Node = ({ className, value, ...otherProps }) => {
  const sharedProps = {
    className,
    ...otherProps,
  };

  return (
      <NodeDiv {...sharedProps}>
        <Num>
          <P>{value}</P>
        </Num>
      </NodeDiv>
  );
};

Node.propTypes = propTypes;
Node.defaultProps = defaultProps;

export default Node;
