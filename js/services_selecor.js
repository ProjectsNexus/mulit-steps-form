var Serviceinfo = {
    "Audio Editing": {
        "Sound Design": ['$ 0.70 per min'],
        "ViceOver Editing":['$ 1.50 per min'],
        "Audio Mixing":['$ 0.99 per min'],
        "Audio Editing":['$ 0.50 per min'],
        "Foley & Sound Effect":['$ 1.59 per min'],
        "Music Editing":['$ 0.80 per min']
    },
    "AutoCAD": {
        "Architectural Drafting": ['$ 21.99 per draft'],
        "Mechanical Drafting": ['$ 17.99 per draft'],
        "Civil Engineering Drafting": ['$ 19.99 per draft'],
        "Electrical Drafting": ['$ 14.99 per draft'],
        "3D Modeling": ['$ 29.99 per Model'],
        "Interior Design Drafting": ['$ 24.99 per draft'],
        "Structural Drafting": ['$ 27.99 per draft'],
        "HVAC Drafting": ['$ 34.99 per draft'],
        "Plumbing Drafting": ['$ 21.99 per draft'],
        "Land Surveying Drafting": ['$ 40.00 draft']
    },
    "Content Writing": {
        "CopyWriting": ['$ 02.00 per Page'],
        "Content Writing": ['$ 04.00 per Page'],
        "Blog Writing": ['$ 06.00 per Page'],
        "SEO Writing": ['$ 8.99 per Page'],
        "Technical Writing": ['$ 7.50 per Page'],
        "Creative Writing": ['$ 10 per Page'],
        "Proof Reading": ['$ 4.25 per Page'],
        "Content Strategy": ['Depend on Requirment'],
        "Content Marketing": ['Depend on Requirment']
    },
    "Graphic Design": {
        "Logo Design": ['$ 5.00 per logo'],
        "Brochures": ['$ 0.85 per brochure'],
        "Flyers": ['$ 0.75 per flyer'],
        "Bussiness Cards": ['$ 0.50 per Card'],
        "Wedding Cards": ['Depend on Card Style'],
        "Illustration": ['Depend on Design'],
        "Infographic": ['Depend on Design'],
        "Trpographic": ['Depend on Design'],
        "Social Media Graphics": ['$ 10.00 per Design'],
        "Packaging Graphic": ['Depend on Design'],
        "Web Graphic & UI/UX Design": ['Depend on Design'],
        "Branding": ['Depend on Work']
    },
    "Search Engine Optimization": {
        "KeyWord Research": ['$ 0.79 per word'],
        "On-Page Optimization": ['$ 1.75 per Page'],
        "Off-Page Optimization": ['$ 1.80 per Page'],
        "Link Building": ['$ 0.99 per link'],
        "SEO Auditing": ['As Per Requirment'],
        "Competitor Analysis": ['As per Requirment'],
        "Local SEO": ['As Per Requirment'],
        "SEO Content Writing": ['$ 8.99 per Page'],
        "SEO Strategy Planning": ['Depend on plane'],
        "SEO Reporting": ['Depend on Requirment']
    },
    "Web Development": {
        "Front-end Decelopment": ['$ 03 per Page'],
        "Back-end Decelopment": ['$ 2.75 per Page'],
        "Responsive Web Design": ['$ 3.35 per Page'],
        "E-commerce Development": ['$ 0.85 per Product'],
        "Content Management System": ['$ 2.5 per Page'],
        "User Interface Design": ['$ 1.95 per Page'],
        "Web Optimization": ['$ 2.35 per Page'],
        "Website Maintenance": ['$ 1.99 per Page'],
        "API Integration": ['$ 1.50 per API']
    },
    "Vedio Editing": {
        "Video Editing": ['$ 0.40 per min'], 
        "Motion Graphic":['$ 0.80 per min'],
        "Color Grading":['$ 01.00 per min'],
        "Podcast Editing":['$ 01.00 per min'],
        "Foley & Sound Effect":['$ 1.99 per min'],
        "Color Grading":['$ 01.00 per min']
    }
}

window.onload = function(){
    const selectDepartment = document.getElementById('department'),
        selectServices = document.getElementById('service'),
        //selectPerItemPrice = document.getElementById('per_item_price'),
        selectRoughIdea = document.getElementById('rough_idea'),
        //selectQuanityDuration = document.getElementById('quanity/duration'),
        //selectExpectedPrice = document.getElementById('Expected_price'),
        selects = document.querySelectorAll('select' , 'input')

        selectServices.disabled = true
        //selectPerItemPrice.disabled = true
        selectRoughIdea.disabled = true
        //selectQuanityDuration.disabled = true
        //selectExpectedPrice.disabled = true

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let Service in Serviceinfo){
            // console.log(country);
            selectDepartment.options[selectDepartment.options.length] = new Option(Service, Service)
        }


        // Service change
        selectDepartment.onchange = (e) =>{
            
            selectServices.disabled = false
            //selectPerItemPrice.disabled = true
            selectRoughIdea.disabled = true
            //selectQuanityDuration.disabled = true
            //selectExpectedPrice.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectServices.length = 1
            //selectPerItemPrice.length = 1
            selectRoughIdea.length = 1
            //selectQuanityDuration.length = 1
            //selectExpectedPrice.length = 1

            for(let Services in Serviceinfo[e.target.value]){
                // console.log(state);
                selectServices.options[selectServices.options.length] = new Option(Services, Services)
            }
        }

        // state change
            selectServices.onchange = (e) =>{
            //selectPerItemPrice.disabled = false
            selectRoughIdea.disabled = false
            //selectQuanityDuration.disabled = true
            //selectExpectedPrice.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            //selectPerItemPrice.length = 1
            selectRoughIdea.length = 1
            //selectQuanityDuration.length = 1
            //selectExpectedPrice.length = 1

            let PerItemRate = Serviceinfo[selectDepartment.value][selectServices.value];
            
            for(let i=0; i<PerItemRate.length; i++){
                //selectPerItemPrice.options[//selectPerItemPrice.options.length] = new Option(PerItemRate[i], PerItemRate[i])
            }
        }

        // change city
            //selectPerItemPrice.onchange = (e) =>{
            //selectQuanityDuration.disabled = false
/*
            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })
            
            selectRoughIdea.length = 1
            //selectQuanityDuration.length = 1
            //selectExpectedPrice.length = 1
*/
    }

        // change per item price
            //selectPerItemPrice.onchange = (e) =>{
            //selectQuanityDuration.disabled = false
/*
            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            }) 

       // }*/

      /*  // change quanitiy
            //selectQuanityDuration.onchange = (e) =>{
            //selectExpectedPrice.disabled = false

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            }) 
        //}   
//}*/
