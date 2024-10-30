import UsersAdminView from "@/components/views/admin/Users/Index";
import userServices from "@/services/user";
import { useEffect, useState } from "react";

const UsersPage = ({ setToster }: any) => {
    const [users, setUsers] = useState([]);
    // bisa menggunakan useEffect (client side rendering) atau menggunakan server side rendering
    useEffect(() => {
        const getAllUsers = async () => {
            const { data } = await userServices.getAllUsers();
            setUsers(data.data);
        };
        getAllUsers();
    }, []);
    return (
        <>
            <UsersAdminView users={users} setToster={setToster} />
        </>
    )
}

export default UsersPage;