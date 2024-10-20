import placeholder from "@/assets/placeholder_image.png";
import { SmallCard, LargeCard } from "@/components/layouts";
import { GridSize, Project } from "@/types";

export default function AdjustableGrid<T extends Project>({ className="", gridSize, items }: { className?: string, gridSize: GridSize, items: T[] }) {
    if (gridSize === "large") {
        return (
            <div className="flex flex-col gap-4 w-[95%] pt-2">
                {items.map((item, index) => (
                    <LargeCard 
                        key={item.id}
                        title={item.name}
                        description={item.description}
                        imageUrl={item.imageUrl || placeholder.src}
                        link={item.link || ""}
                        openInNewTab={item.openInNewTab || false}
                        skills={item.skills || []}
                        reversed={index % 2 == 1}
                    />
                ))}
            </div>
        )
    } else {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[95%]">
                {items.map((item, index) => (
                    <SmallCard 
                        key={item.id}
                        title={item.name}
                        description={item.description}
                        imageUrl={item.imageUrl || placeholder.src} 
                        link={item.link || ""}
                        openInNewTab={item.openInNewTab || false}
                        skills={item.skills || []}
                    />
                ))}
            </div>
        )
    }
}