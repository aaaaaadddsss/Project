// App.js
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { TemplateProvider } from './context/TemplateContext';

export default function App() {
  return (
    <TemplateProvider>
      <AppNavigator />
    </TemplateProvider>
  );
}
