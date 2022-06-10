import { Promise } from 'bluebird';
import { publishToTopic } from '../../utils/pubSub';
import {config} from "../../config";

export const decompositionServiceWorker = async (data, connection, dbModels) => {
    const { notificationType, targetAggregation } = data;

    const targetedUsers = await dbModels[targetAggregation.targetModel]
        .aggregate(targetAggregation.steps)
        .allowDiskUse(true)
        .exec();

    await Promise.map(
        (targetedUsers), async (targetedUser) => {
            const topic = config.gcloud.emailNotificationServiceWorkerTopic
            await publishToTopic({ notificationType, user: targetedUser }, topic);
        },
        { concurrency: 10 },
    );
};
