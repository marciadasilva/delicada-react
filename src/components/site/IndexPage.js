import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './home/MainContent';

const IndexPage = () => {
  return (
    <Fragment>
      <Header />
      <MainContent />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
