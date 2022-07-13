import { styled } from "@mui/system";
import CustomImageViewer from "../../app/customImageViewer";
import HeaderSubCategory from "../../app/headerSubCategory";

import ReactImageMagnify from 'react-image-magnify';

import { useEffect } from "react";
import ProductInforamtion from "./productInformation";

const   BodyPageEl = styled("div")(()=>`
display:grid;
grid-template-columns : 40% 60%;
background:#fff;
border-radius:0.2rem;
box-shadow:0.1rem 0.2rem 0.1rem 0rem rgba(0,0,0,0.1);

direction:rtl;
position:relative;
`)

const ImageContainerEl = styled("div")(()=>`
background:#ff3;

`)
const ContentContainerEl = styled("div")(()=>`



`)

const ImageViewEl = styled(CustomImageViewer)(()=>`

`)


const ProductSection1 = ()=>{

    useEffect(()=>{

    
        
       

    },[])
    
    return(
        <>
        <BodyPageEl>
            <ImageContainerEl>
            
            <ReactImageMagnify
            enlargedImageContainerClassName=" left-1" 
            
            imageClassName="mn"
            enlargedImageClassName="mn2"
            className="ttr"
            
            {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src:"/images/image1.jpg",
                          
                          
                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: "/images/image1.jpg",
                            width: 400,
                            height: 1800
                        }
                    }} />

            </ImageContainerEl>
            <ContentContainerEl className="detail">
              <ProductInforamtion/>
            
          
            </ContentContainerEl>
      
             
        </BodyPageEl>
        
        </>
    );
}
export default ProductSection1;