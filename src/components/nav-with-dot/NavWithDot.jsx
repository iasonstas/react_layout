import { NavLink } from 'react-router-dom';
import './NavWithDot.scss';

export function NavWithDot({ options, value }) {
  const { section, setSection } = value;
  const { one, two, styles } = options;
  return (
    <ul className="navbar-navo" style={{ width: styles.width }}>
      <li className="nav-itemo" style={{ color: `${styles.color}` }}>
        <NavLink
          activeClassName={styles.color}
          exact
          to={one.url}
          onClick={() => {
            setSection(true);
          }}
        >
          {one.desc}
        </NavLink>
        {section ? <span className="dot"></span> : null}
      </li>
      <li className="nav-itemo">
        <NavLink
          activeClassName={styles.color}
          to={two.url}
          onClick={() => {
            setSection(false);
          }}
        >
          {two.desc}
        </NavLink>
        {section ? null : <span className="dot"></span>}
      </li>
    </ul>
  );
}
