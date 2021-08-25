import React, { useState } from 'react';
import AdNavBar from '../../components/adnavbar/adnavbar';
import NavBar from '../../components/navbar/navbar';
import './admin.scss';

const Admin = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return ( 
        <div className="admin">
           <AdNavBar />
           <form>
               <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="TITLE" /> <br />
               <textarea value={body} onChange={e => setBody(e.target.value)} cols="30" rows="10" placeholder="BODY"></textarea>
           </form>
        </div>
     );
}
 
export default Admin;