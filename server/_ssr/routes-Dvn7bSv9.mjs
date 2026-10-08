import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as MapPin, c as Footprints, d as BriefcaseBusiness, f as BadgeCheck, i as SearchCheck, l as Check, m as ArrowRight, n as Sparkles, o as House, p as ArrowUpRight, r as ShieldCheck, s as Heart, t as X, u as Camera } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dvn7bSv9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			hero: "hero-button",
			brand: "brand-button",
			scene: "scene-button",
			space: "space-item",
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var rentmyspace_logo_default = "/assets/rentmyspace-logo-BLH95kzt.png";
var spaces = [
	{
		name: "Live",
		icon: House,
		image: "/assets/living-space-C5LvGJiy.jpg",
		title: "Feel right at home.",
		description: "A fresh start. A place that's yours.",
		caption: "Room for your next chapter",
		category: "Living spaces"
	},
	{
		name: "Work",
		icon: BriefcaseBusiness,
		image: "/assets/work-space-CpfrnOvj.jpg",
		title: "Make room for big ideas.",
		description: "Find a space that works for you.",
		caption: "Where your next idea begins",
		category: "Workspaces"
	},
	{
		name: "Celebrate",
		icon: Sparkles,
		image: "/assets/event-space-Qk1wTPl2.jpg",
		title: "Set the scene for memories.",
		description: "Extraordinary places for your moments.",
		caption: "A place to bring people together",
		category: "Event spaces"
	}
];
var checks = [
	{
		icon: Footprints,
		title: "We walk every space",
		description: "Someone from our team visits the property in person before it ever reaches you."
	},
	{
		icon: SearchCheck,
		title: "Every detail confirmed",
		description: "Layout, condition, amenities and access are checked on site, not guessed from a listing."
	},
	{
		icon: BadgeCheck,
		title: "Published only when true",
		description: "A space goes live once it matches what we saw, with photos taken during the visit."
	}
];
function Reveal({ children, delay = 0, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		document.documentElement.classList.add("has-js");
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
			setShown(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setShown(true);
				observer.disconnect();
			}
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `scroll-reveal${shown ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Index() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const scene = spaces[active] ?? spaces[0];
	(0, import_react.useEffect)(() => {
		if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = window.setInterval(() => setActive((value) => (value + 1) % spaces.length), 8e3);
		return () => window.clearInterval(timer);
	}, [paused]);
	function selectSpace(index, scroll = false) {
		setActive(index);
		setPaused(true);
		if (scroll) document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "site-header",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#",
				"aria-label": "RentMySpace home",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "brand-logo",
					src: rentmyspace_logo_default,
					alt: "RentMySpace — List. Rent. Find your space.",
					width: 230,
					height: 77
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "header-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "launch-status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "status-dot" }), " Something good is on its way"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "brand",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#spaces",
						children: ["Take a sneak peek ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero",
				id: "preview",
				"aria-label": "RentMySpace coming soon",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "hero-photo",
						src: scene.image,
						alt: scene.caption,
						width: 1920,
						height: 1024
					}, scene.image),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eyebrow reveal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 14 }), " A NEW WAY TO FIND YOUR SPACE"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "reveal",
								children: [
									"Great spaces.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Coming soon." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "hero-description reveal reveal-delay",
								children: [
									"A space to live. A place to work. A reason to celebrate.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Your next chapter starts with RentMySpace."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-cta reveal reveal-delay",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "hero",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#spaces",
										children: ["Explore what's coming ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-verified reveal reveal-delay",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 15 }), " Every space physically verified by our team"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-note reveal reveal-delay",
								children: "New possibilities. Just around the corner."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-bottom",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "scene-tabs",
							"aria-label": "Preview space categories",
							children: spaces.map((space, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "scene",
								"aria-pressed": active === index,
								onClick: () => selectSpace(index),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(space.icon, { size: 13 }), space.name]
							}, space.name))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "scene-caption",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 12,
								className: "inline mr-1"
							}), scene.caption] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [scene.category, " · A glimpse of what's ahead"] })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "intro-strip",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "More than a space." }), " A world of possibilities."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "strip-tags",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Thoughtfully connected"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}), "Made for real life"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}), "Verified in person"] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "trust-section",
				id: "trust",
				"aria-label": "How we verify spaces",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "trust-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "trust-head",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "section-label trust-label",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 13 }), " VERIFIED IN PERSON"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 90,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Every space, checked by a real person." })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 180,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We physically visit and verify every property before it appears on RentMySpace. What you see is what's really there." })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "trust-steps",
							children: checks.map((check, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: index * 130,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "trust-step",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "step-index",
											children: String(index + 1).padStart(2, "0")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "step-icon",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(check.icon, { size: 18 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: check.title }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: check.description })
									]
								})
							}, check.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 430,
							className: "trust-bar",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "trust-pill",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { size: 14 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "100%" }),
										" of spaces verified on site"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "trust-pill",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 14 }), " Photos taken during the visit"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "trust-pill",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Unverified listings never go live"]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "spaces-section",
				id: "spaces",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label",
						children: "ONE PLATFORM. ENDLESS POSSIBILITIES."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Whatever's next, there's a space for it." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From everyday beginnings to once-in-a-lifetime moments. Find your kind of space." })]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-grid",
						children: spaces.map((space, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "space",
							onClick: () => selectSpace(index, true),
							"aria-label": `Preview ${space.category}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-image",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: space.image,
										alt: space.category,
										width: 1024,
										height: 768,
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "space-tag",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(space.icon, { size: 12 }), space.category]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "space-verified",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 11 }), "Verified"]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-info",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: space.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: space.description })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "space-arrow" })]
							})]
						}, space.name))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bottom-banner",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bottom-inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Your space could be someone's perfect place." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A little extra room. A whole lot of potential." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "brand",
							children: ["Have a space to share? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Your space. New possibilities." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "dialog-copy",
						children: "We're getting RentMySpace ready for spaces to live, work, and celebrate. Property listings will open when we launch. Check back here for what's next."
					})] }) })] })]
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "footer",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "footer-brand",
					href: "#",
					children: ["RentMySpace", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "List. Rent. Find your space." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" RentMySpace. All rights reserved."
				] })
			]
		})
	] });
}
//#endregion
export { Index as component };
