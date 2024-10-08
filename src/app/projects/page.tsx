import placeholder from "@/assets/placeholder_image.png";
import { MediaText } from "@/components/layouts/MediaText";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
    const { data: projects, error: projectError } = await supabase.from("projects").select(`*, skills!inner (*)`);

    return (
        <div className="flex flex-col items-center pt-12">
            {projects ? projects.map((project, index) => (
                <MediaText
                    className="my-8 p-4 w-[70%] min-h-[200px] gap-4 border-2" 
                    key={project.id} 
                    left={project.link 
                        ?  <div className="-m-1 flex flex-col justify-center w-[275px] relative ">
                                <Link href={project.link} target={project.open_in_new_tab ? "_blank" : ""}>
                                    <Image src={project.image_url || placeholder.src} alt={project.name} fill />
                                </Link>
                            </div>
                        :   <div className="flex flex-col justify-center">
                                <Image src={project.image_url || placeholder.src} alt={project.name} fill />
                            </div>
                    } 
                    right={
                        <div className="flex flex-col justify-between h-full p-2 gap-4 max-w-[70%]">
                            <div className="flex flex-col">
                                <h2 className="font-semibold">{project.name}</h2>
                                <p className="ml-2">{project.description}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {project.skills ? project.skills.map((skill: any) => (
                                    <p className="italic" key={skill.id}>{skill.name}</p>
                                )): <></>}
                            </div>
                        </div>
                    }
                    reversed={index % 2 == 0 ? false : true}
                    />
            )) : <></>}
        </div>
    )
}