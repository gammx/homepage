import React from 'react';
import cn from 'classnames';

interface ProjectItem {
  name: string;
  description: string;
  createdAt: string;
  thumbnailSrc: string;
  href: string;
}

const projects: ProjectItem[] = [
	{
    name: "Bisbee's",
    description: "A re-designed vision for the website of the world's richest fishing tournaments.",
    createdAt: '2022',
    thumbnailSrc: '/projects/bisbees/thumbnail.png',
    href: '/projects/dev/bisbees'
  },
	{
    name: "Cipriani's",
    description: "Landing page for an italian restaurant.",
    createdAt: '2022',
    thumbnailSrc: '/projects/ciprianis/thumbnail.png',
    href: '/projects/cipriani'
  },
  {
    name: 'CBTIS',
    description: 'Content Management System (CMS) for a school.',
    createdAt: '2019',
    thumbnailSrc: '/projects/cbtis/thumbnail.png',
    href: '#'
  },
];

const ProjectList = () => {
	const [hoveredProject, setHoveredProject] = React.useState(projects[0]);

	const onMouseEnterHandler = (project: ProjectItem) => {
    if (project !== hoveredProject) {
      setHoveredProject(project);
    }
  };

	return (
		<section className="px-2.5 pt-2.5">
			<div className="text-xs flex space-x-3 mb-8">
				<h2 className="uppercase text-[#858585]">My Projects</h2>
				<p>Currently working on filling this up</p>
			</div>
			<div className="flex flex-col sm:flex-row sm:space-x-2.5">
				<div className="flex-1 flex flex-col border-t border-bones mb-2.5 sm:mb-0">
					{projects.map((project, i) => (
						<a
							className={cn("flex flex-col 2md:flex-row 2md:items-center 2md:justify-between border-b border-bones/20 font-normal uppercase py-2.5 opacity-30", {
								'!opacity-100': hoveredProject === project,
							})}
							onMouseEnter={() => onMouseEnterHandler(project)}
							href={project.href}
							key={i}
						>
							<p className="order-last 2md:order-none text-xs max-w-[320px]">{project.description}</p>
							<p className="text-6xl mb-2 2md:mb-0">{project.name}</p>
							<p className="order-first 2md:order-none text-xs">{project.createdAt}</p>
						</a>
					))}
					<div className="flex-1 hidden 2md:flex items-center justify-center uppercase font-normal text-sm">
						<p>Whoops kinda empty here</p>
					</div>
				</div>
				<img
					src={hoveredProject.thumbnailSrc}
					alt={`${hoveredProject.name} (thumbnail)`}
					className="object-cover w-[250px] 2md:w-[25vw] lg:w-auto mb-2.5 sm:mb-0"
				/>
			</div>
		</section>
	);
};

export default ProjectList;
