import placeholder from "@/assets/placeholder_image.png";
import { MediaText } from "@/components/layouts/MediaText";
import Image from "next/image";
import Link from "next/link";

type Skill = {
    id: string,
    name: string,
    image_url: string
}

type Project = {
    id: string,
    name: string,
    link?: string,
    open_in_new_tab?: boolean,
    image_url: string,
    description: string,
    skills_used: Skill[]
}

const projects: Project[] = [
    {
        id: "1",
        name: "Personal Website",
        link: "https://ryanklivansky.com",
        open_in_new_tab: false,
        image_url: placeholder.src,
        description: "My personal website to showcase my projects and skills.",
        skills_used: [
            {
                id: "1",
                name: "React",
                image_url: placeholder.src
            },
            {
                id: "2",
                name: "Next.js",
                image_url: placeholder.src
            },
            {
                id: "3",
                name: "TypeScript",
                image_url: placeholder.src
            }
        ]
    },
    {
        id: "2",
        name: "3D Scene Reconstruction using Structure-From-Motion and NeRF",
        link: "https://drive.google.com/drive/folders/16eO9h-zgj5sj4I5wf54rdTXtQtLy21wy?usp=sharing",
        open_in_new_tab: true,
        image_url: placeholder.src,
        description: "Collaborated in a team of four to develop a 3D scene reconstruction pipeline leveraging Structure-from-Motion (SfM) and Neural Radiance Fields (NeRF), enabling the creation of photorealistic 3D models from 2D images.",
        skills_used: [
            {
                id: "4",
                name: "Python",
                image_url: placeholder.src
            },
            {
                id: "5",
                name: "NumPy",
                image_url: placeholder.src
            },
            {
                id: "6",
                name: "PyTorch",
                image_url: placeholder.src
            }
        ]
    }
]
        


export default function Projects() {
    return (
        <div className="flex flex-col items-center pt-10">
            {projects ? projects.map((project, index) => (
                <MediaText
                    className="my-8 p-4 w-[70%] min-h-[200px] gap-4 border-2" 
                    key={project.id} 
                    left={project.link 
                        ?  <div className="flex flex-col justify-center">
                                <Link href={project.link} target={project.open_in_new_tab ? "_blank" : ""}>
                                    <Image src={project.image_url} alt={project.name} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
                                </Link>
                            </div>
                        :   <div className="flex flex-col justify-center">
                                <Image src={project.image_url} alt={project.name} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
                            </div>
                    } 
                    right={
                        <div className="flex flex-col justify-between h-full p-2 gap-4 max-w-[70%]">
                            <div className="flex flex-col">
                                <h2 className="font-semibold">{project.name}</h2>
                                <p className="ml-2">{project.description}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {project.skills_used.map((skill) => (
                                    <p className="italic" key={skill.id}>{skill.name}</p>
                                ))}
                            </div>
                        </div>
                    }
                    reversed={index % 2 == 0 ? false : true}
                    />
            )) : <></>}
        </div>
    )
}