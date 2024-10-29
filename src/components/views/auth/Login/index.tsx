import styles from './Login.module.scss'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button/Index';
import AuthLayouts from '@/components/layouts/authLayouts';

const LoginView = () => {

    // Loding
    const [isLoading, setIsLoading] = useState(false);
    // error
    const [error, setError] = useState('');
    //router
    const { push, query } = useRouter();

    const callbackUrl: any = query.callbackUrl || '/';

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');
        const form = event.target as HTMLFormElement;

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: form.email.value,
                password: form.password.value,
                callbackUrl
            })
            if (!res?.error) {
                setIsLoading(false);
                form.reset();
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError("Email or password is incorrect");
            }
        } catch {
            setIsLoading(false);
            setError("Email or password is incorrect");
        }
    };

    return (
        <AuthLayouts title="Login" error={error} link='/auth/register' linkText="Don't have an account? Sign Up ">
            <form action="" method="post" onSubmit={handleSubmit}>
                <Input label='Email' name='email' type='email' />
                <Input label='Password' name='password' type='password' />
                <Button type='submit' variant='primary' className={styles.login__button}>
                    {isLoading ? 'Loading...' : 'Login'}
                </Button>
            </form>
            <hr className={styles.login__devider} />
            <div className={styles.login__other}>
                <Button type='button'
                    className={styles.login__other__button}
                    onClick={() => signIn('google', { callbackUrl, redirect: false })}>
                    <i className='bx bxl-google'></i> Login With Google
                </Button>
            </div>
        </AuthLayouts>
    )
}

export default LoginView