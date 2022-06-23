// a functional component that returns a photo of your profile.
import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import ahlem from "./img/ahlam.png";
import bbok from "./img/bbok.jpg";

const ProfilePhoto = () => { 
     return  (
      
         <Card className="bg-dark text-white">
      <Card.Img src={ahlem} alt="Card image" height={700}  />
    
      <Card.ImgOverlay className="justify-content-space-between">
        <Card.Text> 
       <Card style={{ width: '24rem', height:'27rem'}} className='postion' >
          <Card.Img variant="top" src={bbok} height={380} />
       <Card.Body> 
          <Card.Text>
    أحلام  محمد الشريف<br></br>
    (1953 ا13اأبريل)، هي كاتبة وروائية جزائرية <br></br>
    حازت على جائزة نجيب محفوظ لعام 1998.<br></br>
    درع بيروت (2008)<br></br>
الشخصية الثقافية الجزائرية (2009)<br></br>
وسام الشرف الجزائري (2006)<br></br>
    </Card.Text>
  </Card.Body>
</Card>
{/*  */}
        </Card.Text>
      </Card.ImgOverlay>

      <Card.Text className="ttext">
      عملت أحلام في الإذاعة الوطنية مما خلق لها شهرة كشاعرة إذ لاقى برنامجها «همسات» استحسانًا كبيرًا من طرف المستمعين، 
      انتقلت أحلام مستغانمي إلى فرنسا في سبعينات القرن الماضي، حيث تزوجت من صحفي لبناني، 
      وفي الثمانينات نالت شهادة الدكتوراة من جامعة السوربون. تقطن حاليا في بيروت،
       وهي حائزة على جائزة نجيب محفوظ للعام 1998 عن روايتها ذاكرة الجسد.

اختارت منظمة الأمم المتحدة للتربية والثقافة والعلوم «اليونسكو» 
أحلام مستغانمي لتصبح فنانة اليونسكو من أجل السلام 
وحاملة رسالة المنظمة من أجل السلام لمدة عامين،
 باعتبارها إحدى الكاتبات العربيات الأكثر تأثيراً، 
ومؤلفاتها من بين الأعمال الأكثر رواجاً في العالم. 
وصرحت مديرة منظمة اليونسكو إيرينا بوكوفا،
 إن «مؤلفات الأديبة الجزائرية تعد من بين الأعمال الأكثر رواجاً في العالم،
 نظراً لتميزها بعملها لصالح حقوق المرأة والحوار بين الثقافات ومكافحة العنف».
      </Card.Text>
    </Card>
     
     )     
  }
  
  export default ProfilePhoto