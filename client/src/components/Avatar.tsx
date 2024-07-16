import { forwardRef } from 'react';

import { type AvatarPropsTypes } from '@_types/components/Avatar';
import { cn } from '@utils/cn';

const Avatar = forwardRef<any, AvatarPropsTypes>((props, ref) => {
    const { altText, imageSrc, border, gradient, rounded, size, className } = props;

    const avatarCombinedClassNames = cn([
        // 'w-10 h-10',
        'border-none',
        'bg-white',
        'transition-transform duration-200 hover:scale-110',
        rounded && 'rounded-full',
        border && 'border-2',
        gradient && 'gradient-to-r from-green-500 to-blue-500',
        'h-24 w-24',
        'object-cover',
        'transition-transform duration-200 hover:scale-110',
        'group',
        'cursor-pointer',
        className,
    ]);

    return <img ref={ref} className={avatarCombinedClassNames} src={imageSrc} alt={altText} />;
});

Avatar.displayName = 'Avatar';

export default Avatar;
