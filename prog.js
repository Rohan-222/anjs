
let app = angular.module('currconverterApp', []);
        app.controller('currconverterCtrl', function($scope,$http) {

          $scope.country_list = {
                "RUB": "RU",
                "GBP": "GB",
                "INR": "IN",
                "USD": "US",
                "NZD": "NZ",
                "AUD": "AU",
                "PKR": "PK",
                "EUR": "EU",
                "KRW": "KR",
                "ZAR": "ZA",
                "ZWL": "ZW",
                "ILS": "IL",
                "TRY": "TR",
                "IRR": "IR"
            };
          $scope.exchangeRates = {
                "RUB": {
                    "GBP": 0.0093,
                    "INR": 0.79,
                    "USD": 0.013,
                    "NZD": 0.018,
                    "AUD": 0.018,
                    "PKR": 2.07,
                    "EUR": 0.011,
                    "KRW": 18.68,
                    "ZAR": 0.19,
                    "ZWL": 0.64,
                    "ILS": 0.043,
                    "TRY": 0.1,
                    "IRR": 547.50
                },
                "GBP": {
                    "RUB": 107.53,
                    "INR": 84.88,
                    "USD": 1.37,
                    "NZD": 1.95,
                    "AUD": 1.86,
                    "PKR": 219.29,
                    "EUR": 1.16,
                    "KRW": 1582.20,
                    "ZAR": 20.15,
                    "ZWL": 67.66,
                    "ILS": 4.57,
                    "TRY": 10.56,
                    "IRR": 46247.88
                },
                "INR": {
                    "RUB": 1.27,
                    "GBP": 0.011,
                    "USD": 0.014,
                    "NZD": 0.02,
                    "AUD": 0.019,
                    "PKR": 2.35,
                    "EUR": 0.011,
                    "KRW": 15.15,
                    "ZAR": 0.19,
                    "ZWL": 0.65,
                    "ILS": 0.043,
                    "TRY": 0.1,
                    "IRR": 426.47
                },
                "USD": {
                    "RUB": 76.98,
                    "GBP": 0.73,
                    "INR": 74.18,
                    "NZD": 1.42,
                    "AUD": 1.35,
                    "PKR": 160.07,
                    "EUR": 0.85,
                    "KRW": 1158.48,
                    "ZAR": 14.72,
                    "ZWL": 49.40,
                    "ILS": 3.34,
                    "TRY": 7.72,
                    "IRR": 33767.20
                },
                "NZD": {
                    "RUB": 56.55,
                    "GBP": 0.51,
                    "INR": 49.48,
                    "USD": 0.70,
                    "AUD": 0.95,
                    "PKR": 112.30,
                    "EUR": 0.60,
                    "KRW": 819.85,
                    "ZAR": 10.43,
                    "ZWL": 35.05,
                    "ILS": 2.37,
                    "TRY": 5.48,
                    "IRR": 23927.91
                },
                "AUD": {
                    "RUB": 55.81,
                    "GBP": 0.54,
                    "INR": 48.74,
                    "USD": 0.74,
                    "NZD": 1.05,
                    "PKR": 110.48,
                    "EUR": 0.59,
                    "KRW": 806.91,
                    "ZAR": 10.25,
                    "ZWL": 34.44,
                    "ILS": 2.33,
                    "TRY": 5.39,
                    "IRR": 23516.97
                },
                "PKR": {
                    "RUB": 0.48,
                    "GBP": 0.0046,
                    "INR": 0.42,
                    "USD": 0.0062,
                    "NZD": 0.0089,
                    "AUD": 0.0091,
                    "EUR": 0.0049,
                    "KRW": 67.89,
                    "ZAR": 0.86,
                    "ZWL": 2.91,
                    "ILS": 0.20,
                    "TRY": 0.47,
                    "IRR": 2044.26
                },
                "EUR": {
                    "RUB": 90.43,
                    "GBP": 0.86,
                    "INR": 88.78,
                    "USD": 1.18,
                    "NZD": 1.67,
                    "AUD": 1.59,
                    "PKR": 202.36,
                    "KRW": 1378.88,
                    "ZAR": 17.52,
                    "ZWL": 58.90,
                    "ILS": 3.98,
                    "TRY": 9.21,
                    "IRR": 40197.83
                },
                "KRW": {
                    "RUB": 0.053,
                    "GBP": 0.0006,
                    "INR": 0.066,
                    "USD": 0.00086,
                    "NZD": 0.0012,
                    "AUD": 0.0012,
                    "PKR": 0.015,
                    "EUR": 0.00073,
                    "ZAR": 0.013,
                    "ZWL": 0.043,
                    "ILS": 0.0029,
                    "TRY": 0.0068,
                    "IRR": 296.28
                },
                "ZAR": {
                    "RUB": 5.26,
                    "GBP": 0.050,
                    "INR": 5.26,
                    "USD": 0.068,
                    "NZD": 0.096,
                    "AUD": 0.097,
                    "PKR": 1.16,
                    "EUR": 0.057,
                    "KRW": 75.91,
                    "ZWL": 3.36,
                    "ILS": 0.23,
                    "TRY": 0.53,
                    "IRR": 2303.76
                },
                "ZWL": {
                    "RUB": 1.56,
                    "GBP": 0.015,
                    "INR": 1.53,
                    "USD": 0.020,
                    "NZD": 0.027,
                    "AUD": 0.027,
                    "PKR": 0.34,
                    "EUR": 0.017,
                    "KRW": 23.14,
                    "ZAR": 0.30,
                    "ILS": 0.068,
                    "TRY": 0.16,
                    "IRR": 691.05
                },
                "ILS": {
                    "RUB": 23.22,
                    "GBP": 0.22,
                    "INR": 22.74,
                    "USD": 0.30,
                    "NZD": 0.42,
                    "AUD": 0.42,
                    "PKR": 5.21,
                    "EUR": 0.25,
                    "KRW": 341.76,
                    "ZAR": 4.31,
                    "ZWL": 14.63,
                    "TRY": 2.31,
                    "IRR": 10062.38
                },
                "TRY": {
                    "RUB": 9.96,
                    "GBP": 0.095,
                    "INR": 9.76,
                    "USD": 0.13,
                    "NZD": 0.18,
                    "AUD": 0.18,
                    "PKR": 2.02,
                    "EUR": 0.11,
                    "KRW": 139.25,
                    "ZAR": 1.90,
                    "ZWL": 6.37,
                    "ILS": 0.086,
                    "IRR": 4349.40
                },
                "IRR": {
                    "RUB": 0.0018,
                    "GBP": 0.000022,
                    "INR": 0.0023,
                    "USD": 0.000030,
                    "NZD": 0.000041,
                    "AUD": 0.000042,
                    "PKR": 0.00049,
                    "EUR": 0.000025,
                    "KRW": 0.0034,
                    "ZAR": 0.043,
                    "ZWL": 0.00014,
                    "ILS": 0.000099,
                    "TRY": 0.00023
                },
                // Add exchange rates for other currencies similarly
            };
            
            $scope.fromCurrency = "US";
            $scope.fromFlag = "https://flagcdn.com/80x60/us.png";
        
            $scope.$watch('fromCurrency', function(newVal, oldVal) {
                if (newVal !== oldVal && newVal !== "") {
                    // Make a request to the flags API
                    var flagUrl = "https://flagcdn.com/80x60/"+newVal.toLowerCase()+".png";
                    console.log("To flag URL:", flagUrl);
                    $http.get(flagUrl)
                        .then(function(response) {
                            // Update the selected flag URL
                            $scope.fromFlag = flagUrl;
                        })
                        .catch(function(error) {
                            console.error("Error fetching flag:", error);
                        });
        
                    }
                    
                });
            
            
                $scope.toCurrency = "IN";
                $scope.toFlag = "https://flagcdn.com/80x60/in.png";
        
                $scope.$watch('toCurrency', function(newVal, oldVal) {
                        if (newVal !== oldVal && newVal !== "") {
                         // Make a request to the flags API
                            var flagUrl = "https://flagcdn.com/80x60/"+newVal.toLowerCase()+".png";
                            console.log("To flag URL:", flagUrl);
                            $http.get(flagUrl)
                             .then(function(response) {
                            // Update the selected flag URL
                            $scope.toFlag = flagUrl;
                        })
                        .catch(function(error) {
                            console.error("Error fetching flag:", error);
                        });
        
                    }
                    
                });
        
      
     console.log($scope.country_list[$scope.fromCurrency.value]);
     
     $scope.conversionResult = '';
     $scope.showResult = false;
     $scope.convertCurrency = function() {
        let amount = parseFloat($scope.amount);
    
        // Function to get the currency code from country list
        function getKeyByValue(object, value) {
            return Object.keys(object).find(key =>
                object[key] === value);
        }
        //console.log(amount);
        // Get the currency codes from the country list
        $scope.fromCurrencyCode = getKeyByValue($scope.country_list, $scope.fromCurrency);
        //console.log(fromCurrencyCode);

        $scope.toCurrencyCode = getKeyByValue($scope.country_list, $scope.toCurrency);
        //console.log(toCurrencyCode);
    
        // Access exchange rate using currency codes
        exchangeRate = $scope.exchangeRates[$scope.fromCurrencyCode][$scope.toCurrencyCode];
           
        // Calculate the conversion result
        $scope.conversionResult = Math.round(amount * exchangeRate);

        $scope.showResult = true;
    };
    

    
});
    

