import type { CardPropsTypes, GradientDirection } from '@_types/components/Card';
import { cn } from '@utils/cn';
import Typography from './Typography';

const Card = (props: CardPropsTypes) => {
    const {
        title,
        description,
        showTitle = true,
        showDescription = true,
        showBadge = false,
        children,
        badgeText,
        gradient,
        gradientDirection,
        gradientStartColor,
        gradientEndColor,
    } = props;

    const gradientDirectionClasses: { [key in GradientDirection]: string } = {
        right: 'bg-gradient-to-r',
        left: 'bg-gradient-to-l',
        top: 'bg-gradient-to-t',
        bottom: 'bg-gradient-to-b',
        topRight: 'bg-gradient-to-tr',
        topLeft: 'bg-gradient-to-tl',
        bottomRight: 'bg-gradient-to-br',
        bottomLeft: 'bg-gradient-to-bl',
    };

    const cardsCombinedClassNames = cn(
        'flex items-center justify-between shadow-md mt-3',
        props.rounded && 'rounded-lg',
        props.padding && 'p-4',
        props.shadow && 'shadow-md',
        props.shadowColor ? 'shadow-' + props.shadowColor : undefined,
        props.bgColor ? 'bg-' + props.bgColor : undefined,
        gradient &&
            gradientDirection &&
            gradientStartColor &&
            gradientEndColor &&
            `${gradientDirectionClasses[gradientDirection]} from-${gradientStartColor} to-${gradientEndColor}`,
    );

    return (
        <div className={cardsCombinedClassNames}>
            <div>
                <div className="flex justify-between mb-2">
                    {showTitle && (
                        <Typography variant="h3" className="text-bold text-gray-900">
                            {title}
                        </Typography>
                    )}
                    {showBadge && (
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            {badgeText}
                        </span>
                    )}
                </div>
                {/* <h3 className="mt-2 text-xl font-bold text-yellow-500 text-left">+ 150.000 ₭</h3> */}
                {showDescription && (
                    <Typography variant="p">
                        {description ||
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit harum vitae deleniti in aspernatur architecto dignissimos maxime nesciunt impedit earum sed, tempora itaque similique nobis reiciendis neque illum voluptatum?'}
                    </Typography>
                )}
                {/* <p className="text-sm font-semibold text-gray-400">Last Transaction</p> */}
                {children}
            </div>
        </div>
    );
};

export default Card;
