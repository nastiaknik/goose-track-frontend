import styled from "styled-components";

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Username = styled.div`
  margin-right: 14px;
  color: #343434;
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #3e85f3;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`;

export const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
