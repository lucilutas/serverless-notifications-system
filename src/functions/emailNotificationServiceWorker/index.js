import {emailBuilder} from "./emailBuilder";
import {sendMail} from "../../utils/sendinblue";

export const emailNotificationServiceWorker = async (data) => {
    const {user, notificationType} = data;
    const {subject, content} = emailBuilder(notificationType)
    const response = await sendMail({
        to: {
            email: user.email,
            name: user.name
        },
        subject,
        content
    })
    console.log(response)
};
