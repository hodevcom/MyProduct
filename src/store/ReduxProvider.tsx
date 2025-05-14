'use client';

import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './index';

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
