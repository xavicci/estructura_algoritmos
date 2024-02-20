#SOLUCION PROFE  
def maxArea (alturas):
    izquierda=0
    derecha= len(alturas)-1
    area_maxima=0

    while izquierda<derecha:

        area_actual=(derecha-izquierda)*min(alturas[izquierda],alturas[derecha])
        area_maxima=max(area_actual,area_maxima)
        if alturas[izquierda]<alturas[derecha]:
            izquierda +=1
        else:
            derecha-=1

    return area_maxima


alturas=[10,3,5,6,2,4,5,9,4]
print(maxArea(alturas))
print(7*9)