(this["webpackJsonpredux-graphql"]=this["webpackJsonpredux-graphql"]||[]).push([[0],{43:function(e,a,t){e.exports=t(81)},48:function(e,a,t){},49:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),o=t.n(c),i=t(12),l=(t(48),t(49),t(42)),s=t(4),u=t(10),m=t(24),d=t.n(m),f=(t(54),function(e){return function(){return console.log(e)}}),g=function(e){var a=e.name,t=e.image,n=e.rightClick,c=e.leftClick,o=e.fav;return r.a.createElement("div",{className:"container-card"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:"rick",src:t}),r.a.createElement("p",{className:"name"},a),!o&&r.a.createElement("div",{className:"actions"},r.a.createElement("div",{onClick:c||f("left"),className:"left"},r.a.createElement(d.a,{name:"thumbs-down",size:"2x"})),r.a.createElement("div",{onClick:n||f("right"),className:"right"},r.a.createElement(d.a,{name:"heart",size:"2x"})))))};g.defaultProps={name:"Rick Sanchez",image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"};var p=g,h=(t(55),t(17)),E=t(3),v=t(40),O=t.n(v),y=t(14),b=t.n(y);t(72),t(74);b.a.initializeApp({apiKey:"AIzaSyCISUSaUd8qPfZQaznVtR65JbqkKFTRT0E",authDomain:"rickandmorty-63a4a.firebaseapp.com",databaseURL:"https://rickandmorty-63a4a.firebaseio.com",projectId:"rickandmorty-63a4a",storageBucket:"rickandmorty-63a4a.appspot.com",messagingSenderId:"964947428142",appId:"1:964947428142:web:04458daa1e0b5f906870bf"});var S=b.a.firestore().collection("favs"),C={fetching:!1,array:[],current:{},favorites:[]};var R=function(e){localStorage.favs=JSON.stringify(e)},j=function(){return function(e,a){return e({type:"GET_FAVS"}),function(e){return S.doc(e).get().then((function(e){return e.data().array}))}(a().user.uid).then((function(a){e({type:"GET_FAVS_SUCCESS",payload:Object(h.a)(a)}),R(a)})).catch((function(a){e({type:"GET_FAVS_ERROR",payload:a.message})}))}},_={removeChar:function(){return function(e,a){var t=a().characters.array;t.shift(),e({type:"REMOVE_CHARACTER",payload:Object(h.a)(t)})}},addFavorite:function(){return function(e,a){var t=a(),n=t.characters,r=n.array,c=n.favorites,o=t.user.uid,i=r.shift();c.push(i),function(e,a){S.doc(a).set({array:e})}(c,o),R(c),e({type:"ADD_TO_FAVORITE",payload:{array:Object(h.a)(r),favorites:Object(h.a)(c)}})}}},A=Object(u.b)((function(e){return{chars:e.characters.array}}),_)((function(e){var a=e.chars,t=e.removeChar,n=e.addFavorite;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Personajes de Rick y Morty"),r.a.createElement("div",null,function(){var e=a[0];return r.a.createElement(p,Object.assign({leftClick:t,rightClick:n},e))}()))})),I=(t(77),Object(u.b)((function(e){return{characters:e.characters.favorites}}),null)((function(e){var a=e.characters,t=void 0===a?[0]:a;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Favoritos"),t.map((function(e,a){return r.a.createElement(p,Object.assign({fav:!0},e,{key:a}))})),!t.length&&r.a.createElement("h3",null,"No hay personajes agregados"))}))),N=(t(78),{fetching:!1,loggedIn:!1});var T={doGoogleLoginAction:function(){return function(e,a){return e({type:"LOGIN"}),function(){var e=new b.a.auth.GoogleAuthProvider;return b.a.auth().signInWithPopup(e).then((function(e){return e.user}))}().then((function(t){e({type:"LOGIN_SUCCESS",payload:{uid:t.uid,displayName:t.displayName,email:t.email,photoURL:t.photoURL}}),function(e){localStorage.user=JSON.stringify(e)}(a().user),function(e,a){e({type:"GET_CHARACTERS"}),O.a.get("https://rickandmortyapi.com/api/character").then((function(a){e({type:"GET_CHARACTERS_SUCCES",payload:a.data.results})})).catch((function(a){e({type:"GET_CHARACTERS_ERROR",payload:a.message})}))}(e),j()(e,a)})).catch((function(a){e({type:"LOGIN_ERROR",payload:a.message})}))}},logOutAction:function(){return function(e){b.a.auth().signOut(),e({type:"LOG_OUT"}),localStorage.removeItem("user"),localStorage.removeItem("favs"),function(e){e({type:"CLEAR_FAVS"})}(e)}}},k=Object(u.b)((function(e){var a=e.user;return{fetching:a.fetching,loggedIn:a.loggedIn,displayName:a.displayName,photoURL:a.photoURL}}),T)((function(e){var a=e.fetching,t=e.loggedIn,n=e.displayName,c=e.photoURL,o=e.doGoogleLoginAction,i=e.logOutAction;return a?r.a.createElement("h2",null,"Esperando inicio con Google..."):r.a.createElement("div",{className:"container"},t?r.a.createElement("h1",null,n):r.a.createElement("h1",null,"Inicia Sesi\xf3n con Google"),t&&r.a.createElement("img",{src:c,height:"150",alt:"userPhoto"}),t?r.a.createElement("button",{onClick:i},"Cerrar Sesi\xf3n"):r.a.createElement("button",{onClick:function(){o()}},"Iniciar"))})),G=function(e){var a=e.path,t=e.component,n=e.loggedIn,c=Object(l.a)(e,["path","component","loggedIn"]);return n?r.a.createElement(s.b,Object.assign({path:a,component:t},c)):(alert("Inicia sesi\xf3n para ver este apartado"),r.a.createElement(s.a,Object.assign({to:"/login"},c)))},L=Object(u.b)((function(e){return{loggedIn:e.user.loggedIn}}),null)((function(e){var a=e.loggedIn;return r.a.createElement(s.d,null,r.a.createElement(G,{exact:!0,path:"/",component:A,loggedIn:a}),r.a.createElement(G,{path:"/favs",component:I,loggedIn:a}),r.a.createElement(s.b,{path:"/login",component:k}))})),U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement(i.b,{className:"link",activeClassName:"active",exact:!0,to:"/"},"Inicio"),r.a.createElement(i.b,{className:"link",activeClassName:"active",exact:!0,to:"/favs"},"Favoritos"),r.a.createElement(i.b,{className:"link",activeClassName:"active",exact:!0,to:"/login"},"Login")),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(80);var F=t(13),w=t(41),V=Object(F.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN":return Object(E.a)(Object(E.a)({},e),{},{fetching:!0});case"LOGIN_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{fetching:!1,loggedIn:!0},a.payload);case"LOGIN_ERROR":return Object(E.a)(Object(E.a)({},e),{},{fetching:!1,error:a.payload});case"LOG_OUT":return Object(E.a)({},N);default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_CHARACTERS":return Object(E.a)(Object(E.a)({},e),{},{fetching:!0});case"GET_CHARACTERS_SUCCES":return Object(E.a)(Object(E.a)({},e),{},{array:a.payload,fetching:!1});case"GET_CHARACTERS_ERROR":return Object(E.a)(Object(E.a)({},e),{},{fetching:!1,errChars:a.payload});case"REMOVE_CHARACTER":return Object(E.a)(Object(E.a)({},e),{},{array:a.payload});case"ADD_TO_FAVORITE":return Object(E.a)(Object(E.a)({},e),a.payload);case"GET_FAVS":return Object(E.a)(Object(E.a)({},e),{},{fetching:!0});case"GET_FAVS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{fetching:!1,favorites:a.payload});case"GET_FAVS_ERROR":return Object(E.a)(Object(E.a)({},e),{},{fetching:!1,errFavs:a.payload});case"CLEAR_FAVS":return Object(E.a)({},C);default:return e}}}),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d;var H=function(){var e=Object(F.e)(V,x(Object(F.a)(w.a)));return function(e){var a=localStorage.getItem("user");(a=JSON.parse(a))&&e({type:"LOGIN_SUCCESS",payload:a})}(e.dispatch),function(e){var a=localStorage.getItem("favs");(a=JSON.parse(a))&&e({type:"GET_FAVS_SUCCESS",payload:a})}(e.dispatch),e}();o.a.render(r.a.createElement(u.a,{store:H},r.a.createElement(i.a,null,r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.8baeb4c0.chunk.js.map