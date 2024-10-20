export function MediaText({ className="", left, right, reversed=false }: { className?: string, left: JSX.Element, right: JSX.Element, reversed?: boolean }) {
    return (
        <div className={`flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-2 ${className}`}>
            <div className={`${!reversed ? "lg:order-first" : "lg:order-last"}`}>
                {left}
            </div>
            <div className={`${!reversed ? "lg:order-last" : "lg:order-first"}`}>
                {right}
            </div>
        </div>
    )
}