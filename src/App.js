import React from 'react';
import logo from './logo.svg';
import Loader from 'react-loader-spinner';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


class App extends React.Component{
  state = {
    industries: [
      {
        "code": "A11",
        "industry": "Misc Agriculture"
      },
      {
        "code": "A01",
        "industry": "Crop Production & Basic Processing"
      },
      {
        "code": "A02",
        "industry": "Tobacco"
      },
      {
        "code": "A04",
        "industry": "Dairy"
      },
      {
        "code": "A05",
        "industry": "Poultry & Eggs"
      },
      {
        "code": "A06",
        "industry": "Livestock"
      },
      {
        "code": "A07",
        "industry": "Agricultural Services/Products"
      },
      {
        "code": "A10",
        "industry": "Forestry & Forest Products"
      },
      {
        "code": "C01",
        "industry": "General Contractors"
      },
      {
        "code": "C02",
        "industry": "Home Builders"
      },
      {
        "code": "C03",
        "industry": "Special Trade Contractors"
      },
      {
        "code": "C04",
        "industry": "Construction Services"
      },
      {
        "code": "C05",
        "industry": "Building Materials & Equipment"
      },
      {
        "code": "B00",
        "industry": "Misc Communications/Electronics"
      },
      {
        "code": "B01",
        "industry": "Printing & Publishing"
      },
      {
        "code": "B02",
        "industry": "TV/Movies/Music"
      },
      {
        "code": "B09",
        "industry": "Telecom Services"
      },
      {
        "code": "B08",
        "industry": "Telephone Utilities"
      },
      {
        "code": "B12",
        "industry": "Electronics Mfg & Equip"
      },
      {
        "code": "B13",
        "industry": "Internet"
      },
      {
        "code": "D03",
        "industry": "Misc Defense"
      },
      {
        "code": "D01",
        "industry": "Defense Aerospace"
      },
      {
        "code": "D02",
        "industry": "Defense Electronics"
      },
      {
        "code": "E07",
        "industry": "Misc Energy"
      },
      {
        "code": "E01",
        "industry": "Oil & Gas"
      },
      {
        "code": "E04",
        "industry": "Mining"
      },
      {
        "code": "E08",
        "industry": "Electric Utilities"
      },
      {
        "code": "E09",
        "industry": "Environmental Svcs/Equipment"
      },
      {
        "code": "E10",
        "industry": "Waste Management"
      },
      {
        "code": "E11",
        "industry": "Fisheries & Wildlife"
      },
      {
        "code": "F13",
        "industry": "Misc Finance"
      },
      {
        "code": "F03",
        "industry": "Commercial Banks"
      },
      {
        "code": "F04",
        "industry": "Savings & Loans"
      },
      {
        "code": "F05",
        "industry": "Credit Unions"
      },
      {
        "code": "F06",
        "industry": "Finance/Credit Companies"
      },
      {
        "code": "F07",
        "industry": "Securities & Investment"
      },
      {
        "code": "F09",
        "industry": "Insurance"
      },
      {
        "code": "F10",
        "industry": "Real Estate"
      },
      {
        "code": "F11",
        "industry": "Accountants"
      },
      {
        "code": "N12",
        "industry": "Misc Business"
      },
      {
        "code": "N00",
        "industry": "Business Associations"
      },
      {
        "code": "A09",
        "industry": "Food Processing & Sales"
      },
      {
        "code": "N01",
        "industry": "Food & Beverage"
      },
      {
        "code": "N02",
        "industry": "Beer, Wine & Liquor"
      },
      {
        "code": "N09",
        "industry": "Marijuana"
      },
      {
        "code": "N03",
        "industry": "Retail Sales"
      },
      {
        "code": "N04",
        "industry": "Misc Services"
      },
      {
        "code": "N05",
        "industry": "Business Services"
      },
      {
        "code": "N06",
        "industry": "Recreation/Live Entertainment"
      },
      {
        "code": "N07",
        "industry": "Casinos/Gambling"
      },
      {
        "code": "H05",
        "industry": "Misc Health"
      },
      {
        "code": "H01",
        "industry": "Health Professionals"
      },
      {
        "code": "H02",
        "industry": "Hospitals/Nursing Homes"
      },
      {
        "code": "H03",
        "industry": "Health Services/HMOs"
      },
      {
        "code": "H04",
        "industry": "Pharmaceuticals/Health Products"
      },
      {
        "code": "W04",
        "industry": "Education"
      },
      {
        "code": "W07",
        "industry": "Other"
      },
      {
        "code": "Q10",
        "industry": "Misc Issues"
      },
      {
        "code": "Q01",
        "industry": "Republican/Conservative"
      },
      {
        "code": "Q02",
        "industry": "Democratic/Liberal"
      },
      {
        "code": "Q03",
        "industry": "Leadership PACs"
      },
      {
        "code": "Q04",
        "industry": "Foreign & Defense Policy"
      },
      {
        "code": "Q05",
        "industry": "Pro-Israel"
      },
      {
        "code": "Q12",
        "industry": "Gun Control"
      },
      {
        "code": "Q13",
        "industry": "Gun Rights"
      },
      {
        "code": "Q09",
        "industry": "Human Rights"
      },
      {
        "code": "Q14",
        "industry": "Abortion Policy/Anti-Abortion"
      },
      {
        "code": "Q15",
        "industry": "Abortion Policy/Pro-Abortion Rights"
      },
      {
        "code": "Q08",
        "industry": "Women's Issues"
      },
      {
        "code": "Q11",
        "industry": "Environment"
      },
      {
        "code": "K01",
        "industry": "Lawyers/Law Firms"
      },
      {
        "code": "K02",
        "industry": "Lobbyists"
      },
      {
        "code": "P05",
        "industry": "Misc Unions"
      },
      {
        "code": "P04",
        "industry": "Public Sector Unions"
      },
      {
        "code": "P01",
        "industry": "Building Trade Unions"
      },
      {
        "code": "P02",
        "industry": "Industrial Unions"
      },
      {
        "code": "P03",
        "industry": "Transportation Unions"
      },
      {
        "code": "N15",
        "industry": "Misc Manufacturing & Distributing"
      },
      {
        "code": "N13",
        "industry": "Chemical & Related Manufacturing"
      },
      {
        "code": "N14",
        "industry": "Steel Production"
      },
      {
        "code": "N16",
        "industry": "Textiles"
      },
      {
        "code": "M06",
        "industry": "Misc Transport"
      },
      {
        "code": "M01",
        "industry": "Air Transport"
      },
      {
        "code": "M02",
        "industry": "Automotive"
      },
      {
        "code": "M03",
        "industry": "Trucking"
      },
      {
        "code": "M04",
        "industry": "Railroads"
      },
      {
        "code": "M05",
        "industry": "Sea Transport"
      },
      {
        "code": "N08",
        "industry": "Lodging/Tourism"
      },
      {
        "code": "W06",
        "industry": "Retired"
      },
      {
        "code": "W03",
        "industry": "Civil Servants/Public Officials"
      },
      {
        "code": "W02",
        "industry": "Non-Profit Institutions"
      },
      {
        "code": "W05",
        "industry": "Clergy & Religious Organizations"
      },
      {
        "code": "Y00",
        "industry": "Unknown"
      },
      {
        "code": "Y01",
        "industry": "Homemakers/Non-income earners"
      },
      {
        "code": "Y02",
        "industry": "No Employer Listed or Found"
      },
      {
        "code": "Y03",
        "industry": "Generic Occupation/Category Unknown"
      },
      {
        "code": "Y04",
        "industry": "Employer Listed/Category Unknown"
      },
      {
        "code": "Q16",
        "industry": "Candidate Committees"
      },
      {
        "code": "Z04",
        "industry": "Joint Candidate Cmte"
      },
      {
        "code": "Z02",
        "industry": "Party Committees"
      },
      {
        "code": "Z07",
        "industry": "Candidate Self-finance"
      },
      {
        "code": "Z08",
        "industry": "Party Committee Transfer"
      },
      {
        "code": "Z09",
        "industry": "Non-contribution"
      }
    ]
    ,
    candidates: [
      {
        "CID": "N00036633",
        "CRPName": "Abraham, Ralph",
        "Party": "R",
        "State": "LA"
      },
      {
        "CID": "N00035451",
        "CRPName": "Adams, Alma",
        "Party": "D",
        "State": "NC"
      },
      {
        "CID": "N00003028",
        "CRPName": "Aderholt, Robert B",
        "Party": "R",
        "State": "AL"
      },
      {
        "CID": "N00033997",
        "CRPName": "Aguilar, Pete",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00009888",
        "CRPName": "Alexander, Lamar",
        "Party": "R",
        "State": "TN"
      },
      {
        "CID": "N00033720",
        "CRPName": "Allen, Richard W",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00031938",
        "CRPName": "Amash, Justin",
        "Party": "R",
        "State": "MI"
      },
      {
        "CID": "N00031177",
        "CRPName": "Amodei, Mark",
        "Party": "R",
        "State": "NV"
      },
      {
        "CID": "N00038285",
        "CRPName": "Arrington, Jodey",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00005736",
        "CRPName": "Babin, Brian",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00037049",
        "CRPName": "Bacon, Donald John",
        "Party": "R",
        "State": "NE"
      },
      {
        "CID": "N00042194",
        "CRPName": "Balderson, Troy",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00004367",
        "CRPName": "Baldwin, Tammy",
        "Party": "D",
        "State": "WI"
      },
      {
        "CID": "N00037185",
        "CRPName": "Banks, Jim",
        "Party": "R",
        "State": "IN"
      },
      {
        "CID": "N00025495",
        "CRPName": "Barletta, Lou",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00031233",
        "CRPName": "Barr, Andy",
        "Party": "R",
        "State": "KY"
      },
      {
        "CID": "N00037019",
        "CRPName": "Barragan, Nanette",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00006236",
        "CRPName": "Barrasso, John A",
        "Party": "R",
        "State": "WY"
      },
      {
        "CID": "N00005656",
        "CRPName": "Barton, Joe",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00031877",
        "CRPName": "Bass, Karen",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00033904",
        "CRPName": "Beatty, Joyce",
        "Party": "D",
        "State": "OH"
      },
      {
        "CID": "N00009774",
        "CRPName": "Becerra, Xavier",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00030608",
        "CRPName": "Bennet, Michael",
        "Party": "D",
        "State": "CO"
      },
      {
        "CID": "N00030717",
        "CRPName": "Bera, Ami",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00039533",
        "CRPName": "Bergman, John",
        "Party": "R",
        "State": "MI"
      },
      {
        "CID": "N00031559",
        "CRPName": "Beutler, Jaime Herrera",
        "Party": "R",
        "State": "WA"
      },
      {
        "CID": "N00036018",
        "CRPName": "Beyer, Don",
        "Party": "D",
        "State": "VA"
      },
      {
        "CID": "N00039293",
        "CRPName": "Biggs, Andy",
        "Party": "R",
        "State": "AZ"
      },
      {
        "CID": "N00027462",
        "CRPName": "Bilirakis, Gus",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00036449",
        "CRPName": "Bishop, Mike",
        "Party": "R",
        "State": "MI"
      },
      {
        "CID": "N00025292",
        "CRPName": "Bishop, Rob",
        "Party": "R",
        "State": "UT"
      },
      {
        "CID": "N00002674",
        "CRPName": "Bishop, Sanford",
        "Party": "D",
        "State": "GA"
      },
      {
        "CID": "N00031539",
        "CRPName": "Black, Diane",
        "Party": "R",
        "State": "TN"
      },
      {
        "CID": "N00003105",
        "CRPName": "Blackburn, Marsha",
        "Party": "R",
        "State": "TN"
      },
      {
        "CID": "N00033744",
        "CRPName": "Blum, Rod",
        "Party": "R",
        "State": "IA"
      },
      {
        "CID": "N00007727",
        "CRPName": "Blumenauer, Earl",
        "Party": "D",
        "State": "OR"
      },
      {
        "CID": "N00031685",
        "CRPName": "Blumenthal, Richard",
        "Party": "D",
        "State": "CT"
      },
      {
        "CID": "N00005195",
        "CRPName": "Blunt, Roy",
        "Party": "R",
        "State": "MO"
      },
      {
        "CID": "N00033474",
        "CRPName": "Bonamici, Suzanne",
        "Party": "D",
        "State": "OR"
      },
      {
        "CID": "N00035267",
        "CRPName": "Booker, Cory",
        "Party": "D",
        "State": "NJ"
      },
      {
        "CID": "N00013873",
        "CRPName": "Boozman, John",
        "Party": "R",
        "State": "AR"
      },
      {
        "CID": "N00024866",
        "CRPName": "Bordallo, Madeleine Z",
        "Party": "D",
        "State": "GU"
      },
      {
        "CID": "N00035420",
        "CRPName": "Bost, Mike",
        "Party": "R",
        "State": "IL"
      },
      {
        "CID": "N00035307",
        "CRPName": "Boyle, Brendan",
        "Party": "D",
        "State": "PA"
      },
      {
        "CID": "N00005883",
        "CRPName": "Brady, Kevin",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00001619",
        "CRPName": "Brady, Robert A",
        "Party": "D",
        "State": "PA"
      },
      {
        "CID": "N00036013",
        "CRPName": "Brat, Dave",
        "Party": "R",
        "State": "VA"
      },
      {
        "CID": "N00033532",
        "CRPName": "Bridenstine, James",
        "Party": "R",
        "State": "OK"
      },
      {
        "CID": "N00030910",
        "CRPName": "Brooks, Mo",
        "Party": "R",
        "State": "AL"
      },
      {
        "CID": "N00033495",
        "CRPName": "Brooks, Susan",
        "Party": "R",
        "State": "IN"
      },
      {
        "CID": "N00036999",
        "CRPName": "Brown, Anthony",
        "Party": "D",
        "State": "MD"
      },
      {
        "CID": "N00003535",
        "CRPName": "Brown, Sherrod",
        "Party": "D",
        "State": "OH"
      },
      {
        "CID": "N00034254",
        "CRPName": "Brownley, Julia",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00027626",
        "CRPName": "Buchanan, Vernon",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00030829",
        "CRPName": "Buck, Ken",
        "Party": "R",
        "State": "CO"
      },
      {
        "CID": "N00031227",
        "CRPName": "Bucshon, Larry",
        "Party": "R",
        "State": "IN"
      },
      {
        "CID": "N00039551",
        "CRPName": "Budd, Ted",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00025219",
        "CRPName": "Burgess, Michael",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00002221",
        "CRPName": "Burr, Richard",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00033390",
        "CRPName": "Bustos, Cheri",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00027035",
        "CRPName": "Butterfield, G K",
        "Party": "D",
        "State": "NC"
      },
      {
        "CID": "N00035380",
        "CRPName": "Byrne, Bradley",
        "Party": "R",
        "State": "AL"
      },
      {
        "CID": "N00007099",
        "CRPName": "Calvert, Ken",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00007836",
        "CRPName": "Cantwell, Maria",
        "Party": "D",
        "State": "WA"
      },
      {
        "CID": "N00009771",
        "CRPName": "Capito, Shelley Moore",
        "Party": "R",
        "State": "WV"
      },
      {
        "CID": "N00000267",
        "CRPName": "Capuano, Michael E",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00037015",
        "CRPName": "Carbajal, Salud",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00033373",
        "CRPName": "Cardenas, Tony",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00001955",
        "CRPName": "Cardin, Ben",
        "Party": "D",
        "State": "MD"
      },
      {
        "CID": "N00012508",
        "CRPName": "Carper, Tom",
        "Party": "D",
        "State": "DE"
      },
      {
        "CID": "N00029513",
        "CRPName": "Carson, Andre",
        "Party": "D",
        "State": "IN"
      },
      {
        "CID": "N00035346",
        "CRPName": "Carter, Buddy",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00025095",
        "CRPName": "Carter, John",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00034128",
        "CRPName": "Cartwright, Matt",
        "Party": "D",
        "State": "PA"
      },
      {
        "CID": "N00027503",
        "CRPName": "Casey, Bob",
        "Party": "D",
        "State": "PA"
      },
      {
        "CID": "N00030245",
        "CRPName": "Cassidy, Bill",
        "Party": "R",
        "State": "LA"
      },
      {
        "CID": "N00027514",
        "CRPName": "Castor, Kathy",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00033316",
        "CRPName": "Castro, Joaquin",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00003689",
        "CRPName": "Chabot, Steve",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00028958",
        "CRPName": "Chaffetz, Jason",
        "Party": "R",
        "State": "UT"
      },
      {
        "CID": "N00035504",
        "CRPName": "Cheney, Liz",
        "Party": "R",
        "State": "WY"
      },
      {
        "CID": "N00030600",
        "CRPName": "Chu, Judy",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00032019",
        "CRPName": "Cicilline, David",
        "Party": "D",
        "State": "RI"
      },
      {
        "CID": "N00035278",
        "CRPName": "Clark, Katherine",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00026961",
        "CRPName": "Clarke, Yvette D",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00012460",
        "CRPName": "Clay, William L Jr",
        "Party": "D",
        "State": "MO"
      },
      {
        "CID": "N00026790",
        "CRPName": "Cleaver, Emanuel",
        "Party": "D",
        "State": "MO"
      },
      {
        "CID": "N00041882",
        "CRPName": "Cloud, Michael",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00002408",
        "CRPName": "Clyburn, James E",
        "Party": "D",
        "State": "SC"
      },
      {
        "CID": "N00003328",
        "CRPName": "Cochran, Thad",
        "Party": "R",
        "State": "MS"
      },
      {
        "CID": "N00024753",
        "CRPName": "Coffman, Mike",
        "Party": "R",
        "State": "CO"
      },
      {
        "CID": "N00003225",
        "CRPName": "Cohen, Steve",
        "Party": "D",
        "State": "TN"
      },
      {
        "CID": "N00025726",
        "CRPName": "Cole, Tom",
        "Party": "R",
        "State": "OK"
      },
      {
        "CID": "N00036158",
        "CRPName": "Coleman, Bonnie",
        "Party": "D",
        "State": "NJ"
      },
      {
        "CID": "N00001285",
        "CRPName": "Collins, Chris",
        "Party": "R",
        "State": "NY"
      },
      {
        "CID": "N00033518",
        "CRPName": "Collins, Doug",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00000491",
        "CRPName": "Collins, Susan M",
        "Party": "R",
        "State": "ME"
      },
      {
        "CID": "N00038260",
        "CRPName": "Comer, James",
        "Party": "R",
        "State": "KY"
      },
      {
        "CID": "N00036023",
        "CRPName": "Comstock, Barbara",
        "Party": "R",
        "State": "VA"
      },
      {
        "CID": "N00026041",
        "CRPName": "Conaway, Mike",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00029891",
        "CRPName": "Connolly, Gerry",
        "Party": "D",
        "State": "VA"
      },
      {
        "CID": "N00004029",
        "CRPName": "Conyers, John Jr",
        "Party": "D",
        "State": "MI"
      },
      {
        "CID": "N00034224",
        "CRPName": "Cook, Paul",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00031820",
        "CRPName": "Coons, Chris",
        "Party": "D",
        "State": "DE"
      },
      {
        "CID": "N00003132",
        "CRPName": "Cooper, Jim",
        "Party": "D",
        "State": "TN"
      },
      {
        "CID": "N00027441",
        "CRPName": "Corker, Bob",
        "Party": "R",
        "State": "TN"
      },
      {
        "CID": "N00024852",
        "CRPName": "Cornyn, John",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00037260",
        "CRPName": "Correa, Lou",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00026341",
        "CRPName": "Costa, Jim",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00031064",
        "CRPName": "Costello, Ryan",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00033363",
        "CRPName": "Cotton, Tom",
        "Party": "R",
        "State": "AR"
      },
      {
        "CID": "N00024842",
        "CRPName": "Courtney, Joe",
        "Party": "D",
        "State": "CT"
      },
      {
        "CID": "N00004614",
        "CRPName": "Cramer, Kevin",
        "Party": "R",
        "State": "ND"
      },
      {
        "CID": "N00006267",
        "CRPName": "Crapo, Mike",
        "Party": "R",
        "State": "ID"
      },
      {
        "CID": "N00030770",
        "CRPName": "Crawford, Rick",
        "Party": "R",
        "State": "AR"
      },
      {
        "CID": "N00002942",
        "CRPName": "Crist, Charlie",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00001127",
        "CRPName": "Crowley, Joseph",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00033085",
        "CRPName": "Cruz, Ted",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00024978",
        "CRPName": "Cuellar, Henry",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00009738",
        "CRPName": "Culberson, John",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00001971",
        "CRPName": "Cummings, Elijah E",
        "Party": "D",
        "State": "MD"
      },
      {
        "CID": "N00035403",
        "CRPName": "Curbelo, Carlos",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00041221",
        "CRPName": "Curtis, John",
        "Party": "R",
        "State": "UT"
      },
      {
        "CID": "N00033054",
        "CRPName": "Daines, Steven",
        "Party": "R",
        "State": "MT"
      },
      {
        "CID": "N00038767",
        "CRPName": "Davidson, Warren",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00004884",
        "CRPName": "Davis, Danny K",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00034784",
        "CRPName": "Davis, Rodney",
        "Party": "R",
        "State": "IL"
      },
      {
        "CID": "N00009604",
        "CRPName": "Davis, Susan A",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00007781",
        "CRPName": "DeFazio, Peter",
        "Party": "D",
        "State": "OR"
      },
      {
        "CID": "N00006134",
        "CRPName": "DeGette, Diana",
        "Party": "D",
        "State": "CO"
      },
      {
        "CID": "N00033897",
        "CRPName": "Delaney, John K",
        "Party": "D",
        "State": "MD"
      },
      {
        "CID": "N00000615",
        "CRPName": "DeLauro, Rosa L",
        "Party": "D",
        "State": "CT"
      },
      {
        "CID": "N00030693",
        "CRPName": "DelBene, Suzan",
        "Party": "D",
        "State": "WA"
      },
      {
        "CID": "N00033449",
        "CRPName": "Demings, Val",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00031593",
        "CRPName": "Denham, Jeff",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00026171",
        "CRPName": "Dent, Charlie",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00034746",
        "CRPName": "DeSantis, Ron",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00030709",
        "CRPName": "Desaulnier, Mark",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00030957",
        "CRPName": "Desjarlais, Scott",
        "Party": "R",
        "State": "TN"
      },
      {
        "CID": "N00031317",
        "CRPName": "Deutch, Ted",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00025337",
        "CRPName": "Diaz-Balart, Mario",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00036149",
        "CRPName": "Dingell, Debbie",
        "Party": "D",
        "State": "MI"
      },
      {
        "CID": "N00006023",
        "CRPName": "Doggett, Lloyd",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00026586",
        "CRPName": "Donnelly, Joe",
        "Party": "D",
        "State": "IN"
      },
      {
        "CID": "N00036928",
        "CRPName": "Donovan, Dan",
        "Party": "R",
        "State": "NY"
      },
      {
        "CID": "N00001373",
        "CRPName": "Doyle, Mike",
        "Party": "D",
        "State": "PA"
      },
      {
        "CID": "N00027860",
        "CRPName": "Duckworth, Tammy",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00030967",
        "CRPName": "Duffy, Sean P",
        "Party": "R",
        "State": "WI"
      },
      {
        "CID": "N00030752",
        "CRPName": "Duncan, Jeff",
        "Party": "R",
        "State": "SC"
      },
      {
        "CID": "N00003209",
        "CRPName": "Duncan, John J Jr",
        "Party": "R",
        "State": "TN"
      },
      {
        "CID": "N00037442",
        "CRPName": "Dunn, Neal",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00004981",
        "CRPName": "Durbin, Dick",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00028257",
        "CRPName": "Ellison, Keith",
        "Party": "D",
        "State": "MN"
      },
      {
        "CID": "N00035440",
        "CRPName": "Emmer, Tom",
        "Party": "R",
        "State": "MN"
      },
      {
        "CID": "N00001003",
        "CRPName": "Engel, Eliot L",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00006249",
        "CRPName": "Enzi, Mike",
        "Party": "R",
        "State": "WY"
      },
      {
        "CID": "N00035483",
        "CRPName": "Ernst, Joni",
        "Party": "R",
        "State": "IA"
      },
      {
        "CID": "N00007335",
        "CRPName": "Eshoo, Anna",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00034549",
        "CRPName": "Espaillat, Adriano",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00040712",
        "CRPName": "Estes, Ron",
        "Party": "R",
        "State": "KS"
      },
      {
        "CID": "N00033217",
        "CRPName": "Esty, Elizabeth",
        "Party": "D",
        "State": "CT"
      },
      {
        "CID": "N00038450",
        "CRPName": "Evans, Dwight",
        "Party": "D",
        "State": "PA"
      },
      {
        "CID": "N00031672",
        "CRPName": "Farenthold, Blake",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00037288",
        "CRPName": "Faso, John",
        "Party": "R",
        "State": "NY"
      },
      {
        "CID": "N00007364",
        "CRPName": "Feinstein, Dianne",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00039090",
        "CRPName": "Ferguson, Drew",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00033443",
        "CRPName": "Fischer, Deb",
        "Party": "R",
        "State": "NE"
      },
      {
        "CID": "N00038779",
        "CRPName": "Fitzpatrick, Brian",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00009573",
        "CRPName": "Flake, Jeff",
        "Party": "R",
        "State": "AZ"
      },
      {
        "CID": "N00030815",
        "CRPName": "Fleischmann, Chuck",
        "Party": "R",
        "State": "TN"
      },
      {
        "CID": "N00031545",
        "CRPName": "Flores, Bill",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00026631",
        "CRPName": "Fortenberry, Jeff",
        "Party": "R",
        "State": "NE"
      },
      {
        "CID": "N00029139",
        "CRPName": "Foster, Bill",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00026166",
        "CRPName": "Foxx, Virginia",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00002893",
        "CRPName": "Frankel, Lois J",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00029016",
        "CRPName": "Franken, Al",
        "Party": "D",
        "State": "MN"
      },
      {
        "CID": "N00006423",
        "CRPName": "Franks, Trent",
        "Party": "R",
        "State": "AZ"
      },
      {
        "CID": "N00000684",
        "CRPName": "Frelinghuysen, Rodney",
        "Party": "R",
        "State": "NJ"
      },
      {
        "CID": "N00030490",
        "CRPName": "Fudge, Marcia L",
        "Party": "D",
        "State": "OH"
      },
      {
        "CID": "N00033281",
        "CRPName": "Gabbard, Tulsi",
        "Party": "D",
        "State": "HI"
      },
      {
        "CID": "N00039503",
        "CRPName": "Gaetz, Matt",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00039330",
        "CRPName": "Gallagher, Mike",
        "Party": "R",
        "State": "WI"
      },
      {
        "CID": "N00036097",
        "CRPName": "Gallego, Ruben",
        "Party": "D",
        "State": "AZ"
      },
      {
        "CID": "N00030856",
        "CRPName": "Garamendi, John",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00030780",
        "CRPName": "Gardner, Cory",
        "Party": "R",
        "State": "CO"
      },
      {
        "CID": "N00038847",
        "CRPName": "Garrett, Tom",
        "Party": "R",
        "State": "VA"
      },
      {
        "CID": "N00040733",
        "CRPName": "Gianforte, Greg",
        "Party": "R",
        "State": "MT"
      },
      {
        "CID": "N00031128",
        "CRPName": "Gibbs, Bob",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00027658",
        "CRPName": "Gillibrand, Kirsten",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00026148",
        "CRPName": "Gohmert, Louis B Jr",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00040597",
        "CRPName": "Gomez, Jimmy",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00037615",
        "CRPName": "Gonzalez, Jenniffer",
        "Party": "3",
        "State": "PR"
      },
      {
        "CID": "N00038809",
        "CRPName": "Gonzalez, Vicente",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00009154",
        "CRPName": "Goodlatte, Bob",
        "Party": "R",
        "State": "VA"
      },
      {
        "CID": "N00030771",
        "CRPName": "Gosar, Paul",
        "Party": "R",
        "State": "AZ"
      },
      {
        "CID": "N00036944",
        "CRPName": "Gottheimer, Josh",
        "Party": "D",
        "State": "NJ"
      },
      {
        "CID": "N00030880",
        "CRPName": "Gowdy, Trey",
        "Party": "R",
        "State": "SC"
      },
      {
        "CID": "N00009975",
        "CRPName": "Graham, Lindsey",
        "Party": "R",
        "State": "SC"
      },
      {
        "CID": "N00008799",
        "CRPName": "Granger, Kay",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00001758",
        "CRPName": "Grassley, Chuck",
        "Party": "R",
        "State": "IA"
      },
      {
        "CID": "N00036135",
        "CRPName": "Graves, Garret",
        "Party": "R",
        "State": "LA"
      },
      {
        "CID": "N00013323",
        "CRPName": "Graves, Sam",
        "Party": "R",
        "State": "MO"
      },
      {
        "CID": "N00030788",
        "CRPName": "Graves, Tom",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00026686",
        "CRPName": "Green, Al",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00005870",
        "CRPName": "Green, Gene",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00032029",
        "CRPName": "Griffith, Morgan",
        "Party": "R",
        "State": "VA"
      },
      {
        "CID": "N00025284",
        "CRPName": "Grijalva, Raul M",
        "Party": "D",
        "State": "AZ"
      },
      {
        "CID": "N00029400",
        "CRPName": "Grisham, Michelle Lujan",
        "Party": "D",
        "State": "NM"
      },
      {
        "CID": "N00036409",
        "CRPName": "Grothman, Glenn S",
        "Party": "R",
        "State": "WI"
      },
      {
        "CID": "N00029675",
        "CRPName": "Guthrie, Brett",
        "Party": "R",
        "State": "KY"
      },
      {
        "CID": "N00004874",
        "CRPName": "Gutierrez, Luis V",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00025881",
        "CRPName": "Hanabusa, Colleen",
        "Party": "D",
        "State": "HI"
      },
      {
        "CID": "N00035477",
        "CRPName": "Handel, Karen",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00029632",
        "CRPName": "Harper, Gregg",
        "Party": "R",
        "State": "MS"
      },
      {
        "CID": "N00029147",
        "CRPName": "Harris, Andy",
        "Party": "R",
        "State": "MD"
      },
      {
        "CID": "N00036915",
        "CRPName": "Harris, Kamala",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00031005",
        "CRPName": "Hartzler, Vicky",
        "Party": "R",
        "State": "MO"
      },
      {
        "CID": "N00038397",
        "CRPName": "Hassan, Maggie",
        "Party": "D",
        "State": "NH"
      },
      {
        "CID": "N00002884",
        "CRPName": "Hastings, Alcee L",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00009869",
        "CRPName": "Hatch, Orrin G",
        "Party": "R",
        "State": "UT"
      },
      {
        "CID": "N00031557",
        "CRPName": "Heck, Dennis",
        "Party": "D",
        "State": "WA"
      },
      {
        "CID": "N00029835",
        "CRPName": "Heinrich, Martin",
        "Party": "D",
        "State": "NM"
      },
      {
        "CID": "N00033782",
        "CRPName": "Heitkamp, Heidi",
        "Party": "D",
        "State": "ND"
      },
      {
        "CID": "N00027522",
        "CRPName": "Heller, Dean",
        "Party": "R",
        "State": "NV"
      },
      {
        "CID": "N00024922",
        "CRPName": "Hensarling, Jeb",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00040829",
        "CRPName": "Hern, Kevin",
        "Party": "R",
        "State": "OK"
      },
      {
        "CID": "N00032243",
        "CRPName": "Hice, Jody",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00027060",
        "CRPName": "Higgins, Brian M",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00039953",
        "CRPName": "Higgins, Clay",
        "Party": "R",
        "State": "LA"
      },
      {
        "CID": "N00035792",
        "CRPName": "Hill, French",
        "Party": "R",
        "State": "AR"
      },
      {
        "CID": "N00029070",
        "CRPName": "Himes, Jim",
        "Party": "D",
        "State": "CT"
      },
      {
        "CID": "N00028139",
        "CRPName": "Hirono, Mazie K",
        "Party": "D",
        "State": "HI"
      },
      {
        "CID": "N00031688",
        "CRPName": "Hoeven, John",
        "Party": "R",
        "State": "ND"
      },
      {
        "CID": "N00033399",
        "CRPName": "Holding, George",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00038429",
        "CRPName": "Hollingsworth, Trey",
        "Party": "R",
        "State": "IN"
      },
      {
        "CID": "N00001821",
        "CRPName": "Hoyer, Steny H",
        "Party": "D",
        "State": "MD"
      },
      {
        "CID": "N00033630",
        "CRPName": "Hudson, Richard",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00033030",
        "CRPName": "Huffman, Jared",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00030673",
        "CRPName": "Huizenga, Bill",
        "Party": "R",
        "State": "MI"
      },
      {
        "CID": "N00031104",
        "CRPName": "Hultgren, Randy",
        "Party": "R",
        "State": "IL"
      },
      {
        "CID": "N00029258",
        "CRPName": "Hunter, Duncan D",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00031417",
        "CRPName": "Hurd, Will",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00043298",
        "CRPName": "Hyde-Smith, Cindy",
        "Party": "R",
        "State": "MS"
      },
      {
        "CID": "N00005582",
        "CRPName": "Inhofe, James M",
        "Party": "R",
        "State": "OK"
      },
      {
        "CID": "N00002593",
        "CRPName": "Isakson, Johnny",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00007017",
        "CRPName": "Issa, Darrell",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00005818",
        "CRPName": "Jackson Lee, Sheila",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00038858",
        "CRPName": "Jayapal, Pramila",
        "Party": "D",
        "State": "WA"
      },
      {
        "CID": "N00033640",
        "CRPName": "Jeffries, Hakeem",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00035531",
        "CRPName": "Jenkins, Evan",
        "Party": "R",
        "State": "WV"
      },
      {
        "CID": "N00029077",
        "CRPName": "Jenkins, Lynn",
        "Party": "R",
        "State": "KS"
      },
      {
        "CID": "N00032088",
        "CRPName": "Johnson, Bill",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00008122",
        "CRPName": "Johnson, Eddie Bernice",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00027848",
        "CRPName": "Johnson, Hank",
        "Party": "D",
        "State": "GA"
      },
      {
        "CID": "N00039106",
        "CRPName": "Johnson, Mike",
        "Party": "R",
        "State": "LA"
      },
      {
        "CID": "N00032546",
        "CRPName": "Johnson, Ron",
        "Party": "R",
        "State": "WI"
      },
      {
        "CID": "N00008028",
        "CRPName": "Johnson, Sam",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00042648",
        "CRPName": "Jones, Brenda",
        "Party": "D",
        "State": "MI"
      },
      {
        "CID": "N00024817",
        "CRPName": "Jones, Doug",
        "Party": "D",
        "State": "AL"
      },
      {
        "CID": "N00002299",
        "CRPName": "Jones, Walter B Jr",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00027894",
        "CRPName": "Jordan, Jim",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00035007",
        "CRPName": "Joyce, David P",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00033177",
        "CRPName": "Kaine, Tim",
        "Party": "D",
        "State": "VA"
      },
      {
        "CID": "N00003522",
        "CRPName": "Kaptur, Marcy",
        "Party": "D",
        "State": "OH"
      },
      {
        "CID": "N00035934",
        "CRPName": "Katko, John",
        "Party": "R",
        "State": "NY"
      },
      {
        "CID": "N00031933",
        "CRPName": "Keating, Bill",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00031647",
        "CRPName": "Kelly, Mike",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00035215",
        "CRPName": "Kelly, Robin",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00037003",
        "CRPName": "Kelly, Trent",
        "Party": "R",
        "State": "MS"
      },
      {
        "CID": "N00034044",
        "CRPName": "Kennedy, Joe III",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00026823",
        "CRPName": "Kennedy, John",
        "Party": "R",
        "State": "LA"
      },
      {
        "CID": "N00026427",
        "CRPName": "Khanna, Ro",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00033530",
        "CRPName": "Kihuen, Ruben",
        "Party": "D",
        "State": "NV"
      },
      {
        "CID": "N00033395",
        "CRPName": "Kildee, Dan",
        "Party": "D",
        "State": "MI"
      },
      {
        "CID": "N00034453",
        "CRPName": "Kilmer, Derek",
        "Party": "D",
        "State": "WA"
      },
      {
        "CID": "N00004403",
        "CRPName": "Kind, Ron",
        "Party": "D",
        "State": "WI"
      },
      {
        "CID": "N00034580",
        "CRPName": "King, Angus",
        "Party": "I",
        "State": "ME"
      },
      {
        "CID": "N00001193",
        "CRPName": "King, Pete",
        "Party": "R",
        "State": "NY"
      },
      {
        "CID": "N00025237",
        "CRPName": "King, Steven A",
        "Party": "R",
        "State": "IA"
      },
      {
        "CID": "N00030667",
        "CRPName": "Kinzinger, Adam",
        "Party": "R",
        "State": "IL"
      },
      {
        "CID": "N00027500",
        "CRPName": "Klobuchar, Amy",
        "Party": "D",
        "State": "MN"
      },
      {
        "CID": "N00035820",
        "CRPName": "Knight, Steve",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00033240",
        "CRPName": "Krishnamoorthi, Raja",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00030875",
        "CRPName": "Kuster, Ann",
        "Party": "D",
        "State": "NH"
      },
      {
        "CID": "N00025445",
        "CRPName": "Kustoff, David",
        "Party": "R",
        "State": "TN"
      },
      {
        "CID": "N00006406",
        "CRPName": "Kyl, Jon",
        "Party": "R",
        "State": "AZ"
      },
      {
        "CID": "N00031377",
        "CRPName": "Labrador, Raul",
        "Party": "R",
        "State": "ID"
      },
      {
        "CID": "N00037031",
        "CRPName": "LaHood, Darin",
        "Party": "R",
        "State": "IL"
      },
      {
        "CID": "N00033987",
        "CRPName": "LaMalfa, Doug",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00041870",
        "CRPName": "Lamb, Conor",
        "Party": "D",
        "State": "PA"
      },
      {
        "CID": "N00028133",
        "CRPName": "Lamborn, Douglas L",
        "Party": "R",
        "State": "CO"
      },
      {
        "CID": "N00000898",
        "CRPName": "Lance, Leonard",
        "Party": "R",
        "State": "NJ"
      },
      {
        "CID": "N00009724",
        "CRPName": "Langevin, Jim",
        "Party": "D",
        "State": "RI"
      },
      {
        "CID": "N00031129",
        "CRPName": "Lankford, James",
        "Party": "R",
        "State": "OK"
      },
      {
        "CID": "N00009759",
        "CRPName": "Larsen, Rick",
        "Party": "D",
        "State": "WA"
      },
      {
        "CID": "N00000575",
        "CRPName": "Larson, John B",
        "Party": "D",
        "State": "CT"
      },
      {
        "CID": "N00012233",
        "CRPName": "Latta, Robert E",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00034068",
        "CRPName": "Lawrence, Brenda",
        "Party": "D",
        "State": "MI"
      },
      {
        "CID": "N00030642",
        "CRPName": "Lawson, Al",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00009918",
        "CRPName": "Leahy, Patrick",
        "Party": "D",
        "State": "VT"
      },
      {
        "CID": "N00008046",
        "CRPName": "Lee, Barbara",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00031696",
        "CRPName": "Lee, Mike",
        "Party": "R",
        "State": "UT"
      },
      {
        "CID": "N00042056",
        "CRPName": "Lesko, Debbie",
        "Party": "R",
        "State": "AZ"
      },
      {
        "CID": "N00003950",
        "CRPName": "Levin, Sander",
        "Party": "D",
        "State": "MI"
      },
      {
        "CID": "N00038400",
        "CRPName": "Lewis, Jason",
        "Party": "R",
        "State": "MN"
      },
      {
        "CID": "N00002577",
        "CRPName": "Lewis, John",
        "Party": "D",
        "State": "GA"
      },
      {
        "CID": "N00035825",
        "CRPName": "Lieu, Ted",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00027239",
        "CRPName": "Lipinski, Daniel",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00000851",
        "CRPName": "LoBiondo, Frank",
        "Party": "R",
        "State": "NJ"
      },
      {
        "CID": "N00027741",
        "CRPName": "Loebsack, David",
        "Party": "D",
        "State": "IA"
      },
      {
        "CID": "N00007479",
        "CRPName": "Lofgren, Zoe",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00030676",
        "CRPName": "Long, Billy",
        "Party": "R",
        "State": "MO"
      },
      {
        "CID": "N00035347",
        "CRPName": "Loudermilk, Barry",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00033842",
        "CRPName": "Love, Mia",
        "Party": "R",
        "State": "UT"
      },
      {
        "CID": "N00033274",
        "CRPName": "Lowenthal, Alan",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00001024",
        "CRPName": "Lowey, Nita M",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00005559",
        "CRPName": "Lucas, Frank D",
        "Party": "R",
        "State": "OK"
      },
      {
        "CID": "N00030026",
        "CRPName": "Luetkemeyer, Blaine",
        "Party": "R",
        "State": "MO"
      },
      {
        "CID": "N00029562",
        "CRPName": "Lujan, Ben Ray",
        "Party": "D",
        "State": "NM"
      },
      {
        "CID": "N00013855",
        "CRPName": "Lynch, Stephen F",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00036155",
        "CRPName": "MacArthur, Thomas",
        "Party": "R",
        "State": "NJ"
      },
      {
        "CID": "N00000078",
        "CRPName": "Maloney, Carolyn B",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00034277",
        "CRPName": "Maloney, Sean Patrick",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00032838",
        "CRPName": "Manchin, Joe",
        "Party": "D",
        "State": "WV"
      },
      {
        "CID": "N00026710",
        "CRPName": "Marchant, Kenny",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00031777",
        "CRPName": "Marino, Tom",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00000270",
        "CRPName": "Markey, Ed",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00037034",
        "CRPName": "Marshall, Roger",
        "Party": "R",
        "State": "KS"
      },
      {
        "CID": "N00034041",
        "CRPName": "Massie, Thomas",
        "Party": "R",
        "State": "KY"
      },
      {
        "CID": "N00037269",
        "CRPName": "Mast, Brian",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00037161",
        "CRPName": "Masto, Catherine Cortez",
        "Party": "D",
        "State": "NV"
      },
      {
        "CID": "N00027459",
        "CRPName": "Matsui, Doris O",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00006424",
        "CRPName": "McCain, John",
        "Party": "R",
        "State": "AZ"
      },
      {
        "CID": "N00028152",
        "CRPName": "McCarthy, Kevin",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00027694",
        "CRPName": "McCaskill, Claire",
        "Party": "D",
        "State": "MO"
      },
      {
        "CID": "N00026460",
        "CRPName": "McCaul, Michael",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00006863",
        "CRPName": "McClintock, Tom",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00012942",
        "CRPName": "McCollum, Betty",
        "Party": "D",
        "State": "MN"
      },
      {
        "CID": "N00003389",
        "CRPName": "McConnell, Mitch",
        "Party": "R",
        "State": "KY"
      },
      {
        "CID": "N00039327",
        "CRPName": "McEachin, Donald",
        "Party": "D",
        "State": "VA"
      },
      {
        "CID": "N00000179",
        "CRPName": "McGovern, James P",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00026627",
        "CRPName": "McHenry, Patrick",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00031681",
        "CRPName": "McKinley, David",
        "Party": "R",
        "State": "WV"
      },
      {
        "CID": "N00026926",
        "CRPName": "McNerney, Jerry",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00033982",
        "CRPName": "McSally, Martha",
        "Party": "R",
        "State": "AZ"
      },
      {
        "CID": "N00033631",
        "CRPName": "Meadows, Mark R",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00031134",
        "CRPName": "Meehan, Patrick",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00001171",
        "CRPName": "Meeks, Gregory W",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00000699",
        "CRPName": "Menendez, Robert",
        "Party": "D",
        "State": "NJ"
      },
      {
        "CID": "N00034547",
        "CRPName": "Meng, Grace",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00029303",
        "CRPName": "Merkley, Jeff",
        "Party": "D",
        "State": "OR"
      },
      {
        "CID": "N00012546",
        "CRPName": "Messer, Luke",
        "Party": "R",
        "State": "IN"
      },
      {
        "CID": "N00036274",
        "CRPName": "Mitchell, Paul",
        "Party": "R",
        "State": "MI"
      },
      {
        "CID": "N00036275",
        "CRPName": "Moolenaar, John",
        "Party": "R",
        "State": "MI"
      },
      {
        "CID": "N00033814",
        "CRPName": "Mooney, Alex",
        "Party": "R",
        "State": "WV"
      },
      {
        "CID": "N00026914",
        "CRPName": "Moore, Gwen",
        "Party": "D",
        "State": "WI"
      },
      {
        "CID": "N00005282",
        "CRPName": "Moran, Jerry",
        "Party": "R",
        "State": "KS"
      },
      {
        "CID": "N00043207",
        "CRPName": "Morelle, Joseph D",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00035431",
        "CRPName": "Moulton, Seth",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00033410",
        "CRPName": "Mullin, Markwayne",
        "Party": "R",
        "State": "OK"
      },
      {
        "CID": "N00031412",
        "CRPName": "Mulvaney, Mick",
        "Party": "R",
        "State": "SC"
      },
      {
        "CID": "N00026050",
        "CRPName": "Murkowski, Lisa",
        "Party": "R",
        "State": "AK"
      },
      {
        "CID": "N00027566",
        "CRPName": "Murphy, Christopher S",
        "Party": "D",
        "State": "CT"
      },
      {
        "CID": "N00040133",
        "CRPName": "Murphy, Stephanie",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00024992",
        "CRPName": "Murphy, Tim",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00007876",
        "CRPName": "Murray, Patty",
        "Party": "D",
        "State": "WA"
      },
      {
        "CID": "N00000939",
        "CRPName": "Nadler, Jerrold",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00006789",
        "CRPName": "Napolitano, Grace",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00000153",
        "CRPName": "Neal, Richard E",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00009926",
        "CRPName": "Nelson, Bill",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00036403",
        "CRPName": "Newhouse, Dan",
        "Party": "R",
        "State": "WA"
      },
      {
        "CID": "N00032022",
        "CRPName": "Noem, Kristi",
        "Party": "R",
        "State": "SD"
      },
      {
        "CID": "N00021207",
        "CRPName": "Nolan, Rick",
        "Party": "D",
        "State": "MN"
      },
      {
        "CID": "N00036154",
        "CRPName": "Norcross, Don",
        "Party": "D",
        "State": "NJ"
      },
      {
        "CID": "N00027783",
        "CRPName": "Norman, Ralph",
        "Party": "R",
        "State": "SC"
      },
      {
        "CID": "N00001692",
        "CRPName": "Norton, Eleanor Holmes",
        "Party": "D",
        "State": "DC"
      },
      {
        "CID": "N00007248",
        "CRPName": "Nunes, Devin",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00037515",
        "CRPName": "O'Halleran, Tom",
        "Party": "D",
        "State": "AZ"
      },
      {
        "CID": "N00033540",
        "CRPName": "O'Rourke, Beto",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00029285",
        "CRPName": "Olson, Pete",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00031958",
        "CRPName": "Palazzo, Steven",
        "Party": "R",
        "State": "MS"
      },
      {
        "CID": "N00000781",
        "CRPName": "Pallone, Frank Jr",
        "Party": "D",
        "State": "NJ"
      },
      {
        "CID": "N00035691",
        "CRPName": "Palmer, Gary",
        "Party": "R",
        "State": "AL"
      },
      {
        "CID": "N00038601",
        "CRPName": "Panetta, Jimmy",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00000751",
        "CRPName": "Pascrell, Bill Jr",
        "Party": "D",
        "State": "NJ"
      },
      {
        "CID": "N00030836",
        "CRPName": "Paul, Rand",
        "Party": "R",
        "State": "KY"
      },
      {
        "CID": "N00029391",
        "CRPName": "Paulsen, Erik",
        "Party": "R",
        "State": "MN"
      },
      {
        "CID": "N00034639",
        "CRPName": "Payne, Donald M Jr",
        "Party": "D",
        "State": "NJ"
      },
      {
        "CID": "N00012672",
        "CRPName": "Pearce, Steve",
        "Party": "R",
        "State": "NM"
      },
      {
        "CID": "N00007360",
        "CRPName": "Pelosi, Nancy",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00035516",
        "CRPName": "Perdue, David",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00027510",
        "CRPName": "Perlmutter, Ed",
        "Party": "D",
        "State": "CO"
      },
      {
        "CID": "N00034120",
        "CRPName": "Perry, Scott",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00029277",
        "CRPName": "Peters, Gary",
        "Party": "D",
        "State": "MI"
      },
      {
        "CID": "N00033591",
        "CRPName": "Peters, Scott",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00004558",
        "CRPName": "Peterson, Collin",
        "Party": "D",
        "State": "MN"
      },
      {
        "CID": "N00013817",
        "CRPName": "Pingree, Chellie",
        "Party": "D",
        "State": "ME"
      },
      {
        "CID": "N00034416",
        "CRPName": "Pittenger, Robert",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00035000",
        "CRPName": "Plaskett, Stacey",
        "Party": "D",
        "State": "VI"
      },
      {
        "CID": "N00033549",
        "CRPName": "Pocan, Mark",
        "Party": "D",
        "State": "WI"
      },
      {
        "CID": "N00026457",
        "CRPName": "Poe, Ted",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00034584",
        "CRPName": "Poliquin, Bruce",
        "Party": "R",
        "State": "ME"
      },
      {
        "CID": "N00029127",
        "CRPName": "Polis, Jared",
        "Party": "D",
        "State": "CO"
      },
      {
        "CID": "N00030744",
        "CRPName": "Pompeo, Mike",
        "Party": "R",
        "State": "KS"
      },
      {
        "CID": "N00003682",
        "CRPName": "Portman, Rob",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00029662",
        "CRPName": "Posey, Bill",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00002260",
        "CRPName": "Price, David",
        "Party": "D",
        "State": "NC"
      },
      {
        "CID": "N00026160",
        "CRPName": "Price, Tom",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00030581",
        "CRPName": "Quigley, Mike",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00007635",
        "CRPName": "Radewagen, Amata Coleman",
        "Party": "R",
        "State": "AS"
      },
      {
        "CID": "N00037036",
        "CRPName": "Raskin, Jamie",
        "Party": "D",
        "State": "MD"
      },
      {
        "CID": "N00035972",
        "CRPName": "Ratcliffe, John Lee",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00000362",
        "CRPName": "Reed, Jack",
        "Party": "D",
        "State": "RI"
      },
      {
        "CID": "N00030949",
        "CRPName": "Reed, Tom",
        "Party": "R",
        "State": "NY"
      },
      {
        "CID": "N00026885",
        "CRPName": "Reichert, Dave",
        "Party": "R",
        "State": "WA"
      },
      {
        "CID": "N00031127",
        "CRPName": "Renacci, Jim",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00035927",
        "CRPName": "Rice, Kathleen",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00033832",
        "CRPName": "Rice, Tom",
        "Party": "R",
        "State": "SC"
      },
      {
        "CID": "N00030184",
        "CRPName": "Richmond, Cedric",
        "Party": "D",
        "State": "LA"
      },
      {
        "CID": "N00029441",
        "CRPName": "Risch, James E",
        "Party": "R",
        "State": "ID"
      },
      {
        "CID": "N00005285",
        "CRPName": "Roberts, Pat",
        "Party": "R",
        "State": "KS"
      },
      {
        "CID": "N00030768",
        "CRPName": "Roby, Martha",
        "Party": "R",
        "State": "AL"
      },
      {
        "CID": "N00038414",
        "CRPName": "Rochester, Lisa Blunt",
        "Party": "D",
        "State": "DE"
      },
      {
        "CID": "N00026314",
        "CRPName": "Rodgers, Cathy McMorris",
        "Party": "R",
        "State": "WA"
      },
      {
        "CID": "N00028463",
        "CRPName": "Roe, Phil",
        "Party": "R",
        "State": "TN"
      },
      {
        "CID": "N00003473",
        "CRPName": "Rogers, Hal",
        "Party": "R",
        "State": "KY"
      },
      {
        "CID": "N00024759",
        "CRPName": "Rogers, Mike D",
        "Party": "R",
        "State": "AL"
      },
      {
        "CID": "N00007151",
        "CRPName": "Rohrabacher, Dana",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00031741",
        "CRPName": "Rokita, Todd",
        "Party": "R",
        "State": "IN"
      },
      {
        "CID": "N00040007",
        "CRPName": "Rooney, Francis",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00029018",
        "CRPName": "Rooney, Tom",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00002858",
        "CRPName": "Ros-Lehtinen, Ileana",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00038734",
        "CRPName": "Rosen, Jacky",
        "Party": "D",
        "State": "NV"
      },
      {
        "CID": "N00004719",
        "CRPName": "Roskam, Peter",
        "Party": "R",
        "State": "IL"
      },
      {
        "CID": "N00030645",
        "CRPName": "Ross, Dennis",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00031253",
        "CRPName": "Rothfus, Keith J",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00035187",
        "CRPName": "Rounds, Mike",
        "Party": "R",
        "State": "SD"
      },
      {
        "CID": "N00033527",
        "CRPName": "Rouzer, David",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00006671",
        "CRPName": "Roybal-Allard, Lucille",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00008264",
        "CRPName": "Royce, Ed",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00030612",
        "CRPName": "Rubio, Marco",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00033510",
        "CRPName": "Ruiz, Raul",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00025482",
        "CRPName": "Ruppersberger, Dutch",
        "Party": "D",
        "State": "MD"
      },
      {
        "CID": "N00004887",
        "CRPName": "Rush, Bobby L",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00036175",
        "CRPName": "Russell, Steven",
        "Party": "R",
        "State": "OK"
      },
      {
        "CID": "N00039777",
        "CRPName": "Rutherford, John",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00004357",
        "CRPName": "Ryan, Paul",
        "Party": "R",
        "State": "WI"
      },
      {
        "CID": "N00025280",
        "CRPName": "Ryan, Tim",
        "Party": "D",
        "State": "OH"
      },
      {
        "CID": "N00030418",
        "CRPName": "Sablan, Gregorio",
        "Party": "I",
        "State": "MP"
      },
      {
        "CID": "N00024870",
        "CRPName": "Sanchez, Linda",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00000528",
        "CRPName": "Sanders, Bernie",
        "Party": "I",
        "State": "VT"
      },
      {
        "CID": "N00002424",
        "CRPName": "Sanford, Mark",
        "Party": "R",
        "State": "SC"
      },
      {
        "CID": "N00027751",
        "CRPName": "Sarbanes, John",
        "Party": "D",
        "State": "MD"
      },
      {
        "CID": "N00035544",
        "CRPName": "Sasse, Ben",
        "Party": "R",
        "State": "NE"
      },
      {
        "CID": "N00009660",
        "CRPName": "Scalise, Steve",
        "Party": "R",
        "State": "LA"
      },
      {
        "CID": "N00042706",
        "CRPName": "Scanlon, Mary Gay",
        "Party": "D",
        "State": "PA"
      },
      {
        "CID": "N00004724",
        "CRPName": "Schakowsky, Jan",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00028138",
        "CRPName": "Schatz, Brian",
        "Party": "D",
        "State": "HI"
      },
      {
        "CID": "N00009585",
        "CRPName": "Schiff, Adam",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00033101",
        "CRPName": "Schneider, Brad",
        "Party": "D",
        "State": "IL"
      },
      {
        "CID": "N00030071",
        "CRPName": "Schrader, Kurt",
        "Party": "D",
        "State": "OR"
      },
      {
        "CID": "N00026106",
        "CRPName": "Schultz, Debbie Wasserman",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00001093",
        "CRPName": "Schumer, Charles E",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00006460",
        "CRPName": "Schweikert, David",
        "Party": "R",
        "State": "AZ"
      },
      {
        "CID": "N00032457",
        "CRPName": "Scott, Austin",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00002147",
        "CRPName": "Scott, Bobby",
        "Party": "D",
        "State": "VA"
      },
      {
        "CID": "N00024871",
        "CRPName": "Scott, David",
        "Party": "D",
        "State": "GA"
      },
      {
        "CID": "N00031782",
        "CRPName": "Scott, Tim",
        "Party": "R",
        "State": "SC"
      },
      {
        "CID": "N00004291",
        "CRPName": "Sensenbrenner, F James Jr",
        "Party": "R",
        "State": "WI"
      },
      {
        "CID": "N00001813",
        "CRPName": "Serrano, Jose E",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00003062",
        "CRPName": "Sessions, Jeff",
        "Party": "R",
        "State": "AL"
      },
      {
        "CID": "N00005681",
        "CRPName": "Sessions, Pete",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00030622",
        "CRPName": "Sewell, Terri A",
        "Party": "D",
        "State": "AL"
      },
      {
        "CID": "N00024790",
        "CRPName": "Shaheen, Jeanne",
        "Party": "D",
        "State": "NH"
      },
      {
        "CID": "N00028091",
        "CRPName": "Shea-Porter, Carol",
        "Party": "D",
        "State": "NH"
      },
      {
        "CID": "N00009920",
        "CRPName": "Shelby, Richard C",
        "Party": "R",
        "State": "AL"
      },
      {
        "CID": "N00006897",
        "CRPName": "Sherman, Brad",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00004961",
        "CRPName": "Shimkus, John M",
        "Party": "R",
        "State": "IL"
      },
      {
        "CID": "N00013770",
        "CRPName": "Shuster, Bill",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00006263",
        "CRPName": "Simpson, Mike",
        "Party": "R",
        "State": "ID"
      },
      {
        "CID": "N00033983",
        "CRPName": "Sinema, Kyrsten",
        "Party": "D",
        "State": "AZ"
      },
      {
        "CID": "N00027523",
        "CRPName": "Sires, Albio",
        "Party": "D",
        "State": "NJ"
      },
      {
        "CID": "N00001311",
        "CRPName": "Slaughter, Louise M",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00007833",
        "CRPName": "Smith, Adam",
        "Party": "D",
        "State": "WA"
      },
      {
        "CID": "N00027623",
        "CRPName": "Smith, Adrian",
        "Party": "R",
        "State": "NE"
      },
      {
        "CID": "N00009816",
        "CRPName": "Smith, Chris",
        "Party": "R",
        "State": "NJ"
      },
      {
        "CID": "N00035282",
        "CRPName": "Smith, Jason",
        "Party": "R",
        "State": "MO"
      },
      {
        "CID": "N00001811",
        "CRPName": "Smith, Lamar",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00042353",
        "CRPName": "Smith, Tina",
        "Party": "D",
        "State": "MN"
      },
      {
        "CID": "N00038781",
        "CRPName": "Smucker, Lloyd",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00037422",
        "CRPName": "Soto, Darren",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00029649",
        "CRPName": "Speier, Jackie",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00004118",
        "CRPName": "Stabenow, Debbie",
        "Party": "D",
        "State": "MI"
      },
      {
        "CID": "N00035523",
        "CRPName": "Stefanik, Elise",
        "Party": "R",
        "State": "NY"
      },
      {
        "CID": "N00033932",
        "CRPName": "Stewart, Chris",
        "Party": "R",
        "State": "UT"
      },
      {
        "CID": "N00029574",
        "CRPName": "Stivers, Steve",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00040607",
        "CRPName": "Strange, Luther",
        "Party": "R",
        "State": "AL"
      },
      {
        "CID": "N00035774",
        "CRPName": "Sullivan, Dan",
        "Party": "R",
        "State": "AK"
      },
      {
        "CID": "N00038742",
        "CRPName": "Suozzi, Tom",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00033508",
        "CRPName": "Swalwell, Eric",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00006701",
        "CRPName": "Takano, Mark",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00031263",
        "CRPName": "Taylor, Scott",
        "Party": "R",
        "State": "VA"
      },
      {
        "CID": "N00036351",
        "CRPName": "Tenney, Claudia",
        "Party": "R",
        "State": "NY"
      },
      {
        "CID": "N00027605",
        "CRPName": "Tester, Jon",
        "Party": "D",
        "State": "MT"
      },
      {
        "CID": "N00003288",
        "CRPName": "Thompson, Bennie G",
        "Party": "D",
        "State": "MS"
      },
      {
        "CID": "N00029736",
        "CRPName": "Thompson, Glenn",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00007419",
        "CRPName": "Thompson, Mike",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00006052",
        "CRPName": "Thornberry, Mac",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00004572",
        "CRPName": "Thune, John",
        "Party": "R",
        "State": "SD"
      },
      {
        "CID": "N00009699",
        "CRPName": "Tiberi, Pat",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00035492",
        "CRPName": "Tillis, Thom",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00027509",
        "CRPName": "Tipton, Scott",
        "Party": "R",
        "State": "CO"
      },
      {
        "CID": "N00030191",
        "CRPName": "Titus, Dina",
        "Party": "D",
        "State": "NV"
      },
      {
        "CID": "N00030196",
        "CRPName": "Tonko, Paul",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00001489",
        "CRPName": "Toomey, Pat",
        "Party": "R",
        "State": "PA"
      },
      {
        "CID": "N00036107",
        "CRPName": "Torres, Norma",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00035607",
        "CRPName": "Trott, Dave",
        "Party": "R",
        "State": "MI"
      },
      {
        "CID": "N00029026",
        "CRPName": "Tsongas, Niki",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00025175",
        "CRPName": "Turner, Michael R",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00006561",
        "CRPName": "Udall, Tom",
        "Party": "D",
        "State": "NM"
      },
      {
        "CID": "N00004133",
        "CRPName": "Upton, Fred",
        "Party": "R",
        "State": "MI"
      },
      {
        "CID": "N00033367",
        "CRPName": "Valadao, David",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00013820",
        "CRPName": "Van Hollen, Chris",
        "Party": "D",
        "State": "MD"
      },
      {
        "CID": "N00007021",
        "CRPName": "Vargas, Juan",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00033839",
        "CRPName": "Veasey, Marc",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00034349",
        "CRPName": "Vela, Filemon",
        "Party": "D",
        "State": "TX"
      },
      {
        "CID": "N00001102",
        "CRPName": "Velazquez, Nydia M",
        "Party": "D",
        "State": "NY"
      },
      {
        "CID": "N00003813",
        "CRPName": "Visclosky, Pete",
        "Party": "D",
        "State": "IN"
      },
      {
        "CID": "N00033106",
        "CRPName": "Wagner, Ann L",
        "Party": "R",
        "State": "MO"
      },
      {
        "CID": "N00026368",
        "CRPName": "Walberg, Tim",
        "Party": "R",
        "State": "MI"
      },
      {
        "CID": "N00007690",
        "CRPName": "Walden, Greg",
        "Party": "R",
        "State": "OR"
      },
      {
        "CID": "N00035311",
        "CRPName": "Walker, Mark",
        "Party": "R",
        "State": "NC"
      },
      {
        "CID": "N00031226",
        "CRPName": "Walorski, Jackie",
        "Party": "R",
        "State": "IN"
      },
      {
        "CID": "N00035391",
        "CRPName": "Walters, Mimi",
        "Party": "R",
        "State": "CA"
      },
      {
        "CID": "N00027467",
        "CRPName": "Walz, Tim",
        "Party": "D",
        "State": "MN"
      },
      {
        "CID": "N00002097",
        "CRPName": "Warner, Mark",
        "Party": "D",
        "State": "VA"
      },
      {
        "CID": "N00033492",
        "CRPName": "Warren, Elizabeth",
        "Party": "D",
        "State": "MA"
      },
      {
        "CID": "N00006690",
        "CRPName": "Waters, Maxine",
        "Party": "D",
        "State": "CA"
      },
      {
        "CID": "N00033539",
        "CRPName": "Weber, Randy",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00026335",
        "CRPName": "Webster, Daniel",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00000515",
        "CRPName": "Welch, Peter",
        "Party": "D",
        "State": "VT"
      },
      {
        "CID": "N00033310",
        "CRPName": "Wenstrup, Brad",
        "Party": "R",
        "State": "OH"
      },
      {
        "CID": "N00035527",
        "CRPName": "Westerman, Bruce",
        "Party": "R",
        "State": "AR"
      },
      {
        "CID": "N00027533",
        "CRPName": "Whitehouse, Sheldon",
        "Party": "D",
        "State": "RI"
      },
      {
        "CID": "N00003280",
        "CRPName": "Wicker, Roger",
        "Party": "R",
        "State": "MS"
      },
      {
        "CID": "N00041997",
        "CRPName": "Wild, Susan",
        "Party": "D",
        "State": "PA"
      },
      {
        "CID": "N00030602",
        "CRPName": "Williams, Roger",
        "Party": "R",
        "State": "TX"
      },
      {
        "CID": "N00030650",
        "CRPName": "Wilson, Frederica",
        "Party": "D",
        "State": "FL"
      },
      {
        "CID": "N00024809",
        "CRPName": "Wilson, Joe",
        "Party": "R",
        "State": "SC"
      },
      {
        "CID": "N00029459",
        "CRPName": "Wittman, Rob",
        "Party": "R",
        "State": "VA"
      },
      {
        "CID": "N00031857",
        "CRPName": "Womack, Steve",
        "Party": "R",
        "State": "AR"
      },
      {
        "CID": "N00032416",
        "CRPName": "Woodall, Rob",
        "Party": "R",
        "State": "GA"
      },
      {
        "CID": "N00007724",
        "CRPName": "Wyden, Ron",
        "Party": "D",
        "State": "OR"
      },
      {
        "CID": "N00028073",
        "CRPName": "Yarmuth, John A",
        "Party": "D",
        "State": "KY"
      },
      {
        "CID": "N00031502",
        "CRPName": "Yoder, Kevin",
        "Party": "R",
        "State": "KS"
      },
      {
        "CID": "N00033220",
        "CRPName": "Yoho, Ted",
        "Party": "R",
        "State": "FL"
      },
      {
        "CID": "N00035509",
        "CRPName": "Young, David",
        "Party": "R",
        "State": "IA"
      },
      {
        "CID": "N00007999",
        "CRPName": "Young, Don",
        "Party": "R",
        "State": "AK"
      },
      {
        "CID": "N00030670",
        "CRPName": "Young, Todd",
        "Party": "R",
        "State": "IN"
      },
      {
        "CID": "N00029404",
        "CRPName": "Zeldin, Lee",
        "Party": "R",
        "State": "NY"
      },
      {
        "CID": "N00035616",
        "CRPName": "Zinke, Ryan K",
        "Party": "R",
        "State": "MT"
      }
    ], 
    states: ['State...', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ],
    
    cycles: ['2012', '2014', '2016', '2018', '2020'],
    selectedState: '',
    selectedCandidateCode: '',
    selectedCandidate: '',
    selectedCycle: '',
    displayedCycle: '',
    selectedIndustry: '',
    dollarAmount: '',
    selectedIndustryName: '',
    errorMessage: '',
    requestCompleted: false,
    isLoading: false,
  }

getIndustryContribs = () => {
  const url = `https://www.opensecrets.org/api/?method=candIndByInd&cid=${this.state.selectedCandidateCode}&cycle=${this.state.selectedCycle}&ind=${this.state.selectedIndustry}&output=json&apikey=d0d4a0bf9a8a46c580d807195076a953`

  this.setState({ isLoading: true })
  
  return fetch(url).then(response => {
    console.log(response);
    if(!response.ok) {
      throw new Error("No data found for these parameters, adjust your search and try again")
    } 
      response.json()
      .then(data => {
        console.log(data)
        this.setState({ selectedCandidate: data.response.candIndus['@attributes'].cand_name.split(',').reverse().join(' ')});
        this.setState({ dollarAmount: data.response.candIndus['@attributes'].total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")});
        this.setState({ selectedIndustryName: data.response.candIndus['@attributes'].industry});
        this.setState({ errorMessage: '' })
        this.setState({ requestCompleted:true });
        this.setState({ isLoading: false });
        this.setState({ displayedCycle: this.state.selectedCycle })
      })
      
    }).catch(err => {
      this.setState({ errorMessage: err.toString() });
      this.setState({ requestCompleted:true });
      this.setState({ isLoading: false });
    })
}
    
    
  

render() {
  let result;

  if (!this.state.errorMessage && this.state.requestCompleted && !this.state.isLoading) {
  result = <p>During the {this.state.displayedCycle} cycle, {this.state.selectedCandidate} received ${this.state.dollarAmount} from the {this.state.selectedIndustryName} industry</p>

  } else if (this.state.isLoading) {
    result = <Loader type="ThreeDots" color="#000000" height={80} width={80} />
  } 

  else {
  result = <p>{this.state.errorMessage}</p> 
  }

 


  return (
    <div className="App">
      <select 
        value={this.state.selectedState} 
        onChange={(e) => this.setState({selectedState: e.target.value})}>
        {this.state.states.map((state) => 
        <option key={state} value={state}>{state}</option>)}  
      </select>

      <select 
        
        onChange={(e) => this.setState({selectedCandidateCode: e.target.value})}>
          <option>Candidate...</option>
        {this.state.candidates.filter((candidate) => candidate.State === this.state.selectedState).map((candidate) => 
          <option key={candidate.CID} value={candidate.CID}>{candidate.CRPName}</option>)}
      </select>

      <select
      onChange={(e) => this.setState({selectedIndustry: e.target.value})}>
        <option>Industry...</option>
        {this.state.industries.map((industry) => 
          <option key={industry.code} value={industry.code}>{industry.industry}</option>)}
      </select>

      <select
        onChange={(e) => this.setState({selectedCycle: e.target.value})}>
          <option>Cycle...</option>
          <option>2012</option>
          <option>2014</option>
          <option>2016</option>
          <option>2018</option>
          <option>2020</option>
      </select>

    <button onClick={this.getIndustryContribs}>Get contributions</button>
        <div>{result}</div>
        
    </div>
  );
  
}
}
 

export default App;
