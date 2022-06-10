import {templateGenerator} from "./templateGenerator";

export const signUpUseCase = (user) => ({
    subject: 'Welcome!',
    content: templateGenerator(
        `Welcome! `,
        `You're receiving this e-mail because you registered a new account.</br>Please tap the button below to sign in.`,
        {
            actionText: 'Sign in',
            actionUrl: 'https://saltandpepper.co'
        }
    )
})
