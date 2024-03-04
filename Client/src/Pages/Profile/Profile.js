import React from 'react';
import {Tabs} from "antd"
import Book from './book';
import Applytheater from './Applytheater';

const Profile = () => {
    return (
        <div style={{padding:"5%", background:"rgb(192,192,192)",height:"100vh"}} >
           <h1> Profile</h1>

           <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Book" key="1">
            <Book/>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Apply Theatres" key="2">
            <Applytheater/>
        </Tabs.TabPane>
      </Tabs>
        </div>
    );
}

export default Profile;
