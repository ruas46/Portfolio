import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/template/Header'
import Content from './components/Content'
import Footer from './components/template/Footer'

export default props =>
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
