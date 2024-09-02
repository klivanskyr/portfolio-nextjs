interface ClassNames {
    wrapper?: string;
    title?: string;
    header?: string;
    body?: string;
}

export default function Card1({ title, header, body, classNames={ title: "", header: "", body: "" } }: { title: string, header: string, body: string | string[], classNames?: ClassNames }) {
    return (
        <div className={`border-2 rounded-lg shadow-small p-6 ${classNames.wrapper}`}>
            <div className={`text-xl font-bold underline underline-offset-2 ${classNames.title}`}>
                {title}
            </div>
            <div className={`font-semibold ml-2 p-1 ${classNames.header}`}>
                {header}
            </div>
            <div className={`ml-4 ${classNames.body}`}>
                {typeof body === "string" ? body 
                : 
                <div className="grid grid-cols-1 gap-4">
                    {body.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>}
            </div>
        </div>
    )
}