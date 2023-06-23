import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #111111;
  box-shadow: 0px 9.399999618530273px 57.6875px 0px #00000009;

  box-shadow: 0px 47px 355px 0px #00000012;
`;

export const MotivationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const MotivationImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const MotivationText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #555555;

  span {
    font-style: italic;
    color: #ff9900;
  }
`;

export const ThemeTogglerText = styled.p`
  margin-right: 14px;
  color: #3e85f3;
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
