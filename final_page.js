let mast_head=document.getElementById("mast-head");
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
home.style.marginLeft="50px"
home.innerText="Home"
home.href="#"
let dash_line1=document.createElement('a')
dash_line1.innerText=" |"
let product=document.createElement('a');
product.setAttribute('id','products');
product.innerText="Products";
product.href="https://www.coursera.org/business/learn-more/?utm_campaign=website&utm_content=navbar-contact-sales&utm_medium=coursera&utm_source=enterpri"
product.setAttribute('id','pro')
product.addEventListener('mouseover',()=>{
    product_list();
})
product.addEventListener('mouseleave',()=>{
    product_leave();
});
let dash_line2=document.createElement('a')
dash_line2.innerText=" |"
let content=document.createElement('a');
content.setAttribute('id','drop_down_content');
content.innerText="Content"
content.href="https://www.coursera.org/business/content";
content.addEventListener('mouseover',()=>{
    content_list();
})
content.addEventListener('mouseleave',()=>{
    content_leave();
})
let dash_line3=document.createElement('a')
dash_line3.innerText=" |"
let compare_plan=document.createElement('a');
compare_plan.innerText="Compare Plans"
compare_plan.href="#";
let dash_line4=document.createElement('a')
dash_line4.innerText=" |"
let resorces=document.createElement('a');
resorces.innerText="Resourses"
resorces.setAttribute('id','drop_down_resources')
resorces.addEventListener('mouseover',()=>{
    resources_list()
});
resorces.addEventListener('mouseleave',()=>{
    resources_leave();
})
resorces.href="https://www.coursera.org/business/resources";
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
contact_sales.href="https://www.coursera.org/business/learn-more/?utm_campaign=website&utm_content=navbar-contact-sales&utm_medium=coursera&utm_source=enterprise"

div2.append(home,dash_line1, product,dash_line2, content, dash_line3, compare_plan,dash_line4, resorces, dash_line5, Blog);

mast_head.append(div1,div2);


function product_list(){
    let pro=document.getElementById('pro')
    let product_drop_down_list=document.createElement("ul");
    product_drop_down_list.setAttribute('id','ul_list')
    let for_interprises=document.createElement('li');
    for_interprises.innerText="For_interprises";
    let for_team=document.createElement('li');
    for_team.innerText="For Team";
    let for_compus=document.createElement('li')
    for_compus.innerText="For-compus";
    let for_government=document.createElement('li')
     for_government.innerText="For Govenment"
    product_drop_down_list.append(for_interprises,for_team,for_compus,for_government);
    pro.append(product_drop_down_list);

}

function product_leave(){
     let prod=document.getElementById('pro');
     prod.innerText="Products";  
  
}

function content_list(){
    let con=document.getElementById('drop_down_content')
    // pro.innerHTML=null;
    let content_drop_down_list=document.createElement("ul");
    content_drop_down_list.setAttribute('id','cl_list')
    let data_acedemy=document.createElement('li');
    data_acedemy.innerText="Data & Analytics Acedemy";
    let leadership_acedemy=document.createElement('li');
    leadership_acedemy.innerText="Leadership Acedemy";
    let marketing_acedemy=document.createElement('li')
    marketing_acedemy.innerText="Marketing Acedemy";
    let Soft_Acedemy=document.createElement('li')
     Soft_Acedemy.innerText="Software Engineering Acedemy"
     let Cloud=document.createElement('li');
     Cloud.innerText="Cloud and IT Acedemy";
     let glided=document.createElement('li');
     glided.innerText="Guided Project";
     let Skill_engi=document.createElement('li')
      Skill_engi.innerText="Essential Skills Collection for Engineering";
     let data_science=document.createElement('li')
      data_science.innerText="Essential Skills Collection for Data Science"
      let managers=document.createElement('li');
      managers.innerText="Essential Skills for Managers";
      let marketing_team=document.createElement('li');
      marketing_team.innerText="Essential Skill Collection for Marketing Teams";
      let product_team=document.createElement('li')
       product_team.innerText="Essential Skills for Product Teams";
      let finance=document.createElement('li')
       finance.innerText="Essential Skills Collection for Finance Teams"
       let sales=document.createElement('li');
       sales.innerText="Essential Skills Collection for Sales Teams";
    content_drop_down_list.append(data_acedemy,leadership_acedemy,marketing_acedemy,Soft_Acedemy,Cloud,glided,Skill_engi,data_science,managers,marketing_team,product_team,finance,sales);
    con.append(content_drop_down_list);

}

