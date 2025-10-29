(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/XFS/fsc-site/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/* === Brand assets & colors (edit here) ================== */ const LOGO_SRC = "/fsc-logo.png"; // your navbar/footer logo
const IVAO_PARTNER_SRC = "/ivao-partner-va.png"; // IVAO Partner VA badge
const YELLOW = "#F5C518";
const YELLOW_HOVER = "#E3B500";
/* =========================
   Navbar
   ========================= */ function NavBar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                href: "#home",
                label: "Home"
            },
            {
                href: "#team",
                label: "Meet The Team"
            },
            {
                href: "#content",
                label: "Content Page"
            },
            {
                href: "#join",
                label: "Come Join Us"
            },
            {
                href: "#rules",
                label: "Rules and Regulations"
            },
            {
                href: "#gdpr",
                label: "GDPR"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const links = t0;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#home",
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: LOGO_SRC,
                    alt: "Flight Sim Central",
                    className: "h-8 w-auto"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 52,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold tracking-tight text-slate-100",
                    children: "Flight Sim Central"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 52,
                    columnNumber: 132
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden md:flex items-center gap-6 text-slate-200 text-sm",
            children: links.map(_NavBarLinksMap)
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] !== open) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between h-16",
                children: [
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "NavBar[<button>.onClick]": ()=>setOpen(!open)
                        }["NavBar[<button>.onClick]"],
                        "aria-label": "Toggle menu",
                        className: "md:hidden inline-flex items-center justify-center rounded-xl h-10 w-10 ring-1 ring-white/10 text-slate-200",
                        children: "☰"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 130
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 67,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        t4 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden border-t border-white/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 space-y-2 text-slate-100",
                children: links.map({
                    "NavBar[links.map()]": (l_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: l_0.href,
                            className: "block",
                            onClick: {
                                "NavBar[links.map() > <a>.onClick]": ()=>setOpen(false)
                            }["NavBar[links.map() > <a>.onClick]"],
                            children: l_0.label
                        }, l_0.href, false, {
                            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                            lineNumber: 71,
                            columnNumber: 41
                        }, this)
                }["NavBar[links.map()]"])
            }, void 0, false, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 70,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 70,
            columnNumber: 18
        }, this);
        $[4] = open;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0b1b2a]/60 bg-[#0b1b2a]/80 border-b border-white/10",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(NavBar, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = NavBar;
/* =========================
   Hero Media (video or image)
   ========================= */ function _NavBarLinksMap(l) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: l.href,
        className: "hover:text-[#F5C518] transition-colors",
        children: l.label
    }, l.href, false, {
        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
        lineNumber: 98,
        columnNumber: 10
    }, this);
}
function HeroMedia(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    const { videoUrl, imageUrl: t1, title: t2, subtitle: t3 } = t0;
    const imageUrl = t1 === undefined ? "/hero.jpg" : t1;
    const title = t2 === undefined ? "Connecting simmers, mentoring pilots, building community." : t2;
    const subtitle = t3 === undefined ? "Flight Sim Central \u2014 train, fly, and control together on IVAO." : t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1b2a] to-[#081826]"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    let t5;
    if ($[2] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl md:text-5xl font-extrabold tracking-tight text-white",
            children: title
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[2] = title;
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    let t6;
    if ($[4] !== subtitle) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-slate-300 leading-relaxed",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[4] = subtitle;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#join",
            className: "px-5 py-3 rounded-xl font-semibold ring-1 ring-yellow-500 text-slate-900",
            style: {
                backgroundColor: YELLOW
            },
            onMouseEnter: _HeroMediaAOnMouseEnter,
            onMouseLeave: _HeroMediaAOnMouseLeave,
            children: "Join via NewSky ACARS"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    let t9;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 flex flex-wrap gap-3",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#content",
                    className: "px-5 py-3 rounded-xl ring-1 text-slate-100 hover:bg-white/5",
                    style: {
                        borderColor: YELLOW,
                        boxShadow: `0 0 0 1px ${YELLOW} inset`
                    },
                    children: "Explore Content"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 152,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 text-xs text-slate-400",
            children: "IVAO Partner Virtual Airline • Since 2025"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[7] = t8;
        $[8] = t9;
    } else {
        t8 = $[7];
        t9 = $[8];
    }
    let t10;
    if ($[9] !== t5 || $[10] !== t6) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[9] = t5;
        $[10] = t6;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== imageUrl || $[13] !== videoUrl) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl border border-white/10 overflow-hidden bg-slate-900/60 aspect-video",
            children: videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                className: "w-full h-full",
                src: videoUrl,
                title: "FSC Hero Video",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                referrerPolicy: "strict-origin-when-cross-origin",
                allowFullScreen: true
            }, void 0, false, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 174,
                columnNumber: 120
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: "Flight Sim Central",
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 174,
                columnNumber: 377
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[12] = imageUrl;
        $[13] = videoUrl;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== t10 || $[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "home",
            className: "relative isolate",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-8 items-center",
                        children: [
                            t10,
                            t11
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 183,
                        columnNumber: 134
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 183,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    return t12;
}
_c1 = HeroMedia;
/* =========================
   NewSky Live Map (public token)
   ========================= */ function _HeroMediaAOnMouseLeave(e_0) {
    return e_0.currentTarget.style.backgroundColor = YELLOW;
}
function _HeroMediaAOnMouseEnter(e) {
    return e.currentTarget.style.backgroundColor = YELLOW_HOVER;
}
function NewSkyMap(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    const { style: t1 } = t0;
    const style = t1 === undefined ? "dark" : t1;
    const token = ("TURBOPACK compile-time value", "XFS_9YaDZfBzvqNeCTodFpzbNPgU1xKn2K");
    const src = ("TURBOPACK compile-time truthy", 1) ? `https://newsky.app/airline/public/map?style=${style}&token=${encodeURIComponent(token)}` : "TURBOPACK unreachable";
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-bold text-white",
            children: "Live Map"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 219,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-slate-300",
            children: "Live flights on the NewSky network."
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 220,
            columnNumber: 10
        }, this);
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== src) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "map",
            className: "bg-[#081826] py-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [
                    t2,
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/60",
                        children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: src,
                            title: "NewSky Live Map",
                            className: "w-full",
                            style: {
                                height: "70vh",
                                border: 0
                            },
                            referrerPolicy: "strict-origin-when-cross-origin"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                            lineNumber: 229,
                            columnNumber: 216
                        }, this) : /*#__PURE__*/ "TURBOPACK unreachable"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 229,
                        columnNumber: 122
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 229,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 229,
            columnNumber: 10
        }, this);
        $[3] = src;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
}
_c2 = NewSkyMap;
/* =========================
   Content Sections
   ========================= */ // =======================
