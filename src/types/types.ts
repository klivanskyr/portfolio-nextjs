export type Project = {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
    link?: string;
    openInNewTab?: boolean;
    skills: { id: string; name: string }[];
};

export type GridSize = "small" | "large";