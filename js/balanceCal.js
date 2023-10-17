function elemenInputtId (inputId){
    const elementInputIdTag = document.getElementById(inputId)
    const elementInputIdTagString = elementInputIdTag.value
    const elemenInputtIdValue = parseFloat(elementInputIdTagString)
    return elemenInputtIdValue
}
function elemenTagtId (tagId){
    const elementIdTag = document.getElementById(tagId)
    const elementIdTagString = elementIdTag.innerText
    const elementIdValue = parseFloat(elementIdTagString)
    return elementIdValue
}
function setTagElementValue(tagIds,value){
    const subTotalTag = document.getElementById(tagIds)
    subTotalTag.innerText = value;
}
function Calculation(){
    const inComeInputFieldValue = elemenInputtId('income-field');
    const foodInputFieldValue = elemenInputtId('food-field');
    const rentInputFieldValue = elemenInputtId('rent-field');
    const clothsInputFiledValue = elemenInputtId('cloth-field');
    const totalCost = foodInputFieldValue+rentInputFieldValue+clothsInputFiledValue;
    setTagElementValue('expence',totalCost)

     const balance  = inComeInputFieldValue - totalCost;
    setTagElementValue('balance',balance)

}
function savingCalculation(){
    const savingInputFiledValue = elemenInputtId('savings-input-field')
    const inComeInputFieldValue = elemenInputtId('income-field');
    const foodInputFieldValue = elemenInputtId('food-field');
    const rentInputFieldValue = elemenInputtId('rent-field');
    const clothsInputFiledValue = elemenInputtId('cloth-field');
    const totalCost = foodInputFieldValue+rentInputFieldValue+clothsInputFiledValue;
    const balance  = inComeInputFieldValue - totalCost;
    const savingMoney = inComeInputFieldValue / 100 * savingInputFiledValue
    const remaingBalance = balance - savingMoney;
    setTagElementValue('saving-money',savingMoney)
    setTagElementValue('remaining-value',remaingBalance)
       
}

document.getElementById('Calculation').addEventListener('click',function(){
 Calculation()
})
document.getElementById('save').addEventListener('click',function(){
    savingCalculation()
})