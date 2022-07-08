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
 background:#ffffff;
  padding:0.5rem 1rem;
 position:absolute;
 top:45px;
 right:0px;
 width:100%;
 display:grid;
 grid-template-columns:repeat(4 ,1fr);
 border-bottom-left-radius:0.6rem;
 border-bottom-right-radius:0.6rem;
 box-shadow : 1px 2px 1px 0px rgba(0,0,0,0.1)
`);



const MenuList3 =styled("li")(()=>`
 display:flex;
 flex-direction: column;
 cursor:pointer;
 }

`);
const ListItem3 =styled("a")(()=>`
display:flex;
`);
const ListItemTitle3 =styled("span")(()=>`
font-size: 0.9rem;
font-weight:bold;
color:#565656;
`);

const ChildMenuLevel3 = styled("ul")(()=>`
 
 display:flex;
 flex-direction: column;
`);

const ChildMenuList3 =styled("li")(()=>`
 display:flex;
 flex-direction: column;
 cursor:pointer;
 margin-top:0.5rem;
 }

`);
const ChildListItem3 =styled("a")(()=>`
display:flex;
`);
const ChildListItemTitle3 =styled("span")(()=>`
font-size: 0.8rem;
color:#565656;
`);


const ContainerSearch = ()=>{
  
    

  
    const categories2:any = [
        
        {id:1,title:"کالای دیجیتال",icon:"down",categories:[
            {id:5,title:"موبایل",categories:[
              {id:10,title:"مانیتور",categories:[
                {id:100,title:"مانتیور سامسونگ"},
                {id:200,title:"مانتیور ال جی "},
                {id:300,title:"مانتیور ایسوس"},
              ]},
              {id:20,title:"مادر برد",categories:[
                {id:400,title:"مانتیور سامسونگ"},
                {id:500,title:"مانتیور ال جی "},
                {id:600,title:"مانتیور ایسوس"},
              ]},
              {id:30,title:"کارت گرافیک ",categories:[
                {id:1,title:"مانتیور سامسونگ",categories:[]},
                {id:2,title:"مانتیور ال جی ",categories:[]},
                {id:3,title:"مانتیور ایسوس",categories:[]},
              ]},
              {id:40,title:"سی پی یو",categories:[
                {id:1,title:"مانتیور سامسونگ",categories:[]},
                {id:2,title:"مانتیور ال جی ",categories:[]},
                {id:3,title:"مانتیور ایسوس",categories:[]},
              ]}
            ]},
            {id:6,title:"دوربین",categories:[]},
            {id:7,title:"لپ تاپ",categories:[]},
        ]},
       {id:23,title: "مد و پوشاک",icon:"down",categories:[
        {id:54,title:"موبایل",categories:[
          {id:1,title:"مانیتور",categories:[
            {id:1,title:"مانتیور سامسونگ"},
            {id:2,title:"مانتیور ال جی "},
            {id:3,title:"مانتیور ایسوس"},
          ]},
          {id:1,title:"مادر برد",categories:[
            {id:1,title:"مانتیور سامسونگ"},
            {id:2,title:"مانتیور ال جی "},
            {id:3,title:"مانتیور ایسوس"},
          ]},
          {id:1,title:"کارت گرافیک ",categories:[
            {id:1,title:"مانتیور سامسونگ",categories:[]},
            {id:2,title:"مانتیور ال جی ",categories:[]},
            {id:3,title:"مانتیور ایسوس",categories:[]},
          ]},
          {id:1,title:"مادربرد",categories:[
            {id:1,title:"مانتیور سامسونگ",categories:[]},
            {id:2,title:"مانتیور ال جی ",categories:[]},
            {id:3,title:"مانتیور ایسوس",categories:[]},
          ]}
        ]},
        
    ]},
        {id:32,title:"آرایشی و بهداشتی", icon:"down",categories:[]},
        {id:41,title:"ورزش و سفر",icon:"down",categories:[]}
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
                          
                          key={item.id}
                          onMouseEnter={() =>setHoverMenuLevelId2(item.id)}
                          onMouseLeave={() => setHoverMenuLevelId2(0)}
                          >
                             <ListItem2>
                                <ListItemTitle2>{item.title}</ListItemTitle2>
                           </ListItem2>
                                {
                                item.id==hoverMenuLevelId2?
                               <MenuLevel3>
                                
                                {
                                item.categories.map((item_level3:any)=>
                                   <MenuList3>
                                      <ListItem3>
                                   <ListItemTitle3>{item_level3.title}</ListItemTitle3>
                                    </ListItem3>
                                    <ChildMenuLevel3>
                                    {item_level3.categories.map((child_item:any)=>
                                    <ChildMenuList3>
                                    <ChildListItem3>
                                 <ChildListItemTitle3>{child_item.title}</ChildListItemTitle3>
                                  </ChildListItem3>
                                
                                 </ChildMenuList3>
                                    )}
                                    </ChildMenuLevel3>
                                   </MenuList3>
                                   
                                  
                                )
                                }
                               </MenuLevel3>
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