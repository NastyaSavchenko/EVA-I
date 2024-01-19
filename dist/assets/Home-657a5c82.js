import{r as d,T as Ft,s as m,j as n,F as h,R as Y,a as we,_ as X,b as g,d as Lt,c as je,e as he,M as Ce,A as $e,N as Ot}from"./index-d1972e5b.js";import{S as nt}from"./SectionTitle-c39f0279.js";import{T as Ut}from"./TryBot-e5d192b8.js";import{s as Gt,u as Wt,d as Ht,g as re,a as ee,b as F,c as te,e as T,f as se}from"./styled-56f81a7c.js";import{n as de}from"./index.browser-7e542916.js";function Qt(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Xt=typeof window<"u"?d.useLayoutEffect:d.useEffect,qt=Xt;function Kt({controlled:e,default:t,name:i,state:s="value"}){const{current:r}=d.useRef(e!==void 0),[o,a]=d.useState(t),l=r?e:o,c=d.useCallback(p=>{r||a(p)},[]);return[l,c]}function ye(e){const t=d.useRef(e);return qt(()=>{t.current=e}),d.useCallback((...i)=>(0,t.current)(...i),[])}function Ye(...e){return d.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(i=>{Qt(i,t)})},e)}let Te=!0,Je=!1,pt;const Yt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Jt(e){const{type:t,tagName:i}=e;return!!(i==="INPUT"&&Yt[t]&&!e.readOnly||i==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Zt(e){e.metaKey||e.altKey||e.ctrlKey||(Te=!0)}function We(){Te=!1}function en(){this.visibilityState==="hidden"&&Je&&(Te=!0)}function tn(e){e.addEventListener("keydown",Zt,!0),e.addEventListener("mousedown",We,!0),e.addEventListener("pointerdown",We,!0),e.addEventListener("touchstart",We,!0),e.addEventListener("visibilitychange",en,!0)}function nn(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Te||Jt(t)}function on(){const e=d.useCallback(r=>{r!=null&&tn(r.ownerDocument)},[]),t=d.useRef(!1);function i(){return t.current?(Je=!0,window.clearTimeout(pt),pt=window.setTimeout(()=>{Je=!1},100),t.current=!1,!0):!1}function s(r){return nn(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:s,onBlur:i,ref:e}}function rn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return Gt(t)}var it=function(){var t=rn.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function wt(){const e=Wt(Ht);return e[Ft]||e}const sn=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},ut=sn,an=m.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`,ln=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,dn=m.span`
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
`,cn=m.div`
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
`,pn=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,un=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`,xn=m.img`
  width: 80px;
  height: 80px;
`,hn=m.h3`
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
`,fn=m.p`
  font-size: 16px;
  font-weight: var(--regular-font-weight);
  line-height: 1.5;
  color: var(--white);
`,mn="/EVA-I/assets/Vector-d1759c3b.svg",gn="/EVA-I/assets/smile-671a11d2.svg",bn="/EVA-I/assets/clock-99f28590.svg",vn=[{id:1,icon:`${mn}`,alt:"icon-1",title:n.jsx(h,{id:"advantage_title_1"}),text:n.jsx(h,{id:"advantage_text_1"})},{id:2,icon:`${gn}`,alt:"icon-2",title:n.jsx(h,{id:"advantage_title_2"}),text:n.jsx(h,{id:"advantage_text_2"})},{id:3,icon:`${bn}`,alt:"icon-3",title:n.jsx(h,{id:"advantage_title_3"}),text:n.jsx(h,{id:"advantage_text_3"})}],wn=()=>n.jsx("section",{children:n.jsx("div",{className:"container",children:n.jsxs(an,{children:[n.jsxs(ln,{children:[n.jsx(dn,{children:n.jsx(h,{id:"advantage_title_span"})}),n.jsx(nt,{title:n.jsx(h,{id:"advantage_title"})})]}),n.jsx(cn,{children:vn.map(e=>n.jsxs(pn,{children:[n.jsx(un,{children:n.jsx(xn,{src:e.icon,alt:e.alt})}),n.jsx(hn,{children:e.title}),n.jsx(fn,{children:e.text})]},e.id))})]})})}),yn=m.ul`
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
`,xt=m.span`
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
`,En=m.li`
  display: flex;
  justify-content: center;
  align-items: center;
`,Cn=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,jn=m.p`
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
`,Rn=m.div`
  display: flex;
  align-items:center;
  gap: 16px;
`,$n=m.div`
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
`,Tn=m.h4`
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
`,Sn=m.p`
  font-size: 16px;
  line-height: 1.5;
  color: var(--white);
`,kn="/EVA-I/assets/user-5e7bdc62.svg",Mn=()=>n.jsx("section",{children:n.jsxs("div",{className:"container",children:[n.jsx(nt,{title:n.jsx(h,{id:"reviews_title"})}),n.jsx(yn,{children:n.jsx(En,{children:n.jsxs(Cn,{children:[n.jsxs(jn,{children:[n.jsx(xt,{children:"“ "}),n.jsx(h,{id:"reviews_text"}),n.jsx(xt,{children:" ”"})]}),n.jsxs(Rn,{children:[n.jsx($n,{children:n.jsx("img",{src:kn,alt:"img"})}),n.jsxs("div",{children:[n.jsx(Tn,{children:n.jsx(h,{id:"reviews_name"})}),n.jsx(Sn,{children:n.jsx(h,{id:"reviews_position"})})]})]})]})})})]})});var v={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ot=Symbol.for("react.element"),rt=Symbol.for("react.portal"),Se=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),Ie=Symbol.for("react.provider"),_e=Symbol.for("react.context"),In=Symbol.for("react.server_context"),Ae=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),_n=Symbol.for("react.offscreen"),yt;yt=Symbol.for("react.module.reference");function W(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ot:switch(e=e.type,e){case Se:case Me:case ke:case ze:case Ne:return e;default:switch(e=e&&e.$$typeof,e){case In:case _e:case Ae:case Ve:case De:case Ie:return e;default:return t}}case rt:return t}}}v.ContextConsumer=_e;v.ContextProvider=Ie;v.Element=ot;v.ForwardRef=Ae;v.Fragment=Se;v.Lazy=Ve;v.Memo=De;v.Portal=rt;v.Profiler=Me;v.StrictMode=ke;v.Suspense=ze;v.SuspenseList=Ne;v.isAsyncMode=function(){return!1};v.isConcurrentMode=function(){return!1};v.isContextConsumer=function(e){return W(e)===_e};v.isContextProvider=function(e){return W(e)===Ie};v.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ot};v.isForwardRef=function(e){return W(e)===Ae};v.isFragment=function(e){return W(e)===Se};v.isLazy=function(e){return W(e)===Ve};v.isMemo=function(e){return W(e)===De};v.isPortal=function(e){return W(e)===rt};v.isProfiler=function(e){return W(e)===Me};v.isStrictMode=function(e){return W(e)===ke};v.isSuspense=function(e){return W(e)===ze};v.isSuspenseList=function(e){return W(e)===Ne};v.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Se||e===Me||e===ke||e===ze||e===Ne||e===_n||typeof e=="object"&&e!==null&&(e.$$typeof===Ve||e.$$typeof===De||e.$$typeof===Ie||e.$$typeof===_e||e.$$typeof===Ae||e.$$typeof===yt||e.getModuleId!==void 0)};v.typeOf=W;function Ze(e,t){return Ze=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,r){return s.__proto__=r,s},Ze(e,t)}function Et(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ze(e,t)}const ht={disabled:!1},Re=Y.createContext(null);var An=function(t){return t.scrollTop},me="unmounted",ne="exited",ie="entering",ue="entered",et="exiting",J=function(e){Et(t,e);function t(s,r){var o;o=e.call(this,s,r)||this;var a=r,l=a&&!a.isMounting?s.enter:s.appear,c;return o.appearStatus=null,s.in?l?(c=ne,o.appearStatus=ie):c=ue:s.unmountOnExit||s.mountOnEnter?c=me:c=ne,o.state={status:c},o.nextCallback=null,o}t.getDerivedStateFromProps=function(r,o){var a=r.in;return a&&o.status===me?{status:ne}:null};var i=t.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(r){var o=null;if(r!==this.props){var a=this.state.status;this.props.in?a!==ie&&a!==ue&&(o=ie):(a===ie||a===ue)&&(o=et)}this.updateStatus(!1,o)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var r=this.props.timeout,o,a,l;return o=a=l=r,r!=null&&typeof r!="number"&&(o=r.exit,a=r.enter,l=r.appear!==void 0?r.appear:a),{exit:o,enter:a,appear:l}},i.updateStatus=function(r,o){if(r===void 0&&(r=!1),o!==null)if(this.cancelNextCallback(),o===ie){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:we.findDOMNode(this);a&&An(a)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ne&&this.setState({status:me})},i.performEnter=function(r){var o=this,a=this.props.enter,l=this.context?this.context.isMounting:r,c=this.props.nodeRef?[l]:[we.findDOMNode(this),l],p=c[0],x=c[1],w=this.getTimeouts(),E=l?w.appear:w.enter;if(!r&&!a||ht.disabled){this.safeSetState({status:ue},function(){o.props.onEntered(p)});return}this.props.onEnter(p,x),this.safeSetState({status:ie},function(){o.props.onEntering(p,x),o.onTransitionEnd(E,function(){o.safeSetState({status:ue},function(){o.props.onEntered(p,x)})})})},i.performExit=function(){var r=this,o=this.props.exit,a=this.getTimeouts(),l=this.props.nodeRef?void 0:we.findDOMNode(this);if(!o||ht.disabled){this.safeSetState({status:ne},function(){r.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:et},function(){r.props.onExiting(l),r.onTransitionEnd(a.exit,function(){r.safeSetState({status:ne},function(){r.props.onExited(l)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(r,o){o=this.setNextCallback(o),this.setState(r,o)},i.setNextCallback=function(r){var o=this,a=!0;return this.nextCallback=function(l){a&&(a=!1,o.nextCallback=null,r(l))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},i.onTransitionEnd=function(r,o){this.setNextCallback(o);var a=this.props.nodeRef?this.props.nodeRef.current:we.findDOMNode(this),l=r==null&&!this.props.addEndListener;if(!a||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],p=c[0],x=c[1];this.props.addEndListener(p,x)}r!=null&&setTimeout(this.nextCallback,r)},i.render=function(){var r=this.state.status;if(r===me)return null;var o=this.props,a=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var l=X(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Y.createElement(Re.Provider,{value:null},typeof a=="function"?a(r,l):Y.cloneElement(Y.Children.only(a),l))},t}(Y.Component);J.contextType=Re;J.propTypes={};function ce(){}J.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ce,onEntering:ce,onEntered:ce,onExit:ce,onExiting:ce,onExited:ce};J.UNMOUNTED=me;J.EXITED=ne;J.ENTERING=ie;J.ENTERED=ue;J.EXITING=et;const zn=J;function Nn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function st(e,t){var i=function(o){return t&&d.isValidElement(o)?t(o):o},s=Object.create(null);return e&&d.Children.map(e,function(r){return r}).forEach(function(r){s[r.key]=i(r)}),s}function Dn(e,t){e=e||{},t=t||{};function i(x){return x in t?t[x]:e[x]}var s=Object.create(null),r=[];for(var o in e)o in t?r.length&&(s[o]=r,r=[]):r.push(o);var a,l={};for(var c in t){if(s[c])for(a=0;a<s[c].length;a++){var p=s[c][a];l[s[c][a]]=i(p)}l[c]=i(c)}for(a=0;a<r.length;a++)l[r[a]]=i(r[a]);return l}function oe(e,t,i){return i[t]!=null?i[t]:e.props[t]}function Vn(e,t){return st(e.children,function(i){return d.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:oe(i,"appear",e),enter:oe(i,"enter",e),exit:oe(i,"exit",e)})})}function Pn(e,t,i){var s=st(e.children),r=Dn(t,s);return Object.keys(r).forEach(function(o){var a=r[o];if(d.isValidElement(a)){var l=o in t,c=o in s,p=t[o],x=d.isValidElement(p)&&!p.props.in;c&&(!l||x)?r[o]=d.cloneElement(a,{onExited:i.bind(null,a),in:!0,exit:oe(a,"exit",e),enter:oe(a,"enter",e)}):!c&&l&&!x?r[o]=d.cloneElement(a,{in:!1}):c&&l&&d.isValidElement(p)&&(r[o]=d.cloneElement(a,{onExited:i.bind(null,a),in:p.props.in,exit:oe(a,"exit",e),enter:oe(a,"enter",e)}))}}),r}var Bn=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Fn={component:"div",childFactory:function(t){return t}},at=function(e){Et(t,e);function t(s,r){var o;o=e.call(this,s,r)||this;var a=o.handleExited.bind(Nn(o));return o.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},o}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,o){var a=o.children,l=o.handleExited,c=o.firstRender;return{children:c?Vn(r,l):Pn(r,a,l),firstRender:!1}},i.handleExited=function(r,o){var a=st(this.props.children);r.key in a||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(l){var c=g({},l.children);return delete c[r.key],{children:c}}))},i.render=function(){var r=this.props,o=r.component,a=r.childFactory,l=X(r,["component","childFactory"]),c=this.state.contextValue,p=Bn(this.state.children).map(a);return delete l.appear,delete l.enter,delete l.exit,o===null?Y.createElement(Re.Provider,{value:c},p):Y.createElement(Re.Provider,{value:c},Y.createElement(o,l,p))},t}(Y.Component);at.propTypes={};at.defaultProps=Fn;const Ln=at;function ft(e,t){var i,s;const{timeout:r,easing:o,style:a={}}=e;return{duration:(i=a.transitionDuration)!=null?i:typeof r=="number"?r:r[t.mode]||0,easing:(s=a.transitionTimingFunction)!=null?s:typeof o=="object"?o[t.mode]:o,delay:a.transitionDelay}}function On(e){return re("MuiCollapse",e)}ee("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Un=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Gn=e=>{const{orientation:t,classes:i}=e,s={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return se(s,On,i)},Wn=F("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.orientation],i.state==="entered"&&t.entered,i.state==="exited"&&!i.in&&i.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>g({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&g({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),Hn=F("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>g({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Qn=F("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>g({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Ct=d.forwardRef(function(t,i){const s=te({props:t,name:"MuiCollapse"}),{addEndListener:r,children:o,className:a,collapsedSize:l="0px",component:c,easing:p,in:x,onEnter:w,onEntered:E,onEntering:j,onExit:C,onExited:y,onExiting:S,orientation:M="vertical",style:B,timeout:k=Lt.standard,TransitionComponent:b=zn}=s,I=X(s,Un),R=g({},s,{orientation:M,collapsedSize:l}),_=Gn(R),q=wt(),Z=d.useRef(),$=d.useRef(null),L=d.useRef(),z=typeof l=="number"?`${l}px`:l,N=M==="horizontal",D=N?"width":"height";d.useEffect(()=>()=>{clearTimeout(Z.current)},[]);const O=d.useRef(null),H=Ye(i,O),U=f=>P=>{if(f){const Q=O.current;P===void 0?f(Q):f(Q,P)}},V=()=>$.current?$.current[N?"clientWidth":"clientHeight"]:0,Be=U((f,P)=>{$.current&&N&&($.current.style.position="absolute"),f.style[D]=z,w&&w(f,P)}),ge=U((f,P)=>{const Q=V();$.current&&N&&($.current.style.position="");const{duration:A,easing:le}=ft({style:B,timeout:k,easing:p},{mode:"enter"});if(k==="auto"){const be=q.transitions.getAutoHeightDuration(Q);f.style.transitionDuration=`${be}ms`,L.current=be}else f.style.transitionDuration=typeof A=="string"?A:`${A}ms`;f.style[D]=`${Q}px`,f.style.transitionTimingFunction=le,j&&j(f,P)}),Fe=U((f,P)=>{f.style[D]="auto",E&&E(f,P)}),Le=U(f=>{f.style[D]=`${V()}px`,C&&C(f)}),Oe=U(y),K=U(f=>{const P=V(),{duration:Q,easing:A}=ft({style:B,timeout:k,easing:p},{mode:"exit"});if(k==="auto"){const le=q.transitions.getAutoHeightDuration(P);f.style.transitionDuration=`${le}ms`,L.current=le}else f.style.transitionDuration=typeof Q=="string"?Q:`${Q}ms`;f.style[D]=z,f.style.transitionTimingFunction=A,S&&S(f)}),ae=f=>{k==="auto"&&(Z.current=setTimeout(f,L.current||0)),r&&r(O.current,f)};return n.jsx(b,g({in:x,onEnter:Be,onEntered:Fe,onEntering:ge,onExit:Le,onExited:Oe,onExiting:K,addEndListener:ae,nodeRef:O,timeout:k==="auto"?null:k},I,{children:(f,P)=>n.jsx(Wn,g({as:c,className:T(_.root,a,{entered:_.entered,exited:!x&&z==="0px"&&_.hidden}[f]),style:g({[N?"minWidth":"minHeight"]:z},B),ownerState:g({},R,{state:f}),ref:H},P,{children:n.jsx(Hn,{ownerState:g({},R,{state:f}),className:_.wrapper,ref:$,children:n.jsx(Qn,{ownerState:g({},R,{state:f}),className:_.wrapperInner,children:o})})}))}))});Ct.muiSupportAuto=!0;const Xn=Ct;function qn(e){return re("MuiPaper",e)}ee("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Kn=["className","component","elevation","square","variant"],Yn=e=>{const{square:t,elevation:i,variant:s,classes:r}=e,o={root:["root",s,!t&&"rounded",s==="elevation"&&`elevation${i}`]};return se(o,qn,r)},Jn=F("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],!i.square&&t.rounded,i.variant==="elevation"&&t[`elevation${i.elevation}`]]}})(({theme:e,ownerState:t})=>{var i;return g({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&g({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${je("#fff",ut(t.elevation))}, ${je("#fff",ut(t.elevation))})`},e.vars&&{backgroundImage:(i=e.vars.overlays)==null?void 0:i[t.elevation]}))}),Zn=d.forwardRef(function(t,i){const s=te({props:t,name:"MuiPaper"}),{className:r,component:o="div",elevation:a=1,square:l=!1,variant:c="elevation"}=s,p=X(s,Kn),x=g({},s,{component:o,elevation:a,square:l,variant:c}),w=Yn(x);return n.jsx(Jn,g({as:o,ownerState:x,className:T(w.root,r),ref:i},p))}),ei=Zn,ti=d.createContext({}),jt=ti;function ni(e){return re("MuiAccordion",e)}const ii=ee("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),Ee=ii,oi=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],ri=e=>{const{classes:t,square:i,expanded:s,disabled:r,disableGutters:o}=e;return se({root:["root",!i&&"rounded",s&&"expanded",r&&"disabled",!o&&"gutters"],region:["region"]},ni,t)},si=F(ei,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[{[`& .${Ee.region}`]:t.region},t.root,!i.square&&t.rounded,!i.disableGutters&&t.gutters]}})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${Ee.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${Ee.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:t})=>g({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${Ee.expanded}`]:{margin:"16px 0"}})),ai=d.forwardRef(function(t,i){const s=te({props:t,name:"MuiAccordion"}),{children:r,className:o,defaultExpanded:a=!1,disabled:l=!1,disableGutters:c=!1,expanded:p,onChange:x,square:w=!1,TransitionComponent:E=Xn,TransitionProps:j}=s,C=X(s,oi),[y,S]=Kt({controlled:p,default:a,name:"Accordion",state:"expanded"}),M=d.useCallback(_=>{S(!y),x&&x(_,!y)},[y,x,S]),[B,...k]=d.Children.toArray(r),b=d.useMemo(()=>({expanded:y,disabled:l,disableGutters:c,toggle:M}),[y,l,c,M]),I=g({},s,{square:w,disabled:l,disableGutters:c,expanded:y}),R=ri(I);return n.jsxs(si,g({className:T(R.root,o),ref:i,ownerState:I,square:w},C,{children:[n.jsx(jt.Provider,{value:b,children:B}),n.jsx(E,g({in:y,timeout:"auto"},j,{children:n.jsx("div",{"aria-labelledby":B.props.id,id:B.props["aria-controls"],role:"region",className:R.region,children:k})}))]}))}),li=ai;function di(e){const{className:t,classes:i,pulsate:s=!1,rippleX:r,rippleY:o,rippleSize:a,in:l,onExited:c,timeout:p}=e,[x,w]=d.useState(!1),E=T(t,i.ripple,i.rippleVisible,s&&i.ripplePulsate),j={width:a,height:a,top:-(a/2)+o,left:-(a/2)+r},C=T(i.child,x&&i.childLeaving,s&&i.childPulsate);return!l&&!x&&w(!0),d.useEffect(()=>{if(!l&&c!=null){const y=setTimeout(c,p);return()=>{clearTimeout(y)}}},[c,l,p]),n.jsx("span",{className:E,style:j,children:n.jsx("span",{className:C})})}const ci=ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),G=ci,pi=["center","classes","className"];let Pe=e=>e,mt,gt,bt,vt;const tt=550,ui=80,xi=it(mt||(mt=Pe`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),hi=it(gt||(gt=Pe`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),fi=it(bt||(bt=Pe`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),mi=F("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),gi=F(di,{name:"MuiTouchRipple",slot:"Ripple"})(vt||(vt=Pe`
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
`),G.rippleVisible,xi,tt,({theme:e})=>e.transitions.easing.easeInOut,G.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,G.child,G.childLeaving,hi,tt,({theme:e})=>e.transitions.easing.easeInOut,G.childPulsate,fi,({theme:e})=>e.transitions.easing.easeInOut),bi=d.forwardRef(function(t,i){const s=te({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:a}=s,l=X(s,pi),[c,p]=d.useState([]),x=d.useRef(0),w=d.useRef(null);d.useEffect(()=>{w.current&&(w.current(),w.current=null)},[c]);const E=d.useRef(!1),j=d.useRef(0),C=d.useRef(null),y=d.useRef(null);d.useEffect(()=>()=>{j.current&&clearTimeout(j.current)},[]);const S=d.useCallback(b=>{const{pulsate:I,rippleX:R,rippleY:_,rippleSize:q,cb:Z}=b;p($=>[...$,n.jsx(gi,{classes:{ripple:T(o.ripple,G.ripple),rippleVisible:T(o.rippleVisible,G.rippleVisible),ripplePulsate:T(o.ripplePulsate,G.ripplePulsate),child:T(o.child,G.child),childLeaving:T(o.childLeaving,G.childLeaving),childPulsate:T(o.childPulsate,G.childPulsate)},timeout:tt,pulsate:I,rippleX:R,rippleY:_,rippleSize:q},x.current)]),x.current+=1,w.current=Z},[o]),M=d.useCallback((b={},I={},R=()=>{})=>{const{pulsate:_=!1,center:q=r||I.pulsate,fakeElement:Z=!1}=I;if((b==null?void 0:b.type)==="mousedown"&&E.current){E.current=!1;return}(b==null?void 0:b.type)==="touchstart"&&(E.current=!0);const $=Z?null:y.current,L=$?$.getBoundingClientRect():{width:0,height:0,left:0,top:0};let z,N,D;if(q||b===void 0||b.clientX===0&&b.clientY===0||!b.clientX&&!b.touches)z=Math.round(L.width/2),N=Math.round(L.height/2);else{const{clientX:O,clientY:H}=b.touches&&b.touches.length>0?b.touches[0]:b;z=Math.round(O-L.left),N=Math.round(H-L.top)}if(q)D=Math.sqrt((2*L.width**2+L.height**2)/3),D%2===0&&(D+=1);else{const O=Math.max(Math.abs(($?$.clientWidth:0)-z),z)*2+2,H=Math.max(Math.abs(($?$.clientHeight:0)-N),N)*2+2;D=Math.sqrt(O**2+H**2)}b!=null&&b.touches?C.current===null&&(C.current=()=>{S({pulsate:_,rippleX:z,rippleY:N,rippleSize:D,cb:R})},j.current=setTimeout(()=>{C.current&&(C.current(),C.current=null)},ui)):S({pulsate:_,rippleX:z,rippleY:N,rippleSize:D,cb:R})},[r,S]),B=d.useCallback(()=>{M({},{pulsate:!0})},[M]),k=d.useCallback((b,I)=>{if(clearTimeout(j.current),(b==null?void 0:b.type)==="touchend"&&C.current){C.current(),C.current=null,j.current=setTimeout(()=>{k(b,I)});return}C.current=null,p(R=>R.length>0?R.slice(1):R),w.current=I},[]);return d.useImperativeHandle(i,()=>({pulsate:B,start:M,stop:k}),[B,M,k]),n.jsx(mi,g({className:T(G.root,o.root,a),ref:y},l,{children:n.jsx(Ln,{component:null,exit:!0,children:c})}))}),vi=bi;function wi(e){return re("MuiButtonBase",e)}const yi=ee("MuiButtonBase",["root","disabled","focusVisible"]),Ei=yi,Ci=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ji=e=>{const{disabled:t,focusVisible:i,focusVisibleClassName:s,classes:r}=e,a=se({root:["root",t&&"disabled",i&&"focusVisible"]},wi,r);return i&&s&&(a.root+=` ${s}`),a},Ri=F("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ei.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),$i=d.forwardRef(function(t,i){const s=te({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:a,className:l,component:c="button",disabled:p=!1,disableRipple:x=!1,disableTouchRipple:w=!1,focusRipple:E=!1,LinkComponent:j="a",onBlur:C,onClick:y,onContextMenu:S,onDragLeave:M,onFocus:B,onFocusVisible:k,onKeyDown:b,onKeyUp:I,onMouseDown:R,onMouseLeave:_,onMouseUp:q,onTouchEnd:Z,onTouchMove:$,onTouchStart:L,tabIndex:z=0,TouchRippleProps:N,touchRippleRef:D,type:O}=s,H=X(s,Ci),U=d.useRef(null),V=d.useRef(null),Be=Ye(V,D),{isFocusVisibleRef:ge,onFocus:Fe,onBlur:Le,ref:Oe}=on(),[K,ae]=d.useState(!1);p&&K&&ae(!1),d.useImperativeHandle(r,()=>({focusVisible:()=>{ae(!0),U.current.focus()}}),[]);const[f,P]=d.useState(!1);d.useEffect(()=>{P(!0)},[]);const Q=f&&!x&&!p;d.useEffect(()=>{K&&E&&!x&&f&&V.current.pulsate()},[x,E,K,f]);function A(u,dt,Bt=w){return ye(ct=>(dt&&dt(ct),!Bt&&V.current&&V.current[u](ct),!0))}const le=A("start",R),be=A("stop",S),Tt=A("stop",M),St=A("stop",q),kt=A("stop",u=>{K&&u.preventDefault(),_&&_(u)}),Mt=A("start",L),It=A("stop",Z),_t=A("stop",$),At=A("stop",u=>{Le(u),ge.current===!1&&ae(!1),C&&C(u)},!1),zt=ye(u=>{U.current||(U.current=u.currentTarget),Fe(u),ge.current===!0&&(ae(!0),k&&k(u)),B&&B(u)}),Ue=()=>{const u=U.current;return c&&c!=="button"&&!(u.tagName==="A"&&u.href)},Ge=d.useRef(!1),Nt=ye(u=>{E&&!Ge.current&&K&&V.current&&u.key===" "&&(Ge.current=!0,V.current.stop(u,()=>{V.current.start(u)})),u.target===u.currentTarget&&Ue()&&u.key===" "&&u.preventDefault(),b&&b(u),u.target===u.currentTarget&&Ue()&&u.key==="Enter"&&!p&&(u.preventDefault(),y&&y(u))}),Dt=ye(u=>{E&&u.key===" "&&V.current&&K&&!u.defaultPrevented&&(Ge.current=!1,V.current.stop(u,()=>{V.current.pulsate(u)})),I&&I(u),y&&u.target===u.currentTarget&&Ue()&&u.key===" "&&!u.defaultPrevented&&y(u)});let ve=c;ve==="button"&&(H.href||H.to)&&(ve=j);const fe={};ve==="button"?(fe.type=O===void 0?"button":O,fe.disabled=p):(!H.href&&!H.to&&(fe.role="button"),p&&(fe["aria-disabled"]=p));const Vt=Ye(i,Oe,U),lt=g({},s,{centerRipple:o,component:c,disabled:p,disableRipple:x,disableTouchRipple:w,focusRipple:E,tabIndex:z,focusVisible:K}),Pt=ji(lt);return n.jsxs(Ri,g({as:ve,className:T(Pt.root,l),ownerState:lt,onBlur:At,onClick:y,onContextMenu:be,onFocus:zt,onKeyDown:Nt,onKeyUp:Dt,onMouseDown:le,onMouseLeave:kt,onMouseUp:St,onDragLeave:Tt,onTouchEnd:It,onTouchMove:_t,onTouchStart:Mt,ref:Vt,tabIndex:p?-1:z,type:O},fe,H,{children:[a,Q?n.jsx(vi,g({ref:Be,center:o},N)):null]}))}),Rt=$i;function Ti(e){return re("MuiAccordionSummary",e)}const Si=ee("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),xe=Si,ki=["children","className","expandIcon","focusVisibleClassName","onClick"],Mi=e=>{const{classes:t,expanded:i,disabled:s,disableGutters:r}=e;return se({root:["root",i&&"expanded",s&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",i&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",i&&"expanded"]},Ti,t)},Ii=F(Rt,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>{const i={duration:e.transitions.duration.shortest};return g({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],i),[`&.${xe.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${xe.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${xe.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${xe.expanded}`]:{minHeight:64}})}),_i=F("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e,ownerState:t})=>g({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${xe.expanded}`]:{margin:"20px 0"}})),Ai=F("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${xe.expanded}`]:{transform:"rotate(180deg)"}})),zi=d.forwardRef(function(t,i){const s=te({props:t,name:"MuiAccordionSummary"}),{children:r,className:o,expandIcon:a,focusVisibleClassName:l,onClick:c}=s,p=X(s,ki),{disabled:x=!1,disableGutters:w,expanded:E,toggle:j}=d.useContext(jt),C=M=>{j&&j(M),c&&c(M)},y=g({},s,{expanded:E,disabled:x,disableGutters:w}),S=Mi(y);return n.jsxs(Ii,g({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":E,className:T(S.root,o),focusVisibleClassName:T(S.focusVisible,l),onClick:C,ref:i,ownerState:y},p,{children:[n.jsx(_i,{className:S.content,ownerState:y,children:r}),a&&n.jsx(Ai,{className:S.expandIconWrapper,ownerState:y,children:a})]}))}),Ni=zi;function Di(e){return re("MuiAccordionDetails",e)}ee("MuiAccordionDetails",["root"]);const Vi=["className"],Pi=e=>{const{classes:t}=e;return se({root:["root"]},Di,t)},Bi=F("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Fi=d.forwardRef(function(t,i){const s=te({props:t,name:"MuiAccordionDetails"}),{className:r}=s,o=X(s,Vi),a=s,l=Pi(a);return n.jsx(Bi,g({className:T(l.root,r),ref:i,ownerState:a},o))}),Li=Fi,Oi="/EVA-I/assets/plus-43d933e0.svg",Ui="/EVA-I/assets/minus-2b987ba8.svg";function Gi(e){return re("MuiIconButton",e)}const Wi=ee("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Hi=Wi,Qi=["edge","children","className","color","disabled","disableFocusRipple","size"],Xi=e=>{const{classes:t,disabled:i,color:s,edge:r,size:o}=e,a={root:["root",i&&"disabled",s!=="default"&&`color${he(s)}`,r&&`edge${he(r)}`,`size${he(o)}`]};return se(a,Gi,t)},qi=F(Rt,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.color!=="default"&&t[`color${he(i.color)}`],i.edge&&t[`edge${he(i.edge)}`],t[`size${he(i.size)}`]]}})(({theme:e,ownerState:t})=>g({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:je(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var i;const s=(i=(e.vars||e).palette)==null?void 0:i[t.color];return g({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&g({color:s==null?void 0:s.main},!t.disableRipple&&{"&:hover":g({},s&&{backgroundColor:e.vars?`rgba(${s.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:je(s.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Hi.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),Ki=d.forwardRef(function(t,i){const s=te({props:t,name:"MuiIconButton"}),{edge:r=!1,children:o,className:a,color:l="default",disabled:c=!1,disableFocusRipple:p=!1,size:x="medium"}=s,w=X(s,Qi),E=g({},s,{edge:r,color:l,disabled:c,disableFocusRipple:p,size:x}),j=Xi(E);return n.jsx(qi,g({className:T(j.root,a),centerRipple:!0,focusRipple:!p,disabled:c,ref:i,ownerState:E},w,{children:o}))}),Yi=Ki,Ji=m.ul`
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
`,Zi=m.p`
  width: 200px;

  @media (min-width: 768px) {
    width: 100%;
  }
`,eo=m.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`,to=()=>n.jsxs(Yi,{sx:{".collapsIconWrapper":{display:"flex",justifyContent:"end",alignItems:"center"},".Mui-expanded & > .collapsIconWrapper":{display:"none"},".expandIconWrapper":{display:"none"},".Mui-expanded & > .expandIconWrapper":{display:"flex",justifyContent:"center",alignItems:"center"}},children:[n.jsx("div",{className:"expandIconWrapper",children:n.jsx("img",{src:Ui,alt:"Close FAQ"})}),n.jsx("div",{className:"collapsIconWrapper",children:n.jsx("img",{src:Oi,alt:"Open FAQ"})})]}),no={boxShadow:"none",background:"var(--dark)","&:first-of-type, &:last-of-type":{borderRadius:"12px",color:"var(--white)",backgroundColor:"transparent",border:"1px solid var(--primary-purple)",transition:"box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{boxShadow:" 0px 0px 15px 2px var(--primary-purple)"}},"&:before":{content:"none"}},io=[{ariaControls:"panel1a-content",id:"panel1a-header",title:n.jsx(h,{id:"FAQ_title_1"}),accordionDetails:n.jsx(h,{id:"FAQ_accordionDetails_1"})},{ariaControls:"panel2a-content",id:"panel2a-header",title:n.jsx(h,{id:"FAQ_title_2"}),accordionDetails:n.jsx(h,{id:"FAQ_accordionDetails_2"})},{ariaControls:"panel3a-content",id:"panel3a-header",title:n.jsx(h,{id:"FAQ_title_3"}),accordionDetails:n.jsx(h,{id:"FAQ_accordionDetails_3"})},{ariaControls:"panel4a-content",id:"panel4a-header",title:n.jsx(h,{id:"FAQ_title_4"}),accordionDetails:n.jsx(h,{id:"FAQ_accordionDetails_4"})},{ariaControls:"panel5a-content",id:"panel5a-header",title:n.jsx(h,{id:"FAQ_title_5"}),accordionDetails:n.jsx(h,{id:"FAQ_accordionDetails_5"})}],oo=()=>{const e=wt();return n.jsx("section",{children:n.jsxs("div",{className:"container",children:[n.jsx(nt,{title:n.jsx(h,{id:"FAQ_title"})}),n.jsx(Ji,{children:io.map(t=>n.jsx(eo,{tabIndex:0,children:n.jsxs(li,{sx:no,children:[n.jsx(Ni,{expandIcon:n.jsx(to,{}),"aria-controls":t.ariaControls,id:t.id,sx:{color:"#FFF",padding:"16px 24px",fontSize:"20px",fontWeight:600,lineHeight:1.4,[e.breakpoints.between("sm","xl")]:{padding:"32px",fontSize:"32px",lineHeight:1.25},[e.breakpoints.up("xl")]:{padding:"32px",fontSize:"32px",lineHeight:1.25}},children:n.jsx(Zi,{children:t.title})}),n.jsx(Li,{sx:{padding:"16px 24px",fontSize:"16px",lineHeight:"1.5",[e.breakpoints.between("sm","xl")]:{padding:"32px"},[e.breakpoints.up("xl")]:{padding:"32px"}},children:n.jsx("p",{children:t.accordionDetails})})]})},t.id))})]})})},ro="/EVA-I/assets/Group581-680e8ac9.svg",so="/EVA-I/assets/Group583-57475ce7.svg",ao="/EVA-I/assets/Group585-2e0ac7ba.svg",lo="/EVA-I/assets/Group581-70a22de6.svg",co="/EVA-I/assets/Group583-27b9b7f3.svg",po="/EVA-I/assets/Group585-b8c0a800.svg",uo="/EVA-I/assets/Group581-746b44e2.svg",xo="/EVA-I/assets/Group583-626a1cdf.svg",ho="/EVA-I/assets/Group585-76ac868e.svg",fo="/EVA-I/assets/Group581-01234d2f.svg",mo="/EVA-I/assets/Group583-9afefe12.svg",go="/EVA-I/assets/Group585-0bb5718d.svg",bo="/EVA-I/assets/Group581-c06f67aa.svg",vo="/EVA-I/assets/Group583-6ba1f07a.svg",wo="/EVA-I/assets/Group585-9559ee71.svg",yo=m.ul`
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
`,He=m.li`
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
`,Qe=m.div`
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
`,Xe=m.h3`
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
`,qe=m.p`
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
`,Ke=m.div`
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
`,Eo=m.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${ro});

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${lo});
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${uo});
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url(${fo});
  }

  @media (min-width: 1920px) {
    background-image: url(${bo});
  }
`,Co=m.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${so});

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${co});
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${xo});
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url(${mo});
  }

  @media (min-width: 1920px) {
    background-image: url(${vo});
  }
`,jo=m.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${ao});

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${po});
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${ho});
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    background-image: url(${go});
  }

  @media (min-width: 1920px) {
    background-image: url(${wo});
  }
`,Ro=()=>n.jsx("section",{children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"hidden-title",children:n.jsx(h,{id:"Benefits_title"})}),n.jsxs(yo,{children:[n.jsxs(He,{children:[n.jsx(Ke,{children:n.jsx(Eo,{})}),n.jsxs(Qe,{children:[n.jsx(Xe,{children:n.jsx(h,{id:"Benefits_CardInfoTitle_1"})}),n.jsx(qe,{children:n.jsx(h,{id:"Benefits_CardInfoText_1"})}),n.jsx(Ce,{title:n.jsx(h,{id:"Benefits_MainBtn"}),styles:"outline"})]})]}),n.jsxs(He,{children:[n.jsx(Ke,{style:{order:1},children:n.jsx(Co,{})}),n.jsxs(Qe,{style:{order:2},children:[n.jsx(Xe,{children:n.jsx(h,{id:"Benefits_CardInfoTitle_2"})}),n.jsx(qe,{children:n.jsx(h,{id:"Benefits_CardInfoText_2"})}),n.jsx(Ce,{title:n.jsx(h,{id:"Benefits_MainBtn"}),styles:"outline"})]})]}),n.jsxs(He,{children:[n.jsx(Ke,{children:n.jsx(jo,{})}),n.jsxs(Qe,{children:[n.jsx(Xe,{children:n.jsx(h,{id:"Benefits_CardInfoTitle_3"})}),n.jsx(qe,{children:n.jsx(h,{id:"Benefits_CardInfoText_3"})}),n.jsx(Ce,{title:n.jsx(h,{id:"Benefits_MainBtn"}),styles:"outline"})]})]})]})]})}),$t=$e`
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0;
    font-size: 48px;
    line-height: 1.16;
  }
`,$o=$e`
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 48px;
    line-height: 1.16;
  }
`,To=$e`
  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 64px;
    line-height: 1.25;
  }
`,So=$e`
  @media (min-width: 1920px) {
    font-size: 64px;
    line-height: 1.25;
  }
`,ko=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px 140px;

  ${$t}
`,Mo=m.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.33;
  color: var(--white);

  ${$t}
  ${$o}
  ${To}
  ${So}
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Io=m.span`
  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,_o=m.span`
   display: block;
`,Ao=()=>{const[e,t]=d.useState(null),i=d.useRef(null);return d.useEffect(()=>(e||t(Ot({el:i.current,color:7688904,backgroundColor:460319,showDots:!0,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,points:15,maxDistance:20,spacing:20})),()=>{e&&e.destroy()}),[e]),n.jsx("section",{ref:i,children:n.jsx("div",{className:"container container--hero",children:n.jsxs(ko,{children:[n.jsxs(Mo,{children:[n.jsx(h,{id:"hero_title_1"}),n.jsxs(Io,{children:[" ",n.jsx(h,{id:"hero_subtitle"})]}),n.jsx(h,{id:"hero_title_2"}),n.jsxs(_o,{children:[" ",n.jsx(h,{id:"hero_span"})]})]}),n.jsx(Ce,{title:n.jsx(h,{id:"hero_MainBtn"})})]})})})},pe="/EVA-I/assets/icon-da92c3cf.svg";m.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;m.li`
  display: flex;
  width: 180px;
  height: 60px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: #f5f5f5;
`;de(),`${pe}`,de(),`${pe}`,de(),`${pe}`,de(),`${pe}`,de(),`${pe}`,de(),`${pe}`;const Fo=()=>n.jsxs("main",{children:[n.jsx(Ao,{}),n.jsx(wn,{}),n.jsx(Ro,{}),n.jsx(Mn,{}),n.jsx(oo,{}),n.jsx(Ut,{})]});export{Fo as default};
