import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import { ProjectDetailPage } from '../pages/ProjectDetailPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="project/:id" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
