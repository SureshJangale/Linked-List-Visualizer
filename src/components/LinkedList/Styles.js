import styled from 'styled-components';

export const List = styled.section`
  width: 95%;
  padding-left: 5%;
  padding-top: 40px;
  padding-bottom: 35px;
  margin-bottom: 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const ListNode = styled.div`
  // flex: 0 0 auto;
  // display: inline-block;
  // vertical-align: top;
  `;

export const Operations = styled.section`
  position: fixed;
  bottom: 5%;
  width: 100%;
`;

export const OpWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(120px, auto);
  text-align: center;
`;
