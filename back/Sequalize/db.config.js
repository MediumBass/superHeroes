const { Sequelize} = require('@sequelize/core');
const { PostgresDialect } = require('@sequelize/postgres');


console.log(process.env.POSTGRES_DB)
const sequelize = new Sequelize(
    {
        dialect: PostgresDialect,
        database: process.env.POSTGRES_DB,
        user:  process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
            pool: {
                    max: 15,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
            }
    }
);


// DB Check
sequelize
    .authenticate()
    .then(() => console.log('Database connected.'))
    .catch((err) => console.error('Cant connect to database:', err));

async function checkTables() {
        try {
                const queryInterface = sequelize.queryInterface;
                const tables = await queryInterface.listTables();
                console.log('Tables:', tables);
        } catch (error) {
                console.error('Cant load models', error);
        }
}
async function syncDatabase() {
                await sequelize.sync(); // Создание таблиц
                await checkTables();
}

syncDatabase();



module.exports = sequelize;