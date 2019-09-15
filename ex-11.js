function shoppingTime(memberId, money) {
    // you can only write your code here!
    var items = [
        {
            type: 'Sepatu',
            brand: 'Stacattu',
            price: 1500000
        },
        {
            type: 'Baju',
            brand: 'Zoro',
            price: 500000
        },
        {
            type: 'Baju',
            brand: 'H&N',
            price: 250000
        },
        {
            type: 'Sweater',
            brand: 'Uniklooh',
            price: 175000
        },
        {
            type: 'Casing',
            brand: 'Handphone',
            price: 50000
        }
    ];
    var cart = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0
    };
    var curMoney = money;
    for(var i=0; i<items.length; i++){
        if(curMoney >= items[i].price){
            curMoney -= items[i].price;
            cart.listPurchased.push(`${items[i].type} ${items[i].brand}`)
        }
    }

    cart.changeMoney = curMoney;

    if(memberId === '' || memberId === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else if (money<50000){
        return 'Mohon maaf, uang tidak cukup'
    }
    else {
        return cart
    }

    
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja