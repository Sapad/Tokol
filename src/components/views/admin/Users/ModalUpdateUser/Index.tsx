import Button from "@/components/ui/Button/Index";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal/Index";
import Select from "@/components/ui/Select/Index";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

const ModalUpdateUser = (props: any) => {
    const { updatedUser, setUpdateUser, setUsersData } = props;
    const [isLoading, setIsLoading] = useState(false);
    const session: any = useSession();

    const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        const form: any = event.target as HTMLFormElement;
        const data = {
            role: form.role.value
        };
        //memanggil data dari api serta session untuk update dengan access token
        const result = await userServices.updateUser(updatedUser.id, data, session.data?.accessToken);


        if (result.status === 200) {
            setIsLoading(false);
            setUpdateUser({});
            const { data } = await userServices.getAllUsers();
            setUsersData(data.data);
        } else {
            setIsLoading(false);
        }

    }
    return (

        <Modal onClose={() => setUpdateUser({})}>
            <h1>Update User</h1>
            <form onSubmit={handleUpdateUser}>
                <Input label='Email' name='email' type='email' defaultValue={updatedUser.email} disabled />
                <Input label='Fullname' name='fullname' type='text' defaultValue={updatedUser.fullname} disabled />
                <Input label='Phone' name='phone' type='number' defaultValue={updatedUser.phone} disabled />
                <Select label="Role" name="role" defaultValue={updatedUser.role} options={[
                    { label: 'Member', value: 'member' },
                    { label: 'Admin', value: 'admin' },
                ]} />
                <Button type="submit">Edit</Button>
            </form>
        </Modal>
    )
}
export default ModalUpdateUser;