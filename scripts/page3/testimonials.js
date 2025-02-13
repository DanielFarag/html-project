const testimonials = document.getElementById("testimonials");
const testimonialsList = [
  {
    title:
      "“I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here”",
    user: {
      avatar: "../../images/page3/avatar-1.jpg",
      title: "Personal Loan",
      name: "Donny J. Griffin",
    },
  },
  {
    title:
      "“I had a good experience with Insight Loan Services. I am thankful to insight for the help you guys gave me. My loan was easy and fast. thank you Insigtht”",
    user: {
      avatar: "../../images/page3/avatar-2.jpg",
      title: "Education Loan",
      name: "Mary O. Randle",
    },
  },

  {
    title:
      "“We came out of their offices very happy with their service. They treated us very kind. Definite will come back. The waiting time was very appropriate.”",
    user: {
      avatar: "../../images/page3/avatar-4.jpg",
      title: "Car Loan",
      name: "Lindo E. Olson",
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const content = `
        <div class = "container my-4">
            <h3 class = "title">Some of our Awesome Testimonials</h3>
            <p class = "subTitle">You won’t be the only one lorem ipsu mauris diam mattises.</p>
            <div class = "row">
                ${testimonialsList
                  .map(({ title, user }) => {
                    return ` <div class = "col-sm-12 col-md-6 col-3 testimonialsCards my-2">
                              <quote class = "quote">${title}</quote>
                                         <div class ="user row">
                                <div class = "col-3">
                                    <img src ="${user.avatar}" title = "${user.name}" alt = "${user.name}" class ="avatar" />
                                </div>
                                <div class = "col-8 userInfo">
                                    <h4>${user.title}</h4>
                                    <p>${user.name}</p>
                                </div>
                            </div>
                            </div>
                 
                        
                        `;
                  })
                  .join("")}
            </div>
        </div>
    `;

  testimonials.innerHTML = content;
});
