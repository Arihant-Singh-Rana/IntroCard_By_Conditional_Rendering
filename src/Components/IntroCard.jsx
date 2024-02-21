import React from "react";
import "./IntroCard.css";
export default function IntroCard(input) {
  let data = [
    {
      Profile:
        "https://m.economictimes.com/thumb/msid-97021979,width-1200,height-900,resizemode-4,imgsize-46928/modi-new-pti1.jpg",
      name: "Narendra Damodardas Modi",
      Age: 72,
      Phone: "9817******",
      Profession: "Prime Minister Of India",
    },
    {
      Profile:
        "https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?w=1536",
      name: "Joe Biden",
      Age: 81,
      Phone: "1147******",
      Profession: "President Of USA",
    },
    {
      Profile:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1447370162.jpg?crop=1xw:1.0xh;center,top&resize=1200:*",
      name: "Rishi Sunak",
      Age: 43,
      Phone: "5446******",
      Profession: "Prime Minister Of UK",
    },
    {
      Profile:
        "https://www.alp.org.au/media/3177/wa-senate-sue-lines.png?anchor=center&mode=crop&width=1200&height=630&rnd=133304912390000000",
      name: "Sue Lines",
      Age: 70,
      Phone: "6967******",
      Profession: "President of Australia",
    },
    {
      Profile:
        "https://bloggertastic.com/wp-content/uploads/2023/10/giorgia-meloni-w1.jpg",
      name: "Giorgia Meloni",
      Age: 47,
      Phone: "3567******",
      Profession: "President of Australia",
    },
  ];
  for (let i = 0; i < data.length; i++) {
    let s = data[i].name.toLowerCase();
    if (s.includes(input.Name.toLowerCase())) {
      var name = data[i].name;
      var profile = data[i].Profile;
      var age = data[i].Age;
      var number = data[i].Phone;
      var Profession = data[i].Profession;
      break;
    }
  }
  return (
    <div className="Parent">
      <div className="card">
        <img src={profile} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title">
            <b>{name}</b>
          </h1>
          <h2>Age : {age}</h2>
          <h2>Phone : {number}</h2>
          <h2>Profession : {Profession}</h2>
        </div>
      </div>
    </div>
  );
}
