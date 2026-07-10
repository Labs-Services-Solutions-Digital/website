tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'General Sans', 'ui-sans-serif', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
        glow: '0 18px 60px rgba(34, 197, 94, 0.12)'
      },
      colors: {
        lssd: {
          night: '#0b1120',
          panel: '#111827',
          line: '#243041',
          muted: '#8ca0b3',
          accent: '#10b981',
          accent2: '#38bdf8',
          paper: '#f8fafc'
        }
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)'
      }
    }
  }
}