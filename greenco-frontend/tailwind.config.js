/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066ff",
        "primary-light": "#3399ff",
        "primary-dark": "#0044cc",
        secondary: "#00cc66",
        "secondary-light": "#66ff99",
        accent: {
          ruby: "#ff0066",
          amethyst: "#9900ff",
          topaz: "#ff6600",
          diamond: "#ffffff",
        },
        "text-dark": "#1a1a1a",
        "text-light": "#7a7a7a",
        "bg-light": "#f0f8ff",
        "bg-dark": "#0a0a0a",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        'hero-overlay': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        'grad-primary': "linear-gradient(135deg, #002266 0%, #0044cc 40%, #0066ff 70%, #3399ff 100%)",
        'grad-secondary': "linear-gradient(135deg, #009933 0%, #00cc66 50%, #66ff99 100%)",
        'grad-vibrant': "linear-gradient(135deg, #0066ff 0%, #9900ff 33%, #ff0066 66%, #00cc66 100%)",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-jewel': 'pulse-jewel 2s ease-in-out infinite',
        'jewel-border': 'jewel-border 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'slideInUp': 'slideInUp 0.8s ease-out',
        'slideInLeft': 'slideInLeft 0.8s ease-out',
        'slideInRight': 'slideInRight 0.8s ease-out',
        'scaleIn': 'scaleIn 0.6s ease-out',
        'rotateIn': 'rotateIn 0.8s ease-out',
        'bounceIn': 'bounceIn 0.8s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'particleFloat': 'particleFloat 6s ease-in-out infinite',
        'gradientShift': 'gradientShift 3s ease infinite',
        'textGlow': 'textGlow 2s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 102, 255, 0.8), 0 0 60px rgba(0, 102, 255, 0.4)' },
        },
        'pulse-jewel': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        'jewel-border': {
          '0%': { borderColor: '#0066ff' },
          '25%': { borderColor: '#ff0066' },
          '50%': { borderColor: '#00cc66' },
          '75%': { borderColor: '#9900ff' },
          '100%': { borderColor: '#0066ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.8)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        rotateIn: {
          from: { opacity: '0', transform: 'rotate(-10deg) scale(0.9)' },
          to: { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: '0.7' },
          '25%': { transform: 'translateY(-20px) translateX(10px) rotate(90deg)', opacity: '1' },
          '50%': { transform: 'translateY(-10px) translateX(-10px) rotate(180deg)', opacity: '0.8' },
          '75%': { transform: 'translateY(-30px) translateX(5px) rotate(270deg)', opacity: '0.9' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textGlow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 102, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 102, 255, 0.8), 0 0 30px rgba(0, 102, 255, 0.6)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '40% 60% 70% 30% / 40% 40% 60% 50%' },
          '25%': { borderRadius: '30% 60% 30% 70% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 40% 50% 60% / 30% 50% 70% 40%' },
          '75%': { borderRadius: '60% 30% 60% 40% / 50% 40% 50% 60%' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
