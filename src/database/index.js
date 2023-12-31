const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const Channel = require('../models/Channel');
const User = require('../models/User');
const Sensor = require('../models/Sensor')
const TemperatureLog = require('../models/TemperatureLogs')


const connection = new Sequelize(process.env.DB_URI,dbConfig);
User.init(connection);
Channel.init(connection);
Sensor.init(connection);
TemperatureLog.init(connection);

Sensor.associate(connection.models);
Channel.associate(connection.models);
TemperatureLog.associate(connection.models);
User.associate(connection.models);

module.exports = connection;