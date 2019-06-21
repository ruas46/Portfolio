import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/template/Header'
import Footer from './components/template/Footer'
import Content from './components/Content'

export default props =>
    <div className="app">
      <Content />
      <Footer />
      <Header />
    </div>
