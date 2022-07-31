import { styled } from "@mui/system";

const UserInfoEl = styled("div")(()=>`

width:100%;
outline:none;
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);
margin-top:0.75rem;
padding:1rem 1rem;
border-radius:0.4rem;
display:grid;
grid-template-columns:repeat(2,1fr);
grid-column-gap: 20px;
grid-row-gap: 10px;

background:#fff;


`)
const FeatureEl = styled("div")(()=>`
   display:flex;
   flex-direction:column;
`)
const TiterEl = styled("div")(()=>`
   color:#898989;
   font-size:0.9rem;
`)
const InputEl= styled("input")(()=>`
color:#565656;
font-size:0.95rem;


width:100%;
outline:none;

margin-top:0.35rem;
padding:0.2rem 0.5rem;
border-radius:0.4rem;
border:0.1rem solid #eeeeee;
`)

const UserInfo = ()=>{
    return (
    <UserInfoEl>
        <FeatureEl>
            <TiterEl>نام </TiterEl>
            <InputEl/>
        </FeatureEl>
        <FeatureEl>
            <TiterEl> نام خانوادگی</TiterEl>
            <InputEl/>
        </FeatureEl>
        <FeatureEl>
            <TiterEl> شماره همراه</TiterEl>
            <InputEl/>
        </FeatureEl>
        <FeatureEl>
            <TiterEl> شماره تلفن ثابت</TiterEl>
            <InputEl/>
        </FeatureEl>

        <FeatureEl>
            <TiterEl>    ایمیل</TiterEl>
            <InputEl/>
        </FeatureEl>
    
    </UserInfoEl>
    )
}
export default UserInfo;