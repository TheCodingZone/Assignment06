var Secondlist=document.querySelectorAll('.list-group-item');
Secondlist[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='#98FB98';
}