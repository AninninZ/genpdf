
import jsPDF from "jspdf";
import { Get_font_th } from "./pdf_font";
import img1 from './img/img1.png'
function Demoreport(params) {


    const doc = new jsPDF("p", "mm", "a4");


    doc.addFileToVFS("THSarabunNew.ttf", Get_font_th());
    doc.addFont("THSarabunNew.ttf", "THSarabunNew", "bold");
    doc.setFont("THSarabunNew", 'bold');



 //
let page = 1,hpage = 20,befor = 0

befor = hpage
doc.setFontSize(24)
doc.text(10,hpage,'วิธี set ค่าหน้ากระดาษ')
hpage+=7
doc.setTextColor(0, 0, 255);
doc.setFontSize(20)
doc.text(10,hpage,' const doc = new jsPDF("p", "mm", "a4");','left')
hpage+=7
doc.setFontSize(16)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,' ตัวแปรที่ 1 รับค่าได้ 2 ค่าคือ "p" และ "l"')
hpage+=7
doc.text(15,hpage,'"p" ใช้แทนการตั้งค่าหน้ากระดาษแนวตั้ง')
hpage+=7
doc.text(15,hpage,'"l" ใช้แทนการตั้งค่าหน้ากระดาษแนวนอน')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 2 รับค่าหน่วยที่ใช้ทำกระดาษ')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 3 ใช้กำหนดกระดาษ')
hpage+=7
hpage+=7
doc.setFontSize(24)
doc.text(10,hpage,'วิธี เพิ่มภาษาไทยเข้ามาใน jspdf')
hpage+=7
doc.setTextColor(0, 0, 255);
doc.setFontSize(20)
doc.text(10,hpage,`doc.addFileToVFS("THSarabunNew.ttf", Get_font_th());
doc.addFont("THSarabunNew.ttf", "THSarabunNew", "bold");
doc.setFont("THSarabunNew", 'bold');`,'left')
hpage+=28
doc.setFontSize(24)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,'วิธีการ save PDF')
hpage+=7
doc.setTextColor(0, 0, 255);
doc.setFontSize(20)
doc.text(10,hpage,`window.open(doc.output('bloburl'), doc.output('save', "namereport"));`,'left')
hpage+=7
doc.setFontSize(16)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,`window.open(doc.output('bloburl'); ใช้เมื่อต้องการออกเป็น path`)
hpage+=7
doc.text(10,hpage,`doc.output('save', "namereport")); ใช้เมื่อต้องการออกเป็น file`)
hpage+=10
doc.setFontSize(24)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,'วิธีใส่ข้อความลง jsPDF')
hpage+=7
doc.setTextColor(0, 0, 255);
doc.setFontSize(20)
doc.text(10,hpage,`doc.text(10,10,'text'.toString(),'left');`,'left')
hpage+=7
doc.setFontSize(16)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,' ตัวแปรที่ 1 รับค่าตำแหน่งในแก่น x')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 2 รับค่าตำแหน่งในแก่น y')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 3 รับข้อความที้ใส่เข้าไป (รับเฉพาะ String)')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 4 รับค่าได้ 3 ค่าคือ "left","center" และ "right"')
hpage+=7
doc.text(15,hpage,'"left" ใช้แทนการเริ่มข้อความจากด้านซ้าย ตัวอย่าง')
hpage+=7
doc.setTextColor(255, 0, 0);
doc.text(45,hpage,'ข้อความชิดซ้าย','left')
doc.rect(45,hpage-5,0,7)
hpage+=7
doc.setTextColor(0, 0, 0);
doc.text(15,hpage,'"center" ใช้แทนการเริ่มข้อความจากตรงกบาง ตัวอย่าง')
hpage+=7
doc.setTextColor(255, 0, 0);
doc.text(45,hpage,'ข้อความตรงกลาง','center')
doc.rect(45,hpage-5,0,7)
hpage+=7
doc.setTextColor(0, 0, 0);
doc.text(15,hpage,'"right" ใช้แทนการเริ่มข้อความจากด้านขวา ตัวอย่าง')
hpage+=7
doc.setTextColor(255, 0, 0);
doc.text(45,hpage,'ข้อความชิดขวา','right')
doc.rect(45,hpage-5,0,7)
hpage+=10
doc.setTextColor(0, 0, 0);
doc.setFontSize(24)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,'วิธี set ขนาด font')
hpage+=7
doc.setTextColor(0, 0, 255);
doc.setFontSize(20)
doc.text(10,hpage,` doc.setFontSize(16)`,'left')
hpage+=7
doc.setFontSize(16)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,' รับขนาด font ตัวอักศร')
hpage+=10
doc.setFontSize(24)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,'วิธี set สี font')
hpage+=7
doc.setTextColor(0, 0, 255);
doc.setFontSize(20)
doc.text(10,hpage,` doc.setTextColor(0, 0, 0)`,'left')
hpage+=7
doc.setFontSize(16)
doc.setTextColor(155, 0, 0);
doc.text(10,hpage,' ตัวแปรที่ 1 รับค่าสี R (0 - 255)')
hpage+=7
doc.setTextColor(0, 155, 0);
doc.text(10,hpage,' ตัวแปรที่ 2 รับค่าสี G (0 - 255)')
hpage+=7
doc.setTextColor(0, 0, 155);
doc.text(10,hpage,' ตัวแปรที่ 3 รับค่าสี B (0 - 255)')
hpage+=10
doc.text(105,290,page.toString())
hpage = 20
doc.addPage()
page+=1

