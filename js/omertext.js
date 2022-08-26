function omertext() {

        var text = document.getElementById('input').value.trim();
        var output = '';
        
        output = text.toLowerCase().split('').map(function(c){
        return Math.random() < .5? c : c.toUpperCase();
        }).join('');
        
        output = output.split(' ').map(d => d[0].toLowerCase() + d.slice(1)).join(' ');
        
        if (output.toLowerCase().includes('love')){
                output = output.replace(/love/gi, 'luv');
        }
        
        if (output.toLowerCase().includes('omerta')){
                output = output.replace(/omerta/gi, '⦿mɘRtA');
        }
        
        if (output.toLowerCase().includes('hyperviolence')){
                output = output.replace(/hyperviolence/gi, 'hyPɘRvi⦿LɘNCE');
        }
        
        if (output.toLowerCase().includes('suicycle')){
                output = output.replace(/suicycle/gi, 'sUiCYcLɘ');
        }
        
        if (output.toLowerCase().includes('o')){
                output = output.replace(/o/gi, '⦿');
        }
        
        if (output.toLowerCase().includes('i')){
                output = output.replace(/i/gi, 'i');
        }
        
        if (output.includes('e')){
                output = output.replace(/e/g, 'ɘ');
        }
        
        document.getElementById('output').value = output;
    
}

function copy() {
        if(document.getElementById('output').value != ''){
                var copy = document.getElementById('output');

                copy.select();
                copy.setSelectionRange(0, 99999);

                navigator.clipboard.writeText(copy.value);

                var tooltip = document.getElementById('tooltip');
                tooltip.innerHTML = 'c⦿PiɘD t⦿ cLipB⦿aRD';
        }
}

function copied() {
        var tooltip = document.getElementById('tooltip');
        tooltip.innerHTML = 'c⦿PY t⦿ cLiPB⦿aRd';
}

function reset() {
        document.getElementById('input').value = '';
        document.getElementById('output').value = '';
}