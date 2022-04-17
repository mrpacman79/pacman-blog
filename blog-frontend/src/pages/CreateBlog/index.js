import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Input, Button, Upload, TextArea, Gap, Link} from '../../components';
import './createBlog.scss';
import { useHistory, withRouter } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { setForm, setImgPreview , postToAPI, updateToAPI} from '../../config/redux/action/';

const CreateBlog = (props) => {
  const {form, imgPreview} = useSelector(state => state.createBlogReducer);
  const {title, body} = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const [image, setImage] = useState('');
  // const [imagePreview, setImagePreview] = useState(null);
  const history = useHistory();

  useEffect(() => {
    console.log(props)
    const id = props.match.params.id;
    if(id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then(res => {
        const data = res.data.data;
        dispatch(setForm('title', data.title));
        dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
        dispatch(setForm('body', data.body));
      })
      .catch(err => {
        console.log("ERROR: ",err);
      });
    }
  }, [props])

  const onSubmit = () => {
    const id = props.match.params.id;
    if(isUpdate) {
      updateToAPI(form, id);
    }else{
      postToAPI(form);
    }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image', file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  }

  return (
    <div className='blog-post'>
        <Link title="Kembali" onClick={() => history.push('/')} />
        <p className='title'>{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
        <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
        <Upload onChange={(e) => onImageUpload(e)} img={imgPreview}/>
        <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
        <Gap height={20} />
        <div className='button-action'>
          <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit}/>
        </div>
    </div>
  )
}

export default withRouter(CreateBlog);