let TotalCount;
let divToPrint;
let countNumber;

const counterArrOfObj = [
    {
        FinalCount: 400,
        id: "number1",
        countingNumber: 0,
    },

    {
        FinalCount: 500,
        id: "number2",
        countingNumber: 0,
    },

    {
        FinalCount: 300,
        id: "number3",
        countingNumber: 0,
    },
];

for (let i = 0; i < counterArrOfObj.length; i++) {
    TotalCount = counterArrOfObj[i].FinalCount;
    divToPrint = counterArrOfObj[i].id;
    countNumber = counterArrOfObj[i].countingNumber;

    printCounter(TotalCount, divToPrint, countNumber);
}

function printCounter(Fcount, id, countNum) {
    let intervalId = setInterval(counterFunction, 20);

    function counterFunction() {
        if (countNum > Fcount) clearInterval(intervalId);
        else {
            document.getElementById(id).innerHTML = countNum + "+";
            countNum = countNum + 1;
        }
    }
}
