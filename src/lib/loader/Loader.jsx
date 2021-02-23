import './Loader.scss';

export default function Loader({ show }) {
  return show ? <div className="loader"></div> : null;
}
