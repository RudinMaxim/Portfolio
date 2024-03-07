import style from './Input.module.scss';

interface IputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	id?: string;
	label?: string;
	register?: any;
	error?: any;
	optional?: boolean;
	type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url' | 'checkbox';
}

export function Input({
	id,
	label,
	register,
	error,
	optional = false,
	autoComplete = 'off',
	...rest
}: IputProps) {
	return (
		<div className={`${style.input} ${error ? style.error : ''}`}>
			<div className={style.label}>
				{label && <label htmlFor={id}>{label}</label>}
				{optional && <span>(опция)</span>}
			</div>

			<input {...register} id={id} {...rest} />
		</div>
	);
}
