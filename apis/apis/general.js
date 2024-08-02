import axios from 'axios';
import $ from 'jquery';
import { store } from '../store/store'
import { currentPrint } from '../store/slices/general';
import html2pdf from 'html2pdf.js'

export default {

    sendMail:(args)=>{

        return axios.post('/api/general/sendMail', args);

    },

    print: (args, cb) => {

        return new Promise((c, e) => {
            // ?a=" + Math.random() * 1000
            axios.get('/docTemplates/' + args.theme + ".html").then(async (resp) => {

                let state = store.getState().authSlice.currentUser;

                 let data =  cb(args, resp.data, state);



                const options = {
                    filename: 'generated_pdf.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                let someContent = document.createElement('div');
                someContent.innerHTML = data;


                // Convert HTML to PDF
                html2pdf().from(someContent).toPdf().get('pdf').then(function (pdf) {
                    // Convert PDF to Blob
                    let blob = pdf.output('blob');

                    // Now you can use pdfOutput, which is a Blob object
                    // console.log("Blob generated:", pdfOutput);

                    let content = URL.createObjectURL(blob, { oneTimeOnly: true });
                    store.dispatch(currentPrint({
                            url:content,
                            ...args
                
                    }));
                    c(content);

                    // can generalize it? yeh quick sales m bhi use hora
                    setTimeout(()=>{
                        $('#print-modal iframe')[0].contentWindow.print();
                    }, 1000)

                    //  $('#print-modal').show();

                });

                // Select the HTML element to convert to PDF
                //   const element = document.getElementById('html-content');

                // Call the html2pdf library to generate the PDF
                //  let res = await html2pdf(someContent)
                //     // .from(someContent   )
                //     .set(options)
                //     .to('pdf')

                //   console.log(res);

                // .then(function (pdf, b) {
                //     // Convert PDF to Blob
                //     const blob = new Blob([pdf.output('blob')], { type: 'application/pdf' });

                //     let content = URL.createObjectURL(blob, {oneTimeOnly:true});

                //     store.dispatch(currentPrint(content));

                // });


            });

        })


    }

}