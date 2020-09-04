file_read = open('nasdaqlisted.txt', 'r')
file_write = open('sym.env', 'w')

Lines = file_read.readlines()

sym = []

for num in range(len(Lines)):
    if num == 0 or num == len(Lines)-1:
        continue
    sym.append(Lines[num].split('|')[0])

    

string = "symbols=[" + (', '.join('"' + item + '"' for item in sym)) + "]"

file_write.write(string)
file_read.close
file_write.close

