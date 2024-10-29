import styles from './Register.module.scss'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button/Index';
import authServices from '@/services/auth';
import AuthLayouts from '@/components/layouts/authLayouts';

const RegisterView = () => {

    const [isLoding, setIsLoding] = useState(false);
    const [error, setError] = useState('');
    const { push } = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoding(true);
        setError('');
        const form = event.target as HTMLFormElement;
        const data = {
            email: form.email.value,
            fullname: form.fullname.value,
            phone: form.phone.value,
            password: form.password.value,
        };

        const result = await authServices.registerAccount(data);

        if (result.status === 200) {
            form.reset();
            push('/auth/login');
        } else if (result.status === 409) {
            setError('Email is already registered');
        } else {
            setError('Registration failed. Please try again.');
        }

    }

    return (
        <AuthLayouts title='Register' error={error} link='/auth/login' linkText='Have an account? Sign in '>
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