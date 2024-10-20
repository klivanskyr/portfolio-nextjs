import Link from "next/link";
import Image from "next/image";
import placeholder from "@/assets/placeholder_image.png"

type CardProps = {
    size: "small" | "large";
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
    openInNewTab?: boolean;
    skills?: { id: string; name: string }[];
    reversed?: boolean;
};

export default function Card2({ title, description, imageUrl, link, openInNewTab, skills, reversed }: CardProps) {
    return (
        <div className={`border-2 shadow-medium rounded-lg flex ${reversed ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
            <div className={`relative ${size === "small" ? "w-1/3" : "w-full h-[200px] md:h-[400px] lg:h-[500px]"}`}>
                {link ? (
                    <Link href={link} target={openInNewTab ? "_blank" : "_self"}>
                        <Image src={imageUrl} alt={title} fill style={{ objectFit: 'contain' }} />
                    </Link>
                ) : (
                    <Image src={placeholder.src} alt={title} fill style={{ objectFit: 'contain' }} />
                )}
            </div>
            <div className={`flex flex-col justify-center ${size === "small" ? "w-2/3" : "w-full"} gap-4 overflow-y-scroll text-wrap`}>
                <h2 className="font-bold">{title}</h2>
                <p className="text-sm">{description}</p>
                <div className="flex flex-row gap-2 py-4">
                    {skills && skills.map(skill => (
                        <p className="italic font-medium" key={skill.id}>{skill.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}