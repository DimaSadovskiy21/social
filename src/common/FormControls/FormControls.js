import { Field } from 'redux-form';
import s from './FormControls.module.css';



export const Textarea = ({ input, meta, ...props }) => {

    const hasError = meta.error && meta.touched

    return (
        <div className={s.formControls + " " + (hasError ? s.error : "")}>
            <textarea {...input} {...props} />
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.error && meta.touched

    return (
        <div className={s.formControls + " " + (hasError ? s.error : "")}>
            <input {...input} {...props} />
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
