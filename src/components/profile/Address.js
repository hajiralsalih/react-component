
// a functional component that returns a Address of your profile.
import React from 'react'
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap';
import { MDBFooter, MDBContainer , MDBIcon }  from 'mdb-react-ui-kit';
const Address = () =>  { 
     return( 
      <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='youtube' />
          </a>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       جزائرية من مواليد  تونس العاصمة  ......
        
         تقطن حاليا في بيروت   
      
      </div>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    (قرأت يومًا إن راحة القلب في العمل، وأنّ السعادة هي أن تكون مشغولًا إلى حدّ لا تنتبه أنّك تعيس) ... من أقوال أحلام مستغانمي
      </div>
    </MDBFooter>
     )
          
  }
  
  export default Address