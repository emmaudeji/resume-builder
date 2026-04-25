// src/data/contactInfo.ts

// ✅ Type definitions
export interface OfficeHour {
  id: number
  day: string
  time: string
}

export interface Contact {
  id: number
  address: string
  city: string
  phone1: number | string
  phone2?: number | string
  email: string
  position: [number, number]
}

// ✅ Data constants
export const officeHours: OfficeHour[] = [
  { id: 0, day: "Monday", time: "8am - 5pm" },
  { id: 1, day: "Tuesday", time: "8am - 5pm" },
  { id: 2, day: "Wednesday", time: "8am - 5pm" },
  { id: 3, day: "Thursday", time: "8am - 5pm" },
  { id: 4, day: "Friday", time: "8am - 5pm" },
  { id: 5, day: "Saturday", time: "10am - 2pm" },
]

export const contact = {
  phone: "+2349069336691",
  email: "contact@allschoolsupdate.com",
  emailSupport: "support@allschoolsupdate.com",
  address: "30 ADEPEJU STREET, OFF WEMA BANK, BARIGA, LAGOS, NIGERIA",
  facebook: "https://facebook.com/allschoolsupdate",
  instagram: "https://instagram.com/allschoolsupdate",
  linkedin: "https://linkedin.com/company/allschoolsupdate",
  twitter: "https://twitter.com/allschoolsupdate",
  baseUrl: "https://www.allschoolsupdate.org",
  whatsappLink: "https://wa.me/2349069336691",
  whatsappNumber: '2349069336691',
    whatsappShareFunction: (encodedText:string) => `https://api.whatsapp.com/send?phone=2349069336691&text=${encodedText}`,
  whatsappMessageLinkSupport:
    "https://wa.me/2349069336691?text=Hello%20Support%20Team%2C%20I%20need%20assistance%20with%20my%20Jobbrekete%20account.%20Please%20help%20me%20resolve%20this.",
  whatsappMessageLinkEnquiry:
    "https://wa.me/2349069336691?text=Hello%20Jobbrekete%20Team%2C%20I%27d%20like%20to%20learn%20more%about%20yor%20 ",
};

