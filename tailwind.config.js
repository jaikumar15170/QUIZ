export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#10b981',
                danger: '#ef4444',
                dark: '#1f2937',
            },
            animation: {
                'slideInUp': 'slideInUp 0.6s ease-out',
                'slideInDown': 'slideInDown 0.5s ease-out',
                'fadeIn': 'fadeIn 0.5s ease-out',
                'pulse-grow': 'pulse-grow 0.6s ease-out',
                'bounce-smooth': 'bounce-smooth 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'confetti': 'confetti-fall 3s ease-in forwards',
                'shimmer': 'shimmer 2s infinite',
            },
            keyframes: {
                slideInUp: {
                    'from': {
                        'opacity': '0',
                        'transform': 'translateY(30px)',
                    },
                    'to': {
                        'opacity': '1',
                        'transform': 'translateY(0)',
                    },
                },
                slideInDown: {
                    'from': {
                        'opacity': '0',
                        'transform': 'translateY(-20px)',
                    },
                    'to': {
                        'opacity': '1',
                        'transform': 'translateY(0)',
                    },
                },
                fadeIn: {
                    'from': {
                        'opacity': '0',
                    },
                    'to': {
                        'opacity': '1',
                    },
                },
                'pulse-grow': {
                    '0%, 100%': {
                        'transform': 'scale(1)',
                    },
                    '50%': {
                        'transform': 'scale(1.05)',
                    },
                },
                'bounce-smooth': {
                    '0%, 100%': {
                        'transform': 'translateY(0)',
                    },
                    '50%': {
                        'transform': 'translateY(-8px)',
                    },
                },
                'float': {
                    '0%, 100%': {
                        'transform': 'translateY(0px)',
                    },
                    '50%': {
                        'transform': 'translateY(-10px)',
                    },
                },
                'confetti-fall': {
                    '0%': {
                        'opacity': '1',
                        'transform': 'translateY(0) rotateZ(0deg)',
                    },
                    '100%': {
                        'opacity': '0',
                        'transform': 'translateY(500px) rotateZ(720deg)',
                    },
                },
                'shimmer': {
                    '0%': {
                        'background-position': '-1000px 0',
                    },
                    '100%': {
                        'background-position': '1000px 0',
                    },
                },
            },
            scale: {
                '102': '1.02',
            },
        },
    },
    plugins: [],
}
