import React from "react";
import { TopNavBar } from "../../component/nav/TopNavBar";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import * as styles from './Profile.module.scss';

export const ProfilePage = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <>
            <TopNavBar />
            <div className={styles.profileDetails}>
                <h1>Profile Information</h1>
                <div className={styles.profilePage}>
                    <div className="profile-picture">
                        <img src="/pictures/penda.png" />
                    </div>
                    <div className={styles.detailItem}>
                        <label>First Name:</label>
                        <p>{user.firstName}</p>
                    </div>

                    <div className={styles.detailItem}>
                        <label>Last Name:</label>
                        <p>{user.lastName}</p>
                    </div>

                    <div className={styles.detailItem}>
                        <label>Email:</label>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}