import { forwardRef } from 'react';

import type { ButtonPropsTypes } from '@_types/components/Button';
import { cn } from '@utils/cn';

const Button = forwardRef<any, ButtonPropsTypes>((props, ref) => {
    const {
        className,
        variant,
        icon,
        iconPosition,
        fullWidth,
        loading,
        disabled,
        children,
        rounded = false,
        ...rest
    } = props;

    const buttonCombinedClassNames = cn([
        'text-white',
        'px-4 py-2',
        'transition-all duration-200 hover:bg-blue-700 hover:text-white',
        rounded && 'rounded-md',
        fullWidth && 'w-full',
        loading && 'opacity-50',
        disabled && 'opacity-50 cursor-not-allowed',
        variant === 'primary' && 'bg-blue-500',
        variant === 'secondary' && 'bg-gray-500',
        variant === 'tertiary' && 'bg-tertiary',
        variant === 'ghost' && 'border border-gray-500',
        className,
    ]);

    return (
        <button
            ref={ref}
            {...rest}
            className={buttonCombinedClassNames}
            disabled={disabled || loading}
        >
            {loading && (
                <div className="flex items-center gap-2">
                    <div className="spinner-border text-gray-500" role="status" />
                    <span className="sr-only">Loading...</span>
                </div>
            )}
            {icon && iconPosition === 'left' && (
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6">{icon}</div>
                    <div>{children}</div>
                </div>
            )}
            {icon && iconPosition === 'right' && (
                <div className="flex items-center gap-2">
                    <div>{children}</div>
                    <div className="w-6 h-6">{icon}</div>
                </div>
            )}
            {!icon && children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
