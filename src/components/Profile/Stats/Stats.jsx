import PropTypes from "prop-types";

import style from "../Profile.module.scss";

export const Stats = ({ stats }) => {
  const statsArray = [
    { label: "Followers", value: stats.followers },
    { label: "Views", value: stats.views },
    { label: "Likes", value: stats.likes }
  ];

  return (
    <ul className={style.stats}>
      {statsArray.map(({ label, value }) => (
        <li key={label}>
          <span className={style.label}>{label}</span>
          <span className={style.quantity}>{value}</span>
        </li>
      ))}
    </ul>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}
