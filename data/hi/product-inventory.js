export default [
    {
    id:'Introduction',
    title:'1. Overview',
    description:`
    Product Inventory section में product stocks , product PO , stock updates , scrap returns जैसे tabs उपलब्ध है जो product के purchase से लेकर scrap return करने तक के लिए उपयोगी है |
    `,
    image:'/images/ProductIn/intro.png'
    },
    {
    id:'product stock',
    title:'2. Product Stocks',
    link:'https://demo.inboice.com/app/product-inventory/view/stock',
    description:`
    Product Stock tab में user product stock और scrap stock की लिस्ट को देख सकता है यह लिस्ट सभी center पर product stock और scrap stock की उपलब्धता को दर्शाती है इस tab पर search , download excel sheet, लिस्ट को center name , product name से filter करने की सुविधा उपलब्ध है |
    `,
    image:'/images/ProductIn/stocks.png'
    
    },
    
    {
    id:'Product PO',
    title:'3. Product PO',
    description:`
    Product PO में add product PO, manager pending PO, store pending PO, entry pending PO, view closed, view canceled PO जैसे tab उपलब्ध है | जिनके द्वारा ही PO प्रक्रिया सम्पूर्ण होती है |
    `,
    image:'/images/ProductIn/product-po.png'
    
    },
    {
    id:'add',
    title:'3.1 Add Product PO',
    link:'https://demo.inboice.com/app/product-inventory/po/add',
    description:`
    add product PO से user, product की PO प्रक्रिया शुरू कर सकता है जिसमे user को product reciever, requested to field को सेलेक्ट करके shipping details, shipment date को भरके product input में product select करके आगे quantity भरनी होगी साथ ही add button है जिससे एक नई row add हो जाएगी उससे एक बार में एक से ज्यादा product के लिए Purchase आर्डर किया जा सकता है आखिर में user कुछ comment pass कर सकता है और save & send for approval क्लिक करते ही PO manager के tab में चला जायेगा जहाँ PO को मैनेजर approval चाहिए होगा |
    `,
    image:'/images/ProductIn/add.png'
    
    },
    {
    id:'manager',
    title:'3.2 Manager Pending POs',
    link:'https://demo.inboice.com/app/product-inventory/po/view/new',
    description:`
    Manager pending PO tab से manager की स्वीकृति ही PO को store pending PO tab तक ले जा सकती है यहाँ manager PO को approve कर सकता है cancel कर सकता है यदि manager approve करता है तो PO, store pending PO में चला जायेगा और cancel करने पर view canceled PO में | इस tab पर PO को search, PO लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा उपलब्ध है |
    `,
    image:'/images/ProductIn/manager.png'
    },
    {
    id:'store',
    title:'3.3 Store Pending POs',
    link:'https://demo.inboice.com/app/product-inventory/po/pending',
    description:`
    store pending PO में store user manager से approved PO's को approve या cancel कर सकता है | इस tab से approved हुए PO's entry pending PO में जाते है और canceled PO's view canceled PO's में | इस tab पर भी PO को search, PO लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा उपलब्ध है |
    `,
    image:'/images/ProductIn/store.png'
    },
    {
    id:'entry',
    title:'3.4 Entry Pending POs',
    link:'https://demo.inboice.com/app/product-inventory/po/closed',
    description:`
    Entry pending PO में entry user store से approved PO's को received mark करके product PO की approval प्रक्रिया को पूरा करता है साथ यहाँ से user PO's का printout निकाल सकता है यहाँ से received करने पर PO's view closed PO's में save हो जाते है | इस tab पर भी PO को search, PO लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा उपलब्ध है |
    `,
    image:'/images/ProductIn/entry.png'
    },
    {
    id:'Closed',
    title:'3.5 View Closed POs',
    link:'https://demo.inboice.com/app/product-inventory/po/recieved',
    description:`View closed PO's में user सभी received PO's को देख सकता है | साथ ही सभी PO's के printout निकालने की भी सुविधा है इस tab पर PO को search, PO लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा उपलब्ध है |`,
    image:'/images/ProductIn/viewclosed.png'
    },
    {
    id:'canceled',
    title:'3.6 View Canceled POs',
    link:'https://demo.inboice.com/app/product-inventory/po/canceled',
    description:`View canceled PO's में user manager tab से , store tab से canceled PO's को देख सकता है साथ ही printout निकाल सकता है | इस tab पर PO को search, PO लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा उपलब्ध है |`,
    image:'/images/ProductIn/viewcanceled.png'
    },

    {
    id: "stock updates",
    description: `
    Stock Updates सेक्शन का "Update Stock" tab users को चुने हुए केंद्रों पर Product stock को बढ़ाने की सुविधा देता है। मंजूर हुए updates "View Done Updates" में दिखाई देते हैं, जबकि रिजेक्ट हुए updates "View Canceled Updates" में चले जाते हैं। इससे एक संरचित और जिम्मेदार इन्वेंटरी प्रोसेस सुनिश्चित होता है।
    
    `,
    image: "/images/ProductIn/stock-update.png",
    },
    
    
    {
    id:'Update',
    title:'4.1 Update Stocks',
    link:'https://demo.inboice.com/app/product-inventory/update/add',
    description:`
    update stock tab से user center, reason , product को select करके fresh और scrap के stocks को update कर सकते है add row button से 2 या 2 से ज्यादा product के stocks को update कर सकते है साथ ही कुछ comment भी कर सकते है | इसके बाद save & submit return पर click करने से stock update request manager pending tab में manager के approval के लिए चला जायेगा |
    `,
    image:'/images/ProductIn/update.png'
    },
    {
    id:'manager',
    title:'4.2 Manager Pending',
    link:'https://demo.inboice.com/app/product-inventory/update/view',
    description:`
    सभी stock update request इस tab में manager के approval के लिए आते है यहाँ से manager request को approve या cancel कर सकता है | साथ ही manager, stock update request का printout निकाल सकते है | इस tab पर update request को search, stock update लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा उपलब्ध है |
    `,
    image:'/images/ProductIn/manager.png'
    },
    {
    id:'admin',
    title:'4.3 Admin Pending Update',
    link:'https://demo.inboice.com/app/product-inventory/update/view/pending',
    description:`
    सभी stock update request इस tab में admin के approval के लिए आते है यहाँ से admin request को approve या cancel कर सकता है | साथ ही admin , stock update request का printout निकाल सकते है | इस tab पर update request को search, stock update लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा उपलब्ध है |
    `,
    image:'/images/ProductIn/admin.png'
    },
    {
    id:'done',
    title:'4.4 View Done Update',
    link:'https://demo.inboice.com/app/product-inventory/update/view/closed',
    description:`
    view done updates में manager, admin के approval के बाद सभी requests यहाँ save होती है user सभी stock update requests का printout निकाल सकता है इस tab पर update request को search, stock update लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा भी उपलब्ध है |
    `,
    image:'/images/ProductIn/viewdone.png'
    },
    {
    id:'canceled',
    title:'4.5 View Canceled Update',
    link:'https://demo.inboice.com/app/product-inventory/update/view/canceled',
    description:`View Canceled Update में manager, admin के cancel करने के बाद सभी canceled requests यहाँ save होती है user सभी stock update requests का printout निकाल सकता है इस tab पर update request को search, stock update लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा भी उपलब्ध है |`,
    image:'/images/ProductIn/viewcanceled.png'
    },
    
    {
    id: "scrap",
    title: "5. Scrap Returns",
    description: `
    Scrap returns section में ख़राब (scrap) products को वापिस करने का प्रावधान है इसमें कई प्रकार के tabs मौजूद है |
    `,
    image:'/images/ProductIn/scrap-return.png'
    },
    {
    id:'add',
    title:'5.1 Add Product Return ',
    link:'https://demo.inboice.com/app/product-inventory/return/add',
    description:`
    Add product return tab में user को product return by, और submitted to को select करना होता है उसके बाद courier details, shipment date और comment fields को भरके save & submit return करना होता है इस प्रक्रिया से return request manager के approval के लिए जाती है |
    `,
    image:'/images/ProductIn/addscrap.png'
    },
    {
    id:'manager',
    title:'5.2 Manager Pending',
    link:'https://demo.inboice.com/app/product-inventory/return/view',
    description:`
    manager pending tab से manager request approve, edit व cancel कर सकता है | साथ ही request का printout भी निकाल सकता है | इस tab पर return request को search, return request लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा भी उपलब्ध है |
    `,
    image:'/images/ProductIn/managerscrap.png'
    },
    {
    id:'admin',
    title:'5.3 Admin Pending Return',
    link:'https://demo.inboice.com/app/product-inventory/return/view/pending',
    description:`
    manager pending tab में manager से request approve होने बाद request admin pending return tab में आती है और यहाँ admin request को cancel, approve व print कर सकता है |इस tab पर return request को search, return request लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा भी उपलब्ध है |
    `,
    image:'/images/ProductIn/adminscrap.png'
    },
    {
    id:'entry',
    title:'5.4 Entry Pending Return',
    link:'https://demo.inboice.com/app/product-inventory/return/view/closed',
    description:`
    entry pending return tab में admin द्वारा approved scrap request की लिस्ट उपलब्ध है इस tab से user, request को approve, received और print कर सकता है | और इस tab पर return request को search, return request लिस्ट की excel sheet को डाउनलोड करने और लिस्ट को filter करने की सुविधा भी उपलब्ध है |
    `,
    image:'/images/ProductIn/entryscrap.png'
    },
    {
    id:'closed',
    title:'5.6 View Closed Return',
    link:'https://demo.inboice.com/app/product-inventory/return/view/recieved',
    description:`
    View Closed Return tab में entry pending return tab से approved, received की हुई requests की list है जिनका user printout निकाल सकता है और इस tab पर approved request को search, और लिस्ट को filter करने की सुविधा भी उपलब्ध है |
    `,
    image:'/images/ProductIn/closedscrap.png'
    },
    {
    id:'canceled',
    title:'5.7 View Canceled Return',
    link:'https://demo.inboice.com/app/product-inventory/return/view/canceled',
    description:`
    View canceled Return tab में manager, admin द्वारा canceled requests की list है जिनका user printout निकाल सकता है और इस tab पर approved request को search, और लिस्ट को filter करने की सुविधा भी उपलब्ध है |
    `,
    image:'/images/ProductIn/canceledscrap.png'
    }
    ]