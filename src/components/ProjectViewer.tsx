import React from 'react'
import { useSpring, animated } from 'react-spring'
import cn from 'classnames'

interface ProjectItem {
  name: string
  description: string
  createdAt: string,
  thumbnailSrc: string
}

const projects: ProjectItem[] = [
  {
    name: 'CBTIS',
    description: 'Content Management System (CMS) for a school.',
    createdAt: '2019',
    thumbnailSrc: '/projects/cbtis/thumbnail.png',
  },
  {
    name: "Cipriani's",
    description: "Landing page for an italian restaurant.",
    createdAt: '2022',
    thumbnailSrc: '/projects/ciprianis/thumbnail.png',
  },
  {
    name: "Bisbee's",
    description: "Website for the world's most ambitious fishing tournament.",
    createdAt: '2022',
    thumbnailSrc: '/projects/bisbees/thumbnail.png',
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
  config: { duration: 200 }
};

const ProjectViewer = () => {
  const [hoveredProject, setHoveredProject] = React.useState(projects[0])

  const [styles, api] = useSpring(() => (slideUpAnimation))

  const onMouseEnterHandler = (project: ProjectItem) => {
    if (project !== hoveredProject) {
      api.start({
        ...slideDownAnimation,
        ...animationConfig,
        onRest: () => {
          setHoveredProject(project)
          api.start({ ...slideUpAnimation, ...animationConfig })
        }
      })
    }
  }

  return (
    <div className="py-9 w-full flex flex-col items-center">
      <div className="relative">
        {/** Thumbnail of the project */}
        <div className="w-[400px] h-[400px] transition-all duration-200" style={{ backgroundImage: `url(${hoveredProject.thumbnailSrc})` }} />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div>
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex items-center gap-12 hoverable"
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
                <div
                  className={cn("font-wide text-7xl font-black uppercase transition-all duration-200", {
                    'outlined-text': hoveredProject.name !== project.name,
                  })}
                >{project.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <animated.div className="flex font-wide text-sm font-light mt-6 items-start gap-5" style={styles}>
        <div className="flex gap-5 items-center">
          <span>{hoveredProject.createdAt}</span>
          <div className="w-[75px] h-px bg-white"></div>
        </div>
        <div className="max-w-[240px] max-h-16 text-right">
          <span className="">{hoveredProject.description}</span>
        </div>
      </animated.div>
    </div>
  )
}

export default ProjectViewer
