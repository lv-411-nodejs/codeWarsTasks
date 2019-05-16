let myData={
  errorTown: 1,
  rainFall:[],
  avgFall: 0,
  varianceFall: 0
}

function mean(town, data) {
      let regTown=new RegExp(""+town+"\\W",'gi')
     
      let searchTown=data.search(regTown);
      if (searchTown==-1) {
        myData.errorTown=-1;
        return -1
      } else {
      let startTownLine=data.indexOf(':',searchTown)
      let searchEndFallline=data.indexOf('\n',searchTown)
      let endTownLine=searchEndFallline==-1 ? data.length : searchEndFallline;       
      let rainFallArr=data.slice(startTownLine,endTownLine).split(/\W\w\w\w\s/);
      rainFallArr.shift();       
      myData.rainFall=rainFallArr;        
      let avg=rainFallArr.reduce((acum,currentVal)=>acum+=(+currentVal),0)/12;
      myData.avgFall=avg;
      return(avg);    
      }      
 }
function variance(town, data) {
   let regTown=new RegExp(""+town+"\\W",'gi')
     
      let searchTown=data.search(regTown);
      if (searchTown==-1) {
        myData.errorTown=-1;
        return -1
      } else {
      let startTownLine=data.indexOf(':',searchTown)
      let searchEndFallline=data.indexOf('\n',searchTown)
      let endTownLine=searchEndFallline==-1 ? data.length : searchEndFallline;       
      let rainFallArr=data.slice(startTownLine,endTownLine).split(/\W\w\w\w\s/);
      rainFallArr.shift();       
      myData.rainFall=rainFallArr;        
      let avg=rainFallArr.reduce((acum,currentVal)=>acum+=(+currentVal),0)/12;
      myData.avgFall=avg;
      
      myData.varianceFall=myData.rainFall.reduce((acum,currentVal)=>acum+=Math.pow((currentVal-myData.avgFall),2),0)/12;  
    return myData.varianceFall;
  }
}

mean('Londonn', '20');
variance('Londonn', '20')
