import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './reset.css';
import './globals.css';
import Cabecalho from "../components/cabecalho/Cabecalho"

import { ThemeProvider } from '@mui/material/styles';
import tema from '../themes/theme';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Django + React',
  description: 'Created by Reis567',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-Br">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={tema}>
            <Cabecalho/>
              {children}
        </ThemeProvider>
        </body>
    </html>
  );
};

export default RootLayout;
