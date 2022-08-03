type TAvatarSize =
    "extraSmall"
    | "small"
    | "medium"
    | "large"
    | "extraLarge"

export interface IAvatarProps {
    name?: string;
    size?: TAvatarSize;
    src?: string;
    color?: string;
}