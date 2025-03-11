let country_list = {
    "AED" : "AE", // United Arab Emirates
    "AFN" : "AF", // Afghanistan
    "XCD" : "AG", // Antigua and Barbuda
    "ALL" : "AL", // Albania
    "AMD" : "AM", // Armenia
    "ANG" : "AN", // Netherlands Antilles
    "AOA" : "AO", // Angola
    "AQD" : "AQ", // Antarctica
    "ARS" : "AR", // Argentina
    "AUD" : "AU", // Australia
    "AZN" : "AZ", // Azerbaijan
    "BAM" : "BA", // Bosnia and Herzegovina
    "BBD" : "BB", // Barbados
    "BDT" : "BD", // Bangladesh
    "XOF" : "BE", // Belgium (CFA Franc BCEAO)
    "BGN" : "BG", // Bulgaria
    "BHD" : "BH", // Bahrain
    "BIF" : "BI", // Burundi
    "BMD" : "BM", // Bermuda
    "BND" : "BN", // Brunei
    "BOB" : "BO", // Bolivia
    "BRL" : "BR", // Brazil
    "BSD" : "BS", // Bahamas
    "NOK" : "BV", // Bouvet Island
    "BWP" : "BW", // Botswana
    "BYR" : "BY", // Belarus
    "BZD" : "BZ", // Belize
    "CAD" : "CA", // Canada
    "CDF" : "CD", // Democratic Republic of Congo
    "XAF" : "CF", // Central African Republic
    "CHF" : "CH", // Switzerland
    "CLP" : "CL", // Chile
    "CNY" : "CN", // China
    "COP" : "CO", // Colombia
    "CRC" : "CR", // Costa Rica
    "CUP" : "CU", // Cuba
    "CVE" : "CV", // Cape Verde
    "CYP" : "CY", // Cyprus
    "CZK" : "CZ", // Czech Republic
    "DJF" : "DJ", // Djibouti
    "DKK" : "DK", // Denmark
    "DOP" : "DO", // Dominican Republic
    "DZD" : "DZ", // Algeria
    "ECS" : "EC", // Ecuador
    "EEK" : "EE", // Estonia
    "EGP" : "EG", // Egypt
    "ETB" : "ET", // Ethiopia
    "EUR" : "FR", // France (Euro)
    "FJD" : "FJ", // Fiji
    "FKP" : "FK", // Falkland Islands
    "GBP" : "GB", // United Kingdom
    "GEL" : "GE", // Georgia
    "GGP" : "GG", // Guernsey
    "GHS" : "GH", // Ghana
    "GIP" : "GI", // Gibraltar
    "GMD" : "GM", // Gambia
    "GNF" : "GN", // Guinea
    "GTQ" : "GT", // Guatemala
    "GYD" : "GY", // Guyana
    "HKD" : "HK", // Hong Kong
    "HNL" : "HN", // Honduras
    "HRK" : "HR", // Croatia
    "HTG" : "HT", // Haiti
    "HUF" : "HU", // Hungary
    "IDR" : "ID", // Indonesia
    "ILS" : "IL", // Israel
    "INR" : "IN", // India
    "IQD" : "IQ", // Iraq
    "IRR" : "IR", // Iran
    "ISK" : "IS", // Iceland
    "JMD" : "JM", // Jamaica
    "JOD" : "JO", // Jordan
    "JPY" : "JP", // Japan
    "KES" : "KE", // Kenya
    "KGS" : "KG", // Kyrgyzstan
    "KHR" : "KH", // Cambodia
    "KMF" : "KM", // Comoros
    "KPW" : "KP", // North Korea
    "KRW" : "KR", // South Korea
    "KWD" : "KW", // Kuwait
    "KYD" : "KY", // Cayman Islands
    "KZT" : "KZ", // Kazakhstan
    "LAK" : "LA", // Laos
    "LBP" : "LB", // Lebanon
    "LKR" : "LK", // Sri Lanka
    "LRD" : "LR", // Liberia
    "LSL" : "LS", // Lesotho
    "LTL" : "LT", // Lithuania
    "LVL" : "LV", // Latvia
    "LYD" : "LY", // Libya
    "MAD" : "MA", // Morocco
    "MDL" : "MD", // Moldova
    "MGA" : "MG", // Madagascar
    "MKD" : "MK", // North Macedonia
    "MMK" : "MM", // Myanmar
    "MNT" : "MN", // Mongolia
    "MOP" : "MO", // Macao
    "MRO" : "MR", // Mauritania
    "MTL" : "MT", // Malta
    "MUR" : "MU", // Mauritius
    "MVR" : "MV", // Maldives
    "MWK" : "MW", // Malawi
    "MXN" : "MX", // Mexico
    "MYR" : "MY", // Malaysia
    "MZN" : "MZ", // Mozambique
    "NAD" : "NA", // Namibia
    "XPF" : "NC", // New Caledonia
    "NGN" : "NG", // Nigeria
    "NIO" : "NI", // Nicaragua
    "NPR" : "NP", // Nepal
    "NZD" : "NZ", // New Zealand
    "OMR" : "OM", // Oman
    "PAB" : "PA", // Panama
    "PEN" : "PE", // Peru
    "PGK" : "PG", // Papua New Guinea
    "PHP" : "PH", // Philippines
    "PKR" : "PK", // Pakistan
    "PLN" : "PL", // Poland
    "PYG" : "PY", // Paraguay
    "QAR" : "QA", // Qatar
    "RON" : "RO", // Romania
    "RSD" : "RS", // Serbia
    "RUB" : "RU", // Russia
    "RWF" : "RW", // Rwanda
    "SAR" : "SA", // Saudi Arabia
    "SBD" : "SB", // Solomon Islands
    "SCR" : "SC", // Seychelles
    "SDG" : "SD", // Sudan
    "SEK" : "SE", // Sweden
    "SGD" : "SG", // Singapore
    "SKK" : "SK", // Slovakia
    "SLL" : "SL", // Sierra Leone
    "SOS" : "SO", // Somalia
    "SRD" : "SR", // Suriname
    "STD" : "ST", // Sao Tome and Principe
    "SVC" : "SV", // El Salvador
    "SYP" : "SY", // Syria
    "SZL" : "SZ", // Eswatini (Swaziland)
    "THB" : "TH", // Thailand
    "TJS" : "TJ", // Tajikistan
    "TMT" : "TM", // Turkmenistan
    "TND" : "TN", // Tunisia
    "TOP" : "TO", // Tonga
    "TRY" : "TR", // Turkey
    "TTD" : "TT", // Trinidad and Tobago
    "TWD" : "TW", // Taiwan
    "TZS" : "TZ", // Tanzania
    "UAH" : "UA", // Ukraine
    "UGX" : "UG", // Uganda
    "USD" : "US", // United States
    "UYU" : "UY", // Uruguay
    "UZS" : "UZ", // Uzbekistan
    "VEF" : "VE", // Venezuela
    "VND" : "VN", // Vietnam
    "VUV" : "VU", // Vanuatu
    "YER" : "YE", // Yemen
    "ZAR" : "ZA", // South Africa
    "ZMK" : "ZM", // Zambia
    "ZWD" : "ZW"  // Zimbabwe
};
