import type { CardPropsTypes, GradientDirection } from '@_types/components/Card';
import { cn } from '@utils/cn';
import Typography from './Typography';

const Card = (props: CardPropsTypes) => {
    const {
        title,
        description,
        showTitle = true,
        showDescription = true,
        showImage,
        children,
    } = props;

    const graidentDirection: { [key in GradientDirection]: string } = {
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
        props.shadow && `shadow-md shadow-${props.shadowColor}`,
        props.bgColor && `bg-${props.bgColor}`,
        props.gradient &&
            props.gradientDirection &&
            `${graidentDirection[props.gradientDirection]} from-${props.gradientStartColor}-500 to-${props.gradientEndColor}-400`,
    );

    return (
        <div className={cardsCombinedClassNames}>
            <div>
                {showTitle && (
                    <Typography variant="h3" className="text-bold text-gray-900">
                        {title}
                    </Typography>
                )}
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
