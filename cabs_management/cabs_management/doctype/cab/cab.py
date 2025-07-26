# Copyright (c) 2025, Pankaj Patel and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator


class Cab(WebsiteGenerator):
	pass
	
	def before_save(self):
		self.title = f"{self.make}{self.model}"