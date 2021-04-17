import React from "react";
import PropTypes from "prop-types";
import "./FriendList.css"

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="friend-list__item">
    <span className={isOnline ? "friend-list__status friend-list__status-online" : "friend-list__status friend-list__status-offline"}></span>
    <img className="friend-list__avatar" src={avatar} alt="user's avatar" width="60" />
    <p className="friend-list__name">{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendListItem;
