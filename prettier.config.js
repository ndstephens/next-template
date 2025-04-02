module.exports = {
  singleQuote: true,
  // 'prettier-plugin-tailwindcss' must be loaded last if you add others to this list
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  tailwindFunctions: ['clsx', 'cva', 'tw'],
  importOrder: [
    '^@/actions/(.*)$',
    '^@/components/(.*)$',
    '^@/features/(.*)$',
    '^@/hooks/(.*)$',
    '^@/lib/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
