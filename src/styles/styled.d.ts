import 'styled-components';

declare module 'styled-components' {
 export interface DefaultTheme {
  title: string,
  colors: {
   primary: string,
   primaryLight: string,
   secundary: string,
   background: string,
   text: string,
   textGray: string
  },
 }
}