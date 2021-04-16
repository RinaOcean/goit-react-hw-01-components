import React from "react";
import PropTypes from "prop-types";
import "./Profile.css"

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="profile__description">
      <img src={avatar} alt="Аватар пользователя" className="profile__avatar" />
      <p className="profile__name">{name}</p>
      <p className="profile__tag">@{tag}</p>
      <p className="profile__location">{location}</p>
    </div>

    <ul className="profile__stats">
      <li>
        <span className="profile__stats__label">Followers</span>
        <span className="profile__stats__quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="profile__stats__label">Views</span>
        <span className="profile__stats__quantity">{stats.views}</span>
      </li>
      <li>
        <span className="profile__stats__label">Likes</span>
        <span className="profile__stats__quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
