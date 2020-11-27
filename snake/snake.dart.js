(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.eK(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.cc(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={c1:function c1(){},
d4:function(a){var t,s=H.d3(a)
if(s!=null)return s
t="minified:"+a
return t},
e:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ar(a)
if(typeof t!="string")throw H.d(H.cU(a))
return t},
b9:function(a){return H.dw(a)},
dw:function(a){var t,s,r
if(a instanceof P.j)return H.t(H.ao(a),null)
if(J.bQ(a)===C.x||u.D.b(a)){t=C.i(a)
if(H.ct(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.ct(r))return r}}return H.t(H.ao(a),null)},
ct:function(a){var t=a!=="Object"&&a!==""
return t},
ez:function(a){throw H.d(H.cU(a))},
X:function(a,b){if(a==null)J.dh(a)
throw H.d(H.ev(a,b))},
ev:function(a,b){var t,s,r,q="index"
if(!H.cP(b))return new P.x(!0,b,q,null)
t=J.cX(a)
s=H.b_(t.gl(a))
if(!(b<0)){if(typeof s!=="number")return H.ez(s)
r=b>=s}else r=!0
if(r){t=H.b_(s==null?t.gl(a):s)
return new P.az(t,!0,b,q,"Index out of range")}return P.dy(b,q)},
cU:function(a){return new P.x(!0,a,null,null)},
d:function(a){var t,s
if(a==null)a=new P.aF()
t=new Error()
t.dartException=a
s=H.eL
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
eL:function(){return J.ar(this.dartException)},
bZ:function(a){throw H.d(a)},
eJ:function(a){throw H.d(P.cp(a))},
B:function(a){var t,s,r,q,p,o
a=H.eH(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.bY([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bo:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cx:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cs:function(a,b){return new H.aE(a,b==null?null:b.method)},
c2:function(a,b){var t=b==null,s=t?null:b.method
return new H.aC(a,s,t?null:b.receiver)},
ap:function(a){if(a==null)return new H.b8(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.M(a,a.dartException)
return H.en(a)},
M:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
en:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.ab(s,16)&8191)===10)switch(r){case 438:return H.M(a,H.c2(H.e(t)+" (Error "+r+")",f))
case 445:case 5007:return H.M(a,H.cs(H.e(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.d6()
p=$.d7()
o=$.d8()
n=$.d9()
m=$.dc()
l=$.dd()
k=$.db()
$.da()
j=$.df()
i=$.de()
h=q.k(t)
if(h!=null)return H.M(a,H.c2(H.b0(t),h))
else{h=p.k(t)
if(h!=null){h.method="call"
return H.M(a,H.c2(H.b0(t),h))}else{h=o.k(t)
if(h==null){h=n.k(t)
if(h==null){h=m.k(t)
if(h==null){h=l.k(t)
if(h==null){h=k.k(t)
if(h==null){h=n.k(t)
if(h==null){h=j.k(t)
if(h==null){h=i.k(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.M(a,H.cs(H.b0(t),h))}}return H.M(a,new H.aO(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.a9()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.M(a,new P.x(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.a9()
return a},
V:function(a){var t
if(a==null)return new H.ae(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.ae(a)},
eD:function(a,b,c,d,e,f){u.Y.a(a)
switch(H.b_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.bv("Unsupported number of arguments for wrapped closure"))},
b1:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.eD)
a.$identity=t
return t},
dt:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.aJ().constructor.prototype):Object.create(new H.a_(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.z
if(typeof s!=="number")return s.j()
$.z=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.co(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.dp(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.co(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
dp:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.cZ,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.dm:H.dl
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
dq:function(a,b,c,d){var t=H.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
co:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.ds(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.dq(s,!q,t,b)
if(s===0){q=$.z
if(typeof q!=="number")return q.j()
$.z=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.e(H.c_())+";return "+o+"."+H.e(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.z
if(typeof q!=="number")return q.j()
$.z=q+1
n+=q
return new Function("return function("+n+"){return this."+H.e(H.c_())+"."+H.e(t)+"("+n+");}")()},
dr:function(a,b,c,d){var t=H.cn,s=H.dn
switch(b?-1:a){case 0:throw H.d(new H.aH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
ds:function(a,b){var t,s,r,q,p,o,n=H.c_(),m=$.cl
if(m==null)m=$.cl=H.ck("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.dr(s,!q,t,b)
if(s===1){q="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+m+");"
p=$.z
if(typeof p!=="number")return p.j()
$.z=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+m+", "+o+");"
p=$.z
if(typeof p!=="number")return p.j()
$.z=p+1
return new Function(q+p+"}")()},
cc:function(a,b,c,d,e,f,g){return H.dt(a,b,c,d,!!e,!!f,g)},
dl:function(a,b){return H.aY(v.typeUniverse,H.ao(a.a),b)},
dm:function(a,b){return H.aY(v.typeUniverse,H.ao(a.c),b)},
cn:function(a){return a.a},
dn:function(a){return a.c},
c_:function(){var t=$.cm
return t==null?$.cm=H.ck("self"):t},
ck:function(a){var t,s,r,q=new H.a_("self","target","receiver","name"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw H.d(P.dj("Field name "+a+" not found."))},
et:function(a){if(a==null)H.ep("boolean expression must not be null")
return a},
ep:function(a){throw H.d(new H.aQ(a))},
eK:function(a){throw H.d(new P.aw(a))},
ey:function(a){return v.getIsolateTag(a)},
fl:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
eF:function(a){var t,s,r,q,p,o=H.b0($.cY.$1(a)),n=$.bP[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bU[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.dZ($.cT.$2(a,o))
if(r!=null){n=$.bP[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bU[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.bX(t)
$.bP[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bU[o]=t
return t}if(q==="-"){p=H.bX(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.d1(a,t)
if(q==="*")throw H.d(P.cy(o))
if(v.leafTags[o]===true){p=H.bX(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.d1(a,t)},
d1:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cg(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
bX:function(a){return J.cg(a,!1,null,!!a.$ieT)},
eG:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.bX(t)
else return J.cg(t,c,null,null)},
eB:function(){if(!0===$.cf)return
$.cf=!0
H.eC()},
eC:function(){var t,s,r,q,p,o,n,m
$.bP=Object.create(null)
$.bU=Object.create(null)
H.eA()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.d2.$1(p)
if(o!=null){n=H.eG(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eA:function(){var t,s,r,q,p,o,n=C.m()
n=H.U(C.n,H.U(C.o,H.U(C.j,H.U(C.j,H.U(C.p,H.U(C.q,H.U(C.r(C.i),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.cY=new H.bR(q)
$.cT=new H.bS(p)
$.d2=new H.bT(o)},
U:function(a,b){return a(b)||b},
eH:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bn:function bn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aE:function aE(a,b){this.a=a
this.b=b},
aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a){this.a=a},
b8:function b8(a){this.a=a},
ae:function ae(a){this.a=a
this.b=null},
K:function K(){},
aL:function aL(){},
aJ:function aJ(){},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH:function aH(a){this.a=a},
aQ:function aQ(a){this.a=a},
bR:function bR(a){this.a=a},
bS:function bS(a){this.a=a},
bT:function bT(a){this.a=a},
dA:function(a,b){var t=b.c
return t==null?b.c=H.c8(a,b.z,!0):t},
cu:function(a,b){var t=b.c
return t==null?b.c=H.ag(a,"a2",[b.z]):t},
cv:function(a){var t=a.y
if(t===6||t===7||t===8)return H.cv(a.z)
return t===11||t===12},
dz:function(a){return a.cy},
cW:function(a){return H.c9(v.typeUniverse,a,!1)},
I:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.I(a,t,c,a0)
if(s===t)return b
return H.cI(a,s,!0)
case 7:t=b.z
s=H.I(a,t,c,a0)
if(s===t)return b
return H.c8(a,s,!0)
case 8:t=b.z
s=H.I(a,t,c,a0)
if(s===t)return b
return H.cH(a,s,!0)
case 9:r=b.Q
q=H.am(a,r,c,a0)
if(q===r)return b
return H.ag(a,b.z,q)
case 10:p=b.z
o=H.I(a,p,c,a0)
n=b.Q
m=H.am(a,n,c,a0)
if(o===p&&m===n)return b
return H.c6(a,o,m)
case 11:l=b.z
k=H.I(a,l,c,a0)
j=b.Q
i=H.ek(a,j,c,a0)
if(k===l&&i===j)return b
return H.cG(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.am(a,h,c,a0)
p=b.z
o=H.I(a,p,c,a0)
if(g===h&&o===p)return b
return H.c7(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.b2("Attempted to substitute unexpected RTI kind "+d))}},
am:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.I(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
el:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.I(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
ek:function(a,b,c,d){var t,s=b.a,r=H.am(a,s,c,d),q=b.b,p=H.am(a,q,c,d),o=b.c,n=H.el(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.aU()
t.a=r
t.b=p
t.c=n
return t},
bY:function(a,b){a[v.arrayRti]=b
return a},
eu:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.cZ(t)
return a.$S()}return null},
d_:function(a,b){var t
if(H.cv(b))if(a instanceof H.K){t=H.eu(a)
if(t!=null)return t}return H.ao(a)},
ao:function(a){var t
if(a instanceof P.j){t=a.$ti
return t!=null?t:H.ca(a)}if(Array.isArray(a))return H.aZ(a)
return H.ca(J.bQ(a))},
aZ:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
fk:function(a){var t=a.$ti
return t!=null?t:H.ca(a)},
ca:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.e5(a,t)},
e5:function(a,b){var t=a instanceof H.K?a.__proto__.__proto__.constructor:b,s=H.dX(v.typeUniverse,t.name)
b.$ccache=s
return s},
cZ:function(a){var t,s,r
H.b_(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.c9(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
e4:function(a){var t,s,r=this,q=u.K
if(r===q)return H.aj(r,a,H.e8)
if(!H.D(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.aj(r,a,H.ec)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.cP
else if(t===u.i||t===u.q)s=H.e7
else if(t===u.N)s=H.e9
else s=t===u.y?H.cN:null
if(s!=null)return H.aj(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.eE)){r.r="$i"+q
return H.aj(r,a,H.ea)}}else if(q===7)return H.aj(r,a,H.e2)
return H.aj(r,a,H.e0)},
aj:function(a,b,c){a.b=c
return a.b(b)},
e3:function(a){var t,s,r=this
if(!H.D(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.e_
else if(r===u.K)s=H.dY
else s=H.e1
r.a=s
return r.a(a)},
ee:function(a){var t,s=a.y
if(!H.D(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
e0:function(a){var t=this
if(a==null)return H.ee(t)
return H.l(v.typeUniverse,H.d_(a,t),null,t,null)},
e2:function(a){if(a==null)return!0
return this.z.b(a)},
ea:function(a){var t=this,s=t.r
if(a instanceof P.j)return!!a[s]
return!!J.bQ(a)[s]},
fj:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.cL(a,t)},
e1:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.cL(a,t)},
cL:function(a,b){throw H.d(H.dN(H.cA(a,H.d_(a,b),H.t(b,null))))},
cA:function(a,b,c){var t=P.ax(a),s=H.t(b==null?H.ao(a):b,null)
return t+": type '"+H.e(s)+"' is not a subtype of type '"+H.e(c)+"'"},
dN:function(a){return new H.af("TypeError: "+a)},
o:function(a,b){return new H.af("TypeError: "+H.cA(a,null,b))},
e8:function(a){return a!=null},
dY:function(a){return a},
ec:function(a){return!0},
e_:function(a){return a},
cN:function(a){return!0===a||!1===a},
f7:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.o(a,"bool"))},
f9:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.o(a,"bool"))},
f8:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.o(a,"bool?"))},
fa:function(a){if(typeof a=="number")return a
throw H.d(H.o(a,"double"))},
fc:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.o(a,"double"))},
fb:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.o(a,"double?"))},
cP:function(a){return typeof a=="number"&&Math.floor(a)===a},
fd:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.o(a,"int"))},
b_:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.o(a,"int"))},
fe:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.o(a,"int?"))},
e7:function(a){return typeof a=="number"},
ff:function(a){if(typeof a=="number")return a
throw H.d(H.o(a,"num"))},
fh:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.o(a,"num"))},
fg:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.o(a,"num?"))},
e9:function(a){return typeof a=="string"},
fi:function(a){if(typeof a=="string")return a
throw H.d(H.o(a,"String"))},
b0:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.o(a,"String"))},
dZ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.o(a,"String?"))},
eh:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.e.j(s,H.t(a[r],b))
return t},
cM:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.bY([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.f.V(a5,"T"+(r+q))
for(p=u.O,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.X(a5,j)
m=C.e.j(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.e.j(" extends ",H.t(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.t(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.e.j(a2,H.t(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.e.j(a2,H.t(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.ci(H.t(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.e(a0)},
t:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.t(a.z,b)
return t}if(m===7){s=a.z
t=H.t(s,b)
r=s.y
return J.ci(r===11||r===12?C.e.j("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.e(H.t(a.z,b))+">"
if(m===9){q=H.em(a.z)
p=a.Q
return p.length!==0?q+("<"+H.eh(p,b)+">"):q}if(m===11)return H.cM(a,b,null)
if(m===12)return H.cM(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.X(b,o)
return b[o]}return"?"},
em:function(a){var t,s=H.d3(a)
if(s!=null)return s
t="minified:"+a
return t},
cJ:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
dX:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.c9(a,b,!1)
else if(typeof n=="number"){t=n
s=H.ah(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.ag(a,b,r)
o[b]=p
return p}else return n},
dV:function(a,b){return H.cK(a.tR,b)},
dU:function(a,b){return H.cK(a.eT,b)},
c9:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.cF(H.cD(a,null,b,c))
s.set(b,t)
return t},
aY:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.cF(H.cD(a,b,c,!0))
r.set(c,s)
return s},
dW:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.c6(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
H:function(a,b){b.a=H.e3
b.b=H.e4
return b},
ah:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.u(null,null)
t.y=b
t.cy=c
s=H.H(a,t)
a.eC.set(c,s)
return s},
cI:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.dS(a,b,s,c)
a.eC.set(s,t)
return t},
dS:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.D(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.u(null,null)
r.y=6
r.z=b
r.cy=c
return H.H(a,r)},
c8:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.dR(a,b,s,c)
a.eC.set(s,t)
return t},
dR:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.D(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.bV(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.bV(r.z))return r
else return H.dA(a,b)}}q=new H.u(null,null)
q.y=7
q.z=b
q.cy=c
return H.H(a,q)},
cH:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.dP(a,b,s,c)
a.eC.set(s,t)
return t},
dP:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.D(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.ag(a,"a2",[b])
else if(b===u.P||b===u.T)return u.U}r=new H.u(null,null)
r.y=8
r.z=b
r.cy=c
return H.H(a,r)},
dT:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.u(null,null)
t.y=13
t.z=b
t.cy=r
s=H.H(a,t)
a.eC.set(r,s)
return s},
aX:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
dO:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
ag:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.aX(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.u(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.H(a,s)
a.eC.set(q,r)
return r},
c6:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.aX(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.u(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.H(a,p)
a.eC.set(r,o)
return o},
cG:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.aX(n)
if(k>0){t=m>0?",":""
s=H.aX(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.dO(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.u(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.H(a,p)
a.eC.set(r,s)
return s},
c7:function(a,b,c,d){var t,s=b.cy+("<"+H.aX(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.dQ(a,b,c,s,d)
a.eC.set(s,t)
return t},
dQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.I(a,b,s,0)
n=H.am(a,c,s,0)
return H.c7(a,o,n,c!==n)}}m=new H.u(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.H(a,m)},
cD:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cF:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.dI(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.cE(a,s,h,g,!1)
else if(r===46)s=H.cE(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.G(a.u,a.e,g.pop()))
break
case 94:g.push(H.dT(a.u,g.pop()))
break
case 35:g.push(H.ah(a.u,5,"#"))
break
case 64:g.push(H.ah(a.u,2,"@"))
break
case 126:g.push(H.ah(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.c5(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.ag(q,o,p))
else{n=H.G(q,a.e,o)
switch(n.y){case 11:g.push(H.c7(q,n,p,a.n))
break
default:g.push(H.c6(q,n,p))
break}}break
case 38:H.dJ(a,g)
break
case 42:m=a.u
g.push(H.cI(m,H.G(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.c8(m,H.G(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.cH(m,H.G(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.aU()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.c5(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.cG(q,H.G(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.c5(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.dL(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.G(a.u,a.e,i)},
dI:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cE:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.cJ(t,p.z)[q]
if(o==null)H.bZ('No "'+q+'" in "'+H.dz(p)+'"')
d.push(H.aY(t,p,o))}else d.push(q)
return n},
dJ:function(a,b){var t=b.pop()
if(0===t){b.push(H.ah(a.u,1,"0&"))
return}if(1===t){b.push(H.ah(a.u,4,"1&"))
return}throw H.d(P.b2("Unexpected extended operation "+H.e(t)))},
G:function(a,b,c){if(typeof c=="string")return H.ag(a,c,a.sEA)
else if(typeof c=="number")return H.dK(a,b,c)
else return c},
c5:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.G(a,b,c[t])},
dL:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.G(a,b,c[t])},
dK:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.b2("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.b2("Bad index "+c+" for "+b.h(0)))},
l:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.D(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.D(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.l(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.l(a,b.z,c,d,e)
if(q===6){t=d.z
return H.l(a,b,c,t,e)}if(s===8){if(!H.l(a,b.z,c,d,e))return!1
return H.l(a,H.cu(a,b),c,d,e)}if(s===7){t=H.l(a,b.z,c,d,e)
return t}if(q===8){if(H.l(a,b,c,d.z,e))return!0
return H.l(a,b,c,H.cu(a,d),e)}if(q===7){t=H.l(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Y)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.l(a,l,c,k,e)||!H.l(a,k,e,l,c))return!1}return H.cO(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.cO(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.e6(a,b,c,d,e)}return!1},
cO:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.l(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.l(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.l(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.l(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.l(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
e6:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.l(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.cJ(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.l(a,H.aY(a,b,m[q]),c,s[q],e))return!1
return!0},
bV:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.D(a))if(s!==7)if(!(s===6&&H.bV(a.z)))t=s===8&&H.bV(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eE:function(a){var t
if(!H.D(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
D:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.O},
cK:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
u:function u(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
aU:function aU(){this.c=this.b=this.a=null},
aS:function aS(){},
af:function af(a){this.a=a},
d3:function(a){return v.mangledGlobalNames[a]}},J={
cg:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ce:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.cf==null){H.eB()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.d(P.cy("Return interceptor for "+H.e(t(a,p))))}r=a.constructor
q=r==null?null:r[J.cr()]
if(q!=null)return q
q=H.eF(a)
if(q!=null)return q
if(typeof a=="function")return C.y
t=Object.getPrototypeOf(a)
if(t==null)return C.l
if(t===Object.prototype)return C.l
if(typeof r=="function"){Object.defineProperty(r,J.cr(),{value:C.h,enumerable:false,writable:true,configurable:true})
return C.h}return C.h},
cr:function(){var t=$.cC
return t==null?$.cC=v.getIsolateTag("_$dart_js"):t},
bQ:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a4.prototype
return J.aB.prototype}if(typeof a=="string")return J.L.prototype
if(a==null)return J.a5.prototype
if(typeof a=="boolean")return J.aA.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.E.prototype
return a}if(a instanceof P.j)return a
return J.ce(a)},
ex:function(a){if(typeof a=="number")return J.a6.prototype
if(typeof a=="string")return J.L.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.j))return J.R.prototype
return a},
cX:function(a){if(typeof a=="string")return J.L.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.E.prototype
return a}if(a instanceof P.j)return a
return J.ce(a)},
cd:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.E.prototype
return a}if(a instanceof P.j)return a
return J.ce(a)},
ci:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ex(a).j(a,b)},
dg:function(a,b,c,d){return J.cd(a).W(a,b,c,d)},
dh:function(a){return J.cX(a).gl(a)},
aq:function(a){return J.cd(a).ga0(a)},
di:function(a){return J.cd(a).ga1(a)},
ar:function(a){return J.bQ(a).h(a)},
q:function q(){},
aA:function aA(){},
a5:function a5(){},
F:function F(){},
aG:function aG(){},
R:function R(){},
E:function E(){},
r:function r(a){this.$ti=a},
b7:function b7(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a6:function a6(){},
a4:function a4(){},
aB:function aB(){},
L:function L(){}},P={
dD:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.eq()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.b1(new P.br(r),1)).observe(t,{childList:true})
return new P.bq(r,t,s)}else if(self.setImmediate!=null)return P.er()
return P.es()},
dE:function(a){self.scheduleImmediate(H.b1(new P.bs(u.M.a(a)),0))},
dF:function(a){self.setImmediate(H.b1(new P.bt(u.M.a(a)),0))},
dG:function(a){P.c4(C.v,u.M.a(a))},
c4:function(a,b){var t=C.d.A(a.a,1000)
return P.dM(t<0?0:t,b)},
dM:function(a,b){var t=new P.bJ()
t.a8(a,b)
return t},
dH:function(a,b){var t,s,r
b.a=1
try{a.a4(new P.bx(b),new P.by(b),u.P)}catch(r){t=H.ap(r)
s=H.V(r)
P.eI(new P.bz(b,t,s))}},
cB:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.H()
b.a=a.a
b.c=a.c
P.ad(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.U(r)}},
ad:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.bL(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.ad(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.bL(d,d,l.b,k.a,k.b)
return}g=$.i
if(g!==h)$.i=h
else g=d
b=b.c
if((b&15)===8)new P.bD(q,c,p).$0()
else if(j){if((b&1)!==0)new P.bC(q,k).$0()}else if((b&2)!==0)new P.bB(c,q).$0()
if(g!=null)$.i=g
b=q.c
if(r.b(b)){f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.w(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.cB(b,f)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.w(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
ef:function(a,b){var t=u.Q
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.d(P.cj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ed:function(){var t,s
for(t=$.T;t!=null;t=$.T){$.al=null
s=t.b
$.T=s
if(s==null)$.ak=null
t.a.$0()}},
ej:function(){$.cb=!0
try{P.ed()}finally{$.al=null
$.cb=!1
if($.T!=null)$.ch().$1(P.cV())}},
cS:function(a){var t=new P.aR(a),s=$.ak
if(s==null){$.T=$.ak=t
if(!$.cb)$.ch().$1(P.cV())}else $.ak=s.b=t},
ei:function(a){var t,s,r,q=$.T
if(q==null){P.cS(a)
$.al=$.ak
return}t=new P.aR(a)
s=$.al
if(s==null){t.b=q
$.T=$.al=t}else{r=s.b
t.b=r
$.al=s.b=t
if(r==null)$.ak=t}},
eI:function(a){var t=null,s=$.i
if(C.b===s){P.bN(t,t,C.b,a)
return}P.bN(t,t,s,u.M.a(s.I(a)))},
dC:function(a,b){var t=$.i
if(t===C.b)return P.c4(a,u.M.a(b))
return P.c4(a,u.M.a(t.I(b)))},
b3:function(a,b){var t=b==null?P.dk(a):b
if(a==null)H.bZ(new P.x(!1,null,"error","Must not be null"))
return new P.Z(a,t)},
dk:function(a){var t
if(u.C.b(a)){t=a.gE()
if(t!=null)return t}return C.u},
bL:function(a,b,c,d,e){P.ei(new P.bM(d,e))},
cQ:function(a,b,c,d,e){var t,s=$.i
if(s===c)return d.$0()
$.i=c
t=s
try{s=d.$0()
return s}finally{$.i=t}},
cR:function(a,b,c,d,e,f,g){var t,s=$.i
if(s===c)return d.$1(e)
$.i=c
t=s
try{s=d.$1(e)
return s}finally{$.i=t}},
eg:function(a,b,c,d,e,f,g,h,i){var t,s=$.i
if(s===c)return d.$2(e,f)
$.i=c
t=s
try{s=d.$2(e,f)
return s}finally{$.i=t}},
bN:function(a,b,c,d){var t
u.M.a(d)
t=C.b!==c
if(t)d=!(!t||!1)?c.I(d):c.ae(d,u.H)
P.cS(d)},
br:function br(a){this.a=a},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a){this.a=a},
bt:function bt(a){this.a=a},
bJ:function bJ(){},
bK:function bK(a,b){this.a=a
this.b=b},
ac:function ac(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
v:function v(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bw:function bw(a,b){this.a=a
this.b=b},
bA:function bA(a,b){this.a=a
this.b=b},
bx:function bx(a){this.a=a},
by:function by(a){this.a=a},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a){this.a=a},
bC:function bC(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
aR:function aR(a){this.a=a
this.b=null},
aa:function aa(){},
bk:function bk(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
aK:function aK(){},
Z:function Z(a,b){this.a=a
this.b=b},
ai:function ai(){},
bM:function bM(a,b){this.a=a
this.b=b},
aV:function aV(){},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b){this.a=a
this.b=b},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
du:function(a){if(a instanceof H.K)return a.h(0)
return"Instance of '"+H.e(H.b9(a))+"'"},
dB:function(a,b,c){var t=new J.au(b,b.length,H.aZ(b).i("au<1>"))
if(!t.K())return a
if(c.length===0){do a+=H.e(t.d)
while(t.K())}else{a+=H.e(t.d)
for(;t.K();)a=a+c+H.e(t.d)}return a},
ax:function(a){if(typeof a=="number"||H.cN(a)||null==a)return J.ar(a)
if(typeof a=="string")return JSON.stringify(a)
return P.du(a)},
b2:function(a){return new P.Y(a)},
dj:function(a){return new P.x(!1,null,null,a)},
cj:function(a,b,c){return new P.x(!0,a,b,c)},
dx:function(a){return new P.a8(!1,null,null,a)},
dy:function(a,b){return new P.a8(!0,a,b,"Value not in range")},
bp:function(a){return new P.aP(a)},
cy:function(a){return new P.aN(a)},
cp:function(a){return new P.av(a)},
a1:function a1(a){this.a=a},
b5:function b5(){},
b6:function b6(){},
f:function f(){},
Y:function Y(a){this.a=a},
aM:function aM(){},
aF:function aF(){},
x:function x(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
az:function az(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aP:function aP(a){this.a=a},
aN:function aN(a){this.a=a},
av:function av(a){this.a=a},
a9:function a9(){},
aw:function aw(a){this.a=a},
bv:function bv(a){this.a=a},
h:function h(){},
j:function j(){},
aW:function aW(){},
bm:function bm(a){this.a=a},
bF:function bF(){},
n:function n(a,b,c){this.a=a
this.b=b
this.$ti=c},
b:function b(){},
dv:function(a,b,c){var t,s
if(P.eb(a))return b+"..."+c
t=new P.bm(b)
C.f.V($.an,a)
try{s=t
s.a=P.dB(s.a,a,", ")}finally{if(0>=$.an.length)return H.X($.an,-1)
$.an.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eb:function(a){var t,s
for(t=$.an.length,s=0;s<t;++s)if(a===$.an[s])return!0
return!1}},W={
S:function(a,b,c,d,e){var t=W.eo(new W.bu(c),u.B)
if(t!=null&&!0)J.dg(a,b,t,!1)
return new W.aT(a,b,t,!1,e.i("aT<0>"))},
eo:function(a,b){var t=$.i
if(t===C.b)return a
return t.af(a,b)},
c:function c(){},
as:function as(){},
at:function at(){},
J:function J(){},
N:function N(){},
a0:function a0(){},
b4:function b4(){},
p:function p(){},
a:function a(){},
k:function k(){},
ay:function ay(){},
a3:function a3(){},
P:function P(){},
aD:function aD(){},
m:function m(){},
a7:function a7(){},
aI:function aI(){},
y:function y(){},
c0:function c0(a,b){this.a=a
this.$ti=b},
ab:function ab(){},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aT:function aT(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bu:function bu(a){this.a=a}},O={
d0:function(){var t,s,r={}
r.a=O.cw()
t=J.aq(document.querySelector("#snakeboard"))
s=t.$ti
r=s.i("~(1)?").a(new O.bW(r))
u.Z.a(null)
W.S(t.a,t.b,r,!1,s.c)},
cw:function(){var t,s,r,q,p,o="#snakeboard",n=u.e
n=H.bY([new P.n(50,150,n),new P.n(40,150,n),new P.n(30,150,n),new P.n(20,150,n),new P.n(10,150,n)],u.j)
t=document
s=u.R
r=s.a(t.querySelector(o))
n=new O.ba(n,r)
q=r.width
if(typeof q!=="number")return q.t()
n.r=n.C(q-10)
r=r.height
if(typeof r!=="number")return r.t()
n.x=n.C(r-10)
p=s.a(t.querySelector(o));(p&&C.c).sJ(p,300)
C.c.sM(p,300)
t=window.innerWidth
if(typeof t!=="number")return t.D()
if(t>900){t=window.innerHeight
if(typeof t!=="number")return t.D()
t=t>900}else t=!1
if(t){C.c.sJ(p,400)
C.c.sM(p,400)}else{t=window.innerWidth
if(typeof t!=="number")return t.D()
if(t>1200){t=window.innerHeight
if(typeof t!=="number")return t.D()
t=t>1200}else t=!1
if(t){C.c.sJ(p,500)
C.c.sM(p,500)}}n.N()
return n},
bW:function bW(a){this.a=a},
ba:function ba(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=null
_.y=10
_.Q=_.z=0
_.ch=150
_.cx=!1},
bc:function bc(a){this.a=a},
bd:function bd(a){this.a=a},
be:function be(a){this.a=a},
bf:function bf(a){this.a=a},
bg:function bg(a){this.a=a},
bh:function bh(){},
bi:function bi(a){this.a=a},
bb:function bb(a){this.a=a},
bj:function bj(a){this.a=a}}
var w=[C,H,J,P,W,O]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.c1.prototype={}
J.q.prototype={
h:function(a){return"Instance of '"+H.e(H.b9(a))+"'"}}
J.aA.prototype={
h:function(a){return String(a)},
$ibO:1}
J.a5.prototype={
h:function(a){return"null"},
$ih:1}
J.F.prototype={
h:function(a){return String(a)}}
J.aG.prototype={}
J.R.prototype={}
J.E.prototype={
h:function(a){var t=a[$.d5()]
if(t==null)return this.a7(a)
return"JavaScript function for "+H.e(J.ar(t))},
$iO:1}
J.r.prototype={
V:function(a,b){H.aZ(a).c.a(b)
if(!!a.fixed$length)H.bZ(P.bp("add"))
a.push(b)},
a_:function(a,b){var t,s
H.aZ(a).i("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.d(P.cp(a))}},
h:function(a){return P.dv(a,"[","]")},
gl:function(a){return a.length},
$icq:1,
$ic3:1}
J.b7.prototype={}
J.au.prototype={
K:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.eJ(r))
t=s.c
if(t>=q){s.sT(null)
return!1}s.sT(r[t]);++s.c
return!0},
sT:function(a){this.d=this.$ti.i("1?").a(a)}}
J.a6.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
a5:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
A:function(a,b){return(a|0)===a?a/b|0:this.ac(a,b)},
ac:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.bp("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
ab:function(a,b){var t
if(a>0)t=this.aa(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aa:function(a,b){return b>31?0:a>>>b},
$iw:1}
J.a4.prototype={$iW:1}
J.aB.prototype={}
J.L.prototype={
j:function(a,b){if(typeof b!="string")throw H.d(P.cj(b,null,null))
return a+b},
h:function(a){return a},
gl:function(a){return a.length},
$iA:1}
H.bn.prototype={
k:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.aE.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.aC.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.e(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.e(s.a)+")"
return r+q+"' on '"+t+"' ("+H.e(s.a)+")"}}
H.aO.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.b8.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.ae.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iQ:1}
H.K.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.d4(s==null?"unknown":s)+"'"},
$iO:1,
gao:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aL.prototype={}
H.aJ.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.d4(t)+"'"}}
H.a_.prototype={
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.b9(t))+"'")}}
H.aH.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aQ.prototype={
h:function(a){return"Assertion failed: "+P.ax(this.a)}}
H.bR.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.bS.prototype={
$2:function(a,b){return this.a(a,b)},
$S:8}
H.bT.prototype={
$1:function(a){return this.a(H.b0(a))},
$S:9}
H.u.prototype={
i:function(a){return H.aY(v.typeUniverse,this,a)},
p:function(a){return H.dW(v.typeUniverse,this,a)}}
H.aU.prototype={}
H.aS.prototype={
h:function(a){return this.a}}
H.af.prototype={}
P.br.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:4}
P.bq.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:10}
P.bs.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bt.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bJ.prototype={
a8:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b1(new P.bK(this,b),0),a)
else throw H.d(P.bp("`setTimeout()` not found."))}}
P.bK.prototype={
$0:function(){this.b.$0()},
$S:1}
P.ac.prototype={
ai:function(a){if((this.c&15)!==6)return!0
return this.b.b.L(u.m.a(this.d),a.a,u.y,u.K)},
ah:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.Q.b(t))return q.a(p.ak(t,a.a,a.b,s,r,u.l))
else return q.a(p.L(u.v.a(t),a.a,s,r))}}
P.v.prototype={
a4:function(a,b,c){var t,s,r,q=this.$ti
q.p(c).i("1/(2)").a(a)
t=$.i
if(t!==C.b){c.i("@<0/>").p(q.c).i("1(2)").a(a)
if(b!=null)b=P.ef(b,t)}s=new P.v($.i,c.i("v<0>"))
r=b==null?1:3
this.P(new P.ac(s,r,a,b,q.i("@<1>").p(c).i("ac<1,2>")))
return s},
an:function(a,b){return this.a4(a,null,b)},
P:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.P(a)
return}s.a=r
s.c=t.c}P.bN(null,null,s.b,u.M.a(new P.bw(s,a)))}},
U:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.U(a)
return}n.a=t
n.c=o.c}m.a=n.w(a)
P.bN(null,null,n.b,u.M.a(new P.bA(m,n)))}},
H:function(){var t=u.F.a(this.c)
this.c=null
return this.w(t)},
w:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
R:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("a2<1>").b(a))if(r.b(a))P.cB(a,s)
else P.dH(a,s)
else{t=s.H()
r.c.a(a)
s.a=4
s.c=a
P.ad(s,t)}},
S:function(a,b){var t,s,r=this
u.l.a(b)
t=r.H()
s=P.b3(a,b)
r.a=8
r.c=s
P.ad(r,t)},
$ia2:1}
P.bw.prototype={
$0:function(){P.ad(this.a,this.b)},
$S:0}
P.bA.prototype={
$0:function(){P.ad(this.b,this.a.a)},
$S:0}
P.bx.prototype={
$1:function(a){var t=this.a
t.a=0
t.R(a)},
$S:4}
P.by.prototype={
$2:function(a,b){this.a.S(a,u.l.a(b))},
$S:11}
P.bz.prototype={
$0:function(){this.a.S(this.b,this.c)},
$S:0}
P.bD.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.a3(u.W.a(r.d),u.z)}catch(q){t=H.ap(q)
s=H.V(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.b3(t,s)
p.b=!0
return}if(m instanceof P.v&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.an(new P.bE(o),u.z)
r.b=!1}},
$S:1}
P.bE.prototype={
$1:function(a){return this.a},
$S:12}
P.bC.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.L(p.i("2/(1)").a(q.d),n,p.i("2/"),o)}catch(m){t=H.ap(m)
s=H.V(m)
r=this.a
r.c=P.b3(t,s)
r.b=!0}},
$S:1}
P.bB.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.et(q.a.ai(t))&&q.a.e!=null){q.c=q.a.ah(t)
q.b=!1}}catch(p){s=H.ap(p)
r=H.V(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.b3(s,r)
m.b=!0}},
$S:1}
P.aR.prototype={}
P.aa.prototype={
gl:function(a){var t,s,r=this,q={},p=new P.v($.i,u.a)
q.a=0
t=r.$ti
s=t.i("~(1)?").a(new P.bk(q,r))
u.Z.a(new P.bl(q,p))
W.S(r.a,r.b,s,!1,t.c)
return p}}
P.bk.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.i("h(1)")}}
P.bl.prototype={
$0:function(){this.b.R(this.a.a)},
$S:0}
P.aK.prototype={}
P.Z.prototype={
h:function(a){return H.e(this.a)},
$if:1,
gE:function(){return this.b}}
P.ai.prototype={$icz:1}
P.bM.prototype={
$0:function(){var t=H.d(this.a)
t.stack=J.ar(this.b)
throw t},
$S:0}
P.aV.prototype={
al:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.b===$.i){a.$0()
return}P.cQ(q,q,this,a,u.H)}catch(r){t=H.ap(r)
s=H.V(r)
P.bL(q,q,this,t,u.l.a(s))}},
am:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.b===$.i){a.$1(b)
return}P.cR(q,q,this,a,b,u.H,c)}catch(r){t=H.ap(r)
s=H.V(r)
P.bL(q,q,this,t,u.l.a(s))}},
ae:function(a,b){return new P.bH(this,b.i("0()").a(a),b)},
I:function(a){return new P.bG(this,u.M.a(a))},
af:function(a,b){return new P.bI(this,b.i("~(0)").a(a),b)},
a3:function(a,b){b.i("0()").a(a)
if($.i===C.b)return a.$0()
return P.cQ(null,null,this,a,b)},
L:function(a,b,c,d){c.i("@<0>").p(d).i("1(2)").a(a)
d.a(b)
if($.i===C.b)return a.$1(b)
return P.cR(null,null,this,a,b,c,d)},
ak:function(a,b,c,d,e,f){d.i("@<0>").p(e).p(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.i===C.b)return a.$2(b,c)
return P.eg(null,null,this,a,b,c,d,e,f)}}
P.bH.prototype={
$0:function(){return this.a.a3(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.bG.prototype={
$0:function(){return this.a.al(this.b)},
$S:1}
P.bI.prototype={
$1:function(a){var t=this.c
return this.a.am(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.a1.prototype={
h:function(a){var t,s,r,q=new P.b6(),p=this.a
if(p<0)return"-"+new P.a1(0-p).h(0)
t=q.$1(C.d.A(p,6e7)%60)
s=q.$1(C.d.A(p,1e6)%60)
r=new P.b5().$1(p%1e6)
return""+C.d.A(p,36e8)+":"+H.e(t)+":"+H.e(s)+"."+H.e(r)}}
P.b5.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:5}
P.b6.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:5}
P.f.prototype={
gE:function(){return H.V(this.$thrownJsError)}}
P.Y.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.ax(t)
return"Assertion failed"}}
P.aM.prototype={}
P.aF.prototype={
h:function(a){return"Throw of null."}}
P.x.prototype={
gG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gF:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gG()+p+n
if(!r.a)return m
t=r.gF()
s=P.ax(r.b)
return m+t+": "+s}}
P.a8.prototype={
gG:function(){return"RangeError"},
gF:function(){return""}}
P.az.prototype={
gG:function(){return"RangeError"},
gF:function(){var t,s=H.b_(this.b)
if(typeof s!=="number")return s.ap()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gl:function(a){return this.f}}
P.aP.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aN.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.av.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ax(t)+"."}}
P.a9.prototype={
h:function(a){return"Stack Overflow"},
gE:function(){return null},
$if:1}
P.aw.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.bv.prototype={
h:function(a){return"Exception: "+this.a}}
P.h.prototype={
h:function(a){return"null"}}
P.j.prototype={constructor:P.j,$ij:1,
h:function(a){return"Instance of '"+H.e(H.b9(this))+"'"},
toString:function(){return this.h(this)}}
P.aW.prototype={
h:function(a){return""},
$iQ:1}
P.bm.prototype={
gl:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.as.prototype={
h:function(a){return String(a)}}
W.at.prototype={
h:function(a){return String(a)}}
W.J.prototype={
sJ:function(a,b){a.height=b},
sM:function(a,b){a.width=b},
n:function(a,b){return a.getContext(b)},
$iJ:1}
W.N.prototype={
sm:function(a,b){a.fillStyle=b},
sv:function(a,b){a.strokeStyle=b},
B:function(a,b,c,d){a.fillText(b,c,d)},
$iN:1}
W.a0.prototype={}
W.b4.prototype={
h:function(a){return String(a)}}
W.p.prototype={
h:function(a){return a.localName},
ga0:function(a){return new W.C(a,"click",!1,u.G)},
ga1:function(a){return new W.C(a,"dblclick",!1,u.L)},
$ip:1}
W.a.prototype={$ia:1}
W.k.prototype={
W:function(a,b,c,d){u.o.a(c)
if(c!=null)this.a9(a,b,c,d)},
ad:function(a,b,c){return this.W(a,b,c,null)},
a9:function(a,b,c,d){return a.addEventListener(b,H.b1(u.o.a(c),1),d)},
$ik:1}
W.ay.prototype={
gl:function(a){return a.length}}
W.a3.prototype={}
W.P.prototype={$iP:1}
W.aD.prototype={
a2:function(a,b){return a.replace(b)},
h:function(a){return String(a)}}
W.m.prototype={$im:1}
W.a7.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.a6(a):t}}
W.aI.prototype={
gl:function(a){return a.length}}
W.y.prototype={}
W.c0.prototype={}
W.ab.prototype={}
W.C.prototype={}
W.aT.prototype={}
W.bu.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:13}
P.bF.prototype={
aj:function(a){if(a<=0||a>4294967296)throw H.d(P.dx("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.n.prototype={
h:function(a){return"Point("+this.a+", "+this.b+")"}}
P.b.prototype={
ga0:function(a){return new W.C(a,"click",!1,u.G)},
ga1:function(a){return new W.C(a,"dblclick",!1,u.L)}}
O.bW.prototype={
$1:function(a){var t
u.X.a(a)
t=this.a
if(t.a.Z())t.a=O.cw()},
$S:14}
O.ba.prototype={
N:function(){var t,s,r,q,p=this,o="40px Arial",n="center",m=document
C.w.ad(m,"keydown",new O.bc(p))
t=J.aq(m.querySelector("#up"))
s=t.$ti
r=s.i("~(1)?").a(new O.bd(p))
u.Z.a(null)
W.S(t.a,t.b,r,!1,s.c)
s=J.aq(m.querySelector("#right"))
r=s.$ti
W.S(s.a,s.b,r.i("~(1)?").a(new O.be(p)),!1,r.c)
r=J.aq(m.querySelector("#left"))
s=r.$ti
W.S(r.a,r.b,s.i("~(1)?").a(new O.bf(p)),!1,s.c)
s=J.aq(m.querySelector("#down"))
r=s.$ti
W.S(s.a,s.b,r.i("~(1)?").a(new O.bg(p)),!1,r.c)
m=J.di(m.querySelector("#snake"))
r=m.$ti
W.S(m.a,m.b,r.i("~(1)?").a(new O.bh()),!1,r.c)
if(p.Z()){m=p.b
q=u.t.a((m&&C.c).n(m,"2d"))
q.font=o
C.a.sm(q,"red")
q.textAlign=n
t=m.width
if(typeof t!=="number")return t.q()
s=m.height
if(typeof s!=="number")return s.q()
C.a.B(q,"GAME OVER",t/2,s/2)
q.font="20px Arial"
C.a.sm(q,"black")
q.textAlign=n
s=m.width
if(typeof s!=="number")return s.q()
m=m.height
if(typeof m!=="number")return m.q()
C.a.B(q,"click to restart",s/2,m/2+40)
return}if(p.Q>=50)if(window.location.search!=="?unlimited"){p.X()
m=p.b
q=u.t.a((m&&C.c).n(m,"2d"))
q.font=o
C.a.sm(q,"green")
q.textAlign=n
t=m.width
if(typeof t!=="number")return t.q()
s=m.height
if(typeof s!=="number")return s.q()
C.a.B(q,"YOU WON",t/2,s/2)
C.a.sv(q,"green")
q.lineWidth=10
q.strokeRect(0,0,m.width,m.height)
m=window.location;(m&&C.k).a2(m,"../profile/profile.html?won")}p.cx=!1
P.dC(new P.a1(1000*p.ch),new O.bi(p))},
u:function(a,b){var t,s,r=this
if(r.cx)return
r.cx=!0
t=a==null
if(t&&b==null)return
s=!t?a.keyCode:null
if(b!=null)s=b
if(s===37&&r.y!==10){r.y=-10
r.z=0}if(s===38&&r.z!==10){r.y=0
r.z=-10}if(s===39&&r.y!==-10){r.y=10
r.z=0}if(s===40&&r.z!==-10){r.y=0
r.z=10}},
X:function(){var t=this.b,s=u.t.a((t&&C.c).n(t,"2d"));(s&&C.a).sm(s,"white")
C.a.sv(s,"black")
s.fillRect(0,0,t.width,t.height)
s.strokeRect(0,0,t.width,t.height)},
ag:function(){C.f.a_(this.a,new O.bb(this))},
C:function(a){return C.d.a5(C.t.aj(a)*10,a+10)},
O:function(){var t=this,s=t.b,r=s.width
if(typeof r!=="number")return r.t()
t.r=t.C(r-10)
s=s.height
if(typeof s!=="number")return s.t()
t.x=t.C(s-10)
C.f.a_(t.a,new O.bj(t))
t.Y()},
Y:function(){var t=this,s=t.b,r=u.t.a((s&&C.c).n(s,"2d"));(r&&C.a).sm(r,"black")
C.a.sv(r,"black")
r.fillRect(t.r,t.x,10,10)
r.strokeRect(t.r,t.x,10,10)},
Z:function(){var t,s,r,q,p,o,n=this.a
for(t=n.length,s=4;s<t;++s){r=n[s]
q=n[0]
if(r.a===q.a&&r.b===q.b)return!0}if(0>=t)return H.X(n,0)
t=n[0]
r=t.a
q=this.b
p=q.width
if(typeof p!=="number")return p.t()
t=t.b
q=q.height
if(typeof q!=="number")return q.t()
o=t>q-10
return r<0||r>p-10||t<0||o}}
O.bc.prototype={
$1:function(a){return this.a.u(u.p.a(u.J.a(a)),null)},
$S:15}
O.bd.prototype={
$1:function(a){u.X.a(a)
return this.a.u(null,38)},
$S:2}
O.be.prototype={
$1:function(a){u.X.a(a)
return this.a.u(null,39)},
$S:2}
O.bf.prototype={
$1:function(a){u.X.a(a)
return this.a.u(null,37)},
$S:2}
O.bg.prototype={
$1:function(a){u.X.a(a)
return this.a.u(null,40)},
$S:2}
O.bh.prototype={
$1:function(a){var t=window.location;(t&&C.k).a2(t,"../profile/profile.html?mighty-snake")},
$S:16}
O.bi.prototype={
$0:function(){var t,s,r,q,p,o=this.a
o.X()
t=o.b
s=u.t.a((t&&C.c).n(t,"2d"))
s.font="20px Arial bold"
C.a.sm(s,"green")
s.textAlign="left"
C.a.B(s,C.d.h(o.Q),10,20)
t=o.y
r=o.z
q=o.a
if(0>=q.length)return H.X(q,0)
p=q[0]
r=H.aZ(q).c.a(new P.n(p.a+t,p.b+r,u.e))
if(!!q.fixed$length)H.bZ(P.bp("insert"))
q.splice(0,0,r)
t=q.length
if(0>=t)return H.X(q,0)
r=q[0]
if(r.a===o.r&&r.b===o.x){o.Q+=10
t=o.ch-=10
if(t<100)o.ch=t+5
o.O()}else{if(0>=t)return H.X(q,-1)
q.pop()}o.ag()
o.Y()
o.N()},
$S:0}
O.bb.prototype={
$1:function(a){var t,s,r
a=u.V.a(u.I.a(a))
t=this.a.b
s=u.t.a((t&&C.c).n(t,"2d"));(s&&C.a).sm(s,"lightgrey")
C.a.sv(s,"darkgrey")
t=a.a
r=a.b
s.fillRect(t,r,10,10)
s.strokeRect(t,r,10,10)},
$S:6}
O.bj.prototype={
$1:function(a){var t
u.I.a(a)
t=this.a
if(a.a===t.r&&a.b===t.x)t.O()},
$S:6};(function aliases(){var t=J.q.prototype
t.a6=t.h
t=J.F.prototype
t.a7=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0
t(P,"eq","dE",3)
t(P,"er","dF",3)
t(P,"es","dG",3)
s(P,"cV","ej",1)})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.j,null)
s(P.j,[H.c1,J.q,J.au,H.bn,P.f,H.b8,H.ae,H.K,H.u,H.aU,P.bJ,P.ac,P.v,P.aR,P.aa,P.aK,P.Z,P.ai,P.a1,P.a9,P.bv,P.h,P.aW,P.bm,W.c0,P.bF,P.n,O.ba])
s(J.q,[J.aA,J.a5,J.F,J.r,J.a6,J.L,W.k,W.N,W.b4,W.a,W.aD])
s(J.F,[J.aG,J.R,J.E])
t(J.b7,J.r)
s(J.a6,[J.a4,J.aB])
s(P.f,[P.aM,H.aC,H.aO,H.aH,P.Y,H.aS,P.aF,P.x,P.aP,P.aN,P.av,P.aw])
t(H.aE,P.aM)
s(H.K,[H.aL,H.bR,H.bS,H.bT,P.br,P.bq,P.bs,P.bt,P.bK,P.bw,P.bA,P.bx,P.by,P.bz,P.bD,P.bE,P.bC,P.bB,P.bk,P.bl,P.bM,P.bH,P.bG,P.bI,P.b5,P.b6,W.bu,O.bW,O.bc,O.bd,O.be,O.bf,O.bg,O.bh,O.bi,O.bb,O.bj])
s(H.aL,[H.aJ,H.a_])
t(H.aQ,P.Y)
t(H.af,H.aS)
t(P.aV,P.ai)
s(P.x,[P.a8,P.az])
t(W.a7,W.k)
s(W.a7,[W.p,W.a0])
s(W.p,[W.c,P.b])
s(W.c,[W.as,W.at,W.J,W.ay,W.aI])
t(W.a3,W.a0)
t(W.y,W.a)
s(W.y,[W.P,W.m])
t(W.ab,P.aa)
t(W.C,W.ab)
t(W.aT,P.aK)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{W:"int",ew:"double",w:"num",A:"String",bO:"bool",h:"Null",c3:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["h()","~()","~(m*)","~(~())","h(@)","A(W)","h(n<w*>*)","@(@)","@(@,A)","@(A)","h(~())","h(j,Q)","v<@>(@)","@(a)","h(m*)","~(a*)","h(a*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.dV(v.typeUniverse,JSON.parse('{"aG":"F","R":"F","E":"F","eN":"a","eR":"a","eM":"b","eS":"b","eO":"c","eU":"c","f5":"k","eV":"m","eP":"y","aA":{"bO":[]},"a5":{"h":[]},"F":{"O":[]},"r":{"c3":["1"],"cq":["1"]},"b7":{"r":["1"],"c3":["1"],"cq":["1"]},"a6":{"w":[]},"a4":{"W":[],"w":[]},"aB":{"w":[]},"L":{"A":[]},"aE":{"f":[]},"aC":{"f":[]},"aO":{"f":[]},"ae":{"Q":[]},"K":{"O":[]},"aL":{"O":[]},"aJ":{"O":[]},"a_":{"O":[]},"aH":{"f":[]},"aQ":{"f":[]},"aS":{"f":[]},"af":{"f":[]},"v":{"a2":["1"]},"Z":{"f":[]},"ai":{"cz":[]},"aV":{"ai":[],"cz":[]},"W":{"w":[]},"Y":{"f":[]},"aM":{"f":[]},"aF":{"f":[]},"x":{"f":[]},"a8":{"f":[]},"az":{"f":[]},"aP":{"f":[]},"aN":{"f":[]},"av":{"f":[]},"a9":{"f":[]},"aw":{"f":[]},"aW":{"Q":[]},"c":{"p":[],"k":[]},"as":{"p":[],"k":[]},"at":{"p":[],"k":[]},"J":{"p":[],"k":[]},"a0":{"k":[]},"p":{"k":[]},"ay":{"p":[],"k":[]},"a3":{"k":[]},"P":{"a":[]},"m":{"a":[]},"a7":{"k":[]},"aI":{"p":[],"k":[]},"y":{"a":[]},"ab":{"aa":["1"]},"C":{"ab":["1"],"aa":["1"]},"b":{"p":[],"k":[]}}'))
H.dU(v.typeUniverse,JSON.parse('{"aK":1}'))
0
var u=(function rtii(){var t=H.cW
return{n:t("Z"),C:t("f"),B:t("a"),Y:t("O"),d:t("a2<@>"),s:t("r<A>"),b:t("r<@>"),j:t("r<n<w*>*>"),T:t("a5"),g:t("E"),P:t("h"),K:t("j"),e:t("n<w*>"),l:t("Q"),N:t("A"),D:t("R"),L:t("C<a*>"),G:t("C<m*>"),c:t("v<@>"),a:t("v<W>"),y:t("bO"),m:t("bO(j)"),i:t("ew"),z:t("@"),W:t("@()"),v:t("@(j)"),Q:t("@(j,Q)"),S:t("W"),R:t("J*"),t:t("N*"),J:t("a*"),p:t("P*"),X:t("m*"),A:t("0&*"),_:t("j*"),I:t("n<w*>*"),V:t("n<w>*"),U:t("a2<h>?"),O:t("j?"),F:t("ac<@,@>?"),o:t("@(a)?"),Z:t("~()?"),q:t("w"),H:t("~"),M:t("~()")}})();(function constants(){C.c=W.J.prototype
C.a=W.N.prototype
C.w=W.a3.prototype
C.x=J.q.prototype
C.f=J.r.prototype
C.d=J.a4.prototype
C.e=J.L.prototype
C.y=J.E.prototype
C.k=W.aD.prototype
C.l=J.aG.prototype
C.h=J.R.prototype
C.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.m=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.r=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.o=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.q=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.p=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.j=function(hooks) { return hooks; }

C.t=new P.bF()
C.b=new P.aV()
C.u=new P.aW()
C.v=new P.a1(0)})();(function staticFields(){$.cC=null
$.z=0
$.cm=null
$.cl=null
$.cY=null
$.cT=null
$.d2=null
$.bP=null
$.bU=null
$.cf=null
$.T=null
$.ak=null
$.al=null
$.cb=!1
$.i=C.b
$.an=H.bY([],H.cW("r<j>"))})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"eQ","d5",function(){return H.ey("_$dart_dartClosure")})
t($,"eW","d6",function(){return H.B(H.bo({
toString:function(){return"$receiver$"}}))})
t($,"eX","d7",function(){return H.B(H.bo({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"eY","d8",function(){return H.B(H.bo(null))})
t($,"eZ","d9",function(){return H.B(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"f1","dc",function(){return H.B(H.bo(void 0))})
t($,"f2","dd",function(){return H.B(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"f0","db",function(){return H.B(H.cx(null))})
t($,"f_","da",function(){return H.B(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"f4","df",function(){return H.B(H.cx(void 0))})
t($,"f3","de",function(){return H.B(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"f6","ch",function(){return P.dD()})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.q,MediaError:J.q,NavigatorUserMediaError:J.q,OverconstrainedError:J.q,PositionError:J.q,WebGLRenderingContext:J.q,WebGL2RenderingContext:J.q,SQLError:J.q,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.as,HTMLAreaElement:W.at,HTMLCanvasElement:W.J,CanvasRenderingContext2D:W.N,Document:W.a0,DOMException:W.b4,Element:W.p,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,Window:W.k,DOMWindow:W.k,EventTarget:W.k,HTMLFormElement:W.ay,HTMLDocument:W.a3,KeyboardEvent:W.P,Location:W.aD,MouseEvent:W.m,DragEvent:W.m,PointerEvent:W.m,WheelEvent:W.m,Node:W.a7,HTMLSelectElement:W.aI,CompositionEvent:W.y,FocusEvent:W.y,TextEvent:W.y,TouchEvent:W.y,UIEvent:W.y,SVGAElement:P.b,SVGAnimateElement:P.b,SVGAnimateMotionElement:P.b,SVGAnimateTransformElement:P.b,SVGAnimationElement:P.b,SVGCircleElement:P.b,SVGClipPathElement:P.b,SVGDefsElement:P.b,SVGDescElement:P.b,SVGDiscardElement:P.b,SVGEllipseElement:P.b,SVGFEBlendElement:P.b,SVGFEColorMatrixElement:P.b,SVGFEComponentTransferElement:P.b,SVGFECompositeElement:P.b,SVGFEConvolveMatrixElement:P.b,SVGFEDiffuseLightingElement:P.b,SVGFEDisplacementMapElement:P.b,SVGFEDistantLightElement:P.b,SVGFEFloodElement:P.b,SVGFEFuncAElement:P.b,SVGFEFuncBElement:P.b,SVGFEFuncGElement:P.b,SVGFEFuncRElement:P.b,SVGFEGaussianBlurElement:P.b,SVGFEImageElement:P.b,SVGFEMergeElement:P.b,SVGFEMergeNodeElement:P.b,SVGFEMorphologyElement:P.b,SVGFEOffsetElement:P.b,SVGFEPointLightElement:P.b,SVGFESpecularLightingElement:P.b,SVGFESpotLightElement:P.b,SVGFETileElement:P.b,SVGFETurbulenceElement:P.b,SVGFilterElement:P.b,SVGForeignObjectElement:P.b,SVGGElement:P.b,SVGGeometryElement:P.b,SVGGraphicsElement:P.b,SVGImageElement:P.b,SVGLineElement:P.b,SVGLinearGradientElement:P.b,SVGMarkerElement:P.b,SVGMaskElement:P.b,SVGMetadataElement:P.b,SVGPathElement:P.b,SVGPatternElement:P.b,SVGPolygonElement:P.b,SVGPolylineElement:P.b,SVGRadialGradientElement:P.b,SVGRectElement:P.b,SVGScriptElement:P.b,SVGSetElement:P.b,SVGStopElement:P.b,SVGStyleElement:P.b,SVGElement:P.b,SVGSVGElement:P.b,SVGSwitchElement:P.b,SVGSymbolElement:P.b,SVGTSpanElement:P.b,SVGTextContentElement:P.b,SVGTextElement:P.b,SVGTextPathElement:P.b,SVGTextPositioningElement:P.b,SVGTitleElement:P.b,SVGUseElement:P.b,SVGViewElement:P.b,SVGGradientElement:P.b,SVGComponentTransferFunctionElement:P.b,SVGFEDropShadowElement:P.b,SVGMPathElement:P.b})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,Document:false,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,KeyboardEvent:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(O.d0,[])
else O.d0([])})})()
//# sourceMappingURL=snake.dart.js.map
