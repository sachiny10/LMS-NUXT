export default [
    {
        id:"intro",
        title:'1. Overview/Add Access Group',
        link:'https://demo.inboice.com/app/access-group',
        description:`
        <div>
        <p>
          Invoice CRM में एक्सेस ग्रुप मास्टर एडमिनिस्ट्रेटर्स को विभिन्न मॉड्यूल्स (जैसे ग्राहक, कॉल्स, टिकट्स, जॉब्स, रिपोर्ट्स और अकाउंट्स) के लिए विशिष्ट अनुमतियों के साथ एक्सेस ग्रुप बनाने और प्रबंधित करने की अनुमति देता है। एडमिन्स ग्रुप्स को उनकी भूमिकाओं के आधार पर विशेष एक्सेस लेवल असाइन कर सकते हैं, जो सुरक्षा और कार्यप्रवाह की दक्षता को बढ़ाता है। इसके अलावा, एडमिन्स ग्रुप की स्थिति को "सहेजें और सक्रिय करें" या "सहेजें और निष्क्रिय करें" विकल्पों के साथ नियंत्रित कर सकते हैं, ताकि इसे तुरंत या बाद में सक्रिय किया जा सके।
        </p>
        </div>

        <div>
        <b>Add Access Group</b>
        <p>Access Group Master के Add Access Group tab के द्वारा हम नए access groups बना सकते हैं जिसके लिए हमें पहले नाम देना होगा फिर access का center type select करना होगा detailed description में हम access group description दे सकते हैं उसके बाद नीचे हमें जिन modules की  permissions देनी है वह चुनना होगा जिससे access group केवल selected modules को ही देख login के बाद पाए | 
        save inactive से access group केवल save होगा लेकिन user उसको login नहीं कर सकता | save & activate से  access group  save भी होगा और active भी जिससे user login कर पयेगा और जिन modules  की permissions उस access group के पास है उन पर काम भी करपयेगा |
        </p>
        </div>
        `,
        image:"/images/Access/access.png"
    },


    {
      id:"list",
      title:"2. Access Group List",
      link:'https://demo.inboice.com/app/access-group/view',
      description:`
      <div>
      <p>इनवॉइस CRM में 'Access Group List page' पेज यूजर्स को सिस्टम में एक्सेस ग्रुप को देखने, ढूंढने, एडिट करने और मैनेज करने की सुविधा देता है ।</p>
      <p>Access Group List tab में हम सभी Access Groups देख सकते हैं | यहाँ हम search input की सहायता से मौजूदा Access Group को आसानी से ढूंढ सकते है | search के साथ हमें refresh button दिखाई देता है जिससे हम अपनी लिस्ट को refresh कर सकते है साथ में download बटन से हम Access Group लिस्ट की excel sheet download कर सकते हैं |
      </p>
      <p>Access Group List tab में हम सभी Access Groups देख सकते हैं | यहाँ हम search input की सहायता से मौजूदा Access Group को आसानी से ढूंढ सकते है | search के साथ हमें refresh button दिखाई देता है जिससे हम अपनी लिस्ट को refresh कर सकते है साथ में download बटन से हम Access Group लिस्ट की excel sheet download कर सकते हैं | status के  नीचे edit button से हम access group के permissions modules में changes कर सकते हैं | edit के साथ ही block button से admin किसी भी  access group को  block कर सकता हैं |  </p>
      </div>
      `,
      image:"/images/Access/list.png"
    }
]