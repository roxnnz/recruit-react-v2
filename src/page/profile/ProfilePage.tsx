import React from "react"
import { TopNavBar } from "../../component/nav/TopNavBar"
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

export const ProfilePage = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <>
            <TopNavBar />
            <div>Welcome {user.firstName}</div>
        </>
    )
}