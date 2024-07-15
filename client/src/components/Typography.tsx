import { forwardRef } from 'react';

import { type TypographyPropsTypes } from '@_types/components/Typography';
import { cn } from '@utils/cn';

const Typography = forwardRef<any, TypographyPropsTypes>((props, ref) => {
    const { variant, className, children, ...rest } = props;

    const variantClasses: { [key in TypographyPropsTypes['variant']]: string } = {
        h1: 'text-4xl font-bold',
        h2: 'text-3xl font-bold',
        h3: 'text-2xl font-bold',
        h4: 'text-xl font-bold',
        h5: 'text-lg font-bold',
        h6: 'text-base font-bold',
        p: 'text-base',
        span: 'text-base',
        strong: 'font-bold',
        em: 'font-italic',
        code: 'text-sm text-gray-600',
    };

    const typographyCombinedClasses = cn([variantClasses[variant], className]);

    const Component = variant;

    return (
        <Component ref={ref} className={typographyCombinedClasses} {...rest}>
            {children}
        </Component>
    );
});

Typography.displayName = 'Typography';

export default Typography;
