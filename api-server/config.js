module.exports = {
    //dev enviorment connection string is the localhost docker enviornment
    dev:{
        connectionString: 'postgresql://postgres:docker@127.0.0.1:5432/fullstackdb',
        port: '5050'
    },
    //production enviorment connection string is the database on render
    production:{
        connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
        port: process.env.PORT
    }
}