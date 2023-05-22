import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

const WelcomeScreen = lazy(() => import('./screens/Home'));

const ProtectedLayout = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <HashRouter>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="*" element={<ProtectedLayout />} />
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default App;
