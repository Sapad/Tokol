import Button from "@/components/ui/Button/Index"
import Modal from "@/components/ui/Modal/Index"
import userServices from "@/services/user"
import styles from './ModalDeleteUser.module.scss'
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useState } from "react";
import { User } from "@/types/user.type";

type PropsType = {
    deletedUser: User | any;
    setDeletedUser: Dispatch<SetStateAction<{}>>;
    setUsersData: Dispatch<SetStateAction<User[]>>;
    setToaster: Dispatch<SetStateAction<{}>>;
    session: any
}

const ModalDeleteUser = (props: PropsType) => {
    const { deletedUser, setDeletedUser, setUsersData, setToaster, session } = props;
    const [isLoading, setIsLoading] = useState(false);
    const handleDelete = async () => {
        //memanggil data dari api serta session untuk delete dengan access token
        const result = await userServices.deleteUser(deletedUser.id, session.data?.accessToken);
        if (result.status === 200) {
            setIsLoading(false);
            setToaster({ message: 'User deleted successfully', variant: 'success' });
            setDeletedUser({});
            const { data } = await userServices.getAllUsers();
            setUsersData(data.data);
        } else {
            setIsLoading(false);
            setToaster({ message: 'Usered not deleted', variant: 'error' });
        }

    }
    return (
        <Modal onClose={() => setDeletedUser({})}>
            <h1 className={styles.modal__title}>Are You sure?</h1>
            <Button type="button" onClick={() => handleDelete()
            }>{isLoading ? 'Loading...' : 'Yes, delete'}</Button>
        </Modal>
    )
};

export default ModalDeleteUser;