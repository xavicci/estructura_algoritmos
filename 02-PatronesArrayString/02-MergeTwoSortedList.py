#SOLUCION PROFE

nums1 = [1, 2, 3, 0, 0, 0, 0];
n = 3;
nums2 = [-4, 2, 3, 9];
m = 4;


def merge_list(nums1,n,nums2,m):
    p1=n-1
    p2=m-1
    p=len(nums1)-1

    while 0 <=p1  and 0 <=p2:
        
        if nums1[p1]<nums2[p2]:
              nums1[p]=nums2[p2]
              p2-=1
        else:
            nums1[p]=nums1[p1]
            p1 -=1
        p -=1
    #T = 0(n+m) = 0(n)
    #S = 0(1)
    if n !=m:
        nums1[:p2+1]=nums2[:p2+1]

    return nums1

print(merge_list(nums1,n,nums2,m))