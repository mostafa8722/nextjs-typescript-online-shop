import * as yup from 'yup';

export   const validationCategory= yup.object().shape({
    title: yup
        .string()
        .min(3, 'تعداد حروف وارد شده کمتر از حد مجاز می باشد ')
        .max(50, 'تعداد حروف وارد شده بیش از حد مجاز می باشد ')
        .required('عنوان الزامی  می باشد'),
        en_title: yup
        .string()
        .min(3, 'تعداد حروف وارد شده کمتر از حد مجاز می باشد ')
        .max(50, 'تعداد حروف وارد شده بیش از حد مجاز می باشد ')
        .required('عنوان انگلیسی الزامی  می باشد'),

});

export   const validationColor= yup.object().shape({
    title: yup
        .string()
        .min(3, 'تعداد حروف وارد شده کمتر از حد مجاز می باشد ')
        .max(50, 'تعداد حروف وارد شده بیش از حد مجاز می باشد ')
        .required('عنوان الزامی  می باشد'),
        value: yup
        .string()
        .min(3, 'تعداد حروف وارد شده کمتر از حد مجاز می باشد ')
        .max(50, 'تعداد حروف وارد شده بیش از حد مجاز می باشد ')
        .required('عنوان انگلیسی الزامی  می باشد'),

});

export   const validationProductFeature= yup.object().shape({
    title: yup
        .string()
        .min(3, 'تعداد حروف وارد شده کمتر از حد مجاز می باشد ')
        .max(50, 'تعداد حروف وارد شده بیش از حد مجاز می باشد ')
        .required('عنوان الزامی  می باشد'),
        label: yup
        .string()
        .min(3, 'تعداد حروف وارد شده کمتر از حد مجاز می باشد ')
        .max(50, 'تعداد حروف وارد شده بیش از حد مجاز می باشد ')
        .required('برچسب الزامی  می باشد'),


});
export   const validationRole= yup.object().shape({
    title: yup
        .string()
        .min(3, 'تعداد حروف وارد شده کمتر از حد مجاز می باشد ')
        .max(50, 'تعداد حروف وارد شده بیش از حد مجاز می باشد ')
        .required('عنوان الزامی  می باشد'),
        label: yup
        .string()
        .min(3, 'تعداد حروف وارد شده کمتر از حد مجاز می باشد ')
        .max(50, 'تعداد حروف وارد شده بیش از حد مجاز می باشد ')
        .required('عنوان انگلیسی الزامی  می باشد'),

});


export   const validationBrand= yup.object().shape({
    title: yup
        .string()
        .min(3, 'تعداد حروف وارد شده کمتر از حد مجاز می باشد ')
        .max(50, 'تعداد حروف وارد شده بیش از حد مجاز می باشد ')
        .required('عنوان الزامی  می باشد'),
     

});

export   const validationBanner = yup.object().shape({
    title: yup
        .string()
        .min(3, 'تعداد حروف وارد شده کمتر از حد مجاز می باشد ')
        .max(50, 'تعداد حروف وارد شده بیش از حد مجاز می باشد ')
        .required('عنوان الزامی  می باشد'),
     

});