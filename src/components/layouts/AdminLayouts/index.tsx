import Sidebar from "@/components/fragments/Sidebar/Index"
import styles from './Admin.module.scss'

type PropsType = {
    children: React.ReactNode;
}

const listSidebarItem = [
    {
        title: 'Dasboard',
        url: '/admin',
        icon: 'bxs-dashboard'
    },
    {
        title: 'Product',
        url: '/admin/product',
        icon: 'bxl-product-hunt'
    },
    {
        title: 'Users',
        url: '/admin/users',
        icon: 'bxs-user-circle'
    }
]

const AdminLayout = (props: PropsType) => {
    const { children } = props
    return (
        <div className={styles.admin}>
            <Sidebar lists={listSidebarItem} panel="Admin Panel" />
            <div className={styles.admin__main}>{children}</div>
        </div>
    )
}

export default AdminLayout;