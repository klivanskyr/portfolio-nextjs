import Card1 from "@/components/layouts/Card1";

type Experience = {
    id: string;
    title: string;
    company: string;
    start_date: string;
    end_date: string;
    descriptions: string[];
    website_url: string | null,
    image_url?: string | null,
}

type Education = {
    id: string,
    school: string,
    degree: string,
    end_date: string,
    notes: string[],
}

const educations: Education[] =[
    {
        id: "1",
        school: "Brown University",
        degree: "Bachelors of Science in Applied Mathematics and Computer Science",
        end_date: "May 2027",
        notes: [
            "GPA: 3.8",
            "Pursing Concurrent Masters in Computer Science which will be completed in May 2027"
        ]
    },
    {
        id: "2",
        school: "Deer Park High School",
        degree: "High School Diploma",
        end_date: "Jun. 2023",
        notes: []
    }
]

const experiences: Experience[] = [
    {
        id: "1",
        title: "Software Engineer Intern",
        company: "Ring Savvy",
        start_date: "Jun. 2024",
        end_date: "Aug. 2024",
        descriptions: [
            "Developed and deploy edd full-stack inventory management application utilizing the CRUD framework with modern technologies including Next.js, Firebase, MongoDB, PostgreSQL, Django and deployed on Vercel.",
            "Configured and optimized server environments by setting up and installing server applications on Ubuntu using Nginx and Docker.",
            "Enhanced the CI/CD pipeline by integrating advanced monitoring and automation tools, such as Prometheus, Grafana, and GitHub Actions, leading to improved deployment efficiency and system observability."
        ],
        website_url: "https://ringsavvy.com/",
        image_url: null
    },
    {
        id: "2",
        title: "Front Desk Management / Sales Associate",
        company: "Push Fitness Club of Melville",
        start_date: "Jun. 2020",
        end_date: "Dec. 2023",
        descriptions: [
            "Managed invoice processing by creating detailed and accurate spreadsheets, improving financial tracking and reporting.",
            "Resolved member account issues by providing personalized support, ensuring high levels of customer satisfaction and retention",
            "Achieved significant sales milestones, successfully selling over 250 gym memberships and 15 personal training packages",
            "Proactively reached out to potential clients through targeted cold calls, effectively increasing membership sign-ups",
            "Promoted the gym and its services through in-person interactions and phone outreach"
        ],
        website_url: "https://www.pushfitnessclub.com/",
        image_url: null
    }
]

export default async function Experience() {
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