import { jsx } from 'react/jsx-runtime';
import 'react';
import { cva } from 'class-variance-authority';
import { c as cn } from './utils_B05Dmz_H.mjs';

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        celestial: "bg-ranks-celestial text-ranks-celestial-foreground",
        immortal: "bg-ranks-immortal text-ranks-immortal-foreground",
        emperor: "bg-ranks-emperor text-ranks-emperor-foreground",
        shogun: "bg-ranks-shogun text-ranks-shogun-foreground",
        samurai: "bg-ranks-samurai text-ranks-samurai-foreground",
        pancake: "bg-ranks-pancake text-ranks-pancake-foreground",
        cherry: "bg-servers-cherry text-servers-cherry-foreground",
        spirit: "bg-servers-spirit text-servers-spirit-foreground",
        lotus: "bg-servers-lotus text-servers-lotus-foreground",
        tulip: "bg-servers-tulip text-servers-tulip-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

function ItemTypeBadge({ type }) {
  if (type === "magic/infinite") {
    return /* @__PURE__ */ jsx(Badge, { className: "no-underline", variant: "immortal", children: type });
  } else if (type === "weapon") {
    return /* @__PURE__ */ jsx(Badge, { className: "no-underline", children: type });
  } else if (type === "armor") {
    return /* @__PURE__ */ jsx(Badge, { className: "no-underline", children: type });
  } else if (type === "consumable") {
    return /* @__PURE__ */ jsx(Badge, { className: "no-underline", children: type });
  } else if (type === "tool") {
    return /* @__PURE__ */ jsx(Badge, { className: "no-underline", children: type });
  } else if (type === "key") {
    return /* @__PURE__ */ jsx(Badge, { className: "no-underline", children: "key" });
  }
  return /* @__PURE__ */ jsx(Badge, { className: "no-underline", variant: "cherry", children: type });
}
function CrateTagBadge({ tag }) {
  if (tag === "infinite crate") {
    return /* @__PURE__ */ jsx(Badge, { className: "no-underline", variant: "immortal", children: tag });
  } else if (tag === "season") {
    return /* @__PURE__ */ jsx(Badge, { className: "no-underline", children: tag });
  } else if (tag === "lt") {
    return /* @__PURE__ */ jsx(Badge, { className: "no-underline", children: tag });
  } else if (tag === "holiday") {
    return /* @__PURE__ */ jsx(Badge, { className: "no-underline", children: tag });
  }
  return /* @__PURE__ */ jsx(Badge, { className: "no-underline", children: tag });
}

export { Badge as B, CrateTagBadge as C, ItemTypeBadge as I };
