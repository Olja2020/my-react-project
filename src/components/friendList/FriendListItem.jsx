import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <img src={avatar} alt={name} width="48" />
    <p>{name}</p>
    <p>{isOnline}</p>
  </div>
);
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string,
  avatar: PropTypes.string,
};

export default FriendListItem;