(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(e,i,t){},196:function(e,i,t){"use strict";var r=t(169);t.n(r).a},197:function(e,i,t){e.exports=t.p+"assets/img/ESP-6-Driver-Details-View.90181f44.png"},210:function(e,i,t){"use strict";t.r(i);var r=[function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"esp-part-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esp-part-6","aria-hidden":"true"}},[e._v("#")]),e._v(" ESP - Part 6")]),e._v(" "),r("h2",{attrs:{id:"pickup-driver-details-view"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pickup-driver-details-view","aria-hidden":"true"}},[e._v("#")]),e._v(" Pickup Driver Details View")]),e._v(" "),r("p",[e._v("ESP has two employees in the city who do local parts pickup from their suppliers and receiving at the end of the day. Each driver covers a different area of the city, and they begin the morning by dividing the pickups and summarizing their pickup sheets. By mid-morning, they head out to do their pickups and they return by mid-afternoon, at which time they check in their pickup sheets and stock the shelves.")]),e._v(" "),r("p",[e._v("The following is a sample pickup sheet for one of the drivers.")]),e._v(" "),r("p",[r("img",{attrs:{src:t(197),alt:"Driver Details View"}})]),e._v(" "),r("h3",{attrs:{id:"analysis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#analysis","aria-hidden":"true"}},[e._v("#")]),e._v(" Analysis")]),e._v(" "),r("p",[e._v("0NF – Identify Meta-data"),r("br"),e._v(" "),r("strong",[e._v("PickupSheet")]),e._v(" (PickupSheetId†, DriverId‡, DriverFirstName, DriverLastName, Date {SupplierId, SupplierName, Address {PurchaseOrderNumber, {ItemNumber, Quantity, PickupQuantity}}})")]),e._v(" "),r("p",[e._v("Notes:"),r("br"),e._v("\n† - PickupSheetId is a technical key that was introduced in 0NF to uniquely identify each pickup sheet."),r("br"),e._v("\n‡ - DriverId is a technical key that was introduced in 3rd Normal Form and “back-filled” to 0NF.")]),e._v(" "),r("p",[e._v("1NF – Remove Repeating Groups"),r("br"),e._v(" "),r("strong",[e._v("PickupSheet")]),e._v(" (PickupSheetId, DriverId, DriverFirstName, DriverLastName, Date)")]),e._v(" "),r("p",[r("strong",[e._v("PickupLocation")]),e._v(" (PickupSheetId, SupplierId, SupplierName, Address)")]),e._v(" "),r("p",[r("strong",[e._v("PickupOrder")]),e._v(" (PickupSheetId†, SupplierId, PurchaseOrderNumber,)")]),e._v(" "),r("p",[r("strong",[e._v("PickupItem")]),e._v(" (PickupSheetId†, SupplierId, PurchaseOrderNumber, ItemNumber, Quantity, PickupQuantity)")]),e._v(" "),r("p",[e._v("2NF – Identify Partial Dependencies"),r("br"),e._v(" "),r("strong",[e._v("PickupLocation")]),e._v(" (PickupSheetId, SupplierId)")]),e._v(" "),r("p",[r("strong",[e._v("Supplier")]),e._v(" (SupplierId, SupplierName, Address)")]),e._v(" "),r("p",[e._v("3NF – Identify Transitive Dependencies"),r("br"),e._v(" "),r("strong",[e._v("PickupSheet")]),e._v(" (PickupSheetId, DriverId‡, Date)")]),e._v(" "),r("p",[e._v("Driver (DriverId‡, DriverFirstName, DriverLastName)")]),e._v(" "),r("hr")])}],a=(t(196),t(0)),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);i.default=s.exports}}]);