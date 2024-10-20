import Image from "next/image";
import Link from "next/link";

export default function SmallCard(
    { title, description, imageUrl, link, openInNewTab, skills }:
    { title: string, description: string, imageUrl: string, link: string, openInNewTab: boolean, skills: { id: string, name: string }[] }) {

    return (
        <div className="w-full h-[600px] flex flex-col items-center shadow-supalarge dark:border-[1.35px] rounded-xl overflow-hidden">
            {link ? (
                    <Link className="w-fit h-fit" href={link} target={openInNewTab ? "_blank" : "_self"}>
                        <Image src={imageUrl} alt={title} width={600} height={500} priority />
                    </Link>
                ) : (
                    <Image src={imageUrl} alt={title} width={600} height={500} priority />
                )
            }
            <div className="flex flex-col justify-between h-full px-4 pt-4 border-t-1 border-gray-200">
                <div className="flex flex-col h-full">
                    <h2 className="font-bold mb-1 text-center dark:text-white">{title}</h2>
                    <p className="font-[350] text-sm dark:text-gray-300 dark:font-light">{description}</p>
                </div>
                <div className="flex flex-row gap-2 py-4">
                    {skills.map((skill, index) => (
                        <p className="italic font-medium flex-wrap" key={index}>{skill.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}