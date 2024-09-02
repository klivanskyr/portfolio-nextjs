import Card1 from "@/components/layouts/Card1";
import { supabase } from "@/utils/supabase";

export default async function Experience() {
    const { data: educations, error: educationError } = await supabase.from("educations").select();
    const { data: experiences, error: experienceError } = await supabase.from("experiences").select();

    return (
        <div>
            <div className="flex flex-col px-16 py-8 gap-8">
                <div className="flex flex-row justify-center items-center">
                    <h1 className="text-2xl">Education</h1>
                </div>
                <div className="flex flex-col gap-4">
                    {educations ? educations.map((education) => (
                        <Card1
                            key={education.id} 
                            title={education.school}
                            header={education.degree + " | " + education.end_date}
                            body={education.notes.join("\n")}
                        />
                    )): <></>}
                </div>
            </div>
            <div className="flex flex-col px-16 py-8 gap-8">
                <div className="flex flex-row justify-center items-center">
                    <h1 className="text-2xl">Work Experience</h1>
                </div>
                <div className="flex flex-col gap-4">
                    {experiences ? experiences.map((experience) => (
                        <Card1
                            key={experience.id} 
                            title={experience.title}
                            header={experience.company + " | " + experience.start_date + " - " + experience.end_date}
                            body={experience.descriptions.join("\n")}
                        />
                    )): <></>}
                </div>
            </div>
        </div>
    )
}