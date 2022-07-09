import {styled} from "@mui/system"
import CustomImageViewer from "../../../app/customImageViewer"

interface item{
    title:string,
    src : string,
    id:number}

interface  Props  {
  
    title:string,
    items :item[]
}
const BannerEl = styled("div")(()=>`
   display:flex;

   flex-direction:column;
   padding:0rem 0.5rem;
   height:450px;
   border-radius:0.4rem;
   position:relative;
   background:#ffffff;
`)


const TitleEl = styled("h2")(()=>`
height:40px;
display:flex;
border-bottom : 0.1rem dashed #565656;
justify-content:center;
align-items:center;
color:#676767;

`);

const SectionTopEl = styled("div")(()=>`
display:flex;

flex-direction:column; 
justify-content:center;
align-items:center;
margin-top:1rem;

`);

const CustomImageTopEl  = styled(CustomImageViewer)(()=>`

width:90px;
height:90px;
border-radius:50%;

`)
const SectionTitleEl = styled("h5")(()=>`
 display:flex;
justify-content:center;
align-items:center;
font-size:0.9rem;
margin-top:0.5rem;

`);


const BottomButton = styled("button")(()=>`
   display:flex;
    color:#676767;
    justify-content:center;
    margin-top:1rem


`)


const ItemsEl = styled("div")(()=>`
display:flex;
flex-direction:column;
align-items:center;
margin-top:1rem;

`)
const CustomItemEl = styled("div")(()=>`
  display:flex;
  align-items:center;
  height:60px;
  margin-top:0.15rem;
`)
const CustomImageItemEl  = styled(CustomImageViewer)(()=>`

width:50px;
height:50px;
border-radius:50%;

`)

const TitleItemEl =styled("h5")(()=>`
     color:#787878;
     font-size:0.7rem;
     margin-right:0.8rem;
   `)

const SideBarBannerBoxContent =(props:Props)=>{
    const {title } = props;
    const items:item[] = [
        {id:1,title:"راهنمای خرید دوربین برای عکاسی",src:"/images/best-landscape-camera-Cover.jpg"},
        {id:2,title:"راهنمای خرید دوربین برای کارهای گرافیکی",src:"/images/monitors-graphic-design-cover.jpg"},
        {id:3,title:"راهنمای خرید دوربین برای کارهای گرافیکی",src:"/images/monitors-graphic-design-cover.jpg"},
        {id:4,title:"راهنمای خرید دوربین برای کارهای گرافیکی",src:"/images/monitors-graphic-design-cover.jpg"},
      
    ]
    return (
        <> 
        <BannerEl >
            <TitleEl>{title}</TitleEl>  
           {
            items.length>0?
            <SectionTopEl >
                <CustomImageTopEl
                src={items[0].src}
                
                />
                <SectionTitleEl>{items[0].title}</SectionTitleEl>
            </SectionTopEl>
            :
            <></>
           }
           <ItemsEl>
           {
            items.splice(1).map((item:item)=>
            
            <CustomItemEl key={item.id}>
                <CustomImageItemEl 
                  src={item.src}
                />
                <TitleItemEl>{item.title}</TitleItemEl>
            </CustomItemEl>
            )
           }
           </ItemsEl>
    
           <BottomButton >مشاهده همه </BottomButton>
        </BannerEl>
        </>
    )
}
export default SideBarBannerBoxContent;