import Link from "next/link"; 
import {styled} from "@mui/system"
import { FiUser,FiSearch } from 'react-icons/fi';
import { FaAngleDown ,FaAngleUp} from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';


import {LinkEl } from "../../../logic/customElement";
import handler from "../../../pages/api/hello";
import { useEffect, useState } from "react";




const MenuLevel1 = styled("ul")(()=>`
display:flex;
flex:1;
margin:0px 1rem;
position:relative;
background:#ffff30;
`);

const MenuList1 =styled("li")(()=>`
 display:flex;
 padding:0.5rem 1rem;
 backgound:#ff2200;
 cursor:pointer;

 &:hover {
    background:#ff2200;
   color:#ffffff;
   
};
 }

`);
const ListItem =styled("a")(()=>`
display:flex;
`);
const ListItemTitle =styled("span")(()=>`
margin-top: 0.3rem;
font-size: 0.8rem;
`);
const ListItemIconDown =styled(FaAngleDown)(()=>`
margin:0.5rem 0.3rem 0rem 0rem; 
font-size:0.8rem;
`);

const ListItemIconUp =styled(FaAngleUp)(()=>`
margin:0.5rem 0.3rem 0rem 0rem; 
font-size:0.8rem;
`);


const MenuLevel2 = styled("ul")(()=>`
 height:45px;
 background:#ababab;
 position:absolute;
 top:50px;
 right:0px;
 width:100%;
 display:flex;
`);

const MenuList2 =styled("li")(()=>`
 display:flex;
 padding:0.5rem 1rem;
 backgound:#ff2200;
 cursor:pointer;

 &:hover {
  
   color:#ff2200;
   
};
 }

`);
const ListItem2 =styled("a")(()=>`
display:flex;
`);
const ListItemTitle2 =styled("span")(()=>`
margin-top: 0.3rem;
font-size: 0.8rem;
`);


const MenuLevel3 = styled("ul")(()=>`
 height:300px;
 background:#ff2200;
 position:absolute;
 top:45px;
 right:0px;
 width:100%;
 display:flex;
`);

const ContainerSearch = ()=>{
  
    

  
    const categories2:any = [
        
        {id:1,title:"کالای دیجیتال",icon:"down",categories:[
            {id:5,title:"موبایل"},
            {id:6,title:"دوربین"},
            {id:7,title:"لپ تاپ"},
        ]},
       {id:2,title: "مد و پوشاک",icon:"down",categories:[
        {id:5,title:"موبایل"},
        {id:6,title:"دوربین"},
        {id:7,title:"لپ تاپ"},
    ]},
        {id:3,title:"آرایشی و بهداشتی", icon:"down",categories:[]},
        {id:4,title:"ورزش و سفر",icon:"down",categories:[]}
    ];
    const [hoverMenuLevelId1, setHoverMenuLevelId1] = useState(0);
    const [hoverMenuLevelId2, setHoverMenuLevelId2] = useState(0);
    const [categories, setCategories] = useState(categories2);
   // setCategories(categories2)
    useEffect(()=>{

       
    },[]);
  
   


  
  
      
    return (
      <>
    <MenuLevel1>
        {
            categories.map((category:any)=>
            <MenuList1   
            key={category.id}
            onMouseEnter={() =>setHoverMenuLevelId1(category.id)}
            onMouseLeave={() => setHoverMenuLevelId1(0)}
            
            >
              <ListItem>
                <ListItemTitle>{category.title}</ListItemTitle>
                {
                category.id==hoverMenuLevelId1?
                <ListItemIconUp/>
                :
                <ListItemIconDown/>
                }
              </ListItem>  
              {
                   category.id==hoverMenuLevelId1 ?
                  <MenuLevel2>
                     {
                        category.categories.map((item:any)=>
                          <MenuList2
                          
                          key={category.id}
                          onMouseEnter={() =>setHoverMenuLevelId2(item.id)}
                          onMouseLeave={() => setHoverMenuLevelId2(0)}
                          >
                             <ListItem2>
                                <ListItemTitle2>{item.title}</ListItemTitle2>
                           </ListItem2>
                                {
                                item.id==hoverMenuLevelId2?
                               <MenuLevel3></MenuLevel3>
                                   :
                               <></>
                                  }
                          </MenuList2>
                          
                        )
                     }

                  </MenuLevel2>:
                  <></>
                 
              }
            </MenuList1>
            )
        }
    </MenuLevel1>
      </>
    );
}
export default ContainerSearch;