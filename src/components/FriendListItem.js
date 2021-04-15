import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li class="item">
    <span class={isOnline ? "status-online" : "status-offline"}></span>
    <img class="avatar" src={avatar} alt="user's avatar" width="48" />
    <p class="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendListItem;
