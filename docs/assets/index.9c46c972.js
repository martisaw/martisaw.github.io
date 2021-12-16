import{r as b,o as u,c as o,a as e,b as t,w as l,F as f,d,t as w,u as c,e as E,f as D,g as v,h as S}from"./vendor.360f35bd.js";const I=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}};I();const z=e("div",{class:"w-full h-[56px]"},null,-1),k={class:"fixed bottom-0 w-full bg-white bg-opacity-95 rounded-t-2xl"},R={id:"nav",class:"grid justify-items-center space-y-2 max-h-0 overflow-hidden transition-[max-height] ease-in"},N=e("div",{class:"invisible"},"Spacer",-1),A=d("Home"),_=d("Manifest"),G=d("How it works"),B=d("Trashwall"),T=d("Contribute"),W=d("About us"),H=e("div",{class:"invisible"},"Spacer",-1),V=e("div",{class:""},[e("a",{href:"https://www.instagram.com/env42day/",class:"",to:"/"},[e("svg",{class:"w-h h-6",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("title",null,"Instagram"),e("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"})])])],-1),x=e("div",{class:"invisible"},"Spacer",-1),C=e("svg",{class:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),L=[C],U=e("svg",{class:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8h16M4 16h16"})],-1),y=[U],O={setup(h){function a(){const s=document.getElementById("nav"),n=document.getElementById("menu-icon"),r=document.getElementById("menu-close");s.classList.remove("max-h-0"),n.classList.toggle("hidden"),r.classList.toggle("hidden"),s.classList.add("max-h-96")}function i(){const s=document.getElementById("nav"),n=document.getElementById("menu-icon"),r=document.getElementById("menu-close");s.classList.remove("max-h-96"),s.classList.add("max-h-0"),n.classList.toggle("hidden"),r.classList.toggle("hidden")}return(s,n)=>{const r=b("router-link");return u(),o(f,null,[z,e("div",k,[e("div",R,[N,e("div",{class:"",onClick:i},[t(r,{class:"text-xl",to:"/"},{default:l(()=>[A]),_:1})]),e("div",{class:"",onClick:i},[t(r,{class:"text-xl",to:"/"},{default:l(()=>[_]),_:1})]),e("div",{class:"",onClick:i},[t(r,{class:"text-xl",to:"/"},{default:l(()=>[G]),_:1})]),e("div",{class:"",onClick:i},[t(r,{class:"text-xl",to:"/"},{default:l(()=>[B]),_:1})]),e("div",{class:"",onClick:i},[t(r,{class:"text-xl",to:"/"},{default:l(()=>[T]),_:1})]),e("div",{class:"",onClick:i},[t(r,{class:"text-xl",to:"/"},{default:l(()=>[W]),_:1})]),H,V,x]),e("div",{id:"menu-close",onClick:i,class:"flex justify-center p-3 hidden"},L),e("div",{id:"menu-icon",onClick:a,class:"flex justify-center p-3"},y)])],64)}}},M=e("div",{class:"p-2 grid grid-cols-3"},[e("div",{class:"text-left font-bold"},"env42day"),e("div",{class:"text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 inline-block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})])]),e("div",{class:"text-right"},[e("a",{href:"https://www.instagram.com/env42day/"},[e("svg",{class:"w-h h-6 inline-block",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("title",null,"Instagram"),e("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"})])])])],-1),F={class:"p-2 grid justify-items-center"},Z={class:""},j=d("Imprint"),P={class:""},K=d("Privacy"),$={setup(h){return(a,i)=>{const s=b("router-view"),n=b("router-link");return u(),o(f,null,[M,t(s),e("div",F,[e("div",Z,[t(n,{class:"",to:"/imprint"},{default:l(()=>[j]),_:1})]),e("div",P,[t(n,{class:"",to:"/privacy"},{default:l(()=>[K]),_:1})])]),t(O)],64)}}};const J={class:"relative m-2"},q=["src"],Q={class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},X={class:"bg-gray-900 bg-opacity-50 rounded-md px-2 text-white font-bold text-3xl"},Y=e("div",{class:"absolute bottom-2 right-2"},[e("div",{class:"bg-white rounded-md p-1 font-bold inline-flex items-center space-x-1"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),e("span",null,"coming soon")])],-1),ee=e("div",{class:"py-1"},null,-1),g={props:{href:String,img:String,text:String},setup(h){return(a,i)=>{const s=b("router-link");return u(),o(f,null,[t(s,{to:"/",class:"group"},{default:l(()=>[e("div",J,[e("img",{class:"rounded-lg",src:h.img},null,8,q),e("div",Q,[e("div",X,w(h.text),1)]),Y])]),_:1}),ee],64)}}};var ne="/assets/DSC05029_mobile.0db27f1a.jpg",re="/assets/DSC05025_mobile.da8e22d1.jpg",te="/assets/DSC05041_mobile.21195862.jpg",ie="/assets/DSC05037_mobile.663a4fe6.jpg",se="/assets/DSC05033_mobile.1a833738.jpg";const ae={setup(h){return(a,i)=>(u(),o(f,null,[t(g,{href:"",img:c(ne),text:"The Manifest"},null,8,["img"]),t(g,{href:"",img:c(re),text:"How it works"},null,8,["img"]),t(g,{href:"",img:c(te),text:"Trashwall"},null,8,["img"]),t(g,{href:"",img:c(ie),text:"Contribute"},null,8,["img"]),t(g,{href:"",img:c(se),text:"About us"},null,8,["img"])],64))}};var p=(h,a)=>{const i=h.__vccOpts||h;for(const[s,n]of a)i[s]=n;return i};const he={};function le(h,a){return u(),o("div",null,"About")}var de=p(he,[["render",le]]);const ue={},oe=E('<i>Notice: Since this server resides in Germany, and since the author of the website is German citizen, the German law applies for the entire website. Therefore, the data protection declaration is presented in German.</i><h1>Datenschutzerkl\xE4rung</h1><h2>1. Datenschutz auf einen Blick</h2><h3>Allgemeine Hinweise</h3><p>Die folgenden Hinweise geben einen einfachen \xDCberblick dar\xFCber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers\xF6nlich identifiziert werden k\xF6nnen. Ausf\xFChrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef\xFChrten Datenschutzerkl\xE4rung.</p><h3>Datenerfassung auf dieser Website</h3><h4>Wer ist verantwortlich f\xFCr die Datenerfassung auf dieser Website?</h4><p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k\xF6nnen Sie dem Abschnitt \u201EHinweis zur Verantwortlichen Stelle\u201C in dieser Datenschutzerkl\xE4rung entnehmen.</p><h4>Wie erfassen wir Ihre Daten?</h4><p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.\xA0B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p><p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.\xA0B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p><h4>Wof\xFCr nutzen wir Ihre Daten?</h4><p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew\xE4hrleisten. Andere Daten k\xF6nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p><h4>Welche Rechte haben Sie bez\xFCglich Ihrer Daten?</h4><p>Sie haben jederzeit das Recht, unentgeltlich Auskunft \xFCber Herkunft, Empf\xE4nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au\xDFerdem ein Recht, die Berichtigung oder L\xF6schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k\xF6nnen Sie diese Einwilligung jederzeit f\xFCr die Zukunft widerrufen. Au\xDFerdem haben Sie das Recht, unter bestimmten Umst\xE4nden die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust\xE4ndigen Aufsichtsbeh\xF6rde zu.</p><p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k\xF6nnen Sie sich jederzeit an uns wenden.</p><h2>2. Hosting</h2><h3>Externes Hosting</h3><p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die \xFCber eine Website generiert werden, handeln.</p><p>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserf\xFCllung gegen\xFCber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie\xDFlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und \xA7 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger\xE4t des Nutzers (z.\xA0B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p><p>Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erf\xFCllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p><p>Wir setzen folgenden Hoster ein:</p><p> GitHub Pages bei GitHub, Inc. 88 Colin P Kelly Jr Street San Francisco, CA 94107 United States <br> Aus Sicherheitsgr\xFCnden wird bei einem Besuch einer GitHub Pages die IP Adresse des Besuchenden gespeichert. F\xFCr mehr Infos siehe <a href="https://docs.github.com/en/articles/github-privacy-statement">GitHub Privacy Statement</a>. </p><h2>3. Allgemeine Hinweise und Pflichtinformationen</h2><h3>Datenschutz</h3><p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers\xF6nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl\xE4rung.</p><p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers\xF6nlich identifiziert werden k\xF6nnen. Die vorliegende Datenschutzerkl\xE4rung erl\xE4utert, welche Daten wir erheben und wof\xFCr wir sie nutzen. Sie erl\xE4utert auch, wie und zu welchem Zweck das geschieht.</p><p>Wir weisen darauf hin, dass die Daten\xFCbertragung im Internet (z.\xA0B. bei der Kommunikation per E-Mail) Sicherheitsl\xFCcken aufweisen kann. Ein l\xFCckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m\xF6glich.</p><h3>Hinweis zur verantwortlichen Stelle</h3><p>Die verantwortliche Stelle f\xFCr die Datenverarbeitung auf dieser Website ist:</p><p> Martin Sawilla <br>Essenweinstra\xDFe 51 <br>76131 Karlsruhe </p><p><br>E-Mail: info@env42day.de </p><p>Verantwortliche Stelle ist die nat\xFCrliche oder juristische Person, die allein oder gemeinsam mit anderen \xFCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.\xA0B. Namen, E-Mail-Adressen o. \xC4.) entscheidet.</p><h3>Speicherdauer</h3><p>Soweit innerhalb dieser Datenschutzerkl\xE4rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f\xFCr die Datenverarbeitung entf\xE4llt. Wenn Sie ein berechtigtes L\xF6schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel\xF6scht, sofern wir keine anderen rechtlich zul\xE4ssigen Gr\xFCnde f\xFCr die Speicherung Ihrer personenbezogenen Daten haben (z.\xA0B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L\xF6schung nach Fortfall dieser Gr\xFCnde.</p><h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3><p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger\xE4t (z.\xA0B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus\xE4tzlich auf Grundlage von \xA7 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf\xFCllung oder zur Durchf\xFChrung vorvertraglicher Ma\xDFnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf\xFCllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. \xDCber die jeweils im Einzelfall einschl\xE4gigen Rechtsgrundlagen wird in den folgenden Abs\xE4tzen dieser Datenschutzerkl\xE4rung informiert.</p><h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3><p>Viele Datenverarbeitungsvorg\xE4nge sind nur mit Ihrer ausdr\xFCcklichen Einwilligung m\xF6glich. Sie k\xF6nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm\xE4\xDFigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\xFChrt.</p><h3>Widerspruchsrecht gegen die Datenerhebung in besonderen F\xE4llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3><p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR\xDCNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F\xDCR EIN AUF DIESE BESTIMMUNGEN GEST\xDCTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL\xC4RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K\xD6NNEN ZWINGENDE SCHUTZW\xDCRDIGE GR\xDCNDE F\xDCR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN \xDCBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS\xDCBUNG ODER VERTEIDIGUNG VON RECHTSANSPR\xDCCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p><p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F\xDCR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p><h3>Beschwerderecht bei der zust\xE4ndigen Aufsichtsbeh\xF6rde</h3><p>Im Falle von Verst\xF6\xDFen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh\xF6rde, insbesondere in dem Mitgliedstaat ihres gew\xF6hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma\xDFlichen Versto\xDFes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p><h3>Recht auf Daten\xFCbertragbarkeit</h3><p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf\xFCllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g\xE4ngigen, maschinenlesbaren Format aush\xE4ndigen zu lassen. Sofern Sie die direkte \xDCbertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p><h3>SSL- bzw. TLS-Verschl\xFCsselung</h3><p>Diese Seite nutzt aus Sicherheitsgr\xFCnden und zum Schutz der \xDCbertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl\xFCsselung. Eine verschl\xFCsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \u201Ehttp://\u201C auf \u201Ehttps://\u201C wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p><p>Wenn die SSL- bzw. TLS-Verschl\xFCsselung aktiviert ist, k\xF6nnen die Daten, die Sie an uns \xFCbermitteln, nicht von Dritten mitgelesen werden.</p><h3>Auskunft, L\xF6schung und Berichtigung</h3><p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft \xFCber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf\xE4nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L\xF6schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k\xF6nnen Sie sich jederzeit an uns wenden.</p><h3>Recht auf Einschr\xE4nkung der Verarbeitung</h3><p>Sie haben das Recht, die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k\xF6nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr\xE4nkung der Verarbeitung besteht in folgenden F\xE4llen:</p><ul><li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben\xF6tigen wir in der Regel Zeit, um dies zu \xFCberpr\xFCfen. F\xFCr die Dauer der Pr\xFCfung haben Sie das Recht, die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li><li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm\xE4\xDFig geschah/geschieht, k\xF6nnen Sie statt der L\xF6schung die Einschr\xE4nkung der Datenverarbeitung verlangen.</li><li>Wenn wir Ihre personenbezogenen Daten nicht mehr ben\xF6tigen, Sie sie jedoch zur Aus\xFCbung, Verteidigung oder Geltendmachung von Rechtsanspr\xFCchen ben\xF6tigen, haben Sie das Recht, statt der L\xF6schung die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li><li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw\xE4gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen \xFCberwiegen, haben Sie das Recht, die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li></ul><p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr\xE4nkt haben, d\xFCrfen diese Daten \u2013 von ihrer Speicherung abgesehen \u2013 nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus\xFCbung oder Verteidigung von Rechtsanspr\xFCchen oder zum Schutz der Rechte einer anderen nat\xFCrlichen oder juristischen Person oder aus Gr\xFCnden eines wichtigen \xF6ffentlichen Interesses der Europ\xE4ischen Union oder eines Mitgliedstaats verarbeitet werden.</p><h2>4. Datenerfassung auf dieser Website</h2><h3>Server-Log-Dateien</h3><p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns \xFCbermittelt. Dies sind:</p><ul><li>Browsertyp und Browserversion</li><li>verwendetes Betriebssystem</li><li>Referrer URL</li><li>Hostname des zugreifenden Rechners</li><li>Uhrzeit der Serveranfrage</li><li>IP-Adresse</li></ul><p>Eine Zusammenf\xFChrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p><p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website \u2013 hierzu m\xFCssen die Server-Log-Files erfasst werden.</p><h3>Anfrage per E-Mail, Telefon oder Telefax</h3><p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p><p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf\xFCllung eines Vertrags zusammenh\xE4ngt oder zur Durchf\xFChrung vorvertraglicher Ma\xDFnahmen erforderlich ist. In allen \xFCbrigen F\xE4llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p><p>Die von Ihnen an uns per Kontaktanfragen \xFCbersandten Daten verbleiben bei uns, bis Sie uns zur L\xF6schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f\xFCr die Datenspeicherung entf\xE4llt (z.\xA0B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen \u2013 insbesondere gesetzliche Aufbewahrungsfristen \u2013 bleiben unber\xFChrt.</p><p> Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>',66);function ce(h,a){return oe}var ge=p(ue,[["render",ce]]);const be={},fe=E('<i>Notice: Since this server resides in Germany, and since the author of the website is German citizen, the German law applies for the entire website. Therefore, the data protection declaration is presented in German.</i><h1>Impressum</h1><h2>Angaben gem\xE4\xDF \xA7 5 TMG</h2><p>Martin Sawilla<br> Essenweinstra\xDFe 51<br> 76131 Karlsruhe</p><h2>Kontakt</h2><p>E-Mail: info@env42day.de</p><p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p><h2>Haftungsausschluss \u2013 Disclaimer:</h2><h3>Haftung f\xFCr Inhalte</h3><p>Alle Inhalte unseres Internetauftritts wurden mit gr\xF6\xDFter Sorgfalt und nach bestem Gewissen erstellt. F\xFCr die Richtigkeit, Vollst\xE4ndigkeit und Aktualit\xE4t der Inhalte k\xF6nnen wir jedoch keine Gew\xE4hr \xFCbernehmen. Als Diensteanbieter sind wir gem\xE4\xDF \xA7 7 Abs.1 TMG f\xFCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \xA7\xA7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \xFCbermittelte oder gespeicherte fremde Informationen zu \xFCberwachen oder nach Umst\xE4nden zu forschen, die auf eine rechtswidrige T\xE4tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\xFChrt.</p><p>Eine diesbez\xFCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung m\xF6glich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverz\xFCglich entfernen.</p><h3></h3>Haftungsbeschr\xE4nkung f\xFCr externe Links <p>Unsere Webseite enth\xE4lt Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher k\xF6nnen wir f\xFCr die \u201Eexternen Links\u201C auch keine Gew\xE4hr auf Richtigkeit der Inhalte \xFCbernehmen. F\xFCr die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.</p><p>Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverst\xF6\xDFe \xFCberpr\xFCft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine st\xE4ndige inhaltliche \xFCberpr\xFCfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht m\xF6glich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die au\xDFerhalb unseres Verantwortungsbereichs liegen, w\xFCrde eine Haftungsverpflichtung ausschlie\xDFlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch m\xF6glich und zumutbar w\xE4re, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.</p><p>Diese Haftungsausschlusserkl\xE4rung gilt auch innerhalb des eigenen Internetauftrittes \u201EName Ihrer Domain\u201C gesetzten Links und Verweise von Fragestellern, Blogeintr\xE4gern, G\xE4sten des Diskussionsforums. F\xFCr illegale, fehlerhafte oder unvollst\xE4ndige Inhalte und insbesondere f\xFCr Sch\xE4den, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der \xFCber Links auf die jeweilige Ver\xF6ffentlichung lediglich verweist.</p><p>Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverz\xFCglich entfernt.</p><h3>Urheberrecht</h3><p>Die auf unserer Webseite ver\xF6ffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf) . Die Vervielf\xE4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers au\xDFerhalb der Grenzen des Urheberrechtes bed\xFCrfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf ). Downloads und Kopien dieser Seite sind nur f\xFCr den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverz\xFCglich entfernen.</p>',19);function me(h,a){return fe}var pe=p(be,[["render",me]]);const Ee=[{path:"/",name:"Home",component:ae},{path:"/about",name:"About",component:de},{path:"/privacy",name:"Privacy",component:ge},{path:"/imprint",name:"Imprint",component:pe}],we=D({history:v(),routes:Ee});S($).use(we).mount("#app");
