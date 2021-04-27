var inp = process.main.slice(2);// parses input and puts it as an int array, slices from 2 to remove the first 2 unnecessary built-in values from input stream
var output = '';
for(var k = 0; k < inp.length; k++)//converts all ints within inp array into strings
{
    inp[k] = String(inp[k]);
}
for(var i = 0; i < inp.length; i++)//new word starts from input stream
{
    for(var j = 0; j < inp[i].length; j++)
    {
        if(inp[i].charAt(j) == '1')
        {
            output+= 'one';
        } else if(inp[i].charAt(j) == '2')
        {
            output += 'two';
        } else if(inp[i].charAt(j) == '3')
        {
            output += 'three';
        } else if(inp[i].charAt(j) == '4')
        {
            output += 'four';
        } else if(inp[i].charAt(j) == '5')
        {
            output += 'five';
        } else if(inp[i].charAt(j) == '6')
        {
            output += 'six';
        } else if(inp[i].charAt(j) == '7')
        {
            output+= 'seven';
        } else if(inp[i].charAt(j) == '8')
        {
            output += 'eight';
        } else if(inp[i].charAt(j) == '9')
        {
            output += 'nine';
        } else {
            output += 'zero';
        }
    }//word ends
    output += ', ';
}
process.stdout.write(output);//changed to directly output instead of using different method