import {templateGenerator} from "./templateGenerator";

export const newPromotionUseCase = () => ({
    subject: 'New promotion available',
    content: templateGenerator(
        'New promotion available',
        `You're receiving this e-mail because there are new promotions available!</br>Tap the button below to view them.`,
        {
            actionText: 'View Promotions',
            actionUrl: 'https://saltandpepper.co'
        }
    )
})
