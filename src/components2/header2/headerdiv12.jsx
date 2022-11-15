import React from 'react'
import '../../css/header2/header12.css'
export default function headerdiv12(props) {
  return (
    <div className='w-100 bg-warning papa1 row  container-fluid'>
      <div className='col-xl-2 bg-secondary align-items-end container-fluid d-flex flex-column '>
        <div className='w-50 mt-4'>
          <img className='img-fluid' src={props.data.a1} alt="" />
        </div>
        <div className='w-50 mt-4'>
        <img className='img-fluid' src={props.data.a2} alt="" />
        </div>
        <div className='w-50 mt-4'>
        <img className='img-fluid' src={props.data.a3} alt="" />
        </div>
      </div>



      <div className='col-xl-5 bg-danger papa2'>
        <div className='w-100 container-fluid '>
          <img className=' img5' src={props.data.a4} alt="" />
        </div>
      </div>


      <div  className='col-xl-5 bg-info align-items-center container-fluid d-flex flex-column'>
        <div className='papa3 '>
          <h2>{props.data.a5}</h2>
          <div className='d-flex '>
          <img className='img6' src= {props.data.a6} alt="" />
          <img className='img6' src= {props.data.a6} alt="" />
          <img className='img6' src= {props.data.a6} alt="" />
          <img className='img6' src= {props.data.a6} alt="" />
          <img className='img6' src= {props.data.a6} alt="" />
          <p className='mt-3 ms-3'>{props.data.a7}</p>
          <p className='a33'>{props.data.a8}</p>
          </div>
       
        </div>
   
        <div className='papa4'>
          <h5>{props.data.a9}</h5>
        </div>
        <div className='papa5'>
          <div className='papa6'>
            <img className='img-fluid img7' src={props.data.a10} alt="" />
          </div>
        </div>

        <div className='papa7 w-100 '>
          <h2 className='mt-3'>{props.data.a11}</h2>
          <h1 className='text-warning'>{props.data.a12}</h1>
          <h2 className='mt-3'>{props.data.a13}</h2>
        </div>
        <hr className='hr1' />
        <div className='papa8'>
          <h4 className='mt-2'>{props.data.a14}</h4>
          <h2 className='text-warning'>{props.data.a15}</h2>
          <h4 className='mt-1'>{props.data.a16}</h4>
          <h3 className='ms-2'>{props.data.a17}</h3>
        </div>

        <div className='row papa9'>
          <div className='col-xl-3 bg-warning d-flex'>
          <button type="button" class="btn btn-light butin2 w-100">-1+</button>
          </div>
          <div className='col-xl-9 bg-secondary'>
          <button type="button" class="btn btn-warning butin1 w-100">Warning</button>
          </div>
        </div>

      </div>
    </div>
  )
}


