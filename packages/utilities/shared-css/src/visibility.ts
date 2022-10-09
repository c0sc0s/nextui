import {css} from "@nextui-org/system";

export const sharedVisuallyHidden = css({
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute",
});

export const cssHideIn = css({
  variants: {
    hideIn: {
      xs: {
        "@xsMax": {
          display: "none",
        },
      },
      sm: {
        "@smMax": {
          display: "none",
        },
      },
      md: {
        "@mdMax": {
          display: "none",
        },
      },
      lg: {
        "@lgMax": {
          display: "none",
        },
      },
      xl: {
        "@xlMax": {
          display: "none",
        },
      },
    },
  },
});

export const cssShowIn = css({
  variants: {
    showIn: {
      xs: {
        "@xs": {
          display: "none",
        },
      },
      sm: {
        "@sm": {
          display: "none",
        },
      },
      md: {
        "@md": {
          display: "none",
        },
      },
      lg: {
        "@lg": {
          display: "none",
        },
      },
      xl: {
        "@xl": {
          display: "none",
        },
      },
    },
  },
});

export const cssHideShowIn = css(cssHideIn, cssShowIn);