
import jsPDF from "jspdf";
import { Get_font_th } from "./pdf_font";

function Examplereport(params) {


    const doc = new jsPDF("p", "mm", "a4");


    doc.addFileToVFS("THSarabunNew.ttf", Get_font_th());
    doc.addFont("THSarabunNew.ttf", "THSarabunNew", "bold");
    doc.setFont("THSarabunNew", 'bold');
    
    let page_no = 1
    doc.text(105,295, `${page_no}`)
    let h_page = 10

    doc.text(105,295, `${page_no}`)
    h_page = 10;

    let space = [190 * 0.1, 190 * 0.2];
    let columns = [10];
    let data = ["No.", "Customer", "Product", "Item", "Price", "Sum Item Price"]
    

    for (let i = 0; i < 6; i++) {
        if(i != 0){
            columns[i] = columns[i - 1] + (i == 1 || i == 4 ? space[0] : space[1])
        }
        doc.rect(columns[i], h_page, (i == 0 || i == 3 ? space[0] : space[1]),10)
        doc.text((columns[i] + ((i == 0 || i == 3 ? space[0] : space[1]) / 2)), h_page + (10/2) ,data[i], "center") 
    }

    

    for (let index = 0; index < params.length; index++) {
        h_page+=10

        if(h_page > 270){
            doc.addPage()
            page_no++;
            doc.text(105,295, `${page_no}`)
            h_page = 10;
            for (let i = 0; i < 6; i++) {

                doc.rect(columns[i], h_page, (i == 0 || i == 3 ? space[0] : space[1]),10)
                doc.text((columns[i]+((i == 0 || i == 3 ? space[0] : space[1])/2)), h_page + (10/2) ,data[i], "center") 
            }
            h_page+=10
        }

        const element = params[index];
        // console.log(element);
        let params_data = [index+1, element.customer, element.product, element.item,
            element.price, (element.price*element.item)]

        if(index%2 == 0){
            for (let i = 0; i < 6; i++) {
                // columns[i] = columns[i - 1] + (i == 1 || i == 4 ? space[0] : space[1])
                doc.setFillColor(123,200,115)
                doc.setDrawColor(0,0,0)
                doc.rect(columns[i], h_page, (i == 0 || i == 3 ? space[0] : space[1]),10, "DF")
                doc.text((columns[i]+((i == 0 || i == 3 ? space[0] : space[1])/2)), h_page + (10/2) ,params_data[i].toString(), "center") 
            }
        }else {
            for (let i = 0; i < 6; i++) {
                // columns[i] = columns[i - 1] + (i == 1 || i == 4 ? space[0] : space[1])
                doc.rect(columns[i], h_page, (i == 0 || i == 3 ? space[0] : space[1]),10)
                doc.text((columns[i]+((i == 0 || i == 3 ? space[0] : space[1])/2)), h_page + (10/2) ,params_data[i].toString(), "center") 
            }
        }

    }

    let sum = 0;
    let all_item_price = 0;
    let unique_name = [];
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        sum += element.price;
        all_item_price += element.price*element.item;
        unique_name.push(element.customer);
    }

    h_page += 10
    let unique_count = new Set(unique_name);
    let sum_data = [null, null, null, null, sum, all_item_price/unique_count.size]
    for (let i = 4; i < 6; i++) {
        doc.setFillColor(123,200,115)
        doc.setDrawColor(0,0,0)
        doc.rect(columns[i], h_page, (i == 0 || i == 3 ? space[0] : space[1]),10, "DF")
        doc.text((columns[i]+((i == 0 || i == 3 ? space[0] : space[1])/2)), h_page + (10/2) ,sum_data[i].toString(), "center") 
    }
   




window.open(doc.output('bloburl'))
   


}
    export default Examplereport;