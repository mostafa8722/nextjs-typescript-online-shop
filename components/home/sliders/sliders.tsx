
import {styled} from "@mui/system"
import Carousel from 'react-material-ui-carousel'
import Slider from "./slider"
import {makeStyles} from "@mui/styles"


const SlidersEl = styled("div")(()=>`

height:400px;
 border-radius:0.6rem;
margin:0.5rem 0rem;
background:#9f9e8a;
box-shadow :1px 2px 1px rgba(0,0,0,0.3);
position:relative;
overflow:hidden;
      `)

      const CarouselEl = styled(Carousel)(()=>`
       
       position:absolute;
       height:100%;
       width:100%;
       top:0px;
       right:0px;
       display: grid;
       grid-auto-columns: auto;
       grid-auto-rows: max-content;
     
      `)

    
const Sliders = ()=>{

    const useStyles = makeStyles({
        indicators: {
            width: "100%",
            marginTop: "10px",
            textAlign: "center"
        },
        indicator: {
            cursor: "pointer",
            transition: "200ms",
            padding: 0,
            color: "#afafaf",
            '&:hover': {
                color: "#1f1f1f"
            },
            '&:active': {
                color: "#ff2200"
            }
        },
        indicatorIcon: {
            fontSize: "35px!important",
            color:"#ffff00",
            "& svg": {
                fontSize: "35px!important",
              }
        },
        // Applies to the active indicator
        active: {           
            color: "#494949"
        }
    })
     // const classes = useStyles();
    const lists = [
       
         {src:"/images/slider.jpg",title:"تهران ",id:1},
        {src:"/images/slider2.jpg",title:"مشهد ",id:2},
        {src:"/images/kish.jpg",title:"اصفهان ",id:3},
        {src:"/images/shiraz.jpg",title:"شیراز ",id:4},
        {src:"/images/kordan.jpg",title:"کردستان ",id:5},
        {src:"/images/ramsar.jpg",title:"اهواز ",id:6},
        {src:"/images/masal.jpg",title:"رشت ",id:7},
    
    ]
    return (
        <>
        <SlidersEl>
        <CarouselEl
        
        indicators={true}
        swipe={true}
        autoPlay={true}
        

       fullHeightHover={true} 
       index={0}
      

    indicatorIconButtonProps={
       
        {
           /* className:`${classes.indicatorIcon}`,*/
        style: {
           fontSize:"35px!important"
        }
        
    }}
    activeIndicatorIconButtonProps={{
        style: {
           
        }
    }}
    indicatorContainerProps={{
        style: {
          // 5
            textAlign: 'right', // 4
            right:"30px",
           
          
            position:"absolute",
            bottom:"20px",
            zIndex:"1"
          
        }

    }}

    
       
      
        >

                      {
                            lists.map((list,index)=><Slider key={list.id} title={list.title}  src={list.src} id={list.id} />)
                        }
              
            
            
        </CarouselEl>
       
        </SlidersEl>
        </>
    );
}

export default Sliders;