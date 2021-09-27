import React from 'react';
import { useParams } from 'react-router-dom';
export default function ExUseParms() {
  

  const { fname } = useParams();
  // console.log(fname);

  return <>This is Example Is Parameter {fname}</>;
}
