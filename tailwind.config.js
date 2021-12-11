module.exports = {
    prefix: "",
    purge: {
        enabled: process.env.NODE_ENV === "production",
        content: ["./src/**/*.{html,ts}"],
    },
    //darkMode: "class", // or 'media' or 'class'
    variants: {
        extend: {},
    },
    plugins: [],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        // colors: {
        //     gray: colors.coolGray,
        //     blue: colors.lightBlue,
        //     red: colors.rose,
        //     pink: colors.fuchsia,
        // },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
};
