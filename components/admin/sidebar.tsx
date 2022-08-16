import { styled } from "@mui/system";
import { useState } from "react";
import {BsChevronLeft, BsChevronUp} from "react-icons/bs"
import Link from "next/link"

const SidebarEl = styled("aside")(()=>`

box-shadow : 0.1rem 0.2rem 0.1rem 0.1rem rgba(0,0,0,0.1);

background:#fff;
width:100%;
outline:none;
margin-top:0.75rem;
border-radius:0.4rem;
display:flex;
flex-direction:column;
overflow:hidden;

`)

const SidebarItemsEl = styled("div")(()=>`
width:100%;
display:flex;
flex-direction:column;
margin-bottom:0.05rem;
`)
const SidebarItemEl = styled("div")<{pr?:number,bg?:string,height?:number,hidden?:boolean}>(({pr,bg,height,hidden})=>`

display:${hidden?"none":"flex"};

height:${height?height:45}px;
justify-content:space-between;
padding :0rem 1rem;
padding-right:${pr?pr:1}rem;
background-color:${bg?bg:"#898989"};
align-items:center;
cursor:pointer;

&:hover{
    background:${bg?bg:"#aaaaaa"};
}
`)

const ItemEl = styled("span")<{font?:string}>(({font})=>`
color:#ffffff;
font-size:${font?font:'0.9rem'};
`)
const BsChevronLeftEl = styled(BsChevronLeft)(()=>`
color:#ffffff;
font-size:0.8rem;
`)
const BsChevronUpEl = styled(BsChevronUp)(()=>`
color:#ffffff;
font-size:0.8rem;
`);


const LinkEl = styled("a")<{pr?:number,bg?:string,height?:number,hidden?:boolean}>(({pr,bg,height,hidden})=>`

display:${hidden?"none":"flex"};

height:${height?height:45}px;
justify-content:space-between;
padding :0rem 1rem;
padding-right:${pr?pr:1}rem;
background-color:${bg?bg:"#898989"};
align-items:center;
cursor:pointer;

&:hover{
    background:${bg?bg:"#aaaaaa"};
}
`)
const SideBar = ()=>{
 const [itemActive,setItemActive] = useState(0)
    const items = [
        {id:1,title:"کاربران ",addLink:"/hamyar-web/admin/users/add",link:"/admin/users"},
        {id:2,title:"دسته بندی ها ",addLink:"/hamyar-web/admin/categories/add",link:"/admin/categories"},
        {id:3,title:"نقش ها",addLink:"/hamyar-web/admin/roles/add",link:"/admin/roles"},
        {id:4,title:"دسترسی ها ",addLink:"/hamyar-web/admin/permissions/add",link:"/admin/permissions"},
        {id:5,title:"محصولات",addLink:"/hamyar-web/admin/products/add",link:"/admin/products"},
        {id:6,title:"ویژگی های محصولات",addLink:"/hamyar-web/admin/products/features/add",link:"/admin/products/features"},
        {id:7,title:"جزئیات محصولات",addLink:"/hamyar-web/admin/products/detail/add",link:"/admin/products/details"},
        {id:8,title:"تنظیمات",addLink:"/hamyar-web/admin/settings/add",link:"/admin/settings"},
    ];
   const handleOpenMenu = (id:number)=>{
    setItemActive(itemActive==0?id:0);
   }
    return (
        <SidebarEl>
            <SidebarItemsEl >
             
             <Link href="/admin/dashboard">
                  <LinkEl hidden={false} href="#">
                  <ItemEl >داشبورد</ItemEl>
                <BsChevronLeftEl></BsChevronLeftEl>
                  </LinkEl>
              </Link>
        
            </SidebarItemsEl>
            
            
            {
items.map((item)=>

<SidebarItemsEl  key={item.id} >
<SidebarItemEl bg={itemActive==item.id?"#7cd047":"#898989"} onClick={()=>handleOpenMenu(item.id)} hidden={false}>
<ItemEl >{item.title} </ItemEl>
{itemActive==item.id?<BsChevronUpEl />:<BsChevronLeftEl/>} 

</SidebarItemEl>


<Link href={item.link}>
    <LinkEl pr={2}  height={35} bg="#7cd047" hidden={itemActive==item.id?false:true}  href={item.link}>
        <ItemEl  font="0.75rem" > همه</ItemEl>
        <BsChevronLeftEl></BsChevronLeftEl>
    </LinkEl>
</Link>

<Link href={item.addLink}>
    <LinkEl pr={2}  height={35} bg="#7cd047" hidden={itemActive==item.id?false:true}  href={item.addLink}>
        <ItemEl  font="0.75rem" > افزودن</ItemEl>
        <BsChevronLeftEl></BsChevronLeftEl>
    </LinkEl>
</Link>

</SidebarItemsEl>

)
            }
          
           
        </SidebarEl>
    );
}
export default SideBar;