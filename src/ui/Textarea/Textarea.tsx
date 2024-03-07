import style from './Textarea.module.scss';

interface ITextarea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	id?: string;
	label?: string;
	register?: any;
	error?: any;
	optional?: boolean;
}

export function Textarea({
	id,
	label,
	register,
	error,
	optional = false,
	autoComplete = 'off',
	...rest
}: ITextarea) {
	return (
		<div className={`${style.Textarea} ${error ? style.error : ''}`}>
			<div className={style.label}>
				{label && <label htmlFor={id}>{label}</label>}
				{optional && <span>(опция)</span>}
			</div>

			<textarea {...register} id={id} {...rest} />
		</div>
	);
}
