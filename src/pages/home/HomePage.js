import React, { Component, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Header from '../../components/header/Header';
import { HomePageWrapper } from './HopePageStyles';

export default class HomePage extends Component {
  render() {
    return (
      <>
        <HomePageWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <Outlet />
            </div>
          </Suspense>
        </HomePageWrapper>
      </>
    );
  }
}
