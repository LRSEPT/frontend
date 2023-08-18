import React, { useEffect } from 'react';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

import style from '../styles/details.module.css';

export default function PostDetail() {
  return (
    <div className='details'>
      <div className={style.alll}>
        <h3 id="title">Post details</h3>
        <Link href="/" id="Link">Go back to home</Link>
      </div>
    </div>
  );
}
