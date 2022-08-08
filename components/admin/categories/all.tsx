import { styled } from "@mui/system";
import SideBar from "../sidebar";




const CatPageEl = styled("section")(()=>`

  display:grid;
  grid-template-columns : 1fr 3fr;
  grid-column-gap: 1rem;
  direction:rtl;
  padding:0.1rem 1rem;
`)
const ContentEl = styled("section")(()=>`
box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);

background:#fff;
width:100%;
outline:none;
margin-top:0.75rem;
border-radius:0.4rem;
display:flex;
flex-direction:column;
overflow:hidden;

height:300px;
`)

const CatPage = ()=>{

    return (
        <CatPageEl>
              <SideBar />
             <ContentEl></ContentEl>
        </CatPageEl>
    );
}
export default CatPage;