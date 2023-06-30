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

const UserInfo = ({ toggleMenu }) => {
  const user = useSelector(selectUser);

  const username = user?.username ?? "";
  const imgURL = user?.imgURL ?? null;
  console.log(user);
  return (
    <UserInfoContainer>
      <ThemeToggler />
      <StyleNavLink to="/account" onClick={toggleMenu}>
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
