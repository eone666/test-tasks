import React from "react";
import { Link } from "react-router-dom";

export default function UserBlock() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="user-block">
      <div className="user-block__avatar user-block__item">
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={user.login} />
        ) : (
          <img
            src={`https://api.adorable.io/avatars/100/${user.login}.png`}
            alt={user.login}
          />
        )}
      </div>
      <div className="user-block__login user-block__item">{user.login}</div>
      <div className="user-block__logout user-block__item">
        <Link className="user-block__logout-link" to="/logout">
          Logout
        </Link>
      </div>
    </div>
  );
}
