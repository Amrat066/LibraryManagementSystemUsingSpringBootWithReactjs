const {I18n}=require('i18n');

const i18n=new I18n({


    locales:['en','ar'],
    defaultLocale:'ar',
    directory:'./locales',
    register:global,
    api:{

        __:'t',
        __n:'tn'
    },
    missingKeyFn:function (locales,value) {

        return "No key found"
      },
      header:'accept-langauage',
      queryParameter:'lang'
});

module.exports=i18n;