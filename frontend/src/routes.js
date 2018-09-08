import React from 'react';
import HomePage from './components/HomePage';
import GiftsPage from './components/GiftsPage';

export default [
  {
    exact: true,
    path: "/",
    render: (props) => <HomePage />
  },
  {
    exact: true,
    path: "/toys",
    render: (props) => <GiftsPage
      page={'toys'}
    />
  },
  {
    exact: true,
    path: "/bags",
    render: (props) => <GiftsPage
      page={'bags'}
    />
  }
]
