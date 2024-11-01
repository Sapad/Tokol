import ProfileMemberView from "@/components/views/member/Profile";
import userServices from "@/services/user";
import { User } from "@/types/user.type";
import { useSession } from "next-auth/react";
import { SetStateAction, useEffect, useState, Dispatch } from "react";

type Props = {
    setToaster: Dispatch<SetStateAction<{}>>
}
const MemberProfilePage = ({ setToaster }: Props) => {
    // menampilkan profile user pada halaman member
    const [profile, setProfile] = useState<User | any>({});
    const session: any = useSession();
    useEffect(() => {
        if (session.data?.accessToken && Object.keys(profile).length === 0) {
            const getProfile = async () => {
                const { data } = await userServices.getProfile(session.data?.accessToken);
                setProfile(data.data);
            };
            getProfile();
        }
    }, [profile, session]);
    return (
        <>
            <ProfileMemberView profile={profile} setProfile={setProfile} session={session} setToaster={setToaster} />
        </>

    )
}

export default MemberProfilePage;