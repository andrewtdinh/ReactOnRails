module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    output: {
        path: __dirname,
        filename: "/app/assets/javascripts"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
