(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RNiq:function(e,t,i){"use strict";i.r(t);var s=i("0iUn"),a=i("sLSF"),r=i("MI3g"),n=i("a7VT"),o=i("Tit0"),l=i("wR4/"),c=i("q1tI"),u=i.n(c),p=i("hurw"),m=(i("nOHt"),i("zbh7")),d=i("TSYQ"),f=i.n(d),h=i("vJEu"),g=i.n(h),v=u.a.createElement,w=(u.a.Component,i("TJpk")),y=i("DKzn"),b=i.n(y),N=u.a.createElement,S=function(e){return N("div",{className:f()("afg-row",b.a.row)},N("div",{className:f()("afg-col-xs-12 afg-col-sm-12",b.a.heroImage)},N("div",{className:f()(b.a.heroContainer,b.a[e.style])},N(p.a,{alt:e.desktop.description,image:e.desktop.file,imageMobile:e.mobile?e.mobile.file:void 0}))))},_=i("ucBj"),k=i.n(_),x=i("YFqc"),M=i.n(x),E=i("lXAN"),T=i("I1t5"),C=i.n(T),I=u.a.createElement;t.default=function(){return I("div",{style:{overflow:"hidden",position:"relative"}},I(w.Helmet,null,I("meta",{name:"Description",content:""}),I("title",null,"Spectrum CSS")),I(E.a,{title:"Meet Spectrum CSS"}),I("p",{className:"spectrum-Body2"},"Spectrum CSS is an open-source implementation of Spectrum, Adobe\u2019s design system. It includes components and resources to make applications more cohesive."),I(S,{desktop:{description:"Spectrum CSS Hero image",file:{contentType:"image/png",details:{image:{width:1952,height:891},size:290381},fileName:"spectrum-css_illustration_desktop@2x.png",url:"".concat("/spectrum-css","/static/images/spectrum-css_illustration_desktop@2x.png")}},mobile:{description:"Spectrum CSS Hero image",file:{contentType:"image/png",details:{image:{width:1346,height:1281},size:127178},fileName:"spectrum-css_illustration_mobile@2x.png",url:"".concat("/spectrum-css","/static/images/spectrum-css_illustration_mobile@2x.png")}},style:"Illustration"}),I("div",{className:"afg-row"},I("div",{className:f()("afg-col-xs-12","afg-col-sm-6",C.a.homecard)},I("img",{src:"".concat("/spectrum-css","/static/images/illustration_documentation.svg"),width:"100",height:"80"}),I("div",null,I(m.a,{title:"Robust documentation"}),I("p",{className:"spectrum-Body3"},"Spectrum CSS is designed to be used in partnership with Spectrum\u2019s detailed usage guidelines."),I("p",{className:"spectrum-Body3"},I(k.a,{href:"https://spectrum.corp.adobe.com/"},"View Spectrum guidelines")))),I("div",{className:f()("afg-col-xs-12","afg-col-sm-6",C.a.homecard)},I("img",{src:"".concat("/spectrum-css","/static/images/illustration_flexible.svg"),width:"100",height:"80"}),I("div",null,I(m.a,{title:"Flexible"}),I("p",{className:"spectrum-Body3"},"Our CSS is customizable, powerful, and designed to work with any javascript framework."),I("p",{className:"spectrum-Body3"},I(M.a,{href:"/get-started/",as:"".concat("/spectrum-css","/get-started/")},I("a",{className:"spectrum-Link"},"Get Started")))))),I("div",{className:"afg-row"},I("div",{className:f()("afg-col-xs-12","afg-col-sm-6",C.a.homecard)},I("img",{src:"".concat("/spectrum-css","/static/images/illustration_tested.svg"),width:"100",height:"80"}),I("div",null,I(m.a,{title:"Rigorously tested"}),I("p",{className:"spectrum-Body3"},"These individually-versioned components have been vetted to be accessible and inclusive of global audiences."))),I("div",{className:f()("afg-col-xs-12","afg-col-sm-6",C.a.homecard)},I("img",{src:"".concat("/spectrum-css","/static/images/illustration_responsive.svg"),width:"100",height:"80"}),I("div",null,I(m.a,{title:"Multi-platform support"}),I("p",{className:"spectrum-Body3"},"We support evergreen browsers (minus one version) and IE 11 for scalability and flexibility."),I("p",{className:"spectrum-Body3"},I(k.a,{href:"https://spectrum.corp.adobe.com/"},"View Spectrum guidelines"))))))}},YFqc:function(e,t,i){e.exports=i("cTJO")},cTJO:function(e,t,i){"use strict";var s=i("/HRN"),a=i("WaGi"),r=i("ZDA2"),n=i("/+P4"),o=i("N9n2"),l=i("5Uuq"),c=i("KI45");t.__esModule=!0,t.default=void 0;var u,p=c(i("LX0d")),m=i("CxY0"),d=l(i("q1tI")),f=(c(i("17x9")),c(i("nOHt"))),h=i("P5f7"),g=i("g/15");function v(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var w=new p.default,y=window.IntersectionObserver;function b(){return u||(y?u=new y(function(e){e.forEach(function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),w.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var N=function(e){function t(e){var i;return s(this,t),(i=r(this,n(t).call(this,e))).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(e){var t=null,i=null,s=null;return function(a,r){if(s&&a===t&&r===i)return s;var n=e(a,r);return t=a,i=r,s=n,n}}(function(e,t){return{href:v(e),as:t?v(t):t}}),i.linkClicked=function(e){var t=e.currentTarget,s=t.nodeName,a=t.target;if("A"!==s||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=i.formatUrls(i.props.href,i.props.as),n=r.href,o=r.as;if(function(e){var t=(0,m.parse)(e,!1,!0),i=(0,m.parse)((0,g.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===i.protocol&&t.host===i.host}(n)){var l=window.location.pathname;n=(0,m.resolve)(l,n),o=o?(0,m.resolve)(l,o):n,e.preventDefault();var c=i.props.scroll;null==c&&(c=o.indexOf("#")<0),f.default[i.props.replace?"replace":"push"](n,o,{shallow:i.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},i.p=!1!==e.prefetch,i}return o(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var i=b();return i?(i.observe(e),w.set(e,t),function(){try{i.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,i=(0,m.resolve)(e,t);f.default.prefetch(i)}}},{key:"render",value:function(){var e=this,t=this.props.children,i=this.formatUrls(this.props.href,this.props.as),s=i.href,a=i.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var r=d.Children.only(t),n={ref:function(t){e.handleRef(t),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(t):"object"===typeof r.ref&&(r.ref.current=t))},onMouseEnter:function(t){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),e.prefetch()},onClick:function(t){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(n.href=a||s),n.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(n.href=(0,h.rewriteUrlForNextExport)(n.href)),d.default.cloneElement(r,n)}}]),t}(d.Component);N.propTypes=void 0;var S=N;t.default=S},hurw:function(e,t,i){"use strict";var s=i("q1tI"),a=i.n(s),r=i("TSYQ"),n=i.n(r),o=i("Nwyk"),l=i.n(o),c=a.a.createElement;t.a=function(e){return c("div",{className:n()("responsiveImage",e.imageMobile?l.a.hasMobile:void 0,l.a.responsiveImage,e.imageStyle?l.a[e.imageStyle]:void 0),style:{minHeight:e.minHeight?e.image.details.image.height/2+"px":void 0}},c("img",{key:e.image.url,alt:"[blank]"===e.alt?"":e.alt,className:n()(l.a.desktop,l.a[e.sizeBy]),src:e.image.url+"?w="+Math.round(e.image.details.image.width/2)+"&h="+Math.round(e.image.details.image.height/2),srcSet:e.image.url+" 2x"}),e.imageMobile?c("img",{alt:"[blank]"===e.alt?"":e.alt,className:l.a.mobile,key:e.imageMobile.url,src:e.imageMobile.url+"?w="+Math.round(e.imageMobile.details.image.width/2)+"&h="+Math.round(e.imageMobile.details.image.height/2),srcSet:e.imageMobile.url+" 2x"}):void 0)}},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])}},[["vlRD",1,0,2]]]);