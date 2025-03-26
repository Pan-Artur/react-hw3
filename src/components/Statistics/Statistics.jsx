import { List } from "./List/List";

import PropTypes from "prop-types";

import style from "./Statistics.module.scss";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <List stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
