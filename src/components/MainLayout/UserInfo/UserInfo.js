import React from "react";
import { UserInfoContainer, Username, Avatar, AvatarImage } from "./UserInfo.styled";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";

const UserInfo = ({
  username = "User",
  userPhotoUrl = null,
  // "https://valerias.neocities.org/img/gus.svg",
}) => {
  return (
    <UserInfoContainer>
      <ThemeToggler />

      <Username>{username}</Username>

      {userPhotoUrl ? (
        <AvatarImage src={userPhotoUrl} alt="User Avatar" />
      ) : (
        <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
      )}
    </UserInfoContainer>
  );
};

export default UserInfo;
