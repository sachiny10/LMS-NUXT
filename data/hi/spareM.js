export default [
    {
        id:'intro',
        title:'1. Add Spare',
        link:'https://demo.inboice.com/app/spare',
        description:`
        <div>
        <p>स्पेयर मास्टर के ऐड स्पेयर tab पर क्लिक  करने पर हमें ये tab  मिलेगा जिसके द्वारा हम अपने CRM में स्पेयर को add  कर सकते है | इस tab हमें स्पेयर की केटेगरी , स्पेयर का मॉडल , उसकी specification, और unique ID/Barcode  जैसी इत्यादि जानकारियां देनी होंगी | अंत में save  & activate button पर क्लिक करने  से स्पेयर save होकर activate भी हो जायेगा | save inactivate  करने से स्पेयर केवल save  ही होगा लेकिन ticket raising के वक्त स्पेयर  dropdown में नहीं दिखेगा  |</p>
        </div>
        `,
        image:'/images/SpareM/add.png'
    },
    {
        id:'qr',
        title:'2. Spare QR list',
        link:'https://demo.inboice.com/app/spare/view/qr',
        description:`
            <div>
            <p>स्पेयर मास्टर के spares Qr  list tab पर हमें add किये हुए spares दिखेंगे  और जो पहले से ही लिस्ट में मौजूद है वह भी दिखाई देंगे | यहाँ हम search input की सहायता से मौजूदा spares को  आसानी  ढूंढ सकते है | search के साथ हमें refresh  button दिखाई देता है जिससे हम अपनी लिस्ट को  refresh कर सकते है साथ में download बटन से हम लिस्ट की excel  sheet download कर सकते  हैं | लिस्ट में हम सभी स्पेयर के QR  देख सकते  और download button पर क्लिक करके Qr कोड डाउनलोड कर सकते है साथ ही eye button पर क्लिक करके हम स्पेयर के लिंक को देख सकते है |</p>
            </div>
        `,
        image:'/images/SpareM/qr.png'
    },
    {
        id:'list',
        title:'3. Spare List',
        link:'https://demo.inboice.com/app/spare/view',
        description:`
        <div>
        <p>स्पेयर मास्टर के spares list में  हम सभी add किये गए spares को देख सकते है और expand button पर क्लिक करके हम spares  की दी गई जानकारियों को देख सकते है  status के  नीचे  edit button को क्लिक करके स्पेयर की दी गई जानकारियों को बदल सकते हैं edit के साथ block button से स्पेयर को ब्लॉक कर सकते हैं जिससे वह ticket raising के वक्त dropdown list में  दिखाई नहीं देगा | block के बाद delete button  से हम स्पेयर को लिस्ट से हटा सकते हैं active status का मतलब यह स्पेयर अभी active है ब्लॉक करने पर वह status blocked में बदल जायेगा | camera button पर क्लिक करके हम स्पेयर की फोटो देख  | </p>
        </div>
        `,
        image:'/images/SpareM/list.png'
    }
]