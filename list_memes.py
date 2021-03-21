import os

path = "./images/memes"
f = open("./functions/memes.txt", 'w')
for file in os.listdir(path):
    f.write(file + '\n')
f.close()
