import { Link } from 'react-router-dom'
import errorgif from '../assets/404.gif'

const ErrorPage = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <p> Uh oh, something went wrong!</p>
      <img src={errorgif} alt="error gif" />
      <Link to='/'>Home </Link>
      <Link to='/Projects'>Projects</Link>
      <Link to='/AboutMe'>About Me!</Link>
    </div>
  );
};

export default ErrorPage;