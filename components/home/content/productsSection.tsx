import {styled} from "@mui/system"
import Link from "next/link"; 
import SlidersProduct from "./sliders";

interface Props {
    title:string;
}
  const ProductsEl = styled("div")(()=>`
     display:flex;
     flex-direction:column;
     position:relative;
     height:400px;
  
  `)
  const SectionTopEl = styled("div")(()=>`
  display:flex;
  margin-top:1rem;
  margin-bottom:0.5rem;
  padding:0rem 1rem;

  `)

  const TitleEl = styled("h2")(()=>`
  color:#454545;
  font-size:0.8rem;
  font-weight:bold;
  `)
  const LineDividerEl = styled("div")(()=>`
  display:grid;
  height:0.9rem;
  flex:1;
   margin:0rem 0.5rem;
 
  `)

  const LinkEl =styled("a")(()=>`font-size:0.8rem`)


  const ProductEl = styled("div")(()=>`
  border-radius:0.5rem;
  background:#ffffff;

  height:350px;
  padding:0.5rem 1rem;
  box-shadow : 0 3px 7px 0rgba(0,0,0,.1)!important;
  position:absolute;
  width:100%;
  top:45px;
  
  `)
const ProductSection = (props:Props)=>{
  const {title } = props;

    return (<>
    <ProductsEl>
       <SectionTopEl>
        <TitleEl>{title}</TitleEl>
         <LineDividerEl/>
         <Link href="#">

           <LinkEl href="#">مشاهده همه </LinkEl>
         </Link>
       </SectionTopEl>
       <ProductEl>
       <SlidersProduct/>
       </ProductEl>
    </ProductsEl>
    </>)
}
export default ProductSection;