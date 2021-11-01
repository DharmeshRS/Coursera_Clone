let mast_head=document.getElementById("mast-head");
console.log(mast_head);
let div1=document.createElement('div');
let heading=document.createElement('a');
heading.setAttribute('id','heading')
heading.href="#"
let cousera=document.createElement('a');
cousera.innerText="cousera";
let for_bussiness=document.createElement('a');
for_bussiness.innerText="for.bussiness";
 heading.append(cousera,for_bussiness);
div1.append(heading);

let div2=document.createElement('div')
let home=document.createElement('a');
home.innerText="Home"
home.href="#"
let dash_line1=document.createElement('a')
dash_line1.innerText=" |"
let product=document.createElement('a');
product.innerText="Product";
product.href="#"
product.setAttribute('id','pro')
product.addEventListener('mouseenter',()=>{
    // product_list();
})
let dash_line2=document.createElement('a')
dash_line2.innerText=" |"
let content=document.createElement('a');
content.innerText="Content"
content.href="#";
let dash_line3=document.createElement('a')
dash_line3.innerText=" |"
let compare_plan=document.createElement('a');
compare_plan.innerText="Compare Plans"
compare_plan.href="#";
let dash_line4=document.createElement('a')
dash_line4.innerText=" |"
let resorces=document.createElement('a');
resorces.innerText="Resourses"
resorces.href="#";
let dash_line5=document.createElement('a')
dash_line5.innerText=" |"
let Blog=document.createElement('a')
Blog.innerText="Blog"
Blog.href="#";
let contact_sales=document.createElement('a');
contact_sales.innerText="Contact sales"
contact_sales.style.backgroundColor="blue";
contact_sales.style.color="white";
contact_sales.style.padding="10px"
contact_sales.href="#"

div2.append(home,dash_line1, product,dash_line2, content, dash_line3, compare_plan,dash_line4, resorces, dash_line5, Blog,contact_sales);

mast_head.append(div1,div2);

// function product_list(){
//     let pro=document.getElementById('pro')
//     pro.innerHTML=null;
//     let product_drop_down_list=document.createElement("select");
//     let for_interprises=document.createElement('option');
//     for_interprises.innerText="for_interprises";
//     let for_team=document.createElement('option');
//     for_team.innerText="For Team";
//     let for_compus=document.createElement('option')
//     for_compus.innerText="For-compus";
//     product_drop_down_list.append(for_interprises,for_team,for_compus);
//     pro.append(product_drop_down_list);

// }

let section2=document.getElementById('section2');
let c_image=document.createElement('img');
c_image.src="https://149362230.v2.pressablecdn.com/wp-content/uploads/2020/12/Enterprise_C4B_V2-crunch.png"
section2.append(c_image);

let section1=document.getElementById('section1');
let btn_left=document.createElement('button')
btn_left.setAttribute('id','btn_left')
let left_button=document.createElement('a');
left_button.href="https://www.coursera.org/business/learn-more/?utm_campaign=website&utm_content=hero1-contact-sales&utm_medium=coursera&utm_source=enterprise"
left_button.setAttribute('id','left_button')
left_button.textContent="Contact.sales"
btn_left.addEventListener('mouseenter',()=>{
    btn_left.style.backgroundColor="#1A237E"
})
btn_left.addEventListener('mouseleave',()=>{
    btn_left.style.backgroundColor="blue";
})
let link_div=document.createElement('div')
link_div.style.marginTop="50px"
let upskill=document.createElement('span')
upskill.innerText="Upskilling a small team?"
let upskill_link=document.createElement('span');
let link=document.createElement('a');
link.style.textDecoration="none"
link.addEventListener('mouseover',()=>{
    link.style.textDecoration="underline"
})
link.addEventListener('mouseleave',()=>{
    link.style.textDecoration="none"
})
link.href="https://www.coursera.org/business/teams?utm_campaign=c4b&utm_content=teams-cta-below-hero&utm_medium=website&utm_source=enterprise"
link.innerText="Check out Coursera for Teams."
upskill_link.append(link);
link_div.append(upskill,upskill_link);
btn_left.append(left_button)
section1.append(btn_left,link_div)

// 9-mid-logo

let image=[
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2020/10/il_square_logo_large.png",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2020/10/yale_square_logo_large.jpeg",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2020/10/mu_square_logo_large.jpeg",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/01/ucd.png",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/GreyLogoName192x192.png",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/11/atlassian-logo-gradient-vertical-white.jpeg",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/01/uc-sandiego.png",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/01/nyu.png",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2020/03/University-of-Colorado-System.jpg"
]
image.forEach((el)=>{
    let mid_logo=document.getElementById('mid-logo');
    let logo=document.createElement('img');
    logo.src=el;
    mid_logo.append(logo);
})

let data_2=[
    "https://www.coursera.org/business/wp-content/uploads/2021/03/coursera_strategies.svg",
    "https://www.coursera.org/business/wp-content/uploads/2021/03/coursera_technology.svg",
    "https://www.coursera.org/business/wp-content/uploads/2021/03/coursera_insights.svg"
]
 data_2.forEach((el)=>{
     let three_logo=document.getElementById('three_logo');
     let logoo=document.createElement('img');
     logoo.src=el;
     three_logo.append(logoo);
 })

 let three_text=document.getElementById('three_text');
 let text_1=document.createElement('h3');
 text_1.innerText="Deliver on strategic business goals by building critical skills"
 let text_2=document.createElement('h3');
 text_2.innerText="Realize the full value of technology investments"
 let text_3=document.createElement('h3');
 text_3.innerText="Build a data-driven, digitally-fluent workforce"
 three_text.append(text_1,text_2,text_3);

 let obj_1=[
      {
          image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/gettyimages-1192313070-170667a_Edit-1.jpg",
          heading:"Build in-demand skills for the business",
          parra:"Accelerate skill acquisition with SkillSets, turnkey job-based learning programs.",
          link:"https://www.coursera.org/business/products-india?utm_campaign=website&utm_content=hero2-product-compchart2col-india-anchorlink&utm_medium=coursera&utm_source=enterprise#productchart"
      },
      {
        image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/gettyimages-1060903200-170667a-1.jpg",
        heading:"Fast-track digital transformation with Academies",
        parra:"Deploy targeted learning for tech teams and build skills for everyone.",
        link:"https://www.coursera.org/business/data-science-academy/?utm_campaign=c4b&utm_content=data-science-academy-hp&utm_medium=website&utm_source=enterprise"
    },
    {
        image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/gettyimages-1175077096-170667a_Edit-1.jpg",
        heading:"Drive skill mastery with hands-on learning",
        parra:"Deliver applied tech and data skills with 1,000+ Guided Projects and in-course lab assignments.",
        link:"https://www.coursera.org/business/guided-projects/?utm_campaign=c4b&utm_content=guided-projects-hp&utm_medium=website&utm_source=enterprise"
    },
    {
        image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/gettyimages-1205248124-170667a_Edit-1-1.jpg",
        heading:"Track, measure, and benchmark actual skill proficiency",
        parra:"Quantify employee progress in technical and human skills with continuous assessments.",
        link:"https://www.coursera.org/business/products-india/?utm_campaign=website&utm_content=greenbar-product-compchart2col-india-anchorlink&utm_medium=coursera&utm_source=enterprise#productchart"
    }
  ];

  obj_1.forEach((el)=>{
      let transform=document.getElementById('transform');
      let div1=document.createElement('div');
      let trans_image=document.createElement('img');
      trans_image.src=el.image;
      let trans_heading=document.createElement('h2');
      trans_heading.innerText=el.heading;
      let trans_parra=document.createElement('p');
      trans_parra.innerText=el.parra
      let trans_link=document.createElement('a');
      trans_link.innerText="Learn more"
      trans_link.href=el.link
      trans_link.style.fontWeight="600"
      trans_link.addEventListener('mouseenter',()=>{
          trans_link.style.textDecoration="underline"
      })
      trans_link.addEventListener('mouseleave',()=>{
        trans_link.style.textDecoration="none"
    })
      div1.append(trans_image,trans_heading,trans_parra,trans_link);
      transform.append(div1);
  })

  let cont_data=[

    {
       title_image:"",
       title_logo:"",
        title_heading:"Popular courses from B2B learners in 2021"
    },
    {
        title_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/02/AI-for-everyone-enterprise.png",
        title_logo:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/02/DeepLearning_DL.png",
        title_heading:"AI for Everyone"
        
    },
    {
        title_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/CourseTile_NeuralNetworks.jpg",
        title_logo:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/02/DeepLearning_DL.png",
        title_heading:"Neural Networks & Deep Learning"
    },
  
    {
        title_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/CourseTile_IllinoisMarketing.jpg",
        title_logo:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/University-of-Illinois.png",
        title_heading:"Becoming a Principled and Persuasive Negotiator"
    },
    {
        title_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/CourseTile_YaleNegotiation.jpg",
        title_logo:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/Yale-University.png",
        title_heading:"High Performance Collaboration"
    },
    {
        title_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/CourseTile_NorthwesternHighPerformanceCollab.jpg",
        title_logo:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/Northwestern.png",
        title_heading:"Design Thinking for Innovation"
    },
    {
        title_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/CourseTile_UVADesignThinking.jpg",
        title_logo:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/University-of-Virginia.png",
        title_heading:"Design Thinking for Innovation"
    },
    {
        title_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/Home_Course_LearnToLearn.jpg",
        title_logo:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/UC-San-Diego.png",
        title_heading:"Learning How to Learn"
    }
]

cont_data.forEach((el)=>{
    let cont_grid=document.getElementById('cont_grid');
    let title_div=document.createElement('div')
    let t_image=document.createElement('img');
    t_image.src=el.title_image
    let t_logo=document.createElement('img');
    t_logo.src=el.title_logo
    t_logo.style.height="100px"
    t_logo.style.width="100px"
    t_logo.style.marginTop="-50px"
    t_logo.style.marginLeft="30px"
    let t_heading=document.createElement('h3')
    t_heading.innerText=el.title_heading;
    t_heading.style.marginLeft="30px"
    t_heading.style.marginBottom="100px"
    t_heading.style.fontWeight="400"
    title_div.append(t_image,t_logo,t_heading);
    cont_grid.append(title_div);
})

let icon_data=[
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/04/pg.png",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/Home_CustomerLogo_Loreal-1.png",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/11/SignifyLogo-1.png",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/07/GE-Logo-1-e1626191342716.png",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/04/danone.png",
    "https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/Home_CustomerLogo_Tata-3.png"
];

icon_data.forEach((el)=>{
    let icon=document.getElementById('icon');
    let i_image=document.createElement('img');
    i_image.src=el;
    icon.append(i_image);
})

let video=document.getElementById('video');
let v_image=document.createElement('img');
v_image.src="https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/c4b_1.jpg"
v_image.addEventListener('click',()=>{
    show_video();
})
video.append(v_image);

function show_video(){
    window.location.href="video.html"
}
let blue_div=document.getElementById('blue_div');
let blue_btn=document.createElement('button');
blue_btn.innerText="Contact sale"
blue_btn.style.width="250px"
blue_btn.style.height="75px"
blue_btn.style.marginLeft="630px"
blue_btn.style.color="#382d8b"
blue_btn.style.fontWeight="800"
blue_div.append(blue_btn);

let items=[
    {
        images:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/Updated-Essential-Skills-Cover-2.jpg",
        headings:"Essential Skills Playbook",
        Parras:"Understand top skills for key industries from financial services to telecom.",
        links:"https://www.coursera.org/business/essential-skills-playbook/?utm_campaign=c4b&utm_content=essential-skills-playbook-hp&utm_medium=website&utm_source=enterprise"
    },
    {
        images:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/card_2.jpg",
        headings:"Upskilling to Expand Employee Value",
        Parras:"Research firm IDC found Coursera for Business delivers approximately 700% ROI.",
        links:"https://www.coursera.org/business/idc-roi-whitepaper?utm_campaign=c4b&utm_content=idc-roi-white-paper-hp&utm_medium=website&utm_source=enterprise"
    },
    {
        images:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/card_1.jpg",
        headings:"Building an AI Strategy",
        Parras:"Learn five key ways organizations can use AI to create customer-centric products and experiences.",
        links:"https://www.coursera.org/business/ebook/ai-strategy?utm_campaign=c4b&utm_content=ai-strategy-bottom-hp&utm_medium=website&utm_source=enterprise"
    }
]

items.forEach((el)=>{
    let last_grid=document.getElementById('last-grid');
    let l_div=document.createElement('div');
    let l_images=document.createElement('img');
    l_images.src=el.images;
    let l_headings=document.createElement('h2');
    l_headings.innerText=el.headings;
    let l_parras=document.createElement('p');
    l_parras.innerText=el.Parras;
    let l_links=document.createElement('a');
    l_links.href=el.links;
    l_links.innerText="Get Playbook"
    l_links.style.fontWeight="800"
    l_links.addEventListener('mouseenter',()=>{
        l_links.style.textDecoration="underline"
    })
    l_links.addEventListener('mouseleave',()=>{
        l_links.style.textDecoration="none"
    })
    l_div.append(l_images,l_headings,l_parras,l_links);
    last_grid.append(l_div);
})
