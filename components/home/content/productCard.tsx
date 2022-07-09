import {styled} from "@mui/system"
import Link from "next/link"; 
import CustomImageViewer from "../../../app/customImageViewer";

interface Props {
    title:string;
    src:string;
    discount :number,
    price : string,
    link :string,
    id:number,
    
}
 



  const ProductEl = styled("div")(()=>`
   display:flex;
   flex-direction:column;
  background:#ffffff;

  height:200px;
  padding:0.5rem 1rem;

  

  
  `)
  const TitleEl = styled("h5")(()=>`
  color:#454545;
  font-size:0.8rem;
  font-weight:bold;
  margin-top:1rem;
  `)
  const PriceEl = styled("span")(()=>`
  color:#454545;
  font-size:0.8rem;
 
  margin-top:1rem;
  `)

  const LinkEl =styled("a")(()=>`font-size:0.8rem`)
  const CustomImageViewerEl  = styled(CustomImageViewer)(()=>`


     height:100px;


`)
const ProductSection = (props:Props)=>{
  const {id,title ,src,link,price} = props;

  const formatPrice= (price:string) =>{
    return  Number(price).toLocaleString()+" "+"تومان";
 }
    return (<>
    <Link href="#">

           <LinkEl href={link}>
             <ProductEl>
              <CustomImageViewerEl src={src}/>
               <TitleEl>{title}</TitleEl>
               <PriceEl>{formatPrice(price)}</PriceEl>

            </ProductEl>
             </LinkEl>
    </Link>
   
    </>)
}
export default ProductSection;