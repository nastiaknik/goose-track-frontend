import React from "react";
import {
  UserInfoContainer,
  Username,
  Avatar,
  AvatarImage,
} from "./UserInfo.styled";

const UserInfo = ({
  username = "Бандеро Гусак",
  userPhotoUrl = "",
  // "https://valerias.neocities.org/img/gus.svg",
}) => {
  return (
    <UserInfoContainer>
      <Username>{username}</Username>
      <Avatar>
        {userPhotoUrl ? (
          <AvatarImage src={userPhotoUrl} alt="User Avatar" />
        ) : (
          <div className="avatar">{username.charAt(0).toUpperCase()}</div>
        )}
      </Avatar>
    </UserInfoContainer>
  );
};

export default UserInfo;
