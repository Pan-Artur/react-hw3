import PropTypes from "prop-types";

import style from "./FriendList.module.scss";

export const FriendList = ({ friends }) => {
    return (
        <ul className={style.friendList}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <li className={style.item} key={id}>
                <span className={isOnline ? style.statusActive : style.status}></span>
                <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={style.name}>{name}</p>
              </li>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};