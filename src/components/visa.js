import React, { useState } from 'react'
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion'

function Visa() {
    const { scrollYProgress } = useViewportScroll()
    const [opacityM, setopacityM] = useState(0)

    const x = useMotionValue(0)
    const xRange = [-200, -100, 100, 200]
    const opacityRange = [0, 1, 1, 0]
    const opacity = useTransform(x, xRange, opacityRange)
    scrollYProgress.onChange(x => {
        setopacityM(x > 0.14 ? x : 0)
        // console.log(x)
    })
    return (
        <div>
            {opacityM > 0.8888 ?
                <div className="visa">
                    <motion.div
                        style={{
                            top: "15%",
                            right: "32%",
                            position: "fixed",
                            opacity: opacityM,
                        }}
                        x={x}
                    >
                        <img width="70%" src="https://encased-locations.000webhostapp.com/photo/metro.svg" alt=""></img>
                    </motion.div>
                    <motion.div
                        style={{
                            top: "15%",
                            right: "17%",
                            zIndex: "-1",
                            position: "fixed",
                            opacity: opacityM,
                        }}
                        x={x}
                    >
                        <img width="70%" src="https://encased-locations.000webhostapp.com/photo/visa.svg" alt=""></img>
                    </motion.div>
                    <motion.div
                        style={{
                            top: "15%",
                            right: "32%",
                            position: "fixed",
                            opacity: opacityM,
                        }}
                        x={x}
                    >
                        <img width="70%" src="https://encased-locations.000webhostapp.com/photo/rewards.svg" alt=""></img>
                    </motion.div>
                    <motion.div
                        style={{
                            top: "15%",
                            right: "32%",
                            position: "fixed",
                            opacity: opacityM,
                        }}
                        x={x}
                    >
                        <img width="70%" src="https://encased-locations.000webhostapp.com/photo/mk.png" alt=""></img>
                    </motion.div>
                    <motion.div
                        style={{
                            top: "15%",
                            right: "20%",
                            zIndex: "-1",
                            position: "fixed",
                            opacity: opacityM,
                        }}
                        x={x}
                    >
                        <img width="70%" src="https://encased-locations.000webhostapp.com/photo/master%20card.svg" alt=""></img>
                    </motion.div>
                </div> :
                <div className="visa">
                    <motion.div
                        style={{
                            top: "15%",
                            right: "10.5%",
                            position: "fixed",
                            opacity: opacityM,
                        }}
                        x={x}
                    >
                        <img style={{ border: "1px solid yellow" }} width="40%" src={
                            "https://encased-locations.000webhostapp.com/photo/vrec.png"
                        } alt=""></img>
                    </motion.div>
                </div>
            }

        </div>
    )
}

export default Visa
