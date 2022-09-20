import * as React from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ToggleModeProvider } from '../utils/toggleMode';
import createEmotionCache from '../utils/createEmotionCache';
import Layout from '../components/Layout';
import '../styles/globals.css'


const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = 
      clientSideEmotionCache, pageProps } = props;

  return (
      <CacheProvider value={emotionCache}>
          <Head>
              <meta name="viewport" 
             content="initial-scale=1, width=device-width" />
          </Head>
          <ToggleModeProvider>
              <Layout>
              <Component {...pageProps} />
              </Layout>
          </ToggleModeProvider>
      </CacheProvider>         
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
