import{u as m,r as l,o as v,c as d,a as e,b as f,F as g,d as u}from"./index.bddf4bda.js";const b=e("p",null,"Siempre puedes trabjar tu mismo",-1),h=e("p",null,"Limpia zapatos para ganarte un dinerillo",-1),k=["src"],F={setup(x){const i="/tap2022/",p=m(),{recolectar:n}=p,t=l(null),a=l(1),_=()=>{a.value++,a.value>3&&(a.value=1)},r=1;let s=0,o=0;const c=()=>{s++,o++,s>=30&&(s=0,n(r),u(t.value,r,!0)),o>=300&&(o=2,_(),n(20),u(t.value,20,!0))};return(y,z)=>(v(),d(g,null,[b,h,e("div",{ref_key:"div",ref:t,class:"zapato"},[e("img",{onMousemove:c,onTouchmove:c,alt:"",class:"",src:`${f(i)}/img/zapatos/${a.value}.png`,draggable:"false"},null,40,k)],512)],64))}};export{F as default};