function content_leave(){
     let c=document.getElementById('drop_down_content');
     c.innerText="Contents";  
  
}

function  resources_list(){
    let res=document.getElementById('drop_down_resources')
    // pro.innerHTML=null;
    let resources_drop_down_list=document.createElement("ul");
    resources_drop_down_list.setAttribute('id','rl_list')
    let webcast=document.createElement('li');
    webcast.innerText="Webcast";
    let ebooks=document.createElement('li');
    ebooks.innerText="Case Studies & eBooks";
    let Articles=document.createElement('li')
     Articles.innerText="Articles & Blog Posts";
    let conference_hub=document.createElement('li')
     conference_hub.innerText="Conference Hub 2021"
    resources_drop_down_list.append(webcast,ebooks,Articles,conference_hub);
    res.append(resources_drop_down_list);

}

// function resources_leave(){
//      let r=document.getElementById('drop_down_resources');
//      r.innerText="Resources";  
  
// }

// let contact_data=[
//     "https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/Home_CustomerLogo_Tata-3.png",
//     "https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/04/danone.png",
//     "https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/07/GE-Logo-1-e1626191342716.png",
//     "https://149362230.v2.pressablecdn.com/wp-content/uploads/2019/04/pg.png",
//     "https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/02/Home_CustomerLogo_Loreal-1.png",
//     "https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/11/SignifyLogo-1.png"
// ]

// contact_data.forEach((el)=>{
//     let contact_icon=document.getElementById('contact_icon');
//     let contact_image=document.createElement('img');
//     contact_image.src=el;
//     contact_icon.append(contact_image);
// })

let final_data=[
    {
        final_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/11/On-Demand-webinar-tiles_Transform_old-style.png",
        final_heading:"'Transform a vertual event from cosera for bussiness'",
        final_link:"https://www.coursera.org/business/webcast/gs-transform-your-business-sept-event/?utm_term=website-resource",
         text:"Watch Now"
    },
    {
        final_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/01/2021_FactSheet_ResourceTile.png",
        final_heading:"2021 Data Sheet about cosera for bussiness",
        final_link:"https://pages.coursera-for-business.org/rs/748-MIV-116/images/C4B%20Fact%20Sheet%202021%20%E2%80%94%2001.20.20%20%23redchoco.pdf?utm_campaign=website&utm_content=2020-fact-sheet-ty-page&utm_medium=coursera&utm_source=enterprise",
         text:"Get Data Sheet"
    },
    {
        final_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/05/Integrations-Fact-Sheet-resource-tile-1.png",
        final_heading:"Integration Fact Sheet",
        final_link:"https://pages.coursera-for-business.org/rs/748-MIV-116/images/integrations%20pdf.pdf",
        text:"Get Fact Sheet"
    },
    {
        final_image:"https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/09/ISR2021_Resource-Tile.png",
        final_heading:"Industry Skill report 2021",
        final_link:"https://pages.coursera-for-business.org/rs/748-MIV-116/images/Coursera-Industry-Skills-Report-2021.pdf",
        text:"Get Report"
    }
];


final_data.forEach((el)=>{
    let final_grid=document.getElementById('final_grid')
    let final_div=document.createElement('div');
    let final_img=document.createElement('img');
    final_img.src=el.final_image;
    let final_head=document.createElement('h2');
    final_head.innerText=el.final_heading
    let final_links=document.createElement('a');
    final_links.href=el.final_link;
    final_links.innerText=el.text;
    final_div.append(final_img,final_head,final_links);
    final_grid.append(final_div);
})

let buy_now=document.getElementById('buy_now');
let buy_now_button=document.createElement('button');
buy_now_button.innerText="Buy now for teams";
buy_now_button.addEventListener('click',()=>{
    window.location.href="plan.html"
})
buy_now.append(buy_now_button);