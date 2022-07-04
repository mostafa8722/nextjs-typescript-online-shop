import { styled } from "@mui/system";


interface InLink {
right?:string,
top?:string,
font?:number,
hover?:string,
}


export const LinkEl = styled('a')<InLink>((data:InLink)=>`
margin:${data.top?data.top:'0.1'}rem ${data.right?data.right:'0.1'}rem 0rem 0rem;
color:#454545;
font-size:${data.font?data.font:0.9}rem;
cursor:pointer;
&:hover {
   color:${data.hover?data.hover:"#0a0afe"};
}
 `);


