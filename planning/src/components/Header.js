import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ title }) => {
  return (
    <Header className="header">
      <h1>{title}</h1>
      <button className='btn'>
        Add Task
      </button>
    </Header>
  );
}

Header.defaultProps = {
    title: 'Task Tracker',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Header;
