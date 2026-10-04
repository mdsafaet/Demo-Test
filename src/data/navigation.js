// Header menu — structure and labels taken from novadevelopmentglobal.com.
// Items with `children` open a dropdown. `flag` = ISO code used by <Flag />.
export const contactInfo = {
  email: "enquiries@novaland.group",
  phone: "+971 4 555 0100",
  phoneHref: "tel:+97145550100",
};

export const nav = [
  {
    label: "Company",
    children: [
      { label: "Company Profile", href: "#company" },
      { label: "Chairman Message", href: "#chairman" },
      { label: "Corporate Vision & Mission", href: "#vision" },
    ],
  },
  {
    label: "Presence",
    children: [
      { label: "UAE", href: "#presence", flag: "AE" },
      { label: "Bangladesh", href: "#presence", flag: "BD" },
      { label: "USA", href: "#presence", flag: "US" },
      { label: "UK", href: "#presence", flag: "GB" },
    ],
  },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Investors", href: "#investors" },
  { label: "Newsroom", href: "#journal" },
  { label: "CSR", href: "#responsibility" },
  { label: "Contact", href: "#contact" },
];

// Footer columns — from the live site's footer.
export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Company Profile", href: "#company" },
      { label: "Chairman Message", href: "#chairman" },
      { label: "Vision & Mission", href: "#vision" },
      { label: "Brand Story", href: "#brand-story" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Global Presence", href: "#presence" },
      { label: "Investors", href: "#investors" },
      { label: "CSR Activities", href: "#responsibility" },
    ],
  },
];

export const footerLegal = ["Privacy Policy", "Terms of Use", "Disclaimer"];
