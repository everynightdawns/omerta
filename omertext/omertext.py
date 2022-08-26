from random import choice
import re

def convert(str):
    old1 = 'love'
    new1 = 'luv'
    old2 = 'o'
    new2 = '⦿'
    old3 = 'omerta'
    new3 = '⦿mɘRtA'
    old4 = 'i'
    new4 = 'i'
    old6 = 'hyperviolence'
    new6 = 'hyPɘRvi⦿LɘNCE'
    old7 = 'suicycle'
    new7 = 'sUiCYcLɘ'

    compiled1 = re.compile(re.escape(old1), re.IGNORECASE)
    compiled2 = re.compile(re.escape(old2), re.IGNORECASE)
    compiled3 = re.compile(re.escape(old3), re.IGNORECASE)
    compiled4 = re.compile(re.escape(old4), re.IGNORECASE)

    str = compiled1.sub(new1.lower(), str)
    str = compiled2.sub(new2, str)
    str = compiled3.sub(new3, str)
    str = compiled4.sub(new4.lower(), str)

    if 'e' in str.lower():
        str = str.replace('e','ɘ')

    compiled6 = re.compile(re.escape(old6), re.IGNORECASE)
    str = compiled6.sub(new6, str)

    compiled7 = re.compile(re.escape(old7), re.IGNORECASE)
    str = compiled7.sub(new7, str)

    return str

text = input()
text = ''.join(choice((str.upper, str.lower))(c) for c in text)
text = ' '.join(word[0].lower() + word[1:] for word in text.split())
text = convert(text)
print(text)