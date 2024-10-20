'use client';

import { GridSize, Project } from "@/types";
import { useEffect, useState } from "react";
import { AdjustableGrid } from "./layouts";
import GridIcon from "@/assets/grid-svgrepo-com.svg";
import ListIcon from "@/assets/list-svgrepo-com.svg";

export default function ProjectsList({ projects }: { projects: Project[] }) {
    const [search, setSearch] = useState<string>("");
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
    const [gridSize, setGridSize] = useState<GridSize>("small");

    useEffect(() => {
        setFilteredProjects(projects.filter(item => 
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase()) ||
            item.skills.some(skill => skill.name.toLowerCase().includes(search.toLowerCase()))
        ));
        
    }, [search, projects]);

    return (
        <div className="flex flex-col items-center gap-4 min-w-full">
            <div className="w-full flex flex-row gap-2 justify-center items-center">
                <input className="w-full mx-6 md:mx-0 md:w-4/5 py-1 pl-2 pr-4 outline-none border-b-2 border-gray-200 primary-bg focus:border-blue-500" type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
                <button className="cursor-pointer hidden md:block" onClick={() => setGridSize(gridSize === "small" ? "large" : "small")}>
                    {gridSize === "small" ? <GridIcon className="w-6 h-6" /> : <ListIcon className="w-6 h-6" />}
                </button>
            </div>

            <AdjustableGrid items={filteredProjects} gridSize={gridSize} />
        </div>
    )
}