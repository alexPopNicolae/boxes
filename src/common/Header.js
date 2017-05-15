import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return(
        <nav className="header">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
             {" | "}
             <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
              {" | "}
            <Link to="/users" activeClassName="active">Users</Link>
              {" | "}
            <Link to="/articles" activeClassName="active">Articles</Link>
              {" | "}
            <Link to="/boxes" activeClassName="active">Boxes</Link>
               {" | "}
            <Link to="/experiments" activeClassName="active">Experiments</Link>
        </nav>
    );
};
export default Header;