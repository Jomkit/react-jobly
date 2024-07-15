import { textInputInterface } from '../../types';
import { useField } from 'formik';

const TextInput = ({ label, ...props }: textInputInterface) => {
    const [field, meta] = useField(props as any);
    return (
        <>
            <label htmlFor={props.id}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-danger">{meta.error}</div>
            ): null}
        </>
    )
}

export default TextInput