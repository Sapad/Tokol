import MemberLayout from "@/components/layouts/MemberLayouts"
import styles from './Profile.module.scss'
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button/Index"
import Image from "next/image"
import { uploadFile } from "@/lib/firebase/service"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import userServices from "@/services/user"
import { User } from "@/types/user.type"

type Props = {
    profile: any,
    setProfile: Dispatch<SetStateAction<{}>>,
    session: any,
    setToaster: Dispatch<SetStateAction<{}>>
}
const ProfileMemberView = ({ profile, setProfile, session, setToaster }: Props) => {
    // mengubah p pada paragraf dibawah false
    const [changeImage, setChangeImage] = useState<File | any>({});
    const [isLoading, setIsLoading] = useState('');
    const handleChangeProfilePicture = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading('picture');
        const form = e.target as HTMLFormElement;

        const file = form.image.files[0];
        if (file) {
            uploadFile(profile.id, file, async (status: boolean, newImageUrl: string) => {
                if (status) {
                    const data = {
                        image: newImageUrl
                    }
                    // melakukan upload ke firebase
                    const result = await userServices.updateProfile(data, session.data?.accessToken);

                    if (result.status === 200) {
                        setIsLoading('');
                        setProfile({
                            ...profile,
                            image: newImageUrl
                        });
                        setChangeImage({});
                        form.reset();
                        setToaster({ message: 'Profile picture updated successfully', variant: 'success' });
                    } else {
                        setIsLoading('');
                    }
                } else {
                    setIsLoading('');
                    setChangeImage({});
                    setToaster({ message: 'Something went wrong', variant: 'danger' });
                }

            });
        }

    }
    const handleChangeProfile = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading('profile');
        const form = e.target as HTMLFormElement;
        const data = {
            fullname: form.fullname.value,
            phone: form.phone.value,
        }
        const result = await userServices.updateProfile(data, session.data?.accessToken);

        if (result.status === 200) {
            setIsLoading('');
            setProfile({
                ...profile,
                fullname: data.fullname,
                phone: data.phone
            });
            form.reset();
            setToaster({ message: 'Profile updated successfully', variant: 'success' });
        } else {
            setIsLoading('');
            setToaster({ message: 'Something went wrong', variant: 'danger' });
        }
    }
    const handleChangePassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading('password');
        const form = e.target as HTMLFormElement;
        const data = {
            password: form['new-password'].value,
            oldPassword: form['old-password'].value,
            encryptedPasword: profile.password,
        };
        try {
            const result = await userServices.updateProfile(data, session.data?.accessToken);
            if (result.status === 200) {
                setIsLoading('');
                form.reset();
                setToaster({ message: 'Password updated successfully', variant: 'success' });
            }
        } catch (error) {
            setIsLoading('');
            form.reset();
            setToaster({ message: 'Old Password is wrong ', variant: 'danger' });
        }
    }
    return (
        <MemberLayout>
            <h1 className={styles.profile__title}>Profile</h1>
            <div className={styles.profile__main}>
                <div className={styles.profile__main__row}>
                    <div className={styles.profile__main__row__avatar}>
                        <h2 className={styles.profile__main__row__avatar__title}>Avatar</h2>
                        {profile.image ? <Image className={styles.profile__main__row__avatar__image}
                            src={profile.image} alt="avatar" width={200} height={200} /> : (
                            <div className={styles.profile__main__row__avatar__image}>
                                {/* untuk menampilkan pada huruf dari fullname */}
                                {profile?.fullname?.charAt(0)}
                            </div>
                        )}
                        <form onSubmit={handleChangeProfilePicture}>
                            <label htmlFor="upload-image" className={styles.profile__main__row__avatar__label}>
                                {changeImage.name ? <p>{changeImage.name}</p> : (<>
                                    <p>
                                        Upload a new avatar, larger image wil be resize automatically
                                    </p>
                                    <p>
                                        Maximum upload size is <b>1MB</b>
                                    </p>
                                </>)}

                            </label>
                            <input type='file' name='image' id="upload-image" className={styles.profile__main__row__avatar__input}
                                onChange={(e: any) => {
                                    e.preventDefault();
                                    setChangeImage(e.currentTarget.files[0]);
                                }} />
                            <Button type="submit" className={styles.profile__main__row__avatar__button}>{isLoading === 'picture' ? 'Uploading...' : 'Upload'}</Button>
                        </form>
                    </div>
                    <div className={styles.profile__main__row__detail}>
                        <h2 className={styles.profile__main__row__detail__title}>Profile</h2>
                        <form onSubmit={handleChangeProfile}>
                            <Input label='Fullname' name='fullname' defaultValue={profile.fullname} type="text" />
                            <Input label='Email' name='email' defaultValue={profile.email} type="email" disabled />
                            <Input label='Role' name='role' defaultValue={profile.role} type="text" disabled />
                            <Input label='Phone' name='phone' defaultValue={profile.phone} type="number" placeholder="Input enter your phone" />
                            <Button type="submit" variant="primary">{isLoading === 'profile' ? 'Loading...' : 'Update Profile'}</Button>
                        </form>

                    </div>
                    <div className={styles.profile__main__row__password}>
                        <h2>ChangePassword</h2>
                        <form onSubmit={handleChangePassword}>
                            <Input label='Old Password' name='old-password' type="password" disabled={profile.type === 'google'} placeholder="Enter your old password" />
                            <Input label='New Password' name='new-password' type="password" disabled={profile.type === 'google'} placeholder="Enter your new password" />
                            <Button type="submit" variant="primary" disabled={isLoading === 'password' || profile.type === 'google'}>{isLoading === 'password' ? 'Loading...' : 'Update Password'}</Button>
                        </form>
                    </div>
                </div>
            </div>
        </MemberLayout>
    )
}
export default ProfileMemberView