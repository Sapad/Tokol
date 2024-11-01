import ProductsAdminView from "@/components/views/admin/Products";
import productServices from "@/services/product";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const AdminProductPage = ({ setToaster }: { setToaster: Dispatch<SetStateAction<{}>> }) => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const { data } = await productServices.getAllProducts();
        setProducts(data.data);
    };
    // bisa menggunakan useEffect (client side rendering) atau menggunakan server side rendering
    useEffect(() => {

        getAllProducts();
    }, []);
    return (
        <>
            <ProductsAdminView products={products} setToaster={setToaster} />
        </>
    )
}

export default AdminProductPage;