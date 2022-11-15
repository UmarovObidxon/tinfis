import React, { Component } from 'react'
import Headerdiv12 from '../components2/header2/headerdiv12';
import '../css/header2/header12.css'
var obj = {
 a1:"https://image.tinfis.uz/uploads/all/2022/11/oUvkcuVeRM6BoYUSsNj1VwNFdkoQuowJxFdiPBgz.jpg",
 a2:"https://image.tinfis.uz/uploads/all/2022/11/orPGBL7Bi6LtlM0YCMQgqTixF0zsjGbtA05rnAds.jpg",
 a3:"https://image.tinfis.uz/uploads/all/2022/11/5EGB2VKf2t98ld5kkzhj5Ubo08rLKjgNRalvCrW0.jpg",
 a4:"https://image.tinfis.uz/uploads/all/2022/11/oUvkcuVeRM6BoYUSsNj1VwNFdkoQuowJxFdiPBgz.jpg",
 a5:"Рюкзак для ноутбука ACER STARTER KIT 15.6 ABG950",
 a6:"	https://tinfis.uz/img/starYellow.svg",
 a7:"0 отзывы ",
 a8:"0 продаж",
 a9:"Цвет : черный",
 a10:"	https://image.tinfis.uz/uploads/all/2022/11/oUvkcuVeRM6BoYUSsNj1VwNFdkoQuowJxFdiPBgz.jpg",
 a11:"Цена:",
 a12:"465 500",
 a13:" сум",
 a14:"Рассрочка:",
 a15:"49 265",
 a16:" сум",
 a17:"x 12 месяцев",
}




export default class header2 extends Component {
  render() {
    return (
      <div className='main1'>
        < Headerdiv12 data={obj}/>
      </div>
    )
  }

}
