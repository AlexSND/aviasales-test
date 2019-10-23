import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { getTickets } from './redux/dataActions';

// components
import PageWrapper from './components/PageWrapper';
import Header from './components/Header';

const App = ({ getTickets }) => {
  useEffect(() => { getTickets(); }, []);

  return (
    <div className="App">
      <Header />
      <PageWrapper />
    </div>
  );
};

App.propTypes = {
  getTickets: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  getTickets,
};

export default connect(null, mapActionsToProps)(App);
