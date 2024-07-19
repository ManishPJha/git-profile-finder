import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import type { GridItemPropsTypes } from '@_types/components/GridViews';
import type { IRepository } from '@_types/features/repositories';
import Button from './Button';
import Card from './Card';

const GridItem = ({ item }: GridItemPropsTypes<IRepository>) => {
    const badgeText = useMemo(() => {
        if (item.topics.includes('github-config')) return 'config';
        else if (!item.forked) return item.language;
        else return 'forked';
    }, [item]);

    return (
        <div className="grid-item">
            <Card
                padding
                gradient
                shadow
                showBadge
                rounded
                title={item.name}
                description={item.description}
                badgeText={badgeText}
                bgColor="white"
                shadowColor="white"
                gradientDirection="topRight"
                gradientStartColor="yellow-500"
                gradientEndColor="gray-300" // add new gradient colors to safelist in tailwind configuration to apply effect.
            >
                {item.repository_url && (
                    <Link to={item.repository_url} target="_blank">
                        <Button
                            variant="primary"
                            className="mt-4 bg-yellow-200 text-black hover:bg-yellow-300 hover:text-black"
                            rounded
                        >
                            View on GitHub
                        </Button>
                    </Link>
                )}
            </Card>
        </div>
    );
};

export default GridItem;
