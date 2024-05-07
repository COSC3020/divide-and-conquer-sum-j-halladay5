function divideAndConquerSum(a) {
     var sum = 0;
    sum += dcSum(a);
    return sum;
}

function dcSum(a){
    if(a.length == 1){
        return a[0];
    }else if (a.length ==2){
        return a[0]+a[1];
    }else if(a.length ==0){
        return 0;
    }else{
        var hi = a.length -1;
        var lo = 0;
        var split = Math.ceil(hi/3);
        var first = dcSum(a.slice(0,split));
        var second = dcSum(a.slice(split, (2*split)));
        var third = dcSum(a.slice((2*split), (hi+1)));
        return first+second+third;
    }
}

//https://www.geeksforgeeks.org/program-find-sum-elements-given-array/ : Gave me a starting point to go off of. This is for two arrays, not three, so I was able to implement this using dividing into 3 sums.
//TA: Had a problem where some elements were included when they shouldn't have been, we ended up adding a base case if there was only two arrays, so that it wouldn't accidently split and include an element twice.
