

import React from "react";
import { styled } from "@mui/system";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import Comment from "./comment"


interface DeviceProps {

    isMobile?: boolean;
    isTablet?: boolean;
  
  }
const CommentsComponentEl = styled("div")(()=>
`

padding:1rem;
`
)

const CommentTopSectionEl = styled("div")<DeviceProps>(({isMobile,isTablet})=>
`
display:grid; 
grid-template-columns : ${isMobile?"12fr":"6fr 6fr"};
padding:1rem;
`
)

const BoxTopSectionEl = styled("div")<DeviceProps>(({isMobile,isTablet})=>
`
display:flex; 
align-items:center;
flex-direction:column;
margin-top:1rem;
`
)

const BoxTopTitleEl = styled("h4")(()=>
`
font-weight:bold;
color:#565656;
font-size:0.9rem;
margin-bottom:0.5rem;
`
)
const BoxCaptionEl = styled("div")(()=>
`display:flex;
margin-top:0.75rem;
`
)

const BoxCaptionTitleEl = styled("span")(()=>
`display:flex;
font-size:0.75rem;
`
)

const BoxScoreEl = styled("div")(()=>
`display:flex;
margin-right:0.5rem;
`
)

const ScoreEl = styled("span")<{active:boolean}>(({active})=>
`display:flex;
 height:20px;
 width:20px;
 background:${active?'green':"#eeeeee"};
 border-radius:50%;
 margin-left:0.2rem;
`
)


const CommentsSectionEl = styled("div")(()=>
`

padding:1rem;
`
)

const CommentsTitleEl = styled("h4")(()=>
`
font-size:0.95rem;
font-weight:bold;
color:#565656;
`
)
const CommentsComponent = ()=>{
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

    const comments = [
        {id:1,name:"علی",date:"12 آبان 1396 (ساعت 13:51)",body:"الان توقع دارین با این قیمت استقبال کنن از خرید این ایفون در سایت تون !!!",likes:10,reply:false,replyContext:""},
        {id:1,name:"علی",date:"12 آبان 1396 (ساعت 13:51)",body:"الان توقع دارین با این قیمت استقبال کنن از خرید این ایفون در سایت تون !!!",likes:0,reply:false,replyContext:""},
        {id:1,name:"علی",date:"12 آبان 1396 (ساعت 13:51)",body:"الان توقع دارین با این قیمت استقبال کنن از خرید این ایفون در سایت تون !!!",likes:20,reply:true,replyContext:"بله همینورهی هه"},
        {id:1,name:"علی",date:"12 آبان 1396 (ساعت 13:51)",body:"الان توقع دارین با این قیمت استقبال کنن از خرید این ایفون در سایت تون !!!",likes:40,reply:false,replyContext:""},
    ]

    return (
        <>
        <CommentsComponentEl>
            <CommentTopSectionEl isMobile={isMobile}>
                <BoxTopSectionEl>
                    <BoxTopTitleEl>امتیاز کاربران به این محصول</BoxTopTitleEl>
                    <BoxCaptionEl>
                        <BoxCaptionTitleEl>ارزش خرید به نسبت قیمت:</BoxCaptionTitleEl>
                        <BoxScoreEl>
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={false}/>  
                          
                        </BoxScoreEl>
                    </BoxCaptionEl>

                    <BoxCaptionEl>
                        <BoxCaptionTitleEl>ارزش خرید به نسبت قیمت:</BoxCaptionTitleEl>
                        <BoxScoreEl>
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={false}/>  
                          
                        </BoxScoreEl>
                    </BoxCaptionEl>

                    <BoxCaptionEl>
                        <BoxCaptionTitleEl>ارزش خرید به نسبت قیمت:</BoxCaptionTitleEl>
                        <BoxScoreEl>
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={false}/>  
                          
                        </BoxScoreEl>
                    </BoxCaptionEl>
                </BoxTopSectionEl>

                <BoxTopSectionEl>
                    <BoxTopTitleEl>امتیاز کاربران به این محصول</BoxTopTitleEl>
                    <BoxCaptionEl>
                        <BoxCaptionTitleEl>ارزش خرید به نسبت قیمت:</BoxCaptionTitleEl>
                        <BoxScoreEl>
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={false}/>  
                          
                        </BoxScoreEl>
                    </BoxCaptionEl>

                    <BoxCaptionEl>
                        <BoxCaptionTitleEl>ارزش خرید به نسبت قیمت:</BoxCaptionTitleEl>
                        <BoxScoreEl>
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={false}/>  
                          
                        </BoxScoreEl>
                    </BoxCaptionEl>

                    <BoxCaptionEl>
                        <BoxCaptionTitleEl>ارزش خرید به نسبت قیمت:</BoxCaptionTitleEl>
                        <BoxScoreEl>
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={true}/>  
                          <ScoreEl active={false}/>  
                          
                        </BoxScoreEl>
                    </BoxCaptionEl>
                </BoxTopSectionEl>

            </CommentTopSectionEl>
            <CommentsSectionEl>
                <CommentsTitleEl>
                   نظرات کاربران 
                </CommentsTitleEl>
                {
                    comments.map((item:any,index:number)=>
                    <Comment key={item.id} {...item} />
                    )
                }
            </CommentsSectionEl>

        </CommentsComponentEl>
        </>
    )
}
export default CommentsComponent;