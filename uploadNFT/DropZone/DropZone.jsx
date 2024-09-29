import React, { useState, useCallback } from 'react';
import styles from './DropZone.module.css';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import img from '../../img';

const DropZone = ({ title, heading, subHeading, name, website, description, royalties, fileSize, category, properties, uploadToIPFS, setImage }) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    const url = await uploadToIPFS(acceptedFiles[0]);
    setFileUrl(url);
    setImage(url);
    console.log(url);
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
  });

  return (
    <div className={styles.dropZone}>
      <div className={styles.dropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={styles.dropZone_box_input}>
          <p className={styles.dropZone_box_input_title}>{title}</p>
          <div className={styles.dropZone_box_input_img}>
            <Image src={img.upload} alt='upload' width={100} height={100} className={styles.dropZone_box_input_img_img} />
          </div>
          <p className={styles.dropZone_box_input_heading}>{heading}</p>
          <p className={styles.dropZone_box_input_subHeading}>{subHeading}</p>
        </div>
      </div>
      {fileUrl && (
        <aside className={styles.dropZone_box_aside}>
          <div className={styles.dropZone_box_aside_box}>
            <Image src={fileUrl} alt='nft img' width={200} height={200} className={styles.dropZone_box_aside_box_img} objectFit='contain' />
            <div className={styles.dropZone_box_aside_box_preview}>
              <div className={styles.dropZone_box_aside_box_preview_one}>
                <p><samp>NFT Name:</samp> {name || ""}</p>
                <p><samp>Website:</samp> {website || ""}</p>
              </div>
              <div className={styles.dropZone_box_aside_box_preview_two}>
                <p><samp>Description:</samp> {description || ""}</p>
              </div>
              <div className={styles.dropZone_box_aside_box_preview_three}>
                <p><samp>Royalties:</samp> {royalties || ""}</p>
                <p><samp>File Size:</samp> {fileSize || ""}</p>
                <p><samp>Properties:</samp> {properties || ""}</p>
                <p><samp>Category:</samp> {category || ""}</p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
