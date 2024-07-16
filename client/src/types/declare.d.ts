declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content as string;
}

declare module '*.png' {
    const content: string;
    export default content as string;
}

declare module '*.jpeg' {
    const content: string;
    export default content as string;
}

declare module '*.jpg' {
    const content: string;
    export default content as string;
}

declare module '*.gif' {
    const content: string;
    export default content as string;
}

declare type Nullable<T = string> = T | null;
