const members = [
  {
        name: "Ajshal",
        username: "_ajshalllll_",
        instagram: "https://www.instagram.com/_ajshalllll_?igsh=cjZyeDh3bzhvYjV2"
    },
  {
        name: "Shamnad",
        username: "shamnadeeey",
        instagram: "https://instagram.com/shamnadeeey"
    },
    {
        name: "Anshin",
        username: "anxh_in",
        instagram: "https://instagram.com/anxh_in"
    },
    {
        name: "Anshid",
        username: "anshiiid_",
        instagram: "https://www.instagram.com/anshiiid_______?igsh=c2RhbmV6ZDRiN3Ju"
    },
{
    name: "Ashmil",
    username: "asmile.__",
    instagram: "https://www.instagram.com/ashmile.__?igsh=dHBlejE2cTNzMjNh"
  },
  {
    name: "Diya",
    username: "diyhh_z",
    instagram: "https://www.instagram.com/diyhh_z?igsh=ZjltcmxybWE4aHNi"
  },
  {
    name: "Farha",
    username: "farhaee._",
    instagram: "https://www.instagram.com/farhaee._?igsh=azh5Mms3ZmR0cnJi"
  },
  {
    name: "Rushda",
    username: "fathi_ma_rushda",
    instagram: "https://www.instagram.com/fathi_ma_rushda?igsh=MTZ4aTFsMnE3cmczZA=="
  },
  {
    name: "Fida",
    username: "by.pzfida_",
    instagram: "https://www.instagram.com/by.pzfida_?igsh=Zng2MXc1bGppNWlk"
  },
  {
    name: "Hana",
    username: "hana.fttm",
    instagram: "https://www.instagram.com/hana.fttm?igsh=MWVtM3FodTA5YTRqOQ=="
  },
  {
    name: "Anshida",
    username: "anshidah.ek",
    instagram: "https://www.instagram.com/anshidah.ek?igsh=MThnaHdhcHV1ODUxdQ=="
  },
  {
    name: "Netasha",
    username: "netasha.em",
    instagram: "https://www.instagram.com/netasha.em?igsh=MWhqMGRlZWMyd2xjdQ=="
  },
  {
    name: "Ninsha",
    username: "ninsh_a_",
    instagram: "https://www.instagram.com/ninsh_a_?igsh=NXJvbzMzbHA4YWR6"
  },
  {
    name: "Rinsha",
    username: "rriinshhhh",
    instagram: "https://www.instagram.com/rriinshhhh?igsh=am9idnBtNGs5YXhl"
  },
  {
    name: "Fidha",
    username: "fi.idhaah",
    instagram: "https://www.instagram.com/fi.idhaah?igsh=MTR3ZzQ3dzljeXllNA=="
  },
  {
    name: "Safa",
    username: "safa.srnn",
    instagram: "https://www.instagram.com/safa.srnn?igsh=eXhqNXlzcjllM2Nn"
  },
  {
    name: "Safa",
    username: "_sf_safa_",
    instagram: "https://www.instagram.com/_sf_safa_?igsh=MXB1YW1wMmx0NjFoMw=="
  },
  {
    name: "Safa",
    username: "safaa__aea",
    instagram: "https://www.instagram.com/safaa__aea?igsh=NHF3MTN5dTJpazRx"
  },
  {
    name: "Shifa",
    username: "shhifffa",
    instagram: "https://www.instagram.com/shhifffa?igsh=MXRnaG04YXN4Zjc4Nw=="
  },
  {
    name: "Shifna",
    username: "shifneeyy",
    instagram: "https://www.instagram.com/shifneeyy?igsh=MW02eHM1aTFhemNwdw=="
  },
  {
    name: "Shifna",
    username: "shiifnaee__",
    instagram: "https://www.instagram.com/shiifnaee__?igsh=MWgwNXVjMncyeTZ0ZQ=="
  },
  {
    name: "Fidha",
    username: "fidhau._",
    instagram: "https://www.instagram.com/fidhau._?igsh=cG1rOHYzbHlyM2Ji"
  },
  {
    name: "Hudha",
    username: "hu.da.a_",
    instagram: "https://www.instagram.com/hu.da.a_?igsh=MWh1bGtmZm1hNHltNw=="
  },
  {
    name: "Lezin",
    username: "tplezin",
    instagram: "https://www.instagram.com/tplezin?igsh=am42MTVtejJ4eHNs"
  },
  {
    name: "Neshweeh",
    username: "_nasw.ehhy._",
    instagram: "https://www.instagram.com/_nasw.ehhy_?igsh=N3Z4MHRyb3RvaHpi"
  },
  {
    name: "Rifa",
    username: "riff.shaban",
    instagram: "https://www.instagram.com/riff.shaban?igsh=MWdnbm5hM3pjZmQ1bA=="
  },
  {
    name: "Rahda",
    username: "_.rahdahh___",
    instagram: "https://www.instagram.com/_.rahdahh___?igsh=ZThwbGRkNnV0b2ho"
  }
];

// ===========================
const memberList = document.getElementById("memberList");
const search = document.getElementById("search");

function showMembers(list){
    if(!memberList) return;
    memberList.innerHTML="";
    list.forEach((member,index)=>{
        memberList.innerHTML += `
        <div class="memberCard" style="animation-delay:${index*0.1}s">
            <div>
                <h2>${member.name}</h2>
                <p>@${member.username}</p>
            </div>
            <a href="${member.instagram}" target="_blank" aria-label="Instagram" class="igIcon">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </div>
        `;
    });
}

showMembers(members);

// Live Search
if(search){
    search.addEventListener("keyup",()=>{
        const value=search.value.toLowerCase();
        const filtered=members.filter(member=>
            member.name.toLowerCase().includes(value) ||
            member.username.toLowerCase().includes(value)
        );
        showMembers(filtered);
    });
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach((item)=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 80){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ===========================
   PREMIUM PARTICLES
=========================== */

const particleContainer = document.getElementById("particles");

if(particleContainer){

setTimeout(()=>{

setInterval(()=>{

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"%";

const size=Math.random()*7+3;

particle.style.width=size+"px";
particle.style.height=size+"px";

particle.style.animationDuration=(10+Math.random()*8)+"s";

particle.style.opacity=Math.random();

particleContainer.appendChild(particle);

setTimeout(()=>{

particle.remove();

},18000);

},350);

},500);

}