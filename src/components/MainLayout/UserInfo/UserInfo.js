import React from "react";
import {
  UserInfoContainer,
  Username,
  Avatar,
  AvatarImage,
} from "./UserInfo.styled";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectrors";
const CLOUDINARY_BASE_URI = "http://res.cloudinary.com/dq02pfta7/";

const UserInfo = () => {
  const user = useSelector(selectUser);

  const username = user?.username ?? "";
  const imgURL = user?.imgURL ?? null;
  console.log(user);
  return (
    <UserInfoContainer>
      <ThemeToggler />

      <Username>{username}</Username>

      {imgURL ? (
        <AvatarImage
          src={`${CLOUDINARY_BASE_URI}${imgURL}`}
          alt="User Avatar"
        />
      ) : (
        <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
      )}
    </UserInfoContainer>
  );
};

export default UserInfo;
