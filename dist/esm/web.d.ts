import { WebPlugin } from '@capacitor/core';
import type { IntercomPlugin, IntercomPushNotificationData, IntercomUserUpdateOptions } from './definitions';
export declare class IntercomWeb extends WebPlugin implements IntercomPlugin {
    constructor();
    registerIdentifiedUser(options: {
        userId?: string;
        email?: string;
    }): Promise<void>;
    loadWithKeys(options: {
        appId?: string;
        apiKeyIOS?: string;
        apiKeyAndroid?: string;
    }): Promise<void>;
    registerUnidentifiedUser(): Promise<void>;
    updateUser(options: IntercomUserUpdateOptions): Promise<void>;
    logout(): Promise<void>;
    logEvent(options: {
        name: string;
        data?: any;
    }): Promise<void>;
    displayMessenger(): Promise<void>;
    displayMessageComposer(options: {
        message: string;
    }): Promise<void>;
    displayHelpCenter(): Promise<void>;
    hideMessenger(): Promise<void>;
    displayLauncher(): Promise<void>;
    hideLauncher(): Promise<void>;
    displayInAppMessages(): Promise<void>;
    hideInAppMessages(): Promise<void>;
    displayCarousel(options: {
        carouselId: string;
    }): Promise<void>;
    setUserHash(options: {
        hmac: string;
    }): Promise<void>;
    setBottomPadding(options: {
        value: string;
    }): Promise<void>;
    receivePush(notification: IntercomPushNotificationData): Promise<void>;
    sendPushTokenToIntercom(options: {
        value: string;
    }): Promise<void>;
    displayArticle(options: {
        articleId: string;
    }): Promise<void>;
}
declare const Intercom: IntercomWeb;
export { Intercom };
