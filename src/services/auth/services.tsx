import { AddData, retrieveDataByField } from "@/lib/firebase/service";
import bcrypt from 'bcrypt'

// feat register
export async function signUp(UserData: {
    email: string,
    fullname: string,
    password: string,
    phone: string,
    role?: string,
    created_at: Date,
    image?: string,
    updated_at: Date
}, callback: Function) {
    const data = await retrieveDataByField('users', 'email', UserData.email)

    if (data.length > 0) {
        callback(false);
    } else {
        if (!UserData.role) {
            UserData.role = 'member';
        }
        UserData.image = '';
        UserData.password = await bcrypt.hash(UserData.password, 10);
        UserData.created_at = new Date();
        UserData.updated_at = new Date();
        await AddData('users', UserData, (result: boolean) => {
            callback(result)
        });
    }
}

// feat login
export async function signIn(email: string) {
    const data = await retrieveDataByField('users', 'email', email)


    if (data) {
        return data[0];
    } else {
        return null;
    }
}

// login with Google
export async function loginWithGoogle(data: {
    email: string; role?: string; password?: string; created_at?: Date; updated_at?: Date; image: string; id?: string;
}, callback: Function) {
    const user = await retrieveDataByField('users', 'email', data.email)


    if (user.length > 0) {
        callback(user[0]);
    } else {
        data.role = 'member';
        data.created_at = new Date();
        data.updated_at = new Date();
        data.password = ''
        await AddData('users', data, (status: boolean, res: any) => {
            // menampilkan id user
            data.id = res.path.replace('users/', '');
            if (status) {
                callback(data);
            }
        })

    }
}
