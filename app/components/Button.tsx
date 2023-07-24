'use client';

import clsx from "clsx";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined,
    fullWidth?: boolean,
    children: React.ReactNode,
    onClick?: () => void,
    secondary?: boolean,
    danger?: boolean,
    disabled?: boolean,
}

const Button = ({ children, danger, disabled, fullWidth, onClick, secondary, type }: ButtonProps): JSX.Element => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={clsx(`
            flex
            justify-center
            rounded-md
            px-3
            py-2
            text-sm
            font-semibold
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2`,
                disabled && 'opacity-50 cursor-default',
                fullWidth && 'w-full',
                secondary ? 'text-gray-900' : 'text-white',
                danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
                !secondary && !danger && 'bg-purple-500 hover:bg-purple-600 focus-visible:outline-purple-600',
            )}
        >
            {children}
        </button>
    )
}

export default Button;