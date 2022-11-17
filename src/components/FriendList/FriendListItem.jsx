import css from '../FriendList/FriendListItem.module.css';

export function FriendListItem({ variant, avatar, name, isOnline }) {
  variant = isOnline ? 'green' : 'red';

  return (
    <li className={css.item}>
      <span className={css[variant]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
