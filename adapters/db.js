const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "truck_company_api",
    password: "p1ostGR3",
    port: 5433,
})

module.exports=pool