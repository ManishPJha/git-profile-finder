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
            <GridView gridCols={3} gridGap={8} items={repositories} className="mb-4" />

            <div className="text-center">
                <Button id="btn-loader" variant="primary" onClick={onNextPage} disabled={!hasMore}>
                    Load More
                </Button>
            </div>
        </>
    );
};

export default RepositoryDetails;
