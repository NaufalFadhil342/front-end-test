import React, { useState } from 'react';

const Image = ({ changeData }) => {
  const [img, setImg] = useState();

  const onImageChange = (event) => {
    changeData('imageFile', event.target.value);
    const [file] = event.target.files;
    setImg(URL.createObjectURL(file));
    changeData('imageFiles', URL.createObjectURL(file));

    if (file.length !== 0) {
      setImg(URL.createObjectURL(file[0]));
    }
  };
  return (
    <div className="button">
      <input type="file" onChange={onImageChange} />
      <img width="100%" src={img} alt="" />
    </div>
  );
};

export default Image;
