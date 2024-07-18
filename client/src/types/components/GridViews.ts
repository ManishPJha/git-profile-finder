export interface GridViewPropsTypes<T = {}> {
    items: Array<T>;
    className?: string;
    gridCols: number;
    gridGap?: number;
    onItemClick?: (item: T) => void;
}

export interface GridItemPropsTypes<T = null> {
    item: T;
}
