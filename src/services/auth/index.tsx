import instance from "@/lib/axios/instance";


const authServices = {
    //register method post
    registerAccount: (data: any) => instance.post('/api/users/register', data),
}

export default authServices;