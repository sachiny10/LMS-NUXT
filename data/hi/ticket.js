export default [
    {
        id:'Done Tickets',
        title:'1. Done Tickets',
        link:'https://demo.inboice.com/app/ticket/view/done/all',
        description:`
        <div>
        <p>Ticket के done ticket section में अलग-अलग प्रकार के tabs है जैसे all done ticket tab जिसमे user सभी तरह की complete हुई tickets देख सकता है  closed tab में केवल closed tickets को देख सकता है canceled  में केवल canceled tickets , tagged में केवल tagged  tickets और flagged में flagged | user इन tabs में जाकर search fields से किसी भी   टिकट को आसानी से खोज सकता है list की excel sheets download कर सकता है list को filter करके देख सकता है |</p> 
        </div> 
        `,
        image:'/images/Ticket/done/done-tickets.png'
    },
    {
        id:'open Tickets',
        title:'2. Open Tickets',
        link:'https://demo.inboice.com/app/ticket/view/open/all',
        description:`
        <div>
    <b>All Open Tickets</b>
    <p>all open tickets tab में user सभी open tickets को देख  सकता है search field से  किसी विशेष  ticket को ticket ID, customer name, customer के फ़ोन नंबर से खोज सकता है साथ ही लिस्ट की excel शीट download  करने के लिए user  download button से   download कर सकता है जो refresh बटन के साथ में स्थित है download के साथ filter button से user लिस्ट को फ़िल्टर कर सकता है  नीचे सभी tickets के आखिर में print button पर क्लिक करके ticket का प्रिंटआउट निकाल सकता है सबसे आखिर में wrench button से user add job कर सकता है  user  customer संबधी comments देख  सकता है resend center SMS से sms भेज सकता है  और user यही से ही technician assign करते है आखिर में edit बटन user ticket इनफॉर्मेशन edit कर सकता है | </p>
    </div>
        `,
        image:'/images/Ticket/open/allopen.png'
    },
    
    {
id: 'New Tickets',
title: '3. New Tickets',
link:'https://demo.inboice.com/app/ticket/view/open/new',
description: `
<div>
<p>new tickets section के all new tickets tab में user नई raised tickets को देख सकता है यहाँ से user print button से ticket का प्रिंटआउट निकाल सकता है wrench button से add job कर सकता है technician assign कर सकता है customer related comments देख सकता है ticket भी edit कर सकता है और sms जैसी सुविधाएं भी उपलब्ध है | all new tickets tab के निचे unassigned tickets tab है जिसमे user उन tickets को देख सकता है जिन ticket के साथ कोई technician नहीं assign हुए | साथ ही इस tab से user  technician assign कर सकता है add job भी कर सकता है और ticket edit भी साथ ही view comment और sms जैसी सुविधाएं भी मौजूद है |</p>
</div>

      `,
      image:'/images/Ticket/all/new.png'
    },
    
    {
      id:'Pending Tickets',
      title:'4. Pending Tickets',
      link:'https://demo.inboice.com/app/ticket/view/open/pending',
      description:`
      <div>
      <p>Pending tickets section के all pending tickets tab में सभी pending tickets की सुची  है जिसमे user किसी भी ticket पर add job कर सकता है technician assign कर सकता है ticket edit कर सकता है साथ ही view comments और sms जैसी सुविधाएं उपलब्ध है | Pending tickets section का दूसरा tab re-opened tickets tab है जिसमे सभी दुबारा open हुई tickets की सूची है और इसमें भी add job, assign technician , इत्यादि जैसी सुविधाएं उपलब्ध है | </p>
      </div>

      `,
      image:'/images/Ticket/all/pending.png'
    },

    {
      id:'search  ticket',
      title:'5. Ticket Search',
      link:'https://demo.inboice.com/app/ticket/search',
      description:`
      <div>
      <p>Ticket section के आखिर में ticket search tab है जिसके द्वारा user customer का mobile नंबर  या ticket नंबर enter करके ticket आसानी से ढूंढ सकता है |</p>
      </div>
      `,
      image:'/images/Ticket/all/searchticket.png'
    }
]