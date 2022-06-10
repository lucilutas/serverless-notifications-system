import {templateGenerator} from "./templateGenerator";

export const forgotPasswordUseCase = () => ({
    subject: 'Reset your password',
    content: templateGenerator(
        'Reset your password',
        `You're receiving this e-mail because you requested a password reset for your account.</br>Please tap the button below to choose a new password.`,
        {
            actionText: 'Reset password',
            actionUrl: 'https://saltandpepper.co'
        }
    ),
})
