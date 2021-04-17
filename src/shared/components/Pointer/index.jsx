import React from 'react';
import PropTypes from 'prop-types';
import { PointerDiv, PointerImg } from './Styles';
import pointer from '../../../images/pointer.png'

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: undefined,
};

const Pointer = ({ className, ...otherProps }) => {
    const sharedProps = {
        className,
        ...otherProps,
    };

    return (
        <PointerDiv {...sharedProps}>
            <PointerImg src={pointer}/>
        </PointerDiv>
    );
};

Node.propTypes = propTypes;
Node.defaultProps = defaultProps;

export default Pointer;
