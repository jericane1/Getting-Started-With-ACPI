(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{451:function(t,e,a){"use strict";a.r(e);var r=a(25),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"what-ssdts-do-each-platform-need"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-ssdts-do-each-platform-need"}},[t._v("#")]),t._v(" What SSDTs do each platform need")]),t._v(" "),a("p",[t._v("Please see the "),a("strong",[t._v("specific ACPI section of your config.plist")]),t._v(", all SSDTs needed are covered there with a brief explainer. But here's a very quick TL;DR:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#what-ssdts-do-each-platform-need"}},[t._v("What SSDTs do each platform need")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#desktop"}},[t._v("Desktop")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#laptop"}},[t._v("Laptop")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#ssdt-creation"}},[t._v("SSDT Creation")])])])])]),t._v(" "),a("h2",{attrs:{id:"desktop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desktop"}},[t._v("#")]),t._v(" Desktop")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Platforms")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("CPU")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("EC")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("AWAC")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("NVRAM")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("USB")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SandyBridge")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[a("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management",target:"_blank",rel:"noopener noreferrer"}},[t._v("CPU-PM"),a("OutboundLink")],1),t._v(" (Run in Post-Install)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("RouterLink",{attrs:{to:"/Universal/ec-fix.html"}},[t._v("SSDT-EC")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Ivy Bridge")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"5"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"5"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[t._v("N/A")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Haswell")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[a("a",{attrs:{href:"/Universal/plug"}},[t._v("SSDT-PLUG")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Broadwell")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Skylake")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[a("RouterLink",{attrs:{to:"/Universal/ec-fix.html"}},[t._v("SSDT-EC-USBX")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Kaby Lake")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Coffee Lake")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[a("a",{attrs:{href:"/Universal/awac"}},[t._v("SSDT-AWAC")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"/Universal/nvram"}},[t._v("SSDT-PMC")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Comet Lake")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"/Universal/rhub"}},[t._v("SSDT-RHUB")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("AMD (15/16h)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("AMD (17h)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-CPUR.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-CPUR for B550"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")])])])]),t._v(" "),a("h2",{attrs:{id:"high-end-desktop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#high-end-desktop"}},[t._v("#")]),t._v(" High End Desktop")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Platforms")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("CPU")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("EC")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("AWAC")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Nehalem and Westmere")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[a("RouterLink",{attrs:{to:"/Universal/ec-fix.html"}},[t._v("SSDT-EC")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[t._v("N/A")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Ivy Bridge-E")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("a",{attrs:{href:"/Universal/plug"}},[t._v("SSDT-PLUG")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Haswell-E")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3"}},[a("RouterLink",{attrs:{to:"/Universal/ec-fix.html"}},[t._v("SSDT-EC-USBX")])],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Broadwell-E")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Skylake-X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"/Universal/awac"}},[t._v("SSDT-AWAC")])])])])]),t._v(" "),a("h2",{attrs:{id:"laptop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#laptop"}},[t._v("#")]),t._v(" Laptop")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Platforms")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("CPU")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("EC")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Backlight")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("I2C Trackpad")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("AWAC")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("USB")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("IRQ")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SandyBridge")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[a("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management",target:"_blank",rel:"noopener noreferrer"}},[t._v("CPU-PM"),a("OutboundLink")],1),t._v(" (Run in Post-Install)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("RouterLink",{attrs:{to:"/Universal/ec-fix.html"}},[t._v("SSDT-EC")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[a("a",{attrs:{href:"/Laptops/backlight"}},[t._v("SSDT-PNLF")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"7"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"9"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("a",{attrs:{href:"/Universal/irq"}},[t._v("IRQ SSDT")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Ivy Bridge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Haswell")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"8"}},[a("a",{attrs:{href:"/Universal/plug"}},[t._v("SSDT-PLUG")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"8"}},[a("a",{attrs:{href:"/Laptops/trackpad"}},[t._v("SSDT-GPI0")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Broadwell")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Skylake")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[a("RouterLink",{attrs:{to:"/Universal/ec-fix.html"}},[t._v("SSDT-EC-USBX")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[t._v("N/A")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Kaby Lake")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Coffee Lake (8th Gen) and Whiskey Lake")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("a",{attrs:{href:"/Laptops/backlight"}},[t._v("SSDT-PNLF-CFL")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Coffee Lake (9th Gen)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3"}},[a("a",{attrs:{href:"/Universal/awac"}},[t._v("SSDT-AWAC")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Comet Lake")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Ice Lake")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"/Universal/rhub"}},[t._v("SSDT-RHUB")])])])])]),t._v(" "),a("p",[t._v("Continuing:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Platforms")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("NVRAM")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("IMEI")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Sandy Bridge")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"7"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[a("a",{attrs:{href:"/Universal/imei"}},[t._v("SSDT-IMEI")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Ivy Bridge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Haswell")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"8"}},[t._v("N/A")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Broadwell")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Skylake")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Kaby Lake")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Coffee Lake (8th Gen) and Whiskey Lake")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Coffee Lake (9th Gen)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"/Universal/nvram"}},[t._v("SSDT-PMC")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Comet Lake")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[t._v("N/A")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Ice Lake")])])])]),t._v(" "),a("h2",{attrs:{id:"ssdt-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssdt-creation"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/ssdt-methods/ssdt-methods.html"}},[t._v("SSDT Creation")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);