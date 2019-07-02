goog.provide('app.main');
goog.require('cljs.core');
goog.require('clojure.string');
var module$node_modules$d3$dist$d3_node=shadow.js.require("module$node_modules$d3$dist$d3_node", {});
var module$node_modules$d3_transform$build$d3_transform=shadow.js.require("module$node_modules$d3_transform$build$d3_transform", {});
app.main.__GT_time = (function app$main$__GT_time(var_args){
var G__38542 = arguments.length;
switch (G__38542) {
case 1:
return app.main.__GT_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.__GT_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.__GT_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

app.main.__GT_time.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return app.main.__GT_time.cljs$core$IFn$_invoke$arity$2(hours,(0));
});

app.main.__GT_time.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return app.main.__GT_time.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
});

app.main.__GT_time.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return ((((hours * (60)) + minutes) * (60)) + seconds);
});

app.main.__GT_time.cljs$lang$maxFixedArity = 3;

app.main.pause_schedule = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),app.main.__GT_time.cljs$core$IFn$_invoke$arity$1((24)),new cljs.core.Keyword(null,"pause","pause",-2095325672),app.main.__GT_time.cljs$core$IFn$_invoke$arity$3((0),(39),(35))], null)], null);
app.main.terran_size = (200);
app.main.martian_size = (50);
app.main.width = (app.main.terran_size * (2));
app.main.height = ((app.main.terran_size + app.main.martian_size) * (2));
app.main.terran_center = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),app.main.terran_size,new cljs.core.Keyword(null,"y","y",-1757859776),(app.main.terran_size + (app.main.martian_size * (2)))], null);
app.main.martian_center = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),app.main.terran_size,new cljs.core.Keyword(null,"y","y",-1757859776),app.main.martian_size], null);
app.main.update_interval = (1000);
app.main.seconds_per_day = (((24) * (60)) * (60));
app.main.seconds_of_day = (function app$main$seconds_of_day(date,offset){
return cljs.core.mod((((date.getTime() + offset) / (1000)) - (date.getTimezoneOffset() * (60))),app.main.seconds_per_day);
});
app.main.round3 = (function app$main$round3(x){
return ((function (){var G__38543 = (x * (1000));
return Math.round(G__38543);
})() / (1000));
});
app.main.__GT_hms = (function app$main$__GT_hms(time){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hours","hours",58380855),app.main.round3(cljs.core.mod(((time / (60)) / (60)),(12))),new cljs.core.Keyword(null,"minutes","minutes",1319166394),app.main.round3(cljs.core.mod((time / (60)),(60))),new cljs.core.Keyword(null,"seconds","seconds",-445266194),app.main.round3(cljs.core.mod(time,(60)))], null);
});
app.main.time_correction_factor = (function app$main$time_correction_factor(pause_schedule){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,app.main.seconds_per_day,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pause","pause",-2095325672),pause_schedule)) / app.main.seconds_per_day);
});
app.main.martian_remap = (function app$main$martian_remap(time,pause_schedule){
var time__$1 = (time * app.main.time_correction_factor(pause_schedule));
var map__38544 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (time__$1){
return (function (p__38545,p__38546){
var map__38547 = p__38545;
var map__38547__$1 = (((((!((map__38547 == null))))?(((((map__38547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38547):map__38547);
var terran = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38547__$1,new cljs.core.Keyword(null,"terran","terran",1469599802));
var map__38548 = p__38546;
var map__38548__$1 = (((((!((map__38548 == null))))?(((((map__38548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38548):map__38548);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38548__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var pause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38548__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672));
var overlap = (terran - start);
if((overlap < (0))){
return cljs.core.reduced(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"terran","terran",1469599802),terran], null));
} else {
if((overlap > pause)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"terran","terran",1469599802),(terran - pause)], null);
} else {
return cljs.core.reduced(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terran","terran",1469599802),start,new cljs.core.Keyword(null,"martian","martian",-54954922),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current","current",-1088038603),overlap,new cljs.core.Keyword(null,"wrap","wrap",851669987),pause,new cljs.core.Keyword(null,"reverse","reverse",-888455266),true], null)], null));

}
}
});})(time__$1))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"terran","terran",1469599802),time__$1], null),pause_schedule);
var map__38544__$1 = (((((!((map__38544 == null))))?(((((map__38544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38544):map__38544);
var terran = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38544__$1,new cljs.core.Keyword(null,"terran","terran",1469599802));
var martian = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38544__$1,new cljs.core.Keyword(null,"martian","martian",-54954922));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terran","terran",1469599802),terran,new cljs.core.Keyword(null,"martian","martian",-54954922),(function (){var or__4131__auto__ = martian;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"wrap","wrap",851669987),(1),new cljs.core.Keyword(null,"reverse","reverse",-888455266),true], null);
}
})()], null);
});
app.main.time__GT_hands = (function app$main$time__GT_hands(p__38552){
var map__38553 = p__38552;
var map__38553__$1 = (((((!((map__38553 == null))))?(((((map__38553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38553):map__38553);
var terran = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38553__$1,new cljs.core.Keyword(null,"terran","terran",1469599802));
var martian = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38553__$1,new cljs.core.Keyword(null,"martian","martian",-54954922));
var map__38555 = app.main.__GT_hms(terran);
var map__38555__$1 = (((((!((map__38555 == null))))?(((((map__38555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38555):map__38555);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38555__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38555__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38555__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
return [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"hours",new cljs.core.Keyword(null,"center","center",-748944368),app.main.terran_center,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),(app.main.terran_size / (2)),new cljs.core.Keyword(null,"width","width",-384071477),(5)], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap","wrap",851669987),(12),new cljs.core.Keyword(null,"current","current",-1088038603),hours], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"minutes",new cljs.core.Keyword(null,"center","center",-748944368),app.main.terran_center,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),(app.main.terran_size / 1.5),new cljs.core.Keyword(null,"width","width",-384071477),(2)], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap","wrap",851669987),(60),new cljs.core.Keyword(null,"current","current",-1088038603),minutes], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"seconds",new cljs.core.Keyword(null,"center","center",-748944368),app.main.terran_center,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),app.main.terran_size,new cljs.core.Keyword(null,"width","width",-384071477),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap","wrap",851669987),(60),new cljs.core.Keyword(null,"current","current",-1088038603),seconds], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"martian",new cljs.core.Keyword(null,"center","center",-748944368),app.main.martian_center,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),app.main.martian_size,new cljs.core.Keyword(null,"width","width",-384071477),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),martian], null)];
});
app.main.hands_at = (function app$main$hands_at(date,offset){
return app.main.time__GT_hands(app.main.martian_remap(app.main.seconds_of_day(date,offset),app.main.pause_schedule));
});
app.main.clock = (function app$main$clock(){
return module$node_modules$d3$dist$d3_node.select("#clock");
});
app.main.by_name = (function app$main$by_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38587 = arguments.length;
var i__4731__auto___38588 = (0);
while(true){
if((i__4731__auto___38588 < len__4730__auto___38587)){
args__4736__auto__.push((arguments[i__4731__auto___38588]));

var G__38589 = (i__4731__auto___38588 + (1));
i__4731__auto___38588 = G__38589;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return app.main.by_name.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

app.main.by_name.cljs$core$IFn$_invoke$arity$variadic = (function (d,_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
});

app.main.by_name.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
app.main.by_name.cljs$lang$applyTo = (function (seq38557){
var G__38558 = cljs.core.first(seq38557);
var seq38557__$1 = cljs.core.next(seq38557);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38558,seq38557__$1);
});

app.main.lines = (function app$main$lines(var_args){
var G__38560 = arguments.length;
switch (G__38560) {
case 1:
return app.main.lines.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.lines.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

app.main.lines.cljs$core$IFn$_invoke$arity$1 = (function (date){
return app.main.lines.cljs$core$IFn$_invoke$arity$2(date,(0));
});

app.main.lines.cljs$core$IFn$_invoke$arity$2 = (function (date,offset){
return app.main.clock().selectAll("line").data(app.main.hands_at(date,offset),app.main.by_name);
});

app.main.lines.cljs$lang$maxFixedArity = 2;

app.main.fpart = (function app$main$fpart(x){
return (x - Math.trunc(x));
});
app.main.position_hand = (function app$main$position_hand(l){
return l.attr("transform",module$node_modules$d3_transform$build$d3_transform.transform().translate((function() { 
var G__38591__delegate = function (p__38561,_){
var map__38562 = p__38561;
var map__38562__$1 = (((((!((map__38562 == null))))?(((((map__38562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38562):map__38562);
var map__38563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38562__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var map__38563__$1 = (((((!((map__38563 == null))))?(((((map__38563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38563):map__38563);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38563__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38563__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return [x,y];
};
var G__38591 = function (p__38561,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38592__i = 0, G__38592__a = new Array(arguments.length -  1);
while (G__38592__i < G__38592__a.length) {G__38592__a[G__38592__i] = arguments[G__38592__i + 1]; ++G__38592__i;}
  _ = new cljs.core.IndexedSeq(G__38592__a,0,null);
} 
return G__38591__delegate.call(this,p__38561,_);};
G__38591.cljs$lang$maxFixedArity = 1;
G__38591.cljs$lang$applyTo = (function (arglist__38593){
var p__38561 = cljs.core.first(arglist__38593);
var _ = cljs.core.rest(arglist__38593);
return G__38591__delegate(p__38561,_);
});
G__38591.cljs$core$IFn$_invoke$arity$variadic = G__38591__delegate;
return G__38591;
})()
).rotate((function (p__38566){
var map__38567 = p__38566;
var map__38567__$1 = (((((!((map__38567 == null))))?(((((map__38567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38567):map__38567);
var h = map__38567__$1;
var map__38568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38567__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__38568__$1 = (((((!((map__38568 == null))))?(((((map__38568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38568):map__38568);
var wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38568__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38568__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var reverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38568__$1,new cljs.core.Keyword(null,"reverse","reverse",-888455266));
var vec__38571 = (cljs.core.truth_(reverse)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- current),0.5], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,(0)], null));
var current__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(1),null);
return (app.main.fpart(((current__$1 / wrap) + offset)) * (360));
})));
});
app.main.update_clock_BANG_ = (function app$main$update_clock_BANG_(var_args){
var G__38575 = arguments.length;
switch (G__38575) {
case 0:
return app.main.update_clock_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.update_clock_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

app.main.update_clock_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.update_clock_BANG_.cljs$core$IFn$_invoke$arity$1((new Date()));
});

app.main.update_clock_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (now){
return app.main.position_hand(app.main.lines.cljs$core$IFn$_invoke$arity$2(now,app.main.update_interval).transition().duration(app.main.update_interval).ease(module$node_modules$d3$dist$d3_node.easeLinear));
});

app.main.update_clock_BANG_.cljs$lang$maxFixedArity = 1;

app.main.create_hand = (function app$main$create_hand(lines){
return app.main.position_hand(lines.append("line").attr("x1",(0)).attr("y1",(0)).attr("x2",(0)).attr("y2",(function() { 
var G__38595__delegate = function (p__38576,_){
var map__38577 = p__38576;
var map__38577__$1 = (((((!((map__38577 == null))))?(((((map__38577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38577):map__38577);
var map__38578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38577__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__38578__$1 = (((((!((map__38578 == null))))?(((((map__38578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38578):map__38578);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38578__$1,new cljs.core.Keyword(null,"length","length",588987862));
return (- length);
};
var G__38595 = function (p__38576,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38596__i = 0, G__38596__a = new Array(arguments.length -  1);
while (G__38596__i < G__38596__a.length) {G__38596__a[G__38596__i] = arguments[G__38596__i + 1]; ++G__38596__i;}
  _ = new cljs.core.IndexedSeq(G__38596__a,0,null);
} 
return G__38595__delegate.call(this,p__38576,_);};
G__38595.cljs$lang$maxFixedArity = 1;
G__38595.cljs$lang$applyTo = (function (arglist__38597){
var p__38576 = cljs.core.first(arglist__38597);
var _ = cljs.core.rest(arglist__38597);
return G__38595__delegate(p__38576,_);
});
G__38595.cljs$core$IFn$_invoke$arity$variadic = G__38595__delegate;
return G__38595;
})()
)).style("stroke-width",(function() { 
var G__38598__delegate = function (p__38581,_){
var map__38582 = p__38581;
var map__38582__$1 = (((((!((map__38582 == null))))?(((((map__38582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38582):map__38582);
var map__38583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38582__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__38583__$1 = (((((!((map__38583 == null))))?(((((map__38583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38583):map__38583);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38583__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return width;
};
var G__38598 = function (p__38581,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38599__i = 0, G__38599__a = new Array(arguments.length -  1);
while (G__38599__i < G__38599__a.length) {G__38599__a[G__38599__i] = arguments[G__38599__i + 1]; ++G__38599__i;}
  _ = new cljs.core.IndexedSeq(G__38599__a,0,null);
} 
return G__38598__delegate.call(this,p__38581,_);};
G__38598.cljs$lang$maxFixedArity = 1;
G__38598.cljs$lang$applyTo = (function (arglist__38600){
var p__38581 = cljs.core.first(arglist__38600);
var _ = cljs.core.rest(arglist__38600);
return G__38598__delegate(p__38581,_);
});
G__38598.cljs$core$IFn$_invoke$arity$variadic = G__38598__delegate;
return G__38598;
})()
).style("stroke","rgb(255,0,0)");
});
app.main.draw_dials = (function app$main$draw_dials(clock){
return clock.selectAll("circle").data([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),app.main.terran_center,new cljs.core.Keyword(null,"radius","radius",-2073122258),app.main.terran_size], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),app.main.martian_center,new cljs.core.Keyword(null,"radius","radius",-2073122258),app.main.martian_size], null)]).enter().append("circle").attr("cx",(function() { 
var G__38601__delegate = function (d,_){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(d));
};
var G__38601 = function (d,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38602__i = 0, G__38602__a = new Array(arguments.length -  1);
while (G__38602__i < G__38602__a.length) {G__38602__a[G__38602__i] = arguments[G__38602__i + 1]; ++G__38602__i;}
  _ = new cljs.core.IndexedSeq(G__38602__a,0,null);
} 
return G__38601__delegate.call(this,d,_);};
G__38601.cljs$lang$maxFixedArity = 1;
G__38601.cljs$lang$applyTo = (function (arglist__38603){
var d = cljs.core.first(arglist__38603);
var _ = cljs.core.rest(arglist__38603);
return G__38601__delegate(d,_);
});
G__38601.cljs$core$IFn$_invoke$arity$variadic = G__38601__delegate;
return G__38601;
})()
).attr("cy",(function() { 
var G__38604__delegate = function (d,_){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(d));
};
var G__38604 = function (d,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38605__i = 0, G__38605__a = new Array(arguments.length -  1);
while (G__38605__i < G__38605__a.length) {G__38605__a[G__38605__i] = arguments[G__38605__i + 1]; ++G__38605__i;}
  _ = new cljs.core.IndexedSeq(G__38605__a,0,null);
} 
return G__38604__delegate.call(this,d,_);};
G__38604.cljs$lang$maxFixedArity = 1;
G__38604.cljs$lang$applyTo = (function (arglist__38606){
var d = cljs.core.first(arglist__38606);
var _ = cljs.core.rest(arglist__38606);
return G__38604__delegate(d,_);
});
G__38604.cljs$core$IFn$_invoke$arity$variadic = G__38604__delegate;
return G__38604;
})()
).attr("r",(function() { 
var G__38607__delegate = function (d,_){
return new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(d);
};
var G__38607 = function (d,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38608__i = 0, G__38608__a = new Array(arguments.length -  1);
while (G__38608__i < G__38608__a.length) {G__38608__a[G__38608__i] = arguments[G__38608__i + 1]; ++G__38608__i;}
  _ = new cljs.core.IndexedSeq(G__38608__a,0,null);
} 
return G__38607__delegate.call(this,d,_);};
G__38607.cljs$lang$maxFixedArity = 1;
G__38607.cljs$lang$applyTo = (function (arglist__38609){
var d = cljs.core.first(arglist__38609);
var _ = cljs.core.rest(arglist__38609);
return G__38607__delegate(d,_);
});
G__38607.cljs$core$IFn$_invoke$arity$variadic = G__38607__delegate;
return G__38607;
})()
);
});
app.main.init_clock_BANG_ = (function app$main$init_clock_BANG_(){
app.main.draw_dials(app.main.clock().attr("viewBox",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),app.main.width,app.main.height], null))));

var now = (new Date());
app.main.create_hand(app.main.lines.cljs$core$IFn$_invoke$arity$1(now).enter());

return app.main.update_clock_BANG_.cljs$core$IFn$_invoke$arity$1(now);
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.interval !== 'undefined')){
} else {
app.main.interval = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.main.disbale_zooming = (function app$main$disbale_zooming(e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),e.scale)){
return null;
} else {
return e.preventDefault();
}
});
app.main.main_BANG_ = (function app$main$main_BANG_(){
document.addEventListener("touchmove",app.main.disbale_zooming,false);

app.main.init_clock_BANG_();

return cljs.core.reset_BANG_(app.main.interval,setInterval(app.main.update_clock_BANG_,app.main.update_interval));
});
app.main.unload_BANG_ = (function app$main$unload_BANG_(){
return document.removeEventListener("touchmove",app.main.disbale_zooming,false);
});
app.main.reload_BANG_ = (function app$main$reload_BANG_(){
clearInterval(cljs.core.deref(app.main.interval));

return app.main.main_BANG_();
});

//# sourceMappingURL=app.main.js.map
