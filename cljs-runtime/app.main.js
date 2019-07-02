goog.provide('app.main');
goog.require('cljs.core');
goog.require('clojure.string');
var module$node_modules$d3$dist$d3_node=shadow.js.require("module$node_modules$d3$dist$d3_node", {});
var module$node_modules$d3_transform$build$d3_transform=shadow.js.require("module$node_modules$d3_transform$build$d3_transform", {});
app.main.__GT_time = (function app$main$__GT_time(var_args){
var G__38276 = arguments.length;
switch (G__38276) {
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
return ((function (){var G__38277 = (x * (1000));
return Math.round(G__38277);
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
var map__38278 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (time__$1){
return (function (p__38279,p__38280){
var map__38281 = p__38279;
var map__38281__$1 = (((((!((map__38281 == null))))?(((((map__38281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38281):map__38281);
var terran = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38281__$1,new cljs.core.Keyword(null,"terran","terran",1469599802));
var map__38282 = p__38280;
var map__38282__$1 = (((((!((map__38282 == null))))?(((((map__38282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38282):map__38282);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38282__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var pause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38282__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672));
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
var map__38278__$1 = (((((!((map__38278 == null))))?(((((map__38278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38278):map__38278);
var terran = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38278__$1,new cljs.core.Keyword(null,"terran","terran",1469599802));
var martian = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38278__$1,new cljs.core.Keyword(null,"martian","martian",-54954922));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terran","terran",1469599802),terran,new cljs.core.Keyword(null,"martian","martian",-54954922),(function (){var or__4131__auto__ = martian;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"wrap","wrap",851669987),(1),new cljs.core.Keyword(null,"reverse","reverse",-888455266),true], null);
}
})()], null);
});
app.main.time__GT_hands = (function app$main$time__GT_hands(p__38286){
var map__38287 = p__38286;
var map__38287__$1 = (((((!((map__38287 == null))))?(((((map__38287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38287):map__38287);
var terran = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38287__$1,new cljs.core.Keyword(null,"terran","terran",1469599802));
var martian = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38287__$1,new cljs.core.Keyword(null,"martian","martian",-54954922));
var map__38289 = app.main.__GT_hms(terran);
var map__38289__$1 = (((((!((map__38289 == null))))?(((((map__38289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38289):map__38289);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
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
var len__4730__auto___38321 = arguments.length;
var i__4731__auto___38322 = (0);
while(true){
if((i__4731__auto___38322 < len__4730__auto___38321)){
args__4736__auto__.push((arguments[i__4731__auto___38322]));

var G__38323 = (i__4731__auto___38322 + (1));
i__4731__auto___38322 = G__38323;
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
app.main.by_name.cljs$lang$applyTo = (function (seq38291){
var G__38292 = cljs.core.first(seq38291);
var seq38291__$1 = cljs.core.next(seq38291);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38292,seq38291__$1);
});

app.main.lines = (function app$main$lines(var_args){
var G__38294 = arguments.length;
switch (G__38294) {
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
var G__38325__delegate = function (p__38295,_){
var map__38296 = p__38295;
var map__38296__$1 = (((((!((map__38296 == null))))?(((((map__38296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38296):map__38296);
var map__38297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38296__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var map__38297__$1 = (((((!((map__38297 == null))))?(((((map__38297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38297):map__38297);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return [x,y];
};
var G__38325 = function (p__38295,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38326__i = 0, G__38326__a = new Array(arguments.length -  1);
while (G__38326__i < G__38326__a.length) {G__38326__a[G__38326__i] = arguments[G__38326__i + 1]; ++G__38326__i;}
  _ = new cljs.core.IndexedSeq(G__38326__a,0,null);
} 
return G__38325__delegate.call(this,p__38295,_);};
G__38325.cljs$lang$maxFixedArity = 1;
G__38325.cljs$lang$applyTo = (function (arglist__38327){
var p__38295 = cljs.core.first(arglist__38327);
var _ = cljs.core.rest(arglist__38327);
return G__38325__delegate(p__38295,_);
});
G__38325.cljs$core$IFn$_invoke$arity$variadic = G__38325__delegate;
return G__38325;
})()
).rotate((function (p__38300){
var map__38301 = p__38300;
var map__38301__$1 = (((((!((map__38301 == null))))?(((((map__38301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38301):map__38301);
var h = map__38301__$1;
var map__38302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38301__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__38302__$1 = (((((!((map__38302 == null))))?(((((map__38302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38302):map__38302);
var wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38302__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38302__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var reverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38302__$1,new cljs.core.Keyword(null,"reverse","reverse",-888455266));
var vec__38305 = (cljs.core.truth_(reverse)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- current),0.5], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,(0)], null));
var current__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38305,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38305,(1),null);
return (app.main.fpart(((current__$1 / wrap) + offset)) * (360));
})));
});
app.main.update_clock_BANG_ = (function app$main$update_clock_BANG_(var_args){
var G__38309 = arguments.length;
switch (G__38309) {
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
var G__38329__delegate = function (p__38310,_){
var map__38311 = p__38310;
var map__38311__$1 = (((((!((map__38311 == null))))?(((((map__38311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38311):map__38311);
var map__38312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38311__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__38312__$1 = (((((!((map__38312 == null))))?(((((map__38312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38312):map__38312);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38312__$1,new cljs.core.Keyword(null,"length","length",588987862));
return (- length);
};
var G__38329 = function (p__38310,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38330__i = 0, G__38330__a = new Array(arguments.length -  1);
while (G__38330__i < G__38330__a.length) {G__38330__a[G__38330__i] = arguments[G__38330__i + 1]; ++G__38330__i;}
  _ = new cljs.core.IndexedSeq(G__38330__a,0,null);
} 
return G__38329__delegate.call(this,p__38310,_);};
G__38329.cljs$lang$maxFixedArity = 1;
G__38329.cljs$lang$applyTo = (function (arglist__38331){
var p__38310 = cljs.core.first(arglist__38331);
var _ = cljs.core.rest(arglist__38331);
return G__38329__delegate(p__38310,_);
});
G__38329.cljs$core$IFn$_invoke$arity$variadic = G__38329__delegate;
return G__38329;
})()
)).style("stroke-width",(function() { 
var G__38332__delegate = function (p__38315,_){
var map__38316 = p__38315;
var map__38316__$1 = (((((!((map__38316 == null))))?(((((map__38316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38316):map__38316);
var map__38317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38316__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__38317__$1 = (((((!((map__38317 == null))))?(((((map__38317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38317):map__38317);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38317__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return width;
};
var G__38332 = function (p__38315,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38333__i = 0, G__38333__a = new Array(arguments.length -  1);
while (G__38333__i < G__38333__a.length) {G__38333__a[G__38333__i] = arguments[G__38333__i + 1]; ++G__38333__i;}
  _ = new cljs.core.IndexedSeq(G__38333__a,0,null);
} 
return G__38332__delegate.call(this,p__38315,_);};
G__38332.cljs$lang$maxFixedArity = 1;
G__38332.cljs$lang$applyTo = (function (arglist__38334){
var p__38315 = cljs.core.first(arglist__38334);
var _ = cljs.core.rest(arglist__38334);
return G__38332__delegate(p__38315,_);
});
G__38332.cljs$core$IFn$_invoke$arity$variadic = G__38332__delegate;
return G__38332;
})()
).style("stroke","rgb(255,0,0)");
});
app.main.draw_dials = (function app$main$draw_dials(clock){
return clock.selectAll("circle").data([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),app.main.terran_center,new cljs.core.Keyword(null,"radius","radius",-2073122258),app.main.terran_size], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),app.main.martian_center,new cljs.core.Keyword(null,"radius","radius",-2073122258),app.main.martian_size], null)]).enter().append("circle").attr("cx",(function() { 
var G__38335__delegate = function (d,_){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(d));
};
var G__38335 = function (d,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38336__i = 0, G__38336__a = new Array(arguments.length -  1);
while (G__38336__i < G__38336__a.length) {G__38336__a[G__38336__i] = arguments[G__38336__i + 1]; ++G__38336__i;}
  _ = new cljs.core.IndexedSeq(G__38336__a,0,null);
} 
return G__38335__delegate.call(this,d,_);};
G__38335.cljs$lang$maxFixedArity = 1;
G__38335.cljs$lang$applyTo = (function (arglist__38337){
var d = cljs.core.first(arglist__38337);
var _ = cljs.core.rest(arglist__38337);
return G__38335__delegate(d,_);
});
G__38335.cljs$core$IFn$_invoke$arity$variadic = G__38335__delegate;
return G__38335;
})()
).attr("cy",(function() { 
var G__38338__delegate = function (d,_){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(d));
};
var G__38338 = function (d,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38339__i = 0, G__38339__a = new Array(arguments.length -  1);
while (G__38339__i < G__38339__a.length) {G__38339__a[G__38339__i] = arguments[G__38339__i + 1]; ++G__38339__i;}
  _ = new cljs.core.IndexedSeq(G__38339__a,0,null);
} 
return G__38338__delegate.call(this,d,_);};
G__38338.cljs$lang$maxFixedArity = 1;
G__38338.cljs$lang$applyTo = (function (arglist__38340){
var d = cljs.core.first(arglist__38340);
var _ = cljs.core.rest(arglist__38340);
return G__38338__delegate(d,_);
});
G__38338.cljs$core$IFn$_invoke$arity$variadic = G__38338__delegate;
return G__38338;
})()
).attr("r",(function() { 
var G__38341__delegate = function (d,_){
return new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(d);
};
var G__38341 = function (d,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38342__i = 0, G__38342__a = new Array(arguments.length -  1);
while (G__38342__i < G__38342__a.length) {G__38342__a[G__38342__i] = arguments[G__38342__i + 1]; ++G__38342__i;}
  _ = new cljs.core.IndexedSeq(G__38342__a,0,null);
} 
return G__38341__delegate.call(this,d,_);};
G__38341.cljs$lang$maxFixedArity = 1;
G__38341.cljs$lang$applyTo = (function (arglist__38343){
var d = cljs.core.first(arglist__38343);
var _ = cljs.core.rest(arglist__38343);
return G__38341__delegate(d,_);
});
G__38341.cljs$core$IFn$_invoke$arity$variadic = G__38341__delegate;
return G__38341;
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
app.main.main_BANG_ = (function app$main$main_BANG_(){
app.main.init_clock_BANG_();

return cljs.core.reset_BANG_(app.main.interval,setInterval(app.main.update_clock_BANG_,app.main.update_interval));
});
app.main.reload_BANG_ = (function app$main$reload_BANG_(){
clearInterval(cljs.core.deref(app.main.interval));

return app.main.main_BANG_();
});

//# sourceMappingURL=app.main.js.map
