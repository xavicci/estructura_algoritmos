def complejidad_lineal (lista):
    suma=0
    mult=1

    for num in range (len(lista)):
        suma +=num
    
    for num in range (len(lista)):
        mult *=num

    return suma,mult


lista = [1,2,3,4,5,6,7,8,9]

sumaNum,multNum=complejidad_lineal(lista)

#####################################################################################
def lineal_complex2 (list_order):
    calc = 0

    for i in range (len(list_order)):
        for j in range (1,5):
            calc += (i*j)
    
    return calc

print(lineal_complex2(lista));

#####################################################################################
