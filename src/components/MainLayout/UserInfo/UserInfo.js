import React from "react";
import {
  UserInfoContainer,
  Username,
  Avatar,
  AvatarImage,
  StyleNavLink,
} from "./UserInfo.styled";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectrors";

const UserInfo = () => {
  const user = useSelector(selectUser);

  const username = user?.username ?? "";
  const imgURL = user?.imgURL ?? null;

  return (
    <UserInfoContainer>
      <ThemeToggler />
      <StyleNavLink to="/account">
        <Username>{username}</Username>
        {imgURL ? (
          <AvatarImage src={imgURL} alt="User Avatar" />
        ) : (
          <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
        )}
      </StyleNavLink>
    </UserInfoContainer>
  );
};

export default UserInfo;
