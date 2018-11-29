package main

import (
	"strings"
	"strconv"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	"github.com/hyperledger/fabric/protos/peer"
)

type NettingScenario struct {
}

type CompanyDetails struct {
	companyName string
	totalAmount int
}

func main() {
	shim.Start(new(NettingScenario))
}

// Init is called during Instantiate transaction.
func (cc *NettingScenario) Init(stub shim.ChaincodeStubInterface) peer.Response {
	return initLedger(stub)
}

// Invoke is called to update or query the ledger in a proposal transaction.
func (cc *NettingScenario) Invoke(stub shim.ChaincodeStubInterface) peer.Response {

	function, args := stub.GetFunctionAndParameters()
	switch function {
	case "fetchTotalAmount":
		return fetchTotalAmount(stub, args)
	case "transfer":
		return transfer(stub,args)
	default:
		return shim.Error("Valid methods are 'initLedger|fetchTotalAmount'!")
	}
}

func initLedger(stub shim.ChaincodeStubInterface) peer.Response {
	companyDetails := []CompanyDetails{
		CompanyDetails{companyName: "A", totalAmount: 0},
		CompanyDetails{companyName: "B", totalAmount: 0},
		CompanyDetails{companyName: "C", totalAmount: 0},
	}

	i := 0
	for i < len(companyDetails) {
		stub.PutState(companyDetails[i].companyName, []byte(strconv.Itoa(companyDetails[i].totalAmount)))
		i = i + 1
	}
	return shim.Success(nil)
}

// Read amount by companyName
func fetchTotalAmount(stub shim.ChaincodeStubInterface, args []string) peer.Response {

	if len(args) != 1 {
		return shim.Error("Parameter Mismatch")
	}

	companyName := strings.ToUpper(args[0])

	if value, err := stub.GetState(companyName); err == nil && value != nil {
		return shim.Success(value)
	}

	return shim.Error("Not Found")
}

func transfer(stub shim.ChaincodeStubInterface, args []string) peer.Response {
	
	if len(args) != 3 {
		return shim.Error("Parameter Mismatch")
	}

	fromCompanyName := args[0]
	toCompanyName := args[1]
	amountToBeTransferred := args[2]

	fromCompanyAmount, err1 := stub.GetState(fromCompanyName)
	toCompanyAmount, err2 := stub.GetState(toCompanyName)

	if err1 == nil && err2 == nil && fromCompanyAmount != nil && toCompanyAmount != nil {

		i, err3 := strconv.Atoi(string(fromCompanyAmount))
		j, err4 := strconv.Atoi(string(toCompanyAmount))
		k, err5 := strconv.Atoi(string(amountToBeTransferred))

		if err3 == nil && err4 == nil && err5 == nil {
			err6 := stub.PutState(fromCompanyName, []byte(strconv.Itoa(i-k)))
			err7 := stub.PutState(toCompanyName, []byte(strconv.Itoa(j+k)))

			if err6 == nil && err7 == nil {
				return shim.Success(nil)	
			}
			return shim.Error("Error from err5 or err6")
		}

		return shim.Error("Error from err3 or err4")
	}

	return shim.Error("Error from err1 or err2")
}