export const updateThemeColor = (isDark) => {
  const metaTag = document.querySelector("meta[name='theme-color']");

  if (metaTag) {
    const darkColor = "#0a0a0a"; //neutral-950
    const lightColor = "#fffbeb"; //yellow-50

    metaTag.setAttribute("content", isDark ? darkColor : lightColor);
  }
};
