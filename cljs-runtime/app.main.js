goog.provide('app.main');
goog.require('cljs.core');
var module$node_modules$d3$dist$d3_node=shadow.js.require("module$node_modules$d3$dist$d3_node", {});
var module$node_modules$d3_transform$build$d3_transform=shadow.js.require("module$node_modules$d3_transform$build$d3_transform", {});
app.main.__GT_time = (function app$main$__GT_time(var_args){
var G__38138 = arguments.length;
switch (G__38138) {
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
return ((function (){var G__38139 = (x * (1000));
return Math.round(G__38139);
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
var map__38140 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (time__$1){
return (function (p__38141,p__38142){
var map__38143 = p__38141;
var map__38143__$1 = (((((!((map__38143 == null))))?(((((map__38143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38143):map__38143);
var terran = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143__$1,new cljs.core.Keyword(null,"terran","terran",1469599802));
var map__38144 = p__38142;
var map__38144__$1 = (((((!((map__38144 == null))))?(((((map__38144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38144):map__38144);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var pause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672));
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
var map__38140__$1 = (((((!((map__38140 == null))))?(((((map__38140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38140):map__38140);
var terran = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38140__$1,new cljs.core.Keyword(null,"terran","terran",1469599802));
var martian = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38140__$1,new cljs.core.Keyword(null,"martian","martian",-54954922));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terran","terran",1469599802),terran,new cljs.core.Keyword(null,"martian","martian",-54954922),(function (){var or__4131__auto__ = martian;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"wrap","wrap",851669987),(1),new cljs.core.Keyword(null,"reverse","reverse",-888455266),true], null);
}
})()], null);
});
app.main.time__GT_hands = (function app$main$time__GT_hands(p__38148){
var map__38149 = p__38148;
var map__38149__$1 = (((((!((map__38149 == null))))?(((((map__38149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38149):map__38149);
var terran = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38149__$1,new cljs.core.Keyword(null,"terran","terran",1469599802));
var martian = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38149__$1,new cljs.core.Keyword(null,"martian","martian",-54954922));
var map__38151 = app.main.__GT_hms(terran);
var map__38151__$1 = (((((!((map__38151 == null))))?(((((map__38151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38151):map__38151);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38151__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38151__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38151__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
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
var len__4730__auto___38183 = arguments.length;
var i__4731__auto___38184 = (0);
while(true){
if((i__4731__auto___38184 < len__4730__auto___38183)){
args__4736__auto__.push((arguments[i__4731__auto___38184]));

var G__38185 = (i__4731__auto___38184 + (1));
i__4731__auto___38184 = G__38185;
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
app.main.by_name.cljs$lang$applyTo = (function (seq38153){
var G__38154 = cljs.core.first(seq38153);
var seq38153__$1 = cljs.core.next(seq38153);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38154,seq38153__$1);
});

app.main.lines = (function app$main$lines(var_args){
var G__38156 = arguments.length;
switch (G__38156) {
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
var G__38187__delegate = function (p__38157,_){
var map__38158 = p__38157;
var map__38158__$1 = (((((!((map__38158 == null))))?(((((map__38158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38158):map__38158);
var map__38159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38158__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var map__38159__$1 = (((((!((map__38159 == null))))?(((((map__38159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38159):map__38159);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38159__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38159__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return [x,y];
};
var G__38187 = function (p__38157,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38188__i = 0, G__38188__a = new Array(arguments.length -  1);
while (G__38188__i < G__38188__a.length) {G__38188__a[G__38188__i] = arguments[G__38188__i + 1]; ++G__38188__i;}
  _ = new cljs.core.IndexedSeq(G__38188__a,0,null);
} 
return G__38187__delegate.call(this,p__38157,_);};
G__38187.cljs$lang$maxFixedArity = 1;
G__38187.cljs$lang$applyTo = (function (arglist__38189){
var p__38157 = cljs.core.first(arglist__38189);
var _ = cljs.core.rest(arglist__38189);
return G__38187__delegate(p__38157,_);
});
G__38187.cljs$core$IFn$_invoke$arity$variadic = G__38187__delegate;
return G__38187;
})()
).rotate((function (p__38162){
var map__38163 = p__38162;
var map__38163__$1 = (((((!((map__38163 == null))))?(((((map__38163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38163):map__38163);
var h = map__38163__$1;
var map__38164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__38164__$1 = (((((!((map__38164 == null))))?(((((map__38164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38164):map__38164);
var wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38164__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38164__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var reverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38164__$1,new cljs.core.Keyword(null,"reverse","reverse",-888455266));
var vec__38167 = (cljs.core.truth_(reverse)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- current),0.5], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,(0)], null));
var current__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(1),null);
return (app.main.fpart(((current__$1 / wrap) + offset)) * (360));
})));
});
app.main.update_clock_BANG_ = (function app$main$update_clock_BANG_(var_args){
var G__38171 = arguments.length;
switch (G__38171) {
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
var G__38191__delegate = function (p__38172,_){
var map__38173 = p__38172;
var map__38173__$1 = (((((!((map__38173 == null))))?(((((map__38173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38173):map__38173);
var map__38174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38173__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__38174__$1 = (((((!((map__38174 == null))))?(((((map__38174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38174):map__38174);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38174__$1,new cljs.core.Keyword(null,"length","length",588987862));
return (- length);
};
var G__38191 = function (p__38172,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38192__i = 0, G__38192__a = new Array(arguments.length -  1);
while (G__38192__i < G__38192__a.length) {G__38192__a[G__38192__i] = arguments[G__38192__i + 1]; ++G__38192__i;}
  _ = new cljs.core.IndexedSeq(G__38192__a,0,null);
} 
return G__38191__delegate.call(this,p__38172,_);};
G__38191.cljs$lang$maxFixedArity = 1;
G__38191.cljs$lang$applyTo = (function (arglist__38193){
var p__38172 = cljs.core.first(arglist__38193);
var _ = cljs.core.rest(arglist__38193);
return G__38191__delegate(p__38172,_);
});
G__38191.cljs$core$IFn$_invoke$arity$variadic = G__38191__delegate;
return G__38191;
})()
)).style("stroke-width",(function() { 
var G__38194__delegate = function (p__38177,_){
var map__38178 = p__38177;
var map__38178__$1 = (((((!((map__38178 == null))))?(((((map__38178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38178):map__38178);
var map__38179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38178__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__38179__$1 = (((((!((map__38179 == null))))?(((((map__38179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38179):map__38179);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return width;
};
var G__38194 = function (p__38177,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38195__i = 0, G__38195__a = new Array(arguments.length -  1);
while (G__38195__i < G__38195__a.length) {G__38195__a[G__38195__i] = arguments[G__38195__i + 1]; ++G__38195__i;}
  _ = new cljs.core.IndexedSeq(G__38195__a,0,null);
} 
return G__38194__delegate.call(this,p__38177,_);};
G__38194.cljs$lang$maxFixedArity = 1;
G__38194.cljs$lang$applyTo = (function (arglist__38196){
var p__38177 = cljs.core.first(arglist__38196);
var _ = cljs.core.rest(arglist__38196);
return G__38194__delegate(p__38177,_);
});
G__38194.cljs$core$IFn$_invoke$arity$variadic = G__38194__delegate;
return G__38194;
})()
).style("stroke","rgb(255,0,0)");
});
app.main.draw_dials = (function app$main$draw_dials(clock){
return clock.selectAll("circle").data([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),app.main.terran_center,new cljs.core.Keyword(null,"radius","radius",-2073122258),app.main.terran_size], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),app.main.martian_center,new cljs.core.Keyword(null,"radius","radius",-2073122258),app.main.martian_size], null)]).enter().append("circle").attr("cx",(function() { 
var G__38197__delegate = function (d,_){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(d));
};
var G__38197 = function (d,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38198__i = 0, G__38198__a = new Array(arguments.length -  1);
while (G__38198__i < G__38198__a.length) {G__38198__a[G__38198__i] = arguments[G__38198__i + 1]; ++G__38198__i;}
  _ = new cljs.core.IndexedSeq(G__38198__a,0,null);
} 
return G__38197__delegate.call(this,d,_);};
G__38197.cljs$lang$maxFixedArity = 1;
G__38197.cljs$lang$applyTo = (function (arglist__38199){
var d = cljs.core.first(arglist__38199);
var _ = cljs.core.rest(arglist__38199);
return G__38197__delegate(d,_);
});
G__38197.cljs$core$IFn$_invoke$arity$variadic = G__38197__delegate;
return G__38197;
})()
).attr("cy",(function() { 
var G__38200__delegate = function (d,_){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(d));
};
var G__38200 = function (d,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38201__i = 0, G__38201__a = new Array(arguments.length -  1);
while (G__38201__i < G__38201__a.length) {G__38201__a[G__38201__i] = arguments[G__38201__i + 1]; ++G__38201__i;}
  _ = new cljs.core.IndexedSeq(G__38201__a,0,null);
} 
return G__38200__delegate.call(this,d,_);};
G__38200.cljs$lang$maxFixedArity = 1;
G__38200.cljs$lang$applyTo = (function (arglist__38202){
var d = cljs.core.first(arglist__38202);
var _ = cljs.core.rest(arglist__38202);
return G__38200__delegate(d,_);
});
G__38200.cljs$core$IFn$_invoke$arity$variadic = G__38200__delegate;
return G__38200;
})()
).attr("r",(function() { 
var G__38203__delegate = function (d,_){
return new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(d);
};
var G__38203 = function (d,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38204__i = 0, G__38204__a = new Array(arguments.length -  1);
while (G__38204__i < G__38204__a.length) {G__38204__a[G__38204__i] = arguments[G__38204__i + 1]; ++G__38204__i;}
  _ = new cljs.core.IndexedSeq(G__38204__a,0,null);
} 
return G__38203__delegate.call(this,d,_);};
G__38203.cljs$lang$maxFixedArity = 1;
G__38203.cljs$lang$applyTo = (function (arglist__38205){
var d = cljs.core.first(arglist__38205);
var _ = cljs.core.rest(arglist__38205);
return G__38203__delegate(d,_);
});
G__38203.cljs$core$IFn$_invoke$arity$variadic = G__38203__delegate;
return G__38203;
})()
);
});
app.main.init_clock_BANG_ = (function app$main$init_clock_BANG_(){
app.main.draw_dials(app.main.clock().attr("height",app.main.height).attr("width",app.main.width));

var now = (new Date());
app.main.create_hand(app.main.lines.cljs$core$IFn$_invoke$arity$1(now).enter());

return app.main.update_clock_BANG_.cljs$core$IFn$_invoke$arity$1(now);
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.interval !== 'undefined')){
} else {
app.main.interval = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.main.main_BANG_ = (function app$main$main_BANG_(){
app.main.init_clock_BANG_();

return cljs.core.reset_BANG_(app.main.interval,setInterval(app.main.update_clock_BANG_,app.main.update_interval));
});
app.main.reload_BANG_ = (function app$main$reload_BANG_(){
clearInterval(cljs.core.deref(app.main.interval));

return app.main.main_BANG_();
});

//# sourceMappingURL=app.main.js.map
