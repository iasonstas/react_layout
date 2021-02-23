/* eslint-disable jsx-a11y/iframe-has-title */
import { Link } from 'react-router-dom';
// Not Found Page , 404.js in Next is for mispelling and redirection for 404 error
export default function Custom404() {
  return (
    <main className="error-page">
      <h1 className="mt-4">404 - That page does not seem to exist...</h1>
      <iframe
        src="https://giphy.com/embed/l2JehQ2GitHGdVG9y"
        width="480"
        height="362"
        frameBorder="0"
        allowFullScreen
        className="mt-5"
      ></iframe>
      <div className="go-home">
        <Link to="/">
          <button className="btn-input mt-4">Go home</button>
        </Link>
      </div>
    </main>
  );
}
