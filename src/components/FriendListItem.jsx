const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? 'online' : 'offline';

  return (
    <div className="friend-item">
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p>{name}</p>
      <p className={statusClass}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;