import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import BiometricSignIn from '../biometric-sign-in/BiometricSignIn'
import caretDown from '../../../assets/signIn-signUpImages/caret_down.png'
import fingerPrint from '../../../assets/signIn-signUpImages/fingerprint.jpg'
import qrCode from '../../../assets/signIn-signUpImages/qrCode.jpg'
import faceId from '../../../assets/signIn-signUpImages/faceId.jpeg'

import styles from './SelectDropDown.module.scss'

const SelectDropDown = ({ otherValues, defaultValue, name, signIn }) => {
  const [hideAsterisk, setHideAsterisk] = useState(false);
  const [ modal, setModal ] = useState(false);
  const { register } = useFormContext();
  const [ bioSignInInfo, setBioSignInInfo ] = useState({
    message: '',
    image: null,
    imageText: '',
    styles: null,
    hide: false,
    successText: ''
  });

  const selectTag = document.querySelector('select');
 
  const handleModalClick = (e) => {
    (e.target.value !== "" /* && e.target.value !== e.target.value */ ) && setModal(!modal);
    if(selectTag) {
      if(e.target.value === 'Fingerprint') {
        setBioSignInInfo({
          message: 'Scan your fingerprint so',
          image: fingerPrint,
          imageText: 'Touch sensor',
          styles: {
            width: '20%',
            border: '1px solid #aaaaaa',
            borderRadius: '50%',
            padding: '5%'
          },
          hide: false,
          successText: 'Fingerprint detected'
        })
      } else if(e.target.value === 'Face ID') {
        setBioSignInInfo({
          message: 'Place your face in the oval area so',
          image: faceId,
          styles: {
            width: '25%',
            border: '2px solid #fd4500',
            borderRadius: '50%'
          },
          hide: false,
          successText: 'Face detected'
        })
      } else if(e.target.value === 'QR Code') {
        setBioSignInInfo({
          message: 'Scan your QR Code so',
          image: qrCode,
          styles: {
            width: '30%',
          },
          hide: true
        })
      }
      // console.log(e.target.value)
    }
    // console.log(e.target.value, 'value');
  }

  const hide = () => {
    setHideAsterisk(true)
  }

  const show = () => {
    if(selectTag) {
      (selectTag.value === "") && setHideAsterisk(false)
    }
  }

  return (
    <div
      className={styles.InputDiv1}
    >
      {
        !hideAsterisk /* && value === defaultValue */ ? (
          <span
            className={styles.AsteriskInput}
          />
        ) : null
      }
      <BiometricSignIn 
        displayModal={modal}
        closeModal={ () => setModal(!modal) } 
        bioSignInInfo={ bioSignInInfo.image !== null && bioSignInInfo }
      />
      <select
        name={name}
        ref={register({ required: true })}
        className={styles.Select}
        onChange={ signIn && handleModalClick }
        onFocus={hide}
        onBlur={show}
      >
        <option value="">{ defaultValue }</option>        
        {
          otherValues.map( other => (
            <option key={other} value={other}>{other}</option>
          ))
        }
      </select>
      <img src={caretDown} className={styles.Caret} alt="caret" />
    </div>
  )
}

export default SelectDropDown
