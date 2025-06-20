import style from './style.module.scss'
import { interfaceEventComponent } from '../../shared/interface'

const EventComponent = (props: interfaceEventComponent) => {

    return (
        <div className={style.wrapper}>
            <div className={style.year}>
                {props.year}
            </div>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    )
}

export default EventComponent