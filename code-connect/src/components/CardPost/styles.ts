import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  height: 946px;
  flex-direction: column;
  width: min-content;
  background-color: #171d1f;
  border-radius: 5px;
  height: auto;
`;

export const CardImage = styled.div`
  padding: 16px;
  height: min-content;
  background-color: #bcbcbc;
  border-radius: 5px;
`;

export const CardTitle = styled.div`
  flex-direction: column;
  color: #bcbcbc;
  font-weight: 700;
  padding: 10px 16px 5px 10px;
`;

export const CardText = styled.div`
  color: #bcbcbc;
  font-size: small;
  padding: 10px 16px 5px 10px;
  text-align: justify;
`;

export const CardDetailsLink = styled.button`
  color: #81fe88;
  text-align: left;
  text-decoration: underline;
  background-color: #171d1f;
  border: none;
  padding-left: 10px;
`;

export const AvatarWrapper = styled.div`
  align-self: flex-end;
  padding: 0px 16px 5px 10px;
  margin-top: 50px;
  display: flex;
  font-weight: 600;
  color: #bcbcbc;
  text-align: center;
`;
