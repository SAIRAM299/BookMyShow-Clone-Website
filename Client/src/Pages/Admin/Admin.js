import React from 'react';
import Movielist from './Movielist';
import Theaterlist from './Theaterlist';
import {Tabs} from "antd"

const Admin = () => {
    return (
        <div style={{padding:"5%", background:"rgb(192,192,192)",height:"100vh"}}>

           <h1>ADMIN</h1>

           
           <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key="1">
            <Movielist/>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Theatres" key="2">
            <Theaterlist/>
        </Tabs.TabPane>
      </Tabs>
        </div>
    );
}

export default Admin;
