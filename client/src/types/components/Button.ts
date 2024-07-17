export type ButtonPropsTypes = {
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
    icon?: React.ReactElement;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    rounded?: boolean;
    id?: string;
    name?: string;
};
