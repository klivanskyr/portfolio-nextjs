import Link from "next/link"

type Contact = {
    id: string,
    name: string,
    link: string,
    open_in_new_tab: boolean,
    image_url?: string,
}

const contacts: Contact[] = [
    {
        id: "1",
        name: "Email",
        link: "/email",
        open_in_new_tab: false
    },
    {
        id: "2",
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ryan-klivansky/",
        open_in_new_tab: true
    },
    {
        id: "3",
        name: "GitHub",
        link: "https://github.com/klivanskyr",
        open_in_new_tab: true
    },
    {
        id: "4",
        name: "Resume",
        link: "https://drive.google.com/file/d/1A_H2PG6GLbc9QQTymmypOW68ZX-iKb_s/view?usp=sharing",
        open_in_new_tab: true
    }
]

export default function Contact() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-full">
            <div className="grid grid-cols-2 items-center justify-items-center gap-6">
                {contacts ? contacts.map((contact) => (
                    <Link className="shadow-small border-2 rounded-lg p-12 w-full text-center" key={contact.id} href={contact.link} target={contact.open_in_new_tab ? "_blank" : ""}>
                        <h1>{contact.name}</h1>
                    </Link>
                )) : <></>}
            </div>
        </div>
    )
}