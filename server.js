const express           = require('express');
const bodyParser        = require('body-parser');
const morgan            = require('morgan');
const swaggerUi         = require('swagger-ui-express');
const routes            = require('./routes/routes');
const db                = require('./config/db');
const swaggerDocument   = require('./api/swagger.json');
const logger            = require('./config/logger');
const seed              = require('./models/seed/dml');
const { port, dbEnv }   = require('./config/config');
const cors              = require('cors');
const jwt               = require('./helpers/middleware');
const errorHandler      = require('./helpers/error-handler');
const app               = express();


app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(jwt());
app.use(errorHandler);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port);

db.sequelize.sync({
    force: (dbEnv.forceSync !== "0"),
    logging: (msg) => logger.info(msg)
}).then(() => {
    if(dbEnv.seed !== "0"){
        seed.insert();
    }
});

routes(app);