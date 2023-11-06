import{r as c,s as Bt,u as Ot,T as Ft,d as _t,a as x,j as r,S as tt,R as K,b as ve,_ as q,c as f,g as oe,e as Z,f as B,h as ee,i as Ut,k as $,l as re,m as Ce,n as he,M as Ee,A as Te,N as Gt}from"./index-a3cedf8d.js";import{T as Wt}from"./TryBot-a5e77400.js";import{n as le}from"./index.browser-7e542916.js";function Ht(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const qt=typeof window<"u"?c.useLayoutEffect:c.useEffect,Xt=qt;function Yt({controlled:e,default:t,name:n,state:s="value"}){const{current:o}=c.useRef(e!==void 0),[i,a]=c.useState(t),l=o?e:i,d=c.useCallback(u=>{o||a(u)},[]);return[l,d]}function we(e){const t=c.useRef(e);return Xt(()=>{t.current=e}),c.useCallback((...n)=>(0,t.current)(...n),[])}function Ke(...e){return c.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Ht(n,t)})},e)}let $e=!0,Qe=!1,dt;const Kt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Qt(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&Kt[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Jt(e){e.metaKey||e.altKey||e.ctrlKey||($e=!0)}function Ge(){$e=!1}function Zt(){this.visibilityState==="hidden"&&Qe&&($e=!0)}function en(e){e.addEventListener("keydown",Jt,!0),e.addEventListener("mousedown",Ge,!0),e.addEventListener("pointerdown",Ge,!0),e.addEventListener("touchstart",Ge,!0),e.addEventListener("visibilitychange",Zt,!0)}function tn(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return $e||Qt(t)}function nn(){const e=c.useCallback(o=>{o!=null&&en(o.ownerDocument)},[]),t=c.useRef(!1);function n(){return t.current?(Qe=!0,window.clearTimeout(dt),dt=window.setTimeout(()=>{Qe=!1},100),t.current=!1,!0):!1}function s(o){return tn(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:s,onBlur:n,ref:e}}function on(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Bt(t)}var nt=function(){var t=on.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function vt(){const e=Ot(_t);return e[Ft]||e}const rn=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},ut=rn,sn=x.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`,an=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,ln=x.span`
  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  margin-right: 8px;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 36px;
    line-height: 1.55;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 36px;
    line-height: 1.55;
  }
  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 40px;
    line-height: 2;
  }

  @media (min-width: 1920px) {
    font-size: 40px;
    line-height: 2;
  }
`,cn=x.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    flex-direction: row;
    margin-top: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    flex-direction: row;
    margin-top: 80px;
  }

  @media (min-width: 1920px) {
    flex-direction: row;
    margin-top: 80px;
  }
`,dn=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,un=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`,pn=x.img`
  width: 80px;
  height: 80px;
`,hn=x.h3`
  font-size: 20px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.4;
  margin-bottom: 16px;
  color: var(--white);

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    line-height: 1.16;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 24px;
    line-height: 1.16;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 24px;
    line-height: 1.16;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.16;
  }
`,mn=x.p`
  font-size: 16px;
  font-weight: var(--regular-font-weight);
  line-height: 1.5;
  color: var(--white);
`,fn="/EVA-I/assets/Vector-d1759c3b.svg",xn="/EVA-I/assets/smile-671a11d2.svg",gn="/EVA-I/assets/clock-99f28590.svg",bn=[{id:1,icon:`${fn}`,alt:"icon-1",title:"Efficiency Boost",text:"Revolutionize workflows by automating intricate tasks, pavingthe way for unparalleled time and energy savings."},{id:2,icon:`${xn}`,alt:"icon-2",title:"Customer Delight",text:"Elevate customer interactions with personalized, prompt responses, cultivating enduring satisfaction and loyalty."},{id:3,icon:`${gn}`,alt:"icon-3",title:"Time Saver",text:"Get back precious hours by effortlessly entrusting routine tasks to your tireless AI assistant, unlocking a surge in productivity."}],vn=()=>r.jsx("section",{children:r.jsx("div",{className:"container",children:r.jsxs(sn,{children:[r.jsxs(an,{children:[r.jsx(ln,{children:"Supercharge"}),r.jsx(tt,{title:"Your Business"})]}),r.jsx(cn,{children:bn.map(e=>r.jsxs(dn,{children:[r.jsx(un,{children:r.jsx(pn,{src:e.icon,alt:e.alt})}),r.jsx(hn,{children:e.title}),r.jsx(mn,{children:e.text})]},e.id))})]})})}),wn=x.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-top: 80px;
  }

  @media (min-width: 1920px) {
    margin-top: 80px;
  }
`,pt=x.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  background: var(--primary-gradient, linear-gradient(90deg, #ED3984 0%, #ED3984 1.56%, #7452C8 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 0.93;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 0.93;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 0.93;
  }

  @media (min-width: 1920px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 0.93;
  }
`,yn=x.li`
  display: flex;
  justify-content: center;
  align-items: center;
`,En=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Cn=x.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
  color: var(--white);

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 60px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 28px;
    line-height: 60px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 28px;
    line-height: 60px;
    margin-bottom: 40px;
  }

  @media (min-width: 1920px) {
    font-size: 28px;
    line-height: 60px;
    margin-bottom: 40px;
  }
`,Rn=x.div`
  display: flex;
  align-items:center;
  gap: 16px;
`,Tn=x.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: white;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1920px) {
    width: 80px;
    height: 80px;
  }
