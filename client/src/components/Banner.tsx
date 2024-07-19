import { BannerPropsTypes } from '@_types/components/Banner';
import { cn } from '@utils/cn';
import Button from './Button';
import Typography from './Typography';

const Banner = ({
    title,
    description,
    showDescription = true,
    fullWidth,
    className,
    backgroundColor,
    showCtaBtn = false,
    ctaBtnText,
    ctaBtnColor,
    ctaBtnLink,
    ctaBtnBackground,
    ctaBtnClasses,
    shadow = false,
    shadowColor,
    justifyCenter,
}: BannerPropsTypes) => {
    const bannerCombinedClasses = cn(
        'w-full py-10 px-20 flex items-center mt-8 mb-4',
        fullWidth && 'w-full',
        justifyCenter ? 'justify-center text-center' : 'justify-between',
        backgroundColor ? 'bg-' + backgroundColor : undefined,
        shadow && `shadow-lg`,
        shadowColor ? 'shadow-' + shadowColor : undefined,
        className,
    );

    const ctaBtnCombinedClasses = cn(
        ctaBtnColor ? 'text-' + ctaBtnColor : undefined,
        ctaBtnBackground ? 'bg-' + ctaBtnBackground : undefined,
        ctaBtnLink && `transition-all duration-150`,
        ctaBtnClasses,
    );

    return (
        <div className={bannerCombinedClasses}>
            <div className="flex flex-col space-y-2">
                <Typography variant="span" className="text-3xl font-bold">
                    {title}
                </Typography>
                {showDescription && <Typography variant="span">{description}</Typography>}
            </div>

            {showCtaBtn && (
                <Button variant="primary" className={ctaBtnCombinedClasses}>
                    {ctaBtnText}
                </Button>
            )}
        </div>
    );
};

export default Banner;
