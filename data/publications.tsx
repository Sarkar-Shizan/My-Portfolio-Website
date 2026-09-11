export type PublicationType =
  | "Conference Paper"
  | "Springer LNNS"
  | "Journal Article"
  | "Book Chapter"
  | "Preprint"
  | "Other";

export type Publication = {
  title: string;
  publisher: string;
  year: string;
  type: PublicationType;
  description: string;
  url: string;
};

export const publications: Publication[] = [
  {
    title:
      "TrustworthyDR-Net: A Leakage-Aware and Explainable Deep Learning Framework for Reliable Diabetic Retinopathy Severity Grading",
    publisher:
      "3rd International Conference on Data Mining & Information Security (ICDMIS 2026)",
    year: "7-8 October 2026",
    type: "Springer LNNS",
    description:
      "Accepted for presentation at the 3rd International Conference on Data Mining & Information Security (ICDMIS 2026). The conference proceedings are planned for publication in Springer Lecture Notes in Networks and Systems (LNNS).",
    url: "",
  },
  {
    title:
      "HazBin: IoT-Based Smart Bin for Safe and Sustainable Waste Management",
    publisher:
      "International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII 2026)",
    year: "17-18 June 2026",
    type: "Conference Paper",
    description:
      "Conference paper presented at the International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII 2026), organized by the Faculty of Engineering and Technology, Pabna University of Science and Technology.",
    url: "https://ieeexplore.ieee.org/document/11661939",
  },
];