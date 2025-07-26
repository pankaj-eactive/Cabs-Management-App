// Copyright (c) 2025, Pankaj Patel and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	refresh(frm) {
        frm.add_custom_button("Accept",()=>{
            frappe.show_alert("It works")
        })
	},
});

frappe.ui.form.on("Ride Order Item", {
	refresh(frm) {

	},
    item(frm,cdt,cdn){
        frappe.model.set_value(cdt,cdn,"distance","1")
    },
    ride_order_item_add(frm,cdt,cdn){
        console.log("Hi")
        frappe.model.set_value(cdt,cdn,"distance","1")
    },
});

