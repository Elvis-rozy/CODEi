import { motion } from "framer-motion";

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
}

const PageAnimation = ({pageIcon, page, children})=>{

  return (
    <div className="page">
      <motion.div className="ctn" initial={{opacity: 0, top: 0}} animate={{opacity: 0, top: 0}} exit={{opacity: 1, top: "-3%"}}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}>
        <img className="pageImg" src={pageIcon} alt=""/>
        <h2 className="pageText">{page}</h2>
      </motion.div>
      {children}
      <div className="blocks-container transition-in">
        {Array.from({length: 10}).map((_, rowIndex)=> (
          <div className="row" key={rowIndex}>
            {Array.from({length: 11}).map((_, blockIndex) => (
              <motion.div key={blockIndex} className="block" initial={{scaleY: 1}} animate={{scaleY: 0}} exit={{scaleY: 0}}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="blocks-container transition-out">
        {Array.from({length: 10}).map((_, rowIndex)=> (
          <div className="row" key={rowIndex}>
            {Array.from({length: 11}).map((_, blockIndex) => (
              <motion.div key={blockIndex} className="block" initial={{scaleY: 0}} animate={{scaleY: 0}} exit={{scaleY: 1}} transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default PageAnimation;