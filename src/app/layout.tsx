'use client'
import '@/styles/global.css';

import React, { ReactNode } from 'react';
import { ReduxProvider } from '@/store/ReduxProvider';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>MyProduct - Gerenciador de Produtos</title>
        <meta name="keywords" content="myproduct,test,developer,product,management" />
        <meta name="author" content="Henrique Oliveira" />
        <meta name="description" content="Gerencie seus produtos em um lugar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
