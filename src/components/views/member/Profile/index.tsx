import MemberLayout from "@/components/layouts/MemberLayouts"
import styles from './Profile.module.scss'
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button/Index"
import Image from "next/image"
import { uploadFile } from "@/lib/firebase/service"
import { useState } from "react"
import userServices from "@/services/user"
const ProfileMemberView = ({ profile, setProfile, session, setToaster }: any) => {
    // mengubah p pada paragraf dibawah false
    const [changeImage, setChangeImage] = useState<any>({});
    const [isLoading, setIsLoading] = useState('');
    const handleChangeProfilePicture = (e: any) => {
        e.preventDefault()
        setIsLoading('picture');
        const file = e.target[0]?.files[0];
        if (file) {
            uploadFile(profile.id, file, async (status: boolean, newImageUrl: string) => {
                if (status) {
                    const data = {
                        image: newImageUrl
                    }
                    // melakukan upload ke firebase
                    const result = await userServices.updateProfile(profile.id, data, session.data?.accessToken);

                    if (result.status === 200) {
                        setIsLoading('');
                        setProfile({
                            ...profile,
                            image: newImageUrl
                        });
                        setChangeImage({});
                        e.target[0].value = '';
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
    const handleChangeProfile = async (e: any) => {
        e.preventDefault();
        setIsLoading('profile');
        const form = e.target as HTMLFormElement;
        const data = {
            fullname: form.fullname.value,
            phone: form.phone.value,
        }
        const result = await userServices.updateProfile(profile.id, data, session.data?.accessToken);

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
    const handleChangePassword = async (e: any) => {
        e.preventDefault();
        setIsLoading('password');
        const form = e.target as HTMLFormElement;
        const data = {
            password: form['new-password'].value,
            oldPassword: form['old-password'].value,
            encryptedPasword: profile.password,
        };
        const result = await userServices.updateProfile(profile.id, data, session.data?.accessToken);

        if (result.status === 200) {
            setIsLoading('');
            form.reset();
            setToaster({ message: 'Password updated successfully', variant: 'success' });
        } else {
            setIsLoading('');
            setToaster({ message: 'Something went wrong', variant: 'danger' });
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
                            <Input label='Phone' name='phone' defaultValue={profile.phone} type="number" />
                            <Button type="submit" variant="primary">{isLoading === 'profile' ? 'Loading...' : 'Update Profile'}</Button>
                        </form>

                    </div>
                    <div className={styles.profile__main__row__password}>
                        <h2>ChangePassword</h2>
                        <form onSubmit={handleChangePassword}>
                            <Input label='Old Password' name='old-password' type="password" />
                            <Input label='New Password' name='new-password' type="password" />
                            <Button type="submit" variant="primary">{isLoading === 'password' ? 'Loading...' : 'Update Password'}</Button>
                        </form>
                    </div>
                </div>
            </div>
        </MemberLayout>
    )
}
export default ProfileMemberView