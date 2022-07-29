

import { styled } from "@mui/system";
import React from "react";
import {HiOutlineUser} from "react-icons/hi"
import {FiHeart} from "react-icons/fi"


interface IComment {
    id:number,
    name:String,
    date:String,
    body:String,
    reply:boolean,
    replyContext :string,
    likes:number,
}
const CommentEl = styled("div")(()=>`

display:flex;
flex-direction:column;
border-bottom:0.09rem solid #eeeeee;
padding:0.5rem 1rem;
`)
const CommentHeaderEl = styled("div")(()=>`

display:flex;
align-items:center;

`)
const IconEl = styled(HiOutlineUser)(()=>`
font-size:1.3rem;
color:#676767;
margin:0rem 0.5rem;
`)
const TitleEl = styled("span")(()=>`
font-size:0.9rem;
color:#565656;
`)

const DateEl = styled("span")(()=>`
font-size:0.8rem;
color:#999999;
margin-top:0.5rem;

`)
const BodyEl = styled("span")(()=>`
font-size:0.8rem;
color:#565959;
margin-top:0.5rem;
`)
const ReplySectionEl = styled("div")(()=>`
display:flex;
color:#565959;
margin-top:0.5rem;
`)
const ReplyTitleEl = styled("span")(()=>`
font-size:0.8rem;
color:#0a0afe;
margin-left:0.5rem;
`)
const ReplyEl = styled("span")(()=>`
font-size:0.8rem;
color:#787878;
`)

const LikeSectionEl = styled("div")(()=>`
display:flex;
flex-direction:row-reverse;
margin-top:0.5rem;
`)
const LikeContainerEl = styled("div")(()=>`
display:flex;
flex-direction:row;
border:0.1rem solid #eeeeee;
border-radius :0.35rem;
align-items:center;
padding:0.5rem 1rem;
`)

const LikeIconEl = styled(FiHeart)(()=>`
font-size:1rem;
color:#565959;
margin-left:0.3rem;

`)
const LikeCountEl = styled("span")(()=>`
font-size:0.9rem;
color:#565959;
`)
const Comment = (props:IComment)=>{
    const {id,name,date,body,reply,replyContext,likes} = props;
 return (
 <>
   <CommentEl>
     <CommentHeaderEl>
        <IconEl/>
        <TitleEl>{name}</TitleEl>
     </CommentHeaderEl>
     <DateEl>{date}</DateEl>
     <BodyEl>{body}</BodyEl>
     {
        reply?
        <ReplySectionEl>
        <ReplyTitleEl>پاسخ:</ReplyTitleEl>
        <ReplyEl>{replyContext}</ReplyEl>
        </ReplySectionEl>
         :<></>
     }
     <LikeSectionEl>
        <LikeContainerEl>
            <LikeIconEl/>
            <LikeCountEl>{likes}</LikeCountEl>
        </LikeContainerEl>
     </LikeSectionEl>

   </CommentEl>
 </>
 )   
}
export default Comment;