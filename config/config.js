const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT,
    dbEnv: {
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        db: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT,
        forceSync: process.env.DB_FORCESYNC,
        seed: process.env.DB_SEED
    },
    jwtEnv: {
        secret: process.env.JWT_SECRET,
        algorithm: process.env.JWT_ALGORITHM,
        lifetime: process.env.JWT_LIFETIME
    },
    logPath: process.env.LOG_PATH,
    bcrytSaltRounds: process.env.BCRYPT_SALT_ROUNDS
};