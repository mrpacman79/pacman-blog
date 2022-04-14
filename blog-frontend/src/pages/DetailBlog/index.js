import React from 'react';
import { useHistory } from 'react-router-dom';
import {RegisterBg} from '../../assets';
import { Link } from '../../components/atoms';
import './detailBlog.scss';

const DetailBlog = () => {
  const history = useHistory();

  return (
    <div className='detail-blog-wrapper'>
      <img className='img-cover' src={RegisterBg} alt="thumb" />
      <p className='blog-title'>Title Blog</p>
      <p className='blog-author'>Author - Date POST</p>
      <p className='blog-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tria genera cupiditatum, naturales et necessariae, naturales et non necessariae, nec naturales nec necessariae. Multoque hoc melius nos veriusque quam Stoici. Maximus dolor, inquit, brevis est. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Duo Reges: constructio interrete. Egone non intellego, quid sit don Graece, Latine voluptas? Tenesne igitur, inquam, Hieronymus Rhodius quid dicat esse summum bonum, quo putet omnia referri oportere? Hic ambiguo ludimur. Quae in controversiam veniunt, de iis, si placet, disseramus. Itaque et manendi in vita et migrandi ratio omnis iis rebus, quas supra dixi, metienda.</p>
      <Link title="Kembali ke Home" onClick={() => history.push('/')} />
    </div>
  )
}

export default DetailBlog;