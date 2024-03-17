import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
	useForm,
} from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import {
	MAX_REQUESTS_PER_MINUTE,
	MINUTE_IN_MS,
} from '../../../../../lib/constants/reqestLimit';
import { BASE_URL } from '../../../../../lib/constants/url';

const schemaConnect = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string(),
});

type FormSchemaConnect = z.infer<typeof schemaConnect>;

interface IConnect {
	register: UseFormRegister<FormSchemaConnect>;
	handleSubmit: UseFormHandleSubmit<FormSchemaConnect>;
	onSubmit: (data: FormSchemaConnect) => Promise<void>;
	errors: FieldErrors<FormSchemaConnect>;
	isSubmitting: boolean;
}

let lastRequestTime: number | null = null;
let requestCount = 0;

export const useConnect = (): IConnect => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormSchemaConnect>({
		resolver: zodResolver(schemaConnect),
		mode: 'onBlur',
	});

	const onSubmit = async (data: FormSchemaConnect) => {
		const currentTime = Date.now();

		if (!lastRequestTime || currentTime - lastRequestTime >= MINUTE_IN_MS) {
			lastRequestTime = currentTime;
			requestCount = 1;
		} else {
			requestCount++;

			if (requestCount > MAX_REQUESTS_PER_MINUTE) {
				toast.error(
					'Превышен лимит запросов за минуту. Пожалуйста, попробуйте позже.'
				);
				console.error('Превышен лимит запросов за минуту');
				return;
			}
		}

		try {
			axios
				.post('/api/submission', data, {
					baseURL: BASE_URL,
				})
				.then(() => {
					toast.success('Спасибо за ваше сообщение!');
					lastRequestTime = Date.now();
					reset();
				});
		} catch (error) {
			toast.error(`Чтото пошло не так!`);
			console.error(error);
		}
	};

	return { register, handleSubmit, errors, isSubmitting, onSubmit };
};
