import os

path = "./images/memes"
f = open("./functions/getMemes/assets/memes.txt", 'w')
for idx, file in enumerate(os.listdir(path)):
    if idx == len(os.listdir(path)) - 1:
        f.write(path + file)
    else:
        f.write(path + file + '\n')
f.close()
