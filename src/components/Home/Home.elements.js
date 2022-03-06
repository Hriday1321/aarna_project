import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  margin-top: 35%;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const Span = styled.span`
  color: rgb(245, 186, 78);
  font-weight: 400;
  font-size: 1em;
`;

export const P = styled.p`
  line-height: 1.41em;
  font-size: 22px;
  color: white;
  font: normal normal normal 22px/1.41em questrial,sans-serif;
  font-weight: 600;
  padding: 1% 0 2.5% 0;
`;