import instance from "@/lib/axios/instance";

const userServices = {
    //  menampilkan all user dengan method get
    getAllUsers: () => instance.get('/api/users'),
    // melakukan update method put dengan access token menggunakan id query
    updateUser: (id: string, data: any, token: string) => instance.put(`/api/users/${id}`, { data }, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }),
    // method delete dengan access token menggunakan id query
    deleteUser: (id: string, token: string) => instance.delete(`/api/users/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }),
    // menampilkan get profile dengan access token
    getProfile: (token: string) => instance.get('/api/users/profile', {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }),
    updateProfile: (data: any, token: string) => instance.put(`/api/users/profile`, { data }, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }),
}

export default userServices;