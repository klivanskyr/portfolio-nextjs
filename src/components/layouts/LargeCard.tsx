import Image from "next/image";
import Link from "next/link";

export default function SmallCard(
    { title, description, imageUrl, link, openInNewTab, reversed, skills }:
    { title: string, description: string, imageUrl: string, link: string, openInNewTab: boolean, reversed?: boolean, skills: { id: string, name: string }[] }) {

    return (
        <div className={`w-full h-[300px] relative flex ${reversed ? "flex-row-reverse" : "flex-row"} shadow-supalarge shadow-gray-200 dark:shadow-none border-2 dark:border-1.5 border-gray-200 rounded-xl`}>
            <div className="flex flex-row w-fit h-full justify-center items-center p-4">
                {link ? (
                        <Link className="w-fit h-fit" href={link} target={openInNewTab ? "_blank" : "_self"}>
                            <Image src={imageUrl} alt={title} width={400} height={300} priority />
                        </Link>
                    ) : (
                        <Image src={imageUrl} alt={title} width={400} height={300} priority />
                    )
                }
            </div>
            <div className="w-10/12 p-4 pb-4 flex flex-col justify-between overflow-y-auto">
                <div className="flex flex-col justify-center p-4">
                    <h2 className="font-bold dark:text-white">{title}</h2>
                    <p className="ml-2 dark:text-gray-300 dark:font-light">{description}</p>
                </div>
                <div className="flex flex-row gap-2 py-4">
                    {skills.map((skill) => (
                        <p className="italic font-medium" key={skill.id}>{skill.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}