module.exports = {
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],
                    "--primary": "#40A578",
                    "--primary-btn": "#40A578",
                    "primary": "#40A578",
                    "secondary": "#9DDE8B",
                    "accent": "#E6FF94",
                    "neutral": "#ff00ff",
                    "base-100": "#ff00ff",
                    "info": "#0000ff",
                    "success": "#00ff00",
                    "warning": "#00ff00",
                    "error": "#ff0000",
                    'base-content' : '#1e2734',
                },
            },
        ],
    },
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
};
