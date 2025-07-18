const PlusIcon = ({ className }: { className?: string }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 28 28" fill="none" className={className}>
            <path d="M14 1.5V26.5M26.5 14H1.5" stroke="#fff" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default PlusIcon;