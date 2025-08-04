/* ========== Typing Animation ========*/
var typed = new Typed(".typing",{
    strings:["","Tech Enthusiast","AI Explorer","Mobile Developer","Software Engineer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ========== Aside Navigation ========*/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSelection = document.querySelectorAll(".section"),
      totalSelection = allSelection.length;

// Add click event listeners to navigation links
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(e)
    {
        e.preventDefault(); // Prevent default anchor behavior
        removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection()
{
    for(let i=0; i<totalSelection; i++)
    {
        allSelection[i].classList.remove("back-section");
    }
}

function addBackSection(num)
{
    allSelection[num].classList.add("back-section");
}

function showSection(element)
{
    for(let i=0; i<totalSelection; i++)
    {
        allSelection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) 
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

// "Hire Me" button
const hireMeBtn = document.querySelector(".hire-me");
if(hireMeBtn) {
    hireMeBtn.addEventListener("click", function(e)
    {
        e.preventDefault();
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        if(sectionIndex) {
            addBackSection(sectionIndex);
        }
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}

// Mobile navigation toggler
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

if(navTogglerBtn) {
    navTogglerBtn.addEventListener("click", () => 
    {
        asideSectionTogglerBtn();
    })
}

function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSelection; i++)
    {
        allSelection[i].classList.toggle("open");
    }
}

/* ========== Resume Download ========== */
$(document).ready(function() {
    $('#btnDownload').click(function(e) {
        e.preventDefault();
        window.open("Resume/JJSITIENEI.docx", '_blank');
    });
});

/* ========== Send Mail Function ========== */
function SendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email_id").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    
    // Validate form fields
    if(!name || !email || !subject || !message) {
        alert("Please fill in all fields!");
        return;
    }
    
    var params = {
        from_name : name,
        email_id : email,
        subject : subject,
        message : message
    }
    
    emailjs.send("service_2k15vc2", "template_mv4fwhd", params)
        .then(function (res) {
            alert("Thank you for contacting me! Message sent successfully.");
            // Clear form after successful send
            document.getElementById("form").reset();
        })
        .catch(function(error) {
            alert("Sorry, there was an error sending your message. Please try again.");
            console.error("EmailJS error:", error);
        });
}