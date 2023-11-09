IMask(document.querySelector("#phone"), {
  mask: "+{7}(000)-000-00-00",
});
IMask(document.querySelector("#age"), {
  mask: Number,
  min: 0,
  max: 108,
});
IMask(document.querySelector("#date"), {
  mask: Date,
  lazy:false,
  overwrite:true,
  autofix:true,
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      placeholderChar:'d',
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      placeholderChar:'m',
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      placeholderChar:'d',
      from: 1900,
      to: 9999,
    },
  }
});

const toggler=document.querySelector('#toggler');
const form=document.querySelector('form');
toggler.addEventListener('click',handleToggle);

function handleToggle(){
  if(form.style.opacity==0){
     anime({
    targets:form,
    opacity:1,
    height:100,
    duration:500,
    easing:'easeInOutQuad'
  })
  }else{
      anime({
    targets:form,
    opacity:0,
    height:0,
    duration:350,
    easing:'easeInOutQuad'
  }) 
  }
 
}
