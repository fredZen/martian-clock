goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40798 = arguments.length;
switch (G__40798) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40804 = (function (f,blockable,meta40805){
this.f = f;
this.blockable = blockable;
this.meta40805 = meta40805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40806,meta40805__$1){
var self__ = this;
var _40806__$1 = this;
return (new cljs.core.async.t_cljs$core$async40804(self__.f,self__.blockable,meta40805__$1));
});

cljs.core.async.t_cljs$core$async40804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40806){
var self__ = this;
var _40806__$1 = this;
return self__.meta40805;
});

cljs.core.async.t_cljs$core$async40804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40805","meta40805",-1865290912,null)], null);
});

cljs.core.async.t_cljs$core$async40804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40804";

cljs.core.async.t_cljs$core$async40804.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40804");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40804.
 */
cljs.core.async.__GT_t_cljs$core$async40804 = (function cljs$core$async$__GT_t_cljs$core$async40804(f__$1,blockable__$1,meta40805){
return (new cljs.core.async.t_cljs$core$async40804(f__$1,blockable__$1,meta40805));
});

}

return (new cljs.core.async.t_cljs$core$async40804(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40841 = arguments.length;
switch (G__40841) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40860 = arguments.length;
switch (G__40860) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40882 = arguments.length;
switch (G__40882) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_44134 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44134) : fn1.call(null,val_44134));
} else {
cljs.core.async.impl.dispatch.run(((function (val_44134,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44134) : fn1.call(null,val_44134));
});})(val_44134,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40889 = arguments.length;
switch (G__40889) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___44145 = n;
var x_44146 = (0);
while(true){
if((x_44146 < n__4607__auto___44145)){
(a[x_44146] = (0));

var G__44149 = (x_44146 + (1));
x_44146 = G__44149;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__44153 = (i + (1));
i = G__44153;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40928 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40928 = (function (flag,meta40929){
this.flag = flag;
this.meta40929 = meta40929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40930,meta40929__$1){
var self__ = this;
var _40930__$1 = this;
return (new cljs.core.async.t_cljs$core$async40928(self__.flag,meta40929__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40930){
var self__ = this;
var _40930__$1 = this;
return self__.meta40929;
});})(flag))
;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40928.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40929","meta40929",-1777028939,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40928";

cljs.core.async.t_cljs$core$async40928.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40928");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40928.
 */
cljs.core.async.__GT_t_cljs$core$async40928 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40928(flag__$1,meta40929){
return (new cljs.core.async.t_cljs$core$async40928(flag__$1,meta40929));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40928(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40942 = (function (flag,cb,meta40943){
this.flag = flag;
this.cb = cb;
this.meta40943 = meta40943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40944,meta40943__$1){
var self__ = this;
var _40944__$1 = this;
return (new cljs.core.async.t_cljs$core$async40942(self__.flag,self__.cb,meta40943__$1));
});

cljs.core.async.t_cljs$core$async40942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40944){
var self__ = this;
var _40944__$1 = this;
return self__.meta40943;
});

cljs.core.async.t_cljs$core$async40942.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async40942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40943","meta40943",1626890166,null)], null);
});

cljs.core.async.t_cljs$core$async40942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40942";

cljs.core.async.t_cljs$core$async40942.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40942");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40942.
 */
cljs.core.async.__GT_t_cljs$core$async40942 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40942(flag__$1,cb__$1,meta40943){
return (new cljs.core.async.t_cljs$core$async40942(flag__$1,cb__$1,meta40943));
});

}

