import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import Header from 'template/layouts/components/Header/Header';
import Nav from 'template/layouts/components/Nav/Nav';

function Main({ head, children }) {
  const classes = useStyles();
  return (
    <>
      <Header head={head} />
      <main className={classes.main}>
        <Nav />
        {children}
      </main>
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
