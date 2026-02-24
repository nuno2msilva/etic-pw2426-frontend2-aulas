"use client";

import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';

interface StoreProviderProps {
  children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}