return (new cljs.core.async.t_cljs$core$async40942(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40954_SHARP_){
var G__40962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40954_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40962) : fret.call(null,G__40962));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40955_SHARP_){
var G__40964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40955_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40964) : fret.call(null,G__40964));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44208 = (i + (1));
i = G__44208;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44222 = arguments.length;
var i__4731__auto___44223 = (0);
while(true){
if((i__4731__auto___44223 < len__4730__auto___44222)){
args__4736__auto__.push((arguments[i__4731__auto___44223]));

var G__44231 = (i__4731__auto___44223 + (1));
i__4731__auto___44223 = G__44231;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40982){
var map__40985 = p__40982;
var map__40985__$1 = (((((!((map__40985 == null))))?(((((map__40985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40985):map__40985);
var opts = map__40985__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40969){
var G__40970 = cljs.core.first(seq40969);
var seq40969__$1 = cljs.core.next(seq40969);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40970,seq40969__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__41008 = arguments.length;
switch (G__41008) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40721__auto___44271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___44271){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___44271){
return (function (state_41077){
var state_val_41082 = (state_41077[(1)]);
if((state_val_41082 === (7))){
var inst_41069 = (state_41077[(2)]);
var state_41077__$1 = state_41077;
var statearr_41096_44274 = state_41077__$1;
(statearr_41096_44274[(2)] = inst_41069);

(statearr_41096_44274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (1))){
var state_41077__$1 = state_41077;
var statearr_41097_44276 = state_41077__$1;
(statearr_41097_44276[(2)] = null);

(statearr_41097_44276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (4))){
var inst_41041 = (state_41077[(7)]);
var inst_41041__$1 = (state_41077[(2)]);
var inst_41045 = (inst_41041__$1 == null);
var state_41077__$1 = (function (){var statearr_41100 = state_41077;
(statearr_41100[(7)] = inst_41041__$1);

return statearr_41100;
})();
if(cljs.core.truth_(inst_41045)){
var statearr_41102_44277 = state_41077__$1;
(statearr_41102_44277[(1)] = (5));

} else {
var statearr_41104_44278 = state_41077__$1;
(statearr_41104_44278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (13))){
var state_41077__$1 = state_41077;
var statearr_41108_44282 = state_41077__$1;
(statearr_41108_44282[(2)] = null);

(statearr_41108_44282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (6))){
var inst_41041 = (state_41077[(7)]);
var state_41077__$1 = state_41077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41077__$1,(11),to,inst_41041);
} else {
if((state_val_41082 === (3))){
var inst_41071 = (state_41077[(2)]);
var state_41077__$1 = state_41077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41077__$1,inst_41071);
} else {
if((state_val_41082 === (12))){
var state_41077__$1 = state_41077;
var statearr_41112_44289 = state_41077__$1;
(statearr_41112_44289[(2)] = null);

(statearr_41112_44289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (2))){
var state_41077__$1 = state_41077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41077__$1,(4),from);
} else {
if((state_val_41082 === (11))){
var inst_41059 = (state_41077[(2)]);
var state_41077__$1 = state_41077;
if(cljs.core.truth_(inst_41059)){
var statearr_41113_44290 = state_41077__$1;
(statearr_41113_44290[(1)] = (12));

} else {
var statearr_41114_44291 = state_41077__$1;
(statearr_41114_44291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (9))){
var state_41077__$1 = state_41077;
var statearr_41115_44297 = state_41077__$1;
(statearr_41115_44297[(2)] = null);

(statearr_41115_44297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (5))){
var state_41077__$1 = state_41077;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41117_44300 = state_41077__$1;
(statearr_41117_44300[(1)] = (8));

} else {
var statearr_41119_44301 = state_41077__$1;
(statearr_41119_44301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (14))){
var inst_41067 = (state_41077[(2)]);
var state_41077__$1 = state_41077;
var statearr_41122_44305 = state_41077__$1;
(statearr_41122_44305[(2)] = inst_41067);

(statearr_41122_44305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (10))){
var inst_41055 = (state_41077[(2)]);
var state_41077__$1 = state_41077;
var statearr_41123_44306 = state_41077__$1;
(statearr_41123_44306[(2)] = inst_41055);

(statearr_41123_44306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (8))){
var inst_41051 = cljs.core.async.close_BANG_(to);
var state_41077__$1 = state_41077;
var statearr_41131_44308 = state_41077__$1;
(statearr_41131_44308[(2)] = inst_41051);

(statearr_41131_44308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___44271))
;
return ((function (switch__39734__auto__,c__40721__auto___44271){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_41138 = [null,null,null,null,null,null,null,null];
(statearr_41138[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_41138[(1)] = (1));

return statearr_41138;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_41077){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_41077);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e41147){if((e41147 instanceof Object)){
var ex__39738__auto__ = e41147;
var statearr_41151_44316 = state_41077;
(statearr_41151_44316[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41147;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44317 = state_41077;
state_41077 = G__44317;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_41077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_41077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___44271))
})();
var state__40723__auto__ = (function (){var statearr_41154 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_41154[(6)] = c__40721__auto___44271);

return statearr_41154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___44271))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__41162){
var vec__41163 = p__41162;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41163,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41163,(1),null);
var job = vec__41163;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__40721__auto___44334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___44334,res,vec__41163,v,p,job,jobs,results){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___44334,res,vec__41163,v,p,job,jobs,results){
return (function (state_41171){
var state_val_41172 = (state_41171[(1)]);
if((state_val_41172 === (1))){
var state_41171__$1 = state_41171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41171__$1,(2),res,v);
} else {
if((state_val_41172 === (2))){
var inst_41168 = (state_41171[(2)]);
var inst_41169 = cljs.core.async.close_BANG_(res);
var state_41171__$1 = (function (){var statearr_41181 = state_41171;
(statearr_41181[(7)] = inst_41168);

return statearr_41181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41171__$1,inst_41169);
} else {
return null;
}
}
});})(c__40721__auto___44334,res,vec__41163,v,p,job,jobs,results))
;
return ((function (switch__39734__auto__,c__40721__auto___44334,res,vec__41163,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0 = (function (){
var statearr_41182 = [null,null,null,null,null,null,null,null];
(statearr_41182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__);

(statearr_41182[(1)] = (1));

return statearr_41182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1 = (function (state_41171){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_41171);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e41183){if((e41183 instanceof Object)){
var ex__39738__auto__ = e41183;
var statearr_41187_44347 = state_41171;
(statearr_41187_44347[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41183;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44348 = state_41171;
state_41171 = G__44348;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__ = function(state_41171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1.call(this,state_41171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___44334,res,vec__41163,v,p,job,jobs,results))
})();
var state__40723__auto__ = (function (){var statearr_41193 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_41193[(6)] = c__40721__auto___44334);

return statearr_41193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___44334,res,vec__41163,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41195){
var vec__41196 = p__41195;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196,(1),null);
var job = vec__41196;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___44355 = n;
var __44357 = (0);
while(true){
if((__44357 < n__4607__auto___44355)){
var G__41201_44358 = type;
var G__41201_44359__$1 = (((G__41201_44358 instanceof cljs.core.Keyword))?G__41201_44358.fqn:null);
switch (G__41201_44359__$1) {
case "compute":
var c__40721__auto___44365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44357,c__40721__auto___44365,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (__44357,c__40721__auto___44365,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async){
return (function (state_41219){
var state_val_41220 = (state_41219[(1)]);
if((state_val_41220 === (1))){
var state_41219__$1 = state_41219;
var statearr_41221_44377 = state_41219__$1;
(statearr_41221_44377[(2)] = null);

(statearr_41221_44377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (2))){
var state_41219__$1 = state_41219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41219__$1,(4),jobs);
} else {
if((state_val_41220 === (3))){
var inst_41217 = (state_41219[(2)]);
var state_41219__$1 = state_41219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41219__$1,inst_41217);
} else {
if((state_val_41220 === (4))){
var inst_41207 = (state_41219[(2)]);
var inst_41209 = process(inst_41207);
var state_41219__$1 = state_41219;
if(cljs.core.truth_(inst_41209)){
var statearr_41227_44388 = state_41219__$1;
(statearr_41227_44388[(1)] = (5));

} else {
var statearr_41229_44392 = state_41219__$1;
(statearr_41229_44392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (5))){
var state_41219__$1 = state_41219;
var statearr_41230_44394 = state_41219__$1;
(statearr_41230_44394[(2)] = null);

(statearr_41230_44394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (6))){
var state_41219__$1 = state_41219;
var statearr_41231_44395 = state_41219__$1;
(statearr_41231_44395[(2)] = null);

(statearr_41231_44395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (7))){
var inst_41215 = (state_41219[(2)]);
var state_41219__$1 = state_41219;
var statearr_41233_44396 = state_41219__$1;
(statearr_41233_44396[(2)] = inst_41215);

(statearr_41233_44396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44357,c__40721__auto___44365,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async))
;
return ((function (__44357,switch__39734__auto__,c__40721__auto___44365,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0 = (function (){
var statearr_41234 = [null,null,null,null,null,null,null];
(statearr_41234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__);

(statearr_41234[(1)] = (1));

return statearr_41234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1 = (function (state_41219){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_41219);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e41238){if((e41238 instanceof Object)){
var ex__39738__auto__ = e41238;
var statearr_41241_44403 = state_41219;
(statearr_41241_44403[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44414 = state_41219;
state_41219 = G__44414;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__ = function(state_41219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1.call(this,state_41219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__;
})()
;})(__44357,switch__39734__auto__,c__40721__auto___44365,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async))
})();
var state__40723__auto__ = (function (){var statearr_41252 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_41252[(6)] = c__40721__auto___44365);

return statearr_41252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(__44357,c__40721__auto___44365,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async))
);


break;
case "async":
var c__40721__auto___44420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44357,c__40721__auto___44420,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (__44357,c__40721__auto___44420,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async){
return (function (state_41275){
var state_val_41276 = (state_41275[(1)]);
if((state_val_41276 === (1))){
var state_41275__$1 = state_41275;
var statearr_41286_44424 = state_41275__$1;
(statearr_41286_44424[(2)] = null);

(statearr_41286_44424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (2))){
var state_41275__$1 = state_41275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41275__$1,(4),jobs);
} else {
if((state_val_41276 === (3))){
var inst_41273 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41275__$1,inst_41273);
} else {
if((state_val_41276 === (4))){
var inst_41263 = (state_41275[(2)]);
var inst_41265 = async(inst_41263);
var state_41275__$1 = state_41275;
if(cljs.core.truth_(inst_41265)){
var statearr_41292_44427 = state_41275__$1;
(statearr_41292_44427[(1)] = (5));

} else {
var statearr_41299_44431 = state_41275__$1;
(statearr_41299_44431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (5))){
var state_41275__$1 = state_41275;
var statearr_41308_44433 = state_41275__$1;
(statearr_41308_44433[(2)] = null);

(statearr_41308_44433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (6))){
var state_41275__$1 = state_41275;
var statearr_41315_44441 = state_41275__$1;
(statearr_41315_44441[(2)] = null);

(statearr_41315_44441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (7))){
var inst_41271 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41320_44444 = state_41275__$1;
(statearr_41320_44444[(2)] = inst_41271);

(statearr_41320_44444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44357,c__40721__auto___44420,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async))
;
return ((function (__44357,switch__39734__auto__,c__40721__auto___44420,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0 = (function (){
var statearr_41333 = [null,null,null,null,null,null,null];
(statearr_41333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__);

(statearr_41333[(1)] = (1));

return statearr_41333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1 = (function (state_41275){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_41275);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e41336){if((e41336 instanceof Object)){
var ex__39738__auto__ = e41336;
var statearr_41338_44448 = state_41275;
(statearr_41338_44448[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44450 = state_41275;
state_41275 = G__44450;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__ = function(state_41275){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1.call(this,state_41275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__;
})()
;})(__44357,switch__39734__auto__,c__40721__auto___44420,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async))
})();
var state__40723__auto__ = (function (){var statearr_41340 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_41340[(6)] = c__40721__auto___44420);

return statearr_41340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(__44357,c__40721__auto___44420,G__41201_44358,G__41201_44359__$1,n__4607__auto___44355,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41201_44359__$1)].join('')));

}

var G__44455 = (__44357 + (1));
__44357 = G__44455;
continue;
} else {
}
break;
}

var c__40721__auto___44457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___44457,jobs,results,process,async){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___44457,jobs,results,process,async){
return (function (state_41373){
var state_val_41374 = (state_41373[(1)]);
if((state_val_41374 === (7))){
var inst_41369 = (state_41373[(2)]);
var state_41373__$1 = state_41373;
var statearr_41390_44466 = state_41373__$1;
(statearr_41390_44466[(2)] = inst_41369);

(statearr_41390_44466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41374 === (1))){
var state_41373__$1 = state_41373;
var statearr_41393_44471 = state_41373__$1;
(statearr_41393_44471[(2)] = null);

(statearr_41393_44471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41374 === (4))){
var inst_41345 = (state_41373[(7)]);
var inst_41345__$1 = (state_41373[(2)]);
var inst_41347 = (inst_41345__$1 == null);
var state_41373__$1 = (function (){var statearr_41396 = state_41373;
(statearr_41396[(7)] = inst_41345__$1);

return statearr_41396;
})();
if(cljs.core.truth_(inst_41347)){
var statearr_41398_44473 = state_41373__$1;
(statearr_41398_44473[(1)] = (5));

} else {
var statearr_41399_44474 = state_41373__$1;
(statearr_41399_44474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41374 === (6))){
var inst_41353 = (state_41373[(8)]);
var inst_41345 = (state_41373[(7)]);
var inst_41353__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_41359 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41361 = [inst_41345,inst_41353__$1];
var inst_41362 = (new cljs.core.PersistentVector(null,2,(5),inst_41359,inst_41361,null));
var state_41373__$1 = (function (){var statearr_41401 = state_41373;
(statearr_41401[(8)] = inst_41353__$1);

return statearr_41401;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41373__$1,(8),jobs,inst_41362);
} else {
if((state_val_41374 === (3))){
var inst_41371 = (state_41373[(2)]);
var state_41373__$1 = state_41373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41373__$1,inst_41371);
} else {
if((state_val_41374 === (2))){
var state_41373__$1 = state_41373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41373__$1,(4),from);
} else {
if((state_val_41374 === (9))){
var inst_41366 = (state_41373[(2)]);
var state_41373__$1 = (function (){var statearr_41406 = state_41373;
(statearr_41406[(9)] = inst_41366);

return statearr_41406;
})();
var statearr_41409_44504 = state_41373__$1;
(statearr_41409_44504[(2)] = null);

(statearr_41409_44504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41374 === (5))){
var inst_41349 = cljs.core.async.close_BANG_(jobs);
var state_41373__$1 = state_41373;
var statearr_41410_44510 = state_41373__$1;
(statearr_41410_44510[(2)] = inst_41349);

(statearr_41410_44510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41374 === (8))){
var inst_41353 = (state_41373[(8)]);
var inst_41364 = (state_41373[(2)]);
var state_41373__$1 = (function (){var statearr_41414 = state_41373;
(statearr_41414[(10)] = inst_41364);

return statearr_41414;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41373__$1,(9),results,inst_41353);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___44457,jobs,results,process,async))
;
return ((function (switch__39734__auto__,c__40721__auto___44457,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0 = (function (){
var statearr_41423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__);

(statearr_41423[(1)] = (1));

return statearr_41423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1 = (function (state_41373){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_41373);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e41430){if((e41430 instanceof Object)){
var ex__39738__auto__ = e41430;
var statearr_41436_44519 = state_41373;
(statearr_41436_44519[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44522 = state_41373;
state_41373 = G__44522;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__ = function(state_41373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1.call(this,state_41373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___44457,jobs,results,process,async))
})();
var state__40723__auto__ = (function (){var statearr_41445 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_41445[(6)] = c__40721__auto___44457);

return statearr_41445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___44457,jobs,results,process,async))
);


var c__40721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto__,jobs,results,process,async){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto__,jobs,results,process,async){
return (function (state_41491){
var state_val_41492 = (state_41491[(1)]);
if((state_val_41492 === (7))){
var inst_41487 = (state_41491[(2)]);
var state_41491__$1 = state_41491;
var statearr_41494_44531 = state_41491__$1;
(statearr_41494_44531[(2)] = inst_41487);

(statearr_41494_44531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (20))){
var state_41491__$1 = state_41491;
var statearr_41495_44533 = state_41491__$1;
(statearr_41495_44533[(2)] = null);

(statearr_41495_44533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (1))){
var state_41491__$1 = state_41491;
var statearr_41496_44536 = state_41491__$1;
(statearr_41496_44536[(2)] = null);

(statearr_41496_44536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (4))){
var inst_41454 = (state_41491[(7)]);
var inst_41454__$1 = (state_41491[(2)]);
var inst_41455 = (inst_41454__$1 == null);
var state_41491__$1 = (function (){var statearr_41498 = state_41491;
(statearr_41498[(7)] = inst_41454__$1);

return statearr_41498;
})();
if(cljs.core.truth_(inst_41455)){
var statearr_41500_44551 = state_41491__$1;
(statearr_41500_44551[(1)] = (5));

} else {
var statearr_41501_44553 = state_41491__$1;
(statearr_41501_44553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (15))){
var inst_41469 = (state_41491[(8)]);
var state_41491__$1 = state_41491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41491__$1,(18),to,inst_41469);
} else {
if((state_val_41492 === (21))){
var inst_41482 = (state_41491[(2)]);
var state_41491__$1 = state_41491;
var statearr_41505_44565 = state_41491__$1;
(statearr_41505_44565[(2)] = inst_41482);

(statearr_41505_44565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (13))){
var inst_41484 = (state_41491[(2)]);
var state_41491__$1 = (function (){var statearr_41507 = state_41491;
(statearr_41507[(9)] = inst_41484);

return statearr_41507;
})();
var statearr_41508_44571 = state_41491__$1;
(statearr_41508_44571[(2)] = null);

(statearr_41508_44571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (6))){
var inst_41454 = (state_41491[(7)]);
var state_41491__$1 = state_41491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41491__$1,(11),inst_41454);
} else {
if((state_val_41492 === (17))){
var inst_41477 = (state_41491[(2)]);
var state_41491__$1 = state_41491;
if(cljs.core.truth_(inst_41477)){
var statearr_41511_44575 = state_41491__$1;
(statearr_41511_44575[(1)] = (19));

} else {
var statearr_41512_44576 = state_41491__$1;
(statearr_41512_44576[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (3))){
var inst_41489 = (state_41491[(2)]);
var state_41491__$1 = state_41491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41491__$1,inst_41489);
} else {
if((state_val_41492 === (12))){
var inst_41465 = (state_41491[(10)]);
var state_41491__$1 = state_41491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41491__$1,(14),inst_41465);
} else {
if((state_val_41492 === (2))){
var state_41491__$1 = state_41491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41491__$1,(4),results);
} else {
if((state_val_41492 === (19))){
var state_41491__$1 = state_41491;
var statearr_41513_44577 = state_41491__$1;
(statearr_41513_44577[(2)] = null);

(statearr_41513_44577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (11))){
var inst_41465 = (state_41491[(2)]);
var state_41491__$1 = (function (){var statearr_41514 = state_41491;
(statearr_41514[(10)] = inst_41465);

return statearr_41514;
})();
var statearr_41518_44582 = state_41491__$1;
(statearr_41518_44582[(2)] = null);

(statearr_41518_44582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (9))){
var state_41491__$1 = state_41491;
var statearr_41525_44589 = state_41491__$1;
(statearr_41525_44589[(2)] = null);

(statearr_41525_44589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (5))){
var state_41491__$1 = state_41491;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41538_44593 = state_41491__$1;
(statearr_41538_44593[(1)] = (8));

} else {
var statearr_41539_44594 = state_41491__$1;
(statearr_41539_44594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (14))){
var inst_41471 = (state_41491[(11)]);
var inst_41469 = (state_41491[(8)]);
var inst_41469__$1 = (state_41491[(2)]);
var inst_41470 = (inst_41469__$1 == null);
var inst_41471__$1 = cljs.core.not(inst_41470);
var state_41491__$1 = (function (){var statearr_41543 = state_41491;
(statearr_41543[(11)] = inst_41471__$1);

(statearr_41543[(8)] = inst_41469__$1);

return statearr_41543;
})();
if(inst_41471__$1){
var statearr_41544_44598 = state_41491__$1;
(statearr_41544_44598[(1)] = (15));

} else {
var statearr_41546_44604 = state_41491__$1;
(statearr_41546_44604[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (16))){
var inst_41471 = (state_41491[(11)]);
var state_41491__$1 = state_41491;
var statearr_41549_44609 = state_41491__$1;
(statearr_41549_44609[(2)] = inst_41471);

(statearr_41549_44609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (10))){
var inst_41461 = (state_41491[(2)]);
var state_41491__$1 = state_41491;
var statearr_41551_44615 = state_41491__$1;
(statearr_41551_44615[(2)] = inst_41461);

(statearr_41551_44615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (18))){
var inst_41474 = (state_41491[(2)]);
var state_41491__$1 = state_41491;
var statearr_41554_44623 = state_41491__$1;
(statearr_41554_44623[(2)] = inst_41474);

(statearr_41554_44623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41492 === (8))){
var inst_41458 = cljs.core.async.close_BANG_(to);
var state_41491__$1 = state_41491;
var statearr_41555_44624 = state_41491__$1;
(statearr_41555_44624[(2)] = inst_41458);

(statearr_41555_44624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto__,jobs,results,process,async))
;
return ((function (switch__39734__auto__,c__40721__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0 = (function (){
var statearr_41557 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__);

(statearr_41557[(1)] = (1));

return statearr_41557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1 = (function (state_41491){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_41491);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e41559){if((e41559 instanceof Object)){
var ex__39738__auto__ = e41559;
var statearr_41560_44635 = state_41491;
(statearr_41560_44635[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44637 = state_41491;
state_41491 = G__44637;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__ = function(state_41491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1.call(this,state_41491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto__,jobs,results,process,async))
})();
var state__40723__auto__ = (function (){var statearr_41561 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_41561[(6)] = c__40721__auto__);

return statearr_41561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto__,jobs,results,process,async))
);

return c__40721__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41563 = arguments.length;
switch (G__41563) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41575 = arguments.length;
switch (G__41575) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41584 = arguments.length;
switch (G__41584) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__40721__auto___44668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___44668,tc,fc){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___44668,tc,fc){
return (function (state_41627){
var state_val_41628 = (state_41627[(1)]);
if((state_val_41628 === (7))){
var inst_41614 = (state_41627[(2)]);
var state_41627__$1 = state_41627;
var statearr_41633_44676 = state_41627__$1;
(statearr_41633_44676[(2)] = inst_41614);

(statearr_41633_44676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (1))){
var state_41627__$1 = state_41627;
var statearr_41634_44677 = state_41627__$1;
(statearr_41634_44677[(2)] = null);

(statearr_41634_44677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (4))){
var inst_41595 = (state_41627[(7)]);
var inst_41595__$1 = (state_41627[(2)]);
var inst_41596 = (inst_41595__$1 == null);
var state_41627__$1 = (function (){var statearr_41635 = state_41627;
(statearr_41635[(7)] = inst_41595__$1);

return statearr_41635;
})();
if(cljs.core.truth_(inst_41596)){
var statearr_41636_44678 = state_41627__$1;
(statearr_41636_44678[(1)] = (5));

} else {
var statearr_41637_44679 = state_41627__$1;
(statearr_41637_44679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (13))){
var state_41627__$1 = state_41627;
var statearr_41641_44680 = state_41627__$1;
(statearr_41641_44680[(2)] = null);

(statearr_41641_44680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (6))){
var inst_41595 = (state_41627[(7)]);
var inst_41601 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41595) : p.call(null,inst_41595));
var state_41627__$1 = state_41627;
if(cljs.core.truth_(inst_41601)){
var statearr_41642_44682 = state_41627__$1;
(statearr_41642_44682[(1)] = (9));

} else {
var statearr_41643_44683 = state_41627__$1;
(statearr_41643_44683[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (3))){
var inst_41616 = (state_41627[(2)]);
var state_41627__$1 = state_41627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41627__$1,inst_41616);
} else {
if((state_val_41628 === (12))){
var state_41627__$1 = state_41627;
var statearr_41644_44684 = state_41627__$1;
(statearr_41644_44684[(2)] = null);

(statearr_41644_44684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (2))){
var state_41627__$1 = state_41627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41627__$1,(4),ch);
} else {
if((state_val_41628 === (11))){
var inst_41595 = (state_41627[(7)]);
var inst_41605 = (state_41627[(2)]);
var state_41627__$1 = state_41627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41627__$1,(8),inst_41605,inst_41595);
} else {
if((state_val_41628 === (9))){
var state_41627__$1 = state_41627;
var statearr_41653_44685 = state_41627__$1;
(statearr_41653_44685[(2)] = tc);

(statearr_41653_44685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (5))){
var inst_41598 = cljs.core.async.close_BANG_(tc);
var inst_41599 = cljs.core.async.close_BANG_(fc);
var state_41627__$1 = (function (){var statearr_41654 = state_41627;
(statearr_41654[(8)] = inst_41598);

return statearr_41654;
})();
var statearr_41655_44696 = state_41627__$1;
(statearr_41655_44696[(2)] = inst_41599);

(statearr_41655_44696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (14))){
var inst_41612 = (state_41627[(2)]);
var state_41627__$1 = state_41627;
var statearr_41656_44700 = state_41627__$1;
(statearr_41656_44700[(2)] = inst_41612);

(statearr_41656_44700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (10))){
var state_41627__$1 = state_41627;
var statearr_41657_44704 = state_41627__$1;
(statearr_41657_44704[(2)] = fc);

(statearr_41657_44704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (8))){
var inst_41607 = (state_41627[(2)]);
var state_41627__$1 = state_41627;
if(cljs.core.truth_(inst_41607)){
var statearr_41658_44709 = state_41627__$1;
(statearr_41658_44709[(1)] = (12));

} else {
var statearr_41659_44710 = state_41627__$1;
(statearr_41659_44710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___44668,tc,fc))
;
return ((function (switch__39734__auto__,c__40721__auto___44668,tc,fc){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_41660 = [null,null,null,null,null,null,null,null,null];
(statearr_41660[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_41660[(1)] = (1));

return statearr_41660;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_41627){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_41627);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e41661){if((e41661 instanceof Object)){
var ex__39738__auto__ = e41661;
var statearr_41662_44712 = state_41627;
(statearr_41662_44712[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44717 = state_41627;
state_41627 = G__44717;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_41627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_41627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___44668,tc,fc))
})();
var state__40723__auto__ = (function (){var statearr_41664 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_41664[(6)] = c__40721__auto___44668);

return statearr_41664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___44668,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__40721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto__){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto__){
return (function (state_41690){
var state_val_41691 = (state_41690[(1)]);
if((state_val_41691 === (7))){
var inst_41686 = (state_41690[(2)]);
var state_41690__$1 = state_41690;
var statearr_41694_44728 = state_41690__$1;
(statearr_41694_44728[(2)] = inst_41686);

(statearr_41694_44728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (1))){
var inst_41667 = init;
var state_41690__$1 = (function (){var statearr_41695 = state_41690;
(statearr_41695[(7)] = inst_41667);

return statearr_41695;
})();
var statearr_41696_44729 = state_41690__$1;
(statearr_41696_44729[(2)] = null);

(statearr_41696_44729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (4))){
var inst_41670 = (state_41690[(8)]);
var inst_41670__$1 = (state_41690[(2)]);
var inst_41671 = (inst_41670__$1 == null);
var state_41690__$1 = (function (){var statearr_41697 = state_41690;
(statearr_41697[(8)] = inst_41670__$1);

return statearr_41697;
})();
if(cljs.core.truth_(inst_41671)){
var statearr_41698_44732 = state_41690__$1;
(statearr_41698_44732[(1)] = (5));

} else {
var statearr_41700_44733 = state_41690__$1;
(statearr_41700_44733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (6))){
var inst_41674 = (state_41690[(9)]);
var inst_41667 = (state_41690[(7)]);
var inst_41670 = (state_41690[(8)]);
var inst_41674__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41667,inst_41670) : f.call(null,inst_41667,inst_41670));
var inst_41675 = cljs.core.reduced_QMARK_(inst_41674__$1);
var state_41690__$1 = (function (){var statearr_41706 = state_41690;
(statearr_41706[(9)] = inst_41674__$1);

return statearr_41706;
})();
if(inst_41675){
var statearr_41707_44741 = state_41690__$1;
(statearr_41707_44741[(1)] = (8));

} else {
var statearr_41708_44742 = state_41690__$1;
(statearr_41708_44742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (3))){
var inst_41688 = (state_41690[(2)]);
var state_41690__$1 = state_41690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41690__$1,inst_41688);
} else {
if((state_val_41691 === (2))){
var state_41690__$1 = state_41690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41690__$1,(4),ch);
} else {
if((state_val_41691 === (9))){
var inst_41674 = (state_41690[(9)]);
var inst_41667 = inst_41674;
var state_41690__$1 = (function (){var statearr_41713 = state_41690;
(statearr_41713[(7)] = inst_41667);

return statearr_41713;
})();
var statearr_41714_44743 = state_41690__$1;
(statearr_41714_44743[(2)] = null);

(statearr_41714_44743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (5))){
var inst_41667 = (state_41690[(7)]);
var state_41690__$1 = state_41690;
var statearr_41715_44744 = state_41690__$1;
(statearr_41715_44744[(2)] = inst_41667);

(statearr_41715_44744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (10))){
var inst_41684 = (state_41690[(2)]);
var state_41690__$1 = state_41690;
var statearr_41717_44745 = state_41690__$1;
(statearr_41717_44745[(2)] = inst_41684);

(statearr_41717_44745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (8))){
var inst_41674 = (state_41690[(9)]);
var inst_41680 = cljs.core.deref(inst_41674);
var state_41690__$1 = state_41690;
var statearr_41718_44747 = state_41690__$1;
(statearr_41718_44747[(2)] = inst_41680);

(statearr_41718_44747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto__))
;
return ((function (switch__39734__auto__,c__40721__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39735__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39735__auto____0 = (function (){
var statearr_41723 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41723[(0)] = cljs$core$async$reduce_$_state_machine__39735__auto__);

(statearr_41723[(1)] = (1));

return statearr_41723;
});
var cljs$core$async$reduce_$_state_machine__39735__auto____1 = (function (state_41690){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_41690);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e41724){if((e41724 instanceof Object)){
var ex__39738__auto__ = e41724;
var statearr_41725_44750 = state_41690;
(statearr_41725_44750[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44751 = state_41690;
state_41690 = G__44751;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39735__auto__ = function(state_41690){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39735__auto____1.call(this,state_41690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39735__auto____0;
cljs$core$async$reduce_$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39735__auto____1;
return cljs$core$async$reduce_$_state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto__))
})();
var state__40723__auto__ = (function (){var statearr_41727 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_41727[(6)] = c__40721__auto__);

return statearr_41727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto__))
);

return c__40721__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__40721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto__,f__$1){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto__,f__$1){
return (function (state_41748){
var state_val_41749 = (state_41748[(1)]);
if((state_val_41749 === (1))){
var inst_41743 = cljs.core.async.reduce(f__$1,init,ch);
var state_41748__$1 = state_41748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41748__$1,(2),inst_41743);
} else {
if((state_val_41749 === (2))){
var inst_41745 = (state_41748[(2)]);
var inst_41746 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_41745) : f__$1.call(null,inst_41745));
var state_41748__$1 = state_41748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41748__$1,inst_41746);
} else {
return null;
}
}
});})(c__40721__auto__,f__$1))
;
return ((function (switch__39734__auto__,c__40721__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39735__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39735__auto____0 = (function (){
var statearr_41756 = [null,null,null,null,null,null,null];
(statearr_41756[(0)] = cljs$core$async$transduce_$_state_machine__39735__auto__);

(statearr_41756[(1)] = (1));

return statearr_41756;
});
var cljs$core$async$transduce_$_state_machine__39735__auto____1 = (function (state_41748){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_41748);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e41757){if((e41757 instanceof Object)){
var ex__39738__auto__ = e41757;
var statearr_41758_44766 = state_41748;
(statearr_41758_44766[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44770 = state_41748;
state_41748 = G__44770;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39735__auto__ = function(state_41748){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39735__auto____1.call(this,state_41748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39735__auto____0;
cljs$core$async$transduce_$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39735__auto____1;
return cljs$core$async$transduce_$_state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto__,f__$1))
})();
var state__40723__auto__ = (function (){var statearr_41759 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_41759[(6)] = c__40721__auto__);

return statearr_41759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto__,f__$1))
);

return c__40721__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41768 = arguments.length;
switch (G__41768) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto__){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto__){
return (function (state_41804){
var state_val_41805 = (state_41804[(1)]);
if((state_val_41805 === (7))){
var inst_41782 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
var statearr_41816_44786 = state_41804__$1;
(statearr_41816_44786[(2)] = inst_41782);

(statearr_41816_44786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (1))){
var inst_41776 = cljs.core.seq(coll);
var inst_41777 = inst_41776;
var state_41804__$1 = (function (){var statearr_41822 = state_41804;
(statearr_41822[(7)] = inst_41777);

return statearr_41822;
})();
var statearr_41823_44788 = state_41804__$1;
(statearr_41823_44788[(2)] = null);

(statearr_41823_44788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (4))){
var inst_41777 = (state_41804[(7)]);
var inst_41780 = cljs.core.first(inst_41777);
var state_41804__$1 = state_41804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41804__$1,(7),ch,inst_41780);
} else {
if((state_val_41805 === (13))){
var inst_41797 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
var statearr_41834_44793 = state_41804__$1;
(statearr_41834_44793[(2)] = inst_41797);

(statearr_41834_44793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (6))){
var inst_41785 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
if(cljs.core.truth_(inst_41785)){
var statearr_41841_44799 = state_41804__$1;
(statearr_41841_44799[(1)] = (8));

} else {
var statearr_41843_44800 = state_41804__$1;
(statearr_41843_44800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (3))){
var inst_41801 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41804__$1,inst_41801);
} else {
if((state_val_41805 === (12))){
var state_41804__$1 = state_41804;
var statearr_41849_44805 = state_41804__$1;
(statearr_41849_44805[(2)] = null);

(statearr_41849_44805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (2))){
var inst_41777 = (state_41804[(7)]);
var state_41804__$1 = state_41804;
if(cljs.core.truth_(inst_41777)){
var statearr_41850_44813 = state_41804__$1;
(statearr_41850_44813[(1)] = (4));

} else {
var statearr_41851_44814 = state_41804__$1;
(statearr_41851_44814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (11))){
var inst_41794 = cljs.core.async.close_BANG_(ch);
var state_41804__$1 = state_41804;
var statearr_41856_44815 = state_41804__$1;
(statearr_41856_44815[(2)] = inst_41794);

(statearr_41856_44815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (9))){
var state_41804__$1 = state_41804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41858_44817 = state_41804__$1;
(statearr_41858_44817[(1)] = (11));

} else {
var statearr_41860_44818 = state_41804__$1;
(statearr_41860_44818[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (5))){
var inst_41777 = (state_41804[(7)]);
var state_41804__$1 = state_41804;
var statearr_41869_44820 = state_41804__$1;
(statearr_41869_44820[(2)] = inst_41777);

(statearr_41869_44820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (10))){
var inst_41799 = (state_41804[(2)]);
var state_41804__$1 = state_41804;
var statearr_41870_44824 = state_41804__$1;
(statearr_41870_44824[(2)] = inst_41799);

(statearr_41870_44824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41805 === (8))){
var inst_41777 = (state_41804[(7)]);
var inst_41787 = cljs.core.next(inst_41777);
var inst_41777__$1 = inst_41787;
var state_41804__$1 = (function (){var statearr_41871 = state_41804;
(statearr_41871[(7)] = inst_41777__$1);

return statearr_41871;
})();
var statearr_41874_44825 = state_41804__$1;
(statearr_41874_44825[(2)] = null);

(statearr_41874_44825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto__))
;
return ((function (switch__39734__auto__,c__40721__auto__){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_41879 = [null,null,null,null,null,null,null,null];
(statearr_41879[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_41879[(1)] = (1));

return statearr_41879;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_41804){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_41804);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e41880){if((e41880 instanceof Object)){
var ex__39738__auto__ = e41880;
var statearr_41881_44829 = state_41804;
(statearr_41881_44829[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44830 = state_41804;
state_41804 = G__44830;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_41804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_41804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto__))
})();
var state__40723__auto__ = (function (){var statearr_41885 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_41885[(6)] = c__40721__auto__);

return statearr_41885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto__))
);

return c__40721__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41938 = (function (ch,cs,meta41939){
this.ch = ch;
this.cs = cs;
this.meta41939 = meta41939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41940,meta41939__$1){
var self__ = this;
var _41940__$1 = this;
return (new cljs.core.async.t_cljs$core$async41938(self__.ch,self__.cs,meta41939__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41940){
var self__ = this;
var _41940__$1 = this;
return self__.meta41939;
});})(cs))
;

cljs.core.async.t_cljs$core$async41938.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41938.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41938.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41938.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41938.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41938.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41939","meta41939",-348054262,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41938";

cljs.core.async.t_cljs$core$async41938.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async41938");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41938.
 */
cljs.core.async.__GT_t_cljs$core$async41938 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41938(ch__$1,cs__$1,meta41939){
return (new cljs.core.async.t_cljs$core$async41938(ch__$1,cs__$1,meta41939));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41938(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__40721__auto___44861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___44861,cs,m,dchan,dctr,done){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___44861,cs,m,dchan,dctr,done){
return (function (state_42151){
var state_val_42152 = (state_42151[(1)]);
if((state_val_42152 === (7))){
var inst_42144 = (state_42151[(2)]);
var state_42151__$1 = state_42151;
var statearr_42154_44865 = state_42151__$1;
(statearr_42154_44865[(2)] = inst_42144);

(statearr_42154_44865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (20))){
var inst_42019 = (state_42151[(7)]);
var inst_42033 = cljs.core.first(inst_42019);
var inst_42034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42033,(0),null);
var inst_42035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42033,(1),null);
var state_42151__$1 = (function (){var statearr_42156 = state_42151;
(statearr_42156[(8)] = inst_42034);

return statearr_42156;
})();
if(cljs.core.truth_(inst_42035)){
var statearr_42157_44870 = state_42151__$1;
(statearr_42157_44870[(1)] = (22));

} else {
var statearr_42158_44871 = state_42151__$1;
(statearr_42158_44871[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (27))){
var inst_41979 = (state_42151[(9)]);
var inst_42075 = (state_42151[(10)]);
var inst_42068 = (state_42151[(11)]);
var inst_42066 = (state_42151[(12)]);
var inst_42075__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42066,inst_42068);
var inst_42076 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42075__$1,inst_41979,done);
var state_42151__$1 = (function (){var statearr_42159 = state_42151;
(statearr_42159[(10)] = inst_42075__$1);

return statearr_42159;
})();
if(cljs.core.truth_(inst_42076)){
var statearr_42160_44876 = state_42151__$1;
(statearr_42160_44876[(1)] = (30));

} else {
var statearr_42161_44877 = state_42151__$1;
(statearr_42161_44877[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (1))){
var state_42151__$1 = state_42151;
var statearr_42162_44878 = state_42151__$1;
(statearr_42162_44878[(2)] = null);

(statearr_42162_44878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (24))){
var inst_42019 = (state_42151[(7)]);
var inst_42043 = (state_42151[(2)]);
var inst_42044 = cljs.core.next(inst_42019);
var inst_41992 = inst_42044;
var inst_41993 = null;
var inst_41994 = (0);
var inst_41995 = (0);
var state_42151__$1 = (function (){var statearr_42163 = state_42151;
(statearr_42163[(13)] = inst_41994);

(statearr_42163[(14)] = inst_41995);

(statearr_42163[(15)] = inst_41992);

(statearr_42163[(16)] = inst_42043);

(statearr_42163[(17)] = inst_41993);

return statearr_42163;
})();
var statearr_42168_44881 = state_42151__$1;
(statearr_42168_44881[(2)] = null);

(statearr_42168_44881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (39))){
var state_42151__$1 = state_42151;
var statearr_42175_44882 = state_42151__$1;
(statearr_42175_44882[(2)] = null);

(statearr_42175_44882[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (4))){
var inst_41979 = (state_42151[(9)]);
var inst_41979__$1 = (state_42151[(2)]);
var inst_41984 = (inst_41979__$1 == null);
var state_42151__$1 = (function (){var statearr_42182 = state_42151;
(statearr_42182[(9)] = inst_41979__$1);

return statearr_42182;
})();
if(cljs.core.truth_(inst_41984)){
var statearr_42183_44884 = state_42151__$1;
(statearr_42183_44884[(1)] = (5));

} else {
var statearr_42184_44885 = state_42151__$1;
(statearr_42184_44885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (15))){
var inst_41994 = (state_42151[(13)]);
var inst_41995 = (state_42151[(14)]);
var inst_41992 = (state_42151[(15)]);
var inst_41993 = (state_42151[(17)]);
var inst_42010 = (state_42151[(2)]);
var inst_42013 = (inst_41995 + (1));
var tmp42171 = inst_41994;
var tmp42172 = inst_41992;
var tmp42173 = inst_41993;
var inst_41992__$1 = tmp42172;
var inst_41993__$1 = tmp42173;
var inst_41994__$1 = tmp42171;
var inst_41995__$1 = inst_42013;
var state_42151__$1 = (function (){var statearr_42185 = state_42151;
(statearr_42185[(13)] = inst_41994__$1);

(statearr_42185[(14)] = inst_41995__$1);

(statearr_42185[(15)] = inst_41992__$1);

(statearr_42185[(17)] = inst_41993__$1);

(statearr_42185[(18)] = inst_42010);

return statearr_42185;
})();
var statearr_42187_44886 = state_42151__$1;
(statearr_42187_44886[(2)] = null);

(statearr_42187_44886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (21))){
var inst_42047 = (state_42151[(2)]);
var state_42151__$1 = state_42151;
var statearr_42191_44887 = state_42151__$1;
(statearr_42191_44887[(2)] = inst_42047);

(statearr_42191_44887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (31))){
var inst_42075 = (state_42151[(10)]);
var inst_42079 = done(null);
var inst_42080 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42075);
var state_42151__$1 = (function (){var statearr_42192 = state_42151;
(statearr_42192[(19)] = inst_42079);

return statearr_42192;
})();
var statearr_42193_44894 = state_42151__$1;
(statearr_42193_44894[(2)] = inst_42080);

(statearr_42193_44894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (32))){
var inst_42065 = (state_42151[(20)]);
var inst_42067 = (state_42151[(21)]);
var inst_42068 = (state_42151[(11)]);
var inst_42066 = (state_42151[(12)]);
var inst_42082 = (state_42151[(2)]);
var inst_42083 = (inst_42068 + (1));
var tmp42188 = inst_42065;
var tmp42189 = inst_42067;
var tmp42190 = inst_42066;
var inst_42065__$1 = tmp42188;
var inst_42066__$1 = tmp42190;
var inst_42067__$1 = tmp42189;
var inst_42068__$1 = inst_42083;
var state_42151__$1 = (function (){var statearr_42198 = state_42151;
(statearr_42198[(22)] = inst_42082);

(statearr_42198[(20)] = inst_42065__$1);

(statearr_42198[(21)] = inst_42067__$1);

(statearr_42198[(11)] = inst_42068__$1);

(statearr_42198[(12)] = inst_42066__$1);

return statearr_42198;
})();
var statearr_42199_44898 = state_42151__$1;
(statearr_42199_44898[(2)] = null);

(statearr_42199_44898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (40))){
var inst_42100 = (state_42151[(23)]);
var inst_42105 = done(null);
var inst_42110 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42100);
var state_42151__$1 = (function (){var statearr_42200 = state_42151;
(statearr_42200[(24)] = inst_42105);

return statearr_42200;
})();
var statearr_42201_44903 = state_42151__$1;
(statearr_42201_44903[(2)] = inst_42110);

(statearr_42201_44903[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (33))){
var inst_42087 = (state_42151[(25)]);
var inst_42091 = cljs.core.chunked_seq_QMARK_(inst_42087);
var state_42151__$1 = state_42151;
if(inst_42091){
var statearr_42202_44907 = state_42151__$1;
(statearr_42202_44907[(1)] = (36));

} else {
var statearr_42203_44908 = state_42151__$1;
(statearr_42203_44908[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (13))){
var inst_42004 = (state_42151[(26)]);
var inst_42007 = cljs.core.async.close_BANG_(inst_42004);
var state_42151__$1 = state_42151;
var statearr_42204_44909 = state_42151__$1;
(statearr_42204_44909[(2)] = inst_42007);

(statearr_42204_44909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (22))){
var inst_42034 = (state_42151[(8)]);
var inst_42040 = cljs.core.async.close_BANG_(inst_42034);
var state_42151__$1 = state_42151;
var statearr_42207_44910 = state_42151__$1;
(statearr_42207_44910[(2)] = inst_42040);

(statearr_42207_44910[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (36))){
var inst_42087 = (state_42151[(25)]);
var inst_42095 = cljs.core.chunk_first(inst_42087);
var inst_42096 = cljs.core.chunk_rest(inst_42087);
var inst_42097 = cljs.core.count(inst_42095);
var inst_42065 = inst_42096;
var inst_42066 = inst_42095;
var inst_42067 = inst_42097;
var inst_42068 = (0);
var state_42151__$1 = (function (){var statearr_42208 = state_42151;
(statearr_42208[(20)] = inst_42065);

(statearr_42208[(21)] = inst_42067);

(statearr_42208[(11)] = inst_42068);

(statearr_42208[(12)] = inst_42066);

return statearr_42208;
})();
var statearr_42209_44919 = state_42151__$1;
(statearr_42209_44919[(2)] = null);

(statearr_42209_44919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (41))){
var inst_42087 = (state_42151[(25)]);
var inst_42117 = (state_42151[(2)]);
var inst_42118 = cljs.core.next(inst_42087);
var inst_42065 = inst_42118;
var inst_42066 = null;
var inst_42067 = (0);
var inst_42068 = (0);
var state_42151__$1 = (function (){var statearr_42212 = state_42151;
(statearr_42212[(20)] = inst_42065);

(statearr_42212[(21)] = inst_42067);

(statearr_42212[(11)] = inst_42068);

(statearr_42212[(12)] = inst_42066);

(statearr_42212[(27)] = inst_42117);

return statearr_42212;
})();
var statearr_42213_44936 = state_42151__$1;
(statearr_42213_44936[(2)] = null);

(statearr_42213_44936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (43))){
var state_42151__$1 = state_42151;
var statearr_42214_44944 = state_42151__$1;
(statearr_42214_44944[(2)] = null);

(statearr_42214_44944[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (29))){
var inst_42132 = (state_42151[(2)]);
var state_42151__$1 = state_42151;
var statearr_42221_44952 = state_42151__$1;
(statearr_42221_44952[(2)] = inst_42132);

(statearr_42221_44952[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (44))){
var inst_42141 = (state_42151[(2)]);
var state_42151__$1 = (function (){var statearr_42227 = state_42151;
(statearr_42227[(28)] = inst_42141);

return statearr_42227;
})();
var statearr_42228_44953 = state_42151__$1;
(statearr_42228_44953[(2)] = null);

(statearr_42228_44953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (6))){
var inst_42057 = (state_42151[(29)]);
var inst_42056 = cljs.core.deref(cs);
var inst_42057__$1 = cljs.core.keys(inst_42056);
var inst_42058 = cljs.core.count(inst_42057__$1);
var inst_42059 = cljs.core.reset_BANG_(dctr,inst_42058);
var inst_42064 = cljs.core.seq(inst_42057__$1);
var inst_42065 = inst_42064;
var inst_42066 = null;
var inst_42067 = (0);
var inst_42068 = (0);
var state_42151__$1 = (function (){var statearr_42229 = state_42151;
(statearr_42229[(29)] = inst_42057__$1);

(statearr_42229[(20)] = inst_42065);

(statearr_42229[(21)] = inst_42067);

(statearr_42229[(11)] = inst_42068);

(statearr_42229[(12)] = inst_42066);

(statearr_42229[(30)] = inst_42059);

return statearr_42229;
})();
var statearr_42244_44977 = state_42151__$1;
(statearr_42244_44977[(2)] = null);

(statearr_42244_44977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (28))){
var inst_42065 = (state_42151[(20)]);
var inst_42087 = (state_42151[(25)]);
var inst_42087__$1 = cljs.core.seq(inst_42065);
var state_42151__$1 = (function (){var statearr_42250 = state_42151;
(statearr_42250[(25)] = inst_42087__$1);

return statearr_42250;
})();
if(inst_42087__$1){
var statearr_42251_44987 = state_42151__$1;
(statearr_42251_44987[(1)] = (33));

} else {
var statearr_42253_44988 = state_42151__$1;
(statearr_42253_44988[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (25))){
var inst_42067 = (state_42151[(21)]);
var inst_42068 = (state_42151[(11)]);
var inst_42072 = (inst_42068 < inst_42067);
var inst_42073 = inst_42072;
var state_42151__$1 = state_42151;
if(cljs.core.truth_(inst_42073)){
var statearr_42254_44993 = state_42151__$1;
(statearr_42254_44993[(1)] = (27));

} else {
var statearr_42255_44994 = state_42151__$1;
(statearr_42255_44994[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (34))){
var state_42151__$1 = state_42151;
var statearr_42256_44998 = state_42151__$1;
(statearr_42256_44998[(2)] = null);

(statearr_42256_44998[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (17))){
var state_42151__$1 = state_42151;
var statearr_42257_45003 = state_42151__$1;
(statearr_42257_45003[(2)] = null);

(statearr_42257_45003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (3))){
var inst_42146 = (state_42151[(2)]);
var state_42151__$1 = state_42151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42151__$1,inst_42146);
} else {
if((state_val_42152 === (12))){
var inst_42052 = (state_42151[(2)]);
var state_42151__$1 = state_42151;
var statearr_42259_45004 = state_42151__$1;
(statearr_42259_45004[(2)] = inst_42052);

(statearr_42259_45004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (2))){
var state_42151__$1 = state_42151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42151__$1,(4),ch);
} else {
if((state_val_42152 === (23))){
var state_42151__$1 = state_42151;
var statearr_42260_45009 = state_42151__$1;
(statearr_42260_45009[(2)] = null);

(statearr_42260_45009[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (35))){
var inst_42130 = (state_42151[(2)]);
var state_42151__$1 = state_42151;
var statearr_42261_45014 = state_42151__$1;
(statearr_42261_45014[(2)] = inst_42130);

(statearr_42261_45014[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (19))){
var inst_42019 = (state_42151[(7)]);
var inst_42025 = cljs.core.chunk_first(inst_42019);
var inst_42026 = cljs.core.chunk_rest(inst_42019);
var inst_42027 = cljs.core.count(inst_42025);
var inst_41992 = inst_42026;
var inst_41993 = inst_42025;
var inst_41994 = inst_42027;
var inst_41995 = (0);
var state_42151__$1 = (function (){var statearr_42264 = state_42151;
(statearr_42264[(13)] = inst_41994);

(statearr_42264[(14)] = inst_41995);

(statearr_42264[(15)] = inst_41992);

(statearr_42264[(17)] = inst_41993);

return statearr_42264;
})();
var statearr_42267_45015 = state_42151__$1;
(statearr_42267_45015[(2)] = null);

(statearr_42267_45015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (11))){
var inst_42019 = (state_42151[(7)]);
var inst_41992 = (state_42151[(15)]);
var inst_42019__$1 = cljs.core.seq(inst_41992);
var state_42151__$1 = (function (){var statearr_42270 = state_42151;
(statearr_42270[(7)] = inst_42019__$1);

return statearr_42270;
})();
if(inst_42019__$1){
var statearr_42273_45022 = state_42151__$1;
(statearr_42273_45022[(1)] = (16));

} else {
var statearr_42274_45023 = state_42151__$1;
(statearr_42274_45023[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (9))){
var inst_42054 = (state_42151[(2)]);
var state_42151__$1 = state_42151;
var statearr_42278_45024 = state_42151__$1;
(statearr_42278_45024[(2)] = inst_42054);

(statearr_42278_45024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (5))){
var inst_41990 = cljs.core.deref(cs);
var inst_41991 = cljs.core.seq(inst_41990);
var inst_41992 = inst_41991;
var inst_41993 = null;
var inst_41994 = (0);
var inst_41995 = (0);
var state_42151__$1 = (function (){var statearr_42281 = state_42151;
(statearr_42281[(13)] = inst_41994);

(statearr_42281[(14)] = inst_41995);

(statearr_42281[(15)] = inst_41992);

(statearr_42281[(17)] = inst_41993);

return statearr_42281;
})();
var statearr_42286_45034 = state_42151__$1;
(statearr_42286_45034[(2)] = null);

(statearr_42286_45034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (14))){
var state_42151__$1 = state_42151;
var statearr_42287_45035 = state_42151__$1;
(statearr_42287_45035[(2)] = null);

(statearr_42287_45035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (45))){
var inst_42138 = (state_42151[(2)]);
var state_42151__$1 = state_42151;
var statearr_42290_45038 = state_42151__$1;
(statearr_42290_45038[(2)] = inst_42138);

(statearr_42290_45038[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (26))){
var inst_42057 = (state_42151[(29)]);
var inst_42134 = (state_42151[(2)]);
var inst_42135 = cljs.core.seq(inst_42057);
var state_42151__$1 = (function (){var statearr_42294 = state_42151;
(statearr_42294[(31)] = inst_42134);

return statearr_42294;
})();
if(inst_42135){
var statearr_42295_45043 = state_42151__$1;
(statearr_42295_45043[(1)] = (42));

} else {
var statearr_42297_45044 = state_42151__$1;
(statearr_42297_45044[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (16))){
var inst_42019 = (state_42151[(7)]);
var inst_42022 = cljs.core.chunked_seq_QMARK_(inst_42019);
var state_42151__$1 = state_42151;
if(inst_42022){
var statearr_42298_45045 = state_42151__$1;
(statearr_42298_45045[(1)] = (19));

} else {
var statearr_42299_45046 = state_42151__$1;
(statearr_42299_45046[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (38))){
var inst_42125 = (state_42151[(2)]);
var state_42151__$1 = state_42151;
var statearr_42300_45047 = state_42151__$1;
(statearr_42300_45047[(2)] = inst_42125);

(statearr_42300_45047[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (30))){
var state_42151__$1 = state_42151;
var statearr_42305_45048 = state_42151__$1;
(statearr_42305_45048[(2)] = null);

(statearr_42305_45048[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (10))){
var inst_41995 = (state_42151[(14)]);
var inst_41993 = (state_42151[(17)]);
var inst_42003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41993,inst_41995);
var inst_42004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42003,(0),null);
var inst_42005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42003,(1),null);
var state_42151__$1 = (function (){var statearr_42307 = state_42151;
(statearr_42307[(26)] = inst_42004);

return statearr_42307;
})();
if(cljs.core.truth_(inst_42005)){
var statearr_42308_45050 = state_42151__$1;
(statearr_42308_45050[(1)] = (13));

} else {
var statearr_42309_45051 = state_42151__$1;
(statearr_42309_45051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (18))){
var inst_42050 = (state_42151[(2)]);
var state_42151__$1 = state_42151;
var statearr_42310_45052 = state_42151__$1;
(statearr_42310_45052[(2)] = inst_42050);

(statearr_42310_45052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (42))){
var state_42151__$1 = state_42151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42151__$1,(45),dchan);
} else {
if((state_val_42152 === (37))){
var inst_42100 = (state_42151[(23)]);
var inst_41979 = (state_42151[(9)]);
var inst_42087 = (state_42151[(25)]);
var inst_42100__$1 = cljs.core.first(inst_42087);
var inst_42101 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42100__$1,inst_41979,done);
var state_42151__$1 = (function (){var statearr_42318 = state_42151;
(statearr_42318[(23)] = inst_42100__$1);

return statearr_42318;
})();
if(cljs.core.truth_(inst_42101)){
var statearr_42321_45056 = state_42151__$1;
(statearr_42321_45056[(1)] = (39));

} else {
var statearr_42322_45057 = state_42151__$1;
(statearr_42322_45057[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42152 === (8))){
var inst_41994 = (state_42151[(13)]);
var inst_41995 = (state_42151[(14)]);
var inst_41997 = (inst_41995 < inst_41994);
var inst_41998 = inst_41997;
var state_42151__$1 = state_42151;
if(cljs.core.truth_(inst_41998)){
var statearr_42323_45058 = state_42151__$1;
(statearr_42323_45058[(1)] = (10));

} else {
var statearr_42324_45059 = state_42151__$1;
(statearr_42324_45059[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___44861,cs,m,dchan,dctr,done))
;
return ((function (switch__39734__auto__,c__40721__auto___44861,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39735__auto__ = null;
var cljs$core$async$mult_$_state_machine__39735__auto____0 = (function (){
var statearr_42334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42334[(0)] = cljs$core$async$mult_$_state_machine__39735__auto__);

(statearr_42334[(1)] = (1));

return statearr_42334;
});
var cljs$core$async$mult_$_state_machine__39735__auto____1 = (function (state_42151){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_42151);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e42344){if((e42344 instanceof Object)){
var ex__39738__auto__ = e42344;
var statearr_42345_45063 = state_42151;
(statearr_42345_45063[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45064 = state_42151;
state_42151 = G__45064;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39735__auto__ = function(state_42151){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39735__auto____1.call(this,state_42151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39735__auto____0;
cljs$core$async$mult_$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39735__auto____1;
return cljs$core$async$mult_$_state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___44861,cs,m,dchan,dctr,done))
})();
var state__40723__auto__ = (function (){var statearr_42347 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_42347[(6)] = c__40721__auto___44861);

return statearr_42347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___44861,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42353 = arguments.length;
switch (G__42353) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45098 = arguments.length;
var i__4731__auto___45099 = (0);
while(true){
if((i__4731__auto___45099 < len__4730__auto___45098)){
args__4736__auto__.push((arguments[i__4731__auto___45099]));

var G__45100 = (i__4731__auto___45099 + (1));
i__4731__auto___45099 = G__45100;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42431){
var map__42432 = p__42431;
var map__42432__$1 = (((((!((map__42432 == null))))?(((((map__42432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42432):map__42432);
var opts = map__42432__$1;
var statearr_42438_45102 = state;
(statearr_42438_45102[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__42432,map__42432__$1,opts){
return (function (val){
var statearr_42439_45103 = state;
(statearr_42439_45103[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__42432,map__42432__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_42440_45104 = state;
(statearr_42440_45104[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42415){
var G__42416 = cljs.core.first(seq42415);
var seq42415__$1 = cljs.core.next(seq42415);
var G__42417 = cljs.core.first(seq42415__$1);
var seq42415__$2 = cljs.core.next(seq42415__$1);
var G__42418 = cljs.core.first(seq42415__$2);
var seq42415__$3 = cljs.core.next(seq42415__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42416,G__42417,G__42418,seq42415__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42459 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42460){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42460 = meta42460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42461,meta42460__$1){
var self__ = this;
var _42461__$1 = this;
return (new cljs.core.async.t_cljs$core$async42459(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42460__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42461){
var self__ = this;
var _42461__$1 = this;
return self__.meta42460;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42459.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42459.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42459.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42459.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42459.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42459.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42459.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42459.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42459.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42460","meta42460",-595807194,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42459";

cljs.core.async.t_cljs$core$async42459.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42459");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42459.
 */
cljs.core.async.__GT_t_cljs$core$async42459 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42459(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42460){
return (new cljs.core.async.t_cljs$core$async42459(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42460));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42459(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40721__auto___45153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___45153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___45153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42609){
var state_val_42611 = (state_42609[(1)]);
if((state_val_42611 === (7))){
var inst_42506 = (state_42609[(2)]);
var state_42609__$1 = state_42609;
var statearr_42617_45160 = state_42609__$1;
(statearr_42617_45160[(2)] = inst_42506);

(statearr_42617_45160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (20))){
var inst_42522 = (state_42609[(7)]);
var state_42609__$1 = state_42609;
var statearr_42620_45161 = state_42609__$1;
(statearr_42620_45161[(2)] = inst_42522);

(statearr_42620_45161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (27))){
var state_42609__$1 = state_42609;
var statearr_42621_45163 = state_42609__$1;
(statearr_42621_45163[(2)] = null);

(statearr_42621_45163[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (1))){
var inst_42492 = (state_42609[(8)]);
var inst_42492__$1 = calc_state();
var inst_42494 = (inst_42492__$1 == null);
var inst_42495 = cljs.core.not(inst_42494);
var state_42609__$1 = (function (){var statearr_42622 = state_42609;
(statearr_42622[(8)] = inst_42492__$1);

return statearr_42622;
})();
if(inst_42495){
var statearr_42624_45168 = state_42609__$1;
(statearr_42624_45168[(1)] = (2));

} else {
var statearr_42625_45169 = state_42609__$1;
(statearr_42625_45169[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (24))){
var inst_42547 = (state_42609[(9)]);
var inst_42576 = (state_42609[(10)]);
var inst_42562 = (state_42609[(11)]);
var inst_42576__$1 = (inst_42547.cljs$core$IFn$_invoke$arity$1 ? inst_42547.cljs$core$IFn$_invoke$arity$1(inst_42562) : inst_42547.call(null,inst_42562));
var state_42609__$1 = (function (){var statearr_42630 = state_42609;
(statearr_42630[(10)] = inst_42576__$1);

return statearr_42630;
})();
if(cljs.core.truth_(inst_42576__$1)){
var statearr_42632_45170 = state_42609__$1;
(statearr_42632_45170[(1)] = (29));

} else {
var statearr_42633_45171 = state_42609__$1;
(statearr_42633_45171[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (4))){
var inst_42512 = (state_42609[(2)]);
var state_42609__$1 = state_42609;
if(cljs.core.truth_(inst_42512)){
var statearr_42639_45172 = state_42609__$1;
(statearr_42639_45172[(1)] = (8));

} else {
var statearr_42640_45173 = state_42609__$1;
(statearr_42640_45173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (15))){
var inst_42541 = (state_42609[(2)]);
var state_42609__$1 = state_42609;
if(cljs.core.truth_(inst_42541)){
var statearr_42641_45174 = state_42609__$1;
(statearr_42641_45174[(1)] = (19));

} else {
var statearr_42645_45175 = state_42609__$1;
(statearr_42645_45175[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (21))){
var inst_42546 = (state_42609[(12)]);
var inst_42546__$1 = (state_42609[(2)]);
var inst_42547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42546__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42546__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42546__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42609__$1 = (function (){var statearr_42649 = state_42609;
(statearr_42649[(9)] = inst_42547);

(statearr_42649[(12)] = inst_42546__$1);

(statearr_42649[(13)] = inst_42548);

return statearr_42649;
})();
return cljs.core.async.ioc_alts_BANG_(state_42609__$1,(22),inst_42549);
} else {
if((state_val_42611 === (31))){
var inst_42590 = (state_42609[(2)]);
var state_42609__$1 = state_42609;
if(cljs.core.truth_(inst_42590)){
var statearr_42652_45186 = state_42609__$1;
(statearr_42652_45186[(1)] = (32));

} else {
var statearr_42653_45187 = state_42609__$1;
(statearr_42653_45187[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (32))){
var inst_42561 = (state_42609[(14)]);
var state_42609__$1 = state_42609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42609__$1,(35),out,inst_42561);
} else {
if((state_val_42611 === (33))){
var inst_42546 = (state_42609[(12)]);
var inst_42522 = inst_42546;
var state_42609__$1 = (function (){var statearr_42658 = state_42609;
(statearr_42658[(7)] = inst_42522);

return statearr_42658;
})();
var statearr_42662_45188 = state_42609__$1;
(statearr_42662_45188[(2)] = null);

(statearr_42662_45188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (13))){
var inst_42522 = (state_42609[(7)]);
var inst_42530 = inst_42522.cljs$lang$protocol_mask$partition0$;
var inst_42531 = (inst_42530 & (64));
var inst_42532 = inst_42522.cljs$core$ISeq$;
var inst_42533 = (cljs.core.PROTOCOL_SENTINEL === inst_42532);
var inst_42534 = ((inst_42531) || (inst_42533));
var state_42609__$1 = state_42609;
if(cljs.core.truth_(inst_42534)){
var statearr_42664_45191 = state_42609__$1;
(statearr_42664_45191[(1)] = (16));

} else {
var statearr_42665_45192 = state_42609__$1;
(statearr_42665_45192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (22))){
var inst_42561 = (state_42609[(14)]);
var inst_42562 = (state_42609[(11)]);
var inst_42560 = (state_42609[(2)]);
var inst_42561__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42560,(0),null);
var inst_42562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42560,(1),null);
var inst_42563 = (inst_42561__$1 == null);
var inst_42564 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42562__$1,change);
var inst_42565 = ((inst_42563) || (inst_42564));
var state_42609__$1 = (function (){var statearr_42673 = state_42609;
(statearr_42673[(14)] = inst_42561__$1);

(statearr_42673[(11)] = inst_42562__$1);

return statearr_42673;
})();
if(cljs.core.truth_(inst_42565)){
var statearr_42674_45194 = state_42609__$1;
(statearr_42674_45194[(1)] = (23));

} else {
var statearr_42675_45199 = state_42609__$1;
(statearr_42675_45199[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (36))){
var inst_42546 = (state_42609[(12)]);
var inst_42522 = inst_42546;
var state_42609__$1 = (function (){var statearr_42678 = state_42609;
(statearr_42678[(7)] = inst_42522);

return statearr_42678;
})();
var statearr_42679_45201 = state_42609__$1;
(statearr_42679_45201[(2)] = null);

(statearr_42679_45201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (29))){
var inst_42576 = (state_42609[(10)]);
var state_42609__$1 = state_42609;
var statearr_42683_45202 = state_42609__$1;
(statearr_42683_45202[(2)] = inst_42576);

(statearr_42683_45202[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (6))){
var state_42609__$1 = state_42609;
var statearr_42686_45205 = state_42609__$1;
(statearr_42686_45205[(2)] = false);

(statearr_42686_45205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (28))){
var inst_42572 = (state_42609[(2)]);
var inst_42573 = calc_state();
var inst_42522 = inst_42573;
var state_42609__$1 = (function (){var statearr_42687 = state_42609;
(statearr_42687[(15)] = inst_42572);

(statearr_42687[(7)] = inst_42522);

return statearr_42687;
})();
var statearr_42688_45206 = state_42609__$1;
(statearr_42688_45206[(2)] = null);

(statearr_42688_45206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (25))){
var inst_42604 = (state_42609[(2)]);
var state_42609__$1 = state_42609;
var statearr_42690_45207 = state_42609__$1;
(statearr_42690_45207[(2)] = inst_42604);

(statearr_42690_45207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (34))){
var inst_42602 = (state_42609[(2)]);
var state_42609__$1 = state_42609;
var statearr_42692_45214 = state_42609__$1;
(statearr_42692_45214[(2)] = inst_42602);

(statearr_42692_45214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (17))){
var state_42609__$1 = state_42609;
var statearr_42696_45219 = state_42609__$1;
(statearr_42696_45219[(2)] = false);

(statearr_42696_45219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (3))){
var state_42609__$1 = state_42609;
var statearr_42700_45220 = state_42609__$1;
(statearr_42700_45220[(2)] = false);

(statearr_42700_45220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (12))){
var inst_42606 = (state_42609[(2)]);
var state_42609__$1 = state_42609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42609__$1,inst_42606);
} else {
if((state_val_42611 === (2))){
var inst_42492 = (state_42609[(8)]);
var inst_42497 = inst_42492.cljs$lang$protocol_mask$partition0$;
var inst_42498 = (inst_42497 & (64));
var inst_42500 = inst_42492.cljs$core$ISeq$;
var inst_42501 = (cljs.core.PROTOCOL_SENTINEL === inst_42500);
var inst_42502 = ((inst_42498) || (inst_42501));
var state_42609__$1 = state_42609;
if(cljs.core.truth_(inst_42502)){
var statearr_42703_45222 = state_42609__$1;
(statearr_42703_45222[(1)] = (5));

} else {
var statearr_42705_45223 = state_42609__$1;
(statearr_42705_45223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (23))){
var inst_42561 = (state_42609[(14)]);
var inst_42567 = (inst_42561 == null);
var state_42609__$1 = state_42609;
if(cljs.core.truth_(inst_42567)){
var statearr_42709_45224 = state_42609__$1;
(statearr_42709_45224[(1)] = (26));

} else {
var statearr_42710_45225 = state_42609__$1;
(statearr_42710_45225[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (35))){
var inst_42593 = (state_42609[(2)]);
var state_42609__$1 = state_42609;
if(cljs.core.truth_(inst_42593)){
var statearr_42718_45227 = state_42609__$1;
(statearr_42718_45227[(1)] = (36));

} else {
var statearr_42724_45228 = state_42609__$1;
(statearr_42724_45228[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (19))){
var inst_42522 = (state_42609[(7)]);
var inst_42543 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42522);
var state_42609__$1 = state_42609;
var statearr_42726_45229 = state_42609__$1;
(statearr_42726_45229[(2)] = inst_42543);

(statearr_42726_45229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (11))){
var inst_42522 = (state_42609[(7)]);
var inst_42527 = (inst_42522 == null);
var inst_42528 = cljs.core.not(inst_42527);
var state_42609__$1 = state_42609;
if(inst_42528){
var statearr_42731_45234 = state_42609__$1;
(statearr_42731_45234[(1)] = (13));

} else {
var statearr_42732_45235 = state_42609__$1;
(statearr_42732_45235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (9))){
var inst_42492 = (state_42609[(8)]);
var state_42609__$1 = state_42609;
var statearr_42733_45236 = state_42609__$1;
(statearr_42733_45236[(2)] = inst_42492);

(statearr_42733_45236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (5))){
var state_42609__$1 = state_42609;
var statearr_42735_45237 = state_42609__$1;
(statearr_42735_45237[(2)] = true);

(statearr_42735_45237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (14))){
var state_42609__$1 = state_42609;
var statearr_42737_45238 = state_42609__$1;
(statearr_42737_45238[(2)] = false);

(statearr_42737_45238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (26))){
var inst_42562 = (state_42609[(11)]);
var inst_42569 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42562);
var state_42609__$1 = state_42609;
var statearr_42741_45239 = state_42609__$1;
(statearr_42741_45239[(2)] = inst_42569);

(statearr_42741_45239[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (16))){
var state_42609__$1 = state_42609;
var statearr_42743_45240 = state_42609__$1;
(statearr_42743_45240[(2)] = true);

(statearr_42743_45240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (38))){
var inst_42598 = (state_42609[(2)]);
var state_42609__$1 = state_42609;
var statearr_42745_45241 = state_42609__$1;
(statearr_42745_45241[(2)] = inst_42598);

(statearr_42745_45241[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (30))){
var inst_42547 = (state_42609[(9)]);
var inst_42548 = (state_42609[(13)]);
var inst_42562 = (state_42609[(11)]);
var inst_42585 = cljs.core.empty_QMARK_(inst_42547);
var inst_42586 = (inst_42548.cljs$core$IFn$_invoke$arity$1 ? inst_42548.cljs$core$IFn$_invoke$arity$1(inst_42562) : inst_42548.call(null,inst_42562));
var inst_42587 = cljs.core.not(inst_42586);
var inst_42588 = ((inst_42585) && (inst_42587));
var state_42609__$1 = state_42609;
var statearr_42746_45243 = state_42609__$1;
(statearr_42746_45243[(2)] = inst_42588);

(statearr_42746_45243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (10))){
var inst_42492 = (state_42609[(8)]);
var inst_42517 = (state_42609[(2)]);
var inst_42518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42517,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42517,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42517,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42522 = inst_42492;
var state_42609__$1 = (function (){var statearr_42751 = state_42609;
(statearr_42751[(16)] = inst_42518);

(statearr_42751[(17)] = inst_42521);

(statearr_42751[(7)] = inst_42522);

(statearr_42751[(18)] = inst_42519);

return statearr_42751;
})();
var statearr_42757_45247 = state_42609__$1;
(statearr_42757_45247[(2)] = null);

(statearr_42757_45247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (18))){
var inst_42538 = (state_42609[(2)]);
var state_42609__$1 = state_42609;
var statearr_42760_45248 = state_42609__$1;
(statearr_42760_45248[(2)] = inst_42538);

(statearr_42760_45248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (37))){
var state_42609__$1 = state_42609;
var statearr_42766_45249 = state_42609__$1;
(statearr_42766_45249[(2)] = null);

(statearr_42766_45249[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42611 === (8))){
var inst_42492 = (state_42609[(8)]);
var inst_42514 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42492);
var state_42609__$1 = state_42609;
var statearr_42769_45250 = state_42609__$1;
(statearr_42769_45250[(2)] = inst_42514);

(statearr_42769_45250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___45153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39734__auto__,c__40721__auto___45153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39735__auto__ = null;
var cljs$core$async$mix_$_state_machine__39735__auto____0 = (function (){
var statearr_42772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42772[(0)] = cljs$core$async$mix_$_state_machine__39735__auto__);

(statearr_42772[(1)] = (1));

return statearr_42772;
});
var cljs$core$async$mix_$_state_machine__39735__auto____1 = (function (state_42609){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_42609);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e42774){if((e42774 instanceof Object)){
var ex__39738__auto__ = e42774;
var statearr_42775_45253 = state_42609;
(statearr_42775_45253[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45254 = state_42609;
state_42609 = G__45254;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39735__auto__ = function(state_42609){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39735__auto____1.call(this,state_42609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39735__auto____0;
cljs$core$async$mix_$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39735__auto____1;
return cljs$core$async$mix_$_state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___45153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40723__auto__ = (function (){var statearr_42779 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_42779[(6)] = c__40721__auto___45153);

return statearr_42779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___45153,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42823 = arguments.length;
switch (G__42823) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__42859 = arguments.length;
switch (G__42859) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__42850_SHARP_){
if(cljs.core.truth_((p1__42850_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42850_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42850_SHARP_.call(null,topic)))){
return p1__42850_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42850_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42871 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42872){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42872 = meta42872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42873,meta42872__$1){
var self__ = this;
var _42873__$1 = this;
return (new cljs.core.async.t_cljs$core$async42871(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42872__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42873){
var self__ = this;
var _42873__$1 = this;
return self__.meta42872;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42871.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42872","meta42872",-1991562641,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42871";

cljs.core.async.t_cljs$core$async42871.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42871");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42871.
 */
cljs.core.async.__GT_t_cljs$core$async42871 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42872){
return (new cljs.core.async.t_cljs$core$async42871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42872));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42871(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40721__auto___45290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___45290,mults,ensure_mult,p){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___45290,mults,ensure_mult,p){
return (function (state_42981){
var state_val_42982 = (state_42981[(1)]);
if((state_val_42982 === (7))){
var inst_42976 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
var statearr_42983_45296 = state_42981__$1;
(statearr_42983_45296[(2)] = inst_42976);

(statearr_42983_45296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (20))){
var state_42981__$1 = state_42981;
var statearr_42987_45300 = state_42981__$1;
(statearr_42987_45300[(2)] = null);

(statearr_42987_45300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (1))){
var state_42981__$1 = state_42981;
var statearr_42988_45301 = state_42981__$1;
(statearr_42988_45301[(2)] = null);

(statearr_42988_45301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (24))){
var inst_42959 = (state_42981[(7)]);
var inst_42968 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42959);
var state_42981__$1 = state_42981;
var statearr_43000_45302 = state_42981__$1;
(statearr_43000_45302[(2)] = inst_42968);

(statearr_43000_45302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (4))){
var inst_42906 = (state_42981[(8)]);
var inst_42906__$1 = (state_42981[(2)]);
var inst_42907 = (inst_42906__$1 == null);
var state_42981__$1 = (function (){var statearr_43005 = state_42981;
(statearr_43005[(8)] = inst_42906__$1);

return statearr_43005;
})();
if(cljs.core.truth_(inst_42907)){
var statearr_43009_45306 = state_42981__$1;
(statearr_43009_45306[(1)] = (5));

} else {
var statearr_43011_45307 = state_42981__$1;
(statearr_43011_45307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (15))){
var inst_42953 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
var statearr_43019_45308 = state_42981__$1;
(statearr_43019_45308[(2)] = inst_42953);

(statearr_43019_45308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (21))){
var inst_42973 = (state_42981[(2)]);
var state_42981__$1 = (function (){var statearr_43020 = state_42981;
(statearr_43020[(9)] = inst_42973);

return statearr_43020;
})();
var statearr_43021_45313 = state_42981__$1;
(statearr_43021_45313[(2)] = null);

(statearr_43021_45313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (13))){
var inst_42933 = (state_42981[(10)]);
var inst_42937 = cljs.core.chunked_seq_QMARK_(inst_42933);
var state_42981__$1 = state_42981;
if(inst_42937){
var statearr_43022_45314 = state_42981__$1;
(statearr_43022_45314[(1)] = (16));

} else {
var statearr_43023_45315 = state_42981__$1;
(statearr_43023_45315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (22))){
var inst_42965 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
if(cljs.core.truth_(inst_42965)){
var statearr_43024_45316 = state_42981__$1;
(statearr_43024_45316[(1)] = (23));

} else {
var statearr_43025_45317 = state_42981__$1;
(statearr_43025_45317[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (6))){
var inst_42961 = (state_42981[(11)]);
var inst_42959 = (state_42981[(7)]);
var inst_42906 = (state_42981[(8)]);
var inst_42959__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42906) : topic_fn.call(null,inst_42906));
var inst_42960 = cljs.core.deref(mults);
var inst_42961__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42960,inst_42959__$1);
var state_42981__$1 = (function (){var statearr_43027 = state_42981;
(statearr_43027[(11)] = inst_42961__$1);

(statearr_43027[(7)] = inst_42959__$1);

return statearr_43027;
})();
if(cljs.core.truth_(inst_42961__$1)){
var statearr_43029_45322 = state_42981__$1;
(statearr_43029_45322[(1)] = (19));

} else {
var statearr_43030_45323 = state_42981__$1;
(statearr_43030_45323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (25))){
var inst_42970 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
var statearr_43034_45327 = state_42981__$1;
(statearr_43034_45327[(2)] = inst_42970);

(statearr_43034_45327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (17))){
var inst_42933 = (state_42981[(10)]);
var inst_42944 = cljs.core.first(inst_42933);
var inst_42945 = cljs.core.async.muxch_STAR_(inst_42944);
var inst_42946 = cljs.core.async.close_BANG_(inst_42945);
var inst_42947 = cljs.core.next(inst_42933);
var inst_42916 = inst_42947;
var inst_42917 = null;
var inst_42918 = (0);
var inst_42919 = (0);
var state_42981__$1 = (function (){var statearr_43035 = state_42981;
(statearr_43035[(12)] = inst_42946);

(statearr_43035[(13)] = inst_42916);

(statearr_43035[(14)] = inst_42918);

(statearr_43035[(15)] = inst_42917);

(statearr_43035[(16)] = inst_42919);

return statearr_43035;
})();
var statearr_43040_45332 = state_42981__$1;
(statearr_43040_45332[(2)] = null);

(statearr_43040_45332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (3))){
var inst_42978 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42981__$1,inst_42978);
} else {
if((state_val_42982 === (12))){
var inst_42955 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
var statearr_43045_45334 = state_42981__$1;
(statearr_43045_45334[(2)] = inst_42955);

(statearr_43045_45334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (2))){
var state_42981__$1 = state_42981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42981__$1,(4),ch);
} else {
if((state_val_42982 === (23))){
var state_42981__$1 = state_42981;
var statearr_43049_45335 = state_42981__$1;
(statearr_43049_45335[(2)] = null);

(statearr_43049_45335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (19))){
var inst_42961 = (state_42981[(11)]);
var inst_42906 = (state_42981[(8)]);
var inst_42963 = cljs.core.async.muxch_STAR_(inst_42961);
var state_42981__$1 = state_42981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42981__$1,(22),inst_42963,inst_42906);
} else {
if((state_val_42982 === (11))){
var inst_42916 = (state_42981[(13)]);
var inst_42933 = (state_42981[(10)]);
var inst_42933__$1 = cljs.core.seq(inst_42916);
var state_42981__$1 = (function (){var statearr_43050 = state_42981;
(statearr_43050[(10)] = inst_42933__$1);

return statearr_43050;
})();
if(inst_42933__$1){
var statearr_43056_45336 = state_42981__$1;
(statearr_43056_45336[(1)] = (13));

} else {
var statearr_43064_45341 = state_42981__$1;
(statearr_43064_45341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (9))){
var inst_42957 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
var statearr_43065_45342 = state_42981__$1;
(statearr_43065_45342[(2)] = inst_42957);

(statearr_43065_45342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (5))){
var inst_42913 = cljs.core.deref(mults);
var inst_42914 = cljs.core.vals(inst_42913);
var inst_42915 = cljs.core.seq(inst_42914);
var inst_42916 = inst_42915;
var inst_42917 = null;
var inst_42918 = (0);
var inst_42919 = (0);
var state_42981__$1 = (function (){var statearr_43067 = state_42981;
(statearr_43067[(13)] = inst_42916);

(statearr_43067[(14)] = inst_42918);

(statearr_43067[(15)] = inst_42917);

(statearr_43067[(16)] = inst_42919);

return statearr_43067;
})();
var statearr_43068_45345 = state_42981__$1;
(statearr_43068_45345[(2)] = null);

(statearr_43068_45345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (14))){
var state_42981__$1 = state_42981;
var statearr_43073_45346 = state_42981__$1;
(statearr_43073_45346[(2)] = null);

(statearr_43073_45346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (16))){
var inst_42933 = (state_42981[(10)]);
var inst_42939 = cljs.core.chunk_first(inst_42933);
var inst_42940 = cljs.core.chunk_rest(inst_42933);
var inst_42941 = cljs.core.count(inst_42939);
var inst_42916 = inst_42940;
var inst_42917 = inst_42939;
var inst_42918 = inst_42941;
var inst_42919 = (0);
var state_42981__$1 = (function (){var statearr_43078 = state_42981;
(statearr_43078[(13)] = inst_42916);

(statearr_43078[(14)] = inst_42918);

(statearr_43078[(15)] = inst_42917);

(statearr_43078[(16)] = inst_42919);

return statearr_43078;
})();
var statearr_43079_45350 = state_42981__$1;
(statearr_43079_45350[(2)] = null);

(statearr_43079_45350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (10))){
var inst_42916 = (state_42981[(13)]);
var inst_42918 = (state_42981[(14)]);
var inst_42917 = (state_42981[(15)]);
var inst_42919 = (state_42981[(16)]);
var inst_42924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42917,inst_42919);
var inst_42925 = cljs.core.async.muxch_STAR_(inst_42924);
var inst_42926 = cljs.core.async.close_BANG_(inst_42925);
var inst_42928 = (inst_42919 + (1));
var tmp43069 = inst_42916;
var tmp43070 = inst_42918;
var tmp43071 = inst_42917;
var inst_42916__$1 = tmp43069;
var inst_42917__$1 = tmp43071;
var inst_42918__$1 = tmp43070;
var inst_42919__$1 = inst_42928;
var state_42981__$1 = (function (){var statearr_43080 = state_42981;
(statearr_43080[(13)] = inst_42916__$1);

(statearr_43080[(17)] = inst_42926);

(statearr_43080[(14)] = inst_42918__$1);

(statearr_43080[(15)] = inst_42917__$1);

(statearr_43080[(16)] = inst_42919__$1);

return statearr_43080;
})();
var statearr_43081_45354 = state_42981__$1;
(statearr_43081_45354[(2)] = null);

(statearr_43081_45354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (18))){
var inst_42950 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
var statearr_43084_45355 = state_42981__$1;
(statearr_43084_45355[(2)] = inst_42950);

(statearr_43084_45355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (8))){
var inst_42918 = (state_42981[(14)]);
var inst_42919 = (state_42981[(16)]);
var inst_42921 = (inst_42919 < inst_42918);
var inst_42922 = inst_42921;
var state_42981__$1 = state_42981;
if(cljs.core.truth_(inst_42922)){
var statearr_43087_45360 = state_42981__$1;
(statearr_43087_45360[(1)] = (10));

} else {
var statearr_43088_45364 = state_42981__$1;
(statearr_43088_45364[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___45290,mults,ensure_mult,p))
;
return ((function (switch__39734__auto__,c__40721__auto___45290,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_43091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43091[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_43091[(1)] = (1));

return statearr_43091;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_42981){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_42981);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e43104){if((e43104 instanceof Object)){
var ex__39738__auto__ = e43104;
var statearr_43109_45368 = state_42981;
(statearr_43109_45368[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45369 = state_42981;
state_42981 = G__45369;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_42981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_42981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___45290,mults,ensure_mult,p))
})();
var state__40723__auto__ = (function (){var statearr_43116 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_43116[(6)] = c__40721__auto___45290);

return statearr_43116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___45290,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43118 = arguments.length;
switch (G__43118) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43135 = arguments.length;
switch (G__43135) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43141 = arguments.length;
switch (G__43141) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__40721__auto___45392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___45392,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___45392,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43204){
var state_val_43205 = (state_43204[(1)]);
if((state_val_43205 === (7))){
var state_43204__$1 = state_43204;
var statearr_43215_45393 = state_43204__$1;
(statearr_43215_45393[(2)] = null);

(statearr_43215_45393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (1))){
var state_43204__$1 = state_43204;
var statearr_43216_45399 = state_43204__$1;
(statearr_43216_45399[(2)] = null);

(statearr_43216_45399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (4))){
var inst_43161 = (state_43204[(7)]);
var inst_43163 = (inst_43161 < cnt);
var state_43204__$1 = state_43204;
if(cljs.core.truth_(inst_43163)){
var statearr_43218_45400 = state_43204__$1;
(statearr_43218_45400[(1)] = (6));

} else {
var statearr_43221_45401 = state_43204__$1;
(statearr_43221_45401[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (15))){
var inst_43199 = (state_43204[(2)]);
var state_43204__$1 = state_43204;
var statearr_43222_45402 = state_43204__$1;
(statearr_43222_45402[(2)] = inst_43199);

(statearr_43222_45402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (13))){
var inst_43190 = cljs.core.async.close_BANG_(out);
var state_43204__$1 = state_43204;
var statearr_43225_45406 = state_43204__$1;
(statearr_43225_45406[(2)] = inst_43190);

(statearr_43225_45406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (6))){
var state_43204__$1 = state_43204;
var statearr_43227_45408 = state_43204__$1;
(statearr_43227_45408[(2)] = null);

(statearr_43227_45408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (3))){
var inst_43201 = (state_43204[(2)]);
var state_43204__$1 = state_43204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43204__$1,inst_43201);
} else {
if((state_val_43205 === (12))){
var inst_43187 = (state_43204[(8)]);
var inst_43187__$1 = (state_43204[(2)]);
var inst_43188 = cljs.core.some(cljs.core.nil_QMARK_,inst_43187__$1);
var state_43204__$1 = (function (){var statearr_43230 = state_43204;
(statearr_43230[(8)] = inst_43187__$1);

return statearr_43230;
})();
if(cljs.core.truth_(inst_43188)){
var statearr_43231_45411 = state_43204__$1;
(statearr_43231_45411[(1)] = (13));

} else {
var statearr_43232_45412 = state_43204__$1;
(statearr_43232_45412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (2))){
var inst_43160 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43161 = (0);
var state_43204__$1 = (function (){var statearr_43234 = state_43204;
(statearr_43234[(9)] = inst_43160);

(statearr_43234[(7)] = inst_43161);

return statearr_43234;
})();
var statearr_43235_45415 = state_43204__$1;
(statearr_43235_45415[(2)] = null);

(statearr_43235_45415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (11))){
var inst_43161 = (state_43204[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43204,(10),Object,null,(9));
var inst_43172 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43161) : chs__$1.call(null,inst_43161));
var inst_43173 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43161) : done.call(null,inst_43161));
var inst_43174 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43172,inst_43173);
var state_43204__$1 = state_43204;
var statearr_43236_45419 = state_43204__$1;
(statearr_43236_45419[(2)] = inst_43174);


cljs.core.async.impl.ioc_helpers.process_exception(state_43204__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (9))){
var inst_43161 = (state_43204[(7)]);
var inst_43176 = (state_43204[(2)]);
var inst_43178 = (inst_43161 + (1));
var inst_43161__$1 = inst_43178;
var state_43204__$1 = (function (){var statearr_43243 = state_43204;
(statearr_43243[(10)] = inst_43176);

(statearr_43243[(7)] = inst_43161__$1);

return statearr_43243;
})();
var statearr_43244_45421 = state_43204__$1;
(statearr_43244_45421[(2)] = null);

(statearr_43244_45421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (5))){
var inst_43184 = (state_43204[(2)]);
var state_43204__$1 = (function (){var statearr_43245 = state_43204;
(statearr_43245[(11)] = inst_43184);

return statearr_43245;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43204__$1,(12),dchan);
} else {
if((state_val_43205 === (14))){
var inst_43187 = (state_43204[(8)]);
var inst_43194 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43187);
var state_43204__$1 = state_43204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43204__$1,(16),out,inst_43194);
} else {
if((state_val_43205 === (16))){
var inst_43196 = (state_43204[(2)]);
var state_43204__$1 = (function (){var statearr_43248 = state_43204;
(statearr_43248[(12)] = inst_43196);

return statearr_43248;
})();
var statearr_43249_45425 = state_43204__$1;
(statearr_43249_45425[(2)] = null);

(statearr_43249_45425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (10))){
var inst_43166 = (state_43204[(2)]);
var inst_43167 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43204__$1 = (function (){var statearr_43252 = state_43204;
(statearr_43252[(13)] = inst_43166);

return statearr_43252;
})();
var statearr_43255_45426 = state_43204__$1;
(statearr_43255_45426[(2)] = inst_43167);


cljs.core.async.impl.ioc_helpers.process_exception(state_43204__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43205 === (8))){
var inst_43182 = (state_43204[(2)]);
var state_43204__$1 = state_43204;
var statearr_43256_45427 = state_43204__$1;
(statearr_43256_45427[(2)] = inst_43182);

(statearr_43256_45427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___45392,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39734__auto__,c__40721__auto___45392,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_43260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43260[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_43260[(1)] = (1));

return statearr_43260;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_43204){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_43204);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e43261){if((e43261 instanceof Object)){
var ex__39738__auto__ = e43261;
var statearr_43262_45432 = state_43204;
(statearr_43262_45432[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45434 = state_43204;
state_43204 = G__45434;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_43204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_43204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___45392,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40723__auto__ = (function (){var statearr_43268 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_43268[(6)] = c__40721__auto___45392);

return statearr_43268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___45392,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43279 = arguments.length;
switch (G__43279) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40721__auto___45448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___45448,out){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___45448,out){
return (function (state_43322){
var state_val_43323 = (state_43322[(1)]);
if((state_val_43323 === (7))){
var inst_43300 = (state_43322[(7)]);
var inst_43301 = (state_43322[(8)]);
var inst_43300__$1 = (state_43322[(2)]);
var inst_43301__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43300__$1,(0),null);
var inst_43302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43300__$1,(1),null);
var inst_43303 = (inst_43301__$1 == null);
var state_43322__$1 = (function (){var statearr_43330 = state_43322;
(statearr_43330[(9)] = inst_43302);

(statearr_43330[(7)] = inst_43300__$1);

(statearr_43330[(8)] = inst_43301__$1);

return statearr_43330;
})();
if(cljs.core.truth_(inst_43303)){
var statearr_43331_45449 = state_43322__$1;
(statearr_43331_45449[(1)] = (8));

} else {
var statearr_43333_45450 = state_43322__$1;
(statearr_43333_45450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (1))){
var inst_43290 = cljs.core.vec(chs);
var inst_43291 = inst_43290;
var state_43322__$1 = (function (){var statearr_43334 = state_43322;
(statearr_43334[(10)] = inst_43291);

return statearr_43334;
})();
var statearr_43335_45452 = state_43322__$1;
(statearr_43335_45452[(2)] = null);

(statearr_43335_45452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (4))){
var inst_43291 = (state_43322[(10)]);
var state_43322__$1 = state_43322;
return cljs.core.async.ioc_alts_BANG_(state_43322__$1,(7),inst_43291);
} else {
if((state_val_43323 === (6))){
var inst_43317 = (state_43322[(2)]);
var state_43322__$1 = state_43322;
var statearr_43344_45453 = state_43322__$1;
(statearr_43344_45453[(2)] = inst_43317);

(statearr_43344_45453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (3))){
var inst_43320 = (state_43322[(2)]);
var state_43322__$1 = state_43322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43322__$1,inst_43320);
} else {
if((state_val_43323 === (2))){
var inst_43291 = (state_43322[(10)]);
var inst_43293 = cljs.core.count(inst_43291);
var inst_43294 = (inst_43293 > (0));
var state_43322__$1 = state_43322;
if(cljs.core.truth_(inst_43294)){
var statearr_43356_45454 = state_43322__$1;
(statearr_43356_45454[(1)] = (4));

} else {
var statearr_43358_45461 = state_43322__$1;
(statearr_43358_45461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (11))){
var inst_43291 = (state_43322[(10)]);
var inst_43310 = (state_43322[(2)]);
var tmp43354 = inst_43291;
var inst_43291__$1 = tmp43354;
var state_43322__$1 = (function (){var statearr_43359 = state_43322;
(statearr_43359[(11)] = inst_43310);

(statearr_43359[(10)] = inst_43291__$1);

return statearr_43359;
})();
var statearr_43360_45466 = state_43322__$1;
(statearr_43360_45466[(2)] = null);

(statearr_43360_45466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (9))){
var inst_43301 = (state_43322[(8)]);
var state_43322__$1 = state_43322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43322__$1,(11),out,inst_43301);
} else {
if((state_val_43323 === (5))){
var inst_43315 = cljs.core.async.close_BANG_(out);
var state_43322__$1 = state_43322;
var statearr_43374_45469 = state_43322__$1;
(statearr_43374_45469[(2)] = inst_43315);

(statearr_43374_45469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (10))){
var inst_43313 = (state_43322[(2)]);
var state_43322__$1 = state_43322;
var statearr_43376_45470 = state_43322__$1;
(statearr_43376_45470[(2)] = inst_43313);

(statearr_43376_45470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (8))){
var inst_43302 = (state_43322[(9)]);
var inst_43300 = (state_43322[(7)]);
var inst_43291 = (state_43322[(10)]);
var inst_43301 = (state_43322[(8)]);
var inst_43305 = (function (){var cs = inst_43291;
var vec__43296 = inst_43300;
var v = inst_43301;
var c = inst_43302;
return ((function (cs,vec__43296,v,c,inst_43302,inst_43300,inst_43291,inst_43301,state_val_43323,c__40721__auto___45448,out){
return (function (p1__43274_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43274_SHARP_);
});
;})(cs,vec__43296,v,c,inst_43302,inst_43300,inst_43291,inst_43301,state_val_43323,c__40721__auto___45448,out))
})();
var inst_43306 = cljs.core.filterv(inst_43305,inst_43291);
var inst_43291__$1 = inst_43306;
var state_43322__$1 = (function (){var statearr_43388 = state_43322;
(statearr_43388[(10)] = inst_43291__$1);

return statearr_43388;
})();
var statearr_43392_45473 = state_43322__$1;
(statearr_43392_45473[(2)] = null);

(statearr_43392_45473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___45448,out))
;
return ((function (switch__39734__auto__,c__40721__auto___45448,out){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_43399 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43399[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_43399[(1)] = (1));

return statearr_43399;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_43322){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_43322);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e43404){if((e43404 instanceof Object)){
var ex__39738__auto__ = e43404;
var statearr_43409_45476 = state_43322;
(statearr_43409_45476[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45477 = state_43322;
state_43322 = G__45477;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_43322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_43322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___45448,out))
})();
var state__40723__auto__ = (function (){var statearr_43430 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_43430[(6)] = c__40721__auto___45448);

return statearr_43430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___45448,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43442 = arguments.length;
switch (G__43442) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40721__auto___45485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___45485,out){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___45485,out){
return (function (state_43484){
var state_val_43485 = (state_43484[(1)]);
if((state_val_43485 === (7))){
var inst_43462 = (state_43484[(7)]);
var inst_43462__$1 = (state_43484[(2)]);
var inst_43467 = (inst_43462__$1 == null);
var inst_43468 = cljs.core.not(inst_43467);
var state_43484__$1 = (function (){var statearr_43499 = state_43484;
(statearr_43499[(7)] = inst_43462__$1);

return statearr_43499;
})();
if(inst_43468){
var statearr_43500_45486 = state_43484__$1;
(statearr_43500_45486[(1)] = (8));

} else {
var statearr_43501_45487 = state_43484__$1;
(statearr_43501_45487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (1))){
var inst_43452 = (0);
var state_43484__$1 = (function (){var statearr_43506 = state_43484;
(statearr_43506[(8)] = inst_43452);

return statearr_43506;
})();
var statearr_43507_45491 = state_43484__$1;
(statearr_43507_45491[(2)] = null);

(statearr_43507_45491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (4))){
var state_43484__$1 = state_43484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43484__$1,(7),ch);
} else {
if((state_val_43485 === (6))){
var inst_43479 = (state_43484[(2)]);
var state_43484__$1 = state_43484;
var statearr_43513_45494 = state_43484__$1;
(statearr_43513_45494[(2)] = inst_43479);

(statearr_43513_45494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (3))){
var inst_43481 = (state_43484[(2)]);
var inst_43482 = cljs.core.async.close_BANG_(out);
var state_43484__$1 = (function (){var statearr_43516 = state_43484;
(statearr_43516[(9)] = inst_43481);

return statearr_43516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43484__$1,inst_43482);
} else {
if((state_val_43485 === (2))){
var inst_43452 = (state_43484[(8)]);
var inst_43455 = (inst_43452 < n);
var state_43484__$1 = state_43484;
if(cljs.core.truth_(inst_43455)){
var statearr_43519_45496 = state_43484__$1;
(statearr_43519_45496[(1)] = (4));

} else {
var statearr_43520_45497 = state_43484__$1;
(statearr_43520_45497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (11))){
var inst_43452 = (state_43484[(8)]);
var inst_43471 = (state_43484[(2)]);
var inst_43472 = (inst_43452 + (1));
var inst_43452__$1 = inst_43472;
var state_43484__$1 = (function (){var statearr_43522 = state_43484;
(statearr_43522[(10)] = inst_43471);

(statearr_43522[(8)] = inst_43452__$1);

return statearr_43522;
})();
var statearr_43523_45498 = state_43484__$1;
(statearr_43523_45498[(2)] = null);

(statearr_43523_45498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (9))){
var state_43484__$1 = state_43484;
var statearr_43527_45499 = state_43484__$1;
(statearr_43527_45499[(2)] = null);

(statearr_43527_45499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (5))){
var state_43484__$1 = state_43484;
var statearr_43530_45501 = state_43484__$1;
(statearr_43530_45501[(2)] = null);

(statearr_43530_45501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (10))){
var inst_43476 = (state_43484[(2)]);
var state_43484__$1 = state_43484;
var statearr_43531_45502 = state_43484__$1;
(statearr_43531_45502[(2)] = inst_43476);

(statearr_43531_45502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (8))){
var inst_43462 = (state_43484[(7)]);
var state_43484__$1 = state_43484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43484__$1,(11),out,inst_43462);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___45485,out))
;
return ((function (switch__39734__auto__,c__40721__auto___45485,out){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_43536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43536[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_43536[(1)] = (1));

return statearr_43536;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_43484){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_43484);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e43537){if((e43537 instanceof Object)){
var ex__39738__auto__ = e43537;
var statearr_43539_45507 = state_43484;
(statearr_43539_45507[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43537;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45509 = state_43484;
state_43484 = G__45509;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_43484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_43484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___45485,out))
})();
var state__40723__auto__ = (function (){var statearr_43540 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_43540[(6)] = c__40721__auto___45485);

return statearr_43540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___45485,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43544 = (function (f,ch,meta43545){
this.f = f;
this.ch = ch;
this.meta43545 = meta43545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43546,meta43545__$1){
var self__ = this;
var _43546__$1 = this;
return (new cljs.core.async.t_cljs$core$async43544(self__.f,self__.ch,meta43545__$1));
});

cljs.core.async.t_cljs$core$async43544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43546){
var self__ = this;
var _43546__$1 = this;
return self__.meta43545;
});

cljs.core.async.t_cljs$core$async43544.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async43544.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async43544.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43555 = (function (f,ch,meta43545,_,fn1,meta43556){
this.f = f;
this.ch = ch;
this.meta43545 = meta43545;
this._ = _;
this.fn1 = fn1;
this.meta43556 = meta43556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43557,meta43556__$1){
var self__ = this;
var _43557__$1 = this;
return (new cljs.core.async.t_cljs$core$async43555(self__.f,self__.ch,self__.meta43545,self__._,self__.fn1,meta43556__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43557){
var self__ = this;
var _43557__$1 = this;
return self__.meta43556;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43543_SHARP_){
var G__43564 = (((p1__43543_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43543_SHARP_) : self__.f.call(null,p1__43543_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43564) : f1.call(null,G__43564));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43555.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43545","meta43545",-512459685,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43544","cljs.core.async/t_cljs$core$async43544",-1089331335,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43556","meta43556",1217136428,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43555";

cljs.core.async.t_cljs$core$async43555.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43555");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43555.
 */
cljs.core.async.__GT_t_cljs$core$async43555 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43555(f__$1,ch__$1,meta43545__$1,___$2,fn1__$1,meta43556){
return (new cljs.core.async.t_cljs$core$async43555(f__$1,ch__$1,meta43545__$1,___$2,fn1__$1,meta43556));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43555(self__.f,self__.ch,self__.meta43545,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43570 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43570) : self__.f.call(null,G__43570));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43544.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43545","meta43545",-512459685,null)], null);
});

cljs.core.async.t_cljs$core$async43544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43544";

cljs.core.async.t_cljs$core$async43544.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43544");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43544.
 */
cljs.core.async.__GT_t_cljs$core$async43544 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43544(f__$1,ch__$1,meta43545){
return (new cljs.core.async.t_cljs$core$async43544(f__$1,ch__$1,meta43545));
});

}

return (new cljs.core.async.t_cljs$core$async43544(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43577 = (function (f,ch,meta43578){
this.f = f;
this.ch = ch;
this.meta43578 = meta43578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43579,meta43578__$1){
var self__ = this;
var _43579__$1 = this;
return (new cljs.core.async.t_cljs$core$async43577(self__.f,self__.ch,meta43578__$1));
});

cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43579){
var self__ = this;
var _43579__$1 = this;
return self__.meta43578;
});

cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async43577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43578","meta43578",430207323,null)], null);
});

cljs.core.async.t_cljs$core$async43577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43577";

cljs.core.async.t_cljs$core$async43577.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43577");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43577.
 */
cljs.core.async.__GT_t_cljs$core$async43577 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43577(f__$1,ch__$1,meta43578){
return (new cljs.core.async.t_cljs$core$async43577(f__$1,ch__$1,meta43578));
});

}

return (new cljs.core.async.t_cljs$core$async43577(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43604 = (function (p,ch,meta43605){
this.p = p;
this.ch = ch;
this.meta43605 = meta43605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43606,meta43605__$1){
var self__ = this;
var _43606__$1 = this;
return (new cljs.core.async.t_cljs$core$async43604(self__.p,self__.ch,meta43605__$1));
});

cljs.core.async.t_cljs$core$async43604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43606){
var self__ = this;
var _43606__$1 = this;
return self__.meta43605;
});

cljs.core.async.t_cljs$core$async43604.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async43604.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async43604.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43604.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43605","meta43605",-1735565907,null)], null);
});

cljs.core.async.t_cljs$core$async43604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43604";

cljs.core.async.t_cljs$core$async43604.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43604");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43604.
 */
cljs.core.async.__GT_t_cljs$core$async43604 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43604(p__$1,ch__$1,meta43605){
return (new cljs.core.async.t_cljs$core$async43604(p__$1,ch__$1,meta43605));
});

}

return (new cljs.core.async.t_cljs$core$async43604(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43626 = arguments.length;
switch (G__43626) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40721__auto___45575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___45575,out){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___45575,out){
return (function (state_43650){
var state_val_43651 = (state_43650[(1)]);
if((state_val_43651 === (7))){
var inst_43644 = (state_43650[(2)]);
var state_43650__$1 = state_43650;
var statearr_43653_45579 = state_43650__$1;
(statearr_43653_45579[(2)] = inst_43644);

(statearr_43653_45579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (1))){
var state_43650__$1 = state_43650;
var statearr_43656_45580 = state_43650__$1;
(statearr_43656_45580[(2)] = null);

(statearr_43656_45580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (4))){
var inst_43630 = (state_43650[(7)]);
var inst_43630__$1 = (state_43650[(2)]);
var inst_43631 = (inst_43630__$1 == null);
var state_43650__$1 = (function (){var statearr_43657 = state_43650;
(statearr_43657[(7)] = inst_43630__$1);

return statearr_43657;
})();
if(cljs.core.truth_(inst_43631)){
var statearr_43658_45585 = state_43650__$1;
(statearr_43658_45585[(1)] = (5));

} else {
var statearr_43659_45586 = state_43650__$1;
(statearr_43659_45586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (6))){
var inst_43630 = (state_43650[(7)]);
var inst_43635 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43630) : p.call(null,inst_43630));
var state_43650__$1 = state_43650;
if(cljs.core.truth_(inst_43635)){
var statearr_43660_45587 = state_43650__$1;
(statearr_43660_45587[(1)] = (8));

} else {
var statearr_43661_45588 = state_43650__$1;
(statearr_43661_45588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (3))){
var inst_43646 = (state_43650[(2)]);
var state_43650__$1 = state_43650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43650__$1,inst_43646);
} else {
if((state_val_43651 === (2))){
var state_43650__$1 = state_43650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43650__$1,(4),ch);
} else {
if((state_val_43651 === (11))){
var inst_43638 = (state_43650[(2)]);
var state_43650__$1 = state_43650;
var statearr_43665_45592 = state_43650__$1;
(statearr_43665_45592[(2)] = inst_43638);

(statearr_43665_45592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (9))){
var state_43650__$1 = state_43650;
var statearr_43666_45593 = state_43650__$1;
(statearr_43666_45593[(2)] = null);

(statearr_43666_45593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (5))){
var inst_43633 = cljs.core.async.close_BANG_(out);
var state_43650__$1 = state_43650;
var statearr_43669_45594 = state_43650__$1;
(statearr_43669_45594[(2)] = inst_43633);

(statearr_43669_45594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (10))){
var inst_43641 = (state_43650[(2)]);
var state_43650__$1 = (function (){var statearr_43670 = state_43650;
(statearr_43670[(8)] = inst_43641);

return statearr_43670;
})();
var statearr_43671_45596 = state_43650__$1;
(statearr_43671_45596[(2)] = null);

(statearr_43671_45596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (8))){
var inst_43630 = (state_43650[(7)]);
var state_43650__$1 = state_43650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43650__$1,(11),out,inst_43630);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___45575,out))
;
return ((function (switch__39734__auto__,c__40721__auto___45575,out){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_43676 = [null,null,null,null,null,null,null,null,null];
(statearr_43676[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_43676[(1)] = (1));

return statearr_43676;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_43650){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_43650);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e43677){if((e43677 instanceof Object)){
var ex__39738__auto__ = e43677;
var statearr_43678_45608 = state_43650;
(statearr_43678_45608[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45610 = state_43650;
state_43650 = G__45610;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_43650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_43650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___45575,out))
})();
var state__40723__auto__ = (function (){var statearr_43679 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_43679[(6)] = c__40721__auto___45575);

return statearr_43679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___45575,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43681 = arguments.length;
switch (G__43681) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__40721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto__){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto__){
return (function (state_43758){
var state_val_43759 = (state_43758[(1)]);
if((state_val_43759 === (7))){
var inst_43753 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43760_45621 = state_43758__$1;
(statearr_43760_45621[(2)] = inst_43753);

(statearr_43760_45621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (20))){
var inst_43719 = (state_43758[(7)]);
var inst_43732 = (state_43758[(2)]);
var inst_43734 = cljs.core.next(inst_43719);
var inst_43702 = inst_43734;
var inst_43703 = null;
var inst_43704 = (0);
var inst_43705 = (0);
var state_43758__$1 = (function (){var statearr_43761 = state_43758;
(statearr_43761[(8)] = inst_43705);

(statearr_43761[(9)] = inst_43732);

(statearr_43761[(10)] = inst_43703);

(statearr_43761[(11)] = inst_43702);

(statearr_43761[(12)] = inst_43704);

return statearr_43761;
})();
var statearr_43763_45628 = state_43758__$1;
(statearr_43763_45628[(2)] = null);

(statearr_43763_45628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (1))){
var state_43758__$1 = state_43758;
var statearr_43764_45629 = state_43758__$1;
(statearr_43764_45629[(2)] = null);

(statearr_43764_45629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (4))){
var inst_43691 = (state_43758[(13)]);
var inst_43691__$1 = (state_43758[(2)]);
var inst_43692 = (inst_43691__$1 == null);
var state_43758__$1 = (function (){var statearr_43766 = state_43758;
(statearr_43766[(13)] = inst_43691__$1);

return statearr_43766;
})();
if(cljs.core.truth_(inst_43692)){
var statearr_43767_45631 = state_43758__$1;
(statearr_43767_45631[(1)] = (5));

} else {
var statearr_43768_45632 = state_43758__$1;
(statearr_43768_45632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (15))){
var state_43758__$1 = state_43758;
var statearr_43772_45633 = state_43758__$1;
(statearr_43772_45633[(2)] = null);

(statearr_43772_45633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (21))){
var state_43758__$1 = state_43758;
var statearr_43773_45634 = state_43758__$1;
(statearr_43773_45634[(2)] = null);

(statearr_43773_45634[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (13))){
var inst_43705 = (state_43758[(8)]);
var inst_43703 = (state_43758[(10)]);
var inst_43702 = (state_43758[(11)]);
var inst_43704 = (state_43758[(12)]);
var inst_43715 = (state_43758[(2)]);
var inst_43716 = (inst_43705 + (1));
var tmp43769 = inst_43703;
var tmp43770 = inst_43702;
var tmp43771 = inst_43704;
var inst_43702__$1 = tmp43770;
var inst_43703__$1 = tmp43769;
var inst_43704__$1 = tmp43771;
var inst_43705__$1 = inst_43716;
var state_43758__$1 = (function (){var statearr_43774 = state_43758;
(statearr_43774[(8)] = inst_43705__$1);

(statearr_43774[(10)] = inst_43703__$1);

(statearr_43774[(11)] = inst_43702__$1);

(statearr_43774[(12)] = inst_43704__$1);

(statearr_43774[(14)] = inst_43715);

return statearr_43774;
})();
var statearr_43775_45644 = state_43758__$1;
(statearr_43775_45644[(2)] = null);

(statearr_43775_45644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (22))){
var state_43758__$1 = state_43758;
var statearr_43779_45645 = state_43758__$1;
(statearr_43779_45645[(2)] = null);

(statearr_43779_45645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (6))){
var inst_43691 = (state_43758[(13)]);
var inst_43700 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43691) : f.call(null,inst_43691));
var inst_43701 = cljs.core.seq(inst_43700);
var inst_43702 = inst_43701;
var inst_43703 = null;
var inst_43704 = (0);
var inst_43705 = (0);
var state_43758__$1 = (function (){var statearr_43780 = state_43758;
(statearr_43780[(8)] = inst_43705);

(statearr_43780[(10)] = inst_43703);

(statearr_43780[(11)] = inst_43702);

(statearr_43780[(12)] = inst_43704);

return statearr_43780;
})();
var statearr_43781_45646 = state_43758__$1;
(statearr_43781_45646[(2)] = null);

(statearr_43781_45646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (17))){
var inst_43719 = (state_43758[(7)]);
var inst_43724 = cljs.core.chunk_first(inst_43719);
var inst_43725 = cljs.core.chunk_rest(inst_43719);
var inst_43726 = cljs.core.count(inst_43724);
var inst_43702 = inst_43725;
var inst_43703 = inst_43724;
var inst_43704 = inst_43726;
var inst_43705 = (0);
var state_43758__$1 = (function (){var statearr_43783 = state_43758;
(statearr_43783[(8)] = inst_43705);

(statearr_43783[(10)] = inst_43703);

(statearr_43783[(11)] = inst_43702);

(statearr_43783[(12)] = inst_43704);

return statearr_43783;
})();
var statearr_43786_45647 = state_43758__$1;
(statearr_43786_45647[(2)] = null);

(statearr_43786_45647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (3))){
var inst_43755 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43758__$1,inst_43755);
} else {
if((state_val_43759 === (12))){
var inst_43742 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43791_45652 = state_43758__$1;
(statearr_43791_45652[(2)] = inst_43742);

(statearr_43791_45652[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (2))){
var state_43758__$1 = state_43758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43758__$1,(4),in$);
} else {
if((state_val_43759 === (23))){
var inst_43751 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43793_45654 = state_43758__$1;
(statearr_43793_45654[(2)] = inst_43751);

(statearr_43793_45654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (19))){
var inst_43737 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43796_45655 = state_43758__$1;
(statearr_43796_45655[(2)] = inst_43737);

(statearr_43796_45655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (11))){
var inst_43702 = (state_43758[(11)]);
var inst_43719 = (state_43758[(7)]);
var inst_43719__$1 = cljs.core.seq(inst_43702);
var state_43758__$1 = (function (){var statearr_43797 = state_43758;
(statearr_43797[(7)] = inst_43719__$1);

return statearr_43797;
})();
if(inst_43719__$1){
var statearr_43798_45656 = state_43758__$1;
(statearr_43798_45656[(1)] = (14));

} else {
var statearr_43799_45657 = state_43758__$1;
(statearr_43799_45657[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (9))){
var inst_43744 = (state_43758[(2)]);
var inst_43746 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43758__$1 = (function (){var statearr_43802 = state_43758;
(statearr_43802[(15)] = inst_43744);

return statearr_43802;
})();
if(cljs.core.truth_(inst_43746)){
var statearr_43804_45658 = state_43758__$1;
(statearr_43804_45658[(1)] = (21));

} else {
var statearr_43805_45659 = state_43758__$1;
(statearr_43805_45659[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (5))){
var inst_43694 = cljs.core.async.close_BANG_(out);
var state_43758__$1 = state_43758;
var statearr_43810_45661 = state_43758__$1;
(statearr_43810_45661[(2)] = inst_43694);

(statearr_43810_45661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (14))){
var inst_43719 = (state_43758[(7)]);
var inst_43721 = cljs.core.chunked_seq_QMARK_(inst_43719);
var state_43758__$1 = state_43758;
if(inst_43721){
var statearr_43811_45662 = state_43758__$1;
(statearr_43811_45662[(1)] = (17));

} else {
var statearr_43812_45663 = state_43758__$1;
(statearr_43812_45663[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (16))){
var inst_43740 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43813_45664 = state_43758__$1;
(statearr_43813_45664[(2)] = inst_43740);

(statearr_43813_45664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (10))){
var inst_43705 = (state_43758[(8)]);
var inst_43703 = (state_43758[(10)]);
var inst_43713 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43703,inst_43705);
var state_43758__$1 = state_43758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43758__$1,(13),out,inst_43713);
} else {
if((state_val_43759 === (18))){
var inst_43719 = (state_43758[(7)]);
var inst_43729 = cljs.core.first(inst_43719);
var state_43758__$1 = state_43758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43758__$1,(20),out,inst_43729);
} else {
if((state_val_43759 === (8))){
var inst_43705 = (state_43758[(8)]);
var inst_43704 = (state_43758[(12)]);
var inst_43707 = (inst_43705 < inst_43704);
var inst_43708 = inst_43707;
var state_43758__$1 = state_43758;
if(cljs.core.truth_(inst_43708)){
var statearr_43818_45666 = state_43758__$1;
(statearr_43818_45666[(1)] = (10));

} else {
var statearr_43819_45667 = state_43758__$1;
(statearr_43819_45667[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto__))
;
return ((function (switch__39734__auto__,c__40721__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39735__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39735__auto____0 = (function (){
var statearr_43822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43822[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39735__auto__);

(statearr_43822[(1)] = (1));

return statearr_43822;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39735__auto____1 = (function (state_43758){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_43758);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e43823){if((e43823 instanceof Object)){
var ex__39738__auto__ = e43823;
var statearr_43824_45672 = state_43758;
(statearr_43824_45672[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45678 = state_43758;
state_43758 = G__45678;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39735__auto__ = function(state_43758){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39735__auto____1.call(this,state_43758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39735__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39735__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto__))
})();
var state__40723__auto__ = (function (){var statearr_43825 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_43825[(6)] = c__40721__auto__);

return statearr_43825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto__))
);

return c__40721__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43830 = arguments.length;
switch (G__43830) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43834 = arguments.length;
switch (G__43834) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43841 = arguments.length;
switch (G__43841) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40721__auto___45695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___45695,out){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___45695,out){
return (function (state_43866){
var state_val_43867 = (state_43866[(1)]);
if((state_val_43867 === (7))){
var inst_43860 = (state_43866[(2)]);
var state_43866__$1 = state_43866;
var statearr_43868_45700 = state_43866__$1;
(statearr_43868_45700[(2)] = inst_43860);

(statearr_43868_45700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (1))){
var inst_43842 = null;
var state_43866__$1 = (function (){var statearr_43869 = state_43866;
(statearr_43869[(7)] = inst_43842);

return statearr_43869;
})();
var statearr_43870_45702 = state_43866__$1;
(statearr_43870_45702[(2)] = null);

(statearr_43870_45702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (4))){
var inst_43845 = (state_43866[(8)]);
var inst_43845__$1 = (state_43866[(2)]);
var inst_43846 = (inst_43845__$1 == null);
var inst_43847 = cljs.core.not(inst_43846);
var state_43866__$1 = (function (){var statearr_43871 = state_43866;
(statearr_43871[(8)] = inst_43845__$1);

return statearr_43871;
})();
if(inst_43847){
var statearr_43872_45704 = state_43866__$1;
(statearr_43872_45704[(1)] = (5));

} else {
var statearr_43873_45705 = state_43866__$1;
(statearr_43873_45705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (6))){
var state_43866__$1 = state_43866;
var statearr_43875_45706 = state_43866__$1;
(statearr_43875_45706[(2)] = null);

(statearr_43875_45706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (3))){
var inst_43862 = (state_43866[(2)]);
var inst_43863 = cljs.core.async.close_BANG_(out);
var state_43866__$1 = (function (){var statearr_43876 = state_43866;
(statearr_43876[(9)] = inst_43862);

return statearr_43876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43866__$1,inst_43863);
} else {
if((state_val_43867 === (2))){
var state_43866__$1 = state_43866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43866__$1,(4),ch);
} else {
if((state_val_43867 === (11))){
var inst_43845 = (state_43866[(8)]);
var inst_43854 = (state_43866[(2)]);
var inst_43842 = inst_43845;
var state_43866__$1 = (function (){var statearr_43880 = state_43866;
(statearr_43880[(7)] = inst_43842);

(statearr_43880[(10)] = inst_43854);

return statearr_43880;
})();
var statearr_43882_45709 = state_43866__$1;
(statearr_43882_45709[(2)] = null);

(statearr_43882_45709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (9))){
var inst_43845 = (state_43866[(8)]);
var state_43866__$1 = state_43866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43866__$1,(11),out,inst_43845);
} else {
if((state_val_43867 === (5))){
var inst_43845 = (state_43866[(8)]);
var inst_43842 = (state_43866[(7)]);
var inst_43849 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43845,inst_43842);
var state_43866__$1 = state_43866;
if(inst_43849){
var statearr_43888_45720 = state_43866__$1;
(statearr_43888_45720[(1)] = (8));

} else {
var statearr_43889_45721 = state_43866__$1;
(statearr_43889_45721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (10))){
var inst_43857 = (state_43866[(2)]);
var state_43866__$1 = state_43866;
var statearr_43890_45724 = state_43866__$1;
(statearr_43890_45724[(2)] = inst_43857);

(statearr_43890_45724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (8))){
var inst_43842 = (state_43866[(7)]);
var tmp43883 = inst_43842;
var inst_43842__$1 = tmp43883;
var state_43866__$1 = (function (){var statearr_43891 = state_43866;
(statearr_43891[(7)] = inst_43842__$1);

return statearr_43891;
})();
var statearr_43892_45734 = state_43866__$1;
(statearr_43892_45734[(2)] = null);

(statearr_43892_45734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___45695,out))
;
return ((function (switch__39734__auto__,c__40721__auto___45695,out){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_43893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43893[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_43893[(1)] = (1));

return statearr_43893;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_43866){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_43866);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e43894){if((e43894 instanceof Object)){
var ex__39738__auto__ = e43894;
var statearr_43896_45748 = state_43866;
(statearr_43896_45748[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43894;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45752 = state_43866;
state_43866 = G__45752;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_43866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_43866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___45695,out))
})();
var state__40723__auto__ = (function (){var statearr_43897 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_43897[(6)] = c__40721__auto___45695);

return statearr_43897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___45695,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43935 = arguments.length;
switch (G__43935) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40721__auto___45764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___45764,out){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___45764,out){
return (function (state_43983){
var state_val_43984 = (state_43983[(1)]);
if((state_val_43984 === (7))){
var inst_43979 = (state_43983[(2)]);
var state_43983__$1 = state_43983;
var statearr_43988_45775 = state_43983__$1;
(statearr_43988_45775[(2)] = inst_43979);

(statearr_43988_45775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43984 === (1))){
var inst_43945 = (new Array(n));
var inst_43946 = inst_43945;
var inst_43947 = (0);
var state_43983__$1 = (function (){var statearr_43989 = state_43983;
(statearr_43989[(7)] = inst_43946);

(statearr_43989[(8)] = inst_43947);

return statearr_43989;
})();
var statearr_43990_45787 = state_43983__$1;
(statearr_43990_45787[(2)] = null);

(statearr_43990_45787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43984 === (4))){
var inst_43951 = (state_43983[(9)]);
var inst_43951__$1 = (state_43983[(2)]);
var inst_43952 = (inst_43951__$1 == null);
var inst_43953 = cljs.core.not(inst_43952);
var state_43983__$1 = (function (){var statearr_43994 = state_43983;
(statearr_43994[(9)] = inst_43951__$1);

return statearr_43994;
})();
if(inst_43953){
var statearr_43995_45788 = state_43983__$1;
(statearr_43995_45788[(1)] = (5));

} else {
var statearr_43996_45789 = state_43983__$1;
(statearr_43996_45789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43984 === (15))){
var inst_43973 = (state_43983[(2)]);
var state_43983__$1 = state_43983;
var statearr_43997_45790 = state_43983__$1;
(statearr_43997_45790[(2)] = inst_43973);

(statearr_43997_45790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43984 === (13))){
var state_43983__$1 = state_43983;
var statearr_43998_45791 = state_43983__$1;
(statearr_43998_45791[(2)] = null);

(statearr_43998_45791[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43984 === (6))){
var inst_43947 = (state_43983[(8)]);
var inst_43969 = (inst_43947 > (0));
var state_43983__$1 = state_43983;
if(cljs.core.truth_(inst_43969)){
var statearr_43999_45792 = state_43983__$1;
(statearr_43999_45792[(1)] = (12));

} else {
var statearr_44000_45793 = state_43983__$1;
(statearr_44000_45793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43984 === (3))){
var inst_43981 = (state_43983[(2)]);
var state_43983__$1 = state_43983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43983__$1,inst_43981);
} else {
if((state_val_43984 === (12))){
var inst_43946 = (state_43983[(7)]);
var inst_43971 = cljs.core.vec(inst_43946);
var state_43983__$1 = state_43983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43983__$1,(15),out,inst_43971);
} else {
if((state_val_43984 === (2))){
var state_43983__$1 = state_43983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43983__$1,(4),ch);
} else {
if((state_val_43984 === (11))){
var inst_43963 = (state_43983[(2)]);
var inst_43964 = (new Array(n));
var inst_43946 = inst_43964;
var inst_43947 = (0);
var state_43983__$1 = (function (){var statearr_44004 = state_43983;
(statearr_44004[(7)] = inst_43946);

(statearr_44004[(8)] = inst_43947);

(statearr_44004[(10)] = inst_43963);

return statearr_44004;
})();
var statearr_44009_45800 = state_43983__$1;
(statearr_44009_45800[(2)] = null);

(statearr_44009_45800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43984 === (9))){
var inst_43946 = (state_43983[(7)]);
var inst_43961 = cljs.core.vec(inst_43946);
var state_43983__$1 = state_43983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43983__$1,(11),out,inst_43961);
} else {
if((state_val_43984 === (5))){
var inst_43946 = (state_43983[(7)]);
var inst_43956 = (state_43983[(11)]);
var inst_43947 = (state_43983[(8)]);
var inst_43951 = (state_43983[(9)]);
var inst_43955 = (inst_43946[inst_43947] = inst_43951);
var inst_43956__$1 = (inst_43947 + (1));
var inst_43957 = (inst_43956__$1 < n);
var state_43983__$1 = (function (){var statearr_44010 = state_43983;
(statearr_44010[(11)] = inst_43956__$1);

(statearr_44010[(12)] = inst_43955);

return statearr_44010;
})();
if(cljs.core.truth_(inst_43957)){
var statearr_44011_45801 = state_43983__$1;
(statearr_44011_45801[(1)] = (8));

} else {
var statearr_44012_45802 = state_43983__$1;
(statearr_44012_45802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43984 === (14))){
var inst_43976 = (state_43983[(2)]);
var inst_43977 = cljs.core.async.close_BANG_(out);
var state_43983__$1 = (function (){var statearr_44014 = state_43983;
(statearr_44014[(13)] = inst_43976);

return statearr_44014;
})();
var statearr_44015_45812 = state_43983__$1;
(statearr_44015_45812[(2)] = inst_43977);

(statearr_44015_45812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43984 === (10))){
var inst_43967 = (state_43983[(2)]);
var state_43983__$1 = state_43983;
var statearr_44016_45816 = state_43983__$1;
(statearr_44016_45816[(2)] = inst_43967);

(statearr_44016_45816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43984 === (8))){
var inst_43946 = (state_43983[(7)]);
var inst_43956 = (state_43983[(11)]);
var tmp44013 = inst_43946;
var inst_43946__$1 = tmp44013;
var inst_43947 = inst_43956;
var state_43983__$1 = (function (){var statearr_44019 = state_43983;
(statearr_44019[(7)] = inst_43946__$1);

(statearr_44019[(8)] = inst_43947);

return statearr_44019;
})();
var statearr_44020_45817 = state_43983__$1;
(statearr_44020_45817[(2)] = null);

(statearr_44020_45817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___45764,out))
;
return ((function (switch__39734__auto__,c__40721__auto___45764,out){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_44021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44021[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_44021[(1)] = (1));

return statearr_44021;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_43983){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_43983);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e44022){if((e44022 instanceof Object)){
var ex__39738__auto__ = e44022;
var statearr_44023_45818 = state_43983;
(statearr_44023_45818[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44022;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45825 = state_43983;
state_43983 = G__45825;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_43983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_43983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___45764,out))
})();
var state__40723__auto__ = (function (){var statearr_44024 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_44024[(6)] = c__40721__auto___45764);

return statearr_44024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___45764,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44027 = arguments.length;
switch (G__44027) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40721__auto___45827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40721__auto___45827,out){
return (function (){
var f__40722__auto__ = (function (){var switch__39734__auto__ = ((function (c__40721__auto___45827,out){
return (function (state_44072){
var state_val_44073 = (state_44072[(1)]);
if((state_val_44073 === (7))){
var inst_44068 = (state_44072[(2)]);
var state_44072__$1 = state_44072;
var statearr_44077_45828 = state_44072__$1;
(statearr_44077_45828[(2)] = inst_44068);

(statearr_44077_45828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (1))){
var inst_44031 = [];
var inst_44032 = inst_44031;
var inst_44033 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44072__$1 = (function (){var statearr_44078 = state_44072;
(statearr_44078[(7)] = inst_44032);

(statearr_44078[(8)] = inst_44033);

return statearr_44078;
})();
var statearr_44085_45832 = state_44072__$1;
(statearr_44085_45832[(2)] = null);

(statearr_44085_45832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (4))){
var inst_44036 = (state_44072[(9)]);
var inst_44036__$1 = (state_44072[(2)]);
var inst_44037 = (inst_44036__$1 == null);
var inst_44038 = cljs.core.not(inst_44037);
var state_44072__$1 = (function (){var statearr_44086 = state_44072;
(statearr_44086[(9)] = inst_44036__$1);

return statearr_44086;
})();
if(inst_44038){
var statearr_44087_45838 = state_44072__$1;
(statearr_44087_45838[(1)] = (5));

} else {
var statearr_44088_45839 = state_44072__$1;
(statearr_44088_45839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (15))){
var inst_44062 = (state_44072[(2)]);
var state_44072__$1 = state_44072;
var statearr_44089_45843 = state_44072__$1;
(statearr_44089_45843[(2)] = inst_44062);

(statearr_44089_45843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (13))){
var state_44072__$1 = state_44072;
var statearr_44090_45844 = state_44072__$1;
(statearr_44090_45844[(2)] = null);

(statearr_44090_45844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (6))){
var inst_44032 = (state_44072[(7)]);
var inst_44057 = inst_44032.length;
var inst_44058 = (inst_44057 > (0));
var state_44072__$1 = state_44072;
if(cljs.core.truth_(inst_44058)){
var statearr_44091_45847 = state_44072__$1;
(statearr_44091_45847[(1)] = (12));

} else {
var statearr_44092_45848 = state_44072__$1;
(statearr_44092_45848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (3))){
var inst_44070 = (state_44072[(2)]);
var state_44072__$1 = state_44072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44072__$1,inst_44070);
} else {
if((state_val_44073 === (12))){
var inst_44032 = (state_44072[(7)]);
var inst_44060 = cljs.core.vec(inst_44032);
var state_44072__$1 = state_44072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44072__$1,(15),out,inst_44060);
} else {
if((state_val_44073 === (2))){
var state_44072__$1 = state_44072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44072__$1,(4),ch);
} else {
if((state_val_44073 === (11))){
var inst_44036 = (state_44072[(9)]);
var inst_44040 = (state_44072[(10)]);
var inst_44050 = (state_44072[(2)]);
var inst_44051 = [];
var inst_44052 = inst_44051.push(inst_44036);
var inst_44032 = inst_44051;
var inst_44033 = inst_44040;
var state_44072__$1 = (function (){var statearr_44093 = state_44072;
(statearr_44093[(11)] = inst_44052);

(statearr_44093[(12)] = inst_44050);

(statearr_44093[(7)] = inst_44032);

(statearr_44093[(8)] = inst_44033);

return statearr_44093;
})();
var statearr_44094_45849 = state_44072__$1;
(statearr_44094_45849[(2)] = null);

(statearr_44094_45849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (9))){
var inst_44032 = (state_44072[(7)]);
var inst_44048 = cljs.core.vec(inst_44032);
var state_44072__$1 = state_44072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44072__$1,(11),out,inst_44048);
} else {
if((state_val_44073 === (5))){
var inst_44036 = (state_44072[(9)]);
var inst_44040 = (state_44072[(10)]);
var inst_44033 = (state_44072[(8)]);
var inst_44040__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44036) : f.call(null,inst_44036));
var inst_44041 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44040__$1,inst_44033);
var inst_44042 = cljs.core.keyword_identical_QMARK_(inst_44033,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44043 = ((inst_44041) || (inst_44042));
var state_44072__$1 = (function (){var statearr_44095 = state_44072;
(statearr_44095[(10)] = inst_44040__$1);

return statearr_44095;
})();
if(cljs.core.truth_(inst_44043)){
var statearr_44096_45852 = state_44072__$1;
(statearr_44096_45852[(1)] = (8));

} else {
var statearr_44097_45853 = state_44072__$1;
(statearr_44097_45853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (14))){
var inst_44065 = (state_44072[(2)]);
var inst_44066 = cljs.core.async.close_BANG_(out);
var state_44072__$1 = (function (){var statearr_44099 = state_44072;
(statearr_44099[(13)] = inst_44065);

return statearr_44099;
})();
var statearr_44102_45854 = state_44072__$1;
(statearr_44102_45854[(2)] = inst_44066);

(statearr_44102_45854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (10))){
var inst_44055 = (state_44072[(2)]);
var state_44072__$1 = state_44072;
var statearr_44103_45855 = state_44072__$1;
(statearr_44103_45855[(2)] = inst_44055);

(statearr_44103_45855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (8))){
var inst_44036 = (state_44072[(9)]);
var inst_44040 = (state_44072[(10)]);
var inst_44032 = (state_44072[(7)]);
var inst_44045 = inst_44032.push(inst_44036);
var tmp44098 = inst_44032;
var inst_44032__$1 = tmp44098;
var inst_44033 = inst_44040;
var state_44072__$1 = (function (){var statearr_44104 = state_44072;
(statearr_44104[(14)] = inst_44045);

(statearr_44104[(7)] = inst_44032__$1);

(statearr_44104[(8)] = inst_44033);

return statearr_44104;
})();
var statearr_44105_45859 = state_44072__$1;
(statearr_44105_45859[(2)] = null);

(statearr_44105_45859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40721__auto___45827,out))
;
return ((function (switch__39734__auto__,c__40721__auto___45827,out){
return (function() {
var cljs$core$async$state_machine__39735__auto__ = null;
var cljs$core$async$state_machine__39735__auto____0 = (function (){
var statearr_44106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44106[(0)] = cljs$core$async$state_machine__39735__auto__);

(statearr_44106[(1)] = (1));

return statearr_44106;
});
var cljs$core$async$state_machine__39735__auto____1 = (function (state_44072){
while(true){
var ret_value__39736__auto__ = (function (){try{while(true){
var result__39737__auto__ = switch__39734__auto__(state_44072);
if(cljs.core.keyword_identical_QMARK_(result__39737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39737__auto__;
}
break;
}
}catch (e44107){if((e44107 instanceof Object)){
var ex__39738__auto__ = e44107;
var statearr_44108_45868 = state_44072;
(statearr_44108_45868[(5)] = ex__39738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45869 = state_44072;
state_44072 = G__45869;
continue;
} else {
return ret_value__39736__auto__;
}
break;
}
});
cljs$core$async$state_machine__39735__auto__ = function(state_44072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39735__auto____1.call(this,state_44072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39735__auto____0;
cljs$core$async$state_machine__39735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39735__auto____1;
return cljs$core$async$state_machine__39735__auto__;
})()
;})(switch__39734__auto__,c__40721__auto___45827,out))
})();
var state__40723__auto__ = (function (){var statearr_44114 = (f__40722__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40722__auto__.cljs$core$IFn$_invoke$arity$0() : f__40722__auto__.call(null));
(statearr_44114[(6)] = c__40721__auto___45827);

return statearr_44114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40723__auto__);
});})(c__40721__auto___45827,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
