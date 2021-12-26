let  navStatus=false;

let navBar=function()
{
    let getSidebar=document.querySelector(".nav-sidebar");
    let getSidebarUl=document.querySelector(".nav-sidebar ul");
    let getSidebarTitle=document.querySelector(".nav-sidebar span");
    let getSidebaLinks=document.querySelectorAll(".nav-sidebar a ");

    if( navStatus===false)
    {
        getSidebarUl.style.visibility="visibile";
        getSidebar.style.width ="272px";
        getSidebarTitle.style.opacity="0.5";
    
        let arrayLength=getSidebaLinks.length;
        for(var i=0; i<array.length; i++)
        {
            getSidebaLinks[i].style.opacity="1";
        }
        navStatus=true;
        
    }}