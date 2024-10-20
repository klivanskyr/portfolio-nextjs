import ProjectsList from "@/components/ProjectsList";
import { Project } from "@/types";
import { supabase } from "@/utils/supabase";

export const revalidate = 0;

export default async function Projects_Page() {
    const { data: projects, error: projectError } = await supabase.from("projects").select(`*, skills!inner (*)`);

    // Maps the projects to the correct format because supabase returns the data in a different format
    const transformedProjects: Project[] | undefined = projects?.map((project: any) => ({
        ...project,
        openInNewTab: project.open_in_new_tab,
        imageUrl: project.image_url,
    }));

    return (
        <div className="py-8 md:py-36 flex flex-col items-center">
            {transformedProjects && <ProjectsList projects={transformedProjects} />}
        </div>
    )
}

{/* {projects && 
        <Search items={projects}>
            {filteredItems => <AdjustableGrid items={filteredItems} />}
        </Search>
} */}

{/* <Card2
            size="small"
            title="Test"
            description="Test"
            imageUrl={placeholder.src}
            link=""
            openInNewTab={false}
            skills={[{ id: "1", name: "Test" }]}
            reversed={false}
        /> */}
{/* {projects ? projects.map((project, index) => (
                <MediaText
                    className="my-8 px-4 py-8 w-[90%] md:w-[70%] min-h-[200px] lg:gap-4 border-2 shadow-medium rounded-lg" 
                    key={project.id} 
                    left={project.link 
                        ?  <div className="w-full h-[200px] md:h-[400px] lg:h-[500px] relative">
                                <Link href={project.link} target={project.open_in_new_tab ? "_blank" : ""}>
                                    <Image src={project.image_url || placeholder.src} alt={project.name} fill style={{ objectFit: 'contain' }} />
                                </Link>
                            </div>
                        :   <div className="flex flex-col justify-center">
                                <Image src={project.image_url || placeholder.src} alt={project.name} fill />
                            </div>
                    } 
                    right={
                        <div className="flex flex-col justify-center h-full w-full">
                            <div className="flex flex-col justify-between w-full gap-8">
                                <div className="flex flex-col">
                                    <h2 className="font-bold">{project.name}</h2>
                                    <p className="ml-2">{project.description}</p>
                                </div>
                                <div className="flex flex-row gap-2 py-4">
                                    {project.skills ? project.skills.map((skill: any) => (
                                        <p className="italic font-medium" key={skill.id}>{skill.name}</p>
                                    )): <></>}
                                </div>
                            </div>
                        </div>
                    }
                    reversed={index % 2 == 0 ? false : true}
                    />
            )) : <></>} */}