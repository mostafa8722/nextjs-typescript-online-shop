import React, { useRef, useState } from "react";
//import Slider from "react-slick";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { styled } from "@mui/system";

import { Swiper, SwiperSlide } from "swiper/react";
import CustomImageViewer from "../../../app/customImageViewer"; 
import Box from "@mui/material/Box";
import customStyles from "../../../styles/Style.module.css"
import {icon} from "../../../utils/icon"

type Props = { items: any; count: number; arrowSize: number };

interface ComponentProps {
    isPhone?: boolean;
    opacity?: number;
}

const Main = styled("div")<ComponentProps>(
    ({ isPhone }) => `
            
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            
             `
);

const Child = styled("div")<ComponentProps>(
    ({ isPhone }) => `
            
             
         
            
             `
);

const ArrowRight = styled("div")<ComponentProps>(
    ({ isPhone, opacity }) => `
             display:flex;
             opacity:${opacity};
             z-index:10;
             cursor:pointer;
             `
);
const ArrowLeft = styled("div")<ComponentProps>(
    ({ isPhone, opacity }) => `
             display:flex;
             opacity:${opacity};
             z-index:10;
             cursor:pointer;
             `
);

const CustomCarousel = (props: Props) => {
    const [isEnded, setIsEnded] = useState(false);
    const [isStarted, setIsStarted] = useState(true);
    const swiperRef = React.useRef<SwiperCore>();

    const onInit = (Swiper: SwiperCore): void => {
        swiperRef.current = Swiper;
    };
    const handleChange = () => {
        setIsEnded(false);
        setIsStarted(false);
    };
    
    return (
        <Main>
            <ArrowRight opacity={isStarted ? 0 : 1}>
              
                  <Box
                    className={`flex justify-center items-center ${customStyles["carousel-arrow"]}`}
                 onClick={() => {
                    swiperRef.current ? swiperRef.current.slidePrev() : "";
                    setIsEnded(false);
                }}
                 >
                        {icon("arrowRight",{fontSize:"20px",height:"20px",color:"ffffff"})}

                 </Box>
            </ArrowRight>
            <Swiper
                onReachEnd={() => {
                    setIsEnded(true);
                }}
                onSlideChange={(e: any) => {
                    e.swipeDirection === "prev" ? handleChange() : "";
                }}
                onReachBeginning={() => {
                    setIsStarted(true);
                }}
                onInit={onInit}
                spaceBetween={0}
                slidesPerView={props.count}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
            >
                <Child>
                    {props.items.map((x: any, i: any) => {
                        return <SwiperSlide  virtualIndex={i} key={i}>
                            <div className="swiper-slide">{x}</div>
                        </SwiperSlide>;
                    })}
                </Child>
            </Swiper>
            
            <ArrowLeft opacity={isEnded ? 0 : 1}>
               
                  <Box
                 className={`flex justify-center items-center ${customStyles["carousel-arrow"]}`}
                 onClick={() => {
                    swiperRef.current ? swiperRef.current.slideNext() : "";
                    setIsStarted(false);
                }}
                 >
                     {icon("arrowLeft",{fontSize:"20px",height:"20px",color:"ffffff"})}


                 </Box>
            </ArrowLeft>
        </Main>
    );
};

export default CustomCarousel;
