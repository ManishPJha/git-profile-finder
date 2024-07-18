import type { GridViewPropsTypes } from '@_types/components/GridViews';
import type { IRepository } from '@_types/features/repositories';
import { cn } from '@utils/cn';
import GridItem from './GridItem';

const GridView = ({
    items,
    gridCols,
    gridGap,
    className,
    onItemClick,
}: GridViewPropsTypes<IRepository>) => {
    const gridClasses: { [key: number]: string } = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3',
        4: 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        5: 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    };

    const gridCombinedClasses = cn(
        'grid grid-flow-row text-neutral-600 gap-8',
        gridCols && gridClasses[gridCols],
        className,
        gridGap ? `gap-${gridGap}` : 'gap-8',
        onItemClick && 'cursor-pointer',
    );

    return (
        <div className={gridCombinedClasses}>
            {items && items.length > 0 ? (
                items.map((item) => <GridItem item={item} key={item.id} />)
            ) : (
                <div>No repositories found</div>
            )}
        </div>
    );
};

export default GridView;
