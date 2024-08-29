import placeholder from "@/assets/placeholder_image.png";
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
        <div>
            <h1>Projects</h1>
            <div>
                {projects ? projects.map((project) => (
                    <div key={project.id}>
                        <h2>{project.name}</h2>
                        {project.link 
                            ?   <Link href={project.link} target={project.open_in_new_tab ? "_blank" : ""}>
                                    <Image src={project.image_url} alt={project.name} width={200} height={200} />
                                </Link>
                            : <Image src={project.image_url} alt={project.name} width={200} height={200} />}
                        <p>{project.description}</p>
                        <div>
                            {project.skills_used.map((skill) => (
                                <p key={skill.id}>{skill.name}</p>
                            ))}
                        </div>
                    </div>
                )) : <></>}
            </div>
        </div>

    )
}