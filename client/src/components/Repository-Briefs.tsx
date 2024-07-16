import type { RepositoryBriefsPropsTypes } from '@_types/components/Repository-Briefs';
import { humanize } from '@utils/text-converter';
import Typography from './Typography';

const RepositoryBriefs = ({ title, counts }: RepositoryBriefsPropsTypes) => {
    if (!title) return null;

    return (
        <div className="bg-gray-light md:w-1/2 sm:w-full p-2 md:p-3">
            <Typography variant="h3">{humanize(title)}</Typography>

            {Object.entries(counts).map(([key, value]) => (
                <Typography key={key} variant="p">
                    {value}
                </Typography>
            ))}
        </div>
    );
};

export default RepositoryBriefs;
