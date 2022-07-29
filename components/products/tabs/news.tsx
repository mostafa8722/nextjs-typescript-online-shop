import { styled } from "@mui/system";
import React from "react";
import CustomImageViewer from "../..//../app/customImageViewer";

const NewsEl = styled("div")(()=>`
  display:flex;
  align-items:center;
  margin-top:0.5rem;
  border-bottom:0.05rem solid #eeeeee;
  padding:0.5rem 1rem;
`)

const ImageEl = styled(CustomImageViewer)(()=>`
  height:90px;
  width:90px;
  border-radius:50%;
  object-fit:cover;
`)

const NewsTextEl = styled("div")(()=>`
  display:flex;
  flex-direction:column;
  margin-right:0.5rem;
`)

const TitleEl = styled("h2")(()=>`
  font-size:0.9rem;
  font-weight:bold;
  color:#676767;

`)
const BodyEl = styled("p")(()=>`
  font-size:0.75rem;

  color:#898989;
  margin-top:0.4rem;
`)
interface INews{
id:number,
title:string,
body :string,
img:string,
}
const News = (props:INews)=>{
    const {id,title,body,img} = props 
    return (
        <>
          <NewsEl>
             <ImageEl src={img} />
             <NewsTextEl>
               <TitleEl>{title}</TitleEl>
               <BodyEl>{body}</BodyEl>
             </NewsTextEl>
          </NewsEl>  
        </>
    )
}
export default News;