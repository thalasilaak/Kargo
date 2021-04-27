
var inp = process.main.slice(2);

for(var j = 0; j < inp.length;j++ )//iterates through list
{
    for(var i = 0; i < inp[j].length; i++)//iterates through each word
    {
        if(inp[j].charAt(i) === '1')
        {
            print('one');
        } else if(inp[j].charAt(i) === '2') {
            print('two');
        } else if(inp[j].charAt(i) === '3'){
            print('three');
        } else if (inp[j].charAt(i) === '4') {
            print('four');
        } else if (inp[j].charAt(i) === '5') {
            print('five');
        } else if (inp[j].charAt(i) === '6') {
            print('six');
        } else if (inp[j].charAt(i) === '7') {
            print('seven');
        } else if (inp[j].charAt(i) === '8') {
            print('eight');
        } else if (inp[j].charAt(i) === '9') {
            print('nine');
        } else {
            print('zero');
        }

    }
    print(', ');
}
