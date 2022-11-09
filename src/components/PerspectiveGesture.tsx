import { useEffect, useRef, FC, HTMLAttributes } from 'react'
import { animated, useSpring, to, AnimatedComponent } from 'react-spring'
import { useGesture } from 'react-use-gesture'

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20

type PerspectiveGestureProps = HTMLAttributes<AnimatedComponent<"div">>;

const PerspectiveGesture: FC<PerspectiveGestureProps> = ({ children }) => {
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 60 },
  }))
  const domTarget = useRef(null)

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) => !dragging && api.start({
        rotateX: calcX(py, y.get()),
        rotateY: calcY(px, x.get()),
        scale: 1.1,
      }),
      onHover: ({ hovering }) => !hovering && api.start({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false }}
  );

  return (
    <animated.div
      ref={domTarget}
      style={{
        transform: 'perspective(600px)',
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
        rotateY,
        rotateZ,
      }}
    >
      {children}
    </animated.div>
  )
}

export default PerspectiveGesture
