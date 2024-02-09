import{y as d,ab as $r,M as le,a3 as Ge,V as x,f as Er,ap as Or,L as Cr,aq as Sr,ad as Ir,q as gr,C as Rr,A as br,v as Tr,ar as Pr,Q as yr,N as B,_ as S,u as We,W as Nr,$ as _r,a6 as wr,a0 as jr,e as k,Y as Dr,k as Mr,b as He,Z as Ar,X as Je,al as Ke,g as qe,d as Ur,h as Lr,j as xr,l as Br,m as kr,n as Vr}from"./es.function.name-ce1ea723.js";import{g as Fr,c as Ee}from"./_commonjsHelpers-de833af9.js";var Gr=d,Wr=$r,V=Wr(Gr.process)==="process",Hr=TypeError,Jr=function(e,r){if(e<r)throw new Hr("Not enough arguments");return e},Kr=le,Qe=/(?:ipad|iphone|ipod).*applewebkit/i.test(Kr),c=d,qr=Ir,Qr=Ge,Oe=x,Yr=gr,Ye=Er,Ce=Or,Xr=Cr,Se=Sr,Zr=Jr,zr=Qe,ea=V,ae=c.setImmediate,te=c.clearImmediate,ra=c.process,H=c.Dispatch,aa=c.Function,Ie=c.MessageChannel,ta=c.String,J=0,R={},ge="onreadystatechange",T,u,K,q;Ye(function(){T=c.location});var ue=function(e){if(Yr(R,e)){var r=R[e];delete R[e],r()}},Q=function(e){return function(){ue(e)}},Re=function(e){ue(e.data)},be=function(e){c.postMessage(ta(e),T.protocol+"//"+T.host)};(!ae||!te)&&(ae=function(r){Zr(arguments.length,1);var a=Oe(r)?r:aa(r),t=Xr(arguments,1);return R[++J]=function(){qr(a,void 0,t)},u(J),J},te=function(r){delete R[r]},ea?u=function(e){ra.nextTick(Q(e))}:H&&H.now?u=function(e){H.now(Q(e))}:Ie&&!zr?(K=new Ie,q=K.port2,K.port1.onmessage=Re,u=Qr(q.postMessage,q)):c.addEventListener&&Oe(c.postMessage)&&!c.importScripts&&T&&T.protocol!=="file:"&&!Ye(be)?(u=be,c.addEventListener("message",Re,!1)):ge in Se("script")?u=function(e){Ce.appendChild(Se("script"))[ge]=function(){Ce.removeChild(this),ue(e)}}:u=function(e){setTimeout(Q(e),0)});var Xe={set:ae,clear:te},Te=d,na=Rr,ia=Object.getOwnPropertyDescriptor,oa=function(e){if(!na)return Te[e];var r=ia(Te,e);return r&&r.value},Ze=function(){this.head=null,this.tail=null};Ze.prototype={add:function(e){var r={item:e,next:null},a=this.tail;a?a.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};var ze=Ze,sa=le,va=/ipad|iphone|ipod/i.test(sa)&&typeof Pebble<"u",ca=le,la=/web0s(?!.*chrome)/i.test(ca),O=d,ua=oa,Pe=Ge,Y=Xe.set,fa=ze,da=Qe,pa=va,ma=la,X=V,ye=O.MutationObserver||O.WebKitMutationObserver,Ne=O.document,_e=O.process,N=O.Promise,ne=ua("queueMicrotask"),m,Z,z,_,we;if(!ne){var w=new fa,j=function(){var e,r;for(X&&(e=_e.domain)&&e.exit();r=w.get();)try{r()}catch(a){throw w.head&&m(),a}e&&e.enter()};!da&&!X&&!ma&&ye&&Ne?(Z=!0,z=Ne.createTextNode(""),new ye(j).observe(z,{characterData:!0}),m=function(){z.data=Z=!Z}):!pa&&N&&N.resolve?(_=N.resolve(void 0),_.constructor=N,we=Pe(_.then,_),m=function(){we(j)}):X?m=function(){_e.nextTick(j)}:(Y=Pe(Y,O),m=function(){Y(j)}),ne=function(e){w.head||m(),w.add(e)}}var ha=ne,$a=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}},fe=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}},Ea=d,F=Ea.Promise,er=typeof Deno=="object"&&Deno&&typeof Deno.version=="object",Oa=er,Ca=V,Sa=!Oa&&!Ca&&typeof window=="object"&&typeof document=="object",Ia=d,b=F,ga=x,Ra=br,ba=Pr,Ta=Tr,Pa=Sa,ya=er,ee=yr;b&&b.prototype;var Na=Ta("species"),ie=!1,rr=ga(Ia.PromiseRejectionEvent),_a=Ra("Promise",function(){var e=ba(b),r=e!==String(b);if(!r&&ee===66)return!0;if(!ee||ee<51||!/native code/.test(e)){var a=new b(function(i){i(1)}),t=function(i){i(function(){},function(){})},n=a.constructor={};if(n[Na]=t,ie=a.then(function(){})instanceof t,!ie)return!0}return!r&&(Pa||ya)&&!rr}),P={CONSTRUCTOR:_a,REJECTION_EVENT:rr,SUBCLASSING:ie},I={},je=B,wa=TypeError,ja=function(e){var r,a;this.promise=new e(function(t,n){if(r!==void 0||a!==void 0)throw new wa("Bad Promise constructor");r=t,a=n}),this.resolve=je(r),this.reject=je(a)};I.f=function(e){return new ja(e)};var Da=S,U=V,l=d,C=k,De=We,Me=Nr,Ma=_r,Aa=wr,Ua=B,A=x,La=He,xa=Dr,Ba=Mr,ar=Xe.set,de=ha,ka=$a,Va=fe,Fa=ze,tr=jr,L=F,pe=P,nr=I,G="Promise",ir=pe.CONSTRUCTOR,Ga=pe.REJECTION_EVENT,Wa=pe.SUBCLASSING,re=tr.getterFor(G),Ha=tr.set,h=L&&L.prototype,f=L,D=h,or=l.TypeError,oe=l.document,me=l.process,se=nr.f,Ja=se,Ka=!!(oe&&oe.createEvent&&l.dispatchEvent),sr="unhandledrejection",qa="rejectionhandled",Ae=0,vr=1,Qa=2,he=1,cr=2,M,Ue,Ya,Le,lr=function(e){var r;return La(e)&&A(r=e.then)?r:!1},ur=function(e,r){var a=r.value,t=r.state===vr,n=t?e.ok:e.fail,i=e.resolve,o=e.reject,s=e.domain,v,y,p;try{n?(t||(r.rejection===cr&&Za(r),r.rejection=he),n===!0?v=a:(s&&s.enter(),v=n(a),s&&(s.exit(),p=!0)),v===e.promise?o(new or("Promise-chain cycle")):(y=lr(v))?C(y,v,i,o):i(v)):o(a)}catch(W){s&&!p&&s.exit(),o(W)}},fr=function(e,r){e.notified||(e.notified=!0,de(function(){for(var a=e.reactions,t;t=a.get();)ur(t,e);e.notified=!1,r&&!e.rejection&&Xa(e)}))},dr=function(e,r,a){var t,n;Ka?(t=oe.createEvent("Event"),t.promise=r,t.reason=a,t.initEvent(e,!1,!0),l.dispatchEvent(t)):t={promise:r,reason:a},!Ga&&(n=l["on"+e])?n(t):e===sr&&ka("Unhandled promise rejection",a)},Xa=function(e){C(ar,l,function(){var r=e.facade,a=e.value,t=xe(e),n;if(t&&(n=Va(function(){U?me.emit("unhandledRejection",a,r):dr(sr,r,a)}),e.rejection=U||xe(e)?cr:he,n.error))throw n.value})},xe=function(e){return e.rejection!==he&&!e.parent},Za=function(e){C(ar,l,function(){var r=e.facade;U?me.emit("rejectionHandled",r):dr(qa,r,e.value)})},$=function(e,r,a){return function(t){e(r,t,a)}},E=function(e,r,a){e.done||(e.done=!0,a&&(e=a),e.value=r,e.state=Qa,fr(e,!0))},ve=function(e,r,a){if(!e.done){e.done=!0,a&&(e=a);try{if(e.facade===r)throw new or("Promise can't be resolved itself");var t=lr(r);t?de(function(){var n={done:!1};try{C(t,r,$(ve,n,e),$(E,n,e))}catch(i){E(n,i,e)}}):(e.value=r,e.state=vr,fr(e,!1))}catch(n){E({done:!1},n,e)}}};if(ir&&(f=function(r){xa(this,D),Ua(r),C(M,this);var a=re(this);try{r($(ve,a),$(E,a))}catch(t){E(a,t)}},D=f.prototype,M=function(r){Ha(this,{type:G,done:!1,notified:!1,parent:!1,reactions:new Fa,rejection:!1,state:Ae,value:void 0})},M.prototype=De(D,"then",function(r,a){var t=re(this),n=se(Ba(this,f));return t.parent=!0,n.ok=A(r)?r:!0,n.fail=A(a)&&a,n.domain=U?me.domain:void 0,t.state===Ae?t.reactions.add(n):de(function(){ur(n,t)}),n.promise}),Ue=function(){var e=new M,r=re(e);this.promise=e,this.resolve=$(ve,r),this.reject=$(E,r)},nr.f=se=function(e){return e===f||e===Ya?new Ue(e):Ja(e)},A(L)&&h!==Object.prototype)){Le=h.then,Wa||De(h,"then",function(r,a){var t=this;return new f(function(n,i){C(Le,t,n,i)}).then(r,a)},{unsafe:!0});try{delete h.constructor}catch{}Me&&Me(h,D)}Da({global:!0,constructor:!0,wrap:!0,forced:ir},{Promise:f});Ma(f,G,!1);Aa(G);var za=F,et=Ar,rt=P.CONSTRUCTOR,pr=rt||!et(function(e){za.all(e).then(void 0,function(){})}),at=S,tt=k,nt=B,it=I,ot=fe,st=Je,vt=pr;at({target:"Promise",stat:!0,forced:vt},{all:function(r){var a=this,t=it.f(a),n=t.resolve,i=t.reject,o=ot(function(){var s=nt(a.resolve),v=[],y=0,p=1;st(r,function(W){var mr=y++,$e=!1;p++,tt(s,a,W).then(function(hr){$e||($e=!0,v[mr]=hr,--p||n(v))},i)}),--p||n(v)});return o.error&&i(o.value),t.promise}});var ct=S,lt=P.CONSTRUCTOR,ce=F,ut=Ke,ft=x,dt=We,Be=ce&&ce.prototype;ct({target:"Promise",proto:!0,forced:lt,real:!0},{catch:function(e){return this.then(void 0,e)}});if(ft(ce)){var ke=ut("Promise").prototype.catch;Be.catch!==ke&&dt(Be,"catch",ke,{unsafe:!0})}var pt=S,mt=k,ht=B,$t=I,Et=fe,Ot=Je,Ct=pr;pt({target:"Promise",stat:!0,forced:Ct},{race:function(r){var a=this,t=$t.f(a),n=t.reject,i=Et(function(){var o=ht(a.resolve);Ot(r,function(s){mt(o,a,s).then(t.resolve,n)})});return i.error&&n(i.value),t.promise}});var St=S,It=I,gt=P.CONSTRUCTOR;St({target:"Promise",stat:!0,forced:gt},{reject:function(r){var a=It.f(this),t=a.reject;return t(r),a.promise}});var Rt=qe,bt=He,Tt=I,Pt=function(e,r){if(Rt(e),bt(r)&&r.constructor===e)return r;var a=Tt.f(e),t=a.resolve;return t(r),a.promise},yt=S,Nt=Ke,_t=P.CONSTRUCTOR,wt=Pt;Nt("Promise");yt({target:"Promise",stat:!0,forced:_t},{resolve:function(r){return wt(this,r)}});var jt=Object.is||function(r,a){return r===a?r!==0||1/r===1/a:r!==r&&a!==a},Dt=k,Mt=Ur,At=qe,Ut=Lr,Lt=xr,Ve=jt,Fe=Br,xt=kr,Bt=Vr;Mt("search",function(e,r,a){return[function(n){var i=Lt(this),o=Ut(n)?void 0:xt(n,e);return o?Dt(o,n,i):new RegExp(n)[e](Fe(i))},function(t){var n=At(this),i=Fe(t),o=a(r,n,i);if(o.done)return o.value;var s=n.lastIndex;Ve(s,0)||(n.lastIndex=0);var v=Bt(n,i);return Ve(n.lastIndex,s)||(n.lastIndex=s),v===null?-1:v.index}]});var g;typeof window<"u"?g=window:typeof Ee<"u"?g=Ee:typeof self<"u"?g=self:g={};var kt=g;const Gt=Fr(kt);export{Gt as g};
