'use client';
import { Button, Input, Textarea } from '../../../../../../ui';
import { useConnect } from '../Connect.hook';
import style from '../Connect.module.scss';

export function ConnectForm() {
	const { register, handleSubmit, errors, isSubmitting, onSubmit } =
		useConnect();

	return (
		<form className={style.connect__form} onSubmit={handleSubmit(onSubmit)}>
			<Input
				register={register('name')}
				name='name'
				label='Имя'
				error={errors.name?.message}
				optional
			/>
			<Input
				register={register('email')}
				name='email'
				type='email'
				label='Почта'
				error={errors.email?.message}
			/>
			<Textarea
				register={register('message')}
				name='message'
				label='Сообщение'
				error={errors.message?.message}
				optional
			/>

			<Button type='submit' isSubmitting={isSubmitting}>
				Отправить контакты
			</Button>
		</form>
	);
}
