function go(event){
try{
    var enter=document.getElementById('day').value;

    if(enter==="today" || enter==="yesterday" || enter==="tomorrow"){

    var sign= event.target.id;

const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${enter}`;

fetch(URL, {

    method: 'POST'

})

.then(response => response.json())
.then(json => {
    
    const date = json.current_date;
    document.getElementById('cdate').value=date;

    const lnumber=json.lucky_number;
    document.getElementById('lnumber').value=lnumber;

    const compa=json.compatibility;
    document.getElementById('compa').value=compa;

    const ltime=json.lucky_time;
    document.getElementById('ltime').value=ltime;

    const colour=json.color;
    document.getElementById('col').value=colour;

    const drange=json.date_range;
    document.getElementById('dran').value=drange;

    const mood=json.mood;
    document.getElementById('moo').value=mood;

    const dis=json.description;
    document.getElementById('des').value=dis;

    console.log(event.target);

})}else{
    alert("Invalid Input");
    window.location.reload();
}
}catch(error){
    console.log(error)
}
};
