const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
let purchaseRecords = [];
function addPurchaseRecord(name, courses){
    if((name === "") || (name === undefined) || (typeof courses != "number") || (courses <= 0)){
        console.log(" 輸入錯誤，請輸入有效的會員名稱和課程數量。\n");
        return;
    }
    let unit = 0;
    if(courses <= 10) unit = 1500;
    else if(courses <= 20) unit = 1300;
    else if(courses > 20) unit = 1100;
    let total = unit*courses;
    purchaseRecords.push({
        name:name,
        courses:courses,
        unitPrice:unit,
        totalPrice:total
    });
    console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${total} 元。\n`);
}

function calculateTotalPrice(){
    let totalPrice = 0;
    purchaseRecords.forEach(function(record){
        totalPrice += record.totalPrice;
    });
    console.log(`目前總營業額為 ${totalPrice} 元\n`);
}

function filterNoPurchaseMember(){
    let buy = [];
    purchaseRecords.forEach(function(item){
        buy.push(item.name);
    });
    let noBuy = members.filter(function(member){
        return buy.includes(member) === false;
    });
    console.log(`未購買課程的會員有：${noBuy}\n`);
}

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12); 
addPurchaseRecord("Charlie", 25); 
addPurchaseRecord("Hannah", 50); 
addPurchaseRecord("名稱", "課程數量"); 
calculateTotalPrice();
filterNoPurchaseMember();