document.addEventListener("DOMContentLoaded", function() {

  var setWidth = [50,90,30,10,40,110];
  var sorted = sort(setWidth);
  createElements(setWidth);
    
  function createElements(setWidth){
    console.log(setWidth);

    for(var i=0; i<setWidth.length; i++){
      var iDiv = document.createElement('div');
      document.getElementById("content").appendChild(iDiv);

      iDiv.className = 'block';
      iDiv.id = 'block_'+i;
      iDiv.style.width= setWidth[i]+"px";
    }
  }

  function sort(arr){
     var len = arr.length;
     if(len <2)
        return arr;
     var mid = Math.floor(len/2),
         left = arr.slice(0,mid),
         right =arr.slice(mid);
     //send left and right to the mergeSort to broke it down into pieces
     //then merge those
     return merge(sort(left),sort(right));
  }
  

  function merge(left, right){
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
       if(left[l] < right[r]){
         result.push(left[l++]);
       }
       else{
         result.push(right[r++]);
      }
    }  
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
  }

  // function sort(arr){
  //   var minIdx, temp, 
  //       len = arr.length;
  //   for(var i = 0; i < len; i++){
  //     minIdx = i;

  //     for(var  j = i+1; j<len; j++){
  //        if(arr[j]<arr[minIdx]){
  //           minIdx = j;
  //        }
  //     }
  //     temp = arr[i];
  //     arr[i] = arr[minIdx];
  //     arr[minIdx] = temp;
  //   }
  // }    
});
