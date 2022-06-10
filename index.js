import { decompositionServiceWorker, emailNotificationServiceWorker } from './src/functions';
import { getMongoModels, setupAndGetMongoConnection } from './src/repository/mongo';

let connection = null;
let dbModels = null;

module.exports.decompositionServiceWorker = async (message, context) => {
    connection = await setupAndGetMongoConnection(connection).catch((err) => {
        console.error('< getAndStoreViews handler > setupAndGetMongoConnection', err);
    });

    if (!dbModels) {
        dbModels = getMongoModels(connection);
    }

    console.log(dbModels)

    const data = JSON.parse(Buffer.from(message.data, 'base64').toString());

    await decompositionServiceWorker(data, connection, dbModels);
};

module.exports.emailNotificationServiceWorker = async (message, context) => {
    const data = JSON.parse(Buffer.from(message.data, 'base64').toString());

    await emailNotificationServiceWorker(data);
};
