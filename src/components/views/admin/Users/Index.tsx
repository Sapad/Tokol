import AdminLayout from "@/components/layouts/AdminLayouts";
import Button from "@/components/ui/Button/Index";
import styles from './Users.module.scss';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ModalUpdateUser from "./ModalUpdateUser/Index";
import ModalDeleteUser from "./ModalDeleteUser/Index";
import { User } from "@/types/user.type";
import { useSession } from "next-auth/react";
type propsTypes = {
    users: User[];
    setToaster: Dispatch<SetStateAction<{}>>;
}
const UsersAdminView = (props: propsTypes) => {
    const { users, setToaster } = props;
    const [updateUser, setUpdateUser] = useState<User[] | {}>({});
    const [usersData, setUsersData] = useState<User[]>([]);
    const [deletedUser, setDeletedUser] = useState<User[] | {}>({});

    const session: any = useSession();


    useEffect(() => {
        setUsersData(users);
    }, [users]);
    return (
        <>
            <AdminLayout>
                <div className={styles.users}>
                    <h1>User Management</h1>
                    <table className={styles.users__table}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user: User, index: number) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <div className={styles.users__table__action}>
                                            <Button type="button" onClick={() => setUpdateUser(user)}
                                                className={styles.users__table__action__edit}>
                                                <i className='bx bxs-edit' />
                                            </Button>
                                            <Button type="button" className={styles.users__table__action__delete}
                                                onClick={() => setDeletedUser(user)}>
                                                <i className='bx bxs-trash' />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AdminLayout>
            {Object.keys(updateUser).length && (
                <ModalUpdateUser updatedUser={updateUser}
                    setUpdateUser={setUpdateUser}
                    setUsersData={setUsersData}
                    setToaster={setToaster}
                    session={session}
                />

            )}
            {Object.keys(deletedUser).length && (
                <ModalDeleteUser deletedUser={deletedUser}
                    setDeletedUser={setDeletedUser}
                    setUsersData={setUsersData}
                    setToaster={setToaster}
                    session={session}
                />

            )}
        </>
    )
}
export default UsersAdminView;