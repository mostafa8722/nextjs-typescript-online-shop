import { styled } from "@mui/system";
import News from "./news";



const NewsComponentsEl = styled("div")(()=>
`

`
)
const NewsComponents = ()=>{
    const news = [
        {id:1, title:"آنچه خواهیم دید: iPhone SE 3",body:"اگر دنبال یک گوشی اندرویدی هستید ، سری محصولات Galaxy سامسونگ اولین ورودی برای بسیاری از افراد است. اما کدام یک انتخاب بهتری است؟",img:"/images/news.jpg"},
        {id:2, title:"آنچه خواهیم دید: iPhone SE 3",body:"اگر دنبال یک گوشی اندرویدی هستید ، سری محصولات Galaxy سامسونگ اولین ورودی برای بسیاری از افراد است. اما کدام یک انتخاب بهتری است؟",img:"/images/news.jpg"},
        {id:3, title:"آنچه خواهیم دید: iPhone SE 3",body:"اگر دنبال یک گوشی اندرویدی هستید ، سری محصولات Galaxy سامسونگ اولین ورودی برای بسیاری از افراد است. اما کدام یک انتخاب بهتری است؟",img:"/images/news.jpg"},
        {id:4, title:"آنچه خواهیم دید: iPhone SE 3",body:"اگر دنبال یک گوشی اندرویدی هستید ، سری محصولات Galaxy سامسونگ اولین ورودی برای بسیاری از افراد است. اما کدام یک انتخاب بهتری است؟",img:"/images/news.jpg"},
        {id:5, title:"آنچه خواهیم دید: iPhone SE 3",body:"اگر دنبال یک گوشی اندرویدی هستید ، سری محصولات Galaxy سامسونگ اولین ورودی برای بسیاری از افراد است. اما کدام یک انتخاب بهتری است؟",img:"/images/news.jpg"},
    ];
 
    return (
    <>
    <NewsComponentsEl>
          {
            news.map((item:any,index:number)=> <News key={item.id} {...item} />)
          }
    </NewsComponentsEl>
    </>
    );
}

export default NewsComponents;