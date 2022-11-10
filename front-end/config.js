module.exports = {
    dev: {
        apiUrl: "http://localhost:",
        port: 5051
    },
    production: {
        apiUrl: process.env.API_URL,
        port: process.env.port
    }
}