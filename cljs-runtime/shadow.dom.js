goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44629 = coll;
var G__44630 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44629,G__44630) : shadow.dom.lazy_native_coll_seq.call(null,G__44629,G__44630));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__44699 = arguments.length;
switch (G__44699) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__44718 = arguments.length;
switch (G__44718) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__44737 = arguments.length;
switch (G__44737) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__44749 = arguments.length;
switch (G__44749) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__44769 = arguments.length;
switch (G__44769) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__44777 = document;
var G__44778 = shadow.dom.dom_node(el);
return goog.dom.contains(G__44777,G__44778);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__44784 = shadow.dom.dom_node(parent);
var G__44785 = shadow.dom.dom_node(el);
return goog.dom.contains(G__44784,G__44785);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__44791 = shadow.dom.dom_node(el);
var G__44792 = cls;
return goog.dom.classlist.add(G__44791,G__44792);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__44806 = shadow.dom.dom_node(el);
var G__44807 = cls;
return goog.dom.classlist.remove(G__44806,G__44807);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__44819 = arguments.length;
switch (G__44819) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__44827 = shadow.dom.dom_node(el);
var G__44828 = cls;
return goog.dom.classlist.toggle(G__44827,G__44828);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e44832){if((e44832 instanceof Object)){
var e = e44832;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44832;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__44838 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44839 = null;
var count__44840 = (0);
var i__44841 = (0);
while(true){
if((i__44841 < count__44840)){
var el = chunk__44839.cljs$core$IIndexed$_nth$arity$2(null,i__44841);
var handler_45883__$1 = ((function (seq__44838,chunk__44839,count__44840,i__44841,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44838,chunk__44839,count__44840,i__44841,el))
;
var G__44862_45884 = el;
var G__44863_45885 = cljs.core.name(ev);
var G__44864_45886 = handler_45883__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__44862_45884,G__44863_45885,G__44864_45886) : shadow.dom.dom_listen.call(null,G__44862_45884,G__44863_45885,G__44864_45886));


var G__45888 = seq__44838;
var G__45889 = chunk__44839;
var G__45890 = count__44840;
var G__45891 = (i__44841 + (1));
seq__44838 = G__45888;
chunk__44839 = G__45889;
count__44840 = G__45890;
i__44841 = G__45891;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44838);
if(temp__5735__auto__){
var seq__44838__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44838__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44838__$1);
var G__45892 = cljs.core.chunk_rest(seq__44838__$1);
var G__45893 = c__4550__auto__;
var G__45894 = cljs.core.count(c__4550__auto__);
var G__45895 = (0);
seq__44838 = G__45892;
chunk__44839 = G__45893;
count__44840 = G__45894;
i__44841 = G__45895;
continue;
} else {
var el = cljs.core.first(seq__44838__$1);
var handler_45896__$1 = ((function (seq__44838,chunk__44839,count__44840,i__44841,el,seq__44838__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44838,chunk__44839,count__44840,i__44841,el,seq__44838__$1,temp__5735__auto__))
;
var G__44872_45897 = el;
var G__44873_45898 = cljs.core.name(ev);
var G__44874_45899 = handler_45896__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__44872_45897,G__44873_45898,G__44874_45899) : shadow.dom.dom_listen.call(null,G__44872_45897,G__44873_45898,G__44874_45899));


var G__45900 = cljs.core.next(seq__44838__$1);
var G__45901 = null;
var G__45902 = (0);
var G__45903 = (0);
seq__44838 = G__45900;
chunk__44839 = G__45901;
count__44840 = G__45902;
i__44841 = G__45903;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__44880 = arguments.length;
switch (G__44880) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__44888 = shadow.dom.dom_node(el);
var G__44889 = cljs.core.name(ev);
var G__44890 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__44888,G__44889,G__44890) : shadow.dom.dom_listen.call(null,G__44888,G__44889,G__44890));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__44895 = shadow.dom.dom_node(el);
var G__44896 = cljs.core.name(ev);
var G__44897 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__44895,G__44896,G__44897) : shadow.dom.dom_listen_remove.call(null,G__44895,G__44896,G__44897));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__44899 = cljs.core.seq(events);
var chunk__44900 = null;
var count__44901 = (0);
var i__44902 = (0);
while(true){
if((i__44902 < count__44901)){
var vec__44920 = chunk__44900.cljs$core$IIndexed$_nth$arity$2(null,i__44902);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44920,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45913 = seq__44899;
var G__45914 = chunk__44900;
var G__45915 = count__44901;
var G__45916 = (i__44902 + (1));
seq__44899 = G__45913;
chunk__44900 = G__45914;
count__44901 = G__45915;
i__44902 = G__45916;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44899);
if(temp__5735__auto__){
var seq__44899__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44899__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44899__$1);
var G__45917 = cljs.core.chunk_rest(seq__44899__$1);
var G__45918 = c__4550__auto__;
var G__45919 = cljs.core.count(c__4550__auto__);
var G__45920 = (0);
seq__44899 = G__45917;
chunk__44900 = G__45918;
count__44901 = G__45919;
i__44902 = G__45920;
continue;
} else {
var vec__44941 = cljs.core.first(seq__44899__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45921 = cljs.core.next(seq__44899__$1);
var G__45922 = null;
var G__45923 = (0);
var G__45924 = (0);
seq__44899 = G__45921;
chunk__44900 = G__45922;
count__44901 = G__45923;
i__44902 = G__45924;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__44962 = cljs.core.seq(styles);
var chunk__44963 = null;
var count__44964 = (0);
var i__44965 = (0);
while(true){
if((i__44965 < count__44964)){
var vec__45006 = chunk__44963.cljs$core$IIndexed$_nth$arity$2(null,i__44965);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45006,(1),null);
var G__45010_45926 = dom;
var G__45011_45927 = cljs.core.name(k);
var G__45012_45928 = (((v == null))?"":v);
goog.style.setStyle(G__45010_45926,G__45011_45927,G__45012_45928);


var G__45933 = seq__44962;
var G__45934 = chunk__44963;
var G__45935 = count__44964;
var G__45936 = (i__44965 + (1));
seq__44962 = G__45933;
chunk__44963 = G__45934;
count__44964 = G__45935;
i__44965 = G__45936;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44962);
if(temp__5735__auto__){
var seq__44962__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44962__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44962__$1);
var G__45937 = cljs.core.chunk_rest(seq__44962__$1);
var G__45938 = c__4550__auto__;
var G__45939 = cljs.core.count(c__4550__auto__);
var G__45940 = (0);
seq__44962 = G__45937;
chunk__44963 = G__45938;
count__44964 = G__45939;
i__44965 = G__45940;
continue;
} else {
var vec__45016 = cljs.core.first(seq__44962__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45016,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45016,(1),null);
var G__45019_45944 = dom;
var G__45020_45945 = cljs.core.name(k);
var G__45021_45946 = (((v == null))?"":v);
goog.style.setStyle(G__45019_45944,G__45020_45945,G__45021_45946);


var G__45947 = cljs.core.next(seq__44962__$1);
var G__45948 = null;
var G__45949 = (0);
var G__45950 = (0);
seq__44962 = G__45947;
chunk__44963 = G__45948;
count__44964 = G__45949;
i__44965 = G__45950;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45037_45952 = key;
var G__45037_45953__$1 = (((G__45037_45952 instanceof cljs.core.Keyword))?G__45037_45952.fqn:null);
switch (G__45037_45953__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45969 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_45969,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_45969,"aria-");
}
})())){
el.setAttribute(ks_45969,value);
} else {
(el[ks_45969] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__45061 = shadow.dom.dom_node(el);
var G__45062 = cls;
return goog.dom.classlist.contains(G__45061,G__45062);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45078){
var map__45079 = p__45078;
var map__45079__$1 = (((((!((map__45079 == null))))?(((((map__45079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45079):map__45079);
var props = map__45079__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45079__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45085 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45085,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45085,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45085,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45088 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45088,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45088;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45097 = arguments.length;
switch (G__45097) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45107){
var vec__45108 = p__45107;
var seq__45109 = cljs.core.seq(vec__45108);
var first__45110 = cljs.core.first(seq__45109);
var seq__45109__$1 = cljs.core.next(seq__45109);
var nn = first__45110;
var first__45110__$1 = cljs.core.first(seq__45109__$1);
var seq__45109__$2 = cljs.core.next(seq__45109__$1);
var np = first__45110__$1;
var nc = seq__45109__$2;
var node = vec__45108;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45111 = nn;
var G__45112 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45111,G__45112) : create_fn.call(null,G__45111,G__45112));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45116 = nn;
var G__45117 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45116,G__45117) : create_fn.call(null,G__45116,G__45117));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45122 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45122,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45122,(1),null);
var seq__45125_45990 = cljs.core.seq(node_children);
var chunk__45126_45991 = null;
var count__45127_45992 = (0);
var i__45128_45993 = (0);
while(true){
if((i__45128_45993 < count__45127_45992)){
var child_struct_45994 = chunk__45126_45991.cljs$core$IIndexed$_nth$arity$2(null,i__45128_45993);
var children_45995 = shadow.dom.dom_node(child_struct_45994);
if(cljs.core.seq_QMARK_(children_45995)){
var seq__45179_45996 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45995));
var chunk__45182_45997 = null;
var count__45183_45998 = (0);
var i__45184_45999 = (0);
while(true){
if((i__45184_45999 < count__45183_45998)){
var child_46001 = chunk__45182_45997.cljs$core$IIndexed$_nth$arity$2(null,i__45184_45999);
if(cljs.core.truth_(child_46001)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46001);


var G__46002 = seq__45179_45996;
var G__46003 = chunk__45182_45997;
var G__46004 = count__45183_45998;
var G__46005 = (i__45184_45999 + (1));
seq__45179_45996 = G__46002;
chunk__45182_45997 = G__46003;
count__45183_45998 = G__46004;
i__45184_45999 = G__46005;
continue;
} else {
var G__46006 = seq__45179_45996;
var G__46007 = chunk__45182_45997;
var G__46008 = count__45183_45998;
var G__46009 = (i__45184_45999 + (1));
seq__45179_45996 = G__46006;
chunk__45182_45997 = G__46007;
count__45183_45998 = G__46008;
i__45184_45999 = G__46009;
continue;
}
} else {
var temp__5735__auto___46010 = cljs.core.seq(seq__45179_45996);
if(temp__5735__auto___46010){
var seq__45179_46011__$1 = temp__5735__auto___46010;
if(cljs.core.chunked_seq_QMARK_(seq__45179_46011__$1)){
var c__4550__auto___46013 = cljs.core.chunk_first(seq__45179_46011__$1);
var G__46014 = cljs.core.chunk_rest(seq__45179_46011__$1);
var G__46015 = c__4550__auto___46013;
var G__46016 = cljs.core.count(c__4550__auto___46013);
var G__46017 = (0);
seq__45179_45996 = G__46014;
chunk__45182_45997 = G__46015;
count__45183_45998 = G__46016;
i__45184_45999 = G__46017;
continue;
} else {
var child_46019 = cljs.core.first(seq__45179_46011__$1);
if(cljs.core.truth_(child_46019)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46019);


var G__46020 = cljs.core.next(seq__45179_46011__$1);
var G__46021 = null;
var G__46022 = (0);
var G__46023 = (0);
seq__45179_45996 = G__46020;
chunk__45182_45997 = G__46021;
count__45183_45998 = G__46022;
i__45184_45999 = G__46023;
continue;
} else {
var G__46025 = cljs.core.next(seq__45179_46011__$1);
var G__46026 = null;
var G__46027 = (0);
var G__46028 = (0);
seq__45179_45996 = G__46025;
chunk__45182_45997 = G__46026;
count__45183_45998 = G__46027;
i__45184_45999 = G__46028;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45995);
}


var G__46029 = seq__45125_45990;
var G__46030 = chunk__45126_45991;
var G__46031 = count__45127_45992;
var G__46032 = (i__45128_45993 + (1));
seq__45125_45990 = G__46029;
chunk__45126_45991 = G__46030;
count__45127_45992 = G__46031;
i__45128_45993 = G__46032;
continue;
} else {
var temp__5735__auto___46033 = cljs.core.seq(seq__45125_45990);
if(temp__5735__auto___46033){
var seq__45125_46034__$1 = temp__5735__auto___46033;
if(cljs.core.chunked_seq_QMARK_(seq__45125_46034__$1)){
var c__4550__auto___46035 = cljs.core.chunk_first(seq__45125_46034__$1);
var G__46036 = cljs.core.chunk_rest(seq__45125_46034__$1);
var G__46037 = c__4550__auto___46035;
var G__46038 = cljs.core.count(c__4550__auto___46035);
var G__46039 = (0);
seq__45125_45990 = G__46036;
chunk__45126_45991 = G__46037;
count__45127_45992 = G__46038;
i__45128_45993 = G__46039;
continue;
} else {
var child_struct_46040 = cljs.core.first(seq__45125_46034__$1);
var children_46041 = shadow.dom.dom_node(child_struct_46040);
if(cljs.core.seq_QMARK_(children_46041)){
var seq__45208_46042 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46041));
var chunk__45210_46043 = null;
var count__45211_46044 = (0);
var i__45212_46045 = (0);
while(true){
if((i__45212_46045 < count__45211_46044)){
var child_46047 = chunk__45210_46043.cljs$core$IIndexed$_nth$arity$2(null,i__45212_46045);
if(cljs.core.truth_(child_46047)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46047);


var G__46048 = seq__45208_46042;
var G__46049 = chunk__45210_46043;
var G__46050 = count__45211_46044;
var G__46051 = (i__45212_46045 + (1));
seq__45208_46042 = G__46048;
chunk__45210_46043 = G__46049;
count__45211_46044 = G__46050;
i__45212_46045 = G__46051;
continue;
} else {
var G__46052 = seq__45208_46042;
var G__46053 = chunk__45210_46043;
var G__46054 = count__45211_46044;
var G__46055 = (i__45212_46045 + (1));
seq__45208_46042 = G__46052;
chunk__45210_46043 = G__46053;
count__45211_46044 = G__46054;
i__45212_46045 = G__46055;
continue;
}
} else {
var temp__5735__auto___46058__$1 = cljs.core.seq(seq__45208_46042);
if(temp__5735__auto___46058__$1){
var seq__45208_46059__$1 = temp__5735__auto___46058__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45208_46059__$1)){
var c__4550__auto___46060 = cljs.core.chunk_first(seq__45208_46059__$1);
var G__46061 = cljs.core.chunk_rest(seq__45208_46059__$1);
var G__46062 = c__4550__auto___46060;
var G__46063 = cljs.core.count(c__4550__auto___46060);
var G__46064 = (0);
seq__45208_46042 = G__46061;
chunk__45210_46043 = G__46062;
count__45211_46044 = G__46063;
i__45212_46045 = G__46064;
continue;
} else {
var child_46066 = cljs.core.first(seq__45208_46059__$1);
if(cljs.core.truth_(child_46066)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46066);


var G__46072 = cljs.core.next(seq__45208_46059__$1);
var G__46073 = null;
var G__46074 = (0);
var G__46075 = (0);
seq__45208_46042 = G__46072;
chunk__45210_46043 = G__46073;
count__45211_46044 = G__46074;
i__45212_46045 = G__46075;
continue;
} else {
var G__46081 = cljs.core.next(seq__45208_46059__$1);
var G__46082 = null;
var G__46083 = (0);
var G__46084 = (0);
seq__45208_46042 = G__46081;
chunk__45210_46043 = G__46082;
count__45211_46044 = G__46083;
i__45212_46045 = G__46084;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46041);
}


var G__46086 = cljs.core.next(seq__45125_46034__$1);
var G__46087 = null;
var G__46088 = (0);
var G__46089 = (0);
seq__45125_45990 = G__46086;
chunk__45126_45991 = G__46087;
count__45127_45992 = G__46088;
i__45128_45993 = G__46089;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__45251 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__45251);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__45255 = cljs.core.seq(node);
var chunk__45256 = null;
var count__45257 = (0);
var i__45258 = (0);
while(true){
if((i__45258 < count__45257)){
var n = chunk__45256.cljs$core$IIndexed$_nth$arity$2(null,i__45258);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46117 = seq__45255;
var G__46118 = chunk__45256;
var G__46119 = count__45257;
var G__46120 = (i__45258 + (1));
seq__45255 = G__46117;
chunk__45256 = G__46118;
count__45257 = G__46119;
i__45258 = G__46120;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45255);
if(temp__5735__auto__){
var seq__45255__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45255__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45255__$1);
var G__46121 = cljs.core.chunk_rest(seq__45255__$1);
var G__46122 = c__4550__auto__;
var G__46123 = cljs.core.count(c__4550__auto__);
var G__46124 = (0);
seq__45255 = G__46121;
chunk__45256 = G__46122;
count__45257 = G__46123;
i__45258 = G__46124;
continue;
} else {
var n = cljs.core.first(seq__45255__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46125 = cljs.core.next(seq__45255__$1);
var G__46126 = null;
var G__46127 = (0);
var G__46128 = (0);
seq__45255 = G__46125;
chunk__45256 = G__46126;
count__45257 = G__46127;
i__45258 = G__46128;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__45263 = shadow.dom.dom_node(new$);
var G__45264 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__45263,G__45264);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__45269 = arguments.length;
switch (G__45269) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__45275 = arguments.length;
switch (G__45275) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__45291 = arguments.length;
switch (G__45291) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46139 = arguments.length;
var i__4731__auto___46140 = (0);
while(true){
if((i__4731__auto___46140 < len__4730__auto___46139)){
args__4736__auto__.push((arguments[i__4731__auto___46140]));

var G__46141 = (i__4731__auto___46140 + (1));
i__4731__auto___46140 = G__46141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__45337_46142 = cljs.core.seq(nodes);
var chunk__45338_46143 = null;
var count__45339_46144 = (0);
var i__45340_46145 = (0);
while(true){
if((i__45340_46145 < count__45339_46144)){
var node_46146 = chunk__45338_46143.cljs$core$IIndexed$_nth$arity$2(null,i__45340_46145);
fragment.appendChild(shadow.dom._to_dom(node_46146));


var G__46147 = seq__45337_46142;
var G__46148 = chunk__45338_46143;
var G__46149 = count__45339_46144;
var G__46150 = (i__45340_46145 + (1));
seq__45337_46142 = G__46147;
chunk__45338_46143 = G__46148;
count__45339_46144 = G__46149;
i__45340_46145 = G__46150;
continue;
} else {
var temp__5735__auto___46151 = cljs.core.seq(seq__45337_46142);
if(temp__5735__auto___46151){
var seq__45337_46152__$1 = temp__5735__auto___46151;
if(cljs.core.chunked_seq_QMARK_(seq__45337_46152__$1)){
var c__4550__auto___46155 = cljs.core.chunk_first(seq__45337_46152__$1);
var G__46156 = cljs.core.chunk_rest(seq__45337_46152__$1);
var G__46157 = c__4550__auto___46155;
var G__46158 = cljs.core.count(c__4550__auto___46155);
var G__46159 = (0);
seq__45337_46142 = G__46156;
chunk__45338_46143 = G__46157;
count__45339_46144 = G__46158;
i__45340_46145 = G__46159;
continue;
} else {
var node_46160 = cljs.core.first(seq__45337_46152__$1);
fragment.appendChild(shadow.dom._to_dom(node_46160));


var G__46161 = cljs.core.next(seq__45337_46152__$1);
var G__46162 = null;
var G__46163 = (0);
var G__46164 = (0);
seq__45337_46142 = G__46161;
chunk__45338_46143 = G__46162;
count__45339_46144 = G__46163;
i__45340_46145 = G__46164;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq45333){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45333));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45356_46168 = cljs.core.seq(scripts);
var chunk__45357_46169 = null;
var count__45358_46170 = (0);
var i__45359_46171 = (0);
while(true){
if((i__45359_46171 < count__45358_46170)){
var vec__45370_46177 = chunk__45357_46169.cljs$core$IIndexed$_nth$arity$2(null,i__45359_46171);
var script_tag_46178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45370_46177,(0),null);
var script_body_46179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45370_46177,(1),null);
eval(script_body_46179);


var G__46180 = seq__45356_46168;
var G__46181 = chunk__45357_46169;
var G__46182 = count__45358_46170;
var G__46183 = (i__45359_46171 + (1));
seq__45356_46168 = G__46180;
chunk__45357_46169 = G__46181;
count__45358_46170 = G__46182;
i__45359_46171 = G__46183;
continue;
} else {
var temp__5735__auto___46184 = cljs.core.seq(seq__45356_46168);
if(temp__5735__auto___46184){
var seq__45356_46185__$1 = temp__5735__auto___46184;
if(cljs.core.chunked_seq_QMARK_(seq__45356_46185__$1)){
var c__4550__auto___46186 = cljs.core.chunk_first(seq__45356_46185__$1);
var G__46187 = cljs.core.chunk_rest(seq__45356_46185__$1);
var G__46188 = c__4550__auto___46186;
var G__46189 = cljs.core.count(c__4550__auto___46186);
var G__46190 = (0);
seq__45356_46168 = G__46187;
chunk__45357_46169 = G__46188;
count__45358_46170 = G__46189;
i__45359_46171 = G__46190;
continue;
} else {
var vec__45380_46191 = cljs.core.first(seq__45356_46185__$1);
var script_tag_46192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45380_46191,(0),null);
var script_body_46193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45380_46191,(1),null);
eval(script_body_46193);


var G__46194 = cljs.core.next(seq__45356_46185__$1);
var G__46195 = null;
var G__46196 = (0);
var G__46197 = (0);
seq__45356_46168 = G__46194;
chunk__45357_46169 = G__46195;
count__45358_46170 = G__46196;
i__45359_46171 = G__46197;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__45386){
var vec__45388 = p__45386;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45388,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45388,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__45397 = shadow.dom.dom_node(el);
var G__45398 = cls;
return goog.dom.getAncestorByClass(G__45397,G__45398);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__45407 = arguments.length;
switch (G__45407) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__45413 = shadow.dom.dom_node(el);
var G__45414 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__45413,G__45414);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__45416 = shadow.dom.dom_node(el);
var G__45417 = cljs.core.name(tag);
var G__45418 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__45416,G__45417,G__45418);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__45420 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__45420);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__45423 = shadow.dom.dom_node(dom);
var G__45424 = value;
return goog.dom.forms.setValue(G__45423,G__45424);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__45440 = cljs.core.seq(style_keys);
var chunk__45441 = null;
var count__45442 = (0);
var i__45443 = (0);
while(true){
if((i__45443 < count__45442)){
var it = chunk__45441.cljs$core$IIndexed$_nth$arity$2(null,i__45443);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46216 = seq__45440;
var G__46217 = chunk__45441;
var G__46218 = count__45442;
var G__46219 = (i__45443 + (1));
seq__45440 = G__46216;
chunk__45441 = G__46217;
count__45442 = G__46218;
i__45443 = G__46219;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45440);
if(temp__5735__auto__){
var seq__45440__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45440__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45440__$1);
var G__46223 = cljs.core.chunk_rest(seq__45440__$1);
var G__46224 = c__4550__auto__;
var G__46225 = cljs.core.count(c__4550__auto__);
var G__46226 = (0);
seq__45440 = G__46223;
chunk__45441 = G__46224;
count__45442 = G__46225;
i__45443 = G__46226;
continue;
} else {
var it = cljs.core.first(seq__45440__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46227 = cljs.core.next(seq__45440__$1);
var G__46228 = null;
var G__46229 = (0);
var G__46230 = (0);
seq__45440 = G__46227;
chunk__45441 = G__46228;
count__45442 = G__46229;
i__45443 = G__46230;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k45463,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__45474 = k45463;
var G__45474__$1 = (((G__45474 instanceof cljs.core.Keyword))?G__45474.fqn:null);
switch (G__45474__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45463,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__45479){
var vec__45480 = p__45479;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45480,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45480,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45462){
var self__ = this;
var G__45462__$1 = this;
return (new cljs.core.RecordIter((0),G__45462__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__45500 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__45500(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45464,other45465){
var self__ = this;
var this45464__$1 = this;
return (((!((other45465 == null)))) && ((this45464__$1.constructor === other45465.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45464__$1.x,other45465.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45464__$1.y,other45465.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45464__$1.__extmap,other45465.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__45462){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__45510 = cljs.core.keyword_identical_QMARK_;
var expr__45511 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__45513 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__45514 = expr__45511;
return (pred__45510.cljs$core$IFn$_invoke$arity$2 ? pred__45510.cljs$core$IFn$_invoke$arity$2(G__45513,G__45514) : pred__45510.call(null,G__45513,G__45514));
})())){
return (new shadow.dom.Coordinate(G__45462,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45517 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__45518 = expr__45511;
return (pred__45510.cljs$core$IFn$_invoke$arity$2 ? pred__45510.cljs$core$IFn$_invoke$arity$2(G__45517,G__45518) : pred__45510.call(null,G__45517,G__45518));
})())){
return (new shadow.dom.Coordinate(self__.x,G__45462,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__45462),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__45462){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45462,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45468){
var extmap__4424__auto__ = (function (){var G__45552 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45468,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45468)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45552);
} else {
return G__45552;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45468),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45468),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__45559 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__45559);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__45562 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__45562);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__45566 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__45566);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k45569,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__45589 = k45569;
var G__45589__$1 = (((G__45589 instanceof cljs.core.Keyword))?G__45589.fqn:null);
switch (G__45589__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45569,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__45595){
var vec__45597 = p__45595;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45597,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45597,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45568){
var self__ = this;
var G__45568__$1 = this;
return (new cljs.core.RecordIter((0),G__45568__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__45623 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__45623(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45570,other45571){
var self__ = this;
var this45570__$1 = this;
return (((!((other45571 == null)))) && ((this45570__$1.constructor === other45571.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45570__$1.w,other45571.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45570__$1.h,other45571.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45570__$1.__extmap,other45571.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__45568){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__45637 = cljs.core.keyword_identical_QMARK_;
var expr__45638 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__45640 = new cljs.core.Keyword(null,"w","w",354169001);
var G__45641 = expr__45638;
return (pred__45637.cljs$core$IFn$_invoke$arity$2 ? pred__45637.cljs$core$IFn$_invoke$arity$2(G__45640,G__45641) : pred__45637.call(null,G__45640,G__45641));
})())){
return (new shadow.dom.Size(G__45568,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45642 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__45643 = expr__45638;
return (pred__45637.cljs$core$IFn$_invoke$arity$2 ? pred__45637.cljs$core$IFn$_invoke$arity$2(G__45642,G__45643) : pred__45637.call(null,G__45642,G__45643));
})())){
return (new shadow.dom.Size(self__.w,G__45568,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__45568),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__45568){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45568,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45574){
var extmap__4424__auto__ = (function (){var G__45653 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45574,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45574)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45653);
} else {
return G__45653;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45574),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45574),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__45660 = shadow.dom.dom_node(el);
return goog.style.getSize(G__45660);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__46286 = (i + (1));
var G__46287 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46286;
ret = G__46287;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45679){
var vec__45681 = p__45679;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45681,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45681,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45685 = arguments.length;
switch (G__45685) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__45691_46289 = new_node;
var G__45692_46290 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__45691_46289,G__45692_46290);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__45696_46291 = new_node;
var G__45697_46292 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__45696_46291,G__45697_46292);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46293 = ps;
var G__46294 = (i + (1));
el__$1 = G__46293;
i = G__46294;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__45703 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__45703);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__45707 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__45707);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__45708 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__45708);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__45710 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45710,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45710,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45710,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45713_46299 = cljs.core.seq(props);
var chunk__45714_46300 = null;
var count__45715_46301 = (0);
var i__45716_46302 = (0);
while(true){
if((i__45716_46302 < count__45715_46301)){
var vec__45741_46303 = chunk__45714_46300.cljs$core$IIndexed$_nth$arity$2(null,i__45716_46302);
var k_46304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45741_46303,(0),null);
var v_46305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45741_46303,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_46304);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46304),v_46305);


var G__46308 = seq__45713_46299;
var G__46309 = chunk__45714_46300;
var G__46310 = count__45715_46301;
var G__46311 = (i__45716_46302 + (1));
seq__45713_46299 = G__46308;
chunk__45714_46300 = G__46309;
count__45715_46301 = G__46310;
i__45716_46302 = G__46311;
continue;
} else {
var temp__5735__auto___46312 = cljs.core.seq(seq__45713_46299);
if(temp__5735__auto___46312){
var seq__45713_46313__$1 = temp__5735__auto___46312;
if(cljs.core.chunked_seq_QMARK_(seq__45713_46313__$1)){
var c__4550__auto___46315 = cljs.core.chunk_first(seq__45713_46313__$1);
var G__46316 = cljs.core.chunk_rest(seq__45713_46313__$1);
var G__46317 = c__4550__auto___46315;
var G__46318 = cljs.core.count(c__4550__auto___46315);
var G__46319 = (0);
seq__45713_46299 = G__46316;
chunk__45714_46300 = G__46317;
count__45715_46301 = G__46318;
i__45716_46302 = G__46319;
continue;
} else {
var vec__45749_46320 = cljs.core.first(seq__45713_46313__$1);
var k_46321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45749_46320,(0),null);
var v_46322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45749_46320,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_46321);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46321),v_46322);


