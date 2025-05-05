''
import { useInView } from 'react-intersection-observer';

const View = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  console.log(inView)
  return (
    <main ref={ref} className="py-20">
      {inView && children}
    </main>
  )
}

export default View