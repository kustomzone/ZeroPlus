

/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/color-spectrum..js ---- */

/*
$(".basic").spectrum({
    color: "#f00",
    change: function(color) {
        $("#basic-log").text("change called: " + color.toHexString());
    }
});
*/

$("#full").spectrum({
    color:                      "#A89A7A", // default background
    showInput:                       true,
    className:            "full-spectrum",
    showInitial:                     true,
    showPalette:                     true,
    showSelectionPalette:            true,
    maxSelectionSize:                  10,
    preferredFormat:                "hex",
    localStorageKey:      "spectrum.demo",
    
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});

/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/highlight.pack.js ---- */


!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){var n=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return n=n.map(function(e){return e.replace(/^lang(uage)?-/,"")}),n.filter(function(e){return N(e)||/no(-?)highlight/.test(e)})[0]}function o(e,n){var t={};for(var r in e)t[r]=e[r];if(n)for(var r in n)t[r]=n[r];return t}function i(e){var n=[];return function r(e,a){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?a+=o.nodeValue.length:1==o.nodeType&&(n.push({event:"start",offset:a,node:o}),a=r(o,a),t(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:o}));return a}(e,0),n}function c(e,r,a){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function i(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function c(e){l+="</"+t(e)+">"}function u(e){("start"==e.event?i:c)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=o();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(c);do u(g.splice(0,1)[0]),g=o();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(i)}else"start"==g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+n(a.substr(s))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var c={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");c[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?u("keyword",a.k):Object.keys(a.k).forEach(function(e){u(e,a.k[e])}),a.k=c}a.lR=t(a.l||/\b[A-Za-z0-9_]+\b/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function s(e,t,a,o){function i(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function c(e,n){return r(e.eR,n)?e:e.eW?c(e.parent,n):void 0}function f(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=x.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":E.classPrefix,o='<span class="'+a,i=t?"":"</span>";return o+=e+'">',o+n+i}function d(){if(!w.k)return n(y);var e="",t=0;w.lR.lastIndex=0;for(var r=w.lR.exec(y);r;){e+=n(y.substr(t,r.index-t));var a=g(w,r);a?(B+=a[1],e+=p(a[0],n(r[0]))):e+=n(r[0]),t=w.lR.lastIndex,r=w.lR.exec(y)}return e+n(y.substr(t))}function h(){if(w.sL&&!R[w.sL])return n(y);var e=w.sL?s(w.sL,y,!0,L[w.sL]):l(y);return w.r>0&&(B+=e.r),"continuous"==w.subLanguageMode&&(L[w.sL]=e.top),p(e.language,e.value,!1,!0)}function v(){return void 0!==w.sL?h():d()}function b(e,t){var r=e.cN?p(e.cN,"",!0):"";e.rB?(M+=r,y=""):e.eB?(M+=n(t)+r,y=""):(M+=r,y=t),w=Object.create(e,{parent:{value:w}})}function m(e,t){if(y+=e,void 0===t)return M+=v(),0;var r=i(t,w);if(r)return M+=v(),b(r,t),r.rB?0:t.length;var a=c(w,t);if(a){var o=w;o.rE||o.eE||(y+=t),M+=v();do w.cN&&(M+="</span>"),B+=w.r,w=w.parent;while(w!=a.parent);return o.eE&&(M+=n(t)),y="",a.starts&&b(a.starts,""),o.rE?0:t.length}if(f(t,w))throw new Error('Illegal lexeme "'+t+'" for mode "'+(w.cN||"<unnamed>")+'"');return y+=t,t.length||1}var x=N(e);if(!x)throw new Error('Unknown language: "'+e+'"');u(x);for(var w=o||x,L={},M="",k=w;k!=x;k=k.parent)k.cN&&(M=p(k.cN,"",!0)+M);var y="",B=0;try{for(var C,j,I=0;;){if(w.t.lastIndex=I,C=w.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}m(t.substr(I));for(var k=w;k.parent;k=k.parent)k.cN&&(M+="</span>");return{r:B,value:M,language:e,top:w}}catch(A){if(-1!=A.message.indexOf("Illegal"))return{r:0,value:n(t)};throw A}}function l(e,t){t=t||E.languages||Object.keys(R);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(N(n)){var t=s(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function f(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\n/g,"<br>")),e}function g(e,n,t){var r=n?x[n]:t,a=[e.trim()];return e.match(/(\s|^)hljs(\s|$)/)||a.push("hljs"),r&&a.push(r),a.join(" ").trim()}function p(e){var n=a(e);if(!/no(-?)highlight/.test(n)){var t;E.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,o=n?s(n,r,!0):l(r),u=i(t);if(u.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=c(u,i(p),r)}o.value=f(o.value),e.innerHTML=o.value,e.className=g(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){E=o(E,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function b(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){x[e]=n})}function m(){return Object.keys(R)}function N(e){return R[e]||R[x[e]]}var E={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},R={},x={};return e.highlight=s,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=v,e.registerLanguage=b,e.listLanguages=m,e.getLanguage=N,e.inherit=o,e.IR="[a-zA-Z][a-zA-Z0-9_]*",e.UIR="[a-zA-Z_][a-zA-Z0-9_]*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.CLCM={cN:"comment",b:"//",e:"$",c:[e.PWM]},e.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[e.PWM]},e.HCM={cN:"comment",b:"#",e:"$",c:[e.PWM]},e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e});hljs.registerLanguage("cpp",function(t){var i={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginaryintmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_tint_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_tint_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_tuint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_scharatomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llongatomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_tatomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_tatomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_tatomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_tatomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};return{aliases:["c","h","c++","h++"],k:i,i:"</",c:[t.CLCM,t.CBCM,t.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},t.CNM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line pragma",c:[{b:'include\\s*[<"]',e:'[>"]',k:"include",i:"\\n"},t.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:i,c:["self"]},{b:t.IR+"::"},{bK:"new throw return",r:0},{cN:"function",b:"("+t.IR+"\\s+)+"+t.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:i,c:[{b:t.IR+"\\s*\\(",rB:!0,c:[t.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:i,r:0,c:[t.CBCM]},t.CLCM,t.CBCM]}]}});hljs.registerLanguage("ruby",function(e){var b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",c={cN:"yardoctag",b:"@[A-Za-z]+"},a={cN:"value",b:"#<",e:">"},s={cN:"comment",v:[{b:"#",e:"$",c:[c]},{b:"^\\=begin",e:"^\\=end",c:[c],r:10},{b:"^__END__",e:"\\n$"}]},n={cN:"subst",b:"#\\{",e:"}",k:r},t={cN:"string",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},i={cN:"params",b:"\\(",e:"\\)",k:r},d=[t,a,s,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]},s]},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:b}),i,s]},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":",c:[t,{b:b}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[a,s,{cN:"regexp",c:[e.BE,n],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];n.c=d,i.c=d;var l="[>?]>",u="[\\w#]+\\(\\w+\\):\\d+:\\d+>",N="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",o=[{b:/^\s*=>/,cN:"status",starts:{e:"$",c:d}},{cN:"prompt",b:"^("+l+"|"+u+"|"+N+")",starts:{e:"$",c:d}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,c:[s].concat(o).concat(d)}});hljs.registerLanguage("apache",function(e){var r={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",r]},r,e.QSM]}}],i:/\S/}});hljs.registerLanguage("python",function(e){var r={cN:"prompt",b:/^(>>>|\.\.\.) /},b={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[r],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[r],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},l={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},c={cN:"params",b:/\(/,e:/\)/,c:["self",r,l,b]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[r,l,b,e.HCM,{v:[{cN:"function",bK:"def",r:10},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n]/,c:[e.UTM,c]},{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("javascript",function(r){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"},c:[{cN:"pi",r:10,v:[{b:/^\s*('|")use strict('|")/},{b:/^\s*('|")use asm('|")/}]},r.ASM,r.QSM,r.CLCM,r.CBCM,r.CNM,{b:"("+r.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[r.CLCM,r.CBCM,r.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[r.inherit(r.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[r.CLCM,r.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+r.IR,r:0}]}});hljs.registerLanguage("coffeescript",function(e){var c={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module global window document"},n="[A-Za-z$_][0-9A-Za-z$_]*",t={cN:"subst",b:/#\{/,e:/}/,k:c},r=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,t]},{b:/"/,e:/"/,c:[e.BE,t]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[t,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{cN:"property",b:"@"+n},{b:"`",e:"`",eB:!0,eE:!0,sL:"javascript"}];t.c=r;var i=e.inherit(e.TM,{b:n}),s="(\\(.*\\))?\\s*\\B[-=]>",o={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:c,c:["self"].concat(r)}]};return{aliases:["coffee","cson","iced"],k:c,i:/\/\*/,c:r.concat([{cN:"comment",b:"###",e:"###",c:[e.PWM]},e.HCM,{cN:"function",b:"^\\s*"+n+"\\s*=\\s*"+s,e:"[-=]>",rB:!0,c:[i,o]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:s,e:"[-=]>",rB:!0,c:[o]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[i]},i]},{cN:"attribute",b:n+":",e:":",rB:!0,rE:!0,r:0}])}});hljs.registerLanguage("http",function(){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",a={cN:"function",b:c+"\\(",rB:!0,eE:!0,e:"\\("};return{cI:!0,i:"[=/|']",c:[e.CBCM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[a,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:c,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBCM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[a,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});hljs.registerLanguage("ini",function(e){return{cI:!0,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[e.QSM,e.NM],r:0}]}]}});hljs.registerLanguage("objectivec",function(e){var t={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSData NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView NSView NSViewController NSWindow NSWindowController NSSet NSUUID NSIndexSet UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection NSURLSession NSURLSessionDataTask NSURLSessionDownloadTask NSURLSessionUploadTask NSURLResponseUIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},o=/[a-zA-Z@][a-zA-Z0-9_]*/,a="@interface @class @protocol @implementation";return{aliases:["m","mm","objc","obj-c"],k:t,l:o,i:"</",c:[e.CLCM,e.CBCM,e.CNM,e.QSM,{cN:"string",v:[{b:'@"',e:'"',i:"\\n",c:[e.BE]},{b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"}]},{cN:"preprocessor",b:"#",e:"$",c:[{cN:"title",v:[{b:'"',e:'"'},{b:"<",e:">"}]}]},{cN:"class",b:"("+a.split(" ").join("|")+")\\b",e:"({|$)",eE:!0,k:a,l:o,c:[e.UTM]},{cN:"variable",b:"\\."+e.UIR,r:0}]}});hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]},s={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},a={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,s,a,t]}});hljs.registerLanguage("markdown",function(){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|    )",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}});hljs.registerLanguage("java",function(e){var a=e.UIR+"(<"+e.UIR+">)?",t="false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",c="(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?",r={cN:"number",b:c,r:0};return{aliases:["jsp"],k:t,i:/<\//,c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",r:0,c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}]},e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw return",r:0},{cN:"function",b:"("+a+"\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.UIR+"\\s*\\(",rB:!0,r:0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:t,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},r,{cN:"annotation",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("diff",function(){return{aliases:["patch"],c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}});hljs.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},s={b:"->{",e:"}"},n={cN:"variable",v:[{b:/\$\d/},{b:/[\$\%\@](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/},{b:/[\$\%\@][^\s\w{]/,r:0}]},o={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},i=[e.BE,r,n],c=[n,e.HCM,o,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:!0},s,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,o,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",b:"-\\w\\b",r:0}];return r.c=c,s.c=c,{aliases:["pl"],k:t,c:c}});hljs.registerLanguage("makefile",function(e){var a={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[a]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,a]}]}});hljs.registerLanguage("cs",function(e){var r="abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",t=e.IR+"(<"+e.IR+">)?";return{aliases:["csharp"],k:r,i:/::/,c:[{cN:"comment",b:"///",e:"$",rB:!0,c:[{cN:"xmlDocTag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]},e.CLCM,e.CBCM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},e.ASM,e.QSM,e.CNM,{bK:"class namespace interface",e:/[{;=]/,i:/[^\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"new return throw await",r:0},{cN:"function",b:"("+t+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:r,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:r,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}});hljs.registerLanguage("json",function(e){var t={literal:"true false null"},i=[e.QSM,e.CNM],l={cN:"value",e:",",eW:!0,eE:!0,c:i,k:t},c={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:l}],i:"\\S"},n={b:"\\[",e:"\\]",c:[e.inherit(l,{cN:null})],i:"\\S"};return i.splice(i.length,0,c,n),{c:i,k:t,i:"\\S"}});hljs.registerLanguage("nginx",function(e){var r={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},b={eW:!0,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,r],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[r]},{cN:"regexp",c:[e.BE,r],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},r]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"title",b:e.UIR,starts:b}],r:0}],i:"[^\\s\\}]"}});hljs.registerLanguage("sql",function(e){var t={cN:"comment",b:"--",e:"$"};return{cI:!0,i:/[<>]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",e:/;/,eW:!0,k:{keyword:"abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}});hljs.registerLanguage("xml",function(){var t="[A-Za-z0-9\\._:-]+",e={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},c={eW:!0,i:/</,r:0,c:[e,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",c:[e],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[c],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[c],starts:{e:"</script>",rE:!0,sL:"javascript"}},e,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},c]}]}});hljs.registerLanguage("php",function(e){var c={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},i={cN:"preprocessor",b:/<\?(php)?|\?>/},a={cN:"string",c:[e.BE,i],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},n={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},i]},{cN:"comment",b:"__halt_compiler.+?;",eW:!0,k:"__halt_compiler",l:e.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[e.BE]},i,c,{b:/->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,a,n]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},a,n]}});


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/jquery.cssanim.coffee ---- */


(function() {
  jQuery.fn.cssSlideDown = function() {
    var elem;
    elem = this;
    elem.css({
      "opacity":        0,
      "margin-bottom":  0,
      "margin-top":     0,
      "padding-bottom": 0,
      "padding-top":    0,
      "display":   "none",
      "transform": "scale(0.8)"
    });
    setTimeout((function() {
      var height;
      elem.css("display", "");
      height = elem.outerHeight();
      elem.css({
        "height": 0,
        "display": ""
      }).cssLater("transition", "all 0.3s ease-out", 20);
      elem.cssLater({
        "height":       height,
        "opacity":           1,
        "margin-bottom":    "",
        "margin-top":       "",
        "padding-bottom":   "",
        "padding-top":      "",
        "transform":        "scale(1)"
      }, null, 40);
      return elem.one(transitionEnd, function() {
        return elem.css("transition", "").css("transform", "");
      });
    }), 300);
    return this;
  };

  jQuery.fn.fancySlideDown = function() {
    var elem;
    elem = this;
    return elem.css({
      "opacity": 0,
      "transform": "scale(0.9)"
    }).slideDown().animate({
      "opacity": 1,
      "scale": 1
    }, {
      "duration": 600,
      "queue": false,
      "easing": "easeOutBack"
    });
  };

  jQuery.fn.fancySlideUp = function() {
    var elem;
    elem = this;
    return elem.css("backface-visibility", "hidden").delay(600).slideUp(600).animate({
      "opacity": 0,
      "scale": 0.9
    }, {
      "duration": 600,
      "queue": false,
      "easing": "easeOutQuad"
    });
  };

  window.transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/jquery.cssanim.js ---- */


jQuery.cssHooks['scale'] = {
    get: function(elem, computed, extra) {
        var match = window.getComputedStyle(elem).transform.match("[0-9\.]+")
        if (match) {
            var scale = parseFloat(match[0])
            return scale
        } else {
            return 1.0
        }
    },
    set: function(elem, val) {
        //var transforms = $(elem).css("transform").match(/[0-9\.]+/g)
        var transforms = window.getComputedStyle(elem).transform.match(/[0-9\.]+/g)
        if (transforms) {
            transforms[0] = val
            transforms[3] = val
            //$(elem).css("transform", 'matrix('+transforms.join(", ")+")")
            elem.style.transform = 'matrix('+transforms.join(", ")+')'
            // elem.style.transform = 'translate3d(0px, 0px, 0px) matrix('+transforms.join(", ")+')'
        } else {
            elem.style.transform = "scale("+val+")"
        }
    }
}

jQuery.fx.step.scale = function(fx) {
    jQuery.cssHooks['scale'].set(fx.elem, fx.now)
};


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/jquery.csslater.coffee ---- */


(function() {
  jQuery.fn.readdClass = function(class_name) {
    var elem;
    elem = this;
    elem.removeClass(class_name);
    setTimeout((function() {
      return elem.addClass(class_name);
    }), 1);
    return this;
  };

  jQuery.fn.removeLater = function(time) {
    var elem;
    if (time == null) {
      time = 500;
    }
    elem = this;
    setTimeout((function() {
      return elem.remove();
    }), time);
    return this;
  };

  jQuery.fn.hideLater = function(time) {
    var elem;
    if (time == null) {
      time = 500;
    }
    elem = this;
    setTimeout((function() {
      return elem.css("display", "none");
    }), time);
    return this;
  };

  jQuery.fn.addClassLater = function(class_name, time) {
    var elem;
    if (time == null) {
      time = 5;
    }
    elem = this;
    setTimeout((function() {
      return elem.addClass(class_name);
    }), time);
    return this;
  };

  jQuery.fn.removeClassLater = function(class_name, time) {
    var elem;
    if (time == null) {
      time = 500;
    }
    elem = this;
    setTimeout((function() {
      return elem.removeClass(class_name);
    }), time);
    return this;
  };

  jQuery.fn.cssLater = function(name, val, time) {
    var elem;
    if (time == null) {
      time = 500;
    }
    elem = this;
    setTimeout((function() {
      return elem.css(name, val);
    }), time);
    return this;
  };

  jQuery.fn.toggleClassLater = function(name, val, time) {
    var elem;
    if (time == null) {
      time = 10;
    }
    elem = this;
    setTimeout((function() {
      return elem.toggleClass(name, val);
    }), time);
    return this;
  };

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/jquery.easing.1.3.js ---- */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/marked.min.js ---- */

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */
 
(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:cap[1]==="pre"||cap[1]==="script"||cap[1]==="style",text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=escape(this.smartypants(cap[0]));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/--/g,"—").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&([#\w]+);/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/utils/Class.coffee ---- */


(function() {
  var Class,
    slice = [].slice;

  Class = (function() {
    function Class() {}

    Class.prototype.trace = true;

    Class.prototype.log = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (!this.trace) {
        return;
      }
      if (typeof console === 'undefined') {
        return;
      }
      args.unshift("[" + this.constructor.name + "]");
      console.log.apply(console, args);
      return this;
    };

    Class.prototype.logStart = function() {
      var args, name;
      name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (!this.trace) {
        return;
      }
      this.logtimers || (this.logtimers = {});
      this.logtimers[name] = +(new Date);
      if (args.length > 0) {
        this.log.apply(this, ["" + name].concat(slice.call(args), ["(started)"]));
      }
      return this;
    };

    Class.prototype.logEnd = function() {
      var args, ms, name;
      name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      ms = +(new Date) - this.logtimers[name];
      this.log.apply(this, ["" + name].concat(slice.call(args), ["(Done in " + ms + "ms)"]));
      return this;
    };

    return Class;

  })();

  window.Class = Class;

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/utils/Follow.coffee ---- */


(function() {
  var Follow,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Follow = (function(superClass) {
    extend(Follow, superClass);

    function Follow(elem) {
      this.elem = elem;
      this.handleMenuClick = bind(this.handleMenuClick, this);
      this.init = bind(this.init, this);
      this.menu = new Menu(this.elem);
      this.feeds = {};
      this.follows = {};
      this.elem.on("click", (function(_this) {
        return function() {
          if (Page.server_info.rev > 850) {
            if (_this.elem.hasClass("following")) {
              _this.showFeeds();
            } else {
              _this.followDefaultFeeds();
            }
          } else {
            Page.cmd("wrapperNotification", ["info", "Please update your ZeroNet client to use this feature"]);
          }
          return false;
        };
      })(this));
    }

    Follow.prototype.init = function() {
      if (!this.feeds) {
        return;
      }
      return Page.cmd("feedListFollow", [], (function(_this) {
        return function(follows1) {
          var is_default_feed, menu_item, param, query, ref, ref1, title;
          _this.follows = follows1;
          ref = _this.feeds;
          for (title in ref) {
            ref1 = ref[title], query = ref1[0], menu_item = ref1[1], is_default_feed = ref1[2], param = ref1[3];
            if (_this.follows[title] && indexOf.call(_this.follows[title][1], param) >= 0) {
              menu_item.addClass("selected");
            } else {
              menu_item.removeClass("selected");
            }
          }
          _this.updateListitems();
          return _this.elem.css("display", "inline-block");
        };
      })(this));
    };

    Follow.prototype.addFeed = function(title, query, is_default_feed, param) {
      var menu_item;
      if (is_default_feed == null) {
        is_default_feed = false;
      }
      if (param == null) {
        param = "";
      }
      menu_item = this.menu.addItem(title, this.handleMenuClick);
      return this.feeds[title] = [query, menu_item, is_default_feed, param];
    };

    Follow.prototype.handleMenuClick = function(item) {
      item.toggleClass("selected");
      this.updateListitems();
      this.saveFeeds();
      return true;
    };

    Follow.prototype.showFeeds = function() {
      return this.menu.show();
    };

    Follow.prototype.followDefaultFeeds = function() {
      var is_default_feed, menu_item, param, query, ref, ref1, title;
      ref = this.feeds;
      for (title in ref) {
        ref1 = ref[title], query = ref1[0], menu_item = ref1[1], is_default_feed = ref1[2], param = ref1[3];
        if (is_default_feed) {
          menu_item.addClass("selected");
          this.log("Following", title);
        }
      }
      this.updateListitems();
      return this.saveFeeds();
    };

    Follow.prototype.updateListitems = function() {
      if (this.menu.elem.find(".selected").length > 0) {
        return this.elem.addClass("following");
      } else {
        return this.elem.removeClass("following");
      }
    };

    Follow.prototype.saveFeeds = function() {
      return Page.cmd("feedListFollow", [], (function(_this) {
        return function(follows) {
          var is_default_feed, item, menu_item, param, params, query, ref, ref1, title;
          _this.follows = follows;
          ref = _this.feeds;
          for (title in ref) {
            ref1 = ref[title], query = ref1[0], menu_item = ref1[1], is_default_feed = ref1[2], param = ref1[3];
            if (follows[title]) {
              params = (function() {
                var i, len, ref2, results;
                ref2 = follows[title][1];
                results = [];
                for (i = 0, len = ref2.length; i < len; i++) {
                  item = ref2[i];
                  if (item !== param) {
                    results.push(item);
                  }
                }
                return results;
              })();
            } else {
              params = [];
            }
            if (menu_item.hasClass("selected")) {
              params.push(param);
            }
            if (params.length === 0) {
              delete follows[title];
            } else {
              follows[title] = [query, params];
            }
          }
          return Page.cmd("feedFollow", [follows]);
        };
      })(this));
    };

    return Follow;

  })(Class);

  window.Follow = Follow;

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/utils/InlineEditor.coffee ---- */


(function() {
  var InlineEditor,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  InlineEditor = (function() {
    function InlineEditor(elem1, getContent, saveContent, getObject) {
      this.elem            = elem1;
      this.getContent      = getContent;
      this.saveContent     = saveContent;
      this.getObject       = getObject;
      this.cancelEdit      = bind(this.cancelEdit, this);
      this.deleteObject    = bind(this.deleteObject, this);
      this.saveEdit        = bind(this.saveEdit, this);
      this.stopEdit        = bind(this.stopEdit, this);
      this.startEdit       = bind(this.startEdit, this);
      
      // todo: show more topic body content (...)
      // var elemClass = this.elem[0].className;
      // var parentId = $(this.elem).parent().get(0).id;
      // if (elemClass === 'body' && parentId.substring(0,5) === 'topic') {
      //    this.edit_button     = $("<a href='#Edit' class='editable-edit icon-edit'></a>");
      // } else { // title or comment
      // }
      
      this.edit_button = $("<a href='#Edit' class='editable-edit icon-edit'></a>");
      this.edit_button.on("click", this.startEdit);
      this.elem.addClass("editable").before(this.edit_button);
      this.editor = null;
      this.elem.on("mouseenter", (function(_this) {
        return function(e) {
          var scrolltop, top;
          _this.edit_button.css("opacity", "0.5");
          scrolltop = $(window).scrollTop();
          top = _this.edit_button.offset().top - parseInt(_this.edit_button.css("margin-top"));
          if (scrolltop > top) {
            return _this.edit_button.css("margin-top", scrolltop - top + e.clientY - 20);
          } else {
            return _this.edit_button.css("margin-top", "");
          }
        };
      })(this));
      this.elem.on("mouseleave", (function(_this) {
        return function() {
          return _this.edit_button.css("opacity", "");
        };
      })(this));
      if (this.elem.is(":hover")) {
        this.elem.trigger("mouseenter");
      }
    }

    InlineEditor.prototype.startEdit = function() {
      var j, results;
      this.content_before = this.elem.html();
      this.editor = $("<textarea class='editor'></textarea>");
      this.editor.val(this.getContent(this.elem, "raw"));
      this.elem.after(this.editor);
      $(".editbg").css("display", "block").cssLater("opacity", 0.9, 10);
      this.elem.html((function() {
        results = [];
        for (j = 1; j <= 50; j++){ results.push(j); }
        return results;
      }).apply(this).join("fill the width"));
      this.copyStyle(this.elem, this.editor);
      this.elem.html(this.content_before);
      this.autoExpand(this.editor);
      this.elem.css("display", "none");
      if ($(window).scrollTop() === 0) {
        this.editor[0].selectionEnd = 0;
        this.editor.focus();
      }
      $(".editable-edit").css("display", "none");
      $(".editbar").css("display", "inline-block").addClassLater("visible", 10);
      $(".publishbar").css("opacity", 0);
      $(".editbar .object").text(this.getObject(this.elem).data("object") + "." + this.elem.data("editable"));
      $(".editbar .button").removeClass("loading");
      $(".editbar .save").off("click").on("click", this.saveEdit);
      $(".editbar .delete").off("click").on("click", this.deleteObject);
      $(".editbar .cancel").off("click").on("click", this.cancelEdit);
      if (this.getObject(this.elem).data("deletable")) {
        $(".editbar .delete").css("display", "").html("Delete " + this.getObject(this.elem).data("object").split(":")[0]);
      } else {
        $(".editbar .delete").css("display", "none");
      }
      window.onbeforeunload = function() {
        return 'Your unsaved blog changes will be lost!';
      };
      return false;
    };

    InlineEditor.prototype.stopEdit = function() {
      if (this.editor) {
        this.editor.remove();
      }
      this.editor = null;
      this.elem.css("display", "");
      $(".editbg").css("opacity", 0).cssLater("display", "none", 300);
      $(".editable-edit").css("display", "");
      $(".editbar").cssLater("display", "none", 1000).removeClass("visible");
      $(".publishbar").css("opacity", 1);
      return window.onbeforeunload = null;
    };

    InlineEditor.prototype.saveEdit = function() {
      var content;
      content = this.editor.val();
      $(".editbar .save").addClass("loading");
      this.saveContent(this.elem, content, (function(_this) {
        return function(content_html) {
          if (content_html) {
            $(".editbar .save").removeClass("loading");
            _this.stopEdit();
            if (typeof content_html === "string") {
              _this.elem.html(content_html);
            }
            return $('pre code').each(function(i, block) {
              return hljs.highlightBlock(block);
            });
          } else {
            return $(".editbar .save").removeClass("loading");
          }
        };
      })(this));
      return false;
    };

    InlineEditor.prototype.deleteObject = function() {
      var object_type;
      object_type = this.getObject(this.elem).data("object").split(":")[0];
      Page.cmd("wrapperConfirm", ["Are you sure you sure to delete this " + object_type + "?", "Delete"], (function(_this) {
        return function(confirmed) {
          $(".editbar .delete").addClass("loading");
          return Page.saveContent(_this.getObject(_this.elem), null, function() {
            return _this.stopEdit();
          });
        };
      })(this));
      return false;
    };

    InlineEditor.prototype.cancelEdit = function() {
      this.stopEdit();
      this.elem.html(this.content_before);
      $('pre code').each(function(i, block) {
        return hljs.highlightBlock(block);
      });
      return false;
    };

    InlineEditor.prototype.copyStyle = function(elem_from, elem_to) {
      var from_style;
      elem_to.addClass(elem_from[0].className);
      from_style = getComputedStyle(elem_from[0]);
      elem_to.css({
        fontFamily:    from_style.fontFamily,
        fontSize:      from_style.fontSize,
        fontWeight:    from_style.fontWeight,
        marginTop:     from_style.marginTop,
        marginRight:   from_style.marginRight,
        marginBottom:  from_style.marginBottom,
        marginLeft:    from_style.marginLeft,
        paddingTop:    from_style.paddingTop,
        paddingRight:  from_style.paddingRight,
        paddingBottom: from_style.paddingBottom,
        paddingLeft:   from_style.paddingLeft,
        lineHeight:    from_style.lineHeight,
        textAlign:     from_style.textAlign,
        color:         from_style.color,
        letterSpacing: from_style.letterSpacing
      });
      if (elem_from.innerWidth() < 1000) {
        return elem_to.css("minWidth", elem_from.innerWidth());
      }
    };

    InlineEditor.prototype.autoExpand = function(elem) {
      var editor;
      editor = elem[0];
      elem.height(1);
      elem.on("input", function() {
        if (editor.scrollHeight > elem.height()) {
          return elem.height(1).height(editor.scrollHeight + parseFloat(elem.css("borderTopWidth")) + parseFloat(elem.css("borderBottomWidth")));
        }
      });
      elem.trigger("input");
      return elem.on('keydown', function(e) {
        var s, val;
        if (e.which === 9) {
          e.preventDefault();
          s = this.selectionStart;
          val = elem.val();
          elem.val(val.substring(0, this.selectionStart) + "\t" + val.substring(this.selectionEnd));
          return this.selectionEnd = s + 1;
        }
      });
    };

    return InlineEditor;

  })();

  window.InlineEditor = InlineEditor;

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/utils/Menu.coffee ---- */


(function() {
  var Menu,
    slice = [].slice;

  Menu = (function() {
    function Menu(button) {
      this.button = button;
      this.elem = $(".menu.template").clone().removeClass("template");
      this.elem.appendTo("body");
      this.items = [];
    }

    Menu.prototype.show = function() {
      var button_pos;
      if (window.visible_menu && window.visible_menu.button[0] === this.button[0]) {
        window.visible_menu.hide();
        return this.hide();
      } else {
        button_pos = this.button.offset();
        this.elem.css({
          "top": button_pos.top + this.button.outerHeight(),
          "left": button_pos.left
        });
        this.button.addClass("menu-active");
        this.elem.addClass("visible");
        if (window.visible_menu) {
          window.visible_menu.hide();
        }
        return window.visible_menu = this;
      }
    };

    Menu.prototype.hide = function() {
      this.elem.removeClass("visible");
      this.button.removeClass("menu-active");
      return window.visible_menu = null;
    };

    Menu.prototype.addItem = function(title, cb) {
      var item;
      item = $(".menu-item.template", this.elem).clone().removeClass("template");
      item.html(title);
      item.on("click", (function(_this) {
        return function() {
          if (!cb(item)) {
            _this.hide();
          }
          return false;
        };
      })(this));
      item.appendTo(this.elem);
      this.items.push(item);
      return item;
    };

    Menu.prototype.log = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return console.log.apply(console, ["[Menu]"].concat(slice.call(args)));
    };

    return Menu;

  })();

  window.Menu = Menu;

  $("body").on("click", function(e) {
    if (window.visible_menu && e.target !== window.visible_menu.button[0] && $(e.target).parent()[0] !== window.visible_menu.elem[0]) {
      return window.visible_menu.hide();
    }
  });

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/utils/RateLimit.coffee ---- */


(function() {
  var call_after_interval, limits;

  limits = {};

  call_after_interval = {};

  window.RateLimit = function(interval, fn) {
    if (!limits[fn]) {
      call_after_interval[fn] = false;
      fn();
      return limits[fn] = setTimeout((function() {
        if (call_after_interval[fn]) {
          fn();
        }
        delete limits[fn];
        return delete call_after_interval[fn];
      }), interval);
    } else {
      return call_after_interval[fn] = true;
    }
  };

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/utils/Text.coffee ---- */


(function() {
  var Renderer, Text,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Renderer = (function(superClass) {
    extend(Renderer, superClass);

    function Renderer() {
      return Renderer.__super__.constructor.apply(this, arguments);
    }

    Renderer.prototype.image = function(href, title, text) {
      return "<code>![" + text + "](" + href + ")</code>";
    };

    return Renderer;

  })(marked.Renderer);

  Text = (function() {
    function Text() {}

    Text.prototype.toColor = function(text) {
      var hash, i, j, ref;
      hash = 0;
      for (i = j = 0, ref = text.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        hash += text.charCodeAt(i) * i;
      }
      return "hsl(" + (hash % 360) + ",30%,50%)";

      /*
              for i in [0..2]
                  value = (hash >> (i * 8)) & 0xFF
                  color += ('00' + value.toString(16)).substr(-2)
              return color
       */
    };

    Text.prototype.toMarked = function(text, options) {
      if (options == null) {
        options = {};
      }
      options["gfm"] = true;
      options["breaks"] = true;
      options["renderer"] = renderer;
      text = this.fixReply(text);
      text = marked(text, options);
      return this.fixHtmlLinks(text);
    };

    Text.prototype.fixHtmlLinks = function(text) {
      if (window.is_proxy) {
        return text.replace(/href="http:\/\/(127.0.0.1|localhost):43110/g, 'href="http://zero');
      } else {
        return text.replace(/href="http:\/\/(127.0.0.1|localhost):43110/g, 'href="');
      }
    };

    Text.prototype.fixLink = function(link) {
      var back;
      if (window.is_proxy) {
        back = link.replace(/http:\/\/(127.0.0.1|localhost):43110/, 'http://zero');
        return back.replace(/http:\/\/zero\/([^\/]+\.bit)/, "http://$1");
      } else {
        return link.replace(/http:\/\/(127.0.0.1|localhost):43110/, '');
      }
    };

    Text.prototype.toUrl = function(text) {
      return text.replace(/[^A-Za-z0-9]/g, "+").replace(/[+]+/g, "+").replace(/[+]+$/, "");
    };

    Text.prototype.fixReply = function(text) {
      return text.replace(/(>.*\n)([^\n>])/gm, "$1\n$2");
    };

    Text.prototype.toBitcoinAddress = function(text) {
      return text.replace(/[^A-Za-z0-9]/g, "");
    };

    Text.prototype.jsonEncode = function(obj) {
      return btoa(unescape(encodeURIComponent(JSON.stringify(obj, void 0, '\t'))));
    };

    return Text;

  })();

  window.is_proxy = window.location.pathname === "/";

  window.renderer = new Renderer();

  window.Text = new Text();

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/utils/Time.coffee ---- */


(function() {
  var Time;

  Time = (function() {
    function Time() {}

    Time.prototype.since = function(time) {
      var back, now, secs;
      now = +(new Date) / 1000;
      secs = now - time;
      if (secs < 60) {
        back = "Just now";
      } else if (secs < 60 * 60) {
        back = (Math.round(secs / 60)) + " minutes ago";
      } else if (secs < 60 * 60 * 24) {
        back = (Math.round(secs / 60 / 60)) + " hours ago";
      } else if (secs < 60 * 60 * 24 * 3) {
        back = (Math.round(secs / 60 / 60 / 24)) + " days ago";
      } else {
        back = "on " + this.date(time);
      }
      back = back.replace(/1 ([a-z]+)s/, "1 $1");
      return back;
    };

    Time.prototype.date = function(timestamp, format) {
      var display, parts;
      if (format == null) {
        format = "short";
      }
      parts = (new Date(timestamp * 1000)).toString().split(" ");
      if (format === "short") {
        display = parts.slice(1, 4);
      } else {
        display = parts.slice(1, 5);
      }
      return display.join(" ").replace(/( [0-9]{4})/, ",$1");
    };

    Time.prototype.timestamp = function(date) {
      if (date == null) {
        date = "";
      }
      if (date === "now" || date === "") {
        return parseInt(+(new Date) / 1000);
      } else {
        return parseInt(Date.parse(date) / 1000);
      }
    };

    return Time;

  })();

  window.Time = new Time;

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/TopicList.coffee ---- */


$(window).scroll(function(){
    if ($(this).scrollTop() > 1500) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},900);
    return false;
});
    
/*
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}
*/

// redraw x3 bug
var globel = []; // todo: rename array
var lastid = "";

(function() {
  var TopicList,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  TopicList = (function(superClass) {
    extend(TopicList, superClass);

    function TopicList() {
      this.submitTopicVote = bind(this.submitTopicVote, this);
      this.thread_sorter = null;
      this.parent_topic_uri = void 0;
      this.list_all = false;
      this.topic_parent_uris = {};
      this.topic_sticky_uris = {};
    }

    TopicList.prototype.actionList = function(parent_topic_id, parent_topic_user_address) {
      var i, len, ref, topic_sticky_uri;
      ref = Page.site_info.content.settings.topic_sticky_uris;
      for (i = 0, len = ref.length; i < len; i++) {
        topic_sticky_uri = ref[i];
        this.topic_sticky_uris[topic_sticky_uri] = 1;
      }
      $(".topics-loading").cssLater("top", "0px", 200);
      if (parent_topic_id) {
        $(".topics-title").html("&nbsp;");
        this.parent_topic_uri = parent_topic_id + "_" + parent_topic_user_address;
        Page.local_storage["topic." + parent_topic_id + "_" + parent_topic_user_address + ".visited"] = Time.timestamp();
        Page.cmd("wrapperSetLocalStorage", Page.local_storage);
      } else {
        // create banner ad
        if (!($('img').hasClass("banner"))) {
          $('<img />').attr("class", "banner").attr({ src:'/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/img/ZeroPlus.jpg', width:'360', height:'60' }).appendTo($('<a />').attr({ href:'?Home' }).appendTo($('.topics-title')));
          this.loadTopics("noanim");
        }
        // $(".topics-title").html("Zer\u2a01");
      }
      // new topic
      $(".topic-new-link").on("click", (function(_this) {
        return function() {
          $(".topic-new").fancySlideDown();
          $(".topic-new-link").slideUp();
          $(".topic-new").attr("style", "margin-left: 40px; margin-right: 40px;");
          $(".topics-title").attr("style", "opacity: 0; -webkit-transition: opacity 0.6s; -moz-transition: opacity 0.6s; transition: opacity 0.6s;");
          return false;
        };
      })(this));
      // save topic
      $(".topic-new .button-submit").on("click", (function(_this) {
        return function() {
          _this.submitCreateTopic();
          return false;
        };
      })(this));
      
      // edit profile
      $(".edit-profile").on("click", (function(_this) {
        member = Page.site_info.cert_user_id;
        query = "SELECT * FROM avatar WHERE avatar_owner = '" + member + "' ORDER BY avatar_added ASC LIMIT 1"; // latest avatar
        ZeroAPI.cmd("dbQuery", [query], (function(avatar_data) {
            if (avatar_data[0]) { // load current user avatar (if any)
                $("#avatar_preview").attr("src", avatar_data[0].avatar_image);
            }
        }));
        
        return function() {
          $(".profile-edit").fancySlideDown();
          $(".topic-new").slideUp();
          $(".topic-new-link").slideUp();
          $(".profile-edit").attr("style", "margin-left: 40px;");
          $(".topics-title").attr("style", "opacity: 0; -webkit-transition: opacity 0.6s; -moz-transition: opacity 0.6s; transition: opacity 0.6s;");
          return false;
        };
      })(this));
      
      // save profile
      $(".profile-edit .button-submit").on("click", (function(_this) {
        return function() {
          _this.submitUpdateProfile();
          return false;
        };
      })(this));
      
      // view more
      $(".topics-more").on("click", (function(_this) {
        return function() {
          _this.list_all = true;
          $(".topics-more").text("Loading...");
          _this.loadTopics("noanim");
          return false;
        };
      })(this));
      return this.initFollowButton();
    };

    TopicList.prototype.initFollowButton = function() {
      var username;
      this.follow = new Follow($(".feed-follow-list"));
      if (this.parent_topic_uri) {
        this.follow.addFeed("New topics in this group", "SELECT title AS title, body, added AS date_added, 'topic' AS type, '?Topic:' || topic.topic_id || '_' || topic_creator_json.directory AS url, parent_topic_uri AS param FROM topic LEFT JOIN json AS topic_creator_json ON (topic_creator_json.json_id = topic.json_id) WHERE parent_topic_uri IN (:params)", true, this.parent_topic_uri);
      } else {
        this.follow.addFeed("New topics", "SELECT title AS title, body, added AS date_added, 'topic' AS type, '?Topic:' || topic.topic_id || '_' || topic_creator_json.directory AS url FROM topic LEFT JOIN json AS topic_creator_json ON (topic_creator_json.json_id = topic.json_id) WHERE parent_topic_uri IS NULL", true);
        if (Page.site_info.cert_user_id) {
          username = Page.site_info.cert_user_id.replace(/@.*/, "");
          this.follow.addFeed("Username mentions", "SELECT 'mention' AS type, comment.added AS date_added, topic.title, commenter_user.value || ': ' || comment.body AS body, topic_creator_json.directory AS topic_creator_address, topic.topic_id || '_' || topic_creator_json.directory AS row_topic_uri, '?Topic:' || topic.topic_id || '_' || topic_creator_json.directory AS url FROM topic LEFT JOIN json AS topic_creator_json ON (topic_creator_json.json_id = topic.json_id) LEFT JOIN comment ON (comment.topic_uri = row_topic_uri) LEFT JOIN json AS commenter_json ON (commenter_json.json_id = comment.json_id) LEFT JOIN json AS commenter_content ON (commenter_content.directory = commenter_json.directory AND commenter_content.file_name = 'content.json') LEFT JOIN keyvalue AS commenter_user ON (commenter_user.json_id = commenter_content.json_id AND commenter_user.key = 'cert_user_id') WHERE comment.body LIKE '%[" + username + "%' OR comment.body LIKE '%@" + username + "%'", true);
        }
        this.follow.addFeed("All comments", "SELECT 'comment' AS type, comment.added AS date_added, topic.title, commenter_user.value || ': ' || comment.body AS body, topic_creator_json.directory AS topic_creator_address, topic.topic_id || '_' || topic_creator_json.directory AS row_topic_uri, '?Topic:' || topic.topic_id || '_' || topic_creator_json.directory AS url FROM topic LEFT JOIN json AS topic_creator_json ON (topic_creator_json.json_id = topic.json_id) LEFT JOIN comment ON (comment.topic_uri = row_topic_uri) LEFT JOIN json AS commenter_json ON (commenter_json.json_id = comment.json_id) LEFT JOIN json AS commenter_content ON (commenter_content.directory = commenter_json.directory AND commenter_content.file_name = 'content.json') LEFT JOIN keyvalue AS commenter_user ON (commenter_user.json_id = commenter_content.json_id AND commenter_user.key = 'cert_user_id')");
      }
      return this.follow.init();
    };

    TopicList.prototype.loadTopics = function(type, cb) {
      // alert(type); // noanim
      var last_elem, query, where;
      if (type == null) {
        type = "list";
      }
      if (cb == null) {
        cb = false;
      }
      this.logStart("Load topics...");
      if (this.parent_topic_uri) {
        where = "WHERE parent_topic_uri = '" + this.parent_topic_uri + "' OR row_topic_uri = '" + this.parent_topic_uri + "'";
      } else {
        where = "WHERE topic.parent_topic_uri IS NULL AND (comment.added < " + (Date.now() / 1000 + 120) + " OR comment.added IS NULL)";
      }
      last_elem = $(".topics-list .topic.template");
      query = "SELECT\n COUNT(comment_id) AS comments_num, MAX(comment.added) AS last_comment, topic.added as last_added, CASE WHEN MAX(comment.added) IS NULL THEN topic.added ELSE MAX(comment.added) END as last_action,\n topic.*,\n topic_creator_user.value AS topic_creator_user_name,\n topic_creator_content.directory AS topic_creator_address,\n topic.topic_id || '_' || topic_creator_content.directory AS row_topic_uri,\n NULL AS row_topic_sub_uri,\n (SELECT COUNT(*) FROM topic_vote WHERE topic_vote.topic_uri = topic.topic_id || '_' || topic_creator_content.directory)+1 AS votes\nFROM topic\nLEFT JOIN json AS topic_creator_json ON (topic_creator_json.json_id = topic.json_id)\nLEFT JOIN json AS topic_creator_content ON (topic_creator_content.directory = topic_creator_json.directory AND topic_creator_content.file_name = 'content.json')\nLEFT JOIN keyvalue AS topic_creator_user ON (topic_creator_user.json_id = topic_creator_content.json_id AND topic_creator_user.key = 'cert_user_id')\nLEFT JOIN comment ON (comment.topic_uri = row_topic_uri)\n" + where + "\nGROUP BY topic.topic_id, topic.json_id";
      if (!this.parent_topic_uri) {
        query += "\nUNION ALL\n\nSELECT\n COUNT(comment_id) AS comments_num, MAX(comment.added) AS last_comment, MAX(topic_sub.added) AS last_added, CASE WHEN MAX(topic_sub.added) > MAX(comment.added) THEN MAX(topic_sub.added) ELSE MAX(comment.added) END as last_action,\n topic.*,\n topic_creator_user.value AS topic_creator_user_name,\n topic_creator_content.directory AS topic_creator_address,\n topic.topic_id || '_' || topic_creator_content.directory AS row_topic_uri,\n topic_sub.topic_id || '_' || topic_sub_creator_content.directory AS row_topic_sub_uri,\n (SELECT COUNT(*) FROM topic_vote WHERE topic_vote.topic_uri = topic.topic_id || '_' || topic_creator_content.directory)+1 AS votes\nFROM topic\nLEFT JOIN json AS topic_creator_json ON (topic_creator_json.json_id = topic.json_id)\nLEFT JOIN json AS topic_creator_content ON (topic_creator_content.directory = topic_creator_json.directory AND topic_creator_content.file_name = 'content.json')\nLEFT JOIN keyvalue AS topic_creator_user ON (topic_creator_user.json_id = topic_creator_content.json_id AND topic_creator_user.key = 'cert_user_id')\nLEFT JOIN topic AS topic_sub ON (topic_sub.parent_topic_uri = topic.topic_id || '_' || topic_creator_content.directory)\nLEFT JOIN json AS topic_sub_creator_json ON (topic_sub_creator_json.json_id = topic_sub.json_id)\nLEFT JOIN json AS topic_sub_creator_content ON (topic_sub_creator_content.directory = topic_sub_creator_json.directory AND topic_sub_creator_content.file_name = 'content.json')\nLEFT JOIN comment ON (comment.topic_uri = row_topic_sub_uri)\nWHERE topic.type = \"group\"\nGROUP BY topic.topic_id";
      }
      if (!this.list_all && !this.parent_topic_uri) {
        query += " ORDER BY last_action DESC LIMIT 30";
      }
      // alert(query);
      return Page.cmd("dbQuery", [query], (function(_this) {
        return function(topics) {
          // alert(typeof topics) // object (should be array!?)
          var elem, i, len, topic, topic_parent, topic_uri;
          topics.sort(function(a, b) {
            var booster_a, booster_b;
            booster_a = booster_b = 0;
            if (window.TopicList.topic_sticky_uris[a.row_topic_uri]) {
              booster_a = window.TopicList.topic_sticky_uris[a.row_topic_uri] * 10000000;
            }
            if (window.TopicList.topic_sticky_uris[b.row_topic_uri]) {
              booster_b = window.TopicList.topic_sticky_uris[b.row_topic_uri] * 10000000;
            }
            return Math.max(b.last_comment + booster_b, b.last_added + booster_b) - Math.max(a.last_comment + booster_a, a.last_added + booster_a);
          });
          for (i = 0, len = topics.length; i < len; i++) {
            topic = topics[i];
            topic_uri = topic.row_topic_uri;
            if (topic.last_added) {
              topic.added = topic.last_added;
            }
            if (_this.parent_topic_uri && topic_uri === _this.parent_topic_uri) {
              topic_parent = topic;
              continue;
            }
            elem = $("#topic_" + topic_uri);
            if (elem.length === 0) {
              elem = $(".topics-list .topic.template").clone().removeClass("template").attr("id", "topic_" + topic_uri);
              if (type !== "noanim") {
                elem.cssSlideDown();
              }
            }
            elem.insertAfter(last_elem);
            last_elem = elem;
            _this.applyTopicData(elem, topic);
          }
          Page.addInlineEditors();
          $("body").css({
            "overflow": "auto",
            "height": "auto"
          });
          _this.logEnd("Load topics...");
          if (parseInt($(".topics-loading").css("top")) > -30) {
            $(".topics-loading").css("top", "-30px");
          } else {
            $(".topics-loading").remove();
          }
          if (_this.parent_topic_uri) {
            $(".topics-title").html("<span class='parent-link'><a href='?Main'>Main</a> &rsaquo;</span> " + topic_parent.title);
          }
          $(".topics").css("opacity", 1);
          if (topics.length === 0) {
            if (Page.site_info.bad_files) {
              $(".message-big").text("Initial sync in progress...");
            } else {
              $(".message-big").text("Welcome! :)");
              $(".topic-new-link").trigger("click");
            }
            $(".message-big").css("display", "block").cssLater("opacity", 1);
          } else {
            $(".message-big").css("display", "none");
          }
          if (topics.length === 30) {
            $(".topics-more").css("display", "block");
          } else {
            $(".topics-more").css("display", "none");
          }
          if (cb) {
            return cb();
          }
        };
      })(this));
    };
    
    TopicList.prototype.applyTopicData = function(elem, topic, type) {
      var body, image, last_action, title_hash, topic_uri, url, url_match, visited;
      if (type == null) {
        type = "list";
      }
      title_hash = Text.toUrl(topic.title);
      topic_uri = topic.row_topic_uri;
      $(".title .title-link", elem).text(topic.title);
      $(".title .title-link, a.image, .comment-num", elem).attr("href", "?Topic:" + topic_uri + "/" + title_hash);
      
      // topic body only
      // $(".body", elem).attr('style', 'padding-bottom: 35px; position: relative; top: 27px; left: -60px;');
      // $(".title", elem).attr('style', 'position: relative; left: -5px;');
      // $(".title a.editable-edit.icon-edit", elem).attr('style', 'position: relative; left: -5px;');
      // $("a .editable-edit .icon-edit", elem).attr('style', 'position: relative; left: 20px; top: 20px;');
      // $(".info",  elem).attr('style', 'position: relative; left: 35px;');
      
      elem.data("topic_uri", topic_uri);
      body = topic.body;
      
      url_match = body.match(/http[s]{0,1}:\/\/[^"', \r\n)$]+/);
      if (type === "group") {
        $(elem).addClass("topic-group");
        $(".image .icon", elem).removeClass("icon-topic-chat").addClass("icon-topic-group");
        $(".link", elem).css("display", "none");
        $(".title .title-link, a.image, .comment-num", elem).attr("href", "?Topics:" + topic_uri + "/" + title_hash);
      } else if (url_match) {
        url = url_match[0];
        if (type !== "show") {
          body = body.replace(/http[s]{0,1}:\/\/[^"' \r\n)$]+$/g, "");
        }
        $(".image .icon", elem).removeClass("icon-topic-chat").addClass("icon-topic-link");
        $(".link", elem).css("display", "").attr("href", Text.fixLink(url));
        $(".link .link-url", elem).text(url);
      } else {
        $(".image .icon", elem).removeClass("icon-topic-link").addClass("icon-topic-chat");
        $(".link", elem).css("display", "none");
      }
      // thumbnails currently not shown (topic.image_thumb left as 'null' if gif etc)
      if (topic.image && !(lastid === elem[0].id)) {
       // stops double posting of images
       if (($.inArray(elem[0].id, globel)) && !($('img').hasClass(elem[0].id))) {
        $(".image .icon", elem).attr("id", elem[0].id);
        // $(".image .icon", elem).attr("style", "display: none;");
        var img = $("<img id='new_image' style='max-width: 875px; max-height: 875px; border: 1px solid #DAD8D4;'>"); // create img
        img.attr("class", elem[0].id);
        img.attr("src", topic.image);
        // todo: "missing image" background
        // img.attr("style", "background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAFoCAMAAADw7LpjAAAAe1BMVEX4+Pjc3Nz5+fnd3d3U1NTv7+/e3t7m5ubV1dX29vb09PTs7Ozz8/Ph4eH19fXf39/p6eng4ODi4uLx8fHt7e3w8PDo6Ojj4+Pl5eXk5OTy8vLn5+fr6+vu7u7q6ura2trX19fY2Njb29vZ2dnS0tLT09P6+vrW1tb39/dphktzAAAUX0lEQVR42u2d6YLqKhaFtyRqnGdLrbLUqnNb3/8J26ilicYECCQMa//p07c0A3wCC9YGCiYLohMCUUMQ21AQTMZdEIiog7/h14Q+R43G5KsDBBFV43eaDxoBUb/dagSD+QkIIqrEjxYfQRCs6O9fHxgKIirEr98OGsF0e2n34rYwaLTafSCIqIa/7rJ1Hvn1ziO/K3LU+Zo0Gi2oEUQV+CVpo1cmEQit2mOb7G/p0StvVo9eGYHQqT0eioNe/raeYSiI0Kc9nuZcKN06zgcNqBGENu0xfpl1fiKNht/nj4zGQxCIUK49erH2WHafGr3nRvKiRgZQIwjFve92etYYq81T70oZn5ytzkPBaRP9MEIdfrN19moHZX66OY1XSaBGEKq0x2fcrWat99K77jpWI59QIwgF/A1j7TH6zhQWlP8lqBFEee0xuGqPTJRIptlEILh734LhHBUPHKFGEPLao0jQUiG+GdIZgRDQHrlTelTYgWdMHiIQ3NqjQEYUgpW1fIJAFHJzXdYtnEgpxgqmfYSM9uA0thDX1WDaRwjhd7X28chXPqRg2kcI8CdibuYF6majhhpBcJEy4k3vID1cIzzWHkJ9pQBN6VQ6BOKdWlgLqAWSuT5sMog3LVRLtIUSJAmmfUTBGE1wxliYI5j2EdnaQ27NTBwjghpBvGJ0MdxL9IwyEF3mGWHaRyS0wVp2pYIk73hZaYFpH/GnPWSdo7IAUWcO0z7i9Gd6mXxJigIqeWOoEWiPi/ZgkhiUoAemfeBX3rFM5e4P077X+Cmofqr9J4CwVnuo6ABLc1N6EICwWHuUlwAKqPkz7UONeKU9FE2CqICm3EQQwkbtoWwamBQ9kfxUOMI+7aFwIUwVMPKLgQjL8FO7f586XGDa90N7KDZDqaRFzhCGsAi/k/IFWKWswLTveO+rwRBPep4RasRB/G7neKitWuWcwLTvKH+abMgaKDmPUyewyTiGn1iyb70AnojBtO+c9tC1MYYeREQ2B0HYoT00rTKQtqduIoXYDfz0bo6mDw8Nc0aIGrTHWO/crk44YNq3X3to3yBXKxt3zyLUiJ3ao4L1fc1kwLRv8eBvVoXDifS/x/WgCJj2LdQeFXg8K6DiMZAAgtbwl3e6lm0AVvk6CEVNxqCqJqMaJGDat6r3rXLQRJW91QymfUu0x6pK2VgdDjDt26E9Kt7tokoYcO6XJdqjyqWDalmAad9o/OpYPK2YBKl9rBEVaY867CNU/Xvi3C8j8avJQFcDBTDtm4dffRbiWhigoS6DN0KuPupLoiDffnEIs3qkugCAad+YwV+9p19RjW8O074B+NW9lUCdlQ/Tfu381T8SqrfqYdqvtfSv20nVqwVrrvm/tUeokRpqfqst2dceAFVvd4gQ0x71rweQCWVx9Z9BjVSqPXQm+9oFYLUOXMRjW3kTxj2G1DhM+5X+3A1yxZlS4TDtV1bQW6OOFiKDSgamfQ8L2aTK/jPtI4VYXzdj3PGSZlU1TPveDbRNq2ntuzH5rD1MnGowrp4NmqJyq/c1dLKVTCwrmPbVaw9Tl5uMrGOdexJ7rD2MXHA3tIb17crurfYw1HJkbAUTTPvKehOTTZfmVq+mk3m80x6G284JpecyfuYn3phdtTDtOz+KMb1iYdp3XMcZX68w7Uv3HVbMZFlQqzDtSxSZNafmkh3lCdO+WKdhzxZkltTobSUdaoRfe1ji57CmPmHa5/6pWuVos6c6TXRTGlidtm3EbVNlwrRfrD2sKyCyrITNyqgxUHvY1kXYVpEw7ecPkidflg2S7atHmPZzf5jMsmKxsBZh2s8okqatQxOys7xh2s8QZ1YuFVlagzDtJzsEm6enrK0/I3ZXNEZ72GsXsrj6YNp3YYnS5srz3rTvgkmDLK+Bhb+mfTdsarZXnLemfbqOQKw36tpfbTT89tC078xbE9oCtPsAEKMhb0e+5EqdeGPad0z7O1Nfvpj2XZv9dKi2fEghdm/TJpcqy3nTvosr4G5VldW+EE7t4ZgHiJyrJUdN+666IN1rKdw07TvrA3dxtGTSUWj4UXkIoGvdlX3Jvr4D6NSA3fFsaGfnzByZsnD+EEfnJ23tNu27vyOO0+tWti9b+XCQt+MLp7RpB7bslPf68FeDhdv7kLhuHlFpXSLGGaTkwS8Wsw/XLWbuG+hu5s3yaoRm2yZXbBcqtIcne9H54OBUY1+n4W/IGdGCKdEePqQZeGIhVmDaZ8vwyBnhoBzqPiVaeZJGcbERlzLtnxvA6MgdJZpAz86H8ieP51qvGaZ9yooyDWCZJtCG07UAoOSr3k376f/ezYhhuQZQtgkk5t12I54l017G9imbDHWD391zHAasTAMo2wSe1dLEtxRnv/YTuM5utNazJIC/YfQc/wWsXAMo0wQqmy8CgEYjOFsHg+UsAeDuFa2wxUo1gBJNoK/b3Pi3qc9ZjazazY4QgOINoGATGJterF0zBIDCamSxEANQuAEUbAI93urQz5316CQEoEwDKNAExob7IJj4udkrtljOAvBJhEg0gPxNIJ0Wq8FguvR0u2sA+AJgFIbHD1a6AeRtArvz5XLc83a3dQCYBDA6w3cI1vN+2REgdxPY6c8Ws03X33oAgH8APuB7MvRRV64B5GoCO+fwu/wB4BnAK3yrV/hKNIBxE8hOCABYBODvf+/hu4wAd5INYClTDAD0BsDJ+i18pRpANIEAkC9ykzjKNIBoAgFg6fL539sGMB443iz4UfSuCfxflYlMANCxsmGsM/vOlMBn9vY/weSj/fnZXg9ajUMUZkK4X3+2uWK1xTwg4gW+6c8+zKJv32rPN8N7miZ1Ns3P0W8WgxFnHtO/FQOAiGf4wiiTvvEmHjdS+ivU7Q0Ooex4MWwDQEQRfDF+h/XilD1gI0b9z50kggAQUQRfjMlh1c+VzGw43oUAEABqgC+WvdNNkVo9I7jaRwAQACqGL2ZkN+exrBCbtUIACACVwhc3f4Mu4y3T9jECgABQGXwxf8elgGOPzQ8RAASAiuCL+dv3MgB5u43CiW1+QgAIAN+/dpcfvpi/Q5O9EkzD2E0668cz0s/lyLqNEAACwLd9ZO+fwITdC3/xlF9v3fr53R+P+8Mu+Pie0RODggQCQN8AFKFjv00nybFOb3K4exCi2JWwb3130wiyvsiMIAAEgO8bwK90jlxn/PPqf4nC31U//bmZwIQgAASAb9lI+QSIej/ZvXcUHpapzHLWQwsIAEsDGLVSXxwOovdLJWFrluSIrUIACABLAnjYJMqILfKnV6L9V7JEO40IAALAUgCGywQZbF40rIui5OepiRYQAJYCMGqkB3XFSybhZ5LYdQgAAWAZABMzMGzLJWuTbSB3UjsABICZMI0eBUQb3gXexLIda4cAEADKA5hoADsBb6uZ0C3U56MWAALALJQCuTmVRLvJOQoEgAAwC4vxHQtaiKzsfot+DwACwKy+9HGmCE1EFu92iZMWgggAAkApAMPJoyFrCjlME7OHfHvLAEAAmNuTsoGQvS/6eWxCPUMXDADlANzf1SxtDoIW+/kdKK71OAAIADNWQTpi/Wj2zmxsGgJAACgBYDh9DAFbgklG0e5+6AIbA0AAKAXgXUlQX3ib6Oju4mdNdMEAUArAuRBDb+nlGT8CQACYsb+pUC/6rv/m2mMVAALAnCVdgWW4h5H6UbQNAAgAJQBM6IiBOIAPCc2jYAAgAMxZT2Pi2w0l8R2FABAAigP4kwAwKgPgBAACwJIAogUEgHWOASfiAIrhCwAB4AtCv3czFvuQECGPuwUQIQBQYh5wP7sD+Ck+D/iwcnV+ACAAlAAwsZo2FwdwJbSOBwABYI4dkGZ7YQDvqXFcpnwACABfoViLefreeAn57gUAAWDOahr3DgePfLrHd1cAEABKAfh7n4chUTtMIimEy0sIAAFgBhWJtHSxPjhhZOBLTQeAADB3EChoyEqYqTlvBQABYN5qBg1/RJrAxxQi5yoKAASA+VvDsG+RLccfTSfn5jAAEADm57adTvyOmIR64c2nA4AAMH82T2QyOrmtPucMIgAEgAV96bkTjo7iX+phf0AAKA9gaotyzsyQcJS8UwM7pALAEgCGH0kwuPY4CBI7Y3HP3gBAAPgmEsfEEQeBKf64t4gGgACwOLstLq1VFBXYAIfJY0W4jawAEAAWGvtOl4O6DjnfjI7tZImyHvfMDQAEgG9jnjp+q//2rK4oDFLHuorsKAMAAWCOsSB9WuE8iMIs/Hbj1FmFdBLIpQOAAPA9HI1h+iTg03y0D5PtYHQmMvgepk8VpqnA6jEABIA5dLQ6T8eh02Y82R3DWxx3rfbilD6vmsT2kwGAADB3bvmJwDNfNJzNx+3Vqr3sLbrEnv9OYvsZAUAAmN8Gdl8AIWK3IHot1rWYhRoAAsCCceBGgBAaTkQt/AAQABZo4R7jLSy2aIheHgACwCICo3WH8RXpeC++oy8ABICFkPz0qBATYrNRJHFtAAgAORrByYKxfPz6673MpQEgAOTi5Dho0rux4PkPm/VB8sIAEAByIhiM+/Q680KMDeeDfRgdASAA1AhgvOh7GC0XQ7rOANJ1OrAz+5ruokj6ogDQrxcuA+B16Xc3Wo/nzcVsNmtuv9uTxj4MoxKXBIC+vO6m3ykN4A3CGLn9/hj/oxR8aQA7ftWJXy9Lm9XnRg2AiuMBYL/ZJwKALr4q6y5bP+3NyWwAu98f4y4BQPfedPg1aTRa25PhAA6/po1Jr0MA0LH3nA/O+LX7ZDqAp+G41QimW0+qxpO3pMVHEATrxd/oymQA/x525sVQ0It3pH47SDcqJgOYbK4JADrwimft0WhMvjqphEmTAYwHrN+jRmM0HhIAtP0FOxftsUwLS9MBPLfal5/NwHk14vzrbafn3velM2O9f6FR8W/FXgYOs9V5KDhtut0Pu/1ytFif6/Bj8Wod6G6bRsW2TxmP35yeH3/ltBpx+dXO2iPuxeZZL3lPKDIlKHv80IvVyKfDasRdAKk7HsXaw+5xPA3HbqsRZ9+r07tqD2b5G57b8c+37TgANLbWmrH2WG1c6LrOauQyknVTjTj5Tq7VmFO/J+cBdLLPuo8oCABi1F6rpnJtYtq113F33uI6qxS4pkbcehm3Z25vNpmMeXUAaIj2cH3tik7bQeCWTcadF/Fj9T7bWwEADdAe3viXru4yV35orrzF3PU107QaCZwx7TvxDl552B17YQfegDarS4PgVzatK6Z96yvNsSGRd4Ne2x//IgpHPmVyP8l+2396lj/83LVpMeHBh+0TnzY/uosLA6JF0LRdjdj74G4ujYqPQSyfgLK19qg7brloDpFRI1bbfyx9amftcXJ9gcUGSDufOTvZ12ME7bWAk7WlvQB+KTViqWnfuufNS/b1W43YmQZoWTXeRtzfQ+D3pmwmlpUNWfkrR+/rTO9g06M6nJyorIgWto2P7XlQp9Oz/Z0hsOUxHd+gQuk4xSrTviVP6foWPWpLK2NLWABY6hk9MtyrUiO2mPYteEL7HR+1qJH0sQAAULokr4Z7aA+5bsN4NWL40/lquFczcL66xc0eOJv9cN4k++opPmbBz9foR/PnuBZ/BzDmPphvyb6eSjhTH8up7H8TOhJTJ7HMrF9oD7VDaYOn8Y18puti0hiGe3X9yXUh08AftIlP5HWyry4ETbVyGPc8SPbVpkYuu8eaZmYz7GmQ7KtzZGOindeoinZ1J3jD1IhRpn0y8RcKVLT2MEbZKs15ENrCcF+dGjFmjE0oF98QNMu0b8ZDwHDv7VjHiGdAsm/las8Y0z6Z8HscINm3FjUSDOpfa6/9/m6frmUygmbM+Nd8d/dP1zJZjZiw5lnrvW/aA6aX2kY/9W/xXuetkexrihqpsQmo8cZI9jViKFizab+u2yLZ1xwEa60K8vJnhzCmM6rjlgyGe9MQrG84XsMdh96ermVyP1zXhET190Oyr6EI1jMlW/HdrNkzx081UsOiVKX3QrKv4QjWsCxfIQpW7Zvotxqp0JhU3Y3s2jnWYzVSrWm/stvgdC171EiV5vRqbmLf6QFeI3iqMD2nilvgdC0L1UhV46UK7nBL9oXpxSoEqzqPmar6LTHwZ6Ea0b9Jhear43QtmxGswrSv9do4Xct2NaLftK/xykj2dUGN6HaO6LswDPeOqBG93jldl72uKsJw78JQ8Ooe3uqpSj0XRbKvg2pEj2lfxyWR7OuiGtHUoam/4HXQgGRfxxDUNaRXfj2cruVqP6zHtK/6akj2dRhBHUMrpdfC6VquI6heXCq8kl65jjACQeXTa8pgwelaXqkRZaZ9VZfpINnXMzWiaIlV0UVwupZfakSdwV3FJXC6ln8IKjPtl78ATtfyVI2oMe2X/n5V1m2EaQiqqXky43eAsFKNKOj7yn0Xyb6eI1h+9F/imzhdC1F+/kP6e0j2RVxHYZctV6RngGW/htO1EHc1UmYNTO5LRp69jahtKHhzAcjQJPMVJPsiMtWIjA9K/AtI9kVkqxGprZdFP45kX8Q7WSDlhRf8NJJ9Ee8bJ5lsILHPwnCPyB+eCZv2BT6J07UQXAJVyLTP/blYaiPZF1EIiqBpn/NTMNwj9AgFvg8h2Rch0g8LTJVwfQSnayFE1QjvZHHxB5Dsi5BUIzzLZUV/xulaCGk1wmNWLvgrtAdCHsHb+Qi59OT+raTVCwE1Umjap1ztgWRfREkEi0z7JP1NBIIHwYJ2jKTbTgSCU43knZNK0qNHBIJbjbzXsiStnxEIETXyZjbv9T/QFoZ7hCY18rqe8fx/keyL0KdGMlZ06amlhOEeoQ3BLE9L6t9I9kXo7YdfTfuU1B4DJPsiNCP47Gu+/y9O10JUg+Als+MOGv1pDxjuERUh2EnmttFJ3yE4CMQbNfIw7ROSfRE19MP36RZCsi+iFgT/Jpy3axjuEfWokWnQaBG0B6I2NdKbNKgF7YGoDcHu+P/AjWk0BrpiAAAAAABJRU5ErkJggg==');");
        img.appendTo("#"+elem[0].id);
        globel.push(elem[0].id);
        lastid = elem[0].id;
      }
     }
      image = topic.image;
      if (type === "show") {
        $(".body", elem).html(Text.toMarked(body, {
          "sanitize": true
        }) + '<img src="' + image + '" style="display: none;">');
      } else {
        $(".body", elem).text(body);
      }
      if (window.TopicList.topic_sticky_uris[topic_uri]) {
        elem.addClass("topic-sticky");
      }
      if (type !== "show") {
        last_action = Math.max(topic.last_comment, topic.added);
        if (topic.type === "group") {
          $(".comment-num", elem).text("last activity");
          $(".added", elem).text(Time.since(last_action));
        } else if (topic.comments_num > 0) {
          $(".comment-num", elem).text(topic.comments_num + " ");
        }
        $(".comment-num", elem).append("<img src='img/speech-bubble.jpg' class='icon-speech-bubble'>");
		$(".added", elem).text(Time.since(last_action));
      }
      $(".user_name", elem).text(topic.topic_creator_user_name.replace(/@.*/, "")).attr("title", topic.topic_creator_user_name + ": " + topic.topic_creator_address);
      // load OP's avatar
      member = topic.topic_creator_user_name;
      // alert(member + " _ " + elem);
      query = "SELECT * FROM avatar WHERE avatar_owner = '" + member + "' ORDER BY avatar_added ASC LIMIT 1"; // latest avatar
      ZeroAPI.cmd("dbQuery", [query], (function(avatar_data) {
        if (avatar_data[0]) { // load current user avatar (if any)
          $(".user_avatar", elem).attr("src", avatar_data[0].avatar_image);
        } else {
          $(".user_avatar", elem).attr("style", "display: none;");
        }
      }));
      if (User.my_topic_votes[topic_uri]) {
        $(".score-inactive .score-num", elem).text(topic.votes - 1);
        $(".score-active .score-num", elem).text(topic.votes);
        $(".score", elem).addClass("active");
      } else {
        $(".score-inactive .score-num", elem).text(topic.votes);
        $(".score-active .score-num", elem).text(topic.votes + 1);
      }
      $(".score", elem).off("click").on("click", this.submitTopicVote);
      visited = Page.local_storage["topic." + topic_uri + ".visited"];
      if (!visited) {
        elem.addClass("visit-none");
      } else if (visited < last_action) {
        elem.addClass("visit-newcomment");
      }
      if (type === "show") {
        $(".added", elem).text(Time.since(topic.added));
      }
      if (topic.topic_creator_address === Page.site_info.auth_address) {
        $(elem).attr("data-object", "Topic:" + topic_uri).attr("data-deletable", "yes");
        $(".title .title-link", elem).attr("data-editable", "title").data("content", topic.title);
        return $(".body", elem).attr("data-editable", "body").data("content", topic.body);
      }
    };
    
    // save profile (avatar only so far)
    TopicList.prototype.submitUpdateProfile = function() {
      var avatar_image, avatar_file;
      if (!Page.site_info.cert_user_id) {
        Page.cmd("wrapperNotification", ["info", "Please, choose your account before creating a topic."]);
        return false;
      }
      avatar_image = $(".profile-edit #avatar_file_data").val();
      avatar_file  = $('#avatar_preview').attr('src');
      //<input type="file" name="avatar" id="avatar_file" class="text"><input type="hidden" id="avatar_file_data">
      $(".profile-edit .button-submit").addClass("loading");
      return User.getData((function(_this) {
        return function(data) {
          var avatar;
          avatar = {
            "avatar_id":    data.next_avatar_id,
            "avatar_image": avatar_image,
            "avatar_owner": Page.site_info.cert_user_id,
            "avatar_added": Time.timestamp()
          }
          data.avatar.push(avatar);
          data.next_avatar_id += 1;
          return User.publishData(data, function(res) {
            $(".profile-edit .button-submit").removeClass("loading");
            $(".profile-edit").slideUp();
            $(".topic-new-link").slideDown();
            // setTimeout((function() {
            //  return _this.loadAvatars();
            // }), 600);
            // $(".profile-edit #avatar_file_data").val("");
            return $(".profile-edit #avatar_file").val(""); // clear
          });
        };
      })(this));
    };
    
    TopicList.prototype.loadAvatars = function() {
        // alert("loading avatars..");
        // TODO.. show all avatars
    }
    
    // save topic
    TopicList.prototype.submitCreateTopic = function() {
      var title, body, image_file, image_thumb;
      if (!Page.site_info.cert_user_id) {
        Page.cmd("wrapperNotification", ["info", "Please, choose your account before creating a topic."]);
        return false;
      }
      title       = $(".topic-new #topic_title").val().trim();
      body        = $(".topic-new #topic_body").val().trim();
      image_file  = $(".topic-new #image_file_data").val();
      if ($('#image_preview').attr('class') === "image_gif") {
        image_thumb = ""; // don't store gif as thumbnails, they are not downscaled (see index.html)
      } else { // assume all other image types are okay.. jpg/png/bmp (todo: webp!) (todo: test bmp!)
        image_thumb = $('#image_preview').attr('src');
      }
      if (!title) {
        return $(".topic-new #topic_title").focus();
      }
      
      $(".topic-new .button-submit").addClass("loading");
      return User.getData((function(_this) {
        return function(data) {
          var topic;
          // testing: topic_uri
          var topic_uri = "?Topic:" + data.next_topic_id + "_" + Page.site_info.auth_address + "/"; // testing..
          topic = {
            "topic_id":    data.next_topic_id,
            "topic_uri":   topic_uri,
            "title":       title,
            "body":        body,
            "image":       image_file,
            "image_thumb": image_thumb,
            "added":       Time.timestamp()
          };
          if (_this.parent_topic_uri) {
            topic.parent_topic_uri = _this.parent_topic_uri;
          }
          data.topic.push(topic);
          data.next_topic_id += 1;
          return User.publishData(data, function(res) {
            $(".topic-new .button-submit").removeClass("loading");
            $(".topic-new").slideUp();
            $(".topic-new-link").slideDown();
            // setTimeout((function() {
            //   return _this.loadTopics();
            // }), 600);
            $(".topic-new #topic_body").val("");
            return $(".topic-new #topic_title").val("");
          });
        };
      })(this));
    };

    TopicList.prototype.submitTopicVote = function(e) {
      var elem, inner_path;
      if (!Page.site_info.cert_user_id) {
        Page.cmd("wrapperNotification", ["info", "Please, choose your account before upvoting."]);
        return false;
      }
      elem = $(e.currentTarget);
      elem.toggleClass("active").addClass("loading");
      inner_path = "data/users/" + User.my_address + "/data.json";
      User.getData((function(_this) {
        return function(data) {
          var topic_uri;
          if (data.topic_vote == null) {
            data.topic_vote = {};
          }
          topic_uri = elem.parents(".topic").data("topic_uri");
          if (elem.hasClass("active")) {
            data.topic_vote[topic_uri] = 1;
          } else {
            delete data.topic_vote[topic_uri];
          }
          return User.publishData(data, function(res) {
            return elem.removeClass("loading");
          });
        };
      })(this));
      return false;
    };
    return TopicList;
  })(Class);

  window.TopicList = new TopicList();

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/TopicShow.coffee ---- */


(function() {
  var TopicShow,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  TopicShow = (function(superClass) {
    extend(TopicShow, superClass);

    function TopicShow() {
      this.submitCommentVote = bind(this.submitCommentVote, this);
      return TopicShow.__super__.constructor.apply(this, arguments);
    }

    TopicShow.prototype.actionShow = function(topic_id, topic_user_address) {
      var textarea;
      this.topic_id = topic_id;
      this.topic_user_address = topic_user_address;
      this.topic_uri = this.topic_id + "_" + this.topic_user_address;
      this.topic = null;
      this.list_all = false;
      this.loadTopic();
      this.loadComments("noanim");
      $(".comment-new .button-submit-form").on("click", (function(_this) {
        return function() {
          _this.submitComment();
          return false;
        };
      })(this));
      textarea = $(".comment-new #comment_body");
      $(".comment-new #comment_body").on("input", (function(_this) {
        return function() {
          var current_size;
          if (User.rules.max_size) {
            if (textarea.val().length > 0) {
              current_size = User.rules.current_size + textarea.val().length + 90;
            } else {
              current_size = User.rules.current_size;
            }
            return User.setCurrentSize(current_size);
          }
        };
      })(this));
      $(".comments-more").on("click", (function(_this) {
        return function() {
          _this.list_all = true;
          $(".comments-more").text("Loading...");
          _this.loadComments("noanim");
          return false;
        };
      })(this));
      return this.initFollowButton();
    };

    TopicShow.prototype.initFollowButton = function() {
      this.follow = new Follow($(".feed-follow-show"));
      this.follow.addFeed("Comments in this topic", "SELECT 'comment' AS type, comment.added AS date_added, topic.title, commenter_user.value || ': ' || comment.body AS body, topic_creator_json.directory AS topic_creator_address, topic.topic_id || '_' || topic_creator_json.directory AS row_topic_uri, '?Topic:' || topic.topic_id || '_' || topic_creator_json.directory AS url FROM topic LEFT JOIN json AS topic_creator_json ON (topic_creator_json.json_id = topic.json_id) LEFT JOIN comment ON (comment.topic_uri = row_topic_uri) LEFT JOIN json AS commenter_json ON (commenter_json.json_id = comment.json_id) LEFT JOIN json AS commenter_content ON (commenter_content.directory = commenter_json.directory AND commenter_content.file_name = 'content.json') LEFT JOIN keyvalue AS commenter_user ON (commenter_user.json_id = commenter_content.json_id AND commenter_user.key = 'cert_user_id') WHERE row_topic_uri IN (:params)", true, this.topic_uri);
      return this.follow.init();
    };

    TopicShow.prototype.queryTopic = function(topic_id, topic_user_address) {
      return "SELECT topic.*, topic_creator_user.value AS topic_creator_user_name, topic_creator_content.directory AS topic_creator_address, topic.topic_id || '_' || topic_creator_content.directory AS row_topic_uri, (SELECT COUNT(*) FROM topic_vote WHERE topic_vote.topic_uri = topic.topic_id || '_' || topic_creator_content.directory)+1 AS votes FROM topic LEFT JOIN json AS topic_creator_json ON (topic_creator_json.json_id = topic.json_id) LEFT JOIN json AS topic_creator_content ON (topic_creator_content.directory = topic_creator_json.directory AND topic_creator_content.file_name = 'content.json') LEFT JOIN keyvalue AS topic_creator_user ON (topic_creator_user.json_id = topic_creator_content.json_id AND topic_creator_user.key = 'cert_user_id') WHERE topic.topic_id = " + topic_id + " AND topic_creator_address = '" + topic_user_address + "' LIMIT 1";
    };

    TopicShow.prototype.loadTopic = function(cb) {
      if (cb == null) {
        cb = false;
      }
      this.logStart("Loading topic...");
      $(".topic-full").attr("id", "topic_" + this.topic_uri);
      $(".topic-title").css("display", "none");
      return Page.cmd("dbQuery", [this.queryTopic(this.topic_id, this.topic_user_address)], (function(_this) {
        return function(res) {
          var parent_topic_id, parent_topic_user_address, ref;
          _this.topic = res[0];
          TopicList.applyTopicData($(".topic-full"), _this.topic, "show");
          if (_this.topic.parent_topic_uri) {
            $(".topic-title").html("&nbsp;").css("display", "");
            ref = _this.topic.parent_topic_uri.split("_"), parent_topic_id = ref[0], parent_topic_user_address = ref[1];
            Page.cmd("dbQuery", [_this.queryTopic(parent_topic_id, parent_topic_user_address)], function(parent_res) {
              var parent_topic;
              parent_topic = parent_res[0];
              return $(".topic-title").html("<span class='parent-link'><a href='?Main'>Main</a> &rsaquo;</span> <span class='parent-link'><a href='?Topics:" + parent_topic.row_topic_uri + "/" + (Text.toUrl(parent_topic.title)) + "'>" + parent_topic.title + "</a> &rsaquo;</span> " + _this.topic.title);
            });
          }
          $(".topic-full").css("opacity", 1);
          $("body").addClass("page-topic");
          _this.logEnd("Loading topic...");
          if (cb) {
            return cb();
          }
        };
      })(this));
    };

    TopicShow.prototype.loadComments = function(type, cb) {
      var query;
      if (type == null) {
        type = "show";
      }
      if (cb == null) {
        cb = false;
      }
      this.logStart("Loading comments...");
      query = "SELECT comment.*, user.value AS user_name, user_json_content.directory AS user_address, (SELECT COUNT(*) FROM comment_vote WHERE comment_vote.comment_uri = comment.comment_id || '_' || user_json_content.directory)+1 AS votes FROM comment LEFT JOIN json AS user_json_data ON (user_json_data.json_id = comment.json_id) LEFT JOIN json AS user_json_content ON (user_json_content.directory = user_json_data.directory AND user_json_content.file_name = 'content.json') LEFT JOIN keyvalue AS user ON (user.json_id = user_json_content.json_id AND user.key = 'cert_user_id') WHERE comment.topic_uri = '" + this.topic_id + "_" + this.topic_user_address + "' AND added < " + (Date.now() / 1000 + 120) + " ORDER BY added DESC";
      if (!this.list_all) {
        query += " LIMIT 60";
      }
      return Page.cmd("dbQuery", [query], (function(_this) {
        return function(comments) {
          var comment, comment_uri, elem, i, len;
          _this.logEnd("Loading comments...");
          $(".comments .comment:not(.template)").attr("missing", "true");
          for (i = 0, len = comments.length; i < len; i++) {
            comment = comments[i];
            comment_uri = comment.comment_id + "_" + comment.user_address;
            elem = $("#comment_" + comment_uri);
            if (elem.length === 0) {
              elem = $(".comment.template").clone().removeClass("template").attr("id", "comment_" + comment_uri).data("topic_uri", _this.topic_uri);
              if (type !== "noanim") {
                elem.cssSlideDown();
              }
              $(".reply", elem).on("click", function(e) {
                return _this.buttonReply($(e.target).parents(".comment"));
              });
              $(".score", elem).attr("id", "comment_score_" + comment_uri).on("click", _this.submitCommentVote);
            }
            _this.applyCommentData(elem, comment);
            elem.appendTo(".comments").removeAttr("missing");
          }
          $("body").css({
            "overflow": "auto",
            "height": "auto"
          });
          $(".comment[missing]").remove();
          Page.addInlineEditors();
          if (comments.length === 60) {
            $(".comments-more").css("display", "block");
          } else {
            $(".comments-more").css("display", "none");
          }
          if (comments.length > 0) {
            Page.local_storage["topic." + _this.topic_id + "_" + _this.topic_user_address + ".visited"] = comments[0].added;
          } else {
            Page.local_storage["topic." + _this.topic_id + "_" + _this.topic_user_address + ".visited"] = _this.topic.added;
          }
          Page.cmd("wrapperSetLocalStorage", Page.local_storage);
          if (cb) {
            return cb();
          }
        };
      })(this));
    };

    TopicShow.prototype.applyCommentData = function(elem, comment) {
      var comment_uri, image, user_name;
      user_name = comment.user_name;
      image = comment.image;
      if (!!image) {
        $(".body", elem).html(Text.toMarked(comment.body, {
          "sanitize": true
        }) + '<br /><img src="' + image + '">');
      } else {
        $(".body", elem).html(Text.toMarked(comment.body, {
          "sanitize": true
        }));
      }
      $(".user_name", elem).text(user_name.replace(/@.*/, "")).css({
        "color": Text.toColor(user_name)
      }).attr("title", user_name + ": " + comment.user_address);
      $(".added", elem).text(Time.since(comment.added)).attr("title", Time.date(comment.added, "long"));
      comment_uri = elem.attr("id").replace("comment_", "");
      if (User.my_comment_votes[comment_uri]) {
        $(".score-inactive .score-num", elem).text(comment.votes - 1);
        $(".score-active .score-num", elem).text(comment.votes);
        $(".score", elem).addClass("active");
      } else {
        $(".score-inactive .score-num", elem).text(comment.votes);
        $(".score-active .score-num", elem).text(comment.votes + 1);
      }
      if (comment.user_address === Page.site_info.auth_address) {
        $(elem).attr("data-object", "Comment:" + comment_uri + "@" + this.topic_uri).attr("data-deletable", "yes");
        return $(".body", elem).attr("data-editable", "body").data("content", comment.body);
      }
    };

    TopicShow.prototype.buttonReply = function(elem) {
      var body_add, elem_quote, post_id, user_name;
      this.log("Reply to", elem);
      user_name = $(".user_name", elem).text();
      post_id = elem.attr("id");
      body_add = "> [" + user_name + "](\#" + post_id + "): ";
      elem_quote = $(".body", elem).clone();
      $("blockquote", elem_quote).remove();
      body_add += elem_quote.text().trim("\n").replace(/\n/g, "\n> ");
      body_add += "\n\n";
      $(".comment-new #comment_body").val($(".comment-new #comment_body").val() + body_add);
      $(".comment-new #comment_body").trigger("input").focus();
      return false;
    };

    TopicShow.prototype.submitComment = function() {
      var body, comment_image_file;
      body = $(".comment-new #comment_body").val().trim();
      if (!body) {
        $(".comment-new #comment_body").focus();
        return;
      }
      comment_image_file = $(".comment-new #comment_file_data").val();
      $(".comment-new .button-submit").addClass("loading");
      return User.getData((function(_this) {
        return function(data) {
          var base, name;
          if ((base = data.comment)[name = _this.topic_uri] == null) {
            base[name] = [];
          }
          data.comment[_this.topic_uri].push({
            "comment_id": data.next_comment_id,
            "body": body,
            "image": comment_image_file,
            "added": Time.timestamp()
          });
          data.next_comment_id += 1;
          return User.publishData(data, function(res) {
            $(".comment-new .button-submit").removeClass("loading");
            if (res === true) {
              _this.log("File written");
              _this.loadComments();
              return $(".comment-new #comment_body").val("").delay(600).animate({
                "height": 72
              }, {
                "duration": 1000,
                "easing": "easeInOutCubic"
              });
            }
          });
        };
      })(this));
    };

    TopicShow.prototype.submitCommentVote = function(e) {
      var elem;
      if (!Page.site_info.cert_user_id) {
        Page.cmd("wrapperNotification", ["info", "Please, choose your account before upvoting."]);
        return false;
      }
      elem = $(e.currentTarget);
      elem.toggleClass("active").addClass("loading");
      User.getData((function(_this) {
        return function(data) {
          var comment_uri;
          if (data.comment_vote == null) {
            data.comment_vote = {};
          }
          comment_uri = elem.attr("id").match("_([0-9]+_[A-Za-z0-9]+)$")[1];
          if (elem.hasClass("active")) {
            data.comment_vote[comment_uri] = 1;
          } else {
            delete data.comment_vote[comment_uri];
          }
          return User.publishData(data, function(res) {
            return elem.removeClass("loading");
          });
        };
      })(this));
      return false;
    };

    return TopicShow;

  })(Class);

  window.TopicShow = new TopicShow();

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/User.coffee ---- */


(function() {
  var User,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  User = (function(superClass) {
    extend(User, superClass);

    function User() {
      this.my_topic_votes = {};
      this.my_comment_votes = {};
      this.rules = {};
      this.certselectButtons();
    }

    User.prototype.updateMyInfo = function(cb) {
      if (cb == null) {
        cb = null;
      }
      this.log("Updating user info...", this.my_address);
      return this.updateMyVotes(cb);
    };

    User.prototype.updateMyVotes = function(cb) {
      var query;
      if (cb == null) {
        cb = null;
      }
      query = "SELECT 'topic_vote' AS type, topic_uri AS uri FROM json LEFT JOIN topic_vote USING (json_id) WHERE directory = \"" + Page.site_info.auth_address + "\" AND file_name = 'data.json'\nUNION\nSELECT 'comment_vote' AS type, comment_uri AS uri FROM json LEFT JOIN comment_vote USING (json_id) WHERE directory = \"" + Page.site_info.auth_address + "\" AND file_name = 'data.json'";
      Page.cmd("dbQuery", [query], (function(_this) {
        return function(votes) {
          var i, len, results, vote;
          results = [];
          for (i = 0, len = votes.length; i < len; i++) {
            vote = votes[i];
            if (vote.type === "topic_vote") {
              results.push(_this.my_topic_votes[vote.uri] = true);
            } else {
              results.push(_this.my_comment_votes[vote.uri] = true);
            }
          }
          return results;
        };
      })(this));
      if (cb) {
        return cb();
      }
    };

    User.prototype.certselectButtons = function() {
      return $(".certselect").on("click", (function(_this) {
        return function() {
          if (Page.server_info.rev < 160) {
            Page.cmd("wrapperNotification", ["error", "Comments requires at least ZeroNet 0.3.0 Please upgade!"]);
          } else {
            Page.cmd("certSelect", [["zeroid.bit"]]);
          }
          return false;
        };
      })(this));
    };

    User.prototype.checkCert = function(type) {
      var last_cert_user_id;
      last_cert_user_id = $(".user_name-my").text();
      console.log(Page);
      console.log(Page.site_info);
      $(".peers").html(Page.site_info.peers + " shares");
      if ($(".comment-new .user_name").text() !== Page.site_info.cert_user_id || type === "updaterules") {
        if (Page.site_info.cert_user_id) {
          $(".comment-new").removeClass("comment-nocert");
          $(".user_name-my").text(Page.site_info.cert_user_id).css({
            "color": Text.toColor(Page.site_info.cert_user_id)
          });
        } else {
          $(".comment-new").addClass("comment-nocert");
          $(".user_name-my").text("Please sign in");
        }
        if (Page.site_info.cert_user_id) {
          return Page.cmd("fileRules", "data/users/" + Page.site_info.auth_address + "/content.json", (function(_this) {
            return function(rules) {
              _this.rules = rules;
              if (rules.max_size) {
                return _this.setCurrentSize(rules.current_size);
              } else {
                return _this.setCurrentSize(0);
              }
            };
          })(this));
        } else {
          return this.setCurrentSize(0);
        }
      }
    };

    User.prototype.setCurrentSize = function(current_size) {
      var current_size_kb, percent;
      if (current_size) {
        current_size_kb = current_size / 1000;
        $(".user-size").text("used: " + (current_size_kb.toFixed(1)) + "k/" + (Math.round(this.rules.max_size / 1000)) + "k").attr("title", "Every new user has limited space to store comments, topics and votes.\n" + "This indicator shows your used/total allowed KBytes.\n" + "The site admin can increase it if you about to run out of it.");
        percent = Math.round(100 * current_size / this.rules.max_size);
        $(".user-size-used").css("width", percent + "%");
        if (percent > 80) {
          return $(".user-size-warning").css("display", "block").find("a").text(Page.site_info.content.settings.admin).attr("href", Text.fixLink(Page.site_info.content.settings.admin_href));
        }
      } else {
        return $(".user-size").text("");
      }
    };

    User.prototype.getData = function(cb) {
      var inner_path;
      inner_path = "data/users/" + Page.site_info.auth_address + "/data.json";
      return Page.cmd("fileGet", {
        "inner_path": inner_path,
        "required": false
      }, (function(_this) {
        return function(data) {
          if (data) {
            data = JSON.parse(data);
          } else {
            data = {
              "next_avatar_id": 1,
              "next_topic_id": 1,
              "topic_uri": "?Topic:1_",
              "topic": [],
              "topic_vote": {},
              "next_comment_id": 1,
              "comment": {},
              "comment_vote": {}
            };
          }
          return cb(data);
        };
      })(this));
    };

    User.prototype.publishData = function(data, cb) {
      var inner_path;
      inner_path = "data/users/" + Page.site_info.auth_address + "/data.json";
      return Page.writePublish(inner_path, Text.jsonEncode(data), (function(_this) {
        return function(res) {
          _this.checkCert("updaterules");
          if (cb) {
            return cb(res);
          }
        };
      })(this));
    };

    return User;

  })(Class);

  window.User = new User();

}).call(this);


/* ---- /1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/User.coffee ---- */


// Additional User Functions


/*
(function() {
  var User,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  User = (function(_super) {
    __extends(User, _super);

    function User(row, _at_item_list) {
      this.item_list = _at_item_list;
      this.renderList = __bind(this.renderList, this);
      this.handleMuteClick = __bind(this.handleMuteClick, this);
      this.handleDownloadClick = __bind(this.handleDownloadClick, this);
      this.download = __bind(this.download, this);
      this.handleFollowClick = __bind(this.handleFollowClick, this);
      this.renderAvatar = __bind(this.renderAvatar, this);
      this.hasHelp = __bind(this.hasHelp, this);
      this.updateInfo = __bind(this.updateInfo, this);
      if (row) {
        this.setRow(row);
      }
      this.likes = {};
      this.followed_users = {};
      this.submitting_follow = false;
    }

    User.prototype.setRow = function(row) {
      this.row = row;
      this.hub = row.hub;
      return this.auth_address = row.auth_address;
    };

    User.prototype.get = function(site, auth_address, cb) {
      var params;
      if (cb == null) {
        cb = null;
      }
      params = {
        site: site,
        directory: "data/users/" + auth_address
      };
      return Page.cmd("dbQuery", ["SELECT * FROM json WHERE site = :site AND directory = :directory LIMIT 1", params], (function(_this) {
        return function(res) {
          var row;
          row = res[0];
          if (row) {
            row.auth_address = row.directory.replace("data/users/", "");
            _this.setRow(row);
            return typeof cb === "function" ? cb(row) : void 0;
          } else {
            return cb(false);
          }
        };
      })(this));
    };

    User.prototype.updateInfo = function(cb) {
      var p_followed_users, p_likes;
      if (cb == null) {
        cb = null;
      }
      this.logStart("Info loaded");
      p_likes = new Promise();
      p_followed_users = new Promise();
      Page.cmd("dbQuery", ["SELECT * FROM follow WHERE json_id = " + this.row.json_id], (function(_this) {
        return function(res) {
          var row, _i, _len;
          _this.followed_users = {};
          for (_i = 0, _len = res.length; _i < _len; _i++) {
            row = res[_i];
            _this.followed_users[row.hub + "/" + row.auth_address] = row;
          }
          return p_followed_users.resolve();
        };
      })(this));
      Page.cmd("dbQuery", ["SELECT post_like.* FROM json LEFT JOIN post_like USING (json_id) WHERE directory = 'data/users/" + this.auth_address + "' AND post_uri IS NOT NULL"], (function(_this) {
        return function(res) {
          var row, _i, _len;
          _this.likes = {};
          for (_i = 0, _len = res.length; _i < _len; _i++) {
            row = res[_i];
            _this.likes[row.post_uri] = true;
          }
          return p_likes.resolve();
        };
      })(this));
      return Promise.join(p_followed_users, p_likes).then((function(_this) {
        return function(res1, res2) {
          _this.logEnd("Info loaded");
          return typeof cb === "function" ? cb(true) : void 0;
        };
      })(this));
    };

    User.prototype.isFollowed = function() {
      return Page.user.followed_users[this.hub + "/" + this.auth_address];
    };

    User.prototype.isSeeding = function() {
      return Page.merged_sites[this.hub];
    };

    User.prototype.hasHelp = function(cb) {
      return Page.cmd("OptionalHelpList", [this.hub], (function(_this) {
        return function(helps) {
          return cb(helps["data/users/" + _this.auth_address]);
        };
      })(this));
    };

    User.prototype.getPath = function(site) {
      if (site == null) {
        site = this.hub;
      }
      if (site === Page.userdb) {
        return "merged-ZeroMe/" + site + "/data/userdb/" + this.auth_address;
      } else {
        return "merged-ZeroMe/" + site + "/data/users/" + this.auth_address;
      }
    };

    User.prototype.getLink = function() {
      return "?Profile/" + this.hub + "/" + this.auth_address + "/" + (this.row.cert_user_id || '');
    };

    User.prototype.getAvatarLink = function() {
      var cache_invalidation, _ref;
      cache_invalidation = "";
      if (this.auth_address === ((_ref = Page.user) != null ? _ref.auth_address : void 0)) {
        cache_invalidation = "?" + Page.cache_time;
      }
      return "merged-ZeroMe/" + this.hub + "/data/users/" + this.auth_address + "/avatar." + this.row.avatar + cache_invalidation;
    };

    User.prototype.getDefaultData = function() {
      var _ref;
      return {
        "next_post_id": 2,
        "next_comment_id": 1,
        "next_follow_id": 1,
        "avatar": "generate",
        "user_name": (_ref = this.row) != null ? _ref.user_name : void 0,
        "hub": this.hub,
        "intro": "Random ZeroNet user",
        "post": [
          {
            "post_id": 1,
            "date_added": Time.timestamp(),
            "body": "Hello ZeroMe!"
          }
        ],
        "post_like": {},
        "comment": [],
        "follow": []
      };
    };

    User.prototype.getData = function(site, cb) {
      return Page.cmd("fileGet", [this.getPath(site) + "/data.json", false], (function(_this) {
        return function(data) {
          var _ref;
          data = JSON.parse(data);
          if (data == null) {
            data = {
              "next_comment_id": 1,
              "user_name": (_ref = _this.row) != null ? _ref.user_name : void 0,
              "hub": _this.hub,
              "post_like": {},
              "comment": []
            };
          }
          return cb(data);
        };
      })(this));
    };
    
    /////////////////////////////////////////////// AVATAR /////////////////////////////////////
    User.prototype.renderAvatar = function(attrs) {
      if (attrs == null) {
        attrs = {};
      }
      if (this.isSeeding() && (this.row.avatar === "png" || this.row.avatar === "jpg")) {
        attrs.style = "background-image: url('" + (this.getAvatarLink()) + "')";
      } else {
        attrs.style = "background: linear-gradient(" + Text.toColor(this.auth_address) + "," + Text.toColor(this.auth_address.slice(-5)) + ")";
      }
      return h("a.avatar", attrs);
    };
    /////////////////////////////////////////////// AVATAR /////////////////////////////////////
    
    User.prototype.save = function(data, site, cb) {
      if (site == null) {
        site = this.hub;
      }
      if (cb == null) {
        cb = null;
      }
      return Page.cmd("fileWrite", [this.getPath(site) + "/data.json", Text.fileEncode(data)], (function(_this) {
        return function(res_write) {
          if (Page.server_info.rev > 1400) {
            Page.content.update();
          }
          if (typeof cb === "function") {
            cb(res_write);
          }
          return Page.cmd("sitePublish", {
            "inner_path": _this.getPath(site) + "/data.json"
          }, function(res_sign) {
            _this.log("Save result", res_write, res_sign);
            if (site === _this.hub && res_write === "ok" && res_sign === "ok") {
              return _this.saveUserdb(data);
            }
          });
        };
      })(this));
    };

    User.prototype.saveUserdb = function(data, cb) {
      var cert_provider;
      cert_provider = Page.site_info.cert_user_id.replace(/.*@/, "");
      if (cert_provider !== "zeroid.bit" && cert_provider !== "zeroverse.bit") {
        this.log("Cert provider " + cert_provider + " not supported by userdb!");
        cb(false);
        return false;
      }
      return Page.cmd("fileGet", [this.getPath(Page.userdb) + "/content.json", false], (function(_this) {
        return function(userdb_data) {
          var changed, field, _i, _len, _ref;
          userdb_data = JSON.parse(userdb_data);
          changed = false;
          if (!(userdb_data != null ? userdb_data.user : void 0)) {
            userdb_data = {
              user: [
                {
                  date_added: Time.timestamp()
                }
              ]
            };
            changed = true;
          }
          _ref = ["avatar", "hub", "intro", "user_name"];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            field = _ref[_i];
            if (userdb_data.user[0][field] !== data[field]) {
              changed = true;
              _this.log("Changed in profile:", field, userdb_data.user[0][field], "!=", data[field]);
            }
            userdb_data.user[0][field] = data[field];
          }
          if (changed) {
            return Page.cmd("fileWrite", [_this.getPath(Page.userdb) + "/content.json", Text.fileEncode(userdb_data)], function(res_write) {
              return Page.cmd("sitePublish", {
                "inner_path": _this.getPath(Page.userdb) + "/content.json"
              }, function(res_sign) {
                _this.log("Userdb save result", res_write, res_sign);
                return typeof cb === "function" ? cb(res_sign) : void 0;
              });
            });
          }
        };
      })(this));
    };

    User.prototype.like = function(site, post_uri, cb) {
      if (cb == null) {
        cb = null;
      }
      this.log("Like", site, post_uri);
      this.likes[post_uri] = true;
      return this.getData(site, (function(_this) {
        return function(data) {
          data.post_like[post_uri] = Time.timestamp();
          return _this.save(data, site, function(res) {
            if (cb) {
              return cb(res);
            }
          });
        };
      })(this));
    };

    User.prototype.dislike = function(site, post_uri, cb) {
      if (cb == null) {
        cb = null;
      }
      this.log("Dislike", site, post_uri);
      delete this.likes[post_uri];
      return this.getData(site, (function(_this) {
        return function(data) {
          delete data.post_like[post_uri];
          return _this.save(data, site, function(res) {
            if (cb) {
              return cb(res);
            }
          });
        };
      })(this));
    };

    User.prototype.comment = function(site, post_uri, body, cb) {
      if (cb == null) {
        cb = null;
      }
      return this.getData(site, (function(_this) {
        return function(data) {
          data.comment.push({
            "comment_id": data.next_comment_id,
            "body": body,
            "post_uri": post_uri,
            "date_added": Time.timestamp()
          });
          data.next_comment_id += 1;
          return _this.save(data, site, function(res) {
            if (cb) {
              return cb(res);
            }
          });
        };
      })(this));
    };

    User.prototype.checkContentJson = function(cb) {
      if (cb == null) {
        cb = null;
      }
      return Page.cmd("fileGet", [this.getPath(this.hub) + "/content.json", false], (function(_this) {
        return function(res) {
          var content_json;
          content_json = JSON.parse(res);
          if (content_json.optional) {
            return cb(true);
          }
          content_json.optional = "(?!avatar).*jpg";
          return Page.cmd("fileWrite", [_this.getPath(_this.hub) + "/content.json", Text.fileEncode(content_json)], function(res_write) {
            return cb(res_write);
          });
        };
      })(this));
    };

    User.prototype.fileWrite = function(file_name, content_base64, cb) {
      if (cb == null) {
        cb = null;
      }
      if (!content_base64) {
        return typeof cb === "function" ? cb(null) : void 0;
      }
      return this.checkContentJson((function(_this) {
        return function() {
          return Page.cmd("fileWrite", [_this.getPath(_this.hub) + "/" + file_name, content_base64], function(res_write) {
            return typeof cb === "function" ? cb(res_write) : void 0;
          });
        };
      })(this));
    };

    User.prototype.post = function(body, meta, image_base64, cb) {
      if (meta == null) {
        meta = null;
      }
      if (image_base64 == null) {
        image_base64 = null;
      }
      if (cb == null) {
        cb = null;
      }
      return this.getData(this.hub, (function(_this) {
        return function(data) {
          var post;
          post = {
            "post_id": Time.timestamp() + data.next_post_id,
            "body": body,
            "date_added": Time.timestamp()
          };
          if (meta) {
            post["meta"] = Text.jsonEncode(meta);
          }
          data.post.push(post);
          data.next_post_id += 1;
          return _this.fileWrite(post.post_id + ".jpg", image_base64, function(res) {
            return _this.save(data, _this.hub, function(res) {
              if (cb) {
                return cb(res);
              }
            });
          });
        };
      })(this));
    };

    User.prototype.followUser = function(hub, auth_address, user_name, cb) {
      if (cb == null) {
        cb = null;
      }
      this.log("Following", hub, auth_address);
      this.download();
      return this.getData(this.hub, (function(_this) {
        return function(data) {
          var follow_row;
          follow_row = {
            "follow_id": data.next_follow_id,
            "hub": hub,
            "auth_address": auth_address,
            "user_name": user_name,
            "date_added": Time.timestamp()
          };
          data.follow.push(follow_row);
          _this.followed_users[hub + "/" + auth_address] = true;
          data.next_follow_id += 1;
          _this.save(data, _this.hub, function(res) {
            if (cb) {
              return cb(res);
            }
          });
          return Page.needSite(hub);
        };
      })(this));
    };

    User.prototype.unfollowUser = function(hub, auth_address, cb) {
      if (cb == null) {
        cb = null;
      }
      this.log("UnFollowing", hub, auth_address);
      delete this.followed_users[hub + "/" + auth_address];
      return this.getData(this.hub, (function(_this) {
        return function(data) {
          var follow, follow_index, i, _i, _len, _ref;
          _ref = data.follow;
          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            follow = _ref[i];
            if (follow.hub === hub && follow.auth_address === auth_address) {
              follow_index = i;
            }
          }
          data.follow.splice(follow_index, 1);
          return _this.save(data, _this.hub, function(res) {
            if (cb) {
              return cb(res);
            }
          });
        };
      })(this));
    };

    User.prototype.handleFollowClick = function(e) {
      this.submitting_follow = true;
      if (!this.isFollowed()) {
        Animation.flashIn(e.target);
        Page.user.followUser(this.hub, this.auth_address, this.row.user_name, (function(_this) {
          return function(res) {
            _this.submitting_follow = false;
            return Page.projector.scheduleRender();
          };
        })(this));
      } else {
        Animation.flashOut(e.target);
        Page.user.unfollowUser(this.hub, this.auth_address, (function(_this) {
          return function(res) {
            _this.submitting_follow = false;
            return Page.projector.scheduleRender();
          };
        })(this));
      }
      return false;
    };

    User.prototype.download = function() {
      if (!Page.merged_sites[this.hub]) {
        return Page.cmd("mergerSiteAdd", this.hub, (function(_this) {
          return function() {
            return Page.updateSiteInfo();
          };
        })(this));
      }
    };

    User.prototype.handleDownloadClick = function(e) {
      this.download();
      return false;
    };

    User.prototype.handleMuteClick = function(e) {
      if (Page.server_info.rev < 1880) {
        Page.cmd("wrapperNotification", ["info", "You need ZeroNet 0.5.2 to use this feature."]);
        return false;
      }
      Page.cmd("muteAdd", [this.auth_address, this.row.cert_user_id, "Muted from [page](http://127.0.0.1:43110/" + Page.address + "/?" + Page.history_state.url + ")"]);
      return false;
    };

    User.prototype.renderList = function(type) {
      var classname, enterAnimation, exitAnimation, followed, link, seeding, title;
      if (type == null) {
        type = "normal";
      }
      classname = "";
      if (type === "card") {
        classname = ".card";
      }
      link = this.getLink();
      followed = this.isFollowed();
      seeding = this.isSeeding();
      if (followed) {
        title = "Unfollow";
      } else {
        title = "Follow";
      }
      if (type !== "card") {
        enterAnimation = Animation.slideDown;
        exitAnimation = Animation.slideUp;
      } else {
        enterAnimation = null;
        exitAnimation = null;
      }
      return h("div.user" + classname, {
        key: this.hub + "/" + this.auth_address,
        classes: {
          followed: followed,
          notseeding: !seeding
        },
        enterAnimation: enterAnimation,
        exitAnimation: exitAnimation
      }, [
        h("a.button.button-follow", {
          href: link,
          onclick: this.handleFollowClick,
          title: title,
          classes: {
            loading: this.submitting_follow
          }
        }, "+"), h("a", {
          href: link,
          onclick: Page.handleLinkClick
        }, this.renderAvatar()), h("div.nameline", [
          h("a.name.link", {
            href: link,
            onclick: Page.handleLinkClick
          }, this.row.user_name), type === "card" ? h("span.added", Time.since(this.row.date_added)) : void 0
        ]), this.row.followed_by ? h("div.intro.followedby", [
          "Followed by ", h("a.name.link", {
            href: "?ProfileName/" + this.row.followed_by,
            onclick: Page.handleLinkClick
          }, this.row.followed_by)
        ]) : h("div.intro", this.row.intro)
      ]);
    };

    return User;

  })(Class);

  window.User = User;

}).call(this);
*/


/* ---- /1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/UserList.coffee ---- */


/*
(function() {
  var UserList,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  UserList = (function(_super) {
    __extends(UserList, _super);

    function UserList(_at_type) {
      this.type = _at_type != null ? _at_type : "new";
      this.render = __bind(this.render, this);
      this.item_list = new ItemList(User, "key");
      this.users = this.item_list.items;
      this.need_update = true;
      this.limit = 5;
      this.followed_by = null;
      this.search = null;
    }

    UserList.prototype.update = function() {
      var followed_user_addresses, followed_user_directories, key, params, query, search_where, val;
      this.loading = true;
      params = {};
      if (this.search) {
        search_where = "AND json.user_name LIKE :search_like OR user.user_name LIKE :search_like";
        params["search_like"] = "%" + this.search + "%";
      } else {
        search_where = "";
      }
      if (this.followed_by) {
        query = "SELECT user.user_name, follow.*, user.*\nFROM follow\nLEFT JOIN user USING (auth_address, hub)\nWHERE\n follow.json_id = " + this.followed_by.row.json_id + "  AND user.json_id IS NOT NULL\n\nUNION\n\nSELECT user.user_name, follow.*, user.*\nFROM follow\nLEFT JOIN json ON (json.directory = 'data/userdb/' || follow.auth_address)\nLEFT JOIN user ON (user.json_id = json.json_id)\nWHERE\n follow.json_id = " + this.followed_by.row.json_id + "  AND user.json_id IS NOT NULL AND\n follow.date_added < " + (Time.timestamp() + 120) + "\nORDER BY date_added DESC\nLIMIT " + this.limit;
      } else if (this.type === "suggested") {
        followed_user_addresses = (function() {
          var _ref, _results;
          _ref = Page.user.followed_users;
          _results = [];
          for (key in _ref) {
            val = _ref[key];
            _results.push(key.replace(/.*\//, ""));
          }
          return _results;
        })();
        followed_user_directories = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = followed_user_addresses.length; _i < _len; _i++) {
            key = followed_user_addresses[_i];
            _results.push("data/users/" + key);
          }
          return _results;
        })();
        if (!followed_user_addresses.length) {
          return;
        }
        query = "SELECT\n COUNT(DISTINCT(json.directory)) AS num,\n GROUP_CONCAT(DISTINCT(json.user_name)) AS followed_by,\n follow.*,\n json_suggested.avatar\nFROM follow\n LEFT JOIN json USING (json_id)\n LEFT JOIN json AS json_suggested ON (json_suggested.directory = 'data/users/' || follow.auth_address AND json_suggested.avatar IS NOT NULL)\nWHERE\n json.directory IN " + (Text.sqlIn(followed_user_directories)) + " AND\n auth_address NOT IN " + (Text.sqlIn(followed_user_addresses)) + " AND\n auth_address != '" + Page.user.auth_address + "' AND\n date_added < " + (Time.timestamp() + 120) + "\nGROUP BY follow.auth_address\nORDER BY num DESC\nLIMIT " + this.limit;
      } else if (this.type === "active") {
        query = "SELECT\n json.*,\n json.site AS json_site,\n json.directory AS json_directory,\n json.file_name AS json_file_name,\n json.cert_user_id AS json_cert_user_id,\n json.hub AS json_hub,\n json.user_name AS json_user_name,\n json.avatar AS json_avatar,\n COUNT(*) AS posts\nFROM\n post LEFT JOIN json USING (json_id)\nWHERE\n post.date_added > " + (Time.timestamp() - 60 * 60 * 24 * 7) + "\nGROUP BY json_id\nORDER BY posts DESC\nLIMIT " + this.limit;
      } else {
        query = "SELECT\n user.*,\n json.site AS json_site,\n json.directory AS json_directory,\n json.file_name AS json_file_name,\n json.cert_user_id AS json_cert_user_id,\n json.hub AS json_hub,\n json.user_name AS json_user_name,\n json.avatar AS json_avatar\nFROM\n user LEFT JOIN json USING (json_id)\nWHERE\n date_added < " + (Time.timestamp() + 120) + "\n " + search_where + "\nORDER BY date_added DESC\nLIMIT " + this.limit;
      }
      return Page.cmd("dbQuery", [query, params], (function(_this) {
        return function(rows) {
          var followed_by_displayed, row, rows_by_user, user_rows, username, _i, _len;
          rows_by_user = {};
          followed_by_displayed = {};
          for (_i = 0, _len = rows.length; _i < _len; _i++) {
            row = rows[_i];
            if (row.json_cert_user_id) {
              row.cert_user_id = row.json_cert_user_id;
              row.auth_address = row.json_directory.replace("data/userdb/", "").replace("data/users/", "");
            }
            if (!row.auth_address) {
              continue;
            }
            if (row.followed_by) {
              row.followed_by = ((function() {
                var _j, _len1, _ref, _results;
                _ref = row.followed_by.split(",");
                _results = [];
                for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                  username = _ref[_j];
                  if (!followed_by_displayed[username]) {
                    _results.push(username);
                  }
                }
                return _results;
              })())[0];
              followed_by_displayed[row.followed_by] = true;
            }
            row.key = row.hub + "/" + row.auth_address;
            if (!rows_by_user[row.hub + row.auth_address]) {
              rows_by_user[row.hub + row.auth_address] = row;
            }
          }
          user_rows = (function() {
            var _results;
            _results = [];
            for (key in rows_by_user) {
              val = rows_by_user[key];
              _results.push(val);
            }
            return _results;
          })();
          _this.item_list.sync(user_rows);
          _this.loading = false;
          return Page.projector.scheduleRender();
        };
      })(this));
    };

    UserList.prototype.render = function(type) {
      if (type == null) {
        type = "normal";
      }
      if (this.need_update) {
        this.need_update = false;
        setTimeout(((function(_this) {
          return function() {
            return _this.update();
          };
        })(this)), 100);
      }
      if (!this.users.length) {
        return null;
      }
      return h("div.UserList.users" + type + "." + this.type, {
        afterCreate: Animation.show
      }, this.users.map((function(_this) {
        return function(user) {
          return user.renderList(type);
        };
      })(this)));
    };

    return UserList;

  })(Class);

  window.UserList = UserList;

}).call(this);
*/


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/ZeroFrame.coffee ---- */


(function() {
  var ZeroFrame,
    bind    = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend  = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice   = [].slice;

  ZeroFrame = (function(superClass) {
    extend(ZeroFrame, superClass);

    function ZeroFrame(url) {
      this.onCloseWebsocket = bind(this.onCloseWebsocket, this);
      this.onOpenWebsocket  = bind(this.onOpenWebsocket, this);
      this.onRequest        = bind(this.onRequest, this);
      this.onMessage        = bind(this.onMessage, this);
      this.url = url;
      this.waiting_cb       = {};
      this.wrapper_nonce    = document.location.href.replace(/.*wrapper_nonce=([A-Za-z0-9]+).*/, "$1");
      this.connect();
      this.next_message_id  = 1;
      this.history_state    = {};
      this.init();
    }

    ZeroFrame.prototype.init = function() {
      return this;
    };

    ZeroFrame.prototype.connect = function() {
      this.target = window.parent;
      window.addEventListener("message", this.onMessage, false);
      this.cmd("innerReady");
      window.addEventListener("beforeunload", (function(_this) {
        return function(e) {
          _this.log("save scrollTop", window.pageYOffset);
          _this.history_state["scrollTop"] = window.pageYOffset;
          return _this.cmd("wrapperReplaceState", [_this.history_state, null]);
        };
      })(this));
      return this.cmd("wrapperGetState", [], (function(_this) {
        return function(state) {
          if (state != null) {
            _this.history_state = state;
          }
          _this.log("restore scrollTop", state, window.pageYOffset);
          if (window.pageYOffset === 0 && state) {
            return window.scroll(window.pageXOffset, state.scrollTop);
          }
        };
      })(this));
    };

    ZeroFrame.prototype.onMessage = function(e) {
      var cmd, message;
      message = e.data;
      cmd = message.cmd;
      if (cmd === "response") {
        if (this.waiting_cb[message.to] != null) {
          return this.waiting_cb[message.to](message.result);
        } else {
          return this.log("Websocket callback not found:", message);
        }
      } else if (cmd === "wrapperReady") {
        return this.cmd("innerReady");
      } else if (cmd === "ping") {
        return this.response(message.id, "pong");
      } else if (cmd === "wrapperOpenedWebsocket") {
        return this.onOpenWebsocket();
      } else if (cmd === "wrapperClosedWebsocket") {
        return this.onCloseWebsocket();
      } else {
        return this.onRequest(cmd, message);
      }
    };
    
    ZeroFrame.prototype.onRequest = function(cmd, message) {
      if (cmd === "setSiteInfo") {
        if (message.params.cert_user_id) {
            $("#login").removeClass("hide");
            $("#no-login").addClass("hide");
            $(".nickbar span").html(message.params.cert_user_id.replace('@zeroid.bit', ''));
            this.log("login");
        } else {
            $("#login").addClass("hide");
            $("#no-login").removeClass("hide");
            this.log("no log");
        }
      } else {
        return this.log("Unknown command: " + cmd, message);
      }
    };
    
    ZeroFrame.prototype.response = function(to, result) {
      return this.send({
        "cmd": "response",
        "to": to,
        "result": result
      });
    };
    
    ZeroFrame.prototype.cmd = function(cmd, params, cb) {
      if (params == null) {
        params = {};
      }
      if (cb == null) {
        cb = null;
      }
      return this.send({
        "cmd": cmd,
        "params": params
      }, cb);
    };
    
    ZeroFrame.prototype.send = function(message, cb) {
      if (cb == null) {
        cb = null;
      }
      message.wrapper_nonce = this.wrapper_nonce;
      message.id = this.next_message_id;
      this.next_message_id += 1;
      this.target.postMessage(message, "*");
      if (cb) {
        return this.waiting_cb[message.id] = cb;
      }
    };
    
    ZeroFrame.prototype.log = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      // TODO: too many "[ZeroFrame] Websocket callback not found: Object"
      // return console.log.apply(console, ["[ZeroFrame]"].concat(slice.call(args)));
    };
    
    ZeroFrame.prototype.onOpenWebsocket = function() {
      return this.log("Websocket open");
    };
    
    ZeroFrame.prototype.onCloseWebsocket = function() {
      return this.log("Websocket close");
    };
    
    return ZeroFrame;
    
  })(Class);
  
  window.ZeroFrame = ZeroFrame;
  
}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/ZeroFrame-API.coffee ---- */


// ZeroFrame API
ZeroAPI = new ZeroFrame();

// todo: state back button
var lastTemplate = "";

function loadTemplate(ntemplate, data) {
  
  if (ntemplate != lastTemplate) {
    // toggle menu (if it exists)
    // if (ntemplate == "all") {
    //    $("#menu > ul > li.active").toggleClass("active");
    //    $("#menu > ul > li.all").toggleClass("active");
    //}
    ZeroAPI.cmd("fileGet", {
          "inner_path": "pages/" + ntemplate + ".html",
          "required": false
      }, (function(html) {
        // alert(ntemplate);
        $("main").append("<section n-template=\"" + ntemplate + "\">" + Mustache.render(html, data) + "</section>");
    }));
    $("section[n-template]").each(function() {
      $(this).addClass("hide");
    });
    
    // hide previous
    if($("[n-template=\"" + ntemplate + "\"]").length) {
       $("[n-template=\"" + ntemplate + "\"]").toggleClass("hide");
    }
    // hack for old templates and double loading
    if(ntemplate == "view-post" || ntemplate == "new" || ntemplate == "home" || ntemplate == "misc") {
      if($("[n-template=\"" + ntemplate + "\"]").length) {
         $("[n-template=\"" + ntemplate + "\"]")[0].remove();
      }
    }
    // hack for double loading
    if(ntemplate == "apps") {
      if($("[n-template=\"" + ntemplate + "\"]").length) {
         $("[n-template=\"" + ntemplate + "\"]")[1].toggleClass("hide");
      }
    }
    lastTemplate = ntemplate;
  }
}

ZeroAPI.cmd("siteInfo", {}, (function(site_info) {
  console.log(site_info);
  if(site_info.cert_user_id) {
    $("#login").removeClass("hide");
    $("#no-login").addClass("hide");
    $(".nickbar span").html(site_info.cert_user_id.replace('@zeroid.bit', ''));
  }
}));

// "SELECT * FROM topic WHERE .... ORDER BY topic.added DESC LIMIT 15"
ZeroAPI.cmd("dbQuery", ["SELECT * FROM topic WHERE image_thumb IS NOT NULL ORDER BY topic.added DESC LIMIT 15"], (function(t_topic) { 
    
    ZeroAPI.cmd("siteInfo", {}, (function(site_info) {
        var all_info = {
          topic: t_topic // stats: { topic: t_topic.length }
        };
        // this.parent_topic_uri = parent_topic_id + "_" + parent_topic_user_address;
        // this.queryTopic(this.topic_id, this.topic_user_address)
        // var topic_address = TopicShow.queryTopic(topic_id, json);
        // alert($(this).attr("data-key"));
        // alert(t_topic[0].json_id);
        loadTemplate("all", all_info);
    }));
}));


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/Templates.coffee ---- */


$(document).ready(function() {
  
  // TODO: IMAGE mouseover..
  $(document).on("mouseover", ".showtopics img", function () {
    $(this).attr("style", "position: relative; left: 11px; border: 1px solid #FF0000;");
    // ZeroAPI.cmd("dbQuery", ["SELECT * FROM topic WHERE topic_id = '" + $(this).attr("data-key") + "'"], (function(post_variables) { 
    //     alert(post_variables[0].json_id);
    // }));
    // if (topic_url) { alert(topic_url); }
  });
  $(document).on("mouseout", ".showtopics img", function () {
    $(this).attr("style", "position: relative; left: 11px; border: 1px solid #302010;");
  });
  
  // Temp: assignment of topic url to featured links
  /*
  $(document).on("click", ".showtopics a", function () {
    // $(this).attr("style", "position: relative; left: 11px; border: 1px solid #FF0000;");
    ZeroAPI.cmd("dbQuery", ["SELECT * FROM topic WHERE topic_id = '" + $(this).attr("data-key") + "'"], (function(post_variables) { 
        // alert(post_variables[0].json_id);
        query = "SELECT * FROM json WHERE json_id = '" + post_variables[0].json_id + "'";
        Page.cmd("dbQuery", [query], (function(json_data) {
            topic_url = "?Topic:" + post_variables[0].topic_id + "_" + json_data[0].directory + "/";
            // alert(topic_url);
            topic_div = "#topic" + post_variables[0].topic_id;
            // alert(topic_div);
            $(topic_div).attr("onclick", "location.href='" + topic_url + "'");
            $(topic_div).attr("style", "cursor:pointer;");
        }));
    }));
  });
  */
  
  // warning: second mouseover on image
  $(document).on("click", ".showtopics img", function () {
    
    // var topic_url = "http://localhost:43210/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/?Topic:"+ $(this).attr("data-key");
    // if (topic_url) { alert(topic_url); }
    // ZeroTalk.routeUrl(topic_url);
    // alert($(this).attr("data-key"));
    // ZeroAPI.cmd("dbQuery", ["SELECT * FROM topic WHERE topic_id = '" + $(this).attr("data-key") + "'"], (function(post_variables) { 
      // loadTemplate("view-post", post_variables[0]);
      // console.log(post_variables[0]);
      // alert(post_variables[0].json_id);
      // TopicShow.queryTopic(post_variables[0].topic_id, post_variables[0].json_id);
      // query = "SELECT 'directory' AS user_id FROM json WHERE direcory = post_variables[0].json_id";
      // Page.cmd("dbQuery", [query], (function() {
      //  alert(user_id);
      // }));
    // }));
    
    div_id = $(this).parent().attr('id');
    // alert(div_id);
    post_id = div_id.substring(5, div_id.length);
    // alert(post_id);
    ZeroAPI.cmd("dbQuery", ["SELECT * FROM topic WHERE topic_id = '" + post_id + "'"], (function(post_variables) { 
        // alert(post_variables[0].json_id);
        query = "SELECT * FROM json WHERE json_id = '" + post_variables[0].json_id + "'";
        Page.cmd("dbQuery", [query], (function(json_data) {
            topic_url = "?Topic:" + post_variables[0].topic_id + "_" + json_data[0].directory + "/";
            // alert(topic_url);
            topic_div = "#topic" + post_variables[0].topic_id;
            // alert(topic_div);
            $(topic_div).attr("onclick", "location.href='" + topic_url + "'");
            $(topic_div).attr("style", "cursor: pointer;");

        }));
    }));
  });

  /////////////// Templates (todo) //////////////////
  
  /*
  $(document).on("click", "[template]", function () {
    var ntemplate = $(this).attr("template");
    // alert(ntemplate);
    if (ntemplate === "profile") {
        loadTemplate("profile", Page.site_info.auth_address);
    } else {
        loadTemplate(ntemplate);
    }
  });
  */
  
  /* update avatar */
  $(document).on("submit", "#save-profile", function () {
    ZeroAPI.cmd("siteInfo", {}, (function(site_info) {
      if (!site_info.cert_user_id) {
        ZeroAPI.cmd("wrapperNotification", ["info", "Please, select your account."]);
        return false;
      } else {
        // save here
      }
    }));
  });
  
  /* menu */
  /*
  $(document).on("click", "#menu > ul > li", function () {
    $("#menu > ul > li.active").toggleClass("active");
    $(this).toggleClass("active");
    // menu & submenu sync
    $("#submenu > ul > li.active").toggleClass("active");
    $("#submenu > ul > li.all").toggleClass("active");
  });
  */
  
  /* submenu */
  /*
  $(document).on("click", "#submenu > ul > li", function () {
    $("#submenu > ul > li.active").toggleClass("active");
    $(this).toggleClass("active");
    // menu & submenu sync
    $("#menu > ul > li.active").toggleClass("active");
    $("#menu > ul > li.all").toggleClass("active");
  });
  */
  
  /* create post */
  /*
  $(document).on("submit", "#new-post-f", function () {
    ZeroAPI.cmd("siteInfo", {}, (function(site_info) {
      if (!site_info.cert_user_id) {
        ZeroAPI.cmd("wrapperNotification", ["info", "Please, select your account."]);
        return false;
      } else {
      var form_title      = $("input[name=title]").val();
      var form_user       = site_info.cert_user_id;
      var form_cat        = $('select#categorias').val();
      var form_url        = $("input[name=url]").val();
      var form_cuerpo     = $("textarea[name=cuerpo]").val();
      var form_parent     = 'none';
      var form_image_name = $("input[name=image]").val().replace('C:\\fakepath\\', ''); // windows only!
      var form_image_url  = form_url + "/zite/thumbs/" + form_image_name;
      var form_image_blob = $('#image_preview').attr('src');

      if (form_title.length < 1) {  
          ZeroAPI.cmd("wrapperNotification", ["error", "Please, put a title."]);
          return false;  
      }

      if (form_cuerpo.length < 15) {  
          ZeroAPI.cmd("wrapperNotification", ["error", "Minimum 15 characters in the \"Content\"."]);
          return false;  
      }
      
      inner_path = "data/users/" + site_info.auth_address + "/data.json";
      ZeroAPI.cmd("fileGet", {
        "inner_path": inner_path,
        "required": false
      }, (function(data) {
          if (data) {
            data = JSON.parse(data);
          } else {
            data = {
              "posts": []
            };
          }
          
          data.posts.push({
            "post_title":      form_title,
            "post_user":       form_user,
            "post_date":       +(new Date),
            "post_cat":        form_cat,
            "post_url":        form_url,
            "post_content":    form_cuerpo,
            "post_parent":     form_parent,
            "post_image_name": form_image_name,
            "post_image_url":  form_image_url,
            "post_image_blob": form_image_blob
          });

          ZeroAPI.cmd("fileWrite", [inner_path, btoa(JSON.stringify(data))], function(on_write) { 

          if (on_write === "ok") {

            ZeroAPI.cmd("sitePublish", { "inner_path": inner_path }, function(on_publish) {
              console.log(on_publish);
              alert("published");
            });
          } else {
            ZeroAPI.cmd("wrapperNotification", ["error", "File write error: " + on_write]);
          }
          });
      }));
      }
    }));
  });
  */
  
});


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/ZeroTalk.coffee ---- */


(function() {
  var ZeroTalk,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ZeroTalk = (function(superClass) {
    extend(ZeroTalk, superClass);

    function ZeroTalk() {
      this.setSiteinfo       = bind(this.setSiteinfo, this);
      this.actionSetSiteInfo = bind(this.actionSetSiteInfo, this);
      this.saveContent       = bind(this.saveContent, this);
      this.getObject         = bind(this.getObject, this);
      this.getContent        = bind(this.getContent, this);
      this.onOpenWebsocket   = bind(this.onOpenWebsocket, this);
      return ZeroTalk.__super__.constructor.apply(this, arguments);
    }

    ZeroTalk.prototype.init = function() {
      var i, len, ref, textarea;
      this.log("inited!");
      this.site_info     = null;
      this.server_info   = null;
      this.local_storage = {};
      this.site_address  = null;
      ref = $("textarea");
      for (i = 0, len = ref.length; i < len; i++) {
        textarea = ref[i];
        this.autoExpand($(textarea));
      }
      return $(".editbar .icon-help").on("click", (function(_this) {
        return function() {
          $(".editbar .markdown-help").css("display", "block");
          $(".editbar .markdown-help").toggleClassLater("visible", 10);
          $(".editbar .icon-help").toggleClass("active");
          return false;
        };
      })(this));
    };

    ZeroTalk.prototype.onOpenWebsocket = function(e) {
      this.cmd("wrapperSetViewport", "width=device-width, initial-scale=1.0");
      this.cmd("wrapperGetLocalStorage", [], (function(_this) {
        return function(res) {
          if (res == null) {
            res = {};
          }
          return _this.local_storage = res;
        };
      })(this));
      this.cmd("siteInfo", {}, (function(_this) {
        return function(site) {
          _this.site_address = site.address;
          _this.setSiteinfo(site);
          return User.updateMyInfo(function() {
            return _this.routeUrl(window.location.search.substring(1));
          });
        };
      })(this));
      return this.cmd("serverInfo", {}, (function(_this) {
        return function(ret) {
          var version;
          _this.server_info = ret;
          version = parseInt(_this.server_info.version.replace(/\./g, ""));
          if (version < 31) {
            return _this.cmd("wrapperNotification", ["error", "ZeroTalk requires ZeroNet 0.3.1, please update!"]);
          }
        };
      })(this));
    };

    ZeroTalk.prototype.onPageLoaded = function() {
      return $("body").addClass("loaded");
    };

    ZeroTalk.prototype.routeUrl = function(url) {
      var match;
      this.log("Routing url:", url);
      if (match = url.match(/Topic:([0-9]+)_([0-9a-zA-Z]+)/)) {
        $("body").addClass("page-topic");
        return TopicShow.actionShow(parseInt(match[1]), Text.toBitcoinAddress(match[2]));
      } else if (match = url.match(/Topics:([0-9]+)_([0-9a-zA-Z]+)/)) {
        $("body").addClass("page-topics");
        return TopicList.actionList(parseInt(match[1]), Text.toBitcoinAddress(match[2]));
      } else {
        $("body").addClass("page-main");
        return TopicList.actionList();
      }
    };

    ZeroTalk.prototype.addInlineEditors = function() {
      var editor, elem, elems, i, len;
      this.logStart("Adding inline editors");
      elems = $("[data-editable]");
      for (i = 0, len = elems.length; i < len; i++) {
        elem = elems[i];
        elem = $(elem);
        if (!elem.data("editor") && !elem.hasClass("editor")) {
          editor = new InlineEditor(elem, this.getContent, this.saveContent, this.getObject);
          elem.data("editor", editor);
        }
      }
      return this.logEnd("Adding inline editors");
    };

    ZeroTalk.prototype.getContent = function(elem, raw) {
      if (raw == null) {
        raw = false;
      }
      return elem.data("content");
    };

    ZeroTalk.prototype.getObject = function(elem) {
      if (elem.data("object")) {
        return elem;
      } else {
        return elem.parents("[data-object]");
      }
    };

    ZeroTalk.prototype.saveContent = function(elem, content, cb) {
      var delete_object, id, object, ref, type;
      if (cb == null) {
        cb = false;
      }
      if (elem.data("deletable") && content === null) {
        delete_object = true;
      } else {
        delete_object = false;
      }
      object = this.getObject(elem);
      ref = object.data("object").split(":"), type = ref[0], id = ref[1];
      return User.getData((function(_this) {
        return function(data) {
          var comment, comment_id, comment_uri, ref1, ref2, ref3, ref4, topic, topic_creator_address, topic_id, topic_uri, user_address;
          if (type === "Topic") {
            ref1 = id.split("_"), topic_id = ref1[0], user_address = ref1[1];
            topic_id = parseInt(topic_id);
            topic = ((function() {
              var i, len, ref2, results;
              ref2 = data.topic;
              results = [];
              for (i = 0, len = ref2.length; i < len; i++) {
                topic = ref2[i];
                if (topic.topic_id === topic_id) {
                  results.push(topic);
                }
              }
              return results;
            })())[0];
            if (delete_object) {
              data.topic.splice(data.topic.indexOf(topic), 1);
            } else {
              topic[elem.data("editable")] = content;
            }
          }
          if (type === "Comment") {
            ref2 = id.split("@"), comment_uri = ref2[0], topic_uri = ref2[1];
            ref3 = comment_uri.split("_"), comment_id = ref3[0], user_address = ref3[1];
            ref4 = topic_uri.split("_"), topic_id = ref4[0], topic_creator_address = ref4[1];
            comment_id = parseInt(comment_id);
            comment = ((function() {
              var i, len, ref5, results;
              ref5 = data.comment[topic_uri];
              results = [];
              for (i = 0, len = ref5.length; i < len; i++) {
                comment = ref5[i];
                if (comment.comment_id === comment_id) {
                  results.push(comment);
                }
              }
              return results;
            })())[0];
            if (delete_object) {
              data.comment[topic_uri].splice(data.comment[topic_uri].indexOf(comment), 1);
            } else {
              comment[elem.data("editable")] = content;
            }
          }
          return User.publishData(data, function(res) {
            if (res) {
              if (delete_object) {
                if (cb) {
                  cb(true);
                }
                return elem.fancySlideUp();
              } else {
                if (type === "Topic") {
                  if ($("body").hasClass("page-main") || $("body").hasClass("page-topics")) {
                    TopicList.loadTopics("list", (function() {
                      if (cb) {
                        return cb(true);
                      }
                    }));
                  }
                  if ($("body").hasClass("page-topic")) {
                    TopicShow.loadTopic((function() {
                      if (cb) {
                        return cb(true);
                      }
                    }));
                  }
                }
                if (type === "Comment") {
                  return TopicShow.loadComments("normal", (function() {
                    if (cb) {
                      return cb(true);
                    }
                  }));
                }
              }
            } else {
              if (cb) {
                return cb(false);
              }
            }
          });
        };
      })(this));
    };

    ZeroTalk.prototype.onRequest = function(cmd, message) {
      if (cmd === "setSiteInfo") {
        return this.actionSetSiteInfo(message);
      } else {
        return this.log("Unknown command", message);
      }
    };

    ZeroTalk.prototype.writePublish = function(inner_path, data, cb) {
      return this.cmd("fileWrite", [inner_path, data], (function(_this) {
        return function(res) {
          if (res !== "ok") {
            _this.cmd("wrapperNotification", ["error", "File write error: " + res]);
            cb(false);
            return false;
          }
          return _this.cmd("sitePublish", {
            "inner_path": inner_path
          }, function(res) {
            if (res === "ok") {
              return cb(true);
            } else {
              return cb(res);
            }
          });
        };
      })(this));
    };

    ZeroTalk.prototype.actionSetSiteInfo = function(res) {
      var site_info;
      site_info = res.params;
      this.setSiteinfo(site_info);
      if (site_info.event && site_info.event[0] === "file_done" && site_info.event[1].match(/.*users.*data.json$/)) {
        return RateLimit(500, (function(_this) {
          return function() {
            if ($("body").hasClass("page-topic")) {
              TopicShow.loadTopic();
              TopicShow.loadComments();
            }
            if ($("body").hasClass("page-main") || $("body").hasClass("page-topics")) {
              return TopicList.loadTopics();
            }
          };
        })(this));
      }
    };

    ZeroTalk.prototype.setSiteinfo = function(site_info) {
      this.site_info = site_info;
      return User.checkCert();
    };

    ZeroTalk.prototype.autoExpand = function(elem) {
      var editor;
      editor = elem[0];
      if (elem.height() > 0) {
        elem.height(1);
      }
      elem.on("input", function() {
        var min_height, new_height, old_height;
        if (editor.scrollHeight > elem.height()) {
          old_height = elem.height();
          elem.height(1);
          new_height = editor.scrollHeight;
          new_height += parseFloat(elem.css("borderTopWidth"));
          new_height += parseFloat(elem.css("borderBottomWidth"));
          new_height -= parseFloat(elem.css("paddingTop"));
          new_height -= parseFloat(elem.css("paddingBottom"));
          min_height = parseFloat(elem.css("lineHeight")) * 2;
          if (new_height < min_height) {
            new_height = min_height + 4;
          }
          return elem.height(new_height - 4);
        }
      });
      if (elem.height() > 0) {
        return elem.trigger("input");
      } else {
        return elem.height("48px");
      }
    };

    return ZeroTalk;

  })(ZeroFrame);

  window.Page = new ZeroTalk();

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/DateSince.coffee ---- */


(function() {
  var DateSince;

  DateSince = (function() {
    function DateSince(_at_elem, _at_time) {
      this.elem = _at_elem;
      this.time = _at_time;
      this.render();
      date_since_db.push(this);
    }

    DateSince.prototype.formatSince = function(time) {
      var back, now, secs;
      now = +(new Date) / 1000;
      secs = now - time;
      if (secs < 60) {
        back = "Just now";
      } else if (secs < 60 * 60) {
        back = (Math.round(secs / 60)) + " minutes ago";
      } else if (secs < 60 * 60 * 24) {
        back = (Math.round(secs / 60 / 60)) + " hours ago";
      } else if (secs < 60 * 60 * 24 * 3) {
        back = (Math.round(secs / 60 / 60 / 24)) + " days ago";
      } else {
        back = "on " + this.formatDate(time);
      }
      back = back.replace(/^1 ([a-z]+)s/, "1 $1");
      return back;
    };

    DateSince.prototype.formatDate = function(timestamp, format) {
      var display, parts;
      if (format == null) {
        format = "short";
      }
      parts = (new Date(timestamp * 1000)).toString().split(" ");
      if (format === "short") {
        display = parts.slice(1, 4);
      } else {
        display = parts.slice(1, 5);
      }
      return display.join(" ").replace(/( [0-9]{4})/, ",$1");
    };

    DateSince.prototype.render = function() {
      return this.elem.textContent = this.formatSince(this.time);
    };

    return DateSince;

  })();

  window.date_since_db = [];

  setInterval((function() {
    var date_since, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = date_since_db.length; _i < _len; _i++) {
      date_since = date_since_db[_i];
      _results.push(date_since.render());
    }
    return _results;
  }), 1000);

  window.DateSince = DateSince;

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/lib/Utils.coffee ---- */


(function() {
  window.cmp = function(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  };


  /* 
  Array::sortBy = (key, options={}) ->
    @sort (a, b) ->
      [av, bv] = [a[key], b[key]]
      [av, bv] = [av.toLowerCase(), bv.toLowerCase()] if options.lower
      cmp av, bv */

}).call(this);


/* ---- data/1NCRELKZ3zWRS6DijziYrfWi9dsUY8Fh8n/js/SiteMenu.coffee ---- */


(function() {
  var Menu, SiteMenu,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Menu = (function() {
    function Menu(button) {
      this.button = button;
      this.elem = $(".menu.template").clone().removeClass("template");
      this.elem.appendTo("body");
    }

    Menu.prototype.show = function() {
      var button_pos;
      if (window.visible_menu) {
        this.log("visible_menu", window.visible_menu.button, this.button);
      }
      if (window.visible_menu && window.visible_menu.button[0] === this.button[0]) {
        window.visible_menu.hide();
        return this.hide();
      } else {
        button_pos = this.button.offset();
        this.elem.css({
          "top": button_pos.top + this.button.outerHeight(),
          "left": button_pos.left
        });
        this.button.addClass("menu-active");
        this.elem.addClass("visible");
        if (window.visible_menu) {
          window.visible_menu.hide();
        }
        return window.visible_menu = this;
      }
    };

    Menu.prototype.hide = function() {
      this.elem.removeClass("visible");
      this.button.removeClass("menu-active");
      return window.visible_menu = null;
    };

    Menu.prototype.addItem = function(title, cb) {
      var item;
      item = $(".menu-item.template", this.elem).clone().removeClass("template");
      item.html(title);
      item.on("click", (function(_this) {
        return function() {
          _this.hide();
          cb();
          return false;
        };
      })(this));
      item.appendTo(this.elem);
      return item;
    };

    Menu.prototype.log = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return console.log.apply(console, ["[Menu]"].concat(__slice.call(args)));
    };

    return Menu;

  })();

  SiteMenu = (function(_super) {
    __extends(SiteMenu, _super);

    function SiteMenu(elem, site) {
      var _ref;
      SiteMenu.__super__.constructor.call(this, $(".hamburger", elem));
      this.elem.addClass("menu-site");
      this.addItem("Update", (function() {
        return window.zero_hello.siteUpdate(site.address);
      }));
      if (site.settings.serving) {
        this.addItem("Pause", (function() {
          return window.zero_hello.sitePause(site.address);
        }));
      } else {
        this.addItem("Resume", (function() {
          return window.zero_hello.siteResume(site.address);
        }));
      }
      if ((_ref = site.content) != null ? _ref.cloneable : void 0) {
        if (zero_hello.server_info.rev < 200) {
          this.addItem("Clone", (function() {
            return window.zero_hello.cmd("wrapperNotification", ["info", "Please update to version 0.3.1 to use the site clone feature!"]);
          }));
        } else {
          this.addItem("Clone", (function() {
            return window.zero_hello.siteClone(site.address);
          }));
        }
      }
      this.addItem("Delete", (function() {
        return window.zero_hello.siteDelete(site.address);
      })).addClass("menu-item-separator");
    }

    return SiteMenu;

  })(Menu);

  window.visible_menu = null;

  window.SiteMenu = SiteMenu;

  window.Menu = Menu;

  $("body").on("click", function(e) {
    if (window.visible_menu && e.target !== window.visible_menu.button[0] && $(e.target).parent()[0] !== window.visible_menu.elem[0]) {
      return window.visible_menu.hide();
    }
  });

}).call(this);

/* eof */
