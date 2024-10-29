import Sidebar from "@/components/fragments/Sidebar/Index"
import styles from './MemberLayouts.module.scss'

type PropsType = {
    children: React.ReactNode;
}

const listSidebarItem = [
    {
        title: 'Dasboard',
        url: '/member',
        icon: 'bxs-dashboard'
    },
    {
        title: 'Order',
        url: '/member/order',
        icon: 'bx-basket'
    },
    {
        title: 'Profile',
        url: '/member/profile',
        icon: 'bxs-user'
    }
]

const MemberLayout = (props: PropsType) => {
    const { children } = props
    return (
        <div className={styles.member}>
            <Sidebar lists={listSidebarItem} panel='Member Panel' />
            <div className={styles.member__main}>{children}</div>
        </div>
    )
}

export default MemberLayout;