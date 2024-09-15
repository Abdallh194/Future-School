//About conontent
//icons
import { IoFastFoodSharp } from "react-icons/io5";
import { MdOutlineSportsHandball, MdLanguage } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
export const Data = [
  {
    id: 1,
    icon: IoFastFoodSharp,
    desc: "تزيد التركيز والاستيعاب؛ مما يحسن التحصيل الدراسي. تمد الجسم بالطاقة اللازمة للنشاط البدني. تساعد على الحفاظ على وزن صحي",
    name: "طعام صحي",
    className: "AboutCard GoldCard",
  },
  {
    id: 2,
    icon: MdOutlineSportsHandball,
    desc: "يجب أن تكون الرياضة جزءًا رئيسيًا من المناهج الدراسية، لأنها تساهم تعزيز صحة الطلاب الجسدية والذهنية، وبالتالي، يمكنهم بسهولة التركيز على دراساتهم",
    name: "رياضات متنوعة",
    className: "AboutCard BlueCard",
  },
  {
    id: 3,
    icon: MdLanguage,
    desc: "تساعد الطالب على الانفتاح على الثقافات والعوالم المختلفة. تمنح الدارس القدرة على التفكير النقدي والإبداع من خلال مقارنة اللغات وتركيباتها",
    name: "لغات عالمية",
    className: "AboutCard GoldCard",
  },
  {
    id: 4,
    icon: FaMusic,
    desc: "تبين أن الموسيقى تساهم في تحسين فهم الطلاب للمفاهيم الفنية وتعزز قدراتهم في التعبير الإبداعي والتفكير الابتكاري",
    name: "تعليم موسيقي",
    className: "AboutCard BlueCard",
  },
];

//schoolLife component
import { FaClock } from "react-icons/fa6";
export const SchoolLifeData = [
  {
    id: 1,
    imgsrc: "/event1.jpg",
    name: " وقت الحديقة",
    desc: "    كل يوم من 9 ص حتي 10 ص",
    info: "يمكن للطلاب قراءة كتب الطبخ و كتب التاريخ بالحدائق ، وحتى إنشاء كتب وصفات خاصة بهم من تجارب الطهي في حديقتهم لتعزيز مهارات القراءة والكتابة",
    icon: FaClock,
    className: "SchoolLifeCard",
    classNameDetails: "SchoolLifeDetails GreenCard",
  },
  {
    id: 2,
    imgsrc: "/event2.jpg",
    name: "  حصص المهام المنزلية",
    desc: "    كل يوم من 9 ص حتي 10 ص",
    info: "يمكن للطلاب قراءة كتب الطبخ و كتب التاريخ بالحدائق ، وحتى إنشاء كتب وصفات خاصة بهم من تجارب الطهي في حديقتهم لتعزيز مهارات القراءة والكتابة",
    icon: FaClock,
    className: "SchoolLifeCard",
    classNameDetails: "SchoolLifeDetails AquaCard",
  },
  {
    id: 3,
    imgsrc: "/event3.jpg",
    name: "  حصص  الرسم",
    desc: "    كل يوم من 9 ص حتي 10 ص",
    info: "يمكن للطلاب قراءة كتب الطبخ و كتب التاريخ بالحدائق ، وحتى إنشاء كتب وصفات خاصة بهم من تجارب الطهي في حديقتهم لتعزيز مهارات القراءة والكتابة",
    icon: FaClock,
    className: "SchoolLifeCard",
    classNameDetails: "SchoolLifeDetails RedCard",
  },
  {
    id: 4,
    imgsrc: "/event4.jpg",
    name: "  حصص اللاعاب",
    desc: "    كل يوم من 9 ص حتي 10 ص",
    info: "يمكن للطلاب قراءة كتب الطبخ و كتب التاريخ بالحدائق ، وحتى إنشاء كتب وصفات خاصة بهم من تجارب الطهي في حديقتهم لتعزيز مهارات القراءة والكتابة",
    icon: FaClock,
    className: "SchoolLifeCard",
    classNameDetails: "SchoolLifeDetails GoldCard",
  },
];

//Service components
export const Teachers = [
  {
    id: 1,
    name: "الاستاذ / احمد ربيع",
    imgsrc: "team-1.jpg",
    dep: "معلم لغة عربية",
  },
  {
    id: 2,
    name: "الاستاذة /  أسماء علي",
    imgsrc: "team-2.jpg",
    dep: "معلمة ماث",
  },
  {
    id: 3,
    name: "الاستاذ /  محمد يونس",
    imgsrc: "team-3.jpg",
    dep: "معلم الموسيقي ",
  },
  {
    id: 4,
    name: "الاستاذة / سناء ياسر",
    imgsrc: "team-4.jpg",
    dep: "معلم لغة إنجليزية",
  },
];
