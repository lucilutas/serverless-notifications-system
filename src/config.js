export const config = {
    mongoDB: process.env.MONGO_DB,
    sendinblue: {
        key: process.env.SENDINBLUE_KEY,
        fromEmail: process.env.SENDINBLUE_FROM_EMAIL,
        fromName: process.env.SENDINBLUE_FROM_NAME,
    },
    gcloud: {
        emailNotificationServiceWorkerTopic: process.env.EMAIL_NOTIFICATION_SERVICE_WORKER_TOPIC,
        pushNotificationQueue: process.env.GCLOUD_PUSH_NOTIFICATION_QUEUE,
        pushNotificationServiceFunctionUrl: process.env.GCLOUD_PUSH_NOTIFICATION_SERVICE_FUNCTION_URL,
        emailNotificationQueue: process.env.GCLOUD_EMAIL_NOTIFICATION_QUEUE,
        emailNotificationServiceFunctionUrl: process.env.GCLOUD_EMAIL_NOTIFICATION_SERVICE_FUNCTION_URL,
    },
};
