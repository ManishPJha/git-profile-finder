import { useEffect } from 'react';

import { RepositoryDetailsPropsTypes } from '@_types/components/Repository-Details';
import Button from './Button';
import GridView from './GridView';

const RepositoryDetails = ({ repositories, hasMore, onNextPage }: RepositoryDetailsPropsTypes) => {
    useEffect(() => {
        console.log('💛 RepositoryDetails is mounted...');
        return () => {
            console.log('🌊 RepositoryDetails is unmounted...');
        };
    }, []);

    return (
        <>
            <GridView gridCols={3} gridGap={4} items={repositories} className="mb-12" />

            <div className="text-center md:mb-12 sm:mb-8">
                <Button id="btn-loader" variant="primary" onClick={onNextPage} disabled={!hasMore}>
                    Load More
                </Button>
            </div>
        </>
    );
};

export default RepositoryDetails;
