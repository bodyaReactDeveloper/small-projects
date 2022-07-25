import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import styles from "../css/Paginator.module.css"
import ButtonSwitch from "./pagnator/btn";
import Pages from "./pagnator/pages";


const Paginator = () => {

    const [current, setCurrent] = useState(1)

    const [arrOfCurrents, setArrOfCurrents] = useState([])


    useEffect(() => {
        let tmpNumberOfPages = [...arrOfCurrents]

        let dotsInitial = '...'
        let dotsRight = '... '
        let dotsLeft = ' ...'

        if (current >= 1 && current <= 3) {
            tmpNumberOfPages = [1, 2, 3, 4, 5, dotsInitial, numberOfPages.length]
        }

        else if (current === 4) {
            let sliced = numberOfPages.slice(0, 5)
            tmpNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
        }

        else if (current > 4 && current < numberOfPages.length - 3) {
            let sliced1 = numberOfPages.slice(current - 2, current)
            let sliced2 = numberOfPages.slice(current, current + 1)
            tmpNumberOfPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length]
        }

        else if (current > numberOfPages.length - 4) {
            let sliced = numberOfPages.slice(numberOfPages.length - 4, numberOfPages.length)
            tmpNumberOfPages = [1, dotsLeft, ...sliced]
        }

        else if (current === dotsInitial) {
            setCurrent(arrOfCurrents[arrOfCurrents.length - 3] + 1)
        }

        else if (current === dotsLeft) {
            setCurrent(arrOfCurrents[3] - 2)
        }

        else if (current === dotsRight) {
            setCurrent(arrOfCurrents[3] + 2)
        }

        setArrOfCurrents(tmpNumberOfPages)

    }, [current])

    let pages = 60
    let numberOfPages = []
    for (let i = 1; i <= pages; i += 1) {
        numberOfPages.push(i)
    }

    return (
        <>
            <div className={styles.paginator_wrap}>

                <div className={styles.paginator_container}>
                    <ButtonSwitch setCurrent={setCurrent} current={current}/>

                    <Pages arrOfCurrents={arrOfCurrents} current={current} setCurrent={setCurrent} />

                    <ButtonSwitch setCurrent={setCurrent} current={current} numberOfPages={numberOfPages} />
                </div>

            </div>

        </>
    )
}

export default Paginator