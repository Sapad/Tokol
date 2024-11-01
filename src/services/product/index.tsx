import instance from "@/lib/axios/instance";

const productServices = {
    //  menampilkan all user dengan method get
    getAllProducts: () => instance.get('/api/product'),
    // melakukan update method put dengan access token menggunakan id query

}

export default productServices;