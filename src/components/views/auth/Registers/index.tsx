import styles from './Register.module.scss'
import { useRouter } from 'next/router'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button/Index';
import authServices from '@/services/auth';
import AuthLayouts from '@/components/layouts/authLayouts';

const RegisterView = ({ setToaster }: { setToaster: Dispatch<SetStateAction<{}>> }) => {

    const [isLoding, setIsLoding] = useState(false);
    const { push } = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoding(true);
        const form = event.target as HTMLFormElement;
        const data = {
            email: form.email.value,
            fullname: form.fullname.value,
            phone: form.phone.value,
            password: form.password.value,
        };


        try {
            const result = await authServices.registerAccount(data);

            if (result.status === 200) {
                form.reset();
                setIsLoding(false);
                push('/auth/login');
                setToaster({ message: 'Registration success', variant: 'success' });
            } else if (result.status === 409) {
                setIsLoding(false);
                setToaster({ message: 'Registration failed, please call support .', variant: 'danger' });
            }
        } catch (error) {
            setIsLoding(false);
            setToaster({ message: 'Registration failed. Email already exists.', variant: 'danger' });
        }

    }

    return (
        <AuthLayouts title='Register' link='/auth/login' setToaster={setToaster} linkText='Have an account? Sign in '>
            <div >
                <form action="" method="post" onSubmit={handleSubmit}>
                    <Input label='Email' name='email' type='email' />
                    <Input label='Fullname' name='fullname' type='text' />
                    <Input label='Phone' name='phone' type='number' />
                    <Input label='Password' name='password' type='password' />
                    <Button type='submit' className={styles.button}>{isLoding ? 'Loading ...' : 'Register'}</Button>
                </form>
            </div>
        </AuthLayouts>
    )
}

export default RegisterView