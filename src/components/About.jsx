import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      {/* Other About content */}
      <Link to="profile">Go to Profile</Link>
      {/* This is where nested routes will render */}
      <Outlet />
    </div>
  );
};

export default About;

