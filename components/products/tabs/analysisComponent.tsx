
import { styled } from "@mui/system";
import { useState } from "react";



const AnalysisComponentEl = styled("div")<{showMore:boolean}>(({showMore})=>
`
height:${showMore?'auto':'300px'};
position:relative;
padding-bottom:50px;
&:after {
    content: "";
    background-image: linear-gradient(0deg,#fff 20%,transparent);
    height: ${showMore?'0px':'140px'};
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
}

`
)
const TextEl = styled("p")(()=>
`
font-size:0.95rem;
color:#565656;
line-height:1.8rem;
text-align: justify;
padding:1rem;
`
)
const ReadMoreEl = styled("span")(()=>
`
position: absolute;
    bottom: 10px;
    margin: auto;
    right: 0;
    left: 0;
    width: fit-content;
    font-weight: 500;
    font-size:1rem;
    font-weight:bold;
    cursor: pointer;
    z-index: 1;
    line-height: 1.75rem;
`
)

const AnalysisComponent = ()=>{

    const [showMore,setShowMore] = useState(false);
    return (
        <>
        <AnalysisComponentEl showMore={showMore}>
            <TextEl>
            اپل به مناسبت ده ساله شدن گوشی های آیفون در سال 2017 محصولی ویژه با نام iPhone X معرفی کرد که آن را آیفون ده صدا می زند که مجهزترین آیفون از نظر امکانات تا به امروز است. دربارۀ iPhone X تا قبل از تولید و رونمایی شایعه های زیادی در فضای مجازی به گوش می خورد ولی بعد از رونمایی معلوم شد این شایعه ها واقعیت نداشتند.
به محض رونمایی نمونه اصلی آیفون ایکس شرکت جی فون با دقت بسیاری توانست iPhone x را کپی برابر اصل تولید کند. تا قبل از کپی نمودن شرکت جی فون شرکت های زیادی در زمان کوتاهی بعد از مدل اصلی مدل کپی را تولید و روانه بازار کردند که هیچ استاندارد و کیفیت خوبی نداشتند و اکثرا نقاط ضعف زیادی داشتند ولی بعد از یک ماه از تولید نمونۀ اصلی شرکت جی فون با نهایت دقت توانست مدل ۱۰۰% مشابه آیفون x را تولید کند.
بسیاری از قسمت های آیفون جدید دستخوش تغییرات بزرگی شده‌ اند که طرفداران اپل را هیجان زده کرده است و آیفون ۱۰ را به محصولی متفاوت تبدیل کرده اند .
فناوری این گوشی هوشمند تک سیم کارته که در دو رنگ خاکستری فضایی و نقره ای موجود است نه تنها با سایر آیفون ها متفاوت است بلکه شکل ظاهری آن نیز تغییرات زیادی پیدا کرده به نحوی که تمام قاب جلویی آن را صفحه نمایش فرا گرفته و از دکمۀ فیزیکی هوم آیفون هم خبری نیست.
            
نمایشگر 5.8 اینچی آیفون X  که نسبت به مدل های پیشین و مدل های طرح موجود در بازار کیفیت بسیار بالاتری دارد و تفاوت به وضوح قابل دیدن است با قاب سوپر آمولد و بسیار باکیفیت و مقاوم طراحی شده. این صفحه نمایش خازنی دارای 16 میلیون رنگ و رزولوشن 458 پیکسل در هر اینچ است که کیفیتی خیره کننده را ارائه می دهد و رنگ هایی نزدیک به واقعیت را نمایش می دهد. این اولین بار است که این حجم از پیکسل در اینچ و همچنین ابعاد در نمایشگر آیفون های طرح اصلی استفاده شده است. همچنین این نمایشگر از ویژگی واقعیت افزوده نیز پشتیبانی می کند و از قابلیت نمایش طیف رنگی گستره نیز برخوردار است. حساسیت این نمایشگر با تکنولوژیScratch-resistant glass محافظت می شود تقریبا تمام قاب جلویی گوشی را پر کرده است و این مورد در کنار لبه های براق قاب اصلی، جلوه ای لوکس به آیفون ۱۰ طرح اصلی داده است. نمایشگر آیفون ایکس از استاندارد HDR10 پشتیبانی می کند و دارای فناوری تشخیص لمس سه بعدی است همچنین مجهز به پوششی مقاوم در برابر جذب عرق و اثر انگشت می باشد. خوب است اضافه کنیم که این نمایشگر فوق العاده قابلیت دریافت تا 10 لمس همزمان را نیز دارد.
قاب پشتی این گوشی که وزن و ضخامت کمی دارد نیز با محافظ گوریلا گلس از جنس شیشه ضد خش است تا هم گوشی مشکل آنتن دهی نداشته باشد و هم زیبایی و ظرافت خود را حفظ کند و بتوان به صورت بی سیم نیز آن را شارژ کرد. این بدنۀ زیبا در مقابل خط‌ و خش مقاومت بالایی دارد و می توانید مطمئن باشید از اینکه چربی و گرد و غبار به‌ راحتی روی آیفون ایکس تاثیر نمی گذارد چون در مدل های قبلی زود چرکی می شد یا خط و خش بر می داشت .
            </TextEl>
           
           
            <ReadMoreEl onClick={()=>setShowMore(!showMore)}>
                {showMore?'نمایش کمتر':'نمایش بیشتر'}
            </ReadMoreEl>
        </AnalysisComponentEl>
        </>
    )
}
export default AnalysisComponent;