﻿(function(g,f,b,d,c,e,z){/*! Jssor */
$Jssor$=g.$Jssor$=g.$Jssor$||{};new(function(){});var m=function(){var b=this,a={};b.$On=b.addEventListener=function(b,c){if(typeof c!="function")return;if(!a[b])a[b]=[];a[b].push(c)};b.$Off=b.removeEventListener=function(e,d){var b=a[e];if(typeof d!="function")return;else if(!b)return;for(var c=0;c<b.length;c++)if(d==b[c]){b.splice(c,1);return}};b.c=function(e){var c=a[e],d=[];if(!c)return;for(var b=1;b<arguments.length;b++)d.push(arguments[b]);for(var b=0;b<c.length;b++)try{c[b].apply(g,d)}catch(f){}}},h;(function(){h=function(a,b){this.x=typeof a=="number"?a:0;this.y=typeof b=="number"?b:0};})();var l=g.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-l.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?l.$EaseInBounce(a*2)*.5:l.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},q={wd:37,qd:39},n={Cd:0,Ed:1,Dd:2,ie:3,ze:4,Ae:5},y=1,u=2,v=4,x=5,j,a=new function(){var i=this,m=n.Cd,j=0,q=0,t=0,cb=navigator.appName,k=navigator.userAgent;function D(){if(!m)if(cb=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var d=k.indexOf("MSIE");m=n.Ed;q=parseFloat(k.substring(d+5,k.indexOf(";",d)));/*@cc_on@*/j=f.documentMode||q}else if(cb=="Netscape"&&!!g.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){m=n.Dd;j=parseFloat(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");m=h>=0?n.ze:n.ie;j=parseFloat(k.substring(i+1,a))}if(b>=0)t=parseFloat(k.substring(b+12))}else{var e=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(e){m=n.Ae;j=parseFloat(e[2])}}}function l(){D();return m==y}function G(){return l()&&(j<6||f.compatMode=="BackCompat")}function V(){D();return m==u}function hb(){D();return m==v}function ib(){D();return m==x}function s(){return l()&&j<9}var B;function r(a){if(!B){p(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(!i.Sb(a.style[b])){B=b;return c}});B=B||"transform"}return B}function ab(a){return Object.prototype.toString.call(a)}var J;function p(a,c){if(ab(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(c(a[b],b,a))break}else for(var d in a)if(c(a[d],d,a))break}function jb(){if(!J){J={};p(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){J["[object "+a+"]"]=a.toLowerCase()})}return J}function A(a){return a==d?String(a):jb()[ab(a)]||"object"}function bb(b,a){setTimeout(b,a||0)}function I(b,d,c){var a=!b||b=="inherit"?"":b;p(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function W(b,a){if(j<9)b.style.filter=a}i.zb=l;i.ic=hb;i.jc=ib;i.yb=s;i.pb=function(){return j};i.Zb=function(){return t};i.$Delay=bb;i.G=function(a){if(i.Be(a))a=f.getElementById(a);return a};i.Kb=function(a){return a?a:g.event};i.bc=function(a){a=i.Kb(a);var b=new h;if(a.type=="DOMMouseScroll"&&V()&&j<3){b.x=a.screenX;b.y=a.screenY}else if(typeof a.pageX=="number"){b.x=a.pageX;b.y=a.pageY}else if(typeof a.clientX=="number"){b.x=a.clientX+f.body.scrollLeft+f.documentElement.scrollLeft;b.y=a.clientY+f.body.scrollTop+f.documentElement.scrollTop}return b};i.Ob=function(c,a,f){if(l()&&q<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=I(h,[i],d);W(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100};i.qe=function(b,c){var a=r(b);if(a)b.style[a+"Origin"]=c};i.te=function(a,c){if(l()&&q<9||q<10&&G())a.style.zoom=c==1?"":c;else{var b=r(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=I(e,[g],f);a.style[b]=d}}};i.oe=function(a){if(!a.style[r(a)]||a.style[r(a)]=="none")a.style[r(a)]="perspective(2000px)"};i.e=function(a,c,d,b){a=i.G(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.Pc=function(a,c,d,b){a=i.G(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.Qc=function(b,a){i.e(s()?f:g,"mouseup",b,a)};i.M=function(a){a=i.Kb(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=e};i.r=function(e,d){for(var b=[],a=2;a<arguments.length;a++)b.push(arguments[a]);var c=function(){for(var c=b.concat([]),a=0;a<arguments.length;a++)c.push(arguments[a]);return d.apply(e,c)};return c};i.Tc=function(a,c){var b=f.createTextNode(c);i.ec(a);a.appendChild(b)};i.ec=function(a){a.innerHTML=""};i.lb=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function N(a,c,b,f){if(!b)b="u";for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){if(a.getAttribute(b)==c)return a;if(f){var e=N(a,c,b,f);if(e)return e}}}i.o=N;function S(a,c,e){for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(e){var b=S(a,c,e);if(b)return b}}}i.id=S;i.hd=function(b,a){return b.getElementsByTagName(a)};i.n=function(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c};i.Sb=function(a){return A(a)=="undefined"};i.od=function(a){return A(a)=="function"};i.Be=function(a){return A(a)=="string"};i.md=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};i.f=p;i.kb=function(a){return i.fc("DIV",a)};i.kd=function(a){return i.fc("SPAN",a)};i.fc=function(b,a){a=a||f;return a.createElement(b)};i.U=function(){};i.nb=function(a,b){return a.getAttribute(b)};i.ld=function(b,c,a){b.setAttribute(c,a)};i.Ub=function(a){return a.className};i.Tb=function(b,a){b.className=a?a:""};i.ed=function(a){return a.style.display};i.T=function(b,a){b.style.display=a||""};i.P=function(b,a){b.style.overflow=a};i.ob=function(a){return a.parentNode};i.y=function(a){i.T(a,"none")};i.m=function(a,b){i.T(a,b==e?"none":"")};i.q=function(b,a){b.style.position=a};i.i=function(a,b){a.style.top=b+"px"};i.h=function(a,b){a.style.left=b+"px"};i.g=function(a){return parseInt(a.style.width,10)};i.J=function(c,a){c.style.width=b.max(a,0)+"px"};i.j=function(a){return parseInt(a.style.height,10)};i.L=function(c,a){c.style.height=b.max(a,0)+"px"};i.Lc=function(a){return a.style.cssText};i.Ab=function(b,a){b.style.cssText=a};i.Mc=function(b,a){b.removeAttribute(a)};i.me=function(b,a){b.style.marginLeft=a+"px"};i.ne=function(b,a){b.style.marginTop=a+"px"};i.mc=function(a){return parseInt(a.style.zIndex)||0};i.R=function(c,a){c.style.zIndex=b.ceil(a)};i.yc=function(b,a){b.style.backgroundColor=a};i.ad=function(){return l()&&j<10};i.Xc=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=i.Lc(d),f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=I(g,f,"");a.Ab(d,e)}};i.v=function(){return+new Date};i.s=function(b,a){b.appendChild(a)};i.Vc=function(b,a){p(a,function(a){i.s(b,a)})};i.ub=function(c,b,a){c.insertBefore(b,a)};i.O=function(b,a){b.removeChild(a)};i.Wc=function(b,a){p(a,function(a){i.O(b,a)})};i.Yc=function(a){i.Wc(a,i.lb(a))};i.lc=function(b,a){var c=f.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(d){return e}return b==a};i.p=function(b,a){return b.cloneNode(a)};function L(b,a,c){a.onload=d;a.abort=d;b&&b(a,c)}i.N=function(e,b){if(i.jc()&&j<11.6||!e)L(b,d);else{var a=new Image;a.onload=i.r(d,L,b,a);a.onabort=i.r(d,L,b,a,c);a.src=e}};i.fd=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}a.f(e,function(b){a.N(b.src,c)});c()};i.ac=function(d,k,j,i){if(i)d=a.p(d,c);for(var h=a.hd(d,k),f=h.length-1;f>-1;f--){var b=h[f],e=a.p(j,c);a.Tb(e,a.Ub(b));a.Ab(e,a.Lc(b));var g=a.ob(b);a.ub(g,e,b);a.O(g,b)}return d};var C;function lb(b){var g=this,h,d,j;function f(){var c=h;if(d)c+="dn";else if(j)c+="av";a.Tb(b,c)}function k(){C.push(g);d=c;f()}g.gd=function(){d=e;f()};g.oc=function(a){j=a;f()};b=i.G(b);if(!C){i.Qc(function(){var a=C;C=[];p(a,function(a){a.gd()})});C=[]}h=i.Ub(b);a.e(b,"mousedown",k)}i.rb=function(a){return new lb(a)};var F={$Opacity:i.Ob,$Top:i.i,$Left:i.h,fb:i.J,gb:i.L,bd:i.T,$Clip:i.Xc,Vf:i.me,Wf:i.ne,z:i.q,$ZIndex:i.R};function H(){return F}i.Nc=H;i.H=function(c,b){var a=H();p(b,function(d,b){a[b]&&a[b](c,d)})};new(function(){})};j=function(n,m,g,O,z,x){n=n||0;var f=this,r,o,p,y,A=0,C,M,L,D,j=0,t=0,E,k=n,i,h,q,u=[],B;function I(b){i+=b;h+=b;k+=b;j+=b;t+=b;a.f(u,function(a){a,a.$Shift(b)})}function N(a,b){var c=a-i+n*b;I(c);return h}function w(w,G){var n=w;if(q&&(n>=h||n<=i))n=((n-i)%q+q)%q+i;if(!E||y||G||j!=n){var p=b.min(n,h);p=b.max(p,i);if(!E||y||G||p!=t){if(x){var e=x;if(z){var s=(p-k)/(m||1);if(g.Rc&&a.ic()&&m)s=b.round(s*m/16)/m*16;if(g.$Reverse)s=1-s;e={};for(var o in x){var R=M[o]||1,J=L[o]||[0,1],l=(s-J[0])/J[1];l=b.min(b.max(l,0),1);l=l*R;var H=b.floor(l);if(l!=H)l-=H;var Q=C[o]||C.ab,I=Q(l),r,K=z[o],F=x[o];if(a.md(F))r=K+(F-K)*I;else{r=a.n({A:{}},z[o]);a.f(F.A,function(c,b){var a=c*I;r.A[b]=a;r[b]+=a})}e[o]=r}}if(z.$Zoom);if(x.$Clip&&g.$Move){var v=e.$Clip.A,D=(v.$Top||0)+(v.$Bottom||0),A=(v.$Left||0)+(v.$Right||0);e.$Left=(e.$Left||0)+A;e.$Top=(e.$Top||0)+D;e.$Clip.$Left-=A;e.$Clip.$Right-=A;e.$Clip.$Top-=D;e.$Clip.$Bottom-=D}if(e.$Clip&&a.ad()&&!e.$Clip.$Top&&!e.$Clip.$Left&&e.$Clip.$Right==g.vb&&e.$Clip.$Bottom==g.Mb)e.$Clip=d;a.f(e,function(b,a){B[a]&&B[a](O,b)})}f.Lb(t-k,p-k)}t=p;a.f(u,function(b,c){var a=w<j?u[u.length-c-1]:b;a.x(w,G)});var P=j,N=w;j=n;E=c;f.bb(P,N)}}function F(a,c){c&&a.Gc(h,1);h=b.max(h,a.W());u.push(a)}function H(){if(r){var d=a.v(),e=b.min(d-A,a.jc()?80:20),c=j+e*p;A=d;if(c*p>=o*p)c=o;w(c);if(!y&&c*p>=o*p)J(D);else a.$Delay(H,g.$Interval)}}function v(d,e,g){if(!r){r=c;y=g;D=e;d=b.max(d,i);d=b.min(d,h);o=d;p=o<j?-1:1;f.Yb();A=a.v();H()}}function J(a){if(r){y=r=D=e;f.gc();a&&a()}}f.$Play=function(a,b,c){v(a?j+a:h,b,c)};f.Cc=function(b,a,c){v(b,a,c)};f.C=function(){J()};f.Zc=function(a){v(a)};f.B=function(){return j};f.tc=function(){return o};f.eb=function(){return t};f.x=w;f.xc=function(){w(i,c)};f.$Move=function(a){w(j+a)};f.$IsPlaying=function(){return r};f.cd=function(a){q=a};f.Gc=N;f.$Shift=I;f.Db=function(a){F(a,0)};f.Eb=function(a){F(a,1)};f.W=function(){return h};f.bb=a.U;f.Yb=a.U;f.gc=a.U;f.Lb=a.U;f.Cb=a.v();g=a.n({$Interval:15},g);q=g.qc;B=a.n({},a.Nc(),g.Ac);i=k=n;h=n+m;var M=g.$Round||{},L=g.$During||{};C=a.n({ab:a.od(g.$Easing)&&g.$Easing||l.$EaseSwing},g.$Easing)};var r;new function(){;function n(o,Xb){var k=this;function tc(){var a=this;j.call(a,-1e8,2e8);a.se=function(){var c=a.eb(),d=b.floor(c),f=u(d),e=c-b.floor(c);return{D:f,re:d,z:e}};a.bb=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Mb(e,c);k.c(n.$EVT_POSITION_CHANGE,u(a),u(d),a,d)}}function sc(){var b=this;j.call(b,0,0,{qc:t});a.f(C,function(a){T&&a.cd(t);b.Eb(a);a.$Shift(sb/Sb)})}function rc(){var a=this,b=Lb.$Elmt;j.call(a,-1,2,{$Easing:l.$EaseLinear,Ac:{z:Rb},qc:t},b,{z:1},{z:-1});a.mb=b}function fc(o,m){var a=this,f,g,h,l,b;j.call(a,-1e8,2e8);a.Yb=function(){M=c;Q=d;k.c(n.$EVT_SWIPE_START,u(x.B()),x.B())};a.gc=function(){M=e;l=e;var a=x.se();k.c(n.$EVT_SWIPE_END,u(x.B()),x.B());!a.z&&vc(a.re,r)};a.bb=function(d,c){var a;if(l)a=b;else{a=g;if(h)a=i.$SlideEasing(c/h)*(g-f)+f}x.x(a)};a.qb=function(b,d,c,e){f=b;g=d;h=c;x.x(b);a.x(0);a.Cc(c,e)};a.le=function(e){l=c;b=e;a.$Play(e,d,c)};a.ke=function(a){b=a};x=new tc;x.Db(o);x.Db(m)}function gc(){var c=this,b=Qb();a.R(b,0);c.$Elmt=b;c.ib=function(){a.y(b);a.ec(b)}}function qc(p,o){var f=this,s,w,H,x,g,y=[],X,q,bb,G,T,E,l,v,h;j.call(f,-B,B+1,{});function D(a){w&&w.Qb();s&&s.Qb();Y(p,a);s=new I.$Class(p,I,1);w=new I.$Class(p,I);w.xc();s.xc()}function db(){s.Cb<I.Cb&&D()}function M(o,q,m){if(!G){G=c;if(g&&m){var d=m.width,b=m.height,l=d,j=b;if(d&&b&&i.$FillMode){if(i.$FillMode&3){var h=e,p=L/K*b/d;if(i.$FillMode&1)h=p>1;else if(i.$FillMode&2)h=p<1;l=h?d*K/b:L;j=h?K:b*L/d}a.J(g,l);a.L(g,j);a.i(g,(K-j)/2);a.h(g,(L-l)/2)}a.q(g,"absolute");k.c(n.$EVT_LOAD_END,Vb)}}a.y(q);o&&o(f)}function cb(b,c,d,e){if(e==Q&&r==o&&N)if(!uc){var a=u(b);z.ye(a,o,c,f,d);c.Bd();V.Gc(a,1);V.x(a);A.qb(b,b,0)}}function eb(b){if(b==Q&&r==o){if(!l){var a=d;if(z)if(z.D==o)a=z.pe();else z.ib();db();l=new oc(o,a,f.Fd(),f.Kd());l.Ec(h)}!l.$IsPlaying()&&l.Nb()}}function U(e,c){if(e==o){if(e!=c)C[c]&&C[c].Ld();h&&h.$Enable();var k=Q=a.v();f.N(a.r(d,eb,k))}else{var j=b.abs(o-e),g=B+i.$LazyLoading;(!T||j<g||t-j<g)&&f.N()}}function fb(){if(r==o&&l){l.C();h&&h.$Quit();h&&h.$Disable();l.Dc()}}function gb(){r==o&&l&&l.C()}function S(b){if(P)a.M(b);else k.c(n.$EVT_CLICK,o,b)}function R(){h=v.pInstance;l&&l.Ec(h)}f.N=function(e,b){b=b||x;if(y.length&&!G){a.m(b);if(!bb){bb=c;k.c(n.$EVT_LOAD_START);a.f(y,function(b){if(!b.src){b.src=a.nb(b,"src2");a.T(b,b["display-origin"])}})}a.fd(y,g,a.r(d,M,e,b))}else M(e,b)};f.pd=function(){if(z){var b=z.je(t);if(b){var f=Q=a.v(),c=o+1,e=C[u(c)];return e.N(a.r(d,cb,c,e,b,f),x)}}W(r+i.$AutoPlaySteps)};f.Bb=function(){U(o,o)};f.Ld=function(){h&&h.$Quit();h&&h.$Disable();f.Hc();l&&l.yd();l=d;D()};f.Bd=function(){a.y(p)};f.Hc=function(){a.m(p)};f.zd=function(){h&&h.$Enable()};function Y(b,f,d){d=d||0;if(!E){if(b.tagName=="IMG"){y.push(b);if(!b.src){T=c;b["display-origin"]=a.ed(b);a.y(b)}}a.yb()&&a.R(b,a.mc(b)+1);if(i.$HWA&&a.Zb()>0)(!F||a.Zb()<534||!ab)&&a.oe(b)}var h=a.lb(b);a.f(h,function(h){var j=a.nb(h,"u");if(j=="player"&&!v){v=h;if(v.pInstance)R();else a.e(v,"dataavailable",R)}if(j=="caption"){if(!a.zb()&&!f){var i=a.p(h,c);a.ub(b,i,h);a.O(b,h);h=i;f=c}}else if(!E&&!d&&!g&&a.nb(h,"u")=="image"){g=h;if(g){if(g.tagName=="A"){X=g;a.H(X,O);q=a.p(g,e);a.e(q,"click",S);a.H(q,O);a.T(q,"block");a.Ob(q,0);a.yc(q,"#000");g=a.id(g,"IMG")}g.border=0;a.H(g,O)}}Y(h,f,d+1)})}f.Lb=function(c,b){var a=B-b;Rb(H,a)};f.Fd=function(){return s};f.Kd=function(){return w};f.D=o;m.call(f);var J=a.o(p,"thumb");if(J){f.vd=a.p(J,c);a.y(J)}a.m(p);x=a.p(Z,c);a.R(x,1e3);a.e(p,"click",S);D(c);E=c;f.dc=g;f.rc=q;f.mb=H=p;a.s(H,x);k.$On(203,U);k.$On(22,gb);k.$On(24,fb)}function oc(h,q,v,u){var b=this,m=0,x=0,o,g,d,f,l,s,w,t,p=C[h];j.call(b,0,0);function y(){a.Yc(J);Wb&&l&&p.rc&&a.s(J,p.rc);a.m(J,l||!p.dc)}function A(){if(s){s=e;k.c(n.$EVT_ROLLBACK_END,h,d,m,g,d,f);b.x(g)}b.Nb()}function B(a){t=a;b.C();b.Nb()}b.Nb=function(){var a=b.eb();if(!G&&!M&&!t&&(a!=d||N&&(!Ob||U))&&r==h){if(!a){if(o&&!l){l=c;b.Dc(c);k.c(n.$EVT_SLIDESHOW_START,h,m,x,o,f)}y()}var e,i=n.$EVT_STATE_CHANGE;if(a==f){d==f&&b.x(g);return p.pd()}else if(a==d)e=f;else if(a==g)e=d;else if(!a)e=g;else if(a>d){s=c;e=d;i=n.$EVT_ROLLBACK_START}else e=b.tc();k.c(i,h,a,m,g,d,f);b.Cc(e,A)}};b.yd=function(){z&&z.D==h&&z.ib();var a=b.eb();a<f&&k.c(n.$EVT_STATE_CHANGE,h,-a-1,m,g,d,f)};b.Dc=function(b){q&&a.P(db,b&&q.pc.$Outside?"":"hidden")};b.Lb=function(b,a){if(l&&a>=o){l=e;y();p.Hc();z.ib();k.c(n.$EVT_SLIDESHOW_END,h,m,x,o,f)}k.c(n.$EVT_PROGRESS_CHANGE,h,a,m,g,d,f)};b.Ec=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.Uc,B)}};q&&b.Eb(q);o=b.W();b.W();b.Eb(v);g=v.W();d=g+i.$AutoPlayInterval;u.$Shift(d);b.Db(u);f=b.W()}function Rb(c,g){var f=w>0?w:i.$PlayOrientation,d=b.round(wb*g*(f&1)),e=b.round(xb*g*(f>>1&1));if(a.zb()&&a.pb()>=10&&a.pb()<11)c.style.msTransform="translate("+d+"px, "+e+"px)";else if(a.ic()&&a.pb()>=30){c.style.WebkitTransition="transform 0s";c.style.WebkitTransform="translate3d("+d+"px, "+e+"px, 0px) perspective(2000px)"}else{a.h(c,d);a.i(c,e)}}function mc(a){P=0;!H&&jc()&&lc(a)}function lc(b){kb=M;G=c;vb=e;Q=d;a.e(f,ib,Tb);a.v();Eb=A.tc();A.C();if(!kb)w=0;if(F){var h=b.touches[0];qb=h.clientX;rb=h.clientY}else{var g=a.bc(b);qb=g.x;rb=g.y;a.M(b)}E=0;Y=0;cb=0;D=x.B();k.c(n.$EVT_DRAG_START,u(D),D,b)}function Tb(e){if(G&&(!a.yb()||e.button)){var f;if(F){var n=e.touches;if(n&&n.length>0)f=new h(n[0].clientX,n[0].clientY)}else f=a.bc(e);if(f){var l=f.x-qb,m=f.y-rb;if(b.floor(D)!=D)w=w||i.$PlayOrientation&H;if((l||m)&&!w){if(H==3)if(b.abs(m)>b.abs(l))w=2;else w=1;else w=H;if(F&&w==1&&b.abs(m)-b.abs(l)>3)vb=c}if(w){var d=m,k=xb;if(w==1){d=l;k=wb}if(!T){if(d>0){var g=k*r,j=d-g;if(j>0)d=g+b.sqrt(j)*5}if(d<0){var g=k*(t-B-r),j=-d-g;if(j>0)d=-g-b.sqrt(j)*5}}if(E-Y<-2)cb=1;else if(E-Y>2)cb=0;Y=E;E=d;ob=D-E/k/(hb||1);if(E&&w&&!vb){a.M(e);if(!M)A.le(ob);else A.ke(ob)}else a.yb()&&a.M(e)}}}else Ab(e)}function Ab(h){hc();if(G){G=e;a.v();a.Pc(f,ib,Tb);P=E;P&&a.M(h);A.C();var d=x.B();k.c(n.$EVT_DRAG_END,u(d),d,u(D),D,h);var c=b.floor(D);if(b.abs(E)>=i.$MinDragOffsetToSlide){c=b.floor(d);c+=cb}if(!T)c=b.min(t-B,b.max(c,0));var g=b.abs(c-d);g=1-b.pow(1-g,5);if(!P&&kb)A.Zc(Eb);else if(d==c){pb.zd();pb.Bb()}else A.qb(d,c,g*Nb)}}function ec(a){C[r];r=u(a);pb=C[r];Mb(a);return r}function vc(a,b){w=0;ec(a);k.c(n.$EVT_PARK,u(a),b)}function Mb(b,c){a.f(R,function(a){a.Rb(u(b),b,c)})}function jc(){var b=n.vc||0,a=i.$DragOrientation;if(F)a&1&&(a&=1);n.vc|=a;return H=a&~b}function hc(){if(H){n.vc&=~i.$DragOrientation;H=0}}function Qb(){var b=a.kb();a.H(b,O);a.q(b,"absolute");return b}function u(a){return(a%t+t)%t}function bc(a,b){W(T?a:u(a),i.$SlideDuration,b)}function ub(){a.f(R,function(a){a.Gb(a.Z.$ChanceToShow>U)})}function Zb(b){b=a.Kb(b);var c=b.target?b.target:b.srcElement,d=b.relatedTarget?b.relatedTarget:b.toElement;if(!a.lc(o,c)||a.lc(o,d))return;U=1;ub();C[r].Bb()}function Yb(){U=0;ub()}function ac(){O={fb:L,gb:K,$Top:0,$Left:0};a.f(S,function(b){a.H(b,O);a.q(b,"absolute");a.P(b,"hidden");a.y(b)});a.H(Z,O)}function fb(b,a){W(b,a,c)}function W(h,g,l){if(Kb&&(!G||i.$NaviQuitDrag)){M=c;G=e;A.C();if(a.Sb(g))g=Nb;var f=Bb.eb(),d=h;if(l){d=f+h;if(h>0)d=b.ceil(d);else d=b.floor(d)}if(!T){d=u(d);d=b.max(0,b.min(d,t-B))}var k=(d-f)%t;d=f+k;var j=f==d?0:g*b.abs(k);j=b.min(j,g*B*1.5);A.qb(f,d,j)}}k.$PlayTo=W;k.$GoTo=function(a){W(a,1)};k.$Next=function(){fb(1)};k.$Prev=function(){fb(-1)};k.$Pause=function(){N=e};k.$Play=function(){if(!N){N=c;C[r]&&C[r].Bb()}};k.$SetSlideshowTransitions=function(a){i.$SlideshowOptions.$Transitions=a};k.$SetCaptionTransitions=function(b){I.Cb=a.v()};k.$SlidesCount=function(){return S.length};k.$CurrentIndex=function(){return r};k.$IsAutoPlaying=function(){return N};k.$IsDragging=function(){return G};k.$IsSliding=function(){return M};k.$IsMouseOver=function(){return!U};k.$LastDragSucceded=function(){return P};k.$GetOriginalWidth=function(){return a.g(v||o)};k.$GetOriginalHeight=function(){return a.j(v||o)};k.$GetScaleWidth=function(){return a.g(o)};k.$GetScaleHeight=function(){return a.j(o)};k.$SetScaleWidth=function(c){if(!v){var b=a.p(o,e);a.Mc(b,"id");a.q(b,"relative");a.i(b,0);a.h(b,0);a.P(b,"visible");v=a.p(o,e);a.Mc(v,"id");a.Ab(v,"");a.q(v,"absolute");a.i(v,0);a.h(v,0);a.J(v,a.g(o));a.L(v,a.j(o));a.qe(v,"0 0");a.s(v,b);var d=a.lb(o);a.s(o,v);a.Vc(b,d);a.m(b);a.m(v)}hb=c/a.g(v);a.te(v,hb);a.J(o,c);a.L(o,hb*a.j(v))};k.cc=function(a){var d=b.ceil(u(sb/Sb)),c=u(a-r+d);if(c>B){if(a-r>t/2)a-=t;else if(a-r<=-t/2)a+=t}else a=r+c-d;return a};m.call(this);k.$Elmt=o=a.G(o);var i=a.n({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:e,$Loop:c,$HWA:c,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:3,$HwaMode:1,$SlideDuration:500,$SlideEasing:l.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},Xb),bb=i.$SlideshowOptions,I=a.n({$Class:s},i.Te),lb=i.$BulletNavigatorOptions,mb=i.$ArrowNavigatorOptions,X=i.$ThumbnailNavigatorOptions,eb=i.$UISearchMode,v,y=a.o(o,"slides",d,eb),Z=a.o(o,"loading",d,eb)||a.kb(f),Hb=a.o(o,"navigator",d,eb),Db=a.o(o,"thumbnavigator",d,eb),dc=a.g(y),cc=a.j(y),O,S=[],nc=a.lb(y);a.f(nc,function(b){b.tagName=="DIV"&&!a.nb(b,"u")&&S.push(b)});var r=-1,pb,t=S.length,L=i.$SlideWidth||dc,K=i.$SlideHeight||cc,Pb=i.$SlideSpacing,wb=L+Pb,xb=K+Pb,Sb=i.$PlayOrientation==1?wb:xb,B=b.min(i.$DisplayPieces,t),db,w,H,vb,F,R=[],Ub,Fb,Jb,Wb,uc,N,Ob=i.$PauseOnHover,Nb=i.$SlideDuration,nb,ab,sb,Kb=B<t,T=i.$Loop&&Kb;if(!T)i.$ParkingPosition=0;if(i.$DisplayPieces>1||i.$ParkingPosition)i.$DragOrientation&=i.$PlayOrientation;var kc=i.$DragOrientation,P,U=1,M,G,Q,qb=0,rb=0,E,Y,cb,Bb,x,V,A,Lb=new gc,hb;N=i.$AutoPlay;k.Z=Xb;ac();o["jssor-slider"]=c;a.R(y,a.mc(y));a.q(y,"absolute");db=a.p(y);a.ub(a.ob(y),db,y);if(bb){Wb=bb.$ShowLink;nb=bb.$Class;ab=B==1&&t>1&&nb&&(!a.zb()||a.pb()>=8)}sb=ab||B>=t?0:i.$ParkingPosition;var tb=y,C=[],z,J,zb="mousedown",ib="mousemove",Cb="mouseup",gb,D,kb,Eb,ob;if(g.navigator.msPointerEnabled){zb="MSPointerDown";ib="MSPointerMove";Cb="MSPointerUp";gb="MSPointerCancel";if(i.$DragOrientation){var yb="none";if(i.$DragOrientation==1)yb="pan-y";else if(i.$DragOrientation==2)yb="pan-x";a.ld(tb.style,"-ms-touch-action",yb)}}else if("ontouchstart"in g||"createTouch"in f){F=c;zb="touchstart";ib="touchmove";Cb="touchend";gb="touchcancel"}V=new rc;if(ab)z=new nb(Lb,L,K,bb,F);a.s(db,V.mb);a.P(y,"hidden");J=Qb();a.yc(J,"#000");a.Ob(J,0);a.ub(tb,J,tb.firstChild);for(var jb=0;jb<S.length;jb++){var pc=S[jb],Vb=new qc(pc,jb);C.push(Vb)}a.y(Z);Bb=new sc;A=new fc(Bb,V);if(kc){a.e(y,zb,mc);a.e(f,Cb,Ab);gb&&a.e(f,gb,Ab)}Ob&=F?2:1;if(Hb&&lb){Ub=new lb.$Class(Hb,lb);R.push(Ub)}if(mb){Fb=new mb.$Class(o,mb,i.$UISearchMode);R.push(Fb)}if(Db&&X){X.$StartIndex=i.$StartIndex;Jb=new X.$Class(Db,X);R.push(Jb)}a.f(R,function(a){a.Fb(t,C,Z);a.$On(p.cb,bc)});a.e(o,"mouseout",Zb);a.e(o,"mouseover",Yb);ub();i.$ArrowKeyNavigation&&a.e(f,"keydown",function(a){if(a.keyCode==q.wd)fb(-1);else a.keyCode==q.qd&&fb(1)});k.$SetScaleWidth(k.$GetOriginalWidth());A.qb(i.$StartIndex,i.$StartIndex,0)}n.$EVT_CLICK=21;n.$EVT_DRAG_START=22;n.$EVT_DRAG_END=23;n.$EVT_SWIPE_START=24;n.$EVT_SWIPE_END=25;n.$EVT_LOAD_START=26;n.$EVT_LOAD_END=27;n.$EVT_POSITION_CHANGE=202;n.$EVT_PARK=203;n.$EVT_SLIDESHOW_START=206;n.$EVT_SLIDESHOW_END=207;n.$EVT_PROGRESS_CHANGE=208;n.$EVT_STATE_CHANGE=209;n.$EVT_ROLLBACK_START=210;n.$EVT_ROLLBACK_END=211;g.$JssorSlider$=r=n};var p={cb:1};g.$JssorBulletNavigator$=function(e,B){var g=this;m.call(g);e=a.G(e);var s,t,r,q,k=0,f,l,j,x,y,i,h,o,n,A=[],z=[];function w(a){a!=-1&&z[a].oc(a==k)}function u(a){g.c(p.cb,a*l)}g.$Elmt=e;g.Rb=function(a){if(a!=q){var d=k,c=b.floor(a/l);k=c;q=a;w(d);w(c)}};g.Gb=function(b){a.m(e,b)};var v;g.Fb=function(E){if(!v){s=b.ceil(E/l);k=0;var q=o+x,w=n+y,p=b.ceil(s/j)-1;t=o+q*(!i?p:j-1);r=n+w*(i?p:j-1);a.J(e,t);a.L(e,r);f.$AutoCenter&1&&a.h(e,(a.g(a.ob(e))-t)/2);f.$AutoCenter&2&&a.i(e,(a.j(a.ob(e))-r)/2);for(var g=0;g<s;g++){var D=a.kd();a.Tc(D,g+1);var m=a.ac(h,"NumberTemplate",D,c);a.q(m,"absolute");var B=g%(p+1);a.h(m,!i?q*B:g%j*q);a.i(m,i?w*B:b.floor(g/(p+1))*w);a.s(e,m);A[g]=m;f.$ActionMode&1&&a.e(m,"click",a.r(d,u,g));f.$ActionMode&2&&a.e(m,"mouseover",a.r(d,u,g));z[g]=a.rb(m)}v=c}};g.Z=f=a.n({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},B);h=a.o(e,"prototype");o=a.g(h);n=a.j(h);a.O(e,h);l=f.$Steps||1;j=f.$Lanes||1;x=f.$SpacingX;y=f.$SpacingY;i=f.$Orientation-1};g.$JssorArrowNavigator$=function(i,t,o){var e=this;m.call(e);var b=a.o(i,"arrowleft",d,o),f=a.o(i,"arrowright",d,o),h,j,n=a.g(i),l=a.j(i),r=a.g(b),q=a.j(b);function k(a){e.c(p.cb,a,c)}e.Rb=function(b,a,c){if(c);};e.Gb=function(c){a.m(b,c);a.m(f,c)};var s;e.Fb=function(c){if(!s){if(h.$AutoCenter&1){a.h(b,(n-r)/2);a.h(f,(n-r)/2)}if(h.$AutoCenter&2){a.i(b,(l-q)/2);a.i(f,(l-q)/2)}a.e(b,"click",a.r(d,k,-j));a.e(f,"click",a.r(d,k,j));a.rb(b);a.rb(f)}};e.Z=h=a.n({$Steps:1},t);j=h.$Steps};g.$JssorThumbnailNavigator$=function(i,A){var h=this,x,l,d,u=[],y,w,f,n,o,t,s,k,q,g,j;m.call(h);i=a.G(i);function z(n,e){var g=this,b,m,k;function o(){m.oc(l==e)}function i(){if(!q.$LastDragSucceded()){var a=(f-e%f)%f,b=q.cc((e+a)/f),c=b*f-a;h.c(p.cb,c)}}g.D=e;g.Wb=o;k=n.vd||n.dc||a.kb();g.mb=b=a.ac(j,"ThumbnailTemplate",k,c);m=a.rb(b);d.$ActionMode&1&&a.e(b,"click",i);d.$ActionMode&2&&a.e(b,"mouseover",i)}h.Rb=function(c,d,e){var a=l;l=c;a!=-1&&u[a].Wb();u[c].Wb();!e&&q.$PlayTo(q.cc(b.floor(d/f)))};h.Gb=function(b){a.m(i,b)};var v;h.Fb=function(F,D){if(!v){x=F;b.ceil(x/f);l=-1;k=b.min(k,D.length);var h=d.$Orientation&1,p=t+(t+n)*(f-1)*(1-h),m=s+(s+o)*(f-1)*h,C=p+(p+n)*(k-1)*h,A=m+(m+o)*(k-1)*(1-h);a.q(g,"absolute");a.P(g,"hidden");d.$AutoCenter&1&&a.h(g,(y-C)/2);d.$AutoCenter&2&&a.i(g,(w-A)/2);a.J(g,C);a.L(g,A);var j=[];a.f(D,function(l,e){var i=new z(l,e),d=i.mb,c=b.floor(e/f),k=e%f;a.h(d,(t+n)*k*(1-h));a.i(d,(s+o)*k*h);if(!j[c]){j[c]=a.kb();a.s(g,j[c])}a.s(j[c],d);u.push(i)});var E=a.n({$AutoPlay:e,$NaviQuitDrag:e,$SlideWidth:p,$SlideHeight:m,$SlideSpacing:n*h+o*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:3,$PlayOrientation:d.$Orientation,$DragOrientation:d.$DisableDrag?0:d.$Orientation},d);q=new r(i,E);v=c}};h.Z=d=a.n({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.g(i);w=a.j(i);g=a.o(i,"slides");j=a.o(g,"prototype");a.O(g,j);f=d.$Lanes||1;n=d.$SpacingX;o=d.$SpacingY;t=a.g(j);s=a.j(j);k=d.$DisplayPieces};function s(){j.call(this,0,0);this.Qb=a.U}})(window,document,Math,null,true,false)