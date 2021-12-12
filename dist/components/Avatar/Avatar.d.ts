import { FC } from "react";
import "./Avatar.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type AvatarPropsType = defaultProps & {
    /**
     * Круглый аватар
     */
    rounded?: boolean;
    /**
     * Ссылка на картинку аватара
     */
    avatarUrl?: string;
    /**
     * Имя (Аватар показывает первые буквы имени, если изображения нет)
     */
    text: string;
    /**
     * Размер аватара
     */
    size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    autoColor?: boolean;
};
/**
 * Компонент для показа аватара пользователя
 */
declare const Avatar: FC<AvatarPropsType>;
export default Avatar;
