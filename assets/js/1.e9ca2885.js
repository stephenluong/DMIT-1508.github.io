(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{172:function(e,t,s){e.exports=s.p+"assets/img/ESP-Physical-Spec-4.b375e458.png"},173:function(e,t,s){e.exports=s.p+"assets/img/ESP-Physical-Spec-3.9d5b39aa.png"},174:function(e,t,s){e.exports=s.p+"assets/img/ESP-Physical-Spec-2.beecb18b.png"},175:function(e,t,s){e.exports=s.p+"assets/img/ESP-Physical-Spec-1.685f2816.png"},176:function(e,t,s){e.exports=s.p+"assets/img/ESP-Physical-ERD.8a64b161.png"},207:function(e,t,s){"use strict";s.r(t);var a=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"introduction-to-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-sql","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction to SQL")]),e._v(" "),a("h2",{attrs:{id:"the-esp-database-specifcations-1-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-esp-database-specifcations-1-4","aria-hidden":"true"}},[e._v("#")]),e._v(" The ESP Database (Specifcations 1 - 4)")]),e._v(" "),a("p",[a("img",{attrs:{src:s(176),alt:"Physical ERD of ESP - Specifications 1 through 4"}})]),e._v(" "),a("h3",{attrs:{id:"implementing-tables-for-spec-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-tables-for-spec-1","aria-hidden":"true"}},[e._v("#")]),e._v(" Implementing Tables for Spec 1")]),e._v(" "),a("p",[e._v("To support the first specifications document for Emergency Service and Product, four tables need to be created: Customers, Orders, InventoryItems, and OrderDetails.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(175),alt:"ESP - Spec 1 Tables"}})]),e._v(" "),a("p",[e._v("In addition to the details in the ERD, the following business rules need to be supported through constraints on the columns:")]),e._v(" "),a("ul",[a("li",[e._v("All data is required, except for the following:\n"),a("ul",[a("li",[e._v("Customers.PhoneNumber")]),e._v(" "),a("li",[e._v("InventoryItems.ItemDescription")])])]),e._v(" "),a("li",[e._v("The following must be identity columns:")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Table")]),e._v(" "),a("th",[e._v("Column")]),e._v(" "),a("th",[e._v("Initial Value")]),e._v(" "),a("th",[e._v("Increment")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Customer")]),e._v(" "),a("td",[e._v("CustomerNumber")]),e._v(" "),a("td",[e._v("100")]),e._v(" "),a("td",[e._v("1")])]),e._v(" "),a("tr",[a("td",[e._v("Orders")]),e._v(" "),a("td",[e._v("OrderNumber")]),e._v(" "),a("td",[e._v("200")]),e._v(" "),a("td",[e._v("1")])])])]),e._v(" "),a("ul",[a("li",[e._v("The following business rules must be enforced:")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Table")]),e._v(" "),a("th",[e._v("Requirement")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Customers")]),e._v(" "),a("td",[e._v("The Postal Code must follow the pattern for Canadian postal codes, without the space: "),a("code",[e._v("A#A#A#")])])]),e._v(" "),a("tr",[a("td",[e._v("Customers")]),e._v(" "),a("td",[e._v("Phone numbers must follow the pattern of "),a("code",[e._v("(###)###-####")])])]),e._v(" "),a("tr",[a("td",[e._v("Customers")]),e._v(" "),a("td",[e._v("The default province should be Alberta, and all provinces must expressed in their two-character code format. Only Candian provinces/territories are accepted.")])]),e._v(" "),a("tr",[a("td",[e._v("Orders")]),e._v(" "),a("td",[e._v("The order's subtotal must be greater than zero.")])]),e._v(" "),a("tr",[a("td",[e._v("Orders")]),e._v(" "),a("td",[e._v("The order's GST cannot be negative.")])]),e._v(" "),a("tr",[a("td",[e._v("Orders")]),e._v(" "),a("td",[e._v("The order total should be a calculated value.")])]),e._v(" "),a("tr",[a("td",[e._v("InventoryItems")]),e._v(" "),a("td",[e._v("Inventory items must have a positive, non-zero sale price")])]),e._v(" "),a("tr",[a("td",[e._v("OrderDetails")]),e._v(" "),a("td",[e._v("Order detail quantities must be greater than zero, and should default to one item.")])]),e._v(" "),a("tr",[a("td",[e._v("OrderDetails")]),e._v(" "),a("td",[e._v("The order detail selling price must not be less than zero (a sale price of zero is acceptable under some circumstances).")])]),e._v(" "),a("tr",[a("td",[e._v("OrderDetails")]),e._v(" "),a("td",[e._v("The order detail amount should be a calculated value.")])])])]),e._v(" "),a("h4",{attrs:{id:"changes-for-spec-1-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-for-spec-1-tables","aria-hidden":"true"}},[e._v("#")]),e._v(" Changes for Spec 1 Tables")]),e._v(" "),a("p",[e._v("A number of small changes have been identified for the tables in the first specifications document. These changes should be made without dropping/re-creating the tables.")]),e._v(" "),a("ul",[a("li",[e._v("Customer address information is no longer required (address, city, etc.)")]),e._v(" "),a("li",[e._v("The customer first and last name must be at least two characters in length.")]),e._v(" "),a("li",[e._v("The order data must default to the current date.")]),e._v(" "),a("li",[e._v("Inventory items require a description.")]),e._v(" "),a("li",[e._v("Customers should be searchable by first and/or last names.")])]),e._v(" "),a("h3",{attrs:{id:"implementing-tables-for-spec-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-tables-for-spec-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Implementing Tables for Spec 2")]),e._v(" "),a("p",[e._v("To implement the tables for ESP Specifications 2, we need to add two more tables: Payments and PaymentLogDetails.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(174),alt:"ESP - Spec 2 Tables"}})]),e._v(" "),a("p",[e._v("All of the columns are required columns, and the Payments.PaymentID must be a database-generated ID that starts at 1 and increments by 1. also, the PaymentType can only be 'Cash', 'Cheque' or 'Credit'. No other constraints need to be enforced at this time.")]),e._v(" "),a("h3",{attrs:{id:"implementing-tables-for-spec-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-tables-for-spec-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Implementing Tables for Spec 3")]),e._v(" "),a("p",[a("img",{attrs:{src:s(173),alt:"ESP - Spec 3 Tables"}})]),e._v(" "),a("h3",{attrs:{id:"implementing-tables-for-spec-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-tables-for-spec-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Implementing Tables for Spec 4")]),e._v(" "),a("p",[a("img",{attrs:{src:s(172),alt:"ESP - Spec 4 Tables"}})])])}],r=s(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);t.default=n.exports}}]);