`,$n=x.h4`
  font-size: 20px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.4;
  margin-bottom: 4px;
  color: var(--white);

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    line-height: 1.16;
    margin-bottom: 8px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 24px;
    line-height: 1.16;
    margin-bottom: 8px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 24px;
    line-height: 1.16;
    margin-bottom: 8px;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.16;
    margin-bottom: 8px;
  }
`,jn=x.p`
  font-size: 16px;
  line-height: 1.5;
  color: var(--white);
`,kn="/EVA-I/assets/user-5e7bdc62.svg",Sn=()=>r.jsx("section",{children:r.jsxs("div",{className:"container",children:[r.jsx(tt,{title:"What they say about EVA-I?"}),r.jsx(wn,{children:r.jsx(yn,{children:r.jsxs(En,{children:[r.jsxs(Cn,{children:[r.jsx(pt,{children:"“ "}),"Using EVA-I has been an absolute game-changer for my business. Its 'Free Your Team from FAQs' feature lightened support load, letting us focus on key tasks. 'Helps Customers Track Their Precious Orders' impressed me—automated alerts saved time and improved customer experience.",r.jsx(pt,{children:" ”"})]}),r.jsxs(Rn,{children:[r.jsx(Tn,{children:r.jsx("img",{src:kn,alt:"img"})}),r.jsxs("div",{children:[r.jsx($n,{children:"Andrii"}),r.jsx(jn,{children:"Online store owner"})]})]})]})})})]})});var b={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var it=Symbol.for("react.element"),ot=Symbol.for("react.portal"),je=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),Ie=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),In=Symbol.for("react.server_context"),Me=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),An=Symbol.for("react.offscreen"),wt;wt=Symbol.for("react.module.reference");function G(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case it:switch(e=e.type,e){case je:case Se:case ke:case ze:case Ve:return e;default:switch(e=e&&e.$$typeof,e){case In:case Ae:case Me:case De:case Ne:case Ie:return e;default:return t}}case ot:return t}}}b.ContextConsumer=Ae;b.ContextProvider=Ie;b.Element=it;b.ForwardRef=Me;b.Fragment=je;b.Lazy=De;b.Memo=Ne;b.Portal=ot;b.Profiler=Se;b.StrictMode=ke;b.Suspense=ze;b.SuspenseList=Ve;b.isAsyncMode=function(){return!1};b.isConcurrentMode=function(){return!1};b.isContextConsumer=function(e){return G(e)===Ae};b.isContextProvider=function(e){return G(e)===Ie};b.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===it};b.isForwardRef=function(e){return G(e)===Me};b.isFragment=function(e){return G(e)===je};b.isLazy=function(e){return G(e)===De};b.isMemo=function(e){return G(e)===Ne};b.isPortal=function(e){return G(e)===ot};b.isProfiler=function(e){return G(e)===Se};b.isStrictMode=function(e){return G(e)===ke};b.isSuspense=function(e){return G(e)===ze};b.isSuspenseList=function(e){return G(e)===Ve};b.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===je||e===Se||e===ke||e===ze||e===Ve||e===An||typeof e=="object"&&e!==null&&(e.$$typeof===De||e.$$typeof===Ne||e.$$typeof===Ie||e.$$typeof===Ae||e.$$typeof===Me||e.$$typeof===wt||e.getModuleId!==void 0)};b.typeOf=G;function Je(e,t){return Je=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,o){return s.__proto__=o,s},Je(e,t)}function yt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Je(e,t)}const ht={disabled:!1},Re=K.createContext(null);var Mn=function(t){return t.scrollTop},fe="unmounted",te="exited",ne="entering",ue="entered",Ze="exiting",Q=function(e){yt(t,e);function t(s,o){var i;i=e.call(this,s,o)||this;var a=o,l=a&&!a.isMounting?s.enter:s.appear,d;return i.appearStatus=null,s.in?l?(d=te,i.appearStatus=ne):d=ue:s.unmountOnExit||s.mountOnEnter?d=fe:d=te,i.state={status:d},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===fe?{status:te}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==ne&&a!==ue&&(i=ne):(a===ne||a===ue)&&(i=Ze)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,l;return i=a=l=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,l=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:l}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===ne){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:ve.findDOMNode(this);a&&Mn(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===te&&this.setState({status:fe})},n.performEnter=function(o){var i=this,a=this.props.enter,l=this.context?this.context.isMounting:o,d=this.props.nodeRef?[l]:[ve.findDOMNode(this),l],u=d[0],h=d[1],v=this.getTimeouts(),y=l?v.appear:v.enter;if(!o&&!a||ht.disabled){this.safeSetState({status:ue},function(){i.props.onEntered(u)});return}this.props.onEnter(u,h),this.safeSetState({status:ne},function(){i.props.onEntering(u,h),i.onTransitionEnd(y,function(){i.safeSetState({status:ue},function(){i.props.onEntered(u,h)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),l=this.props.nodeRef?void 0:ve.findDOMNode(this);if(!i||ht.disabled){this.safeSetState({status:te},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Ze},function(){o.props.onExiting(l),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:te},function(){o.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(l){a&&(a=!1,i.nextCallback=null,o(l))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:ve.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!a||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=d[0],h=d[1];this.props.addEndListener(u,h)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===fe)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var l=q(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return K.createElement(Re.Provider,{value:null},typeof a=="function"?a(o,l):K.cloneElement(K.Children.only(a),l))},t}(K.Component);Q.contextType=Re;Q.propTypes={};function ce(){}Q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ce,onEntering:ce,onEntered:ce,onExit:ce,onExiting:ce,onExited:ce};Q.UNMOUNTED=fe;Q.EXITED=te;Q.ENTERING=ne;Q.ENTERED=ue;Q.EXITING=Ze;const zn=Q;function Vn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rt(e,t){var n=function(i){return t&&c.isValidElement(i)?t(i):i},s=Object.create(null);return e&&c.Children.map(e,function(o){return o}).forEach(function(o){s[o.key]=n(o)}),s}function Nn(e,t){e=e||{},t=t||{};function n(h){return h in t?t[h]:e[h]}var s=Object.create(null),o=[];for(var i in e)i in t?o.length&&(s[i]=o,o=[]):o.push(i);var a,l={};for(var d in t){if(s[d])for(a=0;a<s[d].length;a++){var u=s[d][a];l[s[d][a]]=n(u)}l[d]=n(d)}for(a=0;a<o.length;a++)l[o[a]]=n(o[a]);return l}function ie(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Dn(e,t){return rt(e.children,function(n){return c.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:ie(n,"appear",e),enter:ie(n,"enter",e),exit:ie(n,"exit",e)})})}function Pn(e,t,n){var s=rt(e.children),o=Nn(t,s);return Object.keys(o).forEach(function(i){var a=o[i];if(c.isValidElement(a)){var l=i in t,d=i in s,u=t[i],h=c.isValidElement(u)&&!u.props.in;d&&(!l||h)?o[i]=c.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:ie(a,"exit",e),enter:ie(a,"enter",e)}):!d&&l&&!h?o[i]=c.cloneElement(a,{in:!1}):d&&l&&c.isValidElement(u)&&(o[i]=c.cloneElement(a,{onExited:n.bind(null,a),in:u.props.in,exit:ie(a,"exit",e),enter:ie(a,"enter",e)}))}}),o}var Ln=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Bn={component:"div",childFactory:function(t){return t}},st=function(e){yt(t,e);function t(s,o){var i;i=e.call(this,s,o)||this;var a=i.handleExited.bind(Vn(i));return i.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var a=i.children,l=i.handleExited,d=i.firstRender;return{children:d?Dn(o,l):Pn(o,a,l),firstRender:!1}},n.handleExited=function(o,i){var a=rt(this.props.children);o.key in a||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(l){var d=f({},l.children);return delete d[o.key],{children:d}}))},n.render=function(){var o=this.props,i=o.component,a=o.childFactory,l=q(o,["component","childFactory"]),d=this.state.contextValue,u=Ln(this.state.children).map(a);return delete l.appear,delete l.enter,delete l.exit,i===null?K.createElement(Re.Provider,{value:d},u):K.createElement(Re.Provider,{value:d},K.createElement(i,l,u))},t}(K.Component);st.propTypes={};st.defaultProps=Bn;const On=st;function mt(e,t){var n,s;const{timeout:o,easing:i,style:a={}}=e;return{duration:(n=a.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(s=a.transitionTimingFunction)!=null?s:typeof i=="object"?i[t.mode]:i,delay:a.transitionDelay}}function Fn(e){return oe("MuiCollapse",e)}Z("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const _n=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Un=e=>{const{orientation:t,classes:n}=e,s={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return re(s,Fn,n)},Gn=B("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.state==="entered"&&t.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>f({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&f({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),Wn=B("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>f({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Hn=B("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>f({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Et=c.forwardRef(function(t,n){const s=ee({props:t,name:"MuiCollapse"}),{addEndListener:o,children:i,className:a,collapsedSize:l="0px",component:d,easing:u,in:h,onEnter:v,onEntered:y,onEntering:C,onExit:E,onExited:w,onExiting:j,orientation:S="vertical",style:L,timeout:k=Ut.standard,TransitionComponent:g=zn}=s,I=q(s,_n),R=f({},s,{orientation:S,collapsedSize:l}),A=Un(R),X=vt(),J=c.useRef(),T=c.useRef(null),O=c.useRef(),z=typeof l=="number"?`${l}px`:l,V=S==="horizontal",N=V?"width":"height";c.useEffect(()=>()=>{clearTimeout(J.current)},[]);const F=c.useRef(null),W=Ke(n,F),_=m=>P=>{if(m){const H=F.current;P===void 0?m(H):m(H,P)}},D=()=>T.current?T.current[V?"clientWidth":"clientHeight"]:0,Le=_((m,P)=>{T.current&&V&&(T.current.style.position="absolute"),m.style[N]=z,v&&v(m,P)}),xe=_((m,P)=>{const H=D();T.current&&V&&(T.current.style.position="");const{duration:M,easing:ae}=mt({style:L,timeout:k,easing:u},{mode:"enter"});if(k==="auto"){const ge=X.transitions.getAutoHeightDuration(H);m.style.transitionDuration=`${ge}ms`,O.current=ge}else m.style.transitionDuration=typeof M=="string"?M:`${M}ms`;m.style[N]=`${H}px`,m.style.transitionTimingFunction=ae,C&&C(m,P)}),Be=_((m,P)=>{m.style[N]="auto",y&&y(m,P)}),Oe=_(m=>{m.style[N]=`${D()}px`,E&&E(m)}),Fe=_(w),Y=_(m=>{const P=D(),{duration:H,easing:M}=mt({style:L,timeout:k,easing:u},{mode:"exit"});if(k==="auto"){const ae=X.transitions.getAutoHeightDuration(P);m.style.transitionDuration=`${ae}ms`,O.current=ae}else m.style.transitionDuration=typeof H=="string"?H:`${H}ms`;m.style[N]=z,m.style.transitionTimingFunction=M,j&&j(m)}),se=m=>{k==="auto"&&(J.current=setTimeout(m,O.current||0)),o&&o(F.current,m)};return r.jsx(g,f({in:h,onEnter:Le,onEntered:Be,onEntering:xe,onExit:Oe,onExited:Fe,onExiting:Y,addEndListener:se,nodeRef:F,timeout:k==="auto"?null:k},I,{children:(m,P)=>r.jsx(Gn,f({as:d,className:$(A.root,a,{entered:A.entered,exited:!h&&z==="0px"&&A.hidden}[m]),style:f({[V?"minWidth":"minHeight"]:z},L),ownerState:f({},R,{state:m}),ref:W},P,{children:r.jsx(Wn,{ownerState:f({},R,{state:m}),className:A.wrapper,ref:T,children:r.jsx(Hn,{ownerState:f({},R,{state:m}),className:A.wrapperInner,children:i})})}))}))});Et.muiSupportAuto=!0;const qn=Et;function Xn(e){return oe("MuiPaper",e)}Z("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Yn=["className","component","elevation","square","variant"],Kn=e=>{const{square:t,elevation:n,variant:s,classes:o}=e,i={root:["root",s,!t&&"rounded",s==="elevation"&&`elevation${n}`]};return re(i,Xn,o)},Qn=B("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return f({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&f({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ce("#fff",ut(t.elevation))}, ${Ce("#fff",ut(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Jn=c.forwardRef(function(t,n){const s=ee({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:a=1,square:l=!1,variant:d="elevation"}=s,u=q(s,Yn),h=f({},s,{component:i,elevation:a,square:l,variant:d}),v=Kn(h);return r.jsx(Qn,f({as:i,ownerState:h,className:$(v.root,o),ref:n},u))}),Zn=Jn,ei=c.createContext({}),Ct=ei;function ti(e){return oe("MuiAccordion",e)}const ni=Z("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),ye=ni,ii=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],oi=e=>{const{classes:t,square:n,expanded:s,disabled:o,disableGutters:i}=e;return re({root:["root",!n&&"rounded",s&&"expanded",o&&"disabled",!i&&"gutters"],region:["region"]},ti,t)},ri=B(Zn,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${ye.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${ye.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${ye.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:t})=>f({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${ye.expanded}`]:{margin:"16px 0"}})),si=c.forwardRef(function(t,n){const s=ee({props:t,name:"MuiAccordion"}),{children:o,className:i,defaultExpanded:a=!1,disabled:l=!1,disableGutters:d=!1,expanded:u,onChange:h,square:v=!1,TransitionComponent:y=qn,TransitionProps:C}=s,E=q(s,ii),[w,j]=Yt({controlled:u,default:a,name:"Accordion",state:"expanded"}),S=c.useCallback(A=>{j(!w),h&&h(A,!w)},[w,h,j]),[L,...k]=c.Children.toArray(o),g=c.useMemo(()=>({expanded:w,disabled:l,disableGutters:d,toggle:S}),[w,l,d,S]),I=f({},s,{square:v,disabled:l,disableGutters:d,expanded:w}),R=oi(I);return r.jsxs(ri,f({className:$(R.root,i),ref:n,ownerState:I,square:v},E,{children:[r.jsx(Ct.Provider,{value:g,children:L}),r.jsx(y,f({in:w,timeout:"auto"},C,{children:r.jsx("div",{"aria-labelledby":L.props.id,id:L.props["aria-controls"],role:"region",className:R.region,children:k})}))]}))}),ai=si;function li(e){const{className:t,classes:n,pulsate:s=!1,rippleX:o,rippleY:i,rippleSize:a,in:l,onExited:d,timeout:u}=e,[h,v]=c.useState(!1),y=$(t,n.ripple,n.rippleVisible,s&&n.ripplePulsate),C={width:a,height:a,top:-(a/2)+i,left:-(a/2)+o},E=$(n.child,h&&n.childLeaving,s&&n.childPulsate);return!l&&!h&&v(!0),c.useEffect(()=>{if(!l&&d!=null){const w=setTimeout(d,u);return()=>{clearTimeout(w)}}},[d,l,u]),r.jsx("span",{className:y,style:C,children:r.jsx("span",{className:E})})}const ci=Z("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),U=ci,di=["center","classes","className"];let Pe=e=>e,ft,xt,gt,bt;const et=550,ui=80,pi=nt(ft||(ft=Pe`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),hi=nt(xt||(xt=Pe`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),mi=nt(gt||(gt=Pe`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),fi=B("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),xi=B(li,{name:"MuiTouchRipple",slot:"Ripple"})(bt||(bt=Pe`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),U.rippleVisible,pi,et,({theme:e})=>e.transitions.easing.easeInOut,U.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,U.child,U.childLeaving,hi,et,({theme:e})=>e.transitions.easing.easeInOut,U.childPulsate,mi,({theme:e})=>e.transitions.easing.easeInOut),gi=c.forwardRef(function(t,n){const s=ee({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:a}=s,l=q(s,di),[d,u]=c.useState([]),h=c.useRef(0),v=c.useRef(null);c.useEffect(()=>{v.current&&(v.current(),v.current=null)},[d]);const y=c.useRef(!1),C=c.useRef(0),E=c.useRef(null),w=c.useRef(null);c.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const j=c.useCallback(g=>{const{pulsate:I,rippleX:R,rippleY:A,rippleSize:X,cb:J}=g;u(T=>[...T,r.jsx(xi,{classes:{ripple:$(i.ripple,U.ripple),rippleVisible:$(i.rippleVisible,U.rippleVisible),ripplePulsate:$(i.ripplePulsate,U.ripplePulsate),child:$(i.child,U.child),childLeaving:$(i.childLeaving,U.childLeaving),childPulsate:$(i.childPulsate,U.childPulsate)},timeout:et,pulsate:I,rippleX:R,rippleY:A,rippleSize:X},h.current)]),h.current+=1,v.current=J},[i]),S=c.useCallback((g={},I={},R=()=>{})=>{const{pulsate:A=!1,center:X=o||I.pulsate,fakeElement:J=!1}=I;if((g==null?void 0:g.type)==="mousedown"&&y.current){y.current=!1;return}(g==null?void 0:g.type)==="touchstart"&&(y.current=!0);const T=J?null:w.current,O=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let z,V,N;if(X||g===void 0||g.clientX===0&&g.clientY===0||!g.clientX&&!g.touches)z=Math.round(O.width/2),V=Math.round(O.height/2);else{const{clientX:F,clientY:W}=g.touches&&g.touches.length>0?g.touches[0]:g;z=Math.round(F-O.left),V=Math.round(W-O.top)}if(X)N=Math.sqrt((2*O.width**2+O.height**2)/3),N%2===0&&(N+=1);else{const F=Math.max(Math.abs((T?T.clientWidth:0)-z),z)*2+2,W=Math.max(Math.abs((T?T.clientHeight:0)-V),V)*2+2;N=Math.sqrt(F**2+W**2)}g!=null&&g.touches?E.current===null&&(E.current=()=>{j({pulsate:A,rippleX:z,rippleY:V,rippleSize:N,cb:R})},C.current=setTimeout(()=>{E.current&&(E.current(),E.current=null)},ui)):j({pulsate:A,rippleX:z,rippleY:V,rippleSize:N,cb:R})},[o,j]),L=c.useCallback(()=>{S({},{pulsate:!0})},[S]),k=c.useCallback((g,I)=>{if(clearTimeout(C.current),(g==null?void 0:g.type)==="touchend"&&E.current){E.current(),E.current=null,C.current=setTimeout(()=>{k(g,I)});return}E.current=null,u(R=>R.length>0?R.slice(1):R),v.current=I},[]);return c.useImperativeHandle(n,()=>({pulsate:L,start:S,stop:k}),[L,S,k]),r.jsx(fi,f({className:$(U.root,i.root,a),ref:w},l,{children:r.jsx(On,{component:null,exit:!0,children:d})}))}),bi=gi;function vi(e){return oe("MuiButtonBase",e)}const wi=Z("MuiButtonBase",["root","disabled","focusVisible"]),yi=wi,Ei=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Ci=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:s,classes:o}=e,a=re({root:["root",t&&"disabled",n&&"focusVisible"]},vi,o);return n&&s&&(a.root+=` ${s}`),a},Ri=B("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${yi.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ti=c.forwardRef(function(t,n){const s=ee({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:a,className:l,component:d="button",disabled:u=!1,disableRipple:h=!1,disableTouchRipple:v=!1,focusRipple:y=!1,LinkComponent:C="a",onBlur:E,onClick:w,onContextMenu:j,onDragLeave:S,onFocus:L,onFocusVisible:k,onKeyDown:g,onKeyUp:I,onMouseDown:R,onMouseLeave:A,onMouseUp:X,onTouchEnd:J,onTouchMove:T,onTouchStart:O,tabIndex:z=0,TouchRippleProps:V,touchRippleRef:N,type:F}=s,W=q(s,Ei),_=c.useRef(null),D=c.useRef(null),Le=Ke(D,N),{isFocusVisibleRef:xe,onFocus:Be,onBlur:Oe,ref:Fe}=nn(),[Y,se]=c.useState(!1);u&&Y&&se(!1),c.useImperativeHandle(o,()=>({focusVisible:()=>{se(!0),_.current.focus()}}),[]);const[m,P]=c.useState(!1);c.useEffect(()=>{P(!0)},[]);const H=m&&!h&&!u;c.useEffect(()=>{Y&&y&&!h&&m&&D.current.pulsate()},[h,y,Y,m]);function M(p,lt,Lt=v){return we(ct=>(lt&&lt(ct),!Lt&&D.current&&D.current[p](ct),!0))}const ae=M("start",R),ge=M("stop",j),$t=M("stop",S),jt=M("stop",X),kt=M("stop",p=>{Y&&p.preventDefault(),A&&A(p)}),St=M("start",O),It=M("stop",J),At=M("stop",T),Mt=M("stop",p=>{Oe(p),xe.current===!1&&se(!1),E&&E(p)},!1),zt=we(p=>{_.current||(_.current=p.currentTarget),Be(p),xe.current===!0&&(se(!0),k&&k(p)),L&&L(p)}),_e=()=>{const p=_.current;return d&&d!=="button"&&!(p.tagName==="A"&&p.href)},Ue=c.useRef(!1),Vt=we(p=>{y&&!Ue.current&&Y&&D.current&&p.key===" "&&(Ue.current=!0,D.current.stop(p,()=>{D.current.start(p)})),p.target===p.currentTarget&&_e()&&p.key===" "&&p.preventDefault(),g&&g(p),p.target===p.currentTarget&&_e()&&p.key==="Enter"&&!u&&(p.preventDefault(),w&&w(p))}),Nt=we(p=>{y&&p.key===" "&&D.current&&Y&&!p.defaultPrevented&&(Ue.current=!1,D.current.stop(p,()=>{D.current.pulsate(p)})),I&&I(p),w&&p.target===p.currentTarget&&_e()&&p.key===" "&&!p.defaultPrevented&&w(p)});let be=d;be==="button"&&(W.href||W.to)&&(be=C);const me={};be==="button"?(me.type=F===void 0?"button":F,me.disabled=u):(!W.href&&!W.to&&(me.role="button"),u&&(me["aria-disabled"]=u));const Dt=Ke(n,Fe,_),at=f({},s,{centerRipple:i,component:d,disabled:u,disableRipple:h,disableTouchRipple:v,focusRipple:y,tabIndex:z,focusVisible:Y}),Pt=Ci(at);return r.jsxs(Ri,f({as:be,className:$(Pt.root,l),ownerState:at,onBlur:Mt,onClick:w,onContextMenu:ge,onFocus:zt,onKeyDown:Vt,onKeyUp:Nt,onMouseDown:ae,onMouseLeave:kt,onMouseUp:jt,onDragLeave:$t,onTouchEnd:It,onTouchMove:At,onTouchStart:St,ref:Dt,tabIndex:u?-1:z,type:F},me,W,{children:[a,H?r.jsx(bi,f({ref:Le,center:i},V)):null]}))}),Rt=Ti;function $i(e){return oe("MuiAccordionSummary",e)}const ji=Z("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),pe=ji,ki=["children","className","expandIcon","focusVisibleClassName","onClick"],Si=e=>{const{classes:t,expanded:n,disabled:s,disableGutters:o}=e;return re({root:["root",n&&"expanded",s&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},$i,t)},Ii=B(Rt,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>{const n={duration:e.transitions.duration.shortest};return f({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${pe.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${pe.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${pe.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${pe.expanded}`]:{minHeight:64}})}),Ai=B("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e,ownerState:t})=>f({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${pe.expanded}`]:{margin:"20px 0"}})),Mi=B("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${pe.expanded}`]:{transform:"rotate(180deg)"}})),zi=c.forwardRef(function(t,n){const s=ee({props:t,name:"MuiAccordionSummary"}),{children:o,className:i,expandIcon:a,focusVisibleClassName:l,onClick:d}=s,u=q(s,ki),{disabled:h=!1,disableGutters:v,expanded:y,toggle:C}=c.useContext(Ct),E=S=>{C&&C(S),d&&d(S)},w=f({},s,{expanded:y,disabled:h,disableGutters:v}),j=Si(w);return r.jsxs(Ii,f({focusRipple:!1,disableRipple:!0,disabled:h,component:"div","aria-expanded":y,className:$(j.root,i),focusVisibleClassName:$(j.focusVisible,l),onClick:E,ref:n,ownerState:w},u,{children:[r.jsx(Ai,{className:j.content,ownerState:w,children:o}),a&&r.jsx(Mi,{className:j.expandIconWrapper,ownerState:w,children:a})]}))}),Vi=zi;function Ni(e){return oe("MuiAccordionDetails",e)}Z("MuiAccordionDetails",["root"]);const Di=["className"],Pi=e=>{const{classes:t}=e;return re({root:["root"]},Ni,t)},Li=B("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Bi=c.forwardRef(function(t,n){const s=ee({props:t,name:"MuiAccordionDetails"}),{className:o}=s,i=q(s,Di),a=s,l=Pi(a);return r.jsx(Li,f({className:$(l.root,o),ref:n,ownerState:a},i))}),Oi=Bi,Fi="/EVA-I/assets/plus-43d933e0.svg",_i="/EVA-I/assets/minus-2b987ba8.svg";function Ui(e){return oe("MuiIconButton",e)}const Gi=Z("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Wi=Gi,Hi=["edge","children","className","color","disabled","disableFocusRipple","size"],qi=e=>{const{classes:t,disabled:n,color:s,edge:o,size:i}=e,a={root:["root",n&&"disabled",s!=="default"&&`color${he(s)}`,o&&`edge${he(o)}`,`size${he(i)}`]};return re(a,Ui,t)},Xi=B(Rt,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${he(n.color)}`],n.edge&&t[`edge${he(n.edge)}`],t[`size${he(n.size)}`]]}})(({theme:e,ownerState:t})=>f({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Ce(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var n;const s=(n=(e.vars||e).palette)==null?void 0:n[t.color];return f({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&f({color:s==null?void 0:s.main},!t.disableRipple&&{"&:hover":f({},s&&{backgroundColor:e.vars?`rgba(${s.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ce(s.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Wi.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),Yi=c.forwardRef(function(t,n){const s=ee({props:t,name:"MuiIconButton"}),{edge:o=!1,children:i,className:a,color:l="default",disabled:d=!1,disableFocusRipple:u=!1,size:h="medium"}=s,v=q(s,Hi),y=f({},s,{edge:o,color:l,disabled:d,disableFocusRipple:u,size:h}),C=qi(y);return r.jsx(Xi,f({className:$(C.root,a),centerRipple:!0,focusRipple:!u,disabled:d,ref:n,ownerState:y},v,{children:i}))}),Ki=Yi,Qi=x.ul`
  margin-top: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-top: 80px;
  }

  @media (min-width: 1920px) {
    margin-top: 80px;
  }
`,Ji=x.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`,Zi=()=>r.jsxs(Ki,{sx:{".collapsIconWrapper":{display:"flex",justifyContent:"end",alignItems:"center"},".Mui-expanded & > .collapsIconWrapper":{display:"none"},".expandIconWrapper":{display:"none"},".Mui-expanded & > .expandIconWrapper":{display:"flex",justifyContent:"center",alignItems:"center"}},children:[r.jsx("div",{className:"expandIconWrapper",children:r.jsx("img",{src:_i,alt:"Close FAQ"})}),r.jsx("div",{className:"collapsIconWrapper",children:r.jsx("img",{src:Fi,alt:"Open FAQ"})})]}),eo={boxShadow:"none",background:"var(--dark)","&:first-of-type, &:last-of-type":{borderRadius:"12px",color:"var(--white)",backgroundColor:"transparent",border:"1px solid var(--primary-purple)",transition:"box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{boxShadow:" 0px 0px 15px 2px var(--primary-purple)"}},"&:before":{content:"none"}},to=[{ariaControls:"panel1a-content",id:"panel1a-header",title:"How does EVA-I work? ",accordionDetails:"EVA-I operates through advanced AI technology. It employs natural language processing and machine learning algorithms to understand user input. When a user interacts with EVA-I, the AI analyzes their query, processes it, and generates a relevant response. This enables EVA-I to provide accurate information, assist with tasks, and engage in meaningful conversations. In essence, EVA-I functions as a virtual assistant, using cutting-edge AI techniques to assist users, answer questions, and provide valuable support to businesses."},{ariaControls:"panel2a-content",id:"panel2a-header",title:"How does EVA-I handle customer data and privacy? ",accordionDetails:"EVA-I is designed with a strong commitment to data privacy and security, employing measures that align with industry best practices and regulatory requirements."},{ariaControls:"panel3a-content",id:"panel3a-header",title:"Are there customization options available for the AI's responses? ",accordionDetails:"EVA-I offers extensive response customization, allowing you to mold its answers to match your brand's voice. Customize templates, incorporate industry terms, and provide contextual guidance for tailored interactions that reflect your business uniquely."},{ariaControls:"panel4a-content",id:"panel4a-header",title:"What industries is EVA-I most suited for? ",accordionDetails:"EVA-I suits a variety of industries, excelling in e-commerce, customer service, healthcare, hospitality, finance, technology, education, and retail. Its adaptability enhances engagement, automates tasks, and provides efficient support."},{ariaControls:"panel5a-content",id:"panel5a-header",title:"Is there a free trial or demo available? ",accordionDetails:"EVA-I offers a free trial period, allowing you to experience its capabilities firsthand. You can explore its features, see how it integrates with your business, and evaluate its benefits before making a commitment. Don't miss the chance to discover how EVA-I can elevate your operations and customer interactions."}],no=()=>{const e=vt();return r.jsx("section",{children:r.jsxs("div",{className:"container",children:[r.jsx(tt,{title:"Frequently Asked Questions"}),r.jsx(Qi,{children:to.map(t=>r.jsx(Ji,{tabIndex:0,children:r.jsxs(ai,{sx:eo,children:[r.jsx(Vi,{expandIcon:r.jsx(Zi,{}),"aria-controls":t.ariaControls,id:t.id,sx:{padding:"16px 24px",fontSize:"20px",fontWeight:600,lineHeight:1.4,[e.breakpoints.between("sm","xl")]:{padding:"32px",fontSize:"32px",lineHeight:1.25},[e.breakpoints.up("xl")]:{padding:"32px",fontSize:"32px",lineHeight:1.25}},children:r.jsx("p",{children:t.title})}),r.jsx(Oi,{sx:{padding:"16px 24px",fontSize:"16px",lineHeight:"1.5",[e.breakpoints.between("sm","xl")]:{padding:"32px"},[e.breakpoints.up("xl")]:{padding:"32px"}},children:r.jsx("p",{children:t.accordionDetails})})]})},t.id))})]})})},io="/EVA-I/assets/Group581-680e8ac9.svg",oo="/EVA-I/assets/Group583-57475ce7.svg",ro="/EVA-I/assets/Group585-2e0ac7ba.svg",so="/EVA-I/assets/Group581-70a22de6.svg",ao="/EVA-I/assets/Group583-27b9b7f3.svg",lo="/EVA-I/assets/Group585-b8c0a800.svg",co="/EVA-I/assets/Group581-746b44e2.svg",uo="/EVA-I/assets/Group583-626a1cdf.svg",po="/EVA-I/assets/Group585-76ac868e.svg",ho="/EVA-I/assets/Group581-01234d2f.svg",mo="/EVA-I/assets/Group583-9afefe12.svg",fo="/EVA-I/assets/Group585-0bb5718d.svg",xo="/EVA-I/assets/Group581-c06f67aa.svg",go="/EVA-I/assets/Group583-6ba1f07a.svg",bo="/EVA-I/assets/Group585-9559ee71.svg",vo=x.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    gap: 120px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    gap: 120px;
  }

  @media (min-width: 1920px) {
    gap: 120px;
  }
`,We=x.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    flex-direction: row;
  }

  @media (min-width: 1920px) {
    flex-direction: row;
  }
`,He=x.div`
  /* width: 406px; */
  width: auto;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 515px;
    order: 1;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    width: 600px;
    order: 1;
  }

  @media (min-width: 1920px) {
    width: 700px;
    order: 1;
  }
`,qe=x.h3`
  font-size: 24px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.33;
  margin-bottom: 20px;
  color: var(--white);

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 32px;
    line-height: 1.25;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 32px;
    line-height: 1.25;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 32px;
    line-height: 1.25;
  }

  @media (min-width: 1920px) {
    font-size: 32px;
    line-height: 1.25;
  }
`,Xe=x.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 32px;
  color: var(--white);

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-bottom: 60px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 60px;
  }
`,Ye=x.div`
  display: flex;
  /* width: 515px; */
  width: auto;
  height: 142px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 312px;
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 515px;
    height: 320px;
    margin-bottom: 0;
    order: 2;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    width: 600px;
    height: 320px;
    margin-bottom: 0;
    order: 2;
  }

  @media (min-width: 1920px) {
    width: 700px;
    height: 320px;
    margin-bottom: 0;
    order: 2;
  }
`,wo=x.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${io});

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${so});
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${co});
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url(${ho});
  }

  @media (min-width: 1920px) {
    background-image: url(${xo});
  }
`,yo=x.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${oo});

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${ao});
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${uo});
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url(${mo});
  }

  @media (min-width: 1920px) {
    background-image: url(${go});
  }
`,Eo=x.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${ro});

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${lo});
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${po});
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url(${fo});
  }

  @media (min-width: 1920px) {
    background-image: url(${bo});
  }
`,Co=()=>r.jsx("section",{children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{className:"hidden-title",children:"Benefits"}),r.jsxs(vo,{children:[r.jsxs(We,{children:[r.jsx(Ye,{children:r.jsx(wo,{})}),r.jsxs(He,{children:[r.jsx(qe,{children:"Boost Sales Through Chat Conversations"}),r.jsx(Xe,{children:"Transform chats into purchases with tailored product suggestions, real-time stock updates, and timely promotions. Showcase your offerings non-stop, across all platforms, and at any volume."}),r.jsx(Ee,{title:"Try for free",styles:"outline"})]})]}),r.jsxs(We,{children:[r.jsx(Ye,{style:{order:1},children:r.jsx(yo,{})}),r.jsxs(He,{style:{order:2},children:[r.jsx(qe,{children:"Elevate Your Team with AI Assistance"}),r.jsx(Xe,{children:"Manage customer messages, enable order tracking, and automate FAQs. Let your team concentrate on important inquiries as EVA-I takes care of the rest."}),r.jsx(Ee,{title:"Try for free",styles:"outline"})]})]}),r.jsxs(We,{children:[r.jsx(Ye,{children:r.jsx(Eo,{})}),r.jsxs(He,{children:[r.jsx(qe,{children:"Master Your Chatbot's Performance"}),r.jsx(Xe,{children:"You wield full authority over training, knowledge base, persona, and user experience, crafting a customized chatbot solution that's uniquely yours."}),r.jsx(Ee,{title:"Try for free",styles:"outline"})]})]})]})]})}),Tt=Te`
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0;
    font-size: 48px;
    line-height: 1.16;
  }
`,Ro=Te`
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 48px;
    line-height: 1.16;
  }
`,To=Te`
  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 64px;
    line-height: 1.25;
  }
`,$o=Te`
  @media (min-width: 1920px) {
    font-size: 64px;
    line-height: 1.25;
  }
`,jo=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px 140px;

  ${Tt}
`,ko=x.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.33;
  color: var(--white);

  ${Tt}
  ${Ro}
  ${To}
  ${$o}
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,So=x.span`
  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,Io=x.span`
   display: block;
`,Ao=()=>{const[e,t]=c.useState(null),n=c.useRef(null);return c.useEffect(()=>(e||t(Gt({el:n.current,color:7688904,backgroundColor:460319,showDots:!0,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,points:15,maxDistance:20,spacing:20})),()=>{e&&e.destroy()}),[e]),r.jsx("section",{ref:n,children:r.jsx("div",{className:"container container--hero",children:r.jsxs(jo,{children:[r.jsxs(ko,{children:["Your",r.jsx(So,{children:" AI Companion "}),"for Business",r.jsx(Io,{children:"Success"})]}),r.jsx(Ee,{title:"Try for free"})]})})})},de="/EVA-I/assets/icon-da92c3cf.svg",Mo=x.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`,zo=x.li`
  display: flex;
  width: 180px;
  height: 60px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: #f5f5f5;
`,Vo=()=>r.jsxs("section",{children:[r.jsx("h2",{className:"hidden-title",children:"Сustomers"}),r.jsx(Mo,{children:No.map(e=>r.jsx(zo,{children:r.jsx("img",{src:e.img,alt:e.alt})},e.id))})]}),No=[{id:le(),img:`${de}`,alt:"logo name"},{id:le(),img:`${de}`,alt:"logo name"},{id:le(),img:`${de}`,alt:"logo name"},{id:le(),img:`${de}`,alt:"logo name"},{id:le(),img:`${de}`,alt:"logo name"},{id:le(),img:`${de}`,alt:"logo name"}],Oo=()=>r.jsxs("main",{children:[r.jsx(Ao,{}),r.jsx(Vo,{}),r.jsx(vn,{}),r.jsx(Co,{}),r.jsx(Sn,{}),r.jsx(no,{}),r.jsx(Wt,{})]});export{Oo as default};
