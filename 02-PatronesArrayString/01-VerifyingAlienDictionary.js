word = ["habito", "hacer", "lectura", "sonreir"];
orden_alfabeto = "hlabcdefgijkmnopqrstuvwxyz";

function verifying_alien(words, orden_alfabeto) {
  const count_array = words.length;
  const array_alphabeth = Array.from(orden_alfabeto);

  for (let i = 1; i < count_array; i++) {
    let previusWord = [...words[i - 1]];
    let nextWord = [...words[i]];
    let len_previusWord = previusWord.length;
    let len_nextWord = nextWord.length;
    let less_letter = 0;

    if (len_previusWord < len_nextWord) {
      less_letter = len_previusWord;
    } else {
      less_letter = len_nextWord;
    }

    for (let y = 0; y < less_letter; y++) {
      if (previusWord[y] == nextWord[y]) {
        if (len_nextWord < len_previusWord && y + 1 == less_letter) {
          return false;
        }
      } else if (
        array_alphabeth.findIndex((letter) => letter === previusWord[y]) <
        array_alphabeth.findIndex((letter) => letter === nextWord[y])
      ) {
        break;
      } else {
        return false;
      }
    }
  }
  return true;
}
console.log(verifying_alien(word, orden_alfabeto));
