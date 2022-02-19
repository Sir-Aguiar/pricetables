module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'card-header': '#e1e1e2',
        'basic': '',
        'pro':'#facb2f'
      },
      screens: {
        'mobile': { 'min': '260px', 'max': '900px' },
        'laptop': { 'min': '901px', 'max': '1100px' },
        'desktop': { 'min': '1280px' }
      },
      spacing: {
        'card': "490px",
        'cardw':'340px',
        'ccard':'490px',
        'smline':'1px'
      }
    },
  },
  plugins: [],
}
