import os

path = "./images/memes"
f = open("./functions/getMemes/assets/memes.txt", 'w')
for file in os.listdir(path):
    f.write(file + '\n')
f.close()
