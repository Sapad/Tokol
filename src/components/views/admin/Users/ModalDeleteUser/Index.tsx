import Button from "@/components/ui/Button/Index"
import Modal from "@/components/ui/Modal/Index"
import userServices from "@/services/user"
import styles from './ModalDeleteUser.module.scss'
import { useSession } from "next-auth/react";

const ModalDeleteUser = (props: any) => {
    const { deletedUser, setDeletedUser, setUsersData } = props;
    const session: any = useSession();
    const handleDelete = async () => {
        //memanggil data dari api serta session untuk delete dengan access token
        userServices.deleteUser(deletedUser.id, session.data?.accessToken);
        setDeletedUser({});
        const { data } = await userServices.getAllUsers();
        setUsersData(data.data);
    }
    return (
        <Modal onClose={() => setDeletedUser({})}>
            <h1 className={styles.modal__title}>Are You sure?</h1>
            <Button type="button" onClick={() => handleDelete()
            }>Delete</Button>
        </Modal>
    )
};

export default ModalDeleteUser;