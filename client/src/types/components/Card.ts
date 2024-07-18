export type GradientDirection =
    | 'right'
    | 'left'
    | 'top'
    | 'bottom'
    | 'topRight'
    | 'bottomLeft'
    | 'topLeft'
    | 'bottomRight';

export interface CardPropsTypes {
    children?: React.ReactNode;
    title: string;
    className?: string;
    description?: Nullable;
    image?: string;
    // redirectUrl?: string;
    showTitle?: boolean;
    showDescription?: boolean;
    showImage?: boolean;
    bgColor?: string;
    shadow?: boolean;
    shadowColor?: string;
    border?: boolean;
    gradient?: boolean;
    gradientDirection?: GradientDirection;
    gradientStartColor?: string;
    gradientEndColor?: string;
    rounded?: boolean;
    borderRadius?: number;
    padding: boolean;
    bgImage?: boolean;
    bgImageSrc?: string;
}
