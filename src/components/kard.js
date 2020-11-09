import React, { useState } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Arrow from './arrow'

function Kard(props) {
    const [ffLayer, setFfLayer] = useState(0)
    const [change, setChange] = useState(false)
    const { scrollYProgress } = useViewportScroll()
    const scaleAnim = useTransform(scrollYProgress, [0, 1, 1], [1, 0.2, 0.8])
    const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100])
    // const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0])
    scrollYProgress.onChange(x => {
        setFfLayer(x > 0.4 ? -1 : 0)
        setChange(x > 0.9917880 ? 0 : x)
    })
    const kard = {
        width: "100%",
        scale: 1,
        position: "fixed",
        top: "10rem",
        left: "calc(14.5% - 14rem)",
        // boxShadow: `rgba(0, 200, 0, 0.5) 0px 0px 150px 10px`,
    }
    //0.12291391132683153
    return (
        <>
            <motion.div
                style={{ ...kard, scale: scaleAnim, y: yPosAnim, position: "fixed", opacity: change }}
            >
                <div id="Kard" className="mobtitle">
                    <div className="justify-content-center pt-5">
                        <center className="p-5 ">
                            <p style={{ fontSize: "4em", color: "#E5DFD8", letterSpacing: "1", paddingTop: '2em' }} className="font-weight-bold">Kashware is an exclusive ecosystem that unites your money.</p>
                        </center>
                    </div>

                    <div className="justify-content-center">
                        <center style={{ paddingTop: '4em', color: '#AAA6A1' }}>#Spend #Save #StaySecured #EarnRewards #JoinTheKlub</center>
                    </div>
                </div>
                {props.children}
            </motion.div>
            <Arrow zIndex={ffLayer} onClick={() => window.scrollTo(0, 1500)} />
        </>
    )
}

export default Kard
