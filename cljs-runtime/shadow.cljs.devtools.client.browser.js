goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48150 = arguments.length;
var i__4731__auto___48151 = (0);
while(true){
if((i__4731__auto___48151 < len__4730__auto___48150)){
args__4736__auto__.push((arguments[i__4731__auto___48151]));

var G__48152 = (i__4731__auto___48151 + (1));
i__4731__auto___48151 = G__48152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47958){
var G__47959 = cljs.core.first(seq47958);
var seq47958__$1 = cljs.core.next(seq47958);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47959,seq47958__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__47962){
var map__47963 = p__47962;
var map__47963__$1 = (((((!((map__47963 == null))))?(((((map__47963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47963):map__47963);
var src = map__47963__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47963__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47963__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47966 = cljs.core.seq(sources);
var chunk__47967 = null;
var count__47968 = (0);
var i__47969 = (0);
while(true){
if((i__47969 < count__47968)){
var map__47975 = chunk__47967.cljs$core$IIndexed$_nth$arity$2(null,i__47969);
var map__47975__$1 = (((((!((map__47975 == null))))?(((((map__47975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47975):map__47975);
var src = map__47975__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__48153 = seq__47966;
var G__48154 = chunk__47967;
var G__48155 = count__47968;
var G__48156 = (i__47969 + (1));
seq__47966 = G__48153;
chunk__47967 = G__48154;
count__47968 = G__48155;
i__47969 = G__48156;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47966);
if(temp__5735__auto__){
var seq__47966__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47966__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47966__$1);
var G__48157 = cljs.core.chunk_rest(seq__47966__$1);
var G__48158 = c__4550__auto__;
var G__48159 = cljs.core.count(c__4550__auto__);
var G__48160 = (0);
seq__47966 = G__48157;
chunk__47967 = G__48158;
count__47968 = G__48159;
i__47969 = G__48160;
continue;
} else {
var map__47977 = cljs.core.first(seq__47966__$1);
var map__47977__$1 = (((((!((map__47977 == null))))?(((((map__47977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47977):map__47977);
var src = map__47977__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47977__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47977__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47977__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47977__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__48161 = cljs.core.next(seq__47966__$1);
var G__48162 = null;
var G__48163 = (0);
var G__48164 = (0);
seq__47966 = G__48161;
chunk__47967 = G__48162;
count__47968 = G__48163;
i__47969 = G__48164;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47979 = cljs.core.seq(js_requires);
var chunk__47980 = null;
var count__47981 = (0);
var i__47982 = (0);
while(true){
if((i__47982 < count__47981)){
var js_ns = chunk__47980.cljs$core$IIndexed$_nth$arity$2(null,i__47982);
var require_str_48165 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48165);


var G__48166 = seq__47979;
var G__48167 = chunk__47980;
var G__48168 = count__47981;
var G__48169 = (i__47982 + (1));
seq__47979 = G__48166;
chunk__47980 = G__48167;
count__47981 = G__48168;
i__47982 = G__48169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47979);
if(temp__5735__auto__){
var seq__47979__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47979__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47979__$1);
var G__48170 = cljs.core.chunk_rest(seq__47979__$1);
var G__48171 = c__4550__auto__;
var G__48172 = cljs.core.count(c__4550__auto__);
var G__48173 = (0);
seq__47979 = G__48170;
chunk__47980 = G__48171;
count__47981 = G__48172;
i__47982 = G__48173;
continue;
} else {
var js_ns = cljs.core.first(seq__47979__$1);
var require_str_48174 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48174);


var G__48175 = cljs.core.next(seq__47979__$1);
var G__48176 = null;
var G__48177 = (0);
var G__48178 = (0);
seq__47979 = G__48175;
chunk__47980 = G__48176;
count__47981 = G__48177;
i__47982 = G__48178;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__47983 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__47983) : callback.call(null,G__47983));
} else {
var G__47984 = shadow.cljs.devtools.client.env.files_url();
var G__47985 = ((function (G__47984){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__47984))
;
var G__47986 = "POST";
var G__47987 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__47988 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__47984,G__47985,G__47986,G__47987,G__47988);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__47990){
var map__47991 = p__47990;
var map__47991__$1 = (((((!((map__47991 == null))))?(((((map__47991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47991):map__47991);
var msg = map__47991__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47991__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47991__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__47993 = info;
var map__47993__$1 = (((((!((map__47993 == null))))?(((((map__47993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47993):map__47993);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47993__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47993__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__47993,map__47993__$1,sources,compiled,map__47991,map__47991__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47995(s__47996){
return (new cljs.core.LazySeq(null,((function (map__47993,map__47993__$1,sources,compiled,map__47991,map__47991__$1,msg,info,reload_info){
return (function (){
var s__47996__$1 = s__47996;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47996__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__48001 = cljs.core.first(xs__6292__auto__);
var map__48001__$1 = (((((!((map__48001 == null))))?(((((map__48001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48001):map__48001);
var src = map__48001__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48001__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48001__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__47996__$1,map__48001,map__48001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47993,map__47993__$1,sources,compiled,map__47991,map__47991__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47995_$_iter__47997(s__47998){
return (new cljs.core.LazySeq(null,((function (s__47996__$1,map__48001,map__48001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47993,map__47993__$1,sources,compiled,map__47991,map__47991__$1,msg,info,reload_info){
return (function (){
var s__47998__$1 = s__47998;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47998__$1);
if(temp__5735__auto____$1){
var s__47998__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47998__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__47998__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48000 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__47999 = (0);
while(true){
if((i__47999 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__47999);
cljs.core.chunk_append(b__48000,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48179 = (i__47999 + (1));
i__47999 = G__48179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48000),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47995_$_iter__47997(cljs.core.chunk_rest(s__47998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48000),null);
}
} else {
var warning = cljs.core.first(s__47998__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47995_$_iter__47997(cljs.core.rest(s__47998__$2)));
}
} else {
return null;
}
break;
}
});})(s__47996__$1,map__48001,map__48001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47993,map__47993__$1,sources,compiled,map__47991,map__47991__$1,msg,info,reload_info))
,null,null));
});})(s__47996__$1,map__48001,map__48001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47993,map__47993__$1,sources,compiled,map__47991,map__47991__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47995(cljs.core.rest(s__47996__$1)));
} else {
var G__48180 = cljs.core.rest(s__47996__$1);
s__47996__$1 = G__48180;
continue;
}
} else {
var G__48181 = cljs.core.rest(s__47996__$1);
s__47996__$1 = G__48181;
continue;
}
} else {
return null;
}
break;
}
});})(map__47993,map__47993__$1,sources,compiled,map__47991,map__47991__$1,msg,info,reload_info))
,null,null));
});})(map__47993,map__47993__$1,sources,compiled,map__47991,map__47991__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__48005_48182 = cljs.core.seq(warnings);
var chunk__48006_48183 = null;
var count__48007_48184 = (0);
var i__48008_48185 = (0);
while(true){
if((i__48008_48185 < count__48007_48184)){
var map__48013_48186 = chunk__48006_48183.cljs$core$IIndexed$_nth$arity$2(null,i__48008_48185);
var map__48013_48187__$1 = (((((!((map__48013_48186 == null))))?(((((map__48013_48186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48013_48186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48013_48186):map__48013_48186);
var w_48188 = map__48013_48187__$1;
var msg_48189__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013_48187__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013_48187__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013_48187__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013_48187__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48192)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48190),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48191),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48189__$1)].join(''));


var G__48193 = seq__48005_48182;
var G__48194 = chunk__48006_48183;
var G__48195 = count__48007_48184;
var G__48196 = (i__48008_48185 + (1));
seq__48005_48182 = G__48193;
chunk__48006_48183 = G__48194;
count__48007_48184 = G__48195;
i__48008_48185 = G__48196;
continue;
} else {
var temp__5735__auto___48197 = cljs.core.seq(seq__48005_48182);
if(temp__5735__auto___48197){
var seq__48005_48198__$1 = temp__5735__auto___48197;
if(cljs.core.chunked_seq_QMARK_(seq__48005_48198__$1)){
var c__4550__auto___48199 = cljs.core.chunk_first(seq__48005_48198__$1);
var G__48200 = cljs.core.chunk_rest(seq__48005_48198__$1);
var G__48201 = c__4550__auto___48199;
var G__48202 = cljs.core.count(c__4550__auto___48199);
var G__48203 = (0);
seq__48005_48182 = G__48200;
chunk__48006_48183 = G__48201;
count__48007_48184 = G__48202;
i__48008_48185 = G__48203;
continue;
} else {
var map__48015_48204 = cljs.core.first(seq__48005_48198__$1);
var map__48015_48205__$1 = (((((!((map__48015_48204 == null))))?(((((map__48015_48204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48015_48204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48015_48204):map__48015_48204);
var w_48206 = map__48015_48205__$1;
var msg_48207__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48015_48205__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48015_48205__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48015_48205__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48015_48205__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48210)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48208),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48209),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48207__$1)].join(''));


var G__48211 = cljs.core.next(seq__48005_48198__$1);
var G__48212 = null;
var G__48213 = (0);
var G__48214 = (0);
seq__48005_48182 = G__48211;
chunk__48006_48183 = G__48212;
count__48007_48184 = G__48213;
i__48008_48185 = G__48214;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__47993,map__47993__$1,sources,compiled,warnings,map__47991,map__47991__$1,msg,info,reload_info){
return (function (p__48017){
var map__48018 = p__48017;
var map__48018__$1 = (((((!((map__48018 == null))))?(((((map__48018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48018):map__48018);
var src = map__48018__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48018__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48018__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__47993,map__47993__$1,sources,compiled,warnings,map__47991,map__47991__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__47993,map__47993__$1,sources,compiled,warnings,map__47991,map__47991__$1,msg,info,reload_info){
return (function (p__48020){
var map__48021 = p__48020;
var map__48021__$1 = (((((!((map__48021 == null))))?(((((map__48021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48021):map__48021);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48021__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__47993,map__47993__$1,sources,compiled,warnings,map__47991,map__47991__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__47993,map__47993__$1,sources,compiled,warnings,map__47991,map__47991__$1,msg,info,reload_info){
return (function (p__48023){
var map__48024 = p__48023;
var map__48024__$1 = (((((!((map__48024 == null))))?(((((map__48024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48024):map__48024);
var rc = map__48024__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48024__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__47993,map__47993__$1,sources,compiled,warnings,map__47991,map__47991__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__47993,map__47993__$1,sources,compiled,warnings,map__47991,map__47991__$1,msg,info,reload_info){
return (function (p1__47989_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47989_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__47993,map__47993__$1,sources,compiled,warnings,map__47991,map__47991__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__48026){
var map__48027 = p__48026;
var map__48027__$1 = (((((!((map__48027 == null))))?(((((map__48027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48027):map__48027);
var msg = map__48027__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48027__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__48029 = cljs.core.seq(updates);
var chunk__48031 = null;
var count__48032 = (0);
var i__48033 = (0);
while(true){
if((i__48033 < count__48032)){
var path = chunk__48031.cljs$core$IIndexed$_nth$arity$2(null,i__48033);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48059_48215 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48062_48216 = null;
var count__48063_48217 = (0);
var i__48064_48218 = (0);
while(true){
if((i__48064_48218 < count__48063_48217)){
var node_48219 = chunk__48062_48216.cljs$core$IIndexed$_nth$arity$2(null,i__48064_48218);
var path_match_48220 = shadow.cljs.devtools.client.browser.match_paths(node_48219.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48220)){
var new_link_48221 = (function (){var G__48069 = node_48219.cloneNode(true);
G__48069.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48220),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48069;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48220], 0));

goog.dom.insertSiblingAfter(new_link_48221,node_48219);

goog.dom.removeNode(node_48219);


var G__48222 = seq__48059_48215;
var G__48223 = chunk__48062_48216;
var G__48224 = count__48063_48217;
var G__48225 = (i__48064_48218 + (1));
seq__48059_48215 = G__48222;
chunk__48062_48216 = G__48223;
count__48063_48217 = G__48224;
i__48064_48218 = G__48225;
continue;
} else {
var G__48226 = seq__48059_48215;
var G__48227 = chunk__48062_48216;
var G__48228 = count__48063_48217;
var G__48229 = (i__48064_48218 + (1));
seq__48059_48215 = G__48226;
chunk__48062_48216 = G__48227;
count__48063_48217 = G__48228;
i__48064_48218 = G__48229;
continue;
}
} else {
var temp__5735__auto___48230 = cljs.core.seq(seq__48059_48215);
if(temp__5735__auto___48230){
var seq__48059_48231__$1 = temp__5735__auto___48230;
if(cljs.core.chunked_seq_QMARK_(seq__48059_48231__$1)){
var c__4550__auto___48232 = cljs.core.chunk_first(seq__48059_48231__$1);
var G__48233 = cljs.core.chunk_rest(seq__48059_48231__$1);
var G__48234 = c__4550__auto___48232;
var G__48235 = cljs.core.count(c__4550__auto___48232);
var G__48236 = (0);
seq__48059_48215 = G__48233;
chunk__48062_48216 = G__48234;
count__48063_48217 = G__48235;
i__48064_48218 = G__48236;
continue;
} else {
var node_48237 = cljs.core.first(seq__48059_48231__$1);
var path_match_48238 = shadow.cljs.devtools.client.browser.match_paths(node_48237.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48238)){
var new_link_48239 = (function (){var G__48070 = node_48237.cloneNode(true);
G__48070.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48238),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48070;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48238], 0));

goog.dom.insertSiblingAfter(new_link_48239,node_48237);

goog.dom.removeNode(node_48237);


var G__48240 = cljs.core.next(seq__48059_48231__$1);
var G__48241 = null;
var G__48242 = (0);
var G__48243 = (0);
seq__48059_48215 = G__48240;
chunk__48062_48216 = G__48241;
count__48063_48217 = G__48242;
i__48064_48218 = G__48243;
continue;
} else {
var G__48244 = cljs.core.next(seq__48059_48231__$1);
var G__48245 = null;
var G__48246 = (0);
var G__48247 = (0);
seq__48059_48215 = G__48244;
chunk__48062_48216 = G__48245;
count__48063_48217 = G__48246;
i__48064_48218 = G__48247;
continue;
}
}
} else {
}
}
break;
}


var G__48248 = seq__48029;
var G__48249 = chunk__48031;
var G__48250 = count__48032;
var G__48251 = (i__48033 + (1));
seq__48029 = G__48248;
chunk__48031 = G__48249;
count__48032 = G__48250;
i__48033 = G__48251;
continue;
} else {
var G__48252 = seq__48029;
var G__48253 = chunk__48031;
var G__48254 = count__48032;
var G__48255 = (i__48033 + (1));
seq__48029 = G__48252;
chunk__48031 = G__48253;
count__48032 = G__48254;
i__48033 = G__48255;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48029);
if(temp__5735__auto__){
var seq__48029__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48029__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48029__$1);
var G__48256 = cljs.core.chunk_rest(seq__48029__$1);
var G__48257 = c__4550__auto__;
var G__48258 = cljs.core.count(c__4550__auto__);
var G__48259 = (0);
seq__48029 = G__48256;
chunk__48031 = G__48257;
count__48032 = G__48258;
i__48033 = G__48259;
continue;
} else {
var path = cljs.core.first(seq__48029__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48072_48260 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48075_48261 = null;
var count__48076_48262 = (0);
var i__48077_48263 = (0);
while(true){
if((i__48077_48263 < count__48076_48262)){
var node_48264 = chunk__48075_48261.cljs$core$IIndexed$_nth$arity$2(null,i__48077_48263);
var path_match_48265 = shadow.cljs.devtools.client.browser.match_paths(node_48264.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48265)){
var new_link_48266 = (function (){var G__48082 = node_48264.cloneNode(true);
G__48082.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48265),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48082;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48265], 0));

goog.dom.insertSiblingAfter(new_link_48266,node_48264);

goog.dom.removeNode(node_48264);


var G__48267 = seq__48072_48260;
var G__48268 = chunk__48075_48261;
var G__48269 = count__48076_48262;
var G__48270 = (i__48077_48263 + (1));
seq__48072_48260 = G__48267;
chunk__48075_48261 = G__48268;
count__48076_48262 = G__48269;
i__48077_48263 = G__48270;
continue;
} else {
var G__48271 = seq__48072_48260;
var G__48272 = chunk__48075_48261;
var G__48273 = count__48076_48262;
var G__48274 = (i__48077_48263 + (1));
seq__48072_48260 = G__48271;
chunk__48075_48261 = G__48272;
count__48076_48262 = G__48273;
i__48077_48263 = G__48274;
continue;
}
} else {
var temp__5735__auto___48275__$1 = cljs.core.seq(seq__48072_48260);
if(temp__5735__auto___48275__$1){
var seq__48072_48276__$1 = temp__5735__auto___48275__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48072_48276__$1)){
var c__4550__auto___48277 = cljs.core.chunk_first(seq__48072_48276__$1);
var G__48278 = cljs.core.chunk_rest(seq__48072_48276__$1);
var G__48279 = c__4550__auto___48277;
var G__48280 = cljs.core.count(c__4550__auto___48277);
var G__48281 = (0);
seq__48072_48260 = G__48278;
chunk__48075_48261 = G__48279;
count__48076_48262 = G__48280;
i__48077_48263 = G__48281;
continue;
} else {
var node_48282 = cljs.core.first(seq__48072_48276__$1);
var path_match_48283 = shadow.cljs.devtools.client.browser.match_paths(node_48282.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48283)){
var new_link_48284 = (function (){var G__48083 = node_48282.cloneNode(true);
G__48083.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48283),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48083;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48283], 0));

goog.dom.insertSiblingAfter(new_link_48284,node_48282);

goog.dom.removeNode(node_48282);


var G__48285 = cljs.core.next(seq__48072_48276__$1);
var G__48286 = null;
var G__48287 = (0);
var G__48288 = (0);
seq__48072_48260 = G__48285;
chunk__48075_48261 = G__48286;
count__48076_48262 = G__48287;
i__48077_48263 = G__48288;
continue;
} else {
var G__48289 = cljs.core.next(seq__48072_48276__$1);
var G__48290 = null;
var G__48291 = (0);
var G__48292 = (0);
seq__48072_48260 = G__48289;
chunk__48075_48261 = G__48290;
count__48076_48262 = G__48291;
i__48077_48263 = G__48292;
continue;
}
}
} else {
}
}
break;
}


var G__48293 = cljs.core.next(seq__48029__$1);
var G__48294 = null;
var G__48295 = (0);
var G__48296 = (0);
seq__48029 = G__48293;
chunk__48031 = G__48294;
count__48032 = G__48295;
i__48033 = G__48296;
continue;
} else {
var G__48297 = cljs.core.next(seq__48029__$1);
var G__48298 = null;
var G__48299 = (0);
var G__48300 = (0);
seq__48029 = G__48297;
chunk__48031 = G__48298;
count__48032 = G__48299;
i__48033 = G__48300;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__48085){
var map__48086 = p__48085;
var map__48086__$1 = (((((!((map__48086 == null))))?(((((map__48086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48086):map__48086);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48086__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48086__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__48086,map__48086__$1,id,js){
return (function (){
return eval(js);
});})(map__48086,map__48086__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__48093){
var map__48094 = p__48093;
var map__48094__$1 = (((((!((map__48094 == null))))?(((((map__48094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48094):map__48094);
var msg = map__48094__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48094__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48094__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48094__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48094__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__48094,map__48094__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__48097){
var map__48098 = p__48097;
var map__48098__$1 = (((((!((map__48098 == null))))?(((((map__48098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48098):map__48098);
var src = map__48098__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48098__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__48094,map__48094__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__48094,map__48094__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__48094,map__48094__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__48102){
var map__48103 = p__48102;
var map__48103__$1 = (((((!((map__48103 == null))))?(((((map__48103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48103):map__48103);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48103__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48103__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__48103,map__48103__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__48103,map__48103__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__48106){
var map__48111 = p__48106;
var map__48111__$1 = (((((!((map__48111 == null))))?(((((map__48111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48111):map__48111);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48111__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48111__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__48122){
var map__48123 = p__48122;
var map__48123__$1 = (((((!((map__48123 == null))))?(((((map__48123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48123):map__48123);
var msg = map__48123__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48123__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__48130 = type;
var G__48130__$1 = (((G__48130 instanceof cljs.core.Keyword))?G__48130.fqn:null);
switch (G__48130__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__48140 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__48141 = ((function (G__48140){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__48140))
;
var G__48142 = "POST";
var G__48143 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__48144 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__48140,G__48141,G__48142,G__48143,G__48144);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e48145){var e = e48145;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___48302 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___48302)){
var s_48303 = temp__5735__auto___48302;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_48303.onclose = ((function (s_48303,temp__5735__auto___48302){
return (function (e){
return null;
});})(s_48303,temp__5735__auto___48302))
;

s_48303.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
