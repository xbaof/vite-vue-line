module.exports = {
  /* 继承某些已有的规则 */
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html/vue',
    'stylelint-config-recess-order'
  ],
  overrides: [
    // 扫描 .vue/html 文件中的<style>标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss'
    }
  ],
  /**
   * null  => 关闭该规则
   */
  rules: {
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'string-quotes': 'single', // 指定字符串使用单引号或双引号
    'selector-class-pattern': null, // 强制选择器类名的格式
    'unit-case': 'lower', // 指定单位的大小写 "lower(全小写)"|"upper(全大写)"
    'color-hex-case': 'lower', // 指定 16 进制颜色的大小写 "lower(全小写)"|"upper(全大写)"
    'color-hex-length': 'long', // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep', 'export']
      }
    ]
  }
}
