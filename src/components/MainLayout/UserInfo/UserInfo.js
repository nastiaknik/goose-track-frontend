import React, { useState } from "react";

const UserInfo = () => {
  const [username, setUsername] = useState("John Doe");
  const [userPhotoUrl, setUserPhotoUrl] = useState("");

  const userPhoto = userPhotoUrl ? (
    <img src={userPhotoUrl} alt="User Avatar" />
  ) : (
    <div className="avatar">{username.charAt(0).toUpperCase()}</div>
  );

  return (
    <div className="user-info">
      {userPhoto}
      <span>{username}</span>
    </div>
  );
};

export default UserInfo;