// Helper component first
// =======================
function StatusBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    const { vid, name } = t0;
    const primary = `https://status.ivao.aero/R/${vid}.png`;
    const fallback = `https://status.ivao.aero/${vid}.png`;
    const profile = `https://www.ivao.aero/members/person/details.asp?ID=${vid}`;
    let t1;
    if ($[1] !== fallback) {
        t1 = ({
            "StatusBadge[handleError]": (e)=>{
                const el = e.currentTarget;
                if (el.src !== fallback) {
                    el.src = fallback;
                }
            }
        })["StatusBadge[handleError]"];
        $[1] = fallback;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleError = t1;
    const t2 = `IVAO Status ${name}`;
    let t3;
    if ($[3] !== handleError || $[4] !== primary || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: primary,
            onError: handleError,
            alt: t2,
            className: "mx-auto rounded-md border border-white/10 shadow-sm max-w-[240px]"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 281,
            columnNumber: 10
        }, this);
        $[3] = handleError;
        $[4] = primary;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== profile || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: profile,
            target: "_blank",
            rel: "noreferrer",
            className: "block mt-3",
            children: t3
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 291,
            columnNumber: 10
        }, this);
        $[7] = profile;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_c3 = StatusBadge;
// =======================
// Then your main section
// =======================
function Team() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                name: "Paul",
                role: "Co-Founder / Admin",
                img: "https://i.postimg.cc/kGynGL0w/2.jpg",
                vid: "681910"
            },
            {
                name: "Anesh",
                role: "Co-Founder / Admin",
                img: "https://i.postimg.cc/brRzr47T/1.jpg",
                vid: "720538"
            },
            {
                name: "Abdellah",
                role: "Webmaster",
                img: "https://i.postimg.cc/brRzr47H/3.jpg",
                vid: "710267"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const people = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-bold text-white",
            children: "Meet The Team"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 338,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-slate-300",
            children: "Volunteers who keep the skies moving."
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 339,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "team",
            className: "bg-[#081826] py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: people.map(_TeamPeopleMap)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 348,
                        columnNumber: 124
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 348,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 348,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c4 = Team;
function _TeamPeopleMap(p) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl bg-slate-900/70 border border-white/10 p-6 flex flex-col items-center text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: p.img,
                alt: p.name,
                className: "h-24 w-24 rounded-full ring-2 ring-white/10 object-cover"
            }, void 0, false, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 356,
                columnNumber: 134
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold text-slate-100 text-lg",
                        children: p.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 356,
                        columnNumber: 257
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-400",
                        children: p.role
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 356,
                        columnNumber: 325
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 356,
                columnNumber: 235
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                vid: p.vid,
                name: p.name
            }, void 0, false, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 356,
                columnNumber: 385
            }, this)
        ]
    }, p.name, true, {
        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
        lineNumber: 356,
        columnNumber: 10
    }, this);
}
function ContentPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                name: "Scottish Controller",
                realName: "Paul R.",
                role: "Co-Founder / ATC & Training Content",
                img: "https://i.postimg.cc/nL46Yqzp/SC-V7-FINAL.png",
                link: "https://twitch.tv/scottish_controller",
                bio: "From the Scottish Highlands, IVAO Approach Controller (APC) and a Private Pilot (PP), Current IVAO US Division Member, IVAO Creator Partnership Team. IVAO New York ARTCC Assistant Chief. IVAO United States Assistant Event Coordinator. An Aviation enthusiast since meeting his plane building father-in-law."
            },
            {
                name: "Luuminator",
                realName: "Doug G.",
                role: "Pilot & Events Creator",
                img: "https://i.postimg.cc/rp1vC5mk/Luuminator-Blue-2.png",
                link: "https://twitch.tv/luuminator",
                bio: "Luumi shares high-quality flight sim content flying his DAL420, controlling Gander/Shanwick Radio, Luumi is also the Cleveland ARTCC Chief and active on the IVAO U.S Division, he is also a Division Trainer & OCC instructor (yikes), watch out for flashing lights when they're streaming!"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const creators = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-bold text-white",
            children: "Our Content Creators"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 391,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-slate-300",
            children: "Flight Sim Central proudly partners with talented streamers and educators who bring the virtual skies to life."
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 392,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "content",
            className: "bg-[#081826] py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 grid sm:grid-cols-2 gap-8",
                        children: creators.map(_ContentPageCreatorsMap)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 401,
                        columnNumber: 127
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 401,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 401,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c5 = ContentPage;
function _ContentPageCreatorsMap(c) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden hover:ring-2 hover:ring-[#F5C518]/60 transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: c.img,
                alt: c.name,
                className: "w-full h-52 object-cover"
            }, void 0, false, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 409,
                columnNumber: 159
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-white",
                        children: c.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 409,
                        columnNumber: 249
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400",
                        children: [
                            c.realName,
                            " • ",
                            c.role
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 409,
                        columnNumber: 307
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-slate-300 text-sm leading-relaxed",
                        children: c.bio
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 409,
                        columnNumber: 372
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: c.link,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "inline-block mt-4 px-4 py-2 rounded-lg font-semibold text-slate-900",
                        style: {
                            backgroundColor: "#F5C518"
                        },
                        children: "Watch Live →"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 409,
                        columnNumber: 442
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 409,
                columnNumber: 228
            }, this)
        ]
    }, c.name, true, {
        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
        lineNumber: 409,
        columnNumber: 10
    }, this);
}
function Join() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-bold text-white",
            children: "Come Join Us"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 424,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-slate-300",
            children: "Get started using NewSky ACARS in a few minutes."
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 425,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "h-7 w-7 flex items-center justify-center rounded-full text-slate-900 font-bold",
            style: {
                backgroundColor: YELLOW
            },
            children: "1"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 434,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex gap-3",
            children: [
                t2,
                "Create a NewSky account and search for ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-100",
                    children: "Flight Sim Central"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 443,
                    columnNumber: 80
                }, this),
                " VA."
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 443,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-7 w-7 flex items-center justify-center rounded-full text-slate-900 font-bold",
                    style: {
                        backgroundColor: YELLOW
                    },
                    children: "2"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 450,
                    columnNumber: 37
                }, this),
                "Apply to join our VA. Our staff approves daily."
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 450,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-7 w-7 flex items-center justify-center rounded-full text-slate-900 font-bold",
                    style: {
                        backgroundColor: YELLOW
                    },
                    children: "3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 459,
                    columnNumber: 37
                }, this),
                "Download the NewSky ACARS client from your portal."
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 459,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "h-7 w-7 flex items-center justify-center rounded-full text-slate-900 font-bold",
            style: {
                backgroundColor: YELLOW
            },
            children: "4"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 468,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "mt-8 space-y-4 text-slate-300",
            children: [
                t3,
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex gap-3",
                    children: [
                        t6,
                        "Book a flight and connect to ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-slate-100",
                            children: "IVAO"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                            lineNumber: 477,
                            columnNumber: 128
                        }, this),
                        ". You’re airborne!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 477,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 477,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://newsky.app/airline/xfs",
            target: "_blank",
            rel: "noreferrer",
            className: "px-5 py-3 rounded-xl font-semibold text-slate-900",
            style: {
                backgroundColor: YELLOW,
                boxShadow: `0 0 0 1px ${YELLOW} inset`
            },
            onMouseEnter: _JoinAOnMouseEnter,
            onMouseLeave: _JoinAOnMouseLeave,
            children: "Open NewSky"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 484,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "join",
            className: "bg-[#081826] py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [
                    t0,
                    t1,
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-wrap gap-3",
                        children: [
                            t8,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#content",
                                className: "px-5 py-3 rounded-xl text-slate-100 hover:bg-white/5",
                                style: {
                                    borderColor: YELLOW,
                                    boxShadow: `0 0 0 1px ${YELLOW} inset`
                                },
                                children: "View Our SOPs"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                                lineNumber: 494,
                                columnNumber: 175
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 494,
                        columnNumber: 128
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-xs text-slate-400",
                        children: "Note: Integrate live stats using NewSky API (flights, awards, pilots) once keys are configured."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 497,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 494,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 494,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    return t9;
}
_c6 = Join;
function _JoinAOnMouseLeave(e_0) {
    return e_0.currentTarget.style.backgroundColor = YELLOW;
}
function _JoinAOnMouseEnter(e) {
    return e.currentTarget.style.backgroundColor = YELLOW_HOVER;
}
function Rules() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-bold text-white",
            children: "Rules & Regulations"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 521,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-slate-300 max-w-2xl mx-auto",
            children: "Professionalism and realism define Flight Sim Central. Our Rules & Regulations outline pilot standards, conduct expectations, and network policies that ensure a safe, respectful, and immersive community."
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 522,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "rules",
            className: "bg-[#081826] py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center",
                children: [
                    t0,
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/rules",
                            className: "inline-block px-5 py-3 rounded-xl font-semibold text-slate-900",
                            style: {
                                backgroundColor: "#F5C518"
                            },
                            children: "View Full Rules & Regulations \u2192"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                            lineNumber: 531,
                            columnNumber: 159
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 531,
                        columnNumber: 137
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 531,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 531,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c7 = Rules;
function GDPR() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-bold text-white",
            children: "GDPR & Privacy Policy"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 551,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-slate-300 max-w-2xl mx-auto",
            children: "We value your privacy and comply with GDPR and international data protection standards. Read our full GDPR and data-handling policy to understand how we manage your information."
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 552,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "gdpr",
            className: "bg-[#081826] py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center",
                children: [
                    t0,
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/gdpr",
                            className: "inline-block px-5 py-3 rounded-xl font-semibold text-slate-900",
                            style: {
                                backgroundColor: "#F5C518"
                            },
                            children: "View Full GDPR Policy →"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                            lineNumber: 561,
                            columnNumber: 158
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                        lineNumber: 561,
                        columnNumber: 136
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                lineNumber: 561,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 561,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c8 = GDPR;
/* =========================
   Footer (with logo + IVAO Partner VA badge)
   ========================= */ function Footer() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/fsc-logo.png",
            alt: "Flight Sim Central Logo",
            className: "h-12 w-auto"
        }, void 0, false, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 584,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-center gap-4",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/ivao-partner-va.png",
                            alt: "IVAO Partner VA",
                            className: "h-10 w-auto"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                            lineNumber: 591,
                            columnNumber: 117
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-slate-400",
                            children: "IVAO Partner Virtual Airline • Since 2025"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                            lineNumber: 591,
                            columnNumber: 197
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 591,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 591,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#home",
                    className: "hover:text-[#F5C518] transition-colors",
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 598,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#team",
                    className: "hover:text-[#F5C518] transition-colors",
                    children: "Team"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 598,
                    columnNumber: 173
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#content",
                    className: "hover:text-[#F5C518] transition-colors",
                    children: "Content"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 598,
                    columnNumber: 248
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#join",
                    className: "hover:text-[#F5C518] transition-colors",
                    children: "Join Us"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 598,
                    columnNumber: 329
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/rules",
                    className: "hover:text-[#F5C518] transition-colors",
                    children: "Rules"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 598,
                    columnNumber: 407
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/gdpr",
                    className: "hover:text-[#F5C518] transition-colors",
                    children: "GDPR"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 598,
                    columnNumber: 484
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 598,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://discord.gg/rdUUbNyHCY",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "px-5 py-2 rounded-xl font-semibold bg-[#5865F2] text-white hover:bg-[#4752C4] transition-colors",
                            children: "Join Discord"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                            lineNumber: 605,
                            columnNumber: 212
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-400 sm:ml-2",
                            children: "Community & Support"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                            lineNumber: 605,
                            columnNumber: 409
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 605,
                    columnNumber: 150
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 605,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = new Date().getFullYear();
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-[#081826] border-t border-white/10",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-white/10 py-4 text-center text-xs text-slate-500",
                    children: [
                        "© ",
                        t4,
                        " Flight Sim Central — All rights reserved.  | ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.ivao.aero/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "hover:text-[#F5C518]",
                            children: "IVAO Network"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                            lineNumber: 619,
                            columnNumber: 206
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 619,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 619,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c9 = Footer;
function Page() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40dabeb865e29616bf1da143b8cabd0f612bf99f012f5e708a1f232ecc59db45";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#081826] text-slate-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavBar, {}, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroMedia, {
                    imageUrl: "/hero.jpg",
                    title: "Connecting simmers, mentoring pilots, building community.",
                    subtitle: "Flight Sim Central \u2014 train, fly, and control together on IVAO."
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 78
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewSkyMap, {
                    style: "dark"
                }, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 259
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Team, {}, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 285
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentPage, {}, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 293
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Join, {}, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 308
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Rules, {}, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 316
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GDPR, {}, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 325
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                    fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 333
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/XFS/fsc-site/src/app/page.tsx",
            lineNumber: 640,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c10 = Page;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "NavBar");
__turbopack_context__.k.register(_c1, "HeroMedia");
__turbopack_context__.k.register(_c2, "NewSkyMap");
__turbopack_context__.k.register(_c3, "StatusBadge");
__turbopack_context__.k.register(_c4, "Team");
__turbopack_context__.k.register(_c5, "ContentPage");
__turbopack_context__.k.register(_c6, "Join");
__turbopack_context__.k.register(_c7, "Rules");
__turbopack_context__.k.register(_c8, "GDPR");
__turbopack_context__.k.register(_c9, "Footer");
__turbopack_context__.k.register(_c10, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$XFS$2f$fsc$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/XFS/fsc-site/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Desktop_XFS_fsc-site_5e2e4e31._.js.map