var G__46323 = cljs.core.next(seq__45713_46313__$1);
var G__46324 = null;
var G__46325 = (0);
var G__46326 = (0);
seq__45713_46299 = G__46323;
chunk__45714_46300 = G__46324;
count__45715_46301 = G__46325;
i__45716_46302 = G__46326;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__45765 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45765,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45765,(1),null);
var seq__45768_46327 = cljs.core.seq(node_children);
var chunk__45770_46328 = null;
var count__45771_46329 = (0);
var i__45772_46330 = (0);
while(true){
if((i__45772_46330 < count__45771_46329)){
var child_struct_46331 = chunk__45770_46328.cljs$core$IIndexed$_nth$arity$2(null,i__45772_46330);
if((!((child_struct_46331 == null)))){
if(typeof child_struct_46331 === 'string'){
var text_46332 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46332),child_struct_46331].join(''));
} else {
var children_46333 = shadow.dom.svg_node(child_struct_46331);
if(cljs.core.seq_QMARK_(children_46333)){
var seq__45803_46334 = cljs.core.seq(children_46333);
var chunk__45805_46335 = null;
var count__45806_46336 = (0);
var i__45807_46337 = (0);
while(true){
if((i__45807_46337 < count__45806_46336)){
var child_46338 = chunk__45805_46335.cljs$core$IIndexed$_nth$arity$2(null,i__45807_46337);
if(cljs.core.truth_(child_46338)){
node.appendChild(child_46338);


var G__46339 = seq__45803_46334;
var G__46340 = chunk__45805_46335;
var G__46341 = count__45806_46336;
var G__46342 = (i__45807_46337 + (1));
seq__45803_46334 = G__46339;
chunk__45805_46335 = G__46340;
count__45806_46336 = G__46341;
i__45807_46337 = G__46342;
continue;
} else {
var G__46344 = seq__45803_46334;
var G__46345 = chunk__45805_46335;
var G__46346 = count__45806_46336;
var G__46347 = (i__45807_46337 + (1));
seq__45803_46334 = G__46344;
chunk__45805_46335 = G__46345;
count__45806_46336 = G__46346;
i__45807_46337 = G__46347;
continue;
}
} else {
var temp__5735__auto___46348 = cljs.core.seq(seq__45803_46334);
if(temp__5735__auto___46348){
var seq__45803_46350__$1 = temp__5735__auto___46348;
if(cljs.core.chunked_seq_QMARK_(seq__45803_46350__$1)){
var c__4550__auto___46351 = cljs.core.chunk_first(seq__45803_46350__$1);
var G__46352 = cljs.core.chunk_rest(seq__45803_46350__$1);
var G__46353 = c__4550__auto___46351;
var G__46354 = cljs.core.count(c__4550__auto___46351);
var G__46355 = (0);
seq__45803_46334 = G__46352;
chunk__45805_46335 = G__46353;
count__45806_46336 = G__46354;
i__45807_46337 = G__46355;
continue;
} else {
var child_46356 = cljs.core.first(seq__45803_46350__$1);
if(cljs.core.truth_(child_46356)){
node.appendChild(child_46356);


var G__46357 = cljs.core.next(seq__45803_46350__$1);
var G__46358 = null;
var G__46359 = (0);
var G__46360 = (0);
seq__45803_46334 = G__46357;
chunk__45805_46335 = G__46358;
count__45806_46336 = G__46359;
i__45807_46337 = G__46360;
continue;
} else {
var G__46361 = cljs.core.next(seq__45803_46350__$1);
var G__46362 = null;
var G__46363 = (0);
var G__46364 = (0);
seq__45803_46334 = G__46361;
chunk__45805_46335 = G__46362;
count__45806_46336 = G__46363;
i__45807_46337 = G__46364;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46333);
}
}


var G__46365 = seq__45768_46327;
var G__46366 = chunk__45770_46328;
var G__46367 = count__45771_46329;
var G__46368 = (i__45772_46330 + (1));
seq__45768_46327 = G__46365;
chunk__45770_46328 = G__46366;
count__45771_46329 = G__46367;
i__45772_46330 = G__46368;
continue;
} else {
var G__46369 = seq__45768_46327;
var G__46370 = chunk__45770_46328;
var G__46371 = count__45771_46329;
var G__46372 = (i__45772_46330 + (1));
seq__45768_46327 = G__46369;
chunk__45770_46328 = G__46370;
count__45771_46329 = G__46371;
i__45772_46330 = G__46372;
continue;
}
} else {
var temp__5735__auto___46373 = cljs.core.seq(seq__45768_46327);
if(temp__5735__auto___46373){
var seq__45768_46374__$1 = temp__5735__auto___46373;
if(cljs.core.chunked_seq_QMARK_(seq__45768_46374__$1)){
var c__4550__auto___46375 = cljs.core.chunk_first(seq__45768_46374__$1);
var G__46376 = cljs.core.chunk_rest(seq__45768_46374__$1);
var G__46377 = c__4550__auto___46375;
var G__46378 = cljs.core.count(c__4550__auto___46375);
var G__46379 = (0);
seq__45768_46327 = G__46376;
chunk__45770_46328 = G__46377;
count__45771_46329 = G__46378;
i__45772_46330 = G__46379;
continue;
} else {
var child_struct_46381 = cljs.core.first(seq__45768_46374__$1);
if((!((child_struct_46381 == null)))){
if(typeof child_struct_46381 === 'string'){
var text_46382 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46382),child_struct_46381].join(''));
} else {
var children_46383 = shadow.dom.svg_node(child_struct_46381);
if(cljs.core.seq_QMARK_(children_46383)){
var seq__45819_46384 = cljs.core.seq(children_46383);
var chunk__45821_46385 = null;
var count__45822_46386 = (0);
var i__45823_46387 = (0);
while(true){
if((i__45823_46387 < count__45822_46386)){
var child_46388 = chunk__45821_46385.cljs$core$IIndexed$_nth$arity$2(null,i__45823_46387);
if(cljs.core.truth_(child_46388)){
node.appendChild(child_46388);


var G__46389 = seq__45819_46384;
var G__46390 = chunk__45821_46385;
var G__46391 = count__45822_46386;
var G__46392 = (i__45823_46387 + (1));
seq__45819_46384 = G__46389;
chunk__45821_46385 = G__46390;
count__45822_46386 = G__46391;
i__45823_46387 = G__46392;
continue;
} else {
var G__46396 = seq__45819_46384;
var G__46398 = chunk__45821_46385;
var G__46399 = count__45822_46386;
var G__46400 = (i__45823_46387 + (1));
seq__45819_46384 = G__46396;
chunk__45821_46385 = G__46398;
count__45822_46386 = G__46399;
i__45823_46387 = G__46400;
continue;
}
} else {
var temp__5735__auto___46401__$1 = cljs.core.seq(seq__45819_46384);
if(temp__5735__auto___46401__$1){
var seq__45819_46402__$1 = temp__5735__auto___46401__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45819_46402__$1)){
var c__4550__auto___46403 = cljs.core.chunk_first(seq__45819_46402__$1);
var G__46404 = cljs.core.chunk_rest(seq__45819_46402__$1);
var G__46405 = c__4550__auto___46403;
var G__46406 = cljs.core.count(c__4550__auto___46403);
var G__46407 = (0);
seq__45819_46384 = G__46404;
chunk__45821_46385 = G__46405;
count__45822_46386 = G__46406;
i__45823_46387 = G__46407;
continue;
} else {
var child_46409 = cljs.core.first(seq__45819_46402__$1);
if(cljs.core.truth_(child_46409)){
node.appendChild(child_46409);


var G__46410 = cljs.core.next(seq__45819_46402__$1);
var G__46411 = null;
var G__46412 = (0);
var G__46413 = (0);
seq__45819_46384 = G__46410;
chunk__45821_46385 = G__46411;
count__45822_46386 = G__46412;
i__45823_46387 = G__46413;
continue;
} else {
var G__46414 = cljs.core.next(seq__45819_46402__$1);
var G__46415 = null;
var G__46416 = (0);
var G__46417 = (0);
seq__45819_46384 = G__46414;
chunk__45821_46385 = G__46415;
count__45822_46386 = G__46416;
i__45823_46387 = G__46417;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46383);
}
}


var G__46418 = cljs.core.next(seq__45768_46374__$1);
var G__46419 = null;
var G__46420 = (0);
var G__46421 = (0);
seq__45768_46327 = G__46418;
chunk__45770_46328 = G__46419;
count__45771_46329 = G__46420;
i__45772_46330 = G__46421;
continue;
} else {
var G__46422 = cljs.core.next(seq__45768_46374__$1);
var G__46423 = null;
var G__46424 = (0);
var G__46425 = (0);
seq__45768_46327 = G__46422;
chunk__45770_46328 = G__46423;
count__45771_46329 = G__46424;
i__45772_46330 = G__46425;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__45829_46427 = shadow.dom._to_svg;
var G__45830_46428 = "string";
var G__45831_46429 = ((function (G__45829_46427,G__45830_46428){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__45829_46427,G__45830_46428))
;
goog.object.set(G__45829_46427,G__45830_46428,G__45831_46429);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__45840_46431 = shadow.dom._to_svg;
var G__45841_46432 = "null";
var G__45842_46433 = ((function (G__45840_46431,G__45841_46432){
return (function (_){
return null;
});})(G__45840_46431,G__45841_46432))
;
goog.object.set(G__45840_46431,G__45841_46432,G__45842_46433);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46435 = arguments.length;
var i__4731__auto___46439 = (0);
while(true){
if((i__4731__auto___46439 < len__4730__auto___46435)){
args__4736__auto__.push((arguments[i__4731__auto___46439]));

var G__46440 = (i__4731__auto___46439 + (1));
i__4731__auto___46439 = G__46440;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq45845){
var G__45846 = cljs.core.first(seq45845);
var seq45845__$1 = cljs.core.next(seq45845);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45846,seq45845__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__45851 = arguments.length;
switch (G__45851) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__45856_46448 = shadow.dom.dom_node(el);
var G__45857_46449 = cljs.core.name(event);
var G__45858_46450 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__45856_46448,G__45857_46449,G__45858_46450) : shadow.dom.dom_listen.call(null,G__45856_46448,G__45857_46449,G__45858_46450));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__40721__auto___46451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___46451,buf,chan,event_fn){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___46451,buf,chan,event_fn){
return (function (state_45864){
var state_val_45865 = (state_45864[(1)]);
if((state_val_45865 === (1))){
var state_45864__$1 = state_45864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45864__$1,(2),once_or_cleanup);
} else {
if((state_val_45865 === (2))){
var inst_45861 = (state_45864[(2)]);
var inst_45862 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45864__$1 = (function (){var statearr_45867 = state_45864;
(statearr_45867[(7)] = inst_45861);

return statearr_45867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45864__$1,inst_45862);
} else {
return null;
}
}
});})(c__40721__auto___46451,buf,chan,event_fn))
;
return ((function (switch__39734__auto__,c__40721__auto___46451,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__39735__auto__ = null;
var shadow$dom$state_machine__39735__auto____0 = (function (){
var statearr_45870 = [null,null,null,null,null,null,null,null];
(statearr_45870[(0)] = shadow$dom$state_machine__39735__auto__);

(statearr_45870[(1)] = (1));

return statearr_45870;
});
var shadow$dom$state_machine__39735__auto____1 = (function (state_45864){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_45864);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e45871){if((e45871 instanceof Object)){
var ex__39738__auto__ = e45871;
var statearr_45872_46453 = state_45864;
(statearr_45872_46453[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46454 = state_45864;
state_45864 = G__46454;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
shadow$dom$state_machine__39735__auto__ = function(state_45864){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__39735__auto____0.call(this);
case 1:
return shadow$dom$state_machine__39735__auto____1.call(this,state_45864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__39735__auto____0;
shadow$dom$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__39735__auto____1;
return shadow$dom$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___46451,buf,chan,event_fn))
})();
var state__40723__auto__ = (function (){var statearr_45873 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_45873[(6)] = c__40721__auto___46451);

return statearr_45873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___46451,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
