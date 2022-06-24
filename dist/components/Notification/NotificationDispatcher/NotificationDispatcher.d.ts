import { NotificationActionType } from "@utils/hooks/useNotification/useNotification";
interface INotificationDispatcher {
    dispatch: (value: NotificationActionType) => void;
    autoCloseDelay?: number;
    isHovered: boolean;
}
export declare const NotificationDispatcher: (props: INotificationDispatcher) => void;
export {};
