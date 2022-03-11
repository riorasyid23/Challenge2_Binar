function getSplitName(name){
    let fullname = name;
    name = fullname.split(' ')

    // console.log("firstname="+name[0])
    // console.log("lastName="+name[1]);
    // console.log("middleName="+name[2]);
    
    if (name.length == 3) {
        return "output = [{firstname:" +name[0]+", middlenames:" +name[1]+ ", lastname:" +name[2]+ "}]"; 
      }else if (name.length <= 2) {
        return "output = [{firstname:" +name[0]+ ", middlenames:" +null+ ", lastname:" +name[1]+ "}]";
      }else {
        return "output = [{firstname:" +name[0]+ ", middlenames:" +null+ ", lastname:" +null+ "}]";
      }
}
console.log(getSplitName('Rio Al Rasyid'));
console.log(getSplitName('Rio Rasyid'));
console.log(getSplitName('Rio'));