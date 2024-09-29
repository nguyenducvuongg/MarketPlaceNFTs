import React, { useState } from 'react';
import styles from './UploadNFTPage.module.css';
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { MdOutlineContentCopy } from "react-icons/md";
import Image from 'next/image';
import img from '../img/index';
import { Button } from "../components/ConponentsIndex";
import { DropZone } from './UpLoadNftindex';
import formStyles from '../components/Form/Form.module.css';
import { useRouter } from 'next/router';

const UploadNFTPage = ({uploadToIPFS,createNFT}) => {
  const [price, setPrice] = useState("");
  const [active, setActive] = useState(0);
  const [name , setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState('');
  const[image,setImage] = useState(null);

  const router = useRouter();

  const categoryArray = [
    {
      image: img.nft_image_1,
      name: "Art",
      id: 1
    },
    {
      image: img.nft_image_2,
      name: "Music",
      id: 2
    },
    {
      image: img.nft_image_3,
      name: "Sports",
      id: 3
    },
    {
      image: img.nft_1,
      name: "Photography",
      id: 4
    }
  ];

  const handleNameChange = (e) => setName(e.target.value);
  const handleWebsiteChange = (e) => setWebsite(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleRoyaltiesChange = (e) => setRoyalties(e.target.value);
  const handleFileSizeChange = (e) => setFileSize(e.target.value);
  const handlePropertiesChange = (e) => setProperties(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  return (
    <div className={styles.upload}>
      <DropZone
        title="JPG,PNG,MAX 100MB"
        heading="Drag and Drop files"
        subHeading="or browse "
        name={name}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        // setImage={setImage}
        uploadToIPFS={uploadToIPFS}
      />
      <div className={styles.upload_box}>
        <div className={formStyles.form_box_input}>
          <label htmlFor="nft">Item Name</label>
          <input
            type="text"
            placeholder='Enter your name'
            className={formStyles.form_box_input_username}
            onChange={handleNameChange}
          />
        </div>
        <div className={formStyles.form_box_input}>
          <label htmlFor="website">Website</label>
          <div className={formStyles.form_box_input_box}>
            <div className={formStyles.form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder='Enter your website'
              onChange={handleWebsiteChange}
            />
          </div>
        </div>

        <p className={styles.upload_box_input_para}>
          Ciscrypto will not store your email or any of your personal information.
        </p>

        <div className={formStyles.form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6 "
            placeholder='Enter your description'
            className={formStyles.form_box_input_description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className={formStyles.form_box_input}>
          <label htmlFor="name">Choose Collection</label>
          <p className={formStyles.form_box_input_para}>Choose an exiting  Collection and create your new NFT</p>
          <div className={styles.upload_box_slider_div}>
            {categoryArray.map((item) => (
              <div className={`${styles.upload_box_slider} ${active === item.id ? styles.active : ''}`} key={item.id} onClick={() => (setActive(item.id), setCategory(item.id))}>
                <div className={styles.upload_box_slider_box}>
                  <div className={styles.upload_box_slider_box_img}>
                    <Image
                      src={item.image}
                      alt="background"
                      width={70}
                      height={70}
                      className={styles.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={styles.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>Crypto legends - {item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={formStyles.form_box_input_social}>
          <div className={formStyles.form_box_input}>
            <label htmlFor="Royalties">Royalties</label>
            <div className={formStyles.form_box_input_box}>
              <div className={formStyles.form_box_input_box_icon}><FaPercent/></div>
              <input type="text" placeholder='20%' onChange={handleRoyaltiesChange}/>
            </div>
          </div>
          <div className={formStyles.form_box_input}>
            <label htmlFor="Size">Size</label>
            <div className={formStyles.form_box_input_box}>
              <div className={formStyles.form_box_input_box_icon}><MdOutlineAttachFile/></div>
              <input type="text" placeholder='Enter your Size' onChange={handleFileSizeChange}/>
            </div>
          </div>
          <div className={formStyles.form_box_input}>
            <label htmlFor="properties">properties</label>
            <div className={formStyles.form_box_input_box}>
              <div className={formStyles.form_box_input_box_icon}>< AiTwotonePropertySafety/></div>
              <input type="text" placeholder='properties' onChange={handlePropertiesChange}/>
            </div>
          </div>
          <div className={formStyles.form_box_input}>
            <label htmlFor="Price">Price</label>
            <div className={formStyles.form_box_input_box}>
              <div className={formStyles.form_box_input_box_icon}>< AiTwotonePropertySafety/></div>
              <input type="text" placeholder='Price' onChange={handlePriceChange}/>
            </div>
          </div>
        </div>
        <div className={styles.upload_btn}>
          <Button 
            btnName="Upload NFT" 
            handleClick={async()=> 
              createNFT(
                name,
                description,
               
                price,
                router,
                // category,
                // website,
                // royalties,
                // fileSize,
                // properties
              )
            } 
            classStyle={styles.upload_btn_style}/>
          <Button btnName="Preview" handleClick={() => {}} classStyle={styles.upload_btn_style}/>
        </div>
      </div>
    </div>
  );
};

export default UploadNFTPage;
