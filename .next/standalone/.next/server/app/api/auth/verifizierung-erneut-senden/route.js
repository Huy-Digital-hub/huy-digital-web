"use strict";(()=>{var e={};e.id=254,e.ids=[254],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},61282:e=>{e.exports=require("child_process")},84770:e=>{e.exports=require("crypto")},80665:e=>{e.exports=require("dns")},17702:e=>{e.exports=require("events")},92048:e=>{e.exports=require("fs")},32615:e=>{e.exports=require("http")},35240:e=>{e.exports=require("https")},98216:e=>{e.exports=require("net")},19801:e=>{e.exports=require("os")},55315:e=>{e.exports=require("path")},76162:e=>{e.exports=require("stream")},82452:e=>{e.exports=require("tls")},17360:e=>{e.exports=require("url")},21764:e=>{e.exports=require("util")},71568:e=>{e.exports=require("zlib")},83200:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>b,requestAsyncStorage:()=>x,routeModule:()=>g,serverHooks:()=>f,staticGenerationAsyncStorage:()=>h});var i={};r.r(i),r.d(i,{POST:()=>c});var n=r(49303),s=r(88716),o=r(60670),a=r(87070),u=r(84770),l=r(15491),p=r(31946),d=r(45707);async function c(e){try{let t=e.headers.get("x-forwarded-for")??"unknown";if((0,p.b)(`verifizierung-erneut:${t}`,3))return a.NextResponse.json({fehler:"Zu viele Anfragen. Bitte versuche es sp\xe4ter erneut."},{status:429});let r=await e.json(),i=r.email?.toLowerCase();if(!i)return a.NextResponse.json({fehler:"E-Mail ist erforderlich."},{status:400});let n=await l._.benutzer.findUnique({where:{email:i}});if(n&&!n.emailVerifiziert){let e=(0,u.randomBytes)(32).toString("hex");await l._.benutzer.update({where:{id:n.id},data:{verifizierungsToken:e,verifizierungsTokenAblauftAm:new Date(Date.now()+864e5)}});let t=`${process.env.NEXTAUTH_URL}/api/auth/verifizieren?token=${e}`;try{await (0,d.F3)({an:n.email,betreff:"E-Mail best\xe4tigen — Huy Digital",html:(0,d.Bw)(t),von:'"Huy Digital" <support@huy-digital.com>'})}catch(e){console.error("Verifizierungs-E-Mail erneut fehlgeschlagen:",e)}}return a.NextResponse.json({nachricht:"Falls ein nicht verifiziertes Konto mit dieser E-Mail existiert, wurde eine neue Verifizierungs-E-Mail gesendet."})}catch{return a.NextResponse.json({fehler:"Ein Fehler ist aufgetreten. Bitte versuche es erneut."},{status:500})}}let g=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/auth/verifizierung-erneut-senden/route",pathname:"/api/auth/verifizierung-erneut-senden",filename:"route",bundlePath:"app/api/auth/verifizierung-erneut-senden/route"},resolvedPagePath:"C:\\Users\\Administrator\\huy-digital-web\\src\\app\\api\\auth\\verifizierung-erneut-senden\\route.ts",nextConfigOutput:"standalone",userland:i}),{requestAsyncStorage:x,staticGenerationAsyncStorage:h,serverHooks:f}=g,m="/api/auth/verifizierung-erneut-senden/route";function b(){return(0,o.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:h})}},31946:(e,t,r)=>{r.d(t,{b:()=>n});let i=new Map;function n(e,t=5,r=6e4){let n=Date.now(),s=i.get(e);return!s||n>s.zuruecksetzenUm?(i.set(e,{anzahl:1,zuruecksetzenUm:n+r}),!1):(s.anzahl++,s.anzahl>t)}},15491:(e,t,r)=>{r.d(t,{_:()=>n});let i=require("@prisma/client"),n=globalThis.prisma??new i.PrismaClient},45707:(e,t,r)=>{r.d(t,{Bw:()=>s,F3:()=>n,kQ:()=>o});let i=r(55245).createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT)||587,secure:!1,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});async function n({an:e,betreff:t,html:r,von:n}){await i.sendMail({from:n??`"Huy Digital" <${process.env.SMTP_USER}>`,to:e,subject:t,html:r})}function s(e){return`
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0f; color: #e4e4e7; padding: 40px; border-radius: 8px;">
      <h1 style="color: #D4AF37; font-size: 24px; margin-bottom: 24px;">E-Mail best\xe4tigen</h1>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Willkommen bei Huy Digital! Bitte best\xe4tige deine E-Mail-Adresse, um dein Konto zu aktivieren.
      </p>
      <a href="${e}" style="display: inline-block; background-color: #D4AF37; color: #0a0a0f; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: bold; margin: 16px 0;">
        E-Mail best\xe4tigen
      </a>
      <p style="margin-top: 24px; font-size: 14px; color: #a1a1aa; line-height: 1.6;">
        Dieser Link ist <strong>24 Stunden</strong> g\xfcltig. Falls du kein Konto erstellt hast, kannst du diese E-Mail ignorieren.
      </p>
      <hr style="border: none; border-top: 1px solid #333; margin: 24px 0;" />
      <p style="font-size: 12px; color: #666;">Huy Digital — huy-digital.com</p>
    </div>
  `}function o(e){return`
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0f; color: #e4e4e7; padding: 40px; border-radius: 8px;">
      <h1 style="color: #D4AF37; font-size: 24px; margin-bottom: 24px;">Passwort zur\xfccksetzen</h1>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Du hast eine Anfrage zum Zur\xfccksetzen deines Passworts gestellt.
        Klicke auf den Button unten, um ein neues Passwort zu setzen.
      </p>
      <a href="${e}" style="display: inline-block; background-color: #D4AF37; color: #0a0a0f; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: bold; margin: 16px 0;">
        Neues Passwort setzen
      </a>
      <p style="margin-top: 24px; font-size: 14px; color: #a1a1aa; line-height: 1.6;">
        Dieser Link ist <strong>1 Stunde</strong> g\xfcltig. Falls du diese Anfrage nicht gestellt hast, kannst du diese E-Mail ignorieren.
      </p>
      <hr style="border: none; border-top: 1px solid #333; margin: 24px 0;" />
      <p style="font-size: 12px; color: #666;">Huy Digital — huy-digital.com</p>
    </div>
  `}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,972,245],()=>r(83200));module.exports=i})();