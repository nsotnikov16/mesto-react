(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(5),i=a.n(c),r=(a(4),a(2)),o=a.p+"static/media/logo.bbe2a6ea.svg",l=a(0);var p=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:o,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})})},u=a.p+"static/media/avatar.8e94371e.jpg",d=a.p+"static/media/edit-avatar.a086f758.svg",h=a(6),j=a(7),m="popup_opened",_=new(function(){function e(t){Object(h.a)(this,e),this._headers=t.headers,this._url=t.baseUrl}return Object(j.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status,", \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 URL"))}},{key:"_handleResponseLike",value:function(e){return e.ok?e.json().then((function(e){return e.likes.length})):Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status,", \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 URL"))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"editProfile",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.info})}).then(this._handleResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(this._handleResponse)}},{key:"addNewCardServer",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"putLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._handleResponseLike)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponseLike)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-25",headers:{authorization:"ae96c89c-0c63-4b1c-b822-1b0fac9d9184","Content-Type":"application/json"}});function b(e){return Object(l.jsxs)("div",{className:"elements__place",children:[Object(l.jsx)("img",{className:"elements__photo",alt:e.card.name,src:e.card.link,onClick:function(){e.onCardClick(e.card)}}),Object(l.jsxs)("div",{className:"elements__name-like",children:[Object(l.jsx)("h2",{className:"elements__title",children:e.card.name}),Object(l.jsxs)("div",{className:"elements__info-like",children:[Object(l.jsx)("button",{type:"button",className:"elements__like"}),Object(l.jsx)("p",{className:"elements__like-value"})]})]}),Object(l.jsx)("button",{type:"button",className:"elements__trash-btn"})]})}var f=function(e){var t=s.a.useState("\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"),a=Object(r.a)(t,2),n=a[0],c=a[1],i=s.a.useState("\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u043e\u0432"),o=Object(r.a)(i,2),p=o[0],h=o[1],j=s.a.useState(u),m=Object(r.a)(j,2),f=m[0],O=m[1],v=s.a.useState([]),x=Object(r.a)(v,2),N=x[0],k=x[1];function g(t){e.isCardOpen(),e.cardSrcImg(t.link),e.cardNameImg(t.name)}s.a.useEffect((function(){Promise.all([_.getUserData(),_.getInitialCards()]).then((function(e){var t,a=Object(r.a)(e,2),n=a[0],s=a[1];c((t=n).name),h(t.about),O(t.avatar),k(s)}))}),[]);var y=N.map((function(e){return Object(l.jsx)(b,{card:e,onCardClick:g},e._id)}));return Object(l.jsxs)("main",{className:"content page__container",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__container",children:[Object(l.jsxs)("div",{className:"profile__change",onMouseOver:e.onHoverAvatar,onMouseOut:e.onHoverAvatar,children:[Object(l.jsx)("img",{src:f,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar ".concat(e.isHover)}),Object(l.jsx)("img",{src:d,alt:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__edit-avatar ".concat(e.isVisible),onClick:e.onEditAvatar})]}),Object(l.jsxs)("div",{className:"profile__into",children:[Object(l.jsxs)("div",{className:"profile__username-btn",children:[Object(l.jsx)("h1",{className:"profile__username",children:n}),Object(l.jsx)("button",{type:"button",className:"profile__edit-btn",onClick:e.onEditProfile})]}),Object(l.jsx)("p",{className:"profile__info",children:p})]})]}),Object(l.jsx)("button",{type:"button",className:"profile__add-btn",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"elements",children:0!==N.length&&Object(l.jsx)(l.Fragment,{children:y})})]})};var O=function(){return Object(l.jsx)("footer",{className:"footer page__container",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var v=function(e){return Object(l.jsx)("div",{className:"popup popup-".concat(e.name," ").concat(e.isOpen),onClick:e.handleOverlay,children:Object(l.jsxs)("div",{className:"popup__container container-profile",children:[Object(l.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(l.jsx)("h2",{className:"popup__title",children:e.title}),Object(l.jsxs)("form",{className:"popup__form form-".concat(e.name),name:"form-".concat(e.name),noValidate:!0,children:[e.children,Object(l.jsx)("button",{type:"submit",className:"popup__save",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var x=function(e){return Object(l.jsx)("div",{className:"popup-img popup ".concat(e.isOpen),onClick:e.handleOverlay,children:Object(l.jsxs)("div",{className:"popup-img__container",children:[Object(l.jsx)("img",{className:"popup-img__image",src:e.link,alt:e.name}),Object(l.jsx)("h2",{className:"popup-img__title",children:e.name}),Object(l.jsx)("button",{type:"button",className:"popup-img__close close-btn",onClick:e.onClose})]})})};var N=function(){var e=s.a.useState(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],c=s.a.useState(!1),i=Object(r.a)(c,2),o=i[0],u=i[1],d=s.a.useState(!1),h=Object(r.a)(d,2),j=h[0],_=h[1],b=s.a.useState(!1),N=Object(r.a)(b,2),k=N[0],g=N[1],y=s.a.useState(!1),C=Object(r.a)(y,2),S=C[0],L=C[1],E=s.a.useState(!1),P=Object(r.a)(E,2),R=P[0],w=P[1],A=s.a.useState(""),T=Object(r.a)(A,2),F=T[0],I=T[1],H=s.a.useState(""),U=Object(r.a)(H,2),q=U[0],D=U[1];function J(e){27===e.keyCode&&M()}function M(){o&&u(!o),a&&n(!a),j&&_(!j),k&&g(!k)}function V(e){e.target===e.currentTarget&&M()}return s.a.useEffect((function(){return(o||a||j||k)&&document.addEventListener("keydown",J),function(){return document.removeEventListener("keydown",J)}})),Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"page__content",children:[Object(l.jsx)(p,{}),Object(l.jsx)(f,{isCardOpen:function(){return g(!k),k},cardSrcImg:I,cardNameImg:D,onEditProfile:function(){u(!o)},onEditAvatar:function(){n(!a)},onAddPlace:function(){_(!j)},onHoverAvatar:function(){w(!R),L(!S)},isHover:S&&"profile__avatar_opacity",isVisible:R&&"profile__edit-avatar_visible"}),Object(l.jsx)(O,{}),Object(l.jsx)(v,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:a&&m,onClose:M,children:Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(l.jsx)("input",{type:"url",name:"link",id:"link-update-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__input popup__input_field_link",required:!0}),Object(l.jsx)("span",{className:"popup__input-error",id:"link-update-input-error"})]})}),handleOverlay:V}),Object(l.jsx)(v,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:o&&m,onClose:M,children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(l.jsx)("input",{type:"text",name:"name",id:"name-profile-input",placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_field_username",minLength:"2",maxLength:"40",required:!0}),Object(l.jsx)("span",{className:"popup__input-error",id:"name-profile-input-error"})]}),Object(l.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(l.jsx)("input",{type:"text",name:"info",id:"info-profile-input",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_field_info",minLength:"2",maxLength:"200",required:!0}),Object(l.jsx)("span",{className:"popup__input-error",id:"info-profile-input-error"})]})]}),handleOverlay:V}),Object(l.jsx)(v,{name:"newplace",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:j&&m,onClose:M,children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(l.jsx)("input",{type:"text",name:"name",id:"name-newplace-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_field_nameplace",minLength:"2",maxLength:"30",required:!0}),Object(l.jsx)("span",{className:"popup__input-error",id:"name-newplace-input-error"})]}),Object(l.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(l.jsx)("input",{type:"url",name:"link",id:"link-newplace-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_field_link",required:!0}),Object(l.jsx)("span",{className:"popup__input-error",id:"link-newplace-input-error"})]})]}),handleOverlay:V}),Object(l.jsx)(x,{card:k,onClose:M,name:q,link:F,isOpen:k&&m,handleOverlay:V})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),k()},4:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.ec73457a.chunk.js.map