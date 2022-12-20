const fakedata = [
  {
    id: "001c8890a28547dc8d6b9420b9662e34",
    name: "New Concept From Simple Idea - BTS 'Lie'",
    artistId: "08a651a552ff403eb6524e16fbedb578", // 배열?
    thumbnailFileId: "e9f5182e2e2c45b38ff0c1c4778e9f65",
    language: { text: ["kor"], voice: ["eng"] },
    releasedAt: "2020-11-30T02:13:42.000Z",
    feature: ["특징1", "특징2"],
    credits: [
      {
        ability: "techinque",
        abilityLevel: "College",
        category: "Songwriter & Producer",
        abilityLevelCredit: "0",
      },
    ],
    description: {
      short: "string",
      long: "string",
    },
    detaiDescription: [
      {
        imageFileId: "",
        title: " ",
        " description": " ",
      },
    ],
    duration: "number",
    certificate: "string",
    practice: "boolean",
    userNeed: ["string"],
    assignment: {
      title: "string",
      description: "string",
      ImageFileId: ["string"],
      videoFileId: ["string"],
      assignment: [{ name: "string", description: "string" }],
    },
    syllabus: { image: ["string"], video: ["string"] },
    recommend: ["string"],
    rating: { total: "number", average: "number" },
  },
];

module.exports = fakedata;
