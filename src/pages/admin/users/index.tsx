import UsersAdminView from "@/components/views/admin/Users/Index";
import userServices from "@/services/user";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const UsersPage = ({ setToaster }: { setToaster: Dispatch<SetStateAction<{}>> }) => {
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
            <UsersAdminView users={users} setToaster={setToaster} />
        </>
    )
}

export default UsersPage;