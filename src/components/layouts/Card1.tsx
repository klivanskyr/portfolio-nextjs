interface ClassNames {
    wrapper?: string;
    title?: string;
    header?: string;
    body?: string;
}

export default function Card1({ title, header, body, classNames={ title: "", header: "", body: "" } }: { title: string, header: string, body: string, classNames?: ClassNames }) {
    return (
        <div className={`border-2 rounded-lg shadow-small p-6 ${classNames.wrapper}`}>
            <div className={`text-xl font-bold underline underline-offset-2 ${classNames.title}`}>
                {title}
            </div>
            <div className={`font-semibold ml-2 p-1 ${classNames.header}`}>
                {header}
            </div>
            <div className={`ml-4 ${classNames.body}`}>
                {body}
            </div>
        </div>
    )
}