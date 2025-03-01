function handleTransactionType() {
    let transactionType = document.getElementById("transactionType").value;
    let commonServiceSection = document.getElementById("commonServiceSection");
    let transactionError = document.getElementById("transactionError");
    let commonService = document.getElementById("commonService");
    
    transactionError.classList.add("hidden");
    commonService.value = "";
    
    if (transactionType === "Service") {
        commonServiceSection.classList.remove("hidden");
    } else {
        commonServiceSection.classList.add("hidden");
    }
}

function determineISD() {
    let transactionType = document.getElementById("transactionType").value;
    let commonService = document.getElementById("commonService").value;
    let resultDiv = document.getElementById("result");
    let transactionError = document.getElementById("transactionError");
    let commonServiceError = document.getElementById("commonServiceError");
    
    resultDiv.innerHTML = "";
    transactionError.classList.add("hidden");
    commonServiceError.classList.add("hidden");

    if (!transactionType) {
        transactionError.classList.remove("hidden");
        return;
    }

    if (transactionType === "Goods" || transactionType === "Capital Goods") {
        resultDiv.innerHTML = "ISD not applicable. Provide GSTIN of the particular branch.";
        return;
    }
    
    if (transactionType === "Service") {
        if (!commonService) {
            commonServiceError.classList.remove("hidden");
            return;
        }
        
        if (commonService === "Common to all branches" || commonService === "Common to more than 1 branch") {
            resultDiv.innerHTML = "ISD applicable. Provide GSTIN of ISD.";
        } else {
            resultDiv.innerHTML = "ISD not applicable. Provide GSTIN of the particular branch.";
        }
    }
}

function resetForm() {
    document.getElementById("transactionType").value = "";
    document.getElementById("commonService").value = "";
    document.getElementById("commonServiceSection").classList.add("hidden");
    document.getElementById("result").innerHTML = "";
    document.getElementById("transactionError").classList.add("hidden");
    document.getElementById("commonServiceError").classList.add("hidden");
}
