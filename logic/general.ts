import type { NextPage } from 'next';
import type { AppProps } from 'next/app'
import type { NextComponentType  } from 'next' 

export type  CustomNextPage =  NextPage & {Layout?: any};
export type  CustomAppProps = AppProps & {
    Component: NextComponentType & {Layout?: any} // add auth type
  };