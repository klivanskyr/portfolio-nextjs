export function MediaText({ className="", left, right, reversed=false }: { className?: string, left: JSX.Element, right: JSX.Element, reversed?: boolean }) {
    return (
        <div className={`${reversed ? "flex-row-reverse justify-between h-full" : "flex-row h-full"} flex ${className}`}>
            {left}
            {right}
        </div>
    )
}