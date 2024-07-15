const themes = {
  dark: {
    '--el-menu-sub-bg-color': '#000c17'
  },
  light: {
    '--basis-color': '#000000d9',
    '--logo-bg-color': '#ffffff',
    '--header-hover-bg-color': 'rgb(0 0 0 / 2.5%)',
    '--header-horizontal-hover-bg-color': 'rgb(0 0 0 / 2.5%)',
    '--el-menu-active-color': 'var(--el-color-primary)',
    '--el-menu-text-color': 'rgba(0, 0, 0, 0.6)',
    '--el-menu-hover-text-color': 'var(--el-color-primary)',
    '--el-menu-bg-color': '#ffffff',
    '--el-menu-sub-bg-color': '#fafafa'
  },
  purple: {
    '--basis-color': '#ffffff',
    '--logo-bg-color': '#002140',
    '--header-bg-color': '#ffffff',
    '--header-hover-bg-color': 'rgb(0 0 0 / 2.5%)',
    '--header-horizontal-hover-bg-color': '#242424',
    '--el-menu-active-color': '#fff',
    '--el-menu-text-color': 'hsl(0deg 0% 100% / 65%)',
    '--el-menu-hover-text-color': 'var(--basis-color)',
    '--el-menu-bg-color': '#001529',
    '--el-menu-sub-bg-color': '#000c17'
  },
  orange: {
    '--el-color-primary': '#ffa726',
    '--el-color-primary-light-3': '#ffc167',
    '--el-color-primary-light-5': '#ffd393',
    '--el-color-primary-light-7': '#ffe5be',
    '--el-color-primary-light-8': '#ffedd4',
    '--el-color-primary-light-9': '#fff6e9',
    '--el-color-primary-dark-2': '#cc861e'
  }
}
export function setTheme(params) {
  const localColor = localStorage.getItem('side-theme') || 'pink'
  const themeColor = params || localColor
  const el = document.documentElement
  for (const key in themes[themeColor]) {
    el.style.setProperty(key, themes[themeColor][key])
  }
  // 本地缓存
  localStorage.setItem('side-theme', themeColor)
}