doc.setFontSize(24)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,'วิธีใส่ตารางใน jsPDF')
hpage+=7
doc.setTextColor(0, 0, 255);
doc.setFontSize(20)
doc.text(10,hpage,`doc.rect(25, 10, 25, 7, 'DF');`,'left')
hpage+=7
doc.setFontSize(16)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,' ตัวแปรที่ 1 รับค่าตำแหน่งในแก่น x')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 2 รับค่าตำแหน่งในแก่น y')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 3 รับค่าความยาวของตาราง')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 4 รับค่าความสูงของตาราง')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 5 รับค่าได้ 3 ค่าคือ "D","F" และ "DF"')
hpage+=7
doc.text(15,hpage,'"D" ใช้แทนการเรียกสีของตัวเส้นตาราง (ถ้าไม่ใส่จะ เป็นสีดำ) ตัวอย่าง')
hpage+=7
doc.setDrawColor(200, 200, 200);
doc.rect(25,hpage-5,25,7,'D')
hpage+=7
doc.text(15,hpage,'"F" ใช้แทนการเรียกสีของทั้งตาราง (ถ้าไม่ใส่จะ เป็นสีดำ) ตัวอย่าง')
hpage+=7
doc.setFillColor(200, 200, 200);
doc.rect(25,hpage-5,25,7,'F')
hpage+=7
doc.text(15,hpage,'"DF" ใช้แทนการเรียกสีของตัวเส้นตารางและตัวพื้นหลังตาราง (ถ้าไม่ใส่จะ เป็นสีดำ) ตัวอย่าง')
hpage+=7
doc.setDrawColor(0, 0, 0);
doc.setFillColor(200, 200, 200);
doc.rect(25,hpage-5,25,7,'DF')
hpage+=13
doc.setFontSize(24)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,'วิธี set สีกรอบและสีพื้นหลังตาราง')
hpage+=7
doc.setTextColor(0, 0, 255);
doc.setFontSize(20)
doc.text(10,hpage,`doc.setDrawColor(100, 0, 0);
doc.setFillColor(0, 0, 100);`,'left')
hpage+=17
doc.setFontSize(16)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,'setDrawColor ใช้กำหนดค่าสีของกรอบตาราง รับเป็น (R,G,B)')
hpage+=7
doc.text(10,hpage,'setFillColor ใช้กำหนดค่าสีของพื้นหลังตาราง รับเป็น (R,G,B)')

hpage+=13
doc.setFontSize(24)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,'วิธีเพิ่มภาพใน jsPDF')
hpage+=7
doc.setTextColor(0, 0, 255);
doc.setFontSize(20)
doc.text(10,hpage,`doc.addImage(pathimg, 'PNG', 10, 20, 100, 25);`,'left')
hpage+=7
doc.setFontSize(16)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,' ตัวแปรที่ 1 รับ path ของภาพที่เราต้อง')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 2 รับค่าได้ 2 ค่าคือ "JPEG" และ "PNG"')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 3 รับค่าตำแหน่งในแก่น x')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 4 รับค่าตำแหน่งในแก่น y')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 5 รับค่าความยาวของภาพ')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 6 รับค่าความสูงของภาพ')
hpage+=7
doc.text(10,hpage,'ตัวอย่างเมื่อใช้งาน')
hpage+=2
doc.addImage(img1, 'PNG', 10, hpage, 100, 25);

doc.text(105,290,page.toString())
hpage = 20
doc.addPage()
page+=1

doc.setFontSize(24)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,'วิธีการตัดคำในอยู่ในระยะที่กำหนด')
hpage+=7
doc.setTextColor(0, 0, 255);
doc.setFontSize(20)
doc.text(10,hpage,`doc.splitTextToSize('textlongtestcuting'.toString(),10);`,'left')
hpage+=7
doc.setFontSize(16)
doc.setTextColor(0, 0, 0);
doc.text(10,hpage,' ตัวแปรที่ 1 รับข้อความที่ต้องการจะตัดบรรทัด')
hpage+=7
doc.text(10,hpage,' ตัวแปรที่ 2 ระยะของข้อความที่จะตัดในแต่ระบรรทัด')
hpage+=10
/* let datacut =doc.splitTextToSize('textlongtestcuting'.toString(),10);
console.log(datacut); */

doc.text(105,290,page.toString())




doc.output('save', "Demoreport");
    /* doc.output('save', 'demoreport') */

}
    export default Demoreport;