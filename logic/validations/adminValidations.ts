import * as yup from 'yup';

export   const validationCategory= yup.object({
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
        parent_id: yup
        .number()
    
        .required(' والد نمی تواند خالی باشد '),
   
});