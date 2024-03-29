import useMediaQuery from "@mui/material/useMediaQuery";

export const Colors  = {};

const BreakPoints = {
    MobileS: "320px",
    MobileM: "375px",
    MobileL: "425px",
    Tablet: "768px",
    Laptop: "1024px",
    LaptopL: "1440px",
    Desktop: "2560px",
}

export const Devices  = {
    MobileS: `(min-width: ${BreakPoints.MobileS})`,
    MobileM: `(min-width: ${BreakPoints.MobileM})`,
    MobileL: `(min-width: ${BreakPoints.MobileL})`,
    Tablet: `(min-width: ${BreakPoints.Tablet})`,
    Laptop: `(min-width: ${BreakPoints.Laptop})`,
    LaptopL: `(min-width: ${BreakPoints.LaptopL})`,
    Desktop: `(min-width: ${BreakPoints.Desktop})`,
};


