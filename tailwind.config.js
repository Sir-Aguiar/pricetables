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
        'mobile': { 'min': '260px', 'max': '650px' },
        'tablet': { 'min': '651px', 'max': '750px' },
        'laptop': { 'min': '751px', 'max': '1100px' },
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
