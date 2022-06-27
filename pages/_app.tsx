import '../styles/globals.css'


import DefaultLayout from "../containers/DefaultLayout"

import {Provider} from 'react-redux';
import { ThemeProvider } from "next-themes";




import {CustomAppProps} from "../logic/general" 
import store from "../store/store";




function MyApp({ Component, pageProps }: CustomAppProps) {



  const Layout = Component.Layout || DefaultLayout;
  
  return (
    <Provider store={store}>
    <ThemeProvider attribute="class" >
    <Layout {...pageProps}>
        <Component  {...pageProps} />
    </Layout>
    </ThemeProvider>
</Provider>

 
  );
  
 
}



export default MyApp;