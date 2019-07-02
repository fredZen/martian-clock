goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__39974){
var vec__39975 = p__39974;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39975,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__39981 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39981,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39981,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39981,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__40031 = arguments.length;
switch (G__40031) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__40067_40335 = clojure.data.equality_partition;
var G__40068_40336 = "null";
var G__40069_40337 = ((function (G__40067_40335,G__40068_40336){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40067_40335,G__40068_40336))
;
goog.object.set(G__40067_40335,G__40068_40336,G__40069_40337);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__40074_40340 = clojure.data.equality_partition;
var G__40075_40341 = "string";
var G__40076_40342 = ((function (G__40074_40340,G__40075_40341){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40074_40340,G__40075_40341))
;
goog.object.set(G__40074_40340,G__40075_40341,G__40076_40342);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__40081_40346 = clojure.data.equality_partition;
var G__40082_40347 = "number";
var G__40083_40348 = ((function (G__40081_40346,G__40082_40347){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40081_40346,G__40082_40347))
;
goog.object.set(G__40081_40346,G__40082_40347,G__40083_40348);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__40087_40352 = clojure.data.equality_partition;
var G__40088_40353 = "array";
var G__40089_40354 = ((function (G__40087_40352,G__40088_40353){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__40087_40352,G__40088_40353))
;
goog.object.set(G__40087_40352,G__40088_40353,G__40089_40354);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__40093_40359 = clojure.data.equality_partition;
var G__40094_40360 = "function";
var G__40095_40361 = ((function (G__40093_40359,G__40094_40360){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40093_40359,G__40094_40360))
;
goog.object.set(G__40093_40359,G__40094_40360,G__40095_40361);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__40104_40365 = clojure.data.equality_partition;
var G__40105_40366 = "boolean";
var G__40106_40367 = ((function (G__40104_40365,G__40105_40366){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40104_40365,G__40105_40366))
;
goog.object.set(G__40104_40365,G__40105_40366,G__40106_40367);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__40107_40371 = clojure.data.equality_partition;
var G__40108_40372 = "_";
var G__40109_40373 = ((function (G__40107_40371,G__40108_40372){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__40107_40371,G__40108_40372))
;
goog.object.set(G__40107_40371,G__40108_40372,G__40109_40373);
goog.object.set(clojure.data.Diff,"null",true);

var G__40151_40386 = clojure.data.diff_similar;
var G__40152_40387 = "null";
var G__40153_40388 = ((function (G__40151_40386,G__40152_40387){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40151_40386,G__40152_40387))
;
goog.object.set(G__40151_40386,G__40152_40387,G__40153_40388);

goog.object.set(clojure.data.Diff,"string",true);

var G__40166_40395 = clojure.data.diff_similar;
var G__40167_40396 = "string";
var G__40168_40397 = ((function (G__40166_40395,G__40167_40396){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40166_40395,G__40167_40396))
;
goog.object.set(G__40166_40395,G__40167_40396,G__40168_40397);

goog.object.set(clojure.data.Diff,"number",true);

var G__40175_40399 = clojure.data.diff_similar;
var G__40176_40400 = "number";
var G__40177_40401 = ((function (G__40175_40399,G__40176_40400){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40175_40399,G__40176_40400))
;
goog.object.set(G__40175_40399,G__40176_40400,G__40177_40401);

goog.object.set(clojure.data.Diff,"array",true);

var G__40183_40402 = clojure.data.diff_similar;
var G__40184_40403 = "array";
var G__40185_40404 = ((function (G__40183_40402,G__40184_40403){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__40183_40402,G__40184_40403))
;
goog.object.set(G__40183_40402,G__40184_40403,G__40185_40404);

goog.object.set(clojure.data.Diff,"function",true);

var G__40198_40406 = clojure.data.diff_similar;
var G__40199_40407 = "function";
var G__40200_40408 = ((function (G__40198_40406,G__40199_40407){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40198_40406,G__40199_40407))
;
goog.object.set(G__40198_40406,G__40199_40407,G__40200_40408);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__40205_40409 = clojure.data.diff_similar;
var G__40206_40410 = "boolean";
var G__40207_40411 = ((function (G__40205_40409,G__40206_40410){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40205_40409,G__40206_40410))
;
goog.object.set(G__40205_40409,G__40206_40410,G__40207_40411);

goog.object.set(clojure.data.Diff,"_",true);

var G__40221_40419 = clojure.data.diff_similar;
var G__40222_40420 = "_";
var G__40223_40421 = ((function (G__40221_40419,G__40222_40420){
return (function (a,b){
var fexpr__40233 = (function (){var G__40234 = clojure.data.equality_partition(a);
var G__40234__$1 = (((G__40234 instanceof cljs.core.Keyword))?G__40234.fqn:null);
switch (G__40234__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40234__$1)].join('')));

}
})();
return (fexpr__40233.cljs$core$IFn$_invoke$arity$2 ? fexpr__40233.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__40233.call(null,a,b));
});})(G__40221_40419,G__40222_40420))
;
goog.object.set(G__40221_40419,G__40222_40420,G__40223_40421);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
