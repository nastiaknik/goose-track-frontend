import styled from "styled-components";
export const Container = styled.section`
  width: 1087px;
  /* height: 752px; */
  /* margin-left: auto;
  margin-right: auto; */
  margin-bottom: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  padding-left:113px;
  padding-right: 114px;
  padding-top: 142px;
  padding-bottom:104px;
`;
export const ChartHead = styled.div`
display:flex;
justify-content: space-between;
margin-bottom:40px;
`;
export const LegendList = styled.ul`
  display: flex;
  gap: 30px;
  /* list-style: disc; */
  color: ${({ theme }) => theme.variableColors.text};
  li{
    display:flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Chart = styled.div`
  width: 860px;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  color: #fff;

  padding: 10px;
  border-radius: 29px;
  border: 0.8px solid ${({ theme }) => theme.variableColors.borderColor};
  /* margin-left: 40px; */

  @media screen and (min-width: 768px) {
    gap: 40px;
    padding: 20px;
  }
`;
