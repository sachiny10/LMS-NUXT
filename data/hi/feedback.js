export default [
  {
  id:'introduction',
  title:'1. Significance of The Button',
  link:'https://demo.inboice.com/app/setting/system',
  description:`
  CRM में, जब सेटिंग्स से "Feedback Mandatory to Release Service Pay" विकल्प सक्षम किया जाता है, तो बंद, रद्द और टैग किए गए टिकट अपने-अपने "अर्जेंट फीडबैक" सेक्शन में चले जाते हैं। विशेष रूप से, बंद टिकट "अर्जेंट बंद" टैब में, रद्द टिकट "अर्जेंट रद्द" टैब में और टैग किए गए टिकट "अर्जेंट टैग किए गए" टैब में दिखेंगे। अगर यह विकल्प अक्षम किया जाता है, तो ये टिकट "वैकल्पिक फीडबैक" सेक्शन में सेव हो जाएंगे। इसमें बंद टिकट "वैकल्पिक बंद जोड़ें" टैब में, रद्द टिकट "वैकल्पिक रद्द जोड़ें" टैब में और टैग किए गए टिकट "वैकल्पिक टैग किए गए जोड़ें" टैब में चले जाएंगे।
  `,
  image:'/images/Feedback/button.png'
  },
  {
  id:'urgent feedback',
  title:'1.1 Add Closed tab in Urgent Feedback tab',
  link:'https://demo.inboice.com/app/feedback/add/closed',
  description:`
  add closed tab में search, download excel sheet जैसे features उपलब्ध है हर ticket के आखिर में कॉल बटन है जिससे admin customer को कॉल कर सकता है और फिर feedback button जिससे admin customers का feedback लेकर ticket को approve & update, approve only, hold , re -open, flag/report कर सकता है | feedback button के साथ कमेंट बटन पर क्लिक करके admin customer से संबधित कमेंट देख सकता है | इस tab सभी closed tickets के feedback approve किये जाते है | जो approve होने के बाद done feedback के view closed tab में जाते है
  `,
  image:'/images/Feedback/closedurgent.png'
  },
  {
  id:'canceled feedback',
  title:'1.2 Add Canceled tab in Urgent Feedback tab',
  link:'https://demo.inboice.com/app/feedback/add/canceled',
  description:`add canceled tab में search, download excel sheet जैसे features उपलब्ध है हर ticket के आखिर में कॉल बटन है जिससे admin customer को कॉल कर सकता है और फिर feedback button जिससे admin customers का feedback लेकर ticket को approve & update, approve only, hold , re -open, flag/report कर सकता है | feedback button के साथ कमेंट बटन पर क्लिक करके admin customer से संबधित कमेंट देख सकता है | इस tab सभी canceled tickets के feedback approve किये जाते है | जो approve होने के बाद done feedback के view canceled tab में जाते है
  `,
  image:'/images/Feedback/canceledurgent.png'
  },
  {
  
  id:'tagged feedback',
  title:'1.3 Add tagged tab in Urgent Feedback tab',
  link:'https://demo.inboice.com/app/feedback/add/tagged',
  description:`add tagged tab में search, download excel sheet जैसे features उपलब्ध है हर ticket के आखिर में कॉल बटन है जिससे admin customer को कॉल कर सकता है और फिर feedback button जिससे admin customers का feedback लेकर ticket को approve & update, approve only, hold , re -open, flag/report कर सकता है | feedback button के साथ कमेंट बटन पर क्लिक करके admin customer से संबधित कमेंट देख सकता है | इस tab सभी tagged tickets के feedback approve किये जाते है | जो approve होने के बाद done feedback के view tagged tab में जाते है |
  `,
  image:'/images/Feedback/taggedurgent.png'
  },
  {
  id:'optional feedback',
  title:'2. Optional Feedback ',
  link:'https://demo.inboice.com/app/feedback/optional/closed',
  description:`
  optional feedback urgent feedback सेक्शन की ही तरह काम करता है लेकिन इसके लिए admin को Feedback Mandatory to Release Service Pay सेटिंग को disabled करना पड़ेगा जिससे सभी closed, canceled एंव tagged tickets optional feedback के add closed, add canceled एंव add tagged के tab में चले जायेंगे फिर वहां से admin tickets के feedbacks approve, hold, flag, update इत्यादि जैसे काम करपयेगा |
  `,
  image:'/images/Feedback/closedoptional.png'
  },
  {
  id:'holded feedback',
  title:'3. Holded Feedback',
  link:'https://demo.inboice.com/app/feedback/hold/closed',
  description:`
  Holded feedback section में सभी closed tickets जो feedback submitting के वक्त hold पर डाली जाती है वह tickets holded closed tab में save होती है | इसी तरह से canceled वाली holded canceled और tagged वाली holded tagged में और इन tabs में जाकर admin सभी holded tickets को हमेशा के लिए approve कर सकता है |
  `,
  image:'/images/Feedback/holded.png'
  },
  {
  id:'done feedback',
  title:'4. Done Feedback',
  link:'https://demo.inboice.com/app/feedback/view/closed',
  description:`
  Done feedback section में पूरी तरह feedback के साथ approved की गई closed , canceled, tagged और flagged tickets Done feedback section के विभिन्न tabs में देखी जा सकती है | जैसे closed वाली view closed में canceled वाली view canceled में tagged वाली view tagged में और flagged वाली view flagged में |
  `,
  image:'/images/Feedback/done.png'
  },
  {
  id:'add sales',
  title:'5.Add Sales/Order Review',
  link:'https://demo.inboice.com/app/feedback/review/add',
  description:'"यह सुविधा अभी आपके लिए उपलब्ध नहीं है या बीटा परीक्षण में है।"',
  image:'/images/Feedback/addsales.png'
  },
  {
  id:'view sales',
  title:' 6.View Sales/Order Review',
  link:'https://demo.inboice.com/app/feedback/review/view',
  description:'"यह सुविधा अभी आपके लिए उपलब्ध नहीं है या बीटा परीक्षण में है।"',
  image:'/images/Feedback/viewsales.png'
  }
  ]