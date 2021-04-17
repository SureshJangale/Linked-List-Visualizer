import styled from 'styled-components';

export const PointerDiv = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
    z-index: -1;
`;

export const PointerImg = styled.img`
    width: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
