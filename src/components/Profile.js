import React from "react";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div class="description">
      <img src={avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.folowers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
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
  stats: PropTypes.objectOf(
    PropTypes.shape({
      folowers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Profile;
