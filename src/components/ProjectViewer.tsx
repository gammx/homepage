import React from 'react'
import { useSpring, animated } from 'react-spring'
import cn from 'classnames'

interface ProjectItem {
  name: string;
  description: string;
  createdAt: string;
  thumbnailSrc: string;
  href: string;
}

const projects: ProjectItem[] = [
  {
    name: 'CBTIS',
    description: 'Content Management System (CMS) for a school.',
    createdAt: '2019',
    thumbnailSrc: '/projects/cbtis/thumbnail.png',
    href: '#'
  },
  {
    name: "Cipriani's",
    description: "Landing page for an italian restaurant.",
    createdAt: '2022',
    thumbnailSrc: '/projects/ciprianis/thumbnail.png',
    href: '/projects/cipriani'
  },
  {
    name: "Bisbee's",
    description: "Website for the world's most ambitious fishing tournament.",
    createdAt: '2022',
    thumbnailSrc: '/projects/bisbees/thumbnail.png',
    href: '#'
  }
]

const slideUpAnimation = {
  from: { opacity: 0, transform: 'translateY(20px)' },
  to: { opacity: 1, transform: 'translateY(0px)' }
};

const slideDownAnimation = {
  to: { opacity: 0, transform: 'translateY(20px)' }
};

const animationConfig = {
  config: { duration: 150 }
};

const ProjectViewer = () => {
  const [hoveredProject, setHoveredProject] = React.useState(projects[0])

  const [styles, api] = useSpring(() => (slideUpAnimation))

  const onMouseEnterHandler = (project: ProjectItem) => {
    if (project !== hoveredProject) {
      setHoveredProject(project)
      api.start({
        ...slideDownAnimation,
        ...animationConfig,
        onResolve: () => {
          api.start({ ...slideUpAnimation, ...animationConfig })
        }
      })
    }
  }

  return (
    <div className="py-9 w-full flex flex-col items-center">
      <div className="relative">
        {/** Thumbnail of the project */}
        <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] transition-all duration-200 bg-cover" style={{ backgroundImage: `url(${hoveredProject.thumbnailSrc})` }} />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div>
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex items-center hoverable"
                onMouseEnter={() => {
                  onMouseEnterHandler(project)
                }}
              >
                {/** # of the project */}
                <span className={cn("text-xs font-light transition-opacity duration-200", {
                  'opacity-50': hoveredProject.name !== project.name,
                  'opacity-100': hoveredProject.name === project.name,
                })}>00{index + 1}</span>
                {/** Name of the project */}
                <a
                  href={project.href}
                  className={cn("font-display ml-8 sm:ml-12 text-5xl sm:text-7xl font-black uppercase text-white transition-all duration-200", {
                    'outlined-text': hoveredProject.name !== project.name,
                  })}
                >{project.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <animated.div className="flex flex-col sm:flex-row font-display text-sm font-light mt-6 items-start max-w-[350px] sm:max-w-full" style={styles}>
        <div className="flex items-center">
          <span>{hoveredProject.createdAt}</span>
          <div className="ml-5 w-full sm:w-[75px] h-px bg-white"></div>
        </div>
        <div className="sm:max-w-[240px] max-h-16 sm:text-right">
          <span className="">{hoveredProject.description}</span>
        </div>
      </animated.div>
    </div>
  )
}

export default ProjectViewer
