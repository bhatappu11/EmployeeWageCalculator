const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
/*
{
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT){
        console.log("Employee is absent, exiting the program");
        return;
    } else {
        console.log("Employee is present");
    }
}*/
function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function calculateDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS ) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calculateDailyWage(empHrs));
}

let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total Days: "+totalWorkingDays+" Total Hours: "+totalEmpHrs+" Emp Wage: "+empWage);

//uc7 - for each
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: "+totalWorkingDays+" Total Hours: "+totalEmpHrs+" Emp Wage: "+totalEmpWage);

//uc7 - reduce
function totalWages(totalWage, dailyWage){
    return totalWage+dailyWage;
}
console.log("Employee wage with reduce: "+empDailyWageArr.reduce(totalWages,0));

//uc7 - array map helper function
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter+ "=" +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily wage map");
console.log(mapDayWithWageArr);

//uc7 - days with full time wage
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Day with full time wage earned");
console.log(fullDayWageArr);

//uc 7 - first occurence when full time wage earned
function findFindFirstFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

console.log("First time full time wage earned : "+mapDayWithWageArr.find(findFindFirstFullTimeWage));

//uc7 - check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("Check all element have full time wage: "+fullDayWageArr.every(isAllFullTimeWage));

//uc7 - days with part time wage present
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("Days with part time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));