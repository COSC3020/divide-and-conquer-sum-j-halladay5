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
