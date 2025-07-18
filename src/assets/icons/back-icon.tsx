const BackIcon = ({ className, strock, strockWidth }: { className?: string, strock?: string, strockWidth?: string }) => {
    return (
        <svg width="17" height="10" viewBox="0 0 20 10" fill="none" className={className}>
            <path
                d="M4.75 8.75L1 5M1 5L4.75 1.25M1 5H19"
                stroke={strock ? strock : "#9ea5b1"}
                strokeWidth={strockWidth ? strockWidth : "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default BackIcon