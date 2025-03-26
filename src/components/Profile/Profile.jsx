import { Stats } from "./Stats/Stats";

import PropTypes from "prop-types";

import style from "./Profile.module.scss";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={style.avatar}
        />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <Stats stats={stats}/>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}
