goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44150){
var map__44151 = p__44150;
var map__44151__$1 = (((((!((map__44151 == null))))?(((((map__44151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44151):map__44151);
var m = map__44151__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44151__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44151__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44158_44537 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44159_44538 = null;
var count__44160_44539 = (0);
var i__44161_44540 = (0);
while(true){
if((i__44161_44540 < count__44160_44539)){
var f_44545 = chunk__44159_44538.cljs$core$IIndexed$_nth$arity$2(null,i__44161_44540);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44545], 0));


var G__44547 = seq__44158_44537;
var G__44548 = chunk__44159_44538;
var G__44549 = count__44160_44539;
var G__44550 = (i__44161_44540 + (1));
seq__44158_44537 = G__44547;
chunk__44159_44538 = G__44548;
count__44160_44539 = G__44549;
i__44161_44540 = G__44550;
continue;
} else {
var temp__5735__auto___44552 = cljs.core.seq(seq__44158_44537);
if(temp__5735__auto___44552){
var seq__44158_44554__$1 = temp__5735__auto___44552;
if(cljs.core.chunked_seq_QMARK_(seq__44158_44554__$1)){
var c__4550__auto___44558 = cljs.core.chunk_first(seq__44158_44554__$1);
var G__44560 = cljs.core.chunk_rest(seq__44158_44554__$1);
var G__44561 = c__4550__auto___44558;
var G__44562 = cljs.core.count(c__4550__auto___44558);
var G__44563 = (0);
seq__44158_44537 = G__44560;
chunk__44159_44538 = G__44561;
count__44160_44539 = G__44562;
i__44161_44540 = G__44563;
continue;
} else {
var f_44564 = cljs.core.first(seq__44158_44554__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44564], 0));


var G__44566 = cljs.core.next(seq__44158_44554__$1);
var G__44567 = null;
var G__44568 = (0);
var G__44569 = (0);
seq__44158_44537 = G__44566;
chunk__44159_44538 = G__44567;
count__44160_44539 = G__44568;
i__44161_44540 = G__44569;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44570 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44570], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44570)))?cljs.core.second(arglists_44570):arglists_44570)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44180_44578 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44181_44579 = null;
var count__44182_44580 = (0);
var i__44183_44581 = (0);
while(true){
if((i__44183_44581 < count__44182_44580)){
var vec__44227_44583 = chunk__44181_44579.cljs$core$IIndexed$_nth$arity$2(null,i__44183_44581);
var name_44584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44227_44583,(0),null);
var map__44230_44585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44227_44583,(1),null);
var map__44230_44586__$1 = (((((!((map__44230_44585 == null))))?(((((map__44230_44585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44230_44585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44230_44585):map__44230_44585);
var doc_44587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44230_44586__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44230_44586__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44584], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44588], 0));

if(cljs.core.truth_(doc_44587)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44587], 0));
} else {
}


var G__44600 = seq__44180_44578;
var G__44601 = chunk__44181_44579;
var G__44602 = count__44182_44580;
var G__44603 = (i__44183_44581 + (1));
seq__44180_44578 = G__44600;
chunk__44181_44579 = G__44601;
count__44182_44580 = G__44602;
i__44183_44581 = G__44603;
continue;
} else {
var temp__5735__auto___44607 = cljs.core.seq(seq__44180_44578);
if(temp__5735__auto___44607){
var seq__44180_44608__$1 = temp__5735__auto___44607;
if(cljs.core.chunked_seq_QMARK_(seq__44180_44608__$1)){
var c__4550__auto___44610 = cljs.core.chunk_first(seq__44180_44608__$1);
var G__44611 = cljs.core.chunk_rest(seq__44180_44608__$1);
var G__44612 = c__4550__auto___44610;
var G__44613 = cljs.core.count(c__4550__auto___44610);
var G__44614 = (0);
seq__44180_44578 = G__44611;
chunk__44181_44579 = G__44612;
count__44182_44580 = G__44613;
i__44183_44581 = G__44614;
continue;
} else {
var vec__44255_44616 = cljs.core.first(seq__44180_44608__$1);
var name_44617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44255_44616,(0),null);
var map__44258_44618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44255_44616,(1),null);
var map__44258_44619__$1 = (((((!((map__44258_44618 == null))))?(((((map__44258_44618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44258_44618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44258_44618):map__44258_44618);
var doc_44620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44258_44619__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44258_44619__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44617], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44621], 0));

if(cljs.core.truth_(doc_44620)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44620], 0));
} else {
}


var G__44625 = cljs.core.next(seq__44180_44608__$1);
var G__44626 = null;
var G__44627 = (0);
var G__44628 = (0);
seq__44180_44578 = G__44625;
chunk__44181_44579 = G__44626;
count__44182_44580 = G__44627;
i__44183_44581 = G__44628;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44263 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44264 = null;
var count__44265 = (0);
var i__44266 = (0);
while(true){
if((i__44266 < count__44265)){
var role = chunk__44264.cljs$core$IIndexed$_nth$arity$2(null,i__44266);
var temp__5735__auto___44641__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44641__$1)){
var spec_44642 = temp__5735__auto___44641__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44642)], 0));
} else {
}


var G__44643 = seq__44263;
var G__44644 = chunk__44264;
var G__44645 = count__44265;
var G__44646 = (i__44266 + (1));
seq__44263 = G__44643;
chunk__44264 = G__44644;
count__44265 = G__44645;
i__44266 = G__44646;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__44263);
if(temp__5735__auto____$1){
var seq__44263__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44263__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44263__$1);
var G__44648 = cljs.core.chunk_rest(seq__44263__$1);
var G__44649 = c__4550__auto__;
var G__44650 = cljs.core.count(c__4550__auto__);
var G__44651 = (0);
seq__44263 = G__44648;
chunk__44264 = G__44649;
count__44265 = G__44650;
i__44266 = G__44651;
continue;
} else {
var role = cljs.core.first(seq__44263__$1);
var temp__5735__auto___44656__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44656__$2)){
var spec_44657 = temp__5735__auto___44656__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44657)], 0));
} else {
}


var G__44659 = cljs.core.next(seq__44263__$1);
var G__44660 = null;
var G__44661 = (0);
var G__44662 = (0);
seq__44263 = G__44659;
chunk__44264 = G__44660;
count__44265 = G__44661;
i__44266 = G__44662;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__44665 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44666 = cljs.core.ex_cause(t);
via = G__44665;
t = G__44666;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44336 = datafied_throwable;
var map__44336__$1 = (((((!((map__44336 == null))))?(((((map__44336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44336):map__44336);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44336__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44336__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44336__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44337 = cljs.core.last(via);
var map__44337__$1 = (((((!((map__44337 == null))))?(((((map__44337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44337):map__44337);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44337__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44337__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44337__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44338 = data;
var map__44338__$1 = (((((!((map__44338 == null))))?(((((map__44338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44338):map__44338);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44338__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44338__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44338__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44339 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44339__$1 = (((((!((map__44339 == null))))?(((((map__44339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44339):map__44339);
var top_data = map__44339__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44339__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44350 = phase;
var G__44350__$1 = (((G__44350 instanceof cljs.core.Keyword))?G__44350.fqn:null);
switch (G__44350__$1) {
case "read-source":
var map__44353 = data;
var map__44353__$1 = (((((!((map__44353 == null))))?(((((map__44353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44353):map__44353);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44353__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44353__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44363 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44363__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44363,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44363);
var G__44363__$2 = (cljs.core.truth_((function (){var fexpr__44367 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44367.cljs$core$IFn$_invoke$arity$1 ? fexpr__44367.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44367.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44363__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44363__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44363__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44363__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44376 = top_data;
var G__44376__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44376,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44376);
var G__44376__$2 = (cljs.core.truth_((function (){var fexpr__44383 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44383.cljs$core$IFn$_invoke$arity$1 ? fexpr__44383.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44383.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44376__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44376__$1);
var G__44376__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44376__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44376__$2);
var G__44376__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44376__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44376__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44376__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44376__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44389 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44389,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44389,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44389,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44389,(3),null);
var G__44393 = top_data;
var G__44393__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44393,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44393);
var G__44393__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44393__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44393__$1);
var G__44393__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44393__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44393__$2);
var G__44393__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44393__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44393__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44393__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44393__$4;
}

break;
case "execution":
var vec__44398 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44398,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44398,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44398,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44398,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__44398,source__$1,method,file,line,G__44350,G__44350__$1,map__44336,map__44336__$1,via,trace,phase,map__44337,map__44337__$1,type,message,data,map__44338,map__44338__$1,problems,fn,caller,map__44339,map__44339__$1,top_data,source){
return (function (p1__44333_SHARP_){
var or__4131__auto__ = (p1__44333_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__44405 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44405.cljs$core$IFn$_invoke$arity$1 ? fexpr__44405.cljs$core$IFn$_invoke$arity$1(p1__44333_SHARP_) : fexpr__44405.call(null,p1__44333_SHARP_));
}
});})(vec__44398,source__$1,method,file,line,G__44350,G__44350__$1,map__44336,map__44336__$1,via,trace,phase,map__44337,map__44337__$1,type,message,data,map__44338,map__44338__$1,problems,fn,caller,map__44339,map__44339__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__44417 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44417__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44417,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44417);
var G__44417__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44417__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44417__$1);
var G__44417__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44417__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44417__$2);
var G__44417__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44417__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44417__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44417__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44417__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44350__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44440){
var map__44442 = p__44440;
var map__44442__$1 = (((((!((map__44442 == null))))?(((((map__44442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44442):map__44442);
var triage_data = map__44442__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44442__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44442__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44442__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44442__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44442__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44442__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44442__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44442__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44454 = phase;
var G__44454__$1 = (((G__44454 instanceof cljs.core.Keyword))?G__44454.fqn:null);
switch (G__44454__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44462 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44463 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44464 = loc;
var G__44465 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44467_44795 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44468_44796 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44469_44797 = true;
var _STAR_print_fn_STAR__temp_val__44470_44798 = ((function (_STAR_print_newline_STAR__orig_val__44467_44795,_STAR_print_fn_STAR__orig_val__44468_44796,_STAR_print_newline_STAR__temp_val__44469_44797,sb__4661__auto__,G__44462,G__44463,G__44464,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44467_44795,_STAR_print_fn_STAR__orig_val__44468_44796,_STAR_print_newline_STAR__temp_val__44469_44797,sb__4661__auto__,G__44462,G__44463,G__44464,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44469_44797;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44470_44798;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44467_44795,_STAR_print_fn_STAR__orig_val__44468_44796,_STAR_print_newline_STAR__temp_val__44469_44797,_STAR_print_fn_STAR__temp_val__44470_44798,sb__4661__auto__,G__44462,G__44463,G__44464,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44467_44795,_STAR_print_fn_STAR__orig_val__44468_44796,_STAR_print_newline_STAR__temp_val__44469_44797,_STAR_print_fn_STAR__temp_val__44470_44798,sb__4661__auto__,G__44462,G__44463,G__44464,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44429_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44429_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44467_44795,_STAR_print_fn_STAR__orig_val__44468_44796,_STAR_print_newline_STAR__temp_val__44469_44797,_STAR_print_fn_STAR__temp_val__44470_44798,sb__4661__auto__,G__44462,G__44463,G__44464,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44467_44795,_STAR_print_fn_STAR__orig_val__44468_44796,_STAR_print_newline_STAR__temp_val__44469_44797,_STAR_print_fn_STAR__temp_val__44470_44798,sb__4661__auto__,G__44462,G__44463,G__44464,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44468_44796;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44467_44795;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44462,G__44463,G__44464,G__44465) : format.call(null,G__44462,G__44463,G__44464,G__44465));

break;
case "macroexpansion":
var G__44476 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44477 = cause_type;
var G__44478 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44479 = loc;
var G__44480 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44476,G__44477,G__44478,G__44479,G__44480) : format.call(null,G__44476,G__44477,G__44478,G__44479,G__44480));

break;
case "compile-syntax-check":
var G__44482 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44483 = cause_type;
var G__44484 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44485 = loc;
var G__44486 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44482,G__44483,G__44484,G__44485,G__44486) : format.call(null,G__44482,G__44483,G__44484,G__44485,G__44486));

break;
case "compilation":
var G__44489 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44490 = cause_type;
var G__44491 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44492 = loc;
var G__44493 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44489,G__44490,G__44491,G__44492,G__44493) : format.call(null,G__44489,G__44490,G__44491,G__44492,G__44493));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44496 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44497 = symbol;
var G__44498 = loc;
var G__44499 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44505_44833 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44506_44834 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44507_44835 = true;
var _STAR_print_fn_STAR__temp_val__44508_44836 = ((function (_STAR_print_newline_STAR__orig_val__44505_44833,_STAR_print_fn_STAR__orig_val__44506_44834,_STAR_print_newline_STAR__temp_val__44507_44835,sb__4661__auto__,G__44496,G__44497,G__44498,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44505_44833,_STAR_print_fn_STAR__orig_val__44506_44834,_STAR_print_newline_STAR__temp_val__44507_44835,sb__4661__auto__,G__44496,G__44497,G__44498,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44507_44835;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44508_44836;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44505_44833,_STAR_print_fn_STAR__orig_val__44506_44834,_STAR_print_newline_STAR__temp_val__44507_44835,_STAR_print_fn_STAR__temp_val__44508_44836,sb__4661__auto__,G__44496,G__44497,G__44498,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44505_44833,_STAR_print_fn_STAR__orig_val__44506_44834,_STAR_print_newline_STAR__temp_val__44507_44835,_STAR_print_fn_STAR__temp_val__44508_44836,sb__4661__auto__,G__44496,G__44497,G__44498,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44432_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44432_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44505_44833,_STAR_print_fn_STAR__orig_val__44506_44834,_STAR_print_newline_STAR__temp_val__44507_44835,_STAR_print_fn_STAR__temp_val__44508_44836,sb__4661__auto__,G__44496,G__44497,G__44498,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44505_44833,_STAR_print_fn_STAR__orig_val__44506_44834,_STAR_print_newline_STAR__temp_val__44507_44835,_STAR_print_fn_STAR__temp_val__44508_44836,sb__4661__auto__,G__44496,G__44497,G__44498,G__44454,G__44454__$1,loc,class_name,simple_class,cause_type,format,map__44442,map__44442__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44506_44834;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44505_44833;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44496,G__44497,G__44498,G__44499) : format.call(null,G__44496,G__44497,G__44498,G__44499));
} else {
var G__44512 = "Execution error%s at %s(%s).\n%s\n";
var G__44513 = cause_type;
var G__44514 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44515 = loc;
var G__44516 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44512,G__44513,G__44514,G__44515,G__44516) : format.call(null,G__44512,G__44513,G__44514,G__44515,G__44516));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44454__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
