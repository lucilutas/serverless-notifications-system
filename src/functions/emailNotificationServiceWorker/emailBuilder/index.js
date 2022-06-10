import {forgotPasswordUseCase, newPromotionUseCase, signUpUseCase} from "./useCases";

export const emailBuilder = (notificationType) => {
    switch (notificationType) {
        case 'signUp':
            return signUpUseCase();
        case 'forgotPassword':
            return forgotPasswordUseCase();
        case 'newPromotion':
            return newPromotionUseCase();
        default:
            return null;
    }
}
