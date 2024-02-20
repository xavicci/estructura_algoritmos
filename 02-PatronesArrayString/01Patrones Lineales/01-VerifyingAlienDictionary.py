word = ["habito", "hacer", "lectura", "sonreir"]
orden_alfabeto = "hlabcdefgijkmnopqrstuvwxyz"

def verifying_alien(array,orden_alfabeto):
    count_array= len(array)
    array_alphabeth= list(orden_alfabeto)

    for i in range (1,count_array):
        previusWord= list(word[i-1])    
        nextWord= list(word[i])    
        len_previusWord= len(previusWord)
        len_nextWord= len(nextWord)
        less_letter=0

        if (len_previusWord<len_nextWord):
            less_letter=len_previusWord
        else:
            less_letter=len_nextWord

        for y in range (less_letter):
            if (previusWord[y]==nextWord[y]):
                if (len_nextWord<len_previusWord and (y+1)==less_letter):
                    return False
            elif (array_alphabeth.index(previusWord[y])<array_alphabeth.index(nextWord[y])):
                break
            else:
                return False
    return True

print(verifying_alien(word,orden_alfabeto))
