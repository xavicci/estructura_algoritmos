Ejercicios de Dos Apuntadores
👨‍💻 Comparto la explicación de cada ejercicio (en inglés). También coloco el nombre y código de cómo aparece en Leetcode (no me deja colocar el enlace :P), es útil escribir el código ahí porque tiene varios tests para cada ejercicio. .

Mover ceros al final - 283. Move Zeroes https://youtu.be/aayNRwUN3Do
Invertir string - 344. Reverse String https://youtu.be/_d0T_2Lk2qA
Reordenar colores - 75. Sort Colors https://youtu.be/4xbWSRZHqac
Invertir vocales - 345. Reverse Vowels of a String https://youtu.be/Vc4nQa0e2n4
Cuadrados de un arreglo ordenado - 977. Squares of a Sorted Array https://youtu.be/FPCZsG_AkUg
Validar palíndromo (con k reemplazos) - 680. Valid Palindrome II https://youtu.be/JrxRYBwG6EI
Intersecciones de la lista de intervalos - 986. Interval List Intersections https://youtu.be/Qh8ZjL1RpLI

Antes de continuar, espero que hayas solucionado o al menos hayas intentado solucionar los retos de la clase anterior. De ser así, aquí te comparto la manera en que los solucioné.
Recuerda que hay muchas formas de resolver un mismo problema, cuéntame qué te parecen estas soluciones, también revisa y aporta a las soluciones de otros Platzinautas. 👨‍🚀💚

1. Mover ceros al final
   Dada la lista de enteros nums, mueve todos los ceros al final de la misma, manteniendo el orden relativo de los elementos no nulos.

Reto: reordena los valores “in place”, sin hacer una copia de la lista.

Ejemplo 1:

# Entrada:

    nums = [0,1,0,3,12]

# Salida:

    [1,3,12,0,0]

Ejemplo 2:

# Entrada:

    nums = [0]

# Salida:

    [0]

Solución:

    def mover_ceros(self, numeros: List[int]) -> None:
    p1 = 0
    for p2 in range(len(numeros)):
    if numeros[p2] != 0:
    numeros[p2], numeros[p1] = numeros[p1], numeros[p2]
    p1+=1
    for p2 in range(p1,len(numeros)):
    numeros[p2] = 0
    return numeros

2. Invertir string
   Escribe una función que invierta una cadena. La cadena de entrada se da como un arreglo de caracteres.

Reto: hacerlo modificando la lista de entrada con O(1) de memoria extra.

Ejemplo 1:

# Entrada:

    s = ["h", "e", "l", "l", "o"]

# Salida:

    ["o","l","l","e","h"]

Ejemplo 2:

# Entrada:

    s = ["H", "a", "n", "n", "a", "h"]

# Salida:

    ["h","a","n","n","a","H"]

Solución:

    def invertir_string(self, cadena: List[str]) -> None:
    p1 = 0
    p2 = len(cadena) - 1
    while p1 < p2:
    cadena[p1], cadena[p2] = cadena[p2], cadena[p1]
    p1 += 1
    p2 -= 1
    return cadena

3. Reordenar colores
   Dado un arreglo nums con n objetos de color rojo, blanco o azul, ordénalos en su lugar para que los objetos del mismo color sean adyacentes, con los colores en el orden rojo, blanco y azul.

Utilizaremos los enteros 0, 1 y 2 para representar el color rojo, blanco y azul, respectivamente.

Reto 1: debes resolver este problema sin utilizar la función de ordenación de la biblioteca.

Reto 2: ¿podrías idear un algoritmo de una sola pasada utilizando solo un espacio extra constante?

Ejemplo 1:

# Entrada:

    nums = [2,0,2,1,1,0]

# Salida:

     [0,0,1,1,2,2]

Ejemplo 2:

# Entrada:

    nums = [2,0,1]

# Salida:

    [0,1,2]

Solución:

    def reordenar_colores(self, nums: List[int]) -> None:
    p2, p1, p3 = 0, 0, len(nums) - 1
    while p2 <= p3:
    if nums[p2] == 0:
    if p2 == p1:
    p2 += 1
    continue
    nums[p1], nums[p2], p1 = nums[p2], nums[p1], p1 + 1
    elif nums[p2] == 2:
    nums[p3], nums[p2], p3 = nums[p2], nums[p3], p3 -1
    else:
    p2 += 1

4. Invertir vocales
   Dada una cadena de caracteres, invierte solo todas las vocales de la cadena.
   Las vocales son ‘a’, ‘e’, ‘i’, ‘o’ y ‘u’, ‘A’, ‘E’, ‘I’, ‘O’, ‘U’.

Ejemplo 1:

# Entrada:

    s = "hola"

# Salida:

    "halo"

Ejemplo 2:

# Entrada:

    s = s = "leetcode"

# Salida:

    "leotcede"

Solución:

    def invertir_vocales(self, cadena: str) -> str:
    numeros = list(cadena)
    p1 = 0
    p2= len(numeros) - 1
    vocales = {'a','e','i','o','u','A','E','I','O','U'}
    while p1 < p2:
    if numeros[p1] in vocales and numeros[p2] in vocales:
    numeros[p1], numeros[p2] = numeros[p2], numeros[p1]
    p1+=1
    p2-=1
    else:
    while numeros[p1] not in vocales and p1 < p2:
    p1 += 1
    while numeros[p2] not in vocales and p1 < p2:
    p2 - =1

    return "".join(numeros)

5. Cuadrados de un arreglo ordenado
   Dado un arreglo de números enteros ordenados en orden ascendente, devuelve una matriz de los cuadrados de cada número ordenados en orden no decreciente.

Ejemplo 1:

# Entrada:

    nums = [-4,-1,0,3,10]

# Salida:

    [0,1,9,16,100]

# Explicación: Después de elevar al cuadrado, el arreglo se convierte en [16,1,0,9,100].

# Después de ordenar, se convierte en [0,1,9,16,100].

Ejemplo 2:

# Entrada:

    nums = [-7,-3,2,3,11]

# Salida:

    [4,9,9,49,121]

Solución:

    def cuadrados_ordenados(self, números: List[int]) -> List[int]:
    p1 = 0
    p2 = len(números)-1
    respuesta = [0]\*len(números)
    p_respuesta = len(números)-1

    while p_respuesta >= 0:
    if abs(números[p1]) > abs(números[p2]):
    respuesta[p_respuesta] = (números[p1])**2
    p1 += 1
    p_respuesta -= 1
    if abs(números[p1]) <= abs(números[p2]):
    respuesta[p_respuesta] = (números[p2])**2
    p2 -= 1
    p_respuesta -= 1
    return respuesta

6. Validar palíndromo (con k reemplazos)
   Dada una cadena de caracteres, averigua si la cadena dada es un palíndromo o no. Puedes eliminar un carácter de la cadena. Una cadena es un palíndromo si se lee igual hacia adelante y hacia atrás.

Ejemplo 1:

# Entrada:

    s = "aba"

# Salida:

    true

Ejemplo 2:

# Entrada:

    s = "abca"

# Salida:

    true

#Explicación: Podría eliminar el carácter 'c'.
Solución:

    def es_palindrome_valido(self, frase: str) -> bool:
    p1 = 0
    p2 = len(frase) - 1

        def es_palindrome(p1,p2):
        while p1 < p2:
        if frase[p1] == frase[p2]:
        p1 += 1
        p2 -= 1
        else:
        return False
        return True

    while p1 < p2:
    if frase[p1] != frase[p2]:
    return es_palindrome(p1+1,p2) or es_palindrome(p1,p2-1)
    else:
    p1 += 1
    p2 -= 1

    return True

7.  Intersecciones de la lista de intervalos
    Dadas dos listas de intervalos cerrados, lista1 y lista2, donde lista1[i] = [inicio_i, final_i] y lista2[j] = [inicio_j, final_j]. Cada lista de intervalos es disjunta por pares y está ordenada.

Devuelve la intersección de estas dos listas de intervalos.

Un intervalo cerrado [a, b] (con a <= b) denota el conjunto de números reales x con a <= x <= b. La intersección de dos intervalos cerrados es un conjunto de números reales que está vacío o representado como un intervalo cerrado. Por ejemplo, la intersección de [1, 3] y [2, 4] es [2, 3].

Ejemplo 1:

# Entrada:

    firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]

# Salida:

    [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

Ejemplo 2:

# Entrada:

    firstList = [[1,3],[5,9]], secondList = []

# Salida:

    []

Solución:

    def intervalIntersection(self, lista1: List[List[int]], lista2: List[List[int]]) -> List[List[int]]:
    pila = []
    p1 = 0
    p2 = 0
    while p1 < len(lista1) and p2 < len(lista2):
    low = max(lista1[p1][0],lista2[p2][0])
    high = min(lista1[p1][1],lista2[p2][1])
    if low <= high:
    pila.append([low,high])
    if lista1[p1][1] < lista2[p2][1]:
    p1+=1
    else:
    p2+=1
    return pila

Felicitaciones por llegar hasta aquí. Recuerda que no importa si hubo algún o algunos ejercicios que se te dificultaron o no lograste resolver. Lo que realmente importa es que día a día sigas entrenando tu pensamiento lógico y comprendas mucho mejor cuándo vale la pena implementar patrones como el de Dos Apuntadores.

En el siguiente módulo usaremos el patrón de Ventana Deslizante. Es algo parecido al de Dos Apuntadores, pero con algunas variaciones en sus movimientos. ¡Nos vemos en la siguiente clase para aprenderlo!
