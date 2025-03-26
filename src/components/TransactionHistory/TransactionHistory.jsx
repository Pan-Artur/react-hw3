import PropTypes from "prop-types";
import { Line } from "./Line/Line";

import style from "./TransactionHistory.module.scss";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <Line transactions={items}/>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}
