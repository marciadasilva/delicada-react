import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './contact/MainContent';
import Social from './Social';

class ContactPage extends React.Component {
  componentDidMount() {
    document.title = 'Delicada Mulher - Contato';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  componentWillUnmount() {
    document.title = 'Delicada Mulher';
  }
  render() {
    return (
      <Fragment>
        <Header />
        <MainContent />
        <Social />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactPage;
