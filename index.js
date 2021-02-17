function minSwaps(str1,str2)
{
  var count=0;
  var len1=str1.length;
  for(var i=0;i<len1;i++)
  {
    if(str1[i] != str2[i] )
      {
        count++;
        console.log(str1);
        console.log(str2);
      }

  }
  if(count%2==0)
  {
    document.write(count/2);
  }
  else
    document.write("impossible");
}
minSwaps("1100", "1001"); 
//  minSwaps("110011", "010111");
// minSwaps("10011001", "01100110")