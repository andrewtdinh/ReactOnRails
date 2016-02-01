module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
