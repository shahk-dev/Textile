import card1 from '../../public/images/card1.jpg'
import card2 from '../../public/images/card2.jpg'
import card3 from '../../public/images/card3.jpg'

export const contactData = [
  {
    id: 1,
    image: card1,
    name: "This Article’s Title goes Here, but not too long.",
    date: "July 2, 2023",
    views: "24.5K",
  },
  {
    id: 2,
    image: card2,
    name: "This Article’s Title goes Here, but not too long.",
    date: "July 2, 2023",
    views: "24.5K",
  },
  {
    id: 3,
    image: card3,
    name: "This Article’s Title goes Here, but not too long.",
    date: "July 2, 2023",
    views: "24.5K",
  },
];

export const doctorsData = [
  {
    id: 1,
    name: "Doctor’s Name",
    image: "/images/card1.jpg",
    job: "Neurology",
  },
  {
    id: 2,
    name: "Doctor’s Name",
    image: "/images/card2.jpg",
    job: "Neurology",
  },
  {
    id: 3,
    name: "Doctor’s Name",
    image: "/images/card3.jpg",
    job: "Neurology",
  },
  {
    id: 4,
    name: "Doctor’s Name",
    image: "/images/card1.jpg",
    job: "Neurology",
  },
];

export const services = [
  {
    id: 1,
    image: "/images/serviceImg.png",
    name: "Free Checkup",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
  {
    id: 2,
    image: "/images/serviceImg.png",
    name: "Free Checkup",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
  {
    id: 3,
    image: "/images/serviceImg.png",
    name: "Free Checkup",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
  {
    id: 4,
    image: "/images/serviceImg.png",
    name: "Free Checkup",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
  {
    id: 5,
    image: "/images/serviceImg.png",
    name: "Free Checkup",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
];

export const navItems = [
  { name: "home", url: "/" },
  { name: "about", url: "/about" },
  { name: "news", url: "/news"},
  { name: "contact", url: "/contact" },
];

// interfaces
export interface Department {
    id: number;
    name: string;
    name_ru: string;
}

export interface Employee {
    id: number;
    full_name: string;
    full_name_ru: string;
    about: string;
    about_ru: string;
    experience: number;
    departments: Department[];
    image: string;
}

export interface EmployeesResponse {
    items: Employee[];
    count: number;
}
