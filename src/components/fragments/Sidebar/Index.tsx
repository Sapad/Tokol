import { useRouter } from 'next/router';
import styles from './Sidebar.module.scss'
import Link from 'next/link';
import Button from '@/components/ui/Button/Index';
import { signOut } from 'next-auth/react';

type PropsType = {
    lists: Array<{
        title: string,
        url: string,
        icon: string
    }>;
    panel: string
}

const Sidebar = (props: PropsType) => {
    const { lists, panel } = props;
    const { pathname } = useRouter();
    return (
        <div className={styles.Sidebar}>
            <div className={styles.Sidebar__top}>
                <h1 className={styles.Sidebar__top__title}>
                    {panel}
                </h1>
                <div className={styles.Sidebar__top__lists}>
                    {lists.map((list, index) => (
                        <Link href={list.url} key={list.title} className={`${styles.Sidebar__top__lists__item} ${pathname === list.url && styles.Sidebar__top__lists__item__active}`}>
                            <i className={`bx ${list.icon} ${styles.Sidebar__top__lists__item__icons}`} />
                            <h4 className={styles.Sidebar__top__lists__item__title}>{list.title}</h4>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.Sidebar__bottom}>
                <Button className={styles.Sidebar__bottom__button} type='button' variant='secondary' onClick={() => signOut()}>Logout</Button>
            </div>
        </div>
    )
}
export default Sidebar;