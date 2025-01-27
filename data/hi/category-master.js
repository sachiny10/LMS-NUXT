export default [

    {
        id:'introduction',
        title:'1. Category Master',
        description:`
        इस टैब से एडमिन उत्पादों की श्रेणियां संभाल सकता है। उत्पाद जोड़ते समय श्रेणी की सूची काम आती है।
        `
    },
    {
    id:"category",
    title:"2. Add Category ",
    link:'https://demo.inboice.com/app/category',
    description:`
    <div>
    <p>Category master के add category tab से हम spares/products 
की नई category बना सकते हैं |  जिसके लिए हमें पहले category का नाम देना होगा उस केटेगरी के spares/products के out of warranty charge को fill करना होगा | अगली field commission in paid service की है जिसको हमें प्रतिशत में fill करना होगा |
</p>
<p>Service Call Rate के द्वारा admin, निर्धारित समय सीमा (जैसे, 48 घंटे के भीतर) में हल की गई कॉल्स के लिए सेवा शुल्क को  तय कर सकता है | 
Service Call Rate (Quantity wise) के द्वारा admin, प्रत्येक कॉल में संभाले गए आइटमों की संख्या के आधार पर सेवा शुल्क तय कर सकता है |
Sale Discount Rate के द्वारा admin, क्रेडिट और कैश खरीद के लिए छूट की स्लैब्स निर्धारित तय कर सकता है |
Installation Call Rate (TAT wise) के द्वारा admin, निर्धारित समय सीमा के भीतर पूरी की गई इंस्टॉलेशन सेवाओं के लिए शुल्क तय कर सकता है |
Installation Call Rate (Quantity wise) के द्वारा admin, प्रत्येक टिकट पर किए गए इंस्टॉलेशन की संख्या के आधार पर दरें तय कर सकता है ।
</p>
<br>
<p>आखिरी में save inactive से हम category save सकते है लेकिन spares add करते समय वह dropdown suggestion में नहीं आएगा लेकिन save & activate से save भी होगा suggestions में भी आएगा | </p>
    </div>
    `,
    "image":"/images/Category/add.png"
    },


    {
        id:"list",
        title:"3. Category List",
        link:'https://demo.inboice.com/app/category/view',
        description:`
        <div>
        <p>Category master के add category tab में  हम सभी categories को देख सकते है यहाँ हम search input की सहायता से मौजूदा category  को आसानी ढूंढ सकते है | search के साथ हमें refresh button दिखाई देता है जिससे हम अपनी लिस्ट को refresh कर सकते है साथ में download बटन से हम लिस्ट की excel sheet download कर सकते हैं |</p>
        <p> status के नीचे edit button से admin categories की slabs को edit कर सकते हैं  edit के साथ ही block button से admin किसी भी category को block कर सकता हैं | delete button से किसी भी category को admin delete कर सकता है |</p>
        </div>
        `,
        image:"/images/Category/list.png"
    }
]