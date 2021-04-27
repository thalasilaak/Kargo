var inp = process.main.slice(2);// parses input and puts it as an int array, slices from 2 to remove the first 2 unnecessary built-in values from input stream
var output = '';
for(var k = 0; k < inp.length; k++)//converts all ints within inp array into strings
{
    inp[k] = String(inp[k]);
}
var output = inp;
var temp = '';
for(var i = 0; i < inp.length; i++)//new word starts from input stream
{
    temp = '';
    for(var j = 0; j < inp[i].length; j++)
    {
        if(inp[i].charAt(j) == '1')
        {
            temp+= 'one';
        } else if(inp[i].charAt(j) == '2')
        {
            temp += 'two';
        } else if(inp[i].charAt(j) == '3')
        {
            temp += 'three';
        } else if(inp[i].charAt(j) == '4')
        {
            temp += 'four';
        } else if(inp[i].charAt(j) == '5')
        {
            temp += 'five';
        } else if(inp[i].charAt(j) == '6')
        {
            temp += 'six';
        } else if(inp[i].charAt(j) == '7')
        {
            temp += 'seven';
        } else if(inp[i].charAt(j) == '8')
        {
            temp += 'eight';
        } else if(inp[i].charAt(j) == '9')
        {
            temp += 'nine';
        } else {
            temp += 'zero';
        }
    }//word ends
    output[i] = temp;
}
process.stdout.write(output.toString());//changed to directly output instead of